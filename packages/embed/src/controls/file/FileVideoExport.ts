import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cache } from "lit/directives/cache.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { slotOrNothing } from "../../connection/controllers/apps/directives/SlotOrNothing";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { FileProviderElement } from "../../hierarchy/providers/FileProvider";
import { BtnSizes, BtnVariants } from "../../ui/Btn";
import { ThermalDialog } from "../../ui/Dialog";
import { VideoRecorder } from "./video/internals/VideoRecorder";

@customElement("file-video-export-button")
export class FileVideoExport extends FileConsumer {

    @property({ type: String, reflect: true })
    public variant?: BtnVariants;

    @property({ type: String, reflect: true })
    public size?: BtnSizes = "md";

    @property({ type: String })
    public icon?: string;

    @property({ type: String })
    public iconStyle?: string;

    @property({ type: Boolean })
    public plain?: boolean;

    @property({ type: String, reflect: true })
    public tooltip?: string;

    @property({ type: String, reflect: true })
    public label: string = "Exportovat video";

    @property({ type: String, reflect: true })
    public pre?: String;

    private dialogRef: Ref<ThermalDialog> = createRef();
    private fileProviderRef: Ref<FileProviderElement> = createRef();
    private exportDivRef: Ref<HTMLElement> = createRef();
    private compilationCanvasRef: Ref<HTMLCanvasElement> = createRef();

    protected slug: string = this.UUID + "__file-export";

    @state() protected isOpen: boolean = false;


    @state() protected analysis1?: string;
    @state() protected analysis2?: string;
    @state() protected analysis3?: string
    @state() protected analysis4?: string;
    @state() protected analysis5?: string;
    @state() protected analysis6?: string;
    @state() protected analysis7?: string;


    @state()
    protected hasHistogram: boolean = true;

    @state()
    protected hasScale: boolean = true;

    @state()
    protected hasAnalyses: boolean = false;

    @state()
    protected exportPadding: number = 10;

    @state()
    protected exportVertical: boolean = false;

    @state()
    protected exportWidth: number = 1200;

    @state()
    protected exportLengthMs: number = 0;

    @state()
    protected exporFileName?: string;

    /** Indicator if the app is currently recording */
    @state() private isRecording: boolean = false;

    /** Current phase of recording */
    @state() private recordingPhase: number = 0;


    /** Reference to the export DIV element */
    public get exportElement(): HTMLElement | undefined {
        return this.exportDivRef.value;
    }

    /** Reference to a compilation canvas */
    public get compilationCanvas(): HTMLCanvasElement | undefined {
        return this.compilationCanvasRef.value;
    }

    /** Reference to the inner instance that is being exported */
    public get innerInstance(): Instance | undefined {
        return this.fileProviderRef.value?.file;
    }



    public setHasHistogram( value: boolean ): void { this.hasHistogram = value; }
    public setHasScale( value: boolean ): void { this.hasScale = value; }
    public setHasAnalyses( value: boolean ): void { this.hasAnalyses = value; }
    public setExportPadding( value: number ): void { this.exportPadding = value; }
    public setExportWidth( value: number ): void { this.exportWidth = value; }
    public setExportVertical( value: boolean ): void { this.exportVertical = value; }

    /** Synchronises the analyses from the main file to local states. Thus trigger a rerender and update the analyses in local files as well */
    private syncAnalysesFromMainToLocalFile(): void {

        if (this.file) {

            this.analysis1 = this.file.slots.getSlot(0)?.serialized;
            this.analysis2 = this.file.slots.getSlot(1)?.serialized;
            this.analysis3 = this.file.slots.getSlot(2)?.serialized;
            this.analysis4 = this.file.slots.getSlot(3)?.serialized;
            this.analysis5 = this.file.slots.getSlot(4)?.serialized;
            this.analysis6 = this.file.slots.getSlot(5)?.serialized;
            this.analysis7 = this.file.slots.getSlot(6)?.serialized;

        }

    }

