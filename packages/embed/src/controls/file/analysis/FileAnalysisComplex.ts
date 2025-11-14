import { AbstractAddTool } from "@labirthermal/core";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { T } from "../../../translations/Languages";
import { booleanConverter } from "../../../utils/converters/booleanConverter";
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

    @state()
    protected hydrated: boolean = false;

    @property({ type: Boolean, reflect: true, converter: booleanConverter(true) })
    public showhint: boolean = true;


    connectedCallback(): void {
        super.connectedCallback();
        this.hydrate();
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.dehydrate();
    }

    public onInstanceCreated(): void {
        this.hydrate();
    }
    
    public onFailure(): void {}


    protected hydrate() {

        const instance = this.file;

        if ( !instance || this.hydrated ) {
            return;
        }

        this.mayHaveGraph = instance.timeline.isSequence;

        if ( instance.analysis.value.length > 0 ) {
            this.hasAnalysis = true;
        }

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

        this.hydrated = true;
    }

    protected dehydrate() {

        const instance = this.file;

        if ( instance ) {
            instance.analysis.layers.onAdd.delete(this.UUID);
            instance.analysis.layers.onRemove.delete(this.UUID);
        }

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

            return html`<thermal-btn @click=${() => {
                    this.isDrawingAnalysis = true;
                    this.file?.group.tool.selectTool(tool);
                }}>
                    <div style="display: flex; align-items: center; gap: 10px">
                        <div style="width: 1.5em; display: inline-block;">
                            ${unsafeHTML(tool.icon)}
                        </div>
                        <div>
                            ${t(T[tool.name as keyof typeof T])}
                        </div>
                    </div>
                </thermal-btn>`;

        })
            }
            </div>

            <slot></slot>
        
        `;

    }

    protected renderCurrentTooltip() {
        return html`${t(T[this.manager.tool.value.description as keyof typeof T] )}`;
    }

    protected renderAddAnalysis() {

        return html`<div class="addanalysis">

            ${this.showhint
                ? html`<div>
                    <strong>${t(T.analysis)}</strong>
                </div>

                <div>${t(T.analysishint)}</div>`
                : nothing
            }


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
            return html`
            
            <div class="graph" ${ref(this.graphRef)}>
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
            border: 1px dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            text-align: center;
        }

        .graph {
            height: 50%;
        }

        .graph-prompt {
            padding: var(--thermal-gap);
            border: 1px dashed var(--thermal-slate);
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

