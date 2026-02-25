import { AbstractAnalysis, Instance, ThermalFileFailure } from "@labirthermal/core";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";

import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { consume } from "@lit/context";
import { interactiveAnalysisContext } from "../../../utils/context";
import { booleanConverter } from "../../../utils/converters/booleanConverter";

@customElement("file-analysis-table")
export class FileAnalysisTable extends FileConsumer {

    @consume({ context: interactiveAnalysisContext, subscribe: true })
    interactiveanalysis: boolean = false;

    @property({type: Boolean, converter: booleanConverter(false)})
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
    
        :host {

            display: block;
            width: 100%;
            min-width: 0;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;

            margin: 0;
            padding: 0;

            position: relative;

            box-sizing: border-box;
        
        }

        table {

            display: table;

            min-width: 100%;
            
            position: relative;

            table-layout: fixed;

            
            margin: 0;
            padding: 0;
            
            border-collapse: collapse;

            color: var( --thermal-foreground );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            box-sizing: border-box;

            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-btn {
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
            border-bottom: var(--thermal-border-width) dotted var( --thermal-foreground );
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

            u, b, span, thermal-btn {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
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

    private renderTableRows(): unknown {

        if ( this.analysis.length === 0 || this.file === undefined) {
            return nothing;
        }

        return this.analysis.map( analysis => html`<file-analysis-table-row
            .analysis=${analysis}
            interactiveanalysis=${this.interactiveanalysis === true || this.forceinteractiveanalysis === true}
        ></file-analysis-table-row>`);

    }



    protected render(): unknown {

        if (this.analysis.length === 0 || this.file === undefined) {
            return nothing;
        }

        const interactiveanalysis = this.interactiveanalysis === true || this.forceinteractiveanalysis === true;

        return html`

            <table>

                <thead>

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
                            ${interactiveanalysis ? html`<u aria-hidden="true"></u>` : nothing }
                            <thermal-btn variant="text" tooltip="${this.allSelected ? "Deaktivovat všechny" : "Aktivovat všechny"}" tooltip-placement="right">${t(T.analysis)}</thermal-btn>
                        </th>
                        <th>${t(T.avg)}</th>
                        <th>${t(T.min)}</th>
                        <th>${t(T.max)}</th>
                        <th>${t(T.size)}</th>
                        <th></th>
                    </tr>
                
                </thead>

                <tbody>${this.renderTableRows()}</tbody>

            </table>
            
        `;
    }

}