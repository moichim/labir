import { Instance, ThermalFileFailure } from "@labir/core";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";
import { customElement, property, state } from "lit/decorators.js";
import { nothing, PropertyValues } from "lit";
import { FileInfo } from "@labir/server";

@customElement("file-analysis-restore-button")
export class FileAnalysisRestoreButton extends AbstractFileAnalysisButton {

    public label = "";

    icon = "restore";
    public iconStyle = "outline";

    tooltip = "Načíst analýzy uložené na serveru";

    @state()
    protected localAnalyses: string[] = [];

    @state()
    protected hasChanged: boolean = false;

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void;


    public onInstanceCreated(instance: Instance): void {

        if (instance) {

            // Turn the analysis on
            if (instance.group.analysisSync.value === false) {
                instance.group.analysisSync.turnOn(instance);
            }


        } else {
            this.log("Soubor neexistuje!");
        }
    }



    protected onClick = async (file: Instance) => {

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


}