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

    protected downloadSVG = (svgEl: SVGElement, fileName: string) => {

        // Add missing svg attributes
        if (!svgEl.getAttribute('xmlns')) {
            svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }

        // Get the outer HTML of the element
        const svgData = svgEl.outerHTML;

        // Create blob and URL
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        // Create a link and trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    protected downloadPNG = (svgEl: SVGElement, fileName: string) => {

        // Add missing svg attributes
        if (!svgEl.getAttribute('xmlns')) {
            svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }

        // Get the outer HTML of the element
        const svgData = svgEl.outerHTML;

        // Create blob and URL
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0);

            const pngUrl = canvas.toDataURL('image/png');

            const a = document.createElement('a');
            a.href = pngUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };

        img.src = url;

    }

    public static styles = css`

        :host {
            position: relative;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }

        .download {
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            gap: 0.25em;
        }

        thermal-icon {
            width: .8em;
            height: .8em;
            vertical-align: middle;
            margin-top: 1px;
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
        
            <div ${ref(this.container)}">
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

            <div class="download">
                <thermal-icon icon="download" variant="micro"></thermal-icon>
                <thermal-btn
                    size="sm"
                    @click=${() => {
                        if ( this.graphRef.value ) {
                            const svgData = this.graphRef.value.getRef()?.querySelector( 'svg' );
                            if ( svgData ) {
                                this.downloadSVG( svgData, "graph.svg" );
                            }
                        }
                    }}
                    variant="background"
                    plain="true"
                    tooltip="Stáhnout graf jako obrázek SVG"
                >SVG</thermal-btn>
                <thermal-btn
                    size="sm"
                    @click=${() => {
                        if ( this.graphRef.value ) {
                            const svgData = this.graphRef.value.getRef()?.querySelector( 'svg' );
                            if ( svgData ) {
                                this.downloadPNG( svgData, "graph.png" );
                            }
                        }
                    }}
                    variant="background"
                    plain="true"
                    tooltip="Stáhnout graf jako obrázek PNG"
                >PNG</thermal-btn>
                <thermal-btn
                    size="sm"
                    @click=${() => this.file?.analysisData.downloadData()}
                    variant="background"
                    plain="true"
                    tooltip="${t(T.downloadgraphdataascsv)}"
                >CSV</thermal-btn>
            </div>
            

            

            </div>
        
        `
    }

}