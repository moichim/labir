import { ApiFolderContentResponse, FolderFileType } from "@labir/api";
import { AvailableThermalPalettes, Instance, ThermalGroup, TimeFormat } from "@labir/core";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { T } from "../../translations/Languages";
import { ifDefined } from "lit/directives/if-defined.js";

import { map, latLng, tileLayer, MapOptions } from "leaflet";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { GroupProviderElement } from "../../hierarchy/mirrors/GroupMirror";
import { provide } from "@lit/context";
import { interactiveAnalysisContext } from "../../utils/context";
import { booleanConverter } from "../../utils/booleanMapper";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("remote-folder-app")
export class RemoteFolderApp extends BaseElement {

    @property({ type: String, reflect: true })
    folder!: string;

    @property({ type: String, reflect: true })
    subfolder?: string;

    @property({ type: String, reflect: true })
    url!: string;

    @state()
    protected error?: string;

    @state()
    protected loading: boolean = true;

    @state()
    protected data?: ApiFolderContentResponse;

    @state()
    protected label?: string;

    @property({ type: String, reflect: true })
    license?: string;

    @property({ type: String, reflect: true })
    author?: string;

    @property({ type: String, reflect: true, attribute: true })
    palette: AvailableThermalPalettes = "jet";

    @property({ type: String, reflect: true, converter: booleanConverter(true) })
    showhistogram: boolean = true;

    @state()
    highlightFrom?: number;

    @state()
    highlightTo?: number;

    groupRef: Ref<GroupProviderElement> = createRef();

    protected group?: ThermalGroup = undefined;

    protected w?: number;

    @state()
    protected cls: keyof RemoteFolderApp["clsx"] = "md";

    protected resizeObserver: ResizeObserver | undefined;

    @provide({ context: interactiveAnalysisContext })
    protected interactiveAnalysis = true;