    /** Remove all local analyses from the display */
    private clearAnalyses(): void {
        this.analysis1 = undefined;
        this.analysis2 = undefined;
        this.analysis3 = undefined;
        this.analysis4 = undefined;
        this.analysis5 = undefined;
        this.analysis6 = undefined;
        this.analysis7 = undefined;
    }

    connectedCallback(): void {
        super.connectedCallback();

        if (this.file) {

            // Configure analyses syncing with the main file
            this.file.slots.onSlot1Serialize.set(this.UUID, value => this.analysis1 = value);
            this.file.slots.onSlot2Serialize.set(this.UUID, value => this.analysis2 = value);
            this.file.slots.onSlot3Serialize.set(this.UUID, value => this.analysis3 = value);
            this.file.slots.onSlot4Serialize.set(this.UUID, value => this.analysis4 = value);
            this.file.slots.onSlot5Serialize.set(this.UUID, value => this.analysis5 = value);
            this.file.slots.onSlot6Serialize.set(this.UUID, value => this.analysis6 = value);
            this.file.slots.onSlot7Serialize.set(this.UUID, value => this.analysis7 = value);

            // Execute initial sync
            this.syncAnalysesFromMainToLocalFile();

        }
    }

    protected updated(_changedProperties: PropertyValues): void {

        super.updated(_changedProperties);

        // Sync analyses from the main file
        if (
            (
                _changedProperties.has("hasAnalyses")
                || _changedProperties.has("isOpen")
            )
            && this.file
        ) {

            if (this.hasAnalyses === false) {
                this.clearAnalyses();

            } else {
                this.syncAnalysesFromMainToLocalFile();
            }

        }

        // Configure file for video export
        if (this.fileProviderRef.value && this.fileProviderRef.value.file) {

            const file = this.fileProviderRef.value.file;

            // This is crucial for exporting the video correctly
            // file.setPreferWebGl(false);
            // file.switchToCPURenderer();

        }

    }



    public onInstanceCreated(instance: Instance): void {
        // throw new Error("Method not implemented.");
    }
    public onFailure(error: ThermalFileFailure): void {
        // throw new Error("Method not implemented.");
    }

    public static mayExportVideo(
        instance: Instance
    ): boolean {
        return instance.timeline.isSequence;
    }


    private recorder?: VideoRecorder;

    protected async startRecording(): Promise<void> {

        this.recorder = new VideoRecorder(
            this.innerInstance!,
            this.exportElement!
        );

        await this.recorder.capture();

    }








    public renderExportButton(): unknown {
        return html`<thermal-btn
            slot="button"
            variant="primary"
            icon="download"
            iconStyle="outline"
            @click=${async () => {
                this.startRecording();
            }}
        >
            Export
        </thermal-btn>`;
    }

    protected renderConfiguration(): unknown {

        const slots: unknown[] = [];

        slots.push(slotOrNothing(
            "thermalrange",
            html`<registry-palette-dropdown></registry-palette-dropdown>
            <registry-range-form></registry-range-form>`
        ));

        slots.push(slotOrNothing(
            "display",
            html`<thermal-radio
                .checked=${this.hasHistogram}
                .onChange=${(checked: boolean) => {
                    this.setHasHistogram(checked);
                }}
            >Zobrazit histogram</thermal-radio>
            <thermal-radio
                .checked=${this.hasScale}
                .onChange=${(checked: boolean) => {
                    this.setHasScale(checked);
                }}
            >Zobrazit škálu</thermal-radio>

            <input type="number" step="1" min="0" max="100" width="50px" value=${this.exportPadding} @input=${(e: Event) => this.setExportPadding((e.target as HTMLInputElement).valueAsNumber)}></input>
            
            <input type="number" step="50" min="500" max="2000" width="50px" value=${this.exportWidth} @input=${(e: Event) => this.setExportWidth((e.target as HTMLInputElement).valueAsNumber)}></input>

            <thermal-radio
                .checked=${this.hasAnalyses}
                .onChange=${(checked: boolean) => {
                    this.setHasAnalyses(checked);
                }}
            >Zobrazit analýzy</thermal-radio>

            ${this.hasAnalyses ? html`<thermal-radio
                .checked=${this.exportVertical}
                .onChange=${(checked: boolean) => {
                        this.setExportVertical(checked);
                    }}
            >Svislý layout</thermal-radio>`: nothing}
            
            `
        ));

        return html`<div class="config">
            <div class="config-label">Nastavení exportu videa</div>
            <div class="config-slots">
                ${slots}
            </div>
        </div>`;

    }

    

    



