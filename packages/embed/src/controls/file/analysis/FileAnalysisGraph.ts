import { AnalysisDataStateValue, Instance } from "@labir/core";
import { consume } from "@lit/context";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { fileCursorContext, FileCursorContext, fileCursorSetterContext, FileCursorSetterContext, currentFrameContext, CurrentFrameContext } from "../../../hierarchy/providers/context/FileContexts";
import {managerGraphFunctionContext} from "../../../hierarchy/providers/context/ManagerContext";
import { ThermalChart } from "./chart/chart";
import { t } from "i18next";
import { T } from "../../../translations/Languages";

@customElement("file-analysis-graph")
export class FileAnalysisGraph extends FileConsumer {
    
    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    @state()
    protected hydrated: boolean = false;

    @property({reflect: true})
    protected graphWidth: number = 0;

    @property({reflect: true})
    protected graphHeight: number = 0;

    container: Ref<HTMLDivElement> = createRef();

    graphRef: Ref<ThermalChart> = createRef();

    @state()
    protected graphs: AnalysisDataStateValue = {
        values: [[]],
        colors: []
    }

    @consume({context: currentFrameContext, subscribe: true})
    protected currentFrame?: CurrentFrameContext;

    @consume({ context: fileCursorContext, subscribe: true })
    protected cursor: FileCursorContext;

    @consume({ context: fileCursorSetterContext, subscribe: true })
    protected cursorSetter?: FileCursorSetterContext;

    @state()
    protected shadowLeft: number = 0;

    @state()
    protected shadowTop: number = 0;

    @state()
    protected shadowWidth: number = 0;

    @state()
    protected shadowHeight: number = 0;

    @consume( {context: managerGraphFunctionContext, subscribe: true} )
    protected graphSmooth: boolean = false;

    public onInstanceCreated(instance: Instance): void {


        // Set the initial analysis data
        this.graphs = instance.analysisData.value;
        

        // Listen to changes in the analysis data
        instance.analysisData.addListener(this.UUID, (value) => {
            this.graphs = value;
        });

        

        // Observe the graph width
        if (this.container.value) {

            this.graphWidth = this.container.value.clientWidth;

            const observer = new ResizeObserver(entries => {
                this.graphWidth = entries[0].contentRect.width;
                this.graphHeight = entries[0].contentRect.height;

                if (this.graphRef.value) {

                    this.shadowLeft = this.graphRef.value.left;
                    this.shadowTop = this.graphRef.value.top;
                    this.shadowWidth = this.graphRef.value.w;
                    this.shadowHeight = this.graphRef.value.h;
                }
            });

            observer.observe(this.container.value);

        }

        this.hydrated = true;


    }

    public connectedCallback(): void {
        super.connectedCallback();

        if ( this.file ) {
            this.graphs = this.file.analysisData.value;
            this.file.analysisData.addListener( this.UUID, value => {
                this.graphs = value;
            } );
            this.hydrated = true;
        }
    }


    public onFailure(): void { }

    public update(changedProperties: PropertyValues): void {
        super.update(changedProperties);
        if (this.graphRef.value) {
            this.shadowLeft = this.graphRef.value.left;
            this.shadowTop = this.graphRef.value.top;
            this.shadowWidth = this.graphRef.value.w;
            this.shadowHeight = this.graphRef.value.h;
        }
    }

    public static styles = css`

        :host {
            // background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;

    protected render(): unknown {

        if ( this.file?.timeline.isSequence === false ) {
            return nothing;
        }

        return html`

            <div style="position: relative; background-color: white; border-radius: var(--thermal-radius); height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame && html`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor && html`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${ref(this.container)} style="height: 100%; ">
                ${this.graphs.colors.length > 0
                ? html`<thermal-chart 
                        ${ref(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{
                            colors: this.graphs.colors,
                            curveType: this.graphSmooth ? 'function' : "default",
                            legend: { position: 'bottom' },
                            hAxis: { title: t(T.time), format: `m:ss:SSS` },
                            vAxis: { title:  t(T.temperature)+ ' °C' },
                            width: this.graphWidth,
                            height: this.graphHeight,
                            chartArea: { 
                                width: '80%', 
                            },
                            backgroundColor: { fill: 'transparent' },
                            
                        }}
                        ></thermal-chart>`
                : nothing
            }
            </div>

            

            </div>
        
        `
    }

}