import { Instance, ThermalFileFailure } from "@labir/core";
import { FileInfo } from "@labir/server";
import { PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";

@customElement( "file-analysis-store-button" )
export class FileAnalysisStoreButton extends AbstractFileAnalysisButton {

    public label = "";

    tooltip = "Uložit analýzy na server.";

    public icon = "save";
    public iconStyle = "micro";


    @state()
    protected analyses: string[] = [];

    @state()
    protected hasChanged: boolean = false;

    @property({type: Function})
    public onChange?: (file: FileInfo) => void;

    connectedCallback(): void {
        super.connectedCallback();
        if (this.file) {
            this.onInstanceCreated( this.file );
        }
    }


    public onInstanceCreated(instance: Instance): void {

        if ( instance ) {

            // Try using the analysis object directly
            if (instance.analysis) {

                this.getCurrentAnalysisState( instance );

                const listener = () => {
                    this.hasChanged = true;
                    this.getCurrentAnalysisState( instance );
                }

                instance.analysis.layers.onAnySerializableChange.set( this.UUID, listener.bind( this ) );
            
            }


        } else {
            this.log( "Soubor neexistuje!" );
        }
    }

    protected getCurrentAnalysisState(instance: Instance): string[] {

        const analyses: string[] = [];

        instance.analysis.value.forEach( analysis => {
            analyses.push( analysis.toSerialized() );
        } );

        this.analyses = analyses;
        this.requestUpdate();

        return analyses;

    }

    protected onClick = async () => {

        // Do nothing if not changed
        if ( this.hasChanged === false ) {
            return;
        }

        if ( this.client ) {

            const request = this.client.routes.post.updateFile(
                this.info.path,
                this.info.fileName
            );

            request.clearAnalyses();

            const analyses = this.getCurrentAnalysisState( this.file! );

            if ( analyses.length === 0 ) {
                request.clearAnalyses();
            } else {
                analyses.forEach( item =>
                    request.addAnalysis(item)
                 );
            }

            const result = await request.execute();

            if ( result.success ) {
                this.hasChanged = false;
                this.onChange?.(result.data.file);
            }
        }
    }


    public onFailure(error: ThermalFileFailure): void {
        
    }

    

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (this.hasChanged === true) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }

    }
    
}