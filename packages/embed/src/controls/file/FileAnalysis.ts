import { AnalysisDataStateValue } from "@labir/core";
import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { map } from 'lit/directives/map.js';
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { AnalysisList, analysisList } from "../../hierarchy/providers/context/FileContexts";
import { createRef, Ref, ref } from 'lit/directives/ref.js';

/** @deprecated */
@customElement("file-analysis-list")
export class FileAnalysisList extends FileConsumer {

    protected tourableElementRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElementRef.value;
    }

    @consume({ context: analysisList, subscribe: true })
    analysis: AnalysisList = [];

    @state()
    protected allSelected: boolean = false;

    @state()
    protected graphs: AnalysisDataStateValue = {
        values: [[]],
        colors: []
    }

    @state()
    protected graphWidth: number = 0;

    graphParentElement: Ref<HTMLDivElement> = createRef();



    public onInstanceCreated(): void {

        if (this.file !== undefined) {

            this.file.analysis.layers.onSelectionChange.add(this.UUID, value => {
                if (this.file) {
                    this.allSelected = this.file.analysis.value.length === value.length;
                }

            });

            this.file.analysisData.addListener(this.UUID, (value) => {
                this.graphs = value;
            });


            if (this.graphParentElement.value) {
                this.graphWidth = this.graphParentElement.value.clientWidth;

                const observer = new ResizeObserver(entries => {
                    this.graphWidth = entries[0].contentRect.width;
                });

                observer.observe(this.graphParentElement.value);

            }


        }


        if (this.graphParentElement.value) {
            this.graphWidth = this.graphParentElement.value.clientWidth;

            const observer = new ResizeObserver(entries => {
                this.graphWidth = entries[0].contentRect.width;
            });

            observer.observe(this.graphParentElement.value);

        }



    }

    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }


    static styles?: CSSResultGroup | undefined = css`
        .container {

            white-space: nowrap;
        
            overflow: hidden;
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
            margin-top: calc( var( --thermal-gap ) / 3 );
            color: var( --thermal-foreground );
        
        }

        .container table {
            width: 100%;
            border-collapse:collapse;
            font-size: var( --thermal-fs-small );
        }

        .container table caption {
            display: none !important;
        }

        .container table th {
            text-align: left;
            padding: calc( var( --thermal-gap ) / 3 );
        }

        .container table file-analysis-row {
            border-bottom: 1px var( --thermal-foreground ) dotted;
        }

        .container table file-analysis-row:first-child {
            border-top: 1px var( --thermal-foreground ) dotted;
        }

        .selected {
            width: calc( var( --thermal-gap ) / 2 );
            height: calc( var( --thermal-gap ) / 2 );
            border-radius: 50%;
            border: 2px solid var( --thermal-slate );
            display: inline-block;
            cursor: pointer;

            &.all {
                background-color: var( --thermal-foreground );
            }
        }

        .container .interactive {
        
            cursor: pointer;
            user-select: none;

            &:hover {
                color: var( --thermal-primary );
            }
        
        }

        google.charts {
           border-radius: var( --thermal-radius );
                border: 1px solid var( --thermal-slate );
        }
    `;


    protected render(): unknown {


        return html`

            <div ${ref(this.tourableElementRef)}>
            

                ${this.analysis.length === 0

                    ? nothing
                    : html`
                    <div class="container">
                    <table>

                    <caption>
                        Current analysis on the file ${this.file?.fileName}
                    </caption>

                    <thead>
                        <tr>
                            <th 
                                class="interactive" 
                                @click=${() => {
                            if (this.file) {
                                if (this.allSelected) {

                                    this.file.analysis.layers.deselectAll();

                                    this.allSelected = false;

                                } else {
                                    this.allSelected = true;

                                    this.file.analysis.layers.selectAll();

                                }
                            }
                        }}
                            >
                                <div 
                                    class="selected ${this.allSelected ? "all" : ""}"
                                ></div>
                                Analysis
                            </th>
                            <th>Min</th>
                            <th>Max</th>
                            <th>Avg</th>
                            <th>Size</th>
                        </tr>
                    </thead>

                    <tbody>

                        ${map(this.analysis, item => html`
                            <file-analysis-row .analysis=${item}></file-analysis-row>
                        ` )}

                    </tbody>

                </table>
                </div>
                    `
                }
                
                
                

                <div style="width: 100%;" ${ref(this.graphParentElement)}>
                    ${this.graphs.colors.length > 0 ? html`<google-chart 
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{
                        colors: this.graphs.colors,
                        legend: { position: 'bottom' },
                        hAxis: { title: 'Time' },
                        vAxis: { title: 'Temperature °C' },
                        width: this.graphWidth,
                    }}
                        ></google-chart>`
                    : nothing}
                </div>

            </div>
        
            <slot name="tour"></slot>

        `;
    }

}