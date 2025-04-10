import { Instance, TimeFormat } from "@labir/core";
import { provide } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { publicIpv4 } from "public-ip";
import { GroupDropin } from "../controls/group/GroupDropin";
import { BaseElement } from "../hierarchy/BaseElement";
import { GroupProviderElement } from "../hierarchy/mirrors/GroupMirror";
import { T } from "../translations/Languages";
import { initLocalesInTopLevelElement, IWithlocale, localeContext, localeConverter, Locales } from "../translations/localeContext";
import { interactiveAnalysisContext } from "../utils/context";
import { pngExportFsContext, pngExportFsSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../utils/converters/pngExportContext";

@customElement("thermal-dropin-app")
export class DropinAppElement extends BaseElement implements IWithlocale {

    @state()
    protected dropinRef: Ref<GroupDropin> = createRef();

    @state()
    protected groupRef: Ref<GroupProviderElement> = createRef();

    @state()
    loaded: boolean = false;

    @state()
    protected listener?: ReturnType<typeof setTimeout>;

    @state()
    protected files: Instance[] = [];

    @state()
    protected ip?: string;

    @provide({ context: interactiveAnalysisContext })
    protected interactiveanalysis: boolean = true;



    @provide({ context: pngExportWidthContext })
    protected pngExportWidth: number = 1200;

    @provide({ context: pngExportWidthSetterContext })
    protected pngExportWidthSetterContext = (value: number) => {
        this.pngExportWidth = value;
    }


    @provide({ context: pngExportFsContext })
    protected pngExportFs: number = 20;

    @provide({ context: pngExportFsSetterContext })
    protected pngExportFsSetterContext = (value: number) => {
        this.pngExportFs = value;
    }

    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;

    connectedCallback(): void {
        super.connectedCallback();
        publicIpv4().then(ip => this.ip = ip);
    }


    public firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        initLocalesInTopLevelElement(this);

        if (this.groupRef.value !== undefined) {

            this.groupRef.value.group.files.addListener(this.UUID, (value) => {

                if (this.groupRef.value !== undefined) {

                    this.groupRef.value.group.analysisSync.turnOff();
                    if (value.length > 0) {
                        this.groupRef.value.group.analysisSync.turnOn(value[0]);
                    }

                }


                value.forEach(file => {
                    file.analysis.reset();
                    file.analysis.layers.clear();


                    const data = {
                        ip: this.ip,
                        fileName: file.fileName,
                        fileSize: file.bytesize,
                        fileIsSequence: file.timeline.isSequence,
                        fileNumFrames: file.timeline.frameCount,
                        fileWidth: file.width,
                        fileHeight: file.height,
                        fileTimestamp: file.timeline.frames[0].absolute,
                        fileDataType: file.fileDataType,
                        userAgent: window.navigator.userAgent,
                        windowWidth: window.innerWidth,
                        windowHeight: window.innerHeight,
                        time: (new Date()).getTime(),
                        url: window.location.href
                    }

                    this.dispatchEvent(new CustomEvent("uploaded", {
                        detail: data,
                        bubbles: true,
                        composed: true
                    }));

                    //file.unmountFromDom();
                });

                if (this.listener !== undefined) {
                    clearTimeout(this.listener);
                }

                if (value.length === 0) {
                    this.files = [];
                } else {
                    this.files = [value[0]];
                }


                this.listener = setTimeout(async () => {

                    const registry = this.groupRef.value?.group.registry;

                    if (registry !== undefined) {
                        await registry.postLoadedProcessing();
                        if (registry.minmax.value !== undefined) {
                            registry.range.imposeRange({
                                from: registry.minmax.value.min,
                                to: registry.minmax.value.max
                            });
                        }

                    }
                }, 0);

                this.log("files", value);
            });

        }

    }

    protected handleClear() {

        if (this.groupRef.value !== undefined) {
            this.groupRef.value.group.files.removeAllInstances();

        }

    }


    public static styles = css`
    
        .browser {
            display: grid;
            grid-template-columns: 2rem 1fr;
            gap: var(--thermal-gap);
            padding-top: var(--thermal-gap);
        }

        .file {
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            background: var(--thermal-background);

            file-analysis-graph {
                height: 300px;
            }

            header {
                display: flex;
                align-items: center;
            }

            .file-label {
                display: flex;
                flex-grow: 1;
                gap: 5px;
                align-items: center;
                padding-bottom: var(--thermal-gap);
                div {
                    opacity: .5;
                }
            }

            h1, h2 {
                margin: 0;
                padding: 0;
                font-size: var(--thermal-fs);
                line-height: 1em;
            }

            .file-expanded {
                display: grid;
                grid-template-columns: 50% calc( 50%  - var(--thermal-gap));
                gap: var(--thermal-gap);
            }

        }

        .files-multiple {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(calc(100% / 4), 1fr));
            gap: var(--thermal-gap);
        }

    `;


    protected renderIntroScene() {

        return html`
            <group-dropin></group-dropin>
        `;

    }

    protected renderBrowserScene() {

        return html`
        <div class="browser-bar" slot="pre">
            <registry-histogram expandable="true"></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
            
        </div>

        <div class="browser">
            
            <div class="browser-tools">
                <group-tool-bar></group-tool-bar>
            </div>
            <div class="browser-content">
                ${this.files.length === 1
                ? this.renderOneFile()
                : this.renderMultipleFiles()
            }
            </div>
        </div>
        `;

    }

    protected renderOneFile() {
        return html`
        ${this.files.map(file => this.renderDetail(file, true))}
        `;
    }

    protected renderFileHeader(file: Instance) {
        return html`
            <header>
                <div class="file-label">

                    <thermal-button
                        @click=${() => file.group.files.removeFile(file)}
                        variant="foreground"
                    >x</thermal-button>

                    <file-info-button>
                        <thermal-button slot="invoker">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" height="1.5em" style="margin-bottom: -5px;">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />
                            </svg>


                            ${file.fileName}

                        </thermal-button>
                    </file-info-button>

                    <file-download-dropdown></file-download-dropdown>

                    <div>${TimeFormat.human(file.timestamp)}</div>
                </div>
            </header>
        `;
    }


    protected renderDetail(
        file: Instance,
        expanded: boolean = false
    ) {

        return html`
            <article class="file">
                <file-mirror .file="${file}" autoclear="true">

                    ${this.renderFileHeader(file)}

                    ${expanded === true
                ? html`
                        <div class="file-expanded">
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                            </div>
                            <div>
                                <file-analysis-complex></file-analysis-complex>
                            </div>
                        </div>
                        `
                : html`
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                                <file-analysis-overview></file-analysis-overview>
                                <file-analysis-graph></file-analysis-graph>
                            </div>
                        `
            }
                
                </file-mirror>
            </article>
        `;

    }


    protected renderMultipleFiles() {
        return html`
        <div class="files-multiple">
        ${this.files
                // .sort((a,b)=> a.timestamp - b.timestamp)
                .map(file => this.renderDetail(file, false))}
        </div>
        `;

    }


    protected render(): unknown {

        try {

            return html`

            <manager-provider slug="${this.UUID}" palette="iron">

                <registry-provider slug="${this.UUID}" palette="iron">

                    <group-provider ${ref(this.groupRef)} slug="${this.UUID}">

                        <thermal-app 
                            label="LabIR Edu Analyser"
                            showfullscreen="true"
                        >

                            <group-dropin-input slot="bar-pre"></group-dropin-input>

                            ${this.files.length > 0 
                                ? html`
                                <thermal-button slot="bar-pre" @click="${() => this.handleClear()}">${t(T.clear)}</thermal-button>

                                <registry-palette-dropdown slot="bar-pre"></registry-palette-dropdown>

                                <registry-range-full-button slot="bar-pre"></registry-range-full-button>

                                <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>
                                        
                                ` 
                                : nothing}

                            ${this.files.length > 1 
                                ? html`
                                    <group-download-dropdown slot="bar-pre"></group-download-dropdown><registry-range-full-button slot="bar-pre"></registry-range-full-button>` 
                                : nothing}

                                    <slot name="header"></slot>
                                </thermal-bar>
                            </div>

                            <thermal-dialog label="${t(T.config)}" slot="bar-pre">
                                <thermal-button slot="invoker">
                                    <svg style="width: 1em; transform: translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                        <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
                                    </svg>
                                </thermal-button>
                                <div slot="content">
                                    <table>
                                        <png-export-panel></png-export-panel>
                                        <registry-display-panel></registry-display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            <slot name="bar-pre" slot="bar-pre"></slot>

                            ${this.files.length === 0 ? this.renderIntroScene() : this.renderBrowserScene()}
                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `;

        } catch (err) {

            return html`Stala se chyba`;

        }

    }

}