import { Instance, TimeFormat } from "@labirthermal/core";
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
import { BaseAppWithPngExportContext, pngExportFsContext, pngExportFsSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../utils/converters/pngExportContext";

@customElement("thermal-dropin-app")
export class DropinAppElement extends BaseAppWithPngExportContext implements IWithlocale {

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
        ${this.files.map(file => this.renderDetail(file))}
        `;
    }


    protected renderDetail(
        file: Instance
    ) {

        return html`
            <article class="file">
                <file-mirror .file="${file}" autoclear="true">

                    <file-detail .onback=${() => file.group.files.removeFile(file)}></file-detail>
                
                </file-mirror>
            </article>
        `;

    }


    protected renderMultipleFiles() {
        return html`
        <div class="files-multiple">
        ${this.files
                // .sort((a,b)=> a.timestamp - b.timestamp)
                .map(file => this.renderDetail(file))}
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
                                <thermal-btn slot="bar-pre" @click="${() => this.handleClear()}" tooltip="Odstranit tento soubor a nahrát nový">${t(T.clear)}</thermal-btn>

                                <registry-palette-dropdown slot="bar-pre"></registry-palette-dropdown>

                                <registry-range-form stacked="false" slot="bar-pre"></registry-range-form>

                                        
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
                                <thermal-btn slot="invoker" tooltip="${t(T.config)}" icon="settings" iconStyle="solid">
                                </thermal-btn>
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