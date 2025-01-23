import { ApiFolderContentResponse, FolderFileType } from "@labir/api";
import { AvailableThermalPalettes, ThermalGroup, TimeFormat } from "@labir/core";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { T } from "../../translations/Languages";

import { createRef, Ref, ref } from "lit/directives/ref.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { GroupProviderElement } from "../../hierarchy/mirrors/GroupMirror";
import { booleanConverter } from "../../utils/booleanMapper";

@customElement("remote-folder-app")
export class RemoteFolderApp extends BaseElement {

    /** The API endpoint main URL address */
    @property({ type: String, reflect: true })
    public url!: string;

    /** An optional subfolder relative to the API endpoint in `this.url` */
    @property({ type: String, reflect: true })
    public subfolder?: string;

    /** The remote folder name relative to `this.url` resp. to `this.subfolder` in case the subfolder is set. */
    @property({ type: String, reflect: true })
    public folder!: string;


    /** The error string */
    @state()
    protected error?: string;

    @state()
    protected loading: boolean = true;

    @state()
    protected data?: ApiFolderContentResponse;

    @state()
    protected label?: string;

    @state()
    protected cls: keyof RemoteFolderApp["clsx"] = "md";


    @property({ type: String, reflect: true })
    license?: string;

    @property({ type: String, reflect: true })
    author?: string;

    @property({ type: String, reflect: true, attribute: true })
    palette: AvailableThermalPalettes = "jet";

    @property({ type: String, reflect: true, converter: booleanConverter(true) })
    showhistogram: boolean = false;

    protected groupRef: Ref<GroupProviderElement> = createRef();

    protected group?: ThermalGroup = undefined;

    /** We need to store the last width of the component so that we are able to recognise when the width actually changes. Used by `this.resizeObserver`*/
    protected lastWidth?: number;

    /** We need to observe the actual element width in order to automatically adjust the columns width */
    protected resizeObserver: ResizeObserver | undefined;

    connectedCallback(): void {
        super.connectedCallback();

        if (this.url !== undefined && this.folder !== undefined) {
            // this.loadData(this.url, this.folder, this.subfolder);
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

        if ( _changedProperties.has( "folder" ) || _changedProperties.has("url") || _changedProperties.has( "subfolder" ) ) {
            if ( this.folder, this.url ) {
                this.loadData( this.url, this.folder, this.subfolder );
            }
        }

        if (_changedProperties.has("data")) {

            this.resizeObserver?.disconnect();
            delete this.resizeObserver;

            this.resizeObserver = new ResizeObserver((entries) => {

                const entry = entries[0];
                const width = entry.contentRect.width;

                if (this.lastWidth !== width) {

                    let cls = "xs";
                    if (width > 500) cls = "sm";
                    if (width > 900) cls = "md";
                    if (width > 1300) cls = "lg";
                    if (width > 1600) cls = "xl";

                    this.cls = cls as keyof RemoteFolderApp["clsx"];
                    this.lastWidth = width;

                }

            });

            const app = this.renderRoot.querySelector(".files");

            if (app) {
                this.resizeObserver.observe(app);
            }
        }

    }

    protected getUrl(url: string, folder: string, subfolder?: string): string {
        return subfolder !== undefined
            ? `${url}?scope=${subfolder}&${folder}`
            : url + "?" + folder;
    }

    protected async loadData(url: string, folder: string, subfolder?: string) {

        try {

            this.loading = true;

            if (this.group) {
                this.group.files.clearAllListeners();
            }


            const target = subfolder !== undefined
                ? `${url}?scope=${subfolder}&${folder}`
                : url + "?" + folder;


            const data = await fetch(target, {
                // mode: "no-cors"
            });

            if (data.ok) {

                this.data = await data.json() as ApiFolderContentResponse;

                this.loading = false;

                if (this.data.success === false) {
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
                            <file-range-propagator></file-range-propagator>
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

    protected renderInfo() {

        if (this.data) {

            const url = this.getUrl( this.url, this.folder, this.subfolder );
            const request = "Request";

            const req = {
                "API Root": this.url,
                "Subfolder": this.subfolder,
                "Folder": this.folder,
                [request]: url
            }

            const res = {
                "time": TimeFormat.human( this.data.time )
            }


            return html`
                <thermal-dialog label="Remote folder info">

                    <slot name="invoker" slot="invoker">
                        <thermal-button>Remote folder info</thermal-button>
                    </slot>

                    <div slot="content">

                        ${this.data.info["description"] ? html`<p>${this.data.info["description"]}</p>` : nothing }

                        <table>
                            
                            <caption>Request information</caption>

                            <tbody>

                                ${Object.entries( req ).map( ([key, value]) => {

                                    const isLink = key === request;

                                    const link = isLink
                                        ? html`<a href="${value}" target="_blank">${value}</a>`
                                        : value;

                                    return html`<tr>
                                        <td>${key}</td>
                                        <td>${link}</td>
                                    </tr>`;

                                } )}
                            
                            </tbody>

                        </table>
                    
                    </div>
                
                </thermal-dialog>
            `;

        }

        return nothing;

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

        table {
            border: 1px solid var(--thermal-slate);
            border-collapse: collapse;
        }

        td, th {
            border: 1px solid var( --thermal-slate );
            padding: 5px;
        }

        caption {
            text-align: left;
            padding: 5px;
            font-weight: bold;
        }

    `;

    protected render(): unknown {

        let title = t(T.loading) + "...";

        if (this.data?.info !== undefined) {
            title = this.data.info.name;
        }

        if (this.error !== undefined) {
            title = "Error";
        }

        return html`
            <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
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

                                        <registry-opacity-slider></registry-opacity-slider>

                                        <registry-range-full-button></registry-range-full-button>

                                        ${this.renderColumnsSwitch()}

                                        <group-download-dropdown></group-download-dropdown>

                                        ${this.renderInfo()}

                                    </thermal-bar>

                                </div>

                            ${this.showhistogram ? html`<registry-histogram></registry-histogram>` : nothing}
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>`

                : nothing}
                            
                        ${this.error ? unsafeHTML(this.error) : nothing}

                        ${this.error === undefined && this.data ? this.renderData(this.data) : nothing}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`;
    }


}