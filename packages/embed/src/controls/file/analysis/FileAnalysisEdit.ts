import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { AbstractAnalysis, PointAnalysis } from "@labirthermal/core";
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
                <slot name="invoker" slot="invoker">
                    <thermal-btn icon="settings" iconStyle="micro" size="md" tooltip="${t(T.editsth, {what: this.analysis.name})}">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                            <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                        </svg>
                    </thermal-btn>
                </slot>

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