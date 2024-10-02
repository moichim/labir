import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { AbstractAnalysis, PointAnalysis } from "@labir/core";
import { html, PropertyValues } from "lit";

@customElement("file-analysis-edit")
export class FileAnalisisEdit extends BaseElement {

    @property()
    public analysis!: AbstractAnalysis;

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

            <thermal-dialog label="Edit ${this.analysis.key}">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${ this.analysis instanceof PointAnalysis
                        ? html`<edit-point .analysis=${this.analysis}></edit-point>`
                        : html`<edit-area .analysis=${this.analysis}></edit-area>`
                     }
                </div>

            </thermal-dialog>
        
        `;
    }

}