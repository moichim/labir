import { css, CSSResultGroup, html, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { ApiFolderContentResponse, ApiInfoResponse, ApiTimeGrouping, ApiTimeGroupResponse, FolderFileType, FolderInfoBase } from "@labir/api";
import { AvailableThermalPalettes, TimeFormat } from "@labir/core";
import { provide } from "@lit/context";
import { format } from "date-fns";
import { cy, cs, de, fr, enGB} from "date-fns/locale";
import { t } from "i18next";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { T } from "../../translations/Languages";
import { booleanConverter } from "../../utils/booleanMapper";
import { interactiveAnalysisContext } from "../../utils/context";

enum STATE {
    MAIN,
    ONE,
    MULTIPLE
}

const loc = {
    en: enGB,
    fr,
    de,
    cy,
    cs
}

@customElement("remote-browser-app")
export class RemoteBrowser extends BaseElement {

    @property({ type: String, reflect: true })
    label?: string;

    @property({ type: String, reflect: true })
    license?: string;

    @property({ type: String, reflect: true })
    author?: string;

    @property({ type: String, reflect: true, attribute: true })
    palette: AvailableThermalPalettes = "jet";

    @property({ type: Boolean, reflect: true, converter: booleanConverter(true) })
    enablegrouping: boolean = false;


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

    @provide({ context: interactiveAnalysisContext })
    protected interactiveAnalysis: boolean = true;


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

        if (only.length === 0) {
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

                if ("data" in json) {
                    const sortedData = Object.entries(json.data).map(([time, folders]) => {

                        const f = Object.entries(folders);

                        f.sort((a, b) => {
                            return a[0] < b[0] ? -1 : 1;
                        });

                        const content = Object.fromEntries(f);

                        return [time, content];

                    });
                    json.data = Object.fromEntries(sortedData);
                }



                return json;
            }

            return false;

        }

        const response = onlyOne
            ? await loadData<ApiFolderContentResponse>(target)
            : await loadData<ApiTimeGroupResponse>(target);

        if (this.registryRef.value) {
            if (this.state === STATE.ONE) {


                this.registryRef.value.registry.groups.addListener(
                    this.UUID,
                    groups => {
                        groups.forEach(group => group.files.addListener(
                            this.UUID,
                            files => {
                                if (files[0]) {
                                    group.analysisSync.turnOn(files[0]);
                                }
                            }
                        ));
                    }
                );

            }
            else {
                this.registryRef.value.registry.groups.removeListener(this.UUID);
            }
        }

        if (response === false) {
            this.error = "There was an error loading data";
        } else if ("files" in response) {
            this.dataOnly = response;
        } else if ("folders" in response) {
            this.dataMultiple = response;
        }

        this.loadingData = false;

    }


    protected renderMainScreen() {
        return html`
<div class="screen screen-main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(folder => {

            return html`
        <button class="screen-main-folder" @click=${() => this.actionOpenOneFolder(folder.folder)}>
            <h1>${folder.name}</h1>
            ${folder.description !== undefined ? html`<p>${folder.description}</p>` : nothing}
            <div>${t(T.numfiles, { num: folder.lrc_count })}</div>
        </button>
            `;

        })}
    </nav>


</div>
        `;
    }


    protected resetRegistry() {
        if (this.registryRef.value) {
            this.registryRef.value.registry.reset();
            this.registryRef.value.registry.minmax.reset();
            this.registryRef.value.registry.range.reset();
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
            !this.only.includes(folderKey)
            && Object.keys(this.folders).includes(folderKey)
        ) {
            this.state = STATE.ONE;
            this.only = [folderKey];
            this.resetRegistry();
        }
    }


    protected actionToggleFolder(
        folderKey: string
    ) {
        if (this.only.includes(folderKey)) {

            this.only = this.only.filter(f => f !== folderKey);
            this.resetRegistry();

            if (this.only.length === 0) {
                this.actionCloseToHomepage();
            } else if (this.only.length === 1) {
                this.state = STATE.ONE;
            } else if (this.only.length > 1) {
                this.state = STATE.MULTIPLE;
            }

        } else if (Object.keys(this.folders).includes(folderKey)) {
            this.only = [...this.only, folderKey];
            this.resetRegistry();
            if (this.only.length > 0) {
                this.state = STATE.MULTIPLE;
            }
        }
    }


    protected renderLoading(what: string) {
        return html`<div class="loading">${what}</div>`;
    }


    protected renderFileInner(
        file: FolderFileType,
        labelFormatter: (f: FolderFileType) => string
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
            <file-analysis-table></file-analysis-table>
        </main>

    </file-provider>
</article>
        `;
    }


    protected renderOne() {

        if (this.loadingData || this.dataOnly === undefined) {
            return this.renderLoading("Načítám data...");
        }

        return html`
            <group-provider slug="${this.dataOnly.info.folder}">

                ${Object.values(this.dataOnly.files).map(file => {
            return html`<div>
                    ${this.renderFileInner(file, () => TimeFormat.human(file.timestamp * 1000))}
                    </div>`;
        })}
            
            </group-provider>   
        `;

    }


    protected renderMultiple() {

        if (this.loadingData || this.dataMultiple === undefined) {
            return this.renderLoading("Načítám data...");
        }

        const folders = this.dataMultiple.data;

        const header = Object.entries(
            Object.values(
                Object.values(this.dataMultiple.data)
            )[0]
        ).map(([f, v]) => ({
            name: v.name,
            key: f
        }));

        const columns = header.length;

        return html`

            <table class="affected">

                <tbody>
                ${Object.entries(folders).map(([timestamp, flds]) => {

            let title: string | undefined = undefined;
            const groupTimestamp = parseInt(timestamp) * 1000;

            if (this.by === ApiTimeGrouping.HOURS) {
                title = format(groupTimestamp, "d. M. yyyy - HH") + ":00";
            } else if (this.by === ApiTimeGrouping.DAYS) {
                title = format(groupTimestamp, "d. M. yyyy");
            } else if (this.by === ApiTimeGrouping.WEEKS) {
                title = format(groupTimestamp, "wo");
            } else if (this.by === ApiTimeGrouping.MONTHS) {
                title = format(groupTimestamp, "LLLL yyyy", { locale: loc[this.locale! as keyof typeof loc] })
            } else if (this.by === ApiTimeGrouping.YEARS) {
                title = format(groupTimestamp, "yyyy");
            }

            return html`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${columns}">
                                <div>
                                    <h2>${title}</h2>
                                    <group-provider slug="${timestamp}" class="buttons">
                                        <group-range-propagator></group-range-propagator>
                                        <group-download-dropdown></group-download-dropdown>
                                    </group-provider>
                                </div>
                            </td>
                        </tr>
                        <group-provider slug="${timestamp}" class="row">
                            ${Object.values(flds).map((info) => {
                return html`<td class="cell-content">
                                    ${Object.values(info.files).map(file => this.renderFileInner(file, file => {
                    const ts = file.timestamp * 1000;
                    if (this.by === ApiTimeGrouping.HOURS) {
                        return format(ts, "HH:ii");
                    } else if (this.by === ApiTimeGrouping.DAYS) {
                        return format(ts, "HH:ii");
                    } else {
                        return TimeFormat.human(ts);
                    }
                }))}
                                </td>`;
            })}
                        </group-provider>
                    `;
        }
        )}
                </tbody>
            
            </table>

        `;
    }


    protected renderTimeToggle() {

        const bys = ["hours", "days", "weeks", "months", "years"];

        return html`
<thermal-dropdown>
    <span slot="invoker">${t(T[`by${this.by}`])}</span>
    ${bys.map(by => html`
    <div slot="option" @click=${() => this.by = by as ApiTimeGrouping}>
        <thermal-button>${t(T[`by${by}` as T])}</thermal-button>
    </div>
    ` )}
</thermal-dropdown>
        `;

    }


    protected renderInfo() {
        if (this.state === STATE.MAIN) {
            return nothing;
        }

        let content: TemplateResult<1> | undefined = undefined;

        if (this.state === STATE.ONE) {

            const theOne = this.folders[this.only[0]];
            const theOthers = Object.values(this.folders).filter(f => f.folder !== theOne.folder);

            const dropdown = html`<thermal-dropdown variant="background" class="selector">
                <span slot="invoker">${theOne.name}</span>

                ${theOthers.map(f => html`<div slot="option" @click=${() => this.actionOpenOneFolder(f.folder)}>
                    <thermal-button>${f.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`;

            const add = theOthers.map((f, i) => html`<thermal-button @click=${() => this.actionToggleFolder(f.folder)}>
                <span class="button-inline-icon">+</span> ${f.name}
            </thermal-button> ${i !== theOthers.length - 1 ? ` ${t(T.or)} ` : nothing}`);

            content = html`${t(T.showingfolder)} ${dropdown}. 
            
            ${theOthers.length > 0
                    ? html` ${t(T.doyouwanttoadd)} ${add}?`
                    : nothing}
            `;

        }


        else if (this.state === STATE.MULTIPLE) {

            const displayed: FolderInfoBase[] = [];
            const available: FolderInfoBase[] = [];

            Object.values(this.folders).forEach(folder => {
                if (this.only.includes(folder.folder)) {
                    displayed.push(folder);
                } else {
                    available.push(folder);
                }
            });

            content = html`

                ${t(T.showingfolders)}
                ${displayed.map((f, i) => html`<thermal-button 
                    title="${t(T.remove)}" 
                    variant="background"
                    @click=${() => this.actionToggleFolder(f.folder)}
                >
                    ${f.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${i !== displayed.length - 1 ? ` ${t(T.and)} ` : nothing}`)}
                ${t(T.groupped)} ${this.renderTimeToggle()}.
            

            ${available.length > 0
                    ? html`${t(T.youmayalsoadd)} ${available.map((f, i) => html`
                    <thermal-button 
                        @click=${() => this.actionToggleFolder(f.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${f.name}
                    </thermal-button>
                    ${i !== available.length - 1 ? ` ${t(T.or)} ` : nothing}
                `)}.`
                    : nothing
                }

            `;
        }

        if (content === undefined) {
            return nothing;
        }

        return html`<div class="info">
            ${content}
        </div>`;

    }

    protected renderBrowser() {

        const header = Object.values(this.folders).filter(f => this.only.includes(f.folder));

        return html`

        <nav class="info-sticky-content">

            <div class="info-sticky-content-wrapper">

                ${this.enablegrouping ? this.renderInfo() : nothing}
                <registry-histogram expandable="true"></registry-histogram>
                <registry-range-slider></registry-range-slider>
                <registry-ticks-bar></registry-ticks-bar>

            </div>
            ${this.state === STATE.MULTIPLE
                ? html`<table class="affected">
                <thead>
                    <tr>
                        ${header.map(folder => html`<th>
                            <div class="cell-header">
                                ${folder.name}
                            </div>
                        </th>` )}
                    </tr>
                </thead>
            </table>`
                : nothing
            }

        </nav>

        

        <section>
            ${this.state === STATE.ONE ? this.renderOne() : nothing}
            ${this.state === STATE.MULTIPLE ? this.renderMultiple() : nothing}
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
        color: var(--thermal-foreground);

        cursor: pointer;
        flex-grow: 1;

        transition: all .2s ease-in-out;

        &:hover,
        &:focus {
            background: var(--thermal-slate-light);
            box-shadow: var(--thermal-shadow);
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
            width: 25%;
            box-sizing: border-box;
            padding: calc(var(--thermal-gap) * .5);
        }
    }

}


table.affected {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    color: var(--thermal-foreground);

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
        > div {
            display: flex;
            gap: var(--thermal-gap);
            h2 {
                flex-grow: 1;
            }
        }
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




.screen-browser__multiple {

    group-provider.row {
        display: table-row;
    }

    group-provider.buttons {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    .info-sticky-content-wrapper {
        box-shadow: 0px 40px 20px var(--thermal-slate-light);
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
        color: var(--thermal-foreground);

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
    color: var(--thermal-foreground);
    
}

.info-sticky-content-wrapper {
    background: var(--thermal-slate-light);
    padding-bottom: var(--thermal-gap);
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

}

thermal-dropdown.selector::part(invoker) {

    --thermal-slate-light: var( --thermal-background );

}


.tree {
    .item {
        padding-left: var(--thermal-gap);
        &::before {
            content: "";
            background: red;
        }
    }
}
    
    `;



    protected render(): unknown {

        const label = this.loadingInfo === true
            ? t(T.loading) + "..."
            : this.label
                ? this.label.trim().length > 0 ? this.label : t(T.remotefoldersbrowser)
                : t(T.remotefoldersbrowser);

        return html`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${ref(this.registryRef)}>

        <thermal-app author="${ifDefined(this.author)}" license="${ifDefined(this.license)}">

            <thermal-button variant="${this.state === STATE.MAIN ? "foreground" : "default"}" slot="bar" @click=${this.actionCloseToHomepage.bind(this)}>${label}</thermal-button>

            <header class="screen-browser-header" slot="bar">

            <thermal-bar>

                ${this.state !== STATE.MAIN
                ? html`<thermal-button 
                        @click=${this.actionCloseToHomepage.bind(this)}
                        variant="foreground"
                    >
                    ${t(T.close)}
                </thermal-button>

                ${this.state === STATE.ONE && this.enablegrouping === false ?
                        html`
                <thermal-dropdown variant="background" class="selector">

                    <span slot="invoker">${this.folders[this.only[0]].name}</span>

                    ${Object.values(this.folders).filter(f => !this.only.includes(f.folder)).map(f => html`<div slot="option" @click=${() => this.actionOpenOneFolder(f.folder)}>
                    <thermal-button>${f.name}</thermal-button>
                    </div>`)}

                </thermal-dropdown>` : nothing}

                <registry-palette-dropdown></registry-palette-dropdown>
                <registry-range-full-button></registry-range-full-button>
                <group-tool-buttons showhint="false"></group-tool-buttons>
                <thermal-dialog label="${t(T.info)}">
                    <thermal-button slot="invoker">${t(T.info)}</thermal-button>
                    <div slot="content">

                        <ul class="tree">
                            <li>${this.info?.url_host}</li>
                            <ul>

                                ${this.state === STATE.ONE && this.dataOnly !== undefined
                        ? html`<li>/${this.only[0]}/
                                        <ul>
                                            ${this.dataOnly.files.map(file => html`<li>${file.file_name}</li>`)}
                                        </ul>
                                    </li>`
                        : nothing
                    }

                                ${this.state === STATE.MULTIPLE && this.dataMultiple !== undefined
                        ? html`
                                        ${Object.values(this.dataMultiple.data).map(folder => html`<li>${folder}</li>`)}
                                    `
                        : nothing
                    }
                                
                            </ul>
                        </ul>   
                    
                    </div>
                </thermal-dialog>
                ${this.state === STATE.ONE && this.dataOnly !== undefined
                        ? html`<group-provider slug="${this.dataOnly.info.folder}">
                        <group-download-dropdown></group-download-dropdown>
                    </group-provider>`
                        : nothing
                    }
                <registry-opacity-slider></registry-opacity-slider>
                `
                : nothing
            }
            
            </thermal-bar>
        
        </header>
        
            <div class=${classMap({
                screen: true,
                "screen-main": this.state === STATE.MAIN,
                "screen-browser": [STATE.ONE, STATE.MULTIPLE].includes(this.state),
                "screen-browser__one": this.state === STATE.ONE,
                "screen-browser__multiple": this.state === STATE.MULTIPLE
            })}>
                ${this.renderApp()}
            </div>

        </thermal-app>

    </registry-provider>
</manager-provider>
        
        `;
    }


}