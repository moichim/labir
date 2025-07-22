import { Instance, ThermalFileFailure } from "@labir/core";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";
import { customElement, property, state } from "lit/decorators.js";
import { nothing, PropertyValues } from "lit";
import { FileInfo } from "@labir/server";

@customElement("file-analysis-restore-button")
export class FileAnalysisRestoreButton extends AbstractFileAnalysisButton {

    public label = "Obnovit analýzy";

    @state()
    protected localAnalyses: string[] = [];

    @state()
    protected hasChanged: boolean = false;

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void;


    public onInstanceCreated(instance: Instance): void {

        if (instance) {

            // Perform the initial control
            this.onSomethingChanged();

            // Turn the analysis on
            if (instance.group.analysisSync.value === false) {
                instance.group.analysisSync.turnOn(instance);
            }


            // Whenever an analysis is added, control
            instance.analysis.layers.onAdd.set(this.UUID, (analysis) => {

                this.onSomethingChanged();

                // Whenever an analysis is changed, control
                analysis.onSerializableChange.set(this.UUID, () => {

                    this.onSomethingChanged();

                });
            });

            // Whenever an analysis is deleted, control
            instance.analysis.layers.onRemove.set(this.UUID, () => {
                this.onSomethingChanged();
            });


        } else {
            this.log("Soubor neexistuje!");
        }
    }



    protected onClick = async (file: Instance) => {

        console.log("click", file, this.info.analyses);

        if ( 
            this.info 
            && this.info.analyses 
        ) {

            // Remove all analyses from the instance
            this.file?.analysis.value.forEach((analysis) => {
                file.analysis.layers.removeAnalysis(analysis.key);
            });

            // Create new analyses from the file info
            this.info.analyses.forEach((analysis, slot) => {
                file.slots.createFromSerialized( analysis, slot );
            });

            // Select all layers after restoring
            file.analysis.layers.selectAll();

        }
    }


    public onFailure(): void { }



    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        // Whenever the global analyses changes, perform the check
        if ( "file" in _changedProperties && this.file ) {

            this.onSomethingChanged();

        }

    }


    /** A function that is called whenever something changes. */
    protected onSomethingChanged(): void {

        if (this.file) {

            // Get the current state from the instance
            this.localAnalyses = this.getCurrentAnalysisState(this.file);

            // Check if has changed
            const hasChanged = this.compareChanges(
                this.info.analyses,
                this.localAnalyses
            );

            this.log( "Control said " + (hasChanged ? "changed" : "not changed") );

            if (hasChanged !== this.hasChanged) {
                this.hasChanged = hasChanged;
            }

            this.requestUpdate();

        }

    }


    /** 
     * Get the current analyses state from the instance 
     */
    protected getCurrentAnalysisState(instance: Instance): string[] {

        if (
            !instance.analysis
            || !instance.group
            || !instance.group.analysisSync
        )
            return [] as string[];

        const analyses: string[] = [];

        instance.slots.forEveryExistingSlot((slot) => {

            // analyses.push( slot.serialized );

        })

        instance.analysis.layers.forEach((layer) => {

            analyses.push(layer.toSerialized());

        });

        return analyses;

    }


    /**
     * Compare the analysis state and detect if the state is different
     */
    protected compareChanges(
        file: string[],
        local: string[]
    ): boolean {

        let changed = false;

        if (file.length !== local.length) {
            changed = true;
        } else {

            file.forEach((fileAnalysis, index) => {

                const localAnalysis = local[index];

                if (!changed && fileAnalysis !== localAnalysis) {
                    changed = true;
                }

            });

        }

        return changed;

    }

    protected render(): unknown {

        if (!this.hasChanged) {
            return nothing;
        }

        return super.render();
    }

}