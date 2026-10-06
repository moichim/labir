import { TimeFormat } from "@labirthermal/core";
import type { AnalysisDataStateValue, Instance } from "@labirthermal/core";
import { consume } from "@lit/context";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { AbstractFileConsumer } from "../../../hierarchy/consumers/AbstractFileConsumer";
import { fileCursorContext, FileCursorContext, fileCursorSetterContext, FileCursorSetterContext, fileCurrentFrameContext, CurrentFrameContext } from "../../../hierarchy/providers/context/FileContexts";
import {managerGraphFunctionContext} from "../../../hierarchy/providers/context/ManagerContext";
import { ThermalChartElement } from "./chart/chart";
import { t } from "i18next";
import { T } from "../../../translations/Languages";

/** @deprecated */
export class FileAnalysisGraphElement extends AbstractFileConsumer {

    @state()
    protected hydrated: boolean = false;

    @property({reflect: true})
    public graphWidth: number = 0;

    @property({reflect: true})
    public graphHeight: number = 0;

    @property({ type: Boolean, reflect: true })
    public hasDownloads: boolean = true;

    container: Ref<HTMLDivElement> = createRef();

    graphRef: Ref<ThermalChartElement> = createRef();

    @state()
    protected graphs: AnalysisDataStateValue = {
        values: [[]],
        colors: []
    }

    @consume({context: fileCurrentFrameContext, subscribe: true})
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

    private getChartData(): unknown[][] {
        const [headers, ...rows] = this.graphs.values;

        return [
            [
                { label: headers[0], type: "number" },
                ...headers.slice(1).flatMap(label => [
                    { label, type: "number" },
                    { type: "string", role: "tooltip", p: { html: true } }
                ])
            ],
            ...rows.map(row => {
                const relativeTime = row[0].getTime();

                return [
                    relativeTime,
                    ...row.slice(1).flatMap((value, index) => [
                        value,
                        `<div style="padding: 6px 8px"><div>${this.escapeHtml(t(T.time))}: <strong>${TimeFormat.duration(relativeTime)}</strong></div><div>${this.escapeHtml(headers[index + 1])}: <strong>${this.escapeHtml(String(value))} °C</strong></div></div>`
                    ])
                ];
            })
        ];
    }

    private getDurationAxisTicks(): { v: number, f: string }[] {
        const duration = this.file?.duration ?? 0;

        if (duration <= 0) {
            return [];
        }

        const rawStep = duration / 5;
        const magnitude = 10 ** Math.floor(Math.log10(rawStep));
        const normalizedStep = rawStep / magnitude;
        const step = (normalizedStep <= 1 ? 1 : normalizedStep <= 2 ? 2 : normalizedStep <= 5 ? 5 : 10) * magnitude;
        const ticks: { v: number, f: string }[] = [];

        for (let value = 0; value <= duration; value += step) {
            ticks.push({ v: value, f: TimeFormat.duration(value) });
        }

        if (ticks[ticks.length - 1]?.v !== duration) {
            ticks.push({ v: duration, f: TimeFormat.duration(duration) });
        }

        return ticks;
    }

    private escapeHtml(value: string): string {
        return value.replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#39;"
        })[character] ?? character);
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

            

            <div data-video-style style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame && html`
                <div data-video-style style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor && html`
                    <div data-video-style style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${ref(this.container)}">
                ${this.graphs.colors.length > 0
                ? html`<thermal-chart 
                        ${ref(this.graphRef)}
                        data-video-svg
                        type="line" 
                        .data=${this.getChartData()} 
                        .options=${{
                            colors: this.graphs.colors,
                            curveType: this.graphSmooth ? 'function' : "default",
                            legend: { position: 'bottom' },
                            hAxis: {
                                title: t(T.time),
                                ticks: this.getDurationAxisTicks(),
                                viewWindow: { min: 0, max: this.file?.duration ?? 0 }
                            },
                            vAxis: { title:  t(T.temperature)+ ' °C' },
                            tooltip: { isHtml: true },
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

            ${this.renderDownloads()}
            

            

            </div>
        
        `
    }


    private renderDownloads() {

        if ( !this.hasDownloads ) {
            return nothing;
        }

        return html`<div class="download">
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
            </div>`;


    }

}