    public renderExportElement(): unknown {
        if (!this.file) {
            return nothing;
        }

        const content: unknown[] = [];

        if (this.hasHistogram) {
            content.push(cache(html`<registry-histogram></registry-histogram>`));
        }

        if (this.hasScale) {
            content.push(html`<registry-range-slider></registry-range-slider>
            ${html`<registry-ticks-bar></registry-ticks-bar>`}`);
        }

        const analyses = this.hasAnalyses
            ? html`<div class="export-sidebar">
                <file-analysis-table interactiveAnalysis="false"></file-analysis-table>
                <div style="height: 300px;width: 100%;">
                    <file-analysis-graph></file-analysis-graph>
                </div>
            </div>`
            : nothing;

        const classes = {
            export: true,
            "export-vertical": this.exportVertical,
            "export-analyses": this.hasAnalyses
        }

        const previewClasses = {
            preview: true,
            "preview--exporting": this.isRecording,
            "preview--composing": this.isRecording && this.recordingPhase === 1
        }

        return html`<div class="export-label">
            <thermal-icon icon="arrowDown" variant="outline" style=""></thermal-icon>
        </div>

        <div class=${classMap(previewClasses)}>

            <div 
                ${ref(this.exportDivRef)} 
                class=${classMap(classes)} 
                style="width: ${this.exportWidth}px; padding: ${this.exportPadding}px;"
            >
                <div class="export-file">
                    <div>${content}</div>
                    <file-canvas></file-canvas>
                    <file-timeline hasplaybutton="false"></file-timeline>
                </div>
                ${analyses}
            </div>

            <div class="compilation">
                <canvas 
                    ${ref(this.compilationCanvasRef)} 
                ></canvas>
            </div>
            
            ${this.renderOverlayBlank()}

        </div>
        `;
    }


    public renderDialog(): unknown {

        if (!this.file || !this.registry || !this.group) {
            return nothing;
        }

        const content = this.isOpen
            ? html`<registry-provider 
                    slug=${this.slug} 
                    slot="content"
                    
                >
                    <group-provider slug=${this.slug}>
                        <file-provider 
                            ${ref(this.fileProviderRef)}
                            thermal=${this.file.thermalUrl}
                            analysis1=${ifDefined(this.analysis1)}
                            analysis2=${ifDefined(this.analysis2)}
                            analysis3=${ifDefined(this.analysis3)}
                            analysis4=${ifDefined(this.analysis4)}
                            analysis5=${ifDefined(this.analysis5)}
                            analysis6=${ifDefined(this.analysis6)}
                            analysis7=${ifDefined(this.analysis7)}
                        >

                            ${this.renderConfiguration()}

                            ${this.renderExportElement()}

                            <file-timeline></file-timeline>
                        
                        </file-provider>
                    </group-provider>
                </registry-provider>`
            : nothing;

        return html`<thermal-dialog
            ${ref(this.dialogRef)}
            label="Export videa"
            .beforeClose=${async () => {

                this.isOpen = false;

                return true;

            }}
        >

            <div slot="content" class="layout">
                ${content}
                
                ${this.renderRecordingProgress()}

            </div>

            ${this.renderExportButton()}
        
        </thermal-dialog>`;

    }

    public renderTriggerButton(): unknown {
        return html`<thermal-btn
            @click=${() => {
                this.log("Otevírám dialog", this.dialogRef.value);
                this.dialogRef.value?.setOpen();
                this.isOpen = true;
            }}
            variant=${this.variant || "default"}
            size=${this.size || "md"}
            plain="${this.plain || false}"
            icon=${ifDefined(this.icon)}
            iconStyle=${ifDefined(this.iconStyle)}
            tooltip=${ifDefined(this.tooltip)}
            pre=${ifDefined(this.pre)}
        >
            ${this.label}
        </thermal-btn>`;
    }



    public renderOverlayBlank(): unknown {
        return html`<div class="overlay overlay__blank"></div>`;
    }

    public renderRecordingProgress(): unknown {

        if ( this.isRecording === false ) {
            return nothing;
        }

        const phase = this.recordingPhase;


        const texts = [
            "Záznam přehrávání",
            "Komplilace snímků do videa",
            "Stažení videa"
        ]

        const phases = texts.map((text, index) => html`
            <div class="overlay-phase ${phase === index ? "active" : ""}">
                <div class="phase-indicator">
                </div>
                <div class="phase-label">
                    ${text}
                </div>
            </div>
        `);

        return html`<div class="overlay overlay__recording">
        
            <thermal-spinner></thermal-spinner>

            <ul class="overlay-phases">
                ${phases}
            </ul>
        
        </div>`;

    }

    static styles?: CSSResultGroup | undefined = css`
    
        :host {
            font-size: var( --thermal-font-size );
            color: var( --thermal-text );
        }

        .layout {
            display: flex;
            gap: 1em;
            flex-direction: column;
            justify-content: center;
            position: relative;
        }

        registry-provider,
        group-provider,
        file-provider {
            display: contents;
        }

        .preview {

            position: relative;

            .compilation {
                display: none;
            }

            &.preview--exporting {}

            &.preview--composing {
            
                .compilation {
                    display: block;
                }

                .export {
                    display: none;
                }

            }
        
        }

        .export {
            background: var( --thermal-background );
            display: flex;
            gap: 1em;

            .export-file {
                width: 100%;
            }

            &.export-vertical {
            
                flex-direction: column;

            }

            &.export-analyses {
            
                .export-file,
                file-analysis-complex {
                    width: calc( 50% - .5em );
                }

                &.export-vertical {
                
                    .export-file,
                    file-analysis-complex {
                        width: 100%;
                    }
                }

            }

        }

        .export.export-vertical {
            flex-direction: column;
        }

        .export-sidebar {

            display: flex;
            flex-direction: column;
            gap: 1em;
            
            file-analysis-graph {

            }

        }



        .config {
        
            padding: 1.5em 1em 1em 1em;
            border: 1px solid var( --thermal-slate );
            position: relative;
            background: var( --thermal-background );

        }

        .config-label {
            position: absolute;
            display: inline-block;
            top: -1em;
            left: 1em;
            font-size: .9em;
            color: var(--thermal-slate-dark);
            border: 1px solid var( --thermal-slate );
            background: var( --thermal-background );
            padding: .3em .5em;
            text-transform: uppercase;
            white-space: 1px;
        }

        .config-slots {
            display: flex;
            gap: 1em;
        }






        .overlay {

            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            z-index: 9999;

            /** background: rgba( var( --thermal-slate-light ), .6 ); */

            
        
        }

        .overlay__blank {
            
        }

        .overlay__recording {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2em;
            color: var( --thermal-foreground ); 
            background: color-mix(in srgb, var( --thermal-slate-light ) 50%, transparent);

            thermal-spinner {
                height: auto;
            }

        }

        

        
    
    `;

    protected render(): unknown {
        return html`
            ${this.renderDialog()}
            ${this.renderTriggerButton()}
        `
    }



}