import { AbstractAddTool, Instance } from "@labir/core";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { T } from "../../../translations/Languages";
import { FileAnalysisGraph } from "./FileAnalysisGraph";



@customElement("file-analysis-complex")
export class FileAnalysisComplex extends FileConsumer {

    @state()
    protected mayHaveGraph: boolean = false;

    @state()
    protected hasAnalysis: boolean = false;

    @state()
    protected isDrawingAnalysis: boolean = false;

    @state()
    protected hasGraph: boolean = false;

    @state()
    protected graphRef: Ref<FileAnalysisGraph> = createRef();

    @state()
    protected graphWidth: number = 0;

    @state()
    protected graphHeight: number = 0;

    @state()
    protected observer?: ResizeObserver;

    public onInstanceCreated(instance: Instance): void {

        this.mayHaveGraph = instance.timeline.isSequence;

        instance.analysis.layers.onAdd.set(this.UUID, (analysis) => {
            if (this.hasAnalysis === false) {
                this.hasAnalysis = true;
            }

            const listener = () => {
                this.isDrawingAnalysis = false;
            }

            analysis.file.dom?.listenerLayer?.getLayerRoot().addEventListener("pointerup", listener);

            analysis.graph.onGraphActivation.set(this.UUID, ( min, max, avg ) => {

                if ( min || max || avg ) {
                    this.hasGraph = true;
                } else {

                    const hasAnyGraph = analysis.file.analysis.value.reduce( (state, current) => {
                        if (state === true) { return state}
                        return current.graph.state.MIN || current.graph.state.MAX || current.graph.state.AVG;
                    }, false );

                    this.hasGraph = hasAnyGraph;

                }
            });

        });

        instance.analysis.layers.onRemove.set(this.UUID, () => {
            if (this.hasAnalysis === true) {
                if (instance.analysis.layers.size === 0) {
                    this.hasAnalysis = false;
                    this.isDrawingAnalysis = false;
                    this.hasGraph = false;
                }
            }
        });


    }
    public onFailure(): void {}
    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);
        if ( _changedProperties.has( "hasGraph" ) ) {
            if ( this.observer && this.graphRef.value ) {
                this.observer.unobserve( this.graphRef.value );
                delete this.observer;
            }
            if ( this.graphRef.value && this.hasGraph === true) {
                this.observer = new ResizeObserver( entries => {
                    const rect = entries[0];
                    if ( rect !== undefined ) {
                        this.graphWidth = rect.contentRect.width;
                        this.graphHeight = rect.contentRect.height;
                    }

                } );
                this.observer.observe( this.graphRef.value );
            }
            
        }
    }


    protected renderButtons() {


        const addTools = this.file !== undefined
            ? Object.values(this.file.group.tool.tools).filter(tool => tool instanceof AbstractAddTool)
            : [];


        return html`
            <div class="buttons">
                ${addTools.map(tool => {

            return html`
                            <thermal-button @click=${() => {
                    this.isDrawingAnalysis = true;
                    this.file?.group.tool.selectTool(tool);
                }}>
                                <div style="display: flex; align-items: center; gap: 10px">
                                    <div style="width: 1.5em; display: inline-block;">${unsafeHTML(tool.icon)}</div>
                                    <div>${t(T[tool.name as keyof typeof T])}</div>
                                </div>
                            </thermal-button>
                        `;

        })
            }
            </div>
        
        `;

    }

    protected renderCurrentTooltip() {
        return html`${t(T[this.manager.tool.value.description as keyof typeof T] )}`;
    }

    protected renderAddAnalysis() {

        return html`<div class="addanalysis">

            <div>
                <strong>${t(T.analysis)}</strong>
            </div>

            <div>${t(T.analysishint)}</div>

            ${this.isDrawingAnalysis === true
                ? this.renderCurrentTooltip()
                : this.renderButtons()
            }
        </div>`;

    }


    protected renderGraph() {

        if (!this.mayHaveGraph) {
            return nothing;
        }

        if (this.hasGraph === true) {
            return html`<div class="graph" ${ref(this.graphRef)}>
                <file-analysis-graph graphWidth=${this.graphWidth} graphHeight=${this.graphHeight}></file-analysis-graph>
            </div>`;
        }

        else {
            if (this.hasAnalysis === true) {
                return html`<div class="graph graph-prompt">
                    <div>
                        <strong>${t(T.graph)}</strong>
                    </div>
                    <div class="hint">${unsafeHTML( t(T.graphhint2) )}</div>
                </div>`;
            } else {
                return html`<div class="graph graph-prompt">
                    <div>
                        <strong>${t(T.graph)}</strong>
                    </div>
                    <div class="hint">${t(T.graphhint1)}</div>
                </div>`;
            }
        }


    }



    static styles?: CSSResultGroup | undefined = css`

        .container {
            height: 100%;
            width: 100%;
            color: var(--thermal-foreground);
        }

        .container.may {
            display: flex;
            flex-direction: column;
            gap: var(--thermal-gap);

            > * {
                width: 100%;
            }

            .analysis {
                height: calc( 50% - var(--thermal-gap));
            }

        }

        .container.may-not {
            .analysis {
                height: 100%;
            }
        }

        .analysis {
            max-width: 100%;
            overflow-y: auto;
        }
    
        .addanalysis {
            padding: var(--thermal-gap);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }

        .graph {
            height: 50%;
        }

        .graph-prompt {
            padding: var(--thermal-gap);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
        }

        .hint {
            span {
                display: inline-block;
                padding: 5px;
                margin: 0 5px;
                border: 1px solid var(--thermal-slate);
                border-radius: 5px;
            }
        }

        .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px;
        }

        file-analysis-table {
            overflow-y: auto;
        }
    
    `;


    protected render(): unknown {
        return html`
            <div class="container ${this.mayHaveGraph === true ? "may" : "may-not"}">

            <div class="analysis">
                ${this.hasAnalysis === false || this.isDrawingAnalysis === true
                ? this.renderAddAnalysis()
                : html`<file-analysis-table></file-analysis-table>`
            }
            </div>
            ${this.renderGraph()}

            </div>

        `;
    }

}

