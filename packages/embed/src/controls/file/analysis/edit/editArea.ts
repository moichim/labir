import { customElement, property, state } from "lit/decorators.js";
import { AbstractAnalysis, AbstractAreaAnalysis } from "@labir/core";
import { html, PropertyValues } from "lit";
import { BaseElement } from "../../../../hierarchy/BaseElement";

@customElement("edit-area")
export class AreaEdit extends BaseElement {

    @property()
    public analysis!: AbstractAreaAnalysis;

    @state()
    protected color?: string;

    @state()
    protected tl?: {x: number, y: number};

    @state()
    protected br?: {x: number, y: number};

    @state()
    protected type?: string;

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( _changedProperties.has( "analysis" ) ) {

            const oldAnalysis = _changedProperties.get( "analysis" ) as AbstractAnalysis;

            const newAnalysis = this.analysis;

        }
    }

    protected render() {
        return html`

            <analysis-color .analysis=${this.analysis}></analysis-color>
    
        
        `;
    }

}