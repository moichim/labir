import { Instance, ThermalFileFailure } from "@labir/core";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";
import { customElement, property, state } from "lit/decorators.js";
import { nothing, PropertyValues } from "lit";
import { FileInfo } from "@labir/server";

@customElement( "file-analysis-store-button" )
export class FileAnalysisStoreButton extends AbstractFileAnalysisButton {

    public label = "Uložit analýzy";


    @state()
    protected analyses: string[] = [];

    @state()
    protected hasChanged: boolean = false;

    @state()
    protected isShown: boolean = false;

    @state()
    protected isInitialised: boolean = false;

    @property({type: Function})
    public onChange?: (file: FileInfo) => void;


    public onInstanceCreated(instance: Instance): void {

        if ( instance ) {

            // Try using the analysis object directly
            if (instance.analysis) {

                instance.group.analysisSync.turnOn( instance );

                instance.analysis.layers.onRemove.set( this.UUID, () => {
                    this.hasChanged = true;
                    this.getCurrentAnalysisState( instance );
                } );


                instance.analysis.layers.onAdd.set( this.UUID, (analysis) => {

                    this.hasChanged = true;
                    this.getCurrentAnalysisState( instance );

                    analysis.onSerializableChange.set( this.UUID, () => {

                        this.hasChanged = true;
                        this.getCurrentAnalysisState( instance );

                    } );
                } );

                instance.analysis.layers.onRemove.set( this.UUID, () => {
                    this.hasChanged = true;
                    this.getCurrentAnalysisState( instance );
                } );

                setTimeout( () => {
                    this.hasChanged = false;
                    this.isInitialised = true;
                }, 0 );
            
            }


        } else {
            this.log( "Soubor neexistuje!" );
        }
    }

    protected getCurrentAnalysisState(instance: Instance) {

        if (!instance.analysis) return null;

        if (!instance.group.analysisSync) return null;

        const analyses: string[] = [];


        instance.analysis.layers.forEach( ( layer, number ) => {

            analyses.push(layer.toSerialized());

        } );

        this.analyses = analyses;
        this.requestUpdate();

    }

    protected onClick = async (file: Instance) => {

        if ( this.client  ) {

            const request = this.client.routes.post.updateFile(
                this.info.path,
                this.info.fileName
            );

            request.clearAnalyses();

            if ( this.analyses.length === 0 ) {
                request.clearAnalyses();
            } else {
                this.analyses.forEach( item =>
                    request.addAnalysis(item)
                 );
            }

            const result = await request.execute();

            if ( result.success ) {
                this.hasChanged = false;
                this.onChange?.(result.data.file);
            }

            console.log( result );

        }

        if ( this.file ) {
            // Get current analysis state when clicke
        }
    }


    public onFailure(error: ThermalFileFailure): void {
        
    }

    

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (this.hasChanged) {
            this.variant = "primary";
        } else {
            this.variant = "default";
        }


        if ( this.hasUpdated && this.analyses.length === 0 && this.isInitialised ) {
            this.isShown = true;
            this.label = "Smazat analýzy na serveru";
        } else if ( this.isInitialised ) {
            this.label = "Uložit analýzy";
            if ( this.analyses.length === 0 ) {
                this.isShown = false;
            } else {
                this.isShown = true;
            }
        }

    }

    protected render(): unknown {

        if ( !this.isShown  ) {
            return nothing;
        }

        return super.render();
    }
    
}