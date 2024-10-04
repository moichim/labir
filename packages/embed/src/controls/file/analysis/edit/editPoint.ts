import { AbstractAnalysis, PointAnalysis } from "@labir/core";
import { css, html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, Ref } from "lit/directives/ref.js";
import { BaseElement } from "../../../../hierarchy/BaseElement";

@customElement("edit-point")
export class EditPoint extends BaseElement {

    @property()
    public analysis!: PointAnalysis;

    @state()
    protected top?: number;

    @state()
    protected left?: number;

    @state()
    protected maxX!: number;

    @state()
    protected maxY!: number;

    topInputRef: Ref<HTMLInputElement> = createRef();
    leftInputRef: Ref<HTMLInputElement> = createRef();




    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( _changedProperties.has( "analysis" ) ) {

            const oldAnalysis = _changedProperties.get( "analysis" ) as AbstractAnalysis;

            if ( oldAnalysis ) {
                oldAnalysis.onMoveOrResize.delete( this.UUID );
            }

            const newAnalysis = this.analysis;

            this.top = newAnalysis.top;
            this.left = newAnalysis.left;
            this.maxX = newAnalysis.file.width;
            this.maxY = newAnalysis.file.height;


            newAnalysis.onMoveOrResize.set(this.UUID, (analysis) => {
                this.top = analysis.top;
                this.left = analysis.left;
            });

        }
    }


    public handleInput( event: InputEvent, callback: (value: number) => void ) {

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

                <thermal-field label="Name">
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label="Color">
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label="Top" hint="From 0 to ${this.maxY}">
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxY}
                        @change=${ (event: InputEvent) => this.handleInput( event, value => { this.analysis.setTop( value )} ) }
                    />
                </thermal-field>

                <thermal-field label="Left" hint="From 0 to ${this.maxX}">
                    <input
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxX}
                        @change=${ ( event: InputEvent ) => this.handleInput( event, value => {
                            this.analysis.setLeft( value );
                        } ) }
                    />
                </thermal-field>

            </div>
        
        `;
    }

}