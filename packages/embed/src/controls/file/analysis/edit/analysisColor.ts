import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../../hierarchy/BaseElement";
import { AbstractAnalysis, availableAnalysisColors } from "@labir/core";
import { css, CSSResultGroup, html, PropertyValues } from "lit";
import {map} from 'lit/directives/map.js';

@customElement("analysis-color")
export class AnalysisColor extends BaseElement {

    @property()
    public analysis!: AbstractAnalysis;

    @state()
    protected color?: string;

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( _changedProperties.has( "analysis" ) ) {

            const oldAnalysis = _changedProperties.get( "analysis" ) as AbstractAnalysis;

            if ( oldAnalysis ) {
                oldAnalysis.onSetInitialColor.delete( this.UUID );
            }

            const newAnalysis = this.analysis;

            this.color = newAnalysis.initialColor;

            newAnalysis.onSetInitialColor.set(this.UUID, (value) => {
                this.color = value;
            });


        }
    }


    static styles?: CSSResultGroup | undefined = css`

        :host {
            display: flex;
            width: 100%;
            gap: var( --thermal-gap );
            align-items: center;
        }
    
    `;

    protected render(): unknown {
        return html`

            <div>Color:</div>

            <select 
                @change=${(event:Event) => {this.analysis.setInitialColor((event.target as HTMLSelectElement).value)}} 
                value=${this.color}
            >

                ${map(availableAnalysisColors, color => html`<option 
                    value="${color}" 
                    style="background-color: ${color};"
                    ?selected=${color === this.color}
                >
                    ${color}
                </option>`)}

            </select>

        `;
    }

}