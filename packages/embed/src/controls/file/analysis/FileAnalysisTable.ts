import { customElement, state } from "lit/decorators.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { AbstractAnalysis, AnalysisGraph, Instance, ThermalFileFailure } from "@labir/core";
import { css, CSSResultGroup, html, nothing } from "lit";

@customElement("file-analysis-table")
export class FileAnalysisTable extends FileConsumer {

    @state()
    protected analysis: AbstractAnalysis[] = [];

    @state()
    protected allSelected: boolean = false;

    public onFailure(error: ThermalFileFailure): void {
        console.log(error);
    }

    public onInstanceCreated(instance: Instance): void {
        
        // Mirror all analysis to local state
        instance.analysis.addListener( this.UUID, analysis => {
            this.analysis = analysis;
        } );

        // Mirror all selected
        instance.analysis.layers.onSelectionChange.add( this.UUID, () => {
            this.allSelected = instance.analysis.layers.all.length === instance.analysis.layers.selectedOnly.length;
        } );

        // Set initial allSelected
        this.allSelected = instance.analysis.layers.all.length === instance.analysis.layers.selectedOnly.length;

        // Set initial allSelected
        this.analysis = instance.analysis.value;

    }

    public static styles = css`
    
        :host {
            display: table;
            width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            td, th {
                padding: .5rem;
            }
        }

        th {
            text-align: left;
        }

        th, td, button {
            font-size: var( --thermal-fs-sm ) !important;
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

            cursor: pointer;

            &:hover {
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

        }

        



    `;

    protected render(): unknown {

        if (this.analysis.length === 0 || this.file === undefined) {
            return nothing;
        }

        return html`


            <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

            <thead>

                <tr>
                    <th
                        class="all ${this.allSelected ? "yes" : "no"}"
                        @click=${() => {
                            if ( this.allSelected )
                                this.file?.analysis.layers.deselectAll();
                            else
                                this.file?.analysis.layers.selectAll();
                        }}
                    >
                        <u aria-hidden="true"></u>
                        <span>Analysis</span>
                    </th>
                    <th>Avg</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Size</th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(
                            analysis => html`
                                <file-analysis-table-row
                                    .analysis=${analysis}
                                ></file-analysis-table-row>
                            `
                        )}
            
            </tbody>
        `;
    }

}