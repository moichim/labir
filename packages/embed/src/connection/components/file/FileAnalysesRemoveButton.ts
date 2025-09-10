import { Instance, ThermalFileFailure } from "@labir/core";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";
import { customElement, property, state } from "lit/decorators.js";
import { css, nothing, PropertyValues } from "lit";
import { FileInfo } from "@labir/server";

@customElement( "file-analysis-remove-button" )
export class FileAnalysisRemoveButton extends AbstractFileAnalysisButton {

    icon = "trash";
    iconStyle = "micro";

    tooltip = "Odstranit všechny analýzy ze zobrazení (ne však na serveru).";

    @state()
    protected num: number = 0;

    @property({type: Function})
    public onChange?: (file: FileInfo) => void;


    public onInstanceCreated(instance: Instance): void {

        if ( instance ) {

            // Try using the analysis object directly
            if (instance.analysis) {

                instance.group.analysisSync.turnOn( instance );

                instance.analysis.layers.onRemove.set( this.UUID, () => {
                    this.num = instance.analysis?.layers.size ?? 0;
                } );


                instance.analysis.layers.onAdd.set( this.UUID, () => {

                    this.num = instance.analysis?.layers.size ?? 0;

                } );

                instance.analysis.layers.onRemove.set( this.UUID, () => {
                    this.num = instance.analysis?.layers.size ?? 0;
                } );
            
            }


        } else {
            this.log( "Soubor neexistuje!" );
        }
    }


    protected onClick = async (file: Instance) => {

        

        if ( this.file ) {

            this.file.analysis.value.forEach( value => {
                this.file?.analysis.layers.removeAnalysis( value.key );
            } );

        }
    }


    public onFailure(error: ThermalFileFailure): void {
        
    }

    

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        this.disabled = this.num === 0;

    }


    static styles = css`
        
            :host {
                
                display: flex;
                align-items: stretch;
                
            }
        
        `;

    protected render(): unknown {

        return super.render();
    }
    
}