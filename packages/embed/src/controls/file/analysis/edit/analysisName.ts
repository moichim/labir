import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../../hierarchy/BaseElement";
import { AbstractAnalysis, availableAnalysisColors } from "@labir/core";
import { css, CSSResultGroup, html, PropertyValues } from "lit";
import {map} from 'lit/directives/map.js';

@customElement("analysis-name")
export class AnalysisColor extends BaseElement {

    @property()
    public analysis!: AbstractAnalysis;

    @state()
    protected name?: string;

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( _changedProperties.has( "analysis" ) ) {

            const oldAnalysis = _changedProperties.get( "analysis" ) as AbstractAnalysis;

            if ( oldAnalysis ) {
                oldAnalysis.onSetName.delete( this.UUID );
            }

            const newAnalysis = this.analysis;

            this.name = newAnalysis.name;

            newAnalysis.onSetName.set(this.UUID, (value) => {
                this.name = value;
            });


        }
    }


    static styles?: CSSResultGroup | undefined = css`

    
    `;

    protected render(): unknown {
        return html`

            <input 
                type="text"
                value="${this.name}" 
                @change=${(event: InputEvent) => {
                    const target = event.target as HTMLInputElement;
                    const value = target.value !== "" 
                        ? target.value 
                        : this.analysis.nameInitial;
                    this.analysis.setName( value )
                }}
            />

        `;
    }

}