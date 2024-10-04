import { AnalysisDataStateValue, Instance } from "@labir/core";
import { consume } from "@lit/context";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { fileCursorContext, FileCursorContext, fileCursorSetterContext, FileCursorSetterContext } from "../../../hierarchy/providers/context/FileContexts";
import { ThermalChart } from "./chart/chart";

@customElement("file-analysis-graph")
export class FileAnalysisGraph extends FileConsumer {


    @state()
    protected graphWidth: number = 0;

    container: Ref<HTMLDivElement> = createRef();

    graphRef: Ref<ThermalChart> = createRef();

    @state()
    protected graphs: AnalysisDataStateValue = {
        values: [[]],
        colors: []
    }

    @consume({ context: fileCursorContext, subscribe: true })
    protected cursor: FileCursorContext;

    @consume({ context: fileCursorSetterContext, subscribe: true })
    protected cursorSetter?: FileCursorSetterContext;

    @state()
    left: number = 0;

    @state()
    top: number = 0;

    @state()
    width: number = 0;

    @state()
    height: number = 0;

    public onInstanceCreated(instance: Instance): void {

        // Listen to changes in the analysis data
        instance.analysisData.addListener(this.UUID, (value) => {
            this.graphs = value;
        });

        // Set the initial analysis data
        this.graphs = instance.analysisData.value;

        // Observe the graph width
        if (this.container.value) {

            this.graphWidth = this.container.value.clientWidth;

            const observer = new ResizeObserver(entries => {
                this.graphWidth = entries[0].contentRect.width;

                if (this.graphRef.value) {

                    this.left = this.graphRef.value.left;
                    this.top = this.graphRef.value.top;
                    this.width = this.graphRef.value.w;
                    this.height = this.graphRef.value.h;
                }
            });

            observer.observe(this.container.value);

        }


    }


    public onFailure(): void { }

    public update(changedProperties: PropertyValues): void {
        super.update(changedProperties);
        if (this.graphRef.value) {

            this.left = this.graphRef.value.left;
            this.top = this.graphRef.value.top;
            this.width = this.graphRef.value.w;
            this.height = this.graphRef.value.h;
            console.log( this.graphRef.value.chartWrapper );
        }
    }

    public static styles = css`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 500px;
        }
    `;

    protected render(): unknown {
        return html`

            <div style="position: relative; background-color: white;">

            <div style="position: absolute; top:${this.top}px; left: ${this.left}px; width: ${this.width}px; height: ${this.height}px;">
                ${this.cursor && html`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${ref(this.container)}>
                ${this.graphs.colors.length > 0
                ? html`<thermal-chart 
                        ${ref(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{
                            colors: this.graphs.colors,
                            legend: { position: 'bottom' },
                            hAxis: { title: 'Time', format: `m:ss:SSS` },
                            vAxis: { title: 'Temperature °C' },
                            width: this.graphWidth,
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