import { AbstractAnalysis, AbstractAreaAnalysis } from "@labir/core";
import { css, html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../../hierarchy/BaseElement";
import { t } from "i18next";
import { T } from "../../../../translations/Languages";

@customElement("edit-area")
export class AreaEdit extends BaseElement {

    @property()
    public analysis!: AbstractAreaAnalysis;

    @state()
    protected color?: string;

    @state()
    protected top?: number;

    @state()
    protected left?: number;

    @state()
    protected width?: number;

    @state()
    protected height?: number;

    @state()
    protected type?: string;

    @state()
    protected right?: number;

    @state()
    protected bottom?: number;

    @state()
    protected maxX?: number;

    @state()
    protected maxY?: number;



    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( _changedProperties.has( "analysis" ) ) {

            const oldAnalysis = _changedProperties.get( "analysis" ) as AbstractAnalysis;

            if ( oldAnalysis ) {
                oldAnalysis.onSerializableChange.delete( this.UUID );
            }

            const newAnalysis = this.analysis;

            this.top = newAnalysis.top;
            this.left = newAnalysis.left;
            this.width = newAnalysis.width;
            this.height = newAnalysis.height;
            this.right = newAnalysis.left + newAnalysis.width;
            this.bottom = newAnalysis.top + newAnalysis.height;
            this.maxX = newAnalysis.file.width;
            this.maxY = newAnalysis.file.height;



            newAnalysis.onSerializableChange.set(this.UUID, (analysis) => {
                this.top = analysis.top;
                this.left = analysis.left;
                this.width = analysis.width;
                this.height = analysis.height;
                this.right = analysis.left + analysis.width;
                this.bottom = analysis.top + analysis.height;
            });            

        }
    }

    protected handleInput( event: InputEvent, callback: (value: number) => void ) { 

        const target = event.target as HTMLInputElement;

        const value = parseInt( target.value );

        if ( ! isNaN( value ) ) {
            callback( value );
            this.analysis.onMoveOrResize.call( this.analysis );
        }


    }


    public static styles = css`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;

    protected render() {
        return html`

            <div class="table">

                <thermal-field label=${t(T.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${t(T.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${t(T.left)}>
                    <input 
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.right !== undefined ? this.right - 1 : this.maxX}
                        @change=${ (event: InputEvent) => this.handleInput( event, value => { this.analysis.setLeft( value )} ) }
                    />
                </thermal-field>

                <thermal-field label=${t(T.right)}>
                    <input 
                        name="right" 
                        value=${this.right} 
                        type="number" 
                        step="1" 
                        min=${this.left !== undefined ? this.left + 1 : 0} 
                        max=${ this.maxX}
                        @change=${ (event: InputEvent) => this.handleInput( event, value => { this.analysis.setRight( value )} ) }
                    />
                </thermal-field>

                <thermal-field label=${t(T.top)}>
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0"
                        max=${ this.bottom !== undefined ? this.bottom - 1 : this.maxY}
                        @change=${ (event: InputEvent) => this.handleInput( event, value => { this.analysis.setTop( value )} ) }
                    />
                </thermal-field>

                <thermal-field label=${t(T.bottom)}>
                    <input 
                        name="bottom" 
                        value=${this.bottom} 
                        type="number" 
                        step="1" 
                        min=${this.top !== undefined ? this.top + 1 : 0 }
                        max=${this.maxY}
                        @change=${ (event: InputEvent) => this.handleInput( event, value => { this.analysis.setBottom( value )} ) }
                    />
                </thermal-field>
                

            </div>
    
        
        `;
    }

}