    connectedCallback(): void {
        super.connectedCallback();

        if (this.url !== undefined && this.folder !== undefined) {
            this.loadData(this.url, this.folder, this.subfolder);
        }

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.resizeObserver?.disconnect();
        this.resizeObserver = undefined;
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        if (this.groupRef.value) {
            this.group = this.groupRef.value.group;
        }

    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("data")) {

            console.log("changed data", this.data);

            this.resizeObserver?.disconnect();
            delete this.resizeObserver;

            this.resizeObserver = new ResizeObserver((entries) => {

                const entry = entries[0];
                const width = entry.contentRect.width;

                if (this.w !== width) {

                    let cls = "xs";
                    if (width > 500) cls = "sm";
                    if (width > 900) cls = "md";
                    if (width > 1300) cls = "lg";
                    if (width > 1600) cls = "xl";

                    this.cls = cls as keyof RemoteFolderApp["clsx"];
                    this.w = width;

                }

            });

            const app = this.renderRoot.querySelector(".files");

            if (app) {
                this.resizeObserver.observe(app);
            }
        }

    }

    protected async loadData(url: string, folder: string, subfolder?: string) {

        try {

            this.loading = true;

            const target = subfolder !== undefined
                ? `${url}?scope=${subfolder}&${folder}`
                : url + "?" + folder;


            const data = await fetch(target, {
                // mode: "no-cors"
            });

            if (data.ok) {

                this.data = await data.json() as ApiFolderContentResponse;
                this.loading = false;

                if ( this.data.success === false ) {
                    this.error = `The remote folder <code>${target}</code> was not found!`;
                }

            } else {
                this.error = `The remote folder <code>${target}</code> was not found!`;
                this.loading = false;
            }

        } catch (err) {
            this.error = `The remote folder <code>${url}</code> was not found!`;
            this.loading = false;
        }



    }


    protected renderloading() {

        return html`<div>

            Načítám vzdálenou složku ${this.folder} from ${this.url} 
        
        </div>`;

    }

    protected renderData(data: ApiFolderContentResponse) {

        return html`
            <div class="files ${this.cls}">
                ${data.files.map(file => this.renderFile(file))}
            </div>
        `;

    }


    protected renderFile(file: FolderFileType) {

        return html`<div class="file">
            <div class="file-inner">
                <file-provider 
                    thermal="${file.lrc}" 
                    visible=${ifDefined(file.png)}
                    batch="true"
                >

                    <div class="file-header">
                        <h2><span>${TimeFormat.human(file.timestamp * 1000)}</span></h2>
                        <div>
                            <file-download-lrc></file-download-lrc>
                            <file-download-png></file-download-png>
                            <file-button 
                                label="${t(T.range).toLocaleLowerCase()}"
                                .onEnter=${(instance: Instance) => {
                this.highlightFrom = instance.min;
                this.highlightTo = instance.max;
            }}
                                .onAction=${(instance: Instance) => {
                instance.group.registry.range.imposeRange({
                    from: instance.min,
                    to: instance.max
                });
            }}
                                .onLeave=${() => {
                this.highlightFrom = undefined;
                this.highlightTo = undefined;
            }}
                            ></file-button>

                            <file-info-button>
                                <file-button slot="invoker" label="${t(T.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>

                        </div>
                    </div>
                    
                    <file-canvas></file-canvas>
                    <file-timeline hasPlayButton="false" hasInfo="false"></file-timeline>
                    <file-analysis-table interactiveanalysis="true"></file-analysis-table>
                </file-provider>
            </div>
        </div>`;

    }


    protected clsx = {
        "xs": 1,
        "sm": 2,
        "md": 3,
        "lg": 4,
        "xl": 5
    }

    protected clsToStr(
        cls: keyof RemoteFolderApp["clsx"]
    ): string {
        return t(T.columns, { num: this.clsx[cls] })
    }

    protected renderColumnsSwitch() {

        return html`<thermal-dropdown>
            <span slot="invoker">${this.clsToStr(this.cls)}</span>
            <thermal-button slot="option" @click=${() => this.cls = "xs"}>${this.clsx["xs"]}</thermal-button>
            <thermal-button slot="option" @click=${() => this.cls = "sm"}>${this.clsx["sm"]}</thermal-button>
            <thermal-button slot="option" @click=${() => this.cls = "md"}>${this.clsx["md"]}</thermal-button>
            <thermal-button slot="option" @click=${() => this.cls = "lg"}>${this.clsx["lg"]}</thermal-button>
            <thermal-button slot="option" @click=${() => this.cls = "xl"}>${this.clsx["xl"]}</thermal-button>
        </thermal-dropdown>`;
    }


    static styles?: CSSResultGroup | undefined = css`


        group-tool-buttons {
            padding-top: 10px;
        }
    
        .files {
            display: grid;
            grid-template-columns: auto auto auto;
            margin: 0 -6px;
            padding-top: var(--thermal-fs);
        }


        .files.xs {
            grid-template-columns: 1fr; /* 1 sloupec */
        }

        .files.sm {
            grid-template-columns: repeat(2, 50%); /* 2 sloupce */
        }

        .files.md {
            grid-template-columns: repeat(3, 33%); /* 3 sloupce */
        }

        .files.lg {
            grid-template-columns: repeat(4, 25%); /* 4 sloupce */
        }

        .files.xl {
            grid-template-columns: repeat(5, 20%); /* 4 sloupce */
        }


        .file {
            box-sizing: border-box;
            padding: 6px;
        }

        .file-inner {
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
        }

        .file-header {
            display: flex;
            width: 100%;
            align-items: center;
            padding: 5px;
            box-sizing: border-box;
            
            h2 {
                flex-grow: 1;
                font-size: calc( var(--thermal-fs) * .9 );
                margin: 0;
                padding: 0;

                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

            }
            div {
                white-space: nowrap;
            }
        }

    `;

    protected render(): unknown {

        let title = t(T.loading) + "...";

        if ( this.data?.info !== undefined ) {
            title = this.data.info.name;
        }

        if ( this.error !== undefined ) {
            title = "Error";
        }

        this.log( this.error, this.data );

        return html`
            <manager-provider slug="folders_app___uuid__${this.UUID}">
                <registry-provider slug="folders_app_registry">
                    <group-provider slug="folders_app_group" ${ref(this.groupRef)}>
        
                        <thermal-app
                            author=${ifDefined(this.author)}
                            license=${ifDefined(this.license)}
                        >

                            <thermal-button variant="foreground" interactive="false" slot="bar">
                                ${title}
                            </thermal-button>

                            ${this.error === undefined ? html`

                                <div slot="bar" style="flex-grow: 4;">

                                    <thermal-bar>
                                        <registry-palette-dropdown></registry-palette-dropdown>
                                        <registry-range-full-button 
                                            @mouseenter=${() => {
                    if (this.group) {
                        this.highlightFrom = this.group.registry.minmax.value?.min;
                        this.highlightTo = this.group.registry.minmax.value?.max;
                    }
                }}
                                            @mouseleave=${() => {
                    this.highlightFrom = undefined;
                    this.highlightTo = undefined;
                }}
                                        ></registry-range-full-button>
                                        ${this.renderColumnsSwitch()}

                                        <group-download-dropdown></group-download-dropdown>

                                        <registry-opacity-slider></registry-opacity-slider>

                                    </thermal-bar>

                                </div>

                            ${this.showhistogram ? html`<registry-histogram></registry-histogram>` : nothing}
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar highlightFrom=${ifDefined(this.highlightFrom)} highlightTo=${ifDefined(this.highlightTo)}></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>`

                        : nothing }
                            
                        ${this.error ? unsafeHTML( this.error ) : nothing}

                        ${ this.error === undefined && this.data ? this.renderData(this.data) : nothing}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`;
    }


}