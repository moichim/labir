import { AbstractAnalysis, Instance, ThermalFileFailure } from "@labir/core";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";

import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { consume } from "@lit/context";
import { interactiveAnalysisContext } from "../../../utils/context";
import { booleanConverter } from "../../../utils/converters/booleanConverter";

@customElement("file-analysis-overview")
export class FileAnalysisTable extends FileConsumer {

    protected container: Ref<HTMLDivElement> = createRef();

    @consume({ context: interactiveAnalysisContext, subscribe: true })
    @property()
    interactiveanalysis: boolean = false;

    @property({ type: Boolean, converter: booleanConverter(false) })
    forceinteractiveanalysis: boolean = false;

    @state()
    protected analysis: AbstractAnalysis[] = [];

    @state()
    protected allSelected: boolean = false;

    public onFailure(error: ThermalFileFailure): void {
        console.log(error);
    }

    @state()
    protected hasHighlightedData: boolean = false;

    public onInstanceCreated(instance: Instance): void {

        this.hydrate(instance);

    }

    connectedCallback(): void {
        super.connectedCallback();
        if (this.file) {
            this.hydrate(this.file);
        }
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("file")) {
            if (this.file) {
                this.hydrate(this.file);
            }
        }
    }


    protected hydrate(file: Instance) {

        // Mirror all analysis to local state
        file.analysis.addListener(this.UUID, analysis => {
            this.analysis = analysis;
        });

        // Mirror all selected
        file.analysis.layers.onSelectionChange.add(this.UUID, () => {
            this.allSelected = file.analysis.layers.all.length === file.analysis.layers.selectedOnly.length;
        });


        // Mirror hasSelectedData
        file.analysisData.onGraphsPresence.set(this.UUID, value => {
            this.hasHighlightedData = value;
        })

        // Set initial allSelected
        this.allSelected = file.analysis.layers.all.length === file.analysis.layers.selectedOnly.length;

        // Set initial allSelected
        this.analysis = file.analysis.value;

        // Set initial hasHighlightedData
        this.hasHighlightedData = file.analysisData.hasActiveGraphs;
    }

    public static styles = css`
    
        .overflow {
            overflow-x:auto;
            width: 100%;
        }

        table {
            display: table;
            min-width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-button {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
        }

        caption {
            display: none !important;
        }

        file-analysis-table-row {
            color: var( --thermal-foreground );
            transition: background-color .2s ease-in-out;
        }

        file-analysis-table-row:not(:last-child) {
            border-bottom: 1px dotted var( --thermal-foreground );
        }

        file-analysis-table-row[selected] {
            background-color: var( --thermal-background );
        }

        .all {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 1px solid var( --thermal-slate );
            }

            &.yes u {
                background-color: var( --thermal-slate-dark );
            }

            button {
                margin: 0;
                padding: 0;
                border: 0;
                background: transparent;
                color: var( --thermal-primary );
                text-transform: lowercase;
                cursor: pointer;

                &:hover,
                &:focus {
                    color: var( --thermal-primary-dark );
                }
            }

        }

        



    `;


    protected renderHeader() {

        return html`<tr>
            <td>${t(T.analysis)}</td>
            <td>${t(T.min)}</td>
            <td>${t(T.max)}</td>
            <td>${t(T.avg)}</td>
        </tr>`;

    }




    protected renderRow(
        analysis: AbstractAnalysis
    ) {

        return html`<tr>
            <td>
                ${analysis.name}
                <file-analysis-edit .analysis=${analysis}></file-analysis-edit>
            </td>
            <td>${analysis.min?.toFixed(2)}</td>
            <td>${analysis.max?.toFixed(2)}</td>
            <td>${analysis.avg?.toFixed(2)}</td>
        </tr>`;

    }



    protected render(): unknown {

        if (this.analysis.length === 0 || this.file === undefined) {
            return nothing;
        }

        const interactiveanalysis = this.interactiveanalysis === true || this.forceinteractiveanalysis === true;

        return html`

        <div class="overflow" ${ref(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <!--

                    <tr>
                        <th
                            class="all ${this.allSelected ? "yes" : "no"} ${interactiveanalysis ? "interactive" : ""}"
                            @click=${() => {
                if (this.allSelected)
                    this.file?.analysis.layers.deselectAll();
                else
                    this.file?.analysis.layers.selectAll();
            }}
                        >
                            ${interactiveanalysis ? html`<u aria-hidden="true"></u>` : nothing}
                            <span>${t(T.analysis)}</span>
                            ${this.hasHighlightedData
                ? html`<button @click=${() => { this.file?.analysisData.downloadData() }} title=${t(T.downloadgraphdataascsv)}>CSV</button>`
                : nothing
            }
                        </th>
                        <th>${t(T.avg)}</th>
                        <th>${t(T.min)}</th>
                        <th>${t(T.max)}</th>
                        <th>${t(T.size)}</th>
                        ${interactiveanalysis === true ? html`<th></th>` : nothing}
                    </tr>

                    -->

                    ${this.renderHeader()}
                
                </thead>

                <tbody>

                    ${this.analysis.map(
                analysis => html`
                    <file-analysis-overview-row
                        .analysis=${analysis}
                    ></file-analysis-overview-row>
                        `
            )}
                
                </tbody>

                </table>

            </div>
        `;
    }

}