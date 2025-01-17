import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { ApiEverythingResponse, ApiInfoResponse, FolderFileType, FolderInfoBase } from "@labir/api";
import { AvailableThermalPalettes, ThermalManager, ThermalPalettes } from "@labir/core";
import { provide } from "@lit/context";
import { managerContext, managerGraphFunctionContext, ManagerGraphFunctionContext, ManagerPaletteContext, managerPaletteContext, managerSmoothContext } from "../../hierarchy/providers/context/ManagerContext";
import { createOrGetManager } from "../../hierarchy/providers/getters";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { ApiInfoContext, apiInfoContext, currentGroupingContext, currentGrouppingSetterContext, currentStateContext, currentStateSetterContext, DataGroup, FOLDER_GROUPING, FOLDER_MODE, OnlyGroups, onlysContext, OnlySettingsContext, onlySettingsContext } from "./folderContext";

@customElement("remote-browser-app")
export class RemoteBrowserApp extends RegistryProviderElement {

    @provide({ context: managerContext })
    manager!: ThermalManager;

    @provide({ context: managerPaletteContext })
    @property({
        type: String,
        attribute: true,
        reflect: true,
        converter: {
            fromAttribute: (value: AvailableThermalPalettes): ManagerPaletteContext => {
                return {
                    key: value,
                    data: ThermalPalettes[value]
                };
            },
            toAttribute: (value: ManagerPaletteContext): string => {
                return value.key.toString();
            }
        }
    })
    public palette: ManagerPaletteContext = {
        key: "jet",
        data: ThermalPalettes["jet"]
    }

    @provide({ context: managerSmoothContext })
    @property({ type: String, reflect: true, attribute: true })
    smooth: boolean = false;

    @provide({ context: managerGraphFunctionContext })
    @property({ type: String, reflect: true, attribute: true })
    graphSmooth: ManagerGraphFunctionContext = false;

    @property({ type: Boolean, reflect: true })
    autoclear: boolean = false;

    @property({ type: String, reflect: true, attribute: true })
    url?: string;

    @property({ type: String })
    slug!: string;

    @provide({ context: apiInfoContext })
    @state()
    protected info: ApiInfoContext;

    @provide({ context: currentStateContext })
    @state()
    protected mode: FOLDER_MODE = FOLDER_MODE.INTRO;

    @provide({ context: currentStateSetterContext })
    protected modeSetter = this.setMode.bind(this);

    @provide({ context: currentGroupingContext })
    @state()
    protected grouping: FOLDER_GROUPING = FOLDER_GROUPING.DAYS;

    @provide({ context: currentGrouppingSetterContext })
    protected grouppingSetter = this.setGrouping.bind(this);

    @provide({ context: onlysContext })
    @state()
    protected only: OnlyGroups = [];

    @state()
    protected data: DataGroup[] = [];

    @state()
    protected dataLoading = false;

    @provide({ context: onlySettingsContext })
    protected onlySet: OnlySettingsContext = {
        all: this.allGroups.bind(this),
        add: (folder: string) => {
            if (!this.only.includes(folder)) {
                this.only = [...this.only, folder];
            }
        },
        remove: (folder: string) => {
            if (this.only.includes(folder)) {
                this.only = this.only.filter(f => f !== folder);
            }
        },
        only: (folders: string[]) => {
            this.only = folders;
        }
    }

    protected allGroups() {
        this.only = this.info
            ? Object.keys(this.info.folders)
            : []
    }

    connectedCallback(): void {

        if (this.slug == undefined) {
            this.slug = this.UUID;
        }

        this.manager = createOrGetManager(this.slug);

        super.connectedCallback();

        if (this.url) {
            this.fetchMainInfo(this.url);
        }

    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);


        // Zapnul jsem grupy a nebo jsem se přesunul do režimu grup
        if (_changedProperties.has("mode") || _changedProperties.has("groupping")) {

        }

    }


    protected async fetchMainInfo(
        url: string
    ) {

        const data = await fetch(url);
        const json = await data.json() as ApiInfoResponse;

        if (json.success === true) {
            this.info = json;
        } else {
            this.info = undefined;
        }

    }

    protected async fetchFolders() {

        this.dataLoading = true;

        let url = this.url + "?everything";

        if (this.only.length > 0) {
            const only = this.only.join(",");
            url += "&only=" + only;
        }

        const response = await fetch(url);

        const json = await response.json() as ApiEverythingResponse;

        if (json.success) {

            const data: DataGroup[] = [];

            Object.entries(json.folders).forEach(([key, info]) => {

                const grp: DataGroup = {
                    key: key,
                    label: info.name,
                    files: info.files,
                    description: info["description"]
                }

                data.push(grp);

            });

            this.data = data;
            this.dataLoading = false;

        }
    }





    protected setMode(mode: FOLDER_MODE) {
        this.mode = mode;
    }

    protected setGrouping(grouping: FOLDER_GROUPING) {
        this.grouping = grouping;
    }

    protected renderInfo(info: ApiInfoResponse, callback?: (folder: FolderInfoBase) => void) {

        return html`
            ${Object.values(info.folders).map(folder => {

            if (callback !== undefined) {
                return html`<thermal-button @click=${() => callback(folder)}>
                        ${this.renderFolderInfoWithoutContainer(folder)}
                    </thermal-button>`;
            }


            return this.renderFolderInfoWithoutContainer(folder);
        })}
        `;

    }

    protected renderFolderInfoWithoutContainer(
        folder: FolderInfoBase
    ) {
        return html`<div class="folder-info">
            <h2>${folder.name}</h2>
            <div>${folder.lrc_count}</div>
        </div>`;
    }

    static styles?: CSSResultGroup | undefined = css`
        .info {
            padding: calc( var(--thermal-gap) * .5);
            display: grid;
            
        }

        .folders-list {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: var(--thermal-gap);

            > thermal-button::part(btn) {
                width: 100%;
                height: 100%; 
                text-align: left;
            }
        }

        h2 {
            font-size: var(--thermal-fs);
            margin: 0;
            padding: 0;
        }

        .folder_info {
            h2 {
                color: red;
            }
        }






    .data {
        width: 100%;
    }

    .data-content {
        width: 100%;
        display: grid;
        padding-top: var(--thermal-radius);
    }

    .data-group {
        box-sizing: border-box;
        border: 1px solid var(--thermal-slate);
        border-radius: var(--thermal-radius);
        padding: calc( var( --thermal-gap ) * .5 );
    }

    .data-group-header {
        h3 {}
        p {}
    }

    .data-group-content {
    
    }

    .data-group-content-file {

    }



    `;


    protected renderLoading(label: string) {
        return html`<div>Loading: ${label}</div>`;
    }

    protected renderTimeButtonsRow() {

        const times: {
            [index: string]: FOLDER_GROUPING
        } = {
            "Hours": FOLDER_GROUPING.HOURS,
            "Days": FOLDER_GROUPING.DAYS,
            "Weeks": FOLDER_GROUPING.WEEKS,
            "Months": FOLDER_GROUPING.MONTHS,
            "Years": FOLDER_GROUPING.YEARS
        }

        return html`<div>
            ${Object.entries(times).map(([label, value]) => html`<thermal-button
                @click=${() => {
                this.mode = FOLDER_MODE.GROUPS;
                this.grouping = value;
            }}
                >${label}</thermal-button>`)}
        </div>`;

    }

    protected renderCloseButton(
        text: string = "Close"
    ) {
        return html`<thermal-button
            @click=${() => {
                this.mode = FOLDER_MODE.INTRO;
                this.onlySet.only([]);
                this.data = [];
            }}
        >${text}</thermal-button>`;
    }


    protected screenInfo() {

        if (this.info === undefined) {
            return this.renderLoading("Načítám informace o složce");
        }

        return html`
            <div class="screen-info">

                <h1>Folders</h1>

                <div class="folders-list">

            ${this.renderInfo(this.info, folder => {
            this.mode = FOLDER_MODE.GROUPS;
            this.onlySet.add(folder.folder);
            this.fetchFolders();
        })}

                </div>

            <div>
                
                ${this.renderTimeButtonsRow()}

            </div>
            
            </div>
        `;
    }


    /**
     * 
     */
    protected renderData(
        data: DataGroup[],
        label?: string,
        description?: string
    ) {

        return html`<div class="data">
        
            ${label ? html`<h2 class="data-label"><${label}/h2>` : nothing}

            ${description ? html`<div class="data-description">${description}</div>` : nothing}

            <div class="data-content">
                ${data.map(group => this.renderDataGroup(group))}
            </div>
        
        </div>`;

    }

    protected renderDataGroup(
        group: DataGroup,
        title: boolean = true,
        description: boolean = true
    ) {
        return html`<div class="data-group">


            <div class="data-group-header">
    
                ${title ? html`<h3>${group.label}</h3>` : nothing}
                    
                ${description && group.description ? html`<p>${group.description}</p>` : nothing}
                
                ${this.renderCloseButton()}

            </div>

            <group-provider slug="${group.key}">

            <div class="data-group-content">
                ${Object.values(group.files).map(file => this.renderSingleFile(file))}
            </div>

            </group-provider>
        
        </div>`;
    }

    protected renderSingleFile(
        file: FolderFileType
    ) {
        return html`<div class="data-group-content-file">
        <file-provider thermal="${file.lrc}" batch="true">
            <file-canvas></file-canvas>
        </file-provider>
            ${file.lrc}
        </div>`;
    }

    protected renderFoldersOnlyControl( info: ApiInfoResponse ) {

        return html`<div class="grouping-folders">
        
            ${Object.values( info.folders ).map(f => {
                const on = this.only.includes( f.folder );
                return html`<thermal-button 
                variant="${on?"foreground":"default"}"
                @click=${() => {
                    if ( on ) {
                        this.onlySet.remove( f.folder );
                        if ( this.only.length === 0 ) {
                            this.mode = FOLDER_MODE.INTRO;
                        } else {
                            this.fetchFolders()
                        }
                    } else {
                        this.onlySet.add(f.folder);
                        this.fetchFolders();
                    }
                }}>${f.name}</thermal-button>`;
            })}

        </div>`;

    }



    protected screenGroups() {

        if (this.info === undefined) {
            return this.renderLoading("Načítám složku");
        }

        return html`<div class="screen-groups">

            <registry-histogram></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>

            <div class="group-screen-max">

                ${this.dataLoading === true ? this.renderLoading("Načítám soubory...") : nothing}

                ${this.dataLoading === false ? this.renderData(this.data) : nothing}
            
            </div>

        </div>`;

    }


    protected render(): unknown {

        return html`
            <thermal-app>

            <thermal-button variant="foreground" interactive="false" slot="bar">
                Folder
            </thermal-button>

            ${this.mode === FOLDER_MODE.INTRO
                ? this.screenInfo()
                : nothing
            }

            ${this.mode === FOLDER_MODE.GROUPS
                ? this.screenGroups()
                : nothing
            }

            </thermal-app>`
    }

}