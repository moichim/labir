import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";
import { customElement, property, state } from "lit/decorators.js";
import { css, nothing, PropertyValues } from "lit";
import { FileInfo } from "@labirthermal/server";

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

                // instance.group.analysisSync.turnOn( instance );

                instance.analysis.layers.onAnySerializableChange.set( this.UUID, () => {
                    this.num = instance.analysis.layers.size;
                    this.disabled = this.num === 0;
                } );
            
            }


        } else {
            this.log( "Soubor neexistuje!" );
        }
    }


    protected onClick = async () => {

        if ( this.file ) {
            this.file.analysis.layers.removeAllAnalyses();
        }
    }


    public onFailure(error: ThermalFileFailure): void {
        
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