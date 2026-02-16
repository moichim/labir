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
import { StyleInfo, styleMap } from "lit/directives/style-map.js";

@customElement("file-analysis-display")
export class FileAnalysisDisplay extends FileConsumer {

    protected container: Ref<HTMLDivElement> = createRef();

    @state()
    protected analysis: AbstractAnalysis[] = [];

    public onFailure(error: ThermalFileFailure): void {
    }

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

        // Set initial allSelected
        this.analysis = file.analysis.value;

        this.file?.timeline.onFrame.add(this.UUID, () => {
            this.requestUpdate();
        });

        this.file?.analysisData.addListener( this.UUID, () => {
            // this.requestUpdate();
        } );
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
            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }

            td {
                border-top: var(--thermal-slate-light ) 1px solid;
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

            u, b, span {
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

        .analysis-name {
            display: flex;
            align-items: center;
            gap: .5em;
            strong,
            span {
                display: inline-block;
            }

            strong {
                width: 1.5em;
                height: 2px;
            }
        }



    `;



    protected render(): unknown {

        if (this.analysis.length === 0 || this.file === undefined) {
            return nothing;
        }

        return html`

        <div class="overflow" ${ref(this.container)}>

            <table>

                <caption data-video-ignore>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th></th>
                        <th>${t(T.avg)}</th>
                        <th>${t(T.min)}</th>
                        <th>${t(T.max)}</th>
                        <th>${t(T.size)}</th>
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(
                analysis => this.renderAnalysisRow(analysis)
            )}
                
                </tbody>

                </table>

            </div>
            
        `;
    }

    private renderAnalysisRow(
        analysis: AbstractAnalysis
    ): unknown {

        const state = analysis.graph.state;

        const { MIN, MAX, AVG } = state;

        return html`<tr>
            <td class="analysis-name">
                <strong style="background: ${analysis.color};"></strong>
                <span>${analysis.name}</span>
            </td>
            ${this.renderAnalysisRowTemperatureCell(analysis.color, AVG, analysis.avg)}
            ${this.renderAnalysisRowTemperatureCell(analysis.color, MIN, analysis.min)}
            ${this.renderAnalysisRowTemperatureCell(analysis.color, MAX, analysis.max)}
            <td>${analysis.width} x ${analysis.height} px</td>
        </tr>`;

    }

    private renderAnalysisRowTemperatureCell(
        color: string,
        inGraph: boolean,
        value?: number
    ): unknown {

        const style: StyleInfo = {
            padding: "4px 0px"
        };

        if ( inGraph ) {
            style.borderColor = color;
            style.borderStyle = "solid";
            style.borderWidth = "2px";
            style.padding = "2px 6px"
        }

        let valueDisplay: string = "-";

        if ( value !== undefined ) {
            valueDisplay = value.toFixed(2) + " °C";
        }

        return html`
            <td>
                <span style=${styleMap(style)} data-video-dynamic>
                    ${valueDisplay}
                </span>
            </td>
        `


    }

}