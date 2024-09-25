import { AnalysisDataStateValue, Instance, ThermalFileFailure } from "@labir/core";
import { html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";

@customElement("file-analysis-graph")
export class FileAnalysisGraph extends FileConsumer {


    @state()
    protected graphWidth: number = 0;

    container: Ref<HTMLDivElement> = createRef();

    @state()
    protected graphs: AnalysisDataStateValue = {
        values: [[]],
        colors: []
    }

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
                console.log( entries );
                this.graphWidth = entries[0].contentRect.width;
            });

            observer.observe(this.container.value);

        }

        

    }


    public onFailure(error: ThermalFileFailure): void {
        //
    }

    protected render(): unknown {
        return html`
        
            <div ${ref(this.container)}>
                ${this.graphs.colors.length > 0
                ? html`<google-chart 
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
                : nothing
            }
            </div>
        
        `
    }

}