import { css, CSSResultGroup, html, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { ApiEverythingResponse, ApiFolderContentResponse, ApiInfoResponse, ApiTimeGrouping, ApiTimeGroupResponse, FolderFileType, FolderInfoBase, TimeRecordGroup } from "@labir/api";
import { AvailableThermalPalettes, ThermalManager, ThermalPalettes, TimeFormat } from "@labir/core";
import { provide } from "@lit/context";
import { managerContext, managerGraphFunctionContext, ManagerGraphFunctionContext, ManagerPaletteContext, managerPaletteContext, managerSmoothContext } from "../../hierarchy/providers/context/ManagerContext";
import { createOrGetManager } from "../../hierarchy/providers/getters";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { ApiInfoContext, apiInfoContext, currentGroupingContext, currentGrouppingSetterContext, currentStateContext, currentStateSetterContext, DataGroup, FOLDER_GROUPING, FOLDER_MODE, OnlyGroups, onlysContext, OnlySettingsContext, onlySettingsContext } from "./folderContext";
import { BaseElement } from "../../hierarchy/BaseElement";
import i18next, { t } from "i18next";
import { T } from "../../translations/Languages";
import { classMap } from "lit/directives/class-map.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { format } from "date-fns";
import * as loc from "date-fns/locale"

loc.cy

enum STATE {
    MAIN,
    ONE,
    MULTIPLE
}

@customElement("remote-browser-app")
export class RemoteBrowser extends BaseElement {

    /** The API endpoint main URL address */
    @property({ type: String, reflect: true })
    public url!: string;

    /** An optional subfolder relative to the API endpoint in `this.url` */
    @property({ type: String, reflect: true })
    public subfolder?: string;

    @state()
    protected info?: ApiInfoResponse;

    @state()
    protected error?: string;

    @state()
    protected loadingInfo: boolean = false;

    @state()
    protected loadingData: boolean = false;

    @state()
    protected only: string[] = [];

    @state()
    protected state: STATE = STATE.MAIN;

    @state()
    protected by: ApiTimeGrouping = ApiTimeGrouping.HOURS;

    @state()
    protected dataOnly?: ApiFolderContentResponse;

    @state()
    protected dataMultiple?: ApiTimeGroupResponse;

    @state()
    protected folders: {
        [index: string]: FolderInfoBase
    } = {};

    protected registryRef: Ref<RegistryProviderElement> = createRef();


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("url") || _changedProperties.has("subfolder")) {
            this.loadInfo(this.url, this.subfolder);
        }

        if (_changedProperties.has("only") || _changedProperties.has("by")) {
            if (this.url !== undefined) {
                this.loadData(
                    this.only,
                    this.by,
                    this.url,
                    this.subfolder
                );
            }
        }
    }


    protected getApiUrl(
        url: string,
        subfolder?: string
    ) {
        return subfolder !== undefined
            ? `${url}?subfolder="${subfolder}"`
            : url;
    }


    protected async loadInfo(
        url: string,
        subfolder?: string
    ) {

        this.loadingInfo = true;

        const target = subfolder !== undefined
            ? `${url}?scope=${subfolder}`
            : url;


        const response = await fetch(target);

        if (response.ok) {
            const json = await response.json() as ApiInfoResponse;
            this.info = json;
            this.folders = json.folders;
            this.loadingInfo = false;
        }

    }


    protected async loadData(
        only: string[],
        grouping: ApiTimeGrouping,
        url: string,
        subfolder?: string
    ) {

        this.dataOnly = undefined;
        this.dataMultiple = undefined;

        if ( only.length === 0 ) {
            return;
        }

        this.loadingData = true;

        const params: string[] = [];

        if (subfolder) {
            params.push(`scope=${subfolder}`);
        }

        const onlyOne = only.length === 1;

        if (onlyOne) {
            params.push(only[0]);
        } else {
            params.push(grouping);
            params.push(
                `only=${only.join(",")}`
            );
            params.push("grid");

        }

        const target = url + "?" + params.join("&");

        const loadData = async <T extends ApiFolderContentResponse | ApiTimeGroupResponse>(route: string) => {

            const response = await fetch(route);

            if (response.ok) {
                const json = await response.json() as T;

                if ( "data" in json ) {
                    const sortedData = Object.entries( json.data ).map( ([time, folders]) => {

                        const f = Object.entries( folders );
    
                        f.sort( (a,b) => {
                            return a[0] < b[0] ? -1 : 1;
                        } );
    
                        const content = Object.fromEntries(f);
    
                        return [time, content];
    
                    } );
                    json.data = Object.fromEntries( sortedData );
                }



                return json;
            }

            return false;

        }

        const response = onlyOne
            ? await loadData<ApiFolderContentResponse>(target)
            : await loadData<ApiTimeGroupResponse>(target);

        if ( response === false ) {
            this.error = "There was an error loading data";
        } else if ( "files" in response ) {
            this.dataOnly = response;
        } else if ( "folders" in response ) {
            this.dataMultiple = response;
        }

        this.loadingData = false;

    }


    protected renderMainScreen() {
        return html`
<div class="screen screen-main">


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(folder => {

            return html`
        <button class="screen-main-folder" @click=${() => this.actionOpenOneFolder( folder.folder )}>
            <h1>${folder.name}</h1>
            ${folder.description !== undefined ? html`<p>${folder.description}</p>` : nothing}
            <div>${folder.lrc_count} souborů</div>
        </button>
            `;

        })}
    </nav>


</div>
        `;
    }


    protected resetRegistry() {
        if ( this.registryRef.value ) {
            this.registryRef.value.registry.reset();
        }
    }


    protected actionCloseToHomepage() {
        this.state = STATE.MAIN;
        this.only = [];
        delete this.dataOnly;
        delete this.dataMultiple;
        this.resetRegistry();
    }


    protected actionOpenOneFolder(
        folderKey: string
    ) {
        if ( 
            !this.only.includes( folderKey ) 
            && Object.keys( this.folders ).includes( folderKey ) 
        ) {
            this.state = STATE.ONE;
            this.only = [ folderKey ];
            this.resetRegistry();
        }
    }


    protected actionToggleFolder(
        folderKey: string
    ) {
        if ( this.only.includes( folderKey ) ) {

            this.only = this.only.filter( f => f !== folderKey );
            this.resetRegistry();

            if ( this.only.length === 0 ) {
                this.actionCloseToHomepage();
            } else if ( this.only.length === 1 ) {
                this.state = STATE.ONE;
            } else if ( this.only.length > 1 ) {
                this.state = STATE.MULTIPLE;
            }

        } else if ( Object.keys( this.folders ).includes( folderKey ) ) {
            this.only = [ ...this.only, folderKey ];
            this.resetRegistry();
            if ( this.only.length > 0 ) {
                this.state = STATE.MULTIPLE;
            }
        }
    }


    protected renderBrowserScreen(
        info: ApiInfoResponse,
        only: string[],
        grouping: ApiTimeGrouping
    ) {

    }


    protected renderLoading(what: string) {
        return html`<div class="loading">${what}</div>`;
    }


    protected renderFileInner(
        file: FolderFileType,
        labelFormatter: ( f: FolderFileType ) => string
    ) {
        return html`
<article class="file">
    <file-provider batch="true" thermal=${file.lrc} visible="${file.png}">

        <header>
            <h2>
                <span>${labelFormatter(file)}</span>
            </h2>
            <div>
                <file-download-lrc></file-download-lrc>
                <file-download-png></file-download-png>
                <file-range-propagator></file-range-propagator>
            </div>
        </header>

        <main>
            <file-canvas></file-canvas>
        </main>

    </file-provider>
</article>
        `;
    }


    protected renderOne() {

        if ( this.loadingData || this.dataOnly === undefined ) {
            return this.renderLoading( "Načítám data..." );
        }

        return html`
            <group-provider slug="${this.dataOnly.info.folder}">

                ${Object.values( this.dataOnly.files ).map( file => {
                    return html`<div>
                    ${this.renderFileInner( file, (f) => TimeFormat.human( file.timestamp * 1000 ) )}
                    </div>`;
                } )}
            
            </group-provider>   
        `;

    }


    protected renderMultiple() {

        if ( this.loadingData || this.dataMultiple === undefined) {
            return this.renderLoading( "Načítám data..." );
        }

        const folders = this.dataMultiple.data;

        const header = Object.entries( 
            Object.values( 
                Object.values( this.dataMultiple.data )
            )[0] 
        ).map( ([f,v]) => ({
            name: v.name,
            key: f
        }) );

        const columns = header.length;

        return html`

            <table>
            
                <thead>
                    <tr>
                        ${header.map( h => html`<th>
                            <div class="cell-header">${h.name}</div>
                        </th>` )}
                    </tr>
                </thead>

                <tbody>
                ${Object.entries( folders ).map(([timestamp, flds])=> {

                    let title: string | undefined = undefined;
                    const groupTimestamp = parseInt( timestamp ) * 1000;

                    if ( this.by === ApiTimeGrouping.HOURS ) {
                        title = format( groupTimestamp, "d. M. yyyy - HH" ) + ":00";
                    } else if ( this.by === ApiTimeGrouping.DAYS ) {
                        title = format( groupTimestamp, "d. M. yyyy" );
                    } else if ( this.by === ApiTimeGrouping.WEEKS ) {
                        title = format( groupTimestamp, "wo" );
                    } else if ( this.by === ApiTimeGrouping.MONTHS ) {
                        title = format( groupTimestamp, "LLLL yyyy", {locale: loc[this.locale! as keyof typeof loc]} )
                    } else if ( this.by === ApiTimeGrouping.YEARS ) {
                        title = format( groupTimestamp, "yyyy" );
                    }

                    return html`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${columns}">${title}</td>
                        </tr>
                        <group-provider slug="${timestamp}">
                            ${Object.entries(flds).map(([fld, info])=>{
                                return html`<td class="cell-content">
                                    ${Object.values( info.files ).map( file => this.renderFileInner(file, file => {
                                        const ts = file.timestamp * 1000;
                                        if ( this.by === ApiTimeGrouping.HOURS ) {
                                            return format( ts, "HH:ii" );
                                        } else if ( this.by === ApiTimeGrouping.DAYS ) {
                                            return format( ts, "HH:ii" );
                                        } else {
                                            return TimeFormat.human( ts );
                                        }
                                    }) )}
                                </td>`;
                            })}
                        </group-provider>
                    `;}
                )}
                </tbody>
            
            </table>

        `;
    }


    protected renderTimeToggle() {

        const bys = ["hours","days","weeks","months", "years"];
        
        return html`
<thermal-dropdown>
    <span slot="invoker">${t(T[`by${this.by}`])}</span>
    ${ bys.map( by => html`
    <div slot="option" @click=${() => this.by = by as ApiTimeGrouping}>
        <thermal-button>${t(T[`by${by}` as T])}</thermal-button>
    </div>
    ` ) }
</thermal-dropdown>
        `;

    }


    protected renderInfo() {
        if ( this.state === STATE.MAIN ) {
            return nothing;
        }

        let content: TemplateResult<1> | undefined = undefined;

        if ( this.state === STATE.ONE ) {

            const theOne = this.folders[this.only[0]];
            const theOthers = Object.values( this.folders ).filter( f => f.folder !== theOne.folder );

            const dropdown = html`<thermal-dropdown variant="background" class="selector">
                <span slot="invoker">${theOne.name}</span>

                ${theOthers.map(f => html`<div slot="option" @click=${() => this.actionOpenOneFolder( f.folder )}>
                    <thermal-button>${f.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`;

            const add = theOthers.map( (f,i) => html`<thermal-button @click=${()=> this.actionToggleFolder(f.folder)}>
                <span class="button-inline-icon">+</span> ${f.name}
            </thermal-button> ${i!==theOthers.length - 1 ? " či " : nothing }` );

            content = html`${t(T.showingfolder)} ${dropdown}. 
            
            ${theOthers.length > 0 
                ? html` ${t(T.doyouwanttoadd)} ${add}?`
                : nothing }
            `;

        }


        else if ( this.state === STATE.MULTIPLE ) {

            let displayed: FolderInfoBase[] = [];
            let available: FolderInfoBase[] = [];

            Object.values( this.folders ).forEach( folder => {
                if ( this.only.includes(folder.folder) ) {
                    displayed.push( folder );
                } else {
                    available.push( folder );
                }
            } );

            content = html`

                ${t(T.showingfolders)}
                ${displayed.map( (f,i) => html`<thermal-button 
                    title="Odstranit" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(f.folder)}
                >
                    ${f.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${i!== displayed.length - 1 ? ` ${t(T.and)} `: nothing}` )}
                ${t(T.groupped)} ${this.renderTimeToggle()}.
            

            ${available.length > 0
                ? html`${t(T.youmayalsoadd)} ${available.map((f,i) => html`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(f.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${f.name}
                    </thermal-button>
                    ${i!== available.length - 1 ? ` ${t(T.or)} ` : nothing}
                `)}.`
                : nothing
            }

            `;
        }

        if ( content=== undefined ) {
            return nothing;
        }

        return html`<div class="info">
            ${content}
        </div>`;
        
    }

    protected renderBrowser() {

        return html`

        <header class="screen-browser-header" slot="bar">

            <thermal-bar>

                <thermal-button @click=${this.actionCloseToHomepage.bind(this)}>
                    ${t(T.back)}
                </thermal-button>

                <registry-palette-dropdown></registry-palette-dropdown>
            
            </thermal-bar>
        
        </header>

        <nav class="info-sticky-content">

            ${this.renderInfo()}

            <registry-range-slider></registry-range-slider>

            <group-tool-buttons></group-tool-buttons>

        </nav>

        

        <section class=${classMap({
            screen: true,
            "screen-browser": true,
            "screen-browser__one": this.state === STATE.ONE,
            "screen-browser__multiple": this.state === STATE.MULTIPLE
        })}>
            ${this.state === STATE.ONE ? this.renderOne() : nothing }
            ${this.state === STATE.MULTIPLE ? this.renderMultiple() : nothing }
        </section>
        
`;

    }


    protected renderApp() {


        if (this.info === undefined) {
            return this.renderLoading("Načítám základní informaci");
        }

        if (this.state === STATE.MAIN) {
            return this.renderMainScreen();
        } else {
            return this.renderBrowser();
        }


    }


    static styles?: CSSResultGroup | undefined = css`

:host {
    font-size: var(--thermal-fs);
    line-height: 1em;

    --table-gap: calc( var( --thermal-gap ) * .8 );
    --table-gap-sm: calc( var( --thermal-gap ) * .4 );

}

.reset-text,
h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-size: var(--thermal-fs);
    line-height: 1em;
}

.screen {

}

.screen-main {

}



.screen-main-folders {
    display: flex;
    gap: var(--thermal-gap);
    flex-wrap: wrap;

    > button {

        background: red;
        padding: var(--thermal-gap);

        border-radius: var(--thermal-radius);
        border: 1px solid var( --thermal-slate );

        background: var(--thermal-slate-light);

        cursor: pointer;
        flex-grow: 1;

        transition: all .2s ease-in-out;

        &:hover,
        &:focus {
            background: var(--thermal-background);
        }

    }

}

.screen-browser {
}

.screen-browser-header {
    flex-grow: 1;
}

.screen-browser-header-buttons {
    > * {
        display: inline-block;
    }
}

.screen-browser__one {

    group-provider {
        display: flex;
        flex-wrap: wrap;

        > div {
            flex-basis: 25%;
            box-sizing: border-box;
        }
    }

}


.screen-browser__multiple {

    group-provider {
        display: table-row;
    }


    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: var(--table-gap-sm);
    }

    .cell-header {
        background: var(--thermal-background);
        color: var(--thermal-foreground);
        text-align: left;
        padding: var(--table-gap);
        border-radius: var(--thermal-radius);
    }

    .cell-label {
        border-left: 1px solid var(--thermal-slate);
        border-right: 1px solid var(--thermal-slate);
        border-top: 1px solid var(--thermal-slate);
        padding: var(--table-gap);
        font-weight: bold;
    }

    .cell-content {

        border-bottom: 1px solid var(--thermal-slate);

        &:first-child {
            border-left: 1px solid var(--thermal-slate);
        }

        &:last-child {
            border-right: 1px solid var(--thermal-slate);
        }

        .file {
            background: var(--thermal-background);
            padding: var(--table-gap);
            border-radius: var(--thermal-radius);
        }

        .file:not(:last-child) {
            margin-bottom: var( --table-gap-sm );
        }

    }

    .cell-separator {
        height: 1rem;
    }

}

article.file {

    width: 100%;
    box-sizing: border-box;

    header {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding-bottom: 5px;

        h2 {
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            text-size: var(--thermal-fs-sm);

            span {
                white-space: nowrap;
            }
        }

        div {
            display: flex;
            flex-wrap: nowrap;
            gap: 5px;
        }
    }

}

.info-sticky-content {
    position: sticky;
    top: 0px;
    z-index: 12;
    background: var(--thermal-slate-light);
}


.info {

    padding: var(--thermal-gap);
    border: 1px solid var(--thermal-slate);
    border-radius: var(--thermal-radius);
    background-color: var(--thermal-slate-light);

    margin-bottom: 1em;

    thermal-button,
    thermal-dropdown {
        display: inline-block;
    }

    .button-inline-icon {
        opacity: .5;
    }

    thermal-dropdown.selector::part(invoker) {

        --thermal-slate-light: var( --thermal-background );

    }

}
    
    `;



    protected render(): unknown {
        return html`

<manager-provider slug=${this.UUID}>
    <registry-provider ref=${ref(this.registryRef)}>

        <thermal-app>

            <thermal-button variant="foreground" interactive="false" slot="bar">Browser</thermal-button>

            ${this.renderApp()}

        </thermal-app>

    </registry-provider>
</manager-provider>
        
        `;
    }


}