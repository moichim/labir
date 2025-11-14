import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../../hierarchy/BaseElement";
import { AbstractAnalysis, availableAnalysisColors } from "@labirthermal/core";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
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

        thermal-dropdown div {
            display: flex;
            gap: 0.5em;
            border-radius: var( --thermal-radius );
            cursor: pointer;
            align-items: center;
        }

        thermal-dropdown .option {
            margin-bottom: 0px;
            padding: 5px;
        }

        thermal-dropdown div i {
            width: 1em;
            height: 1em;
            border-radius: 50%;
        }

        thermal-dropdown .option:hover {
            background-color: var( --thermal-slate );
        }
    
    `;

    protected renderColor( value: string ) {
        return html`<i style="background-color: ${value};" aria-hidden></i><span>${value}</span>`;
    }

    protected render(): unknown {

        if ( this.color === undefined ) {
            return nothing;
        }
        return html`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor( this.color )}
                </div>

                ${map(availableAnalysisColors, color => html`
                    <div class="option" slot="option" @click=${() => {this.analysis.setInitialColor( color )}}>
                        ${this.renderColor( color )}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `;
    }

}