import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { AbstractAnalysis, PointAnalysis } from "@labir/core";
import { html, PropertyValues } from "lit";
import { t } from "i18next";
import { T } from "../../../translations/Languages";

@customElement("file-analysis-edit")
export class FileAnalisisEdit extends BaseElement {

    @property()
    public analysis!: AbstractAnalysis;

    @state()
    protected name?: string;

    @state()
    protected type?: string;

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( _changedProperties.has( "analysis" ) ) {

            const oldAnalysis = _changedProperties.get( "analysis" ) as AbstractAnalysis;

            if ( oldAnalysis ) {
                oldAnalysis.onSetName.delete( this.UUID );
            }

            const newAnalysis = this.analysis;
            this.name = newAnalysis.name;
            this.type = newAnalysis.getType();


            newAnalysis.onSetName.set(this.UUID, (value) => {
                this.name = value;
            });


        }
    }

    protected render() {
        return html`

            <thermal-dialog label="${t(T.editsth, {what: t( T[this.type as keyof typeof T] )})}">

                <thermal-button slot="invoker">${t(T.edit)}</thermal-button>

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