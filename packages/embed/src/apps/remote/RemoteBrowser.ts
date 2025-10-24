import { ApiFolderContentResponse, ApiInfoResponse, ApiTimeGrouping, ApiTimeGroupResponse, FolderInfoBase, QueryBuilder } from "@labir/api";
import { AvailableThermalPalettes, ThermalManager } from "@labir/core";
import { provide } from "@lit/context";
import { format } from "date-fns";
import { cs, cy, de, enGB, fr } from "date-fns/locale";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { T } from "../../translations/Languages";
import { initLocalesInTopLevelElement, IWithlocale, localeContext, localeConverter, Locales } from "../../translations/localeContext";
import { interactiveAnalysisContext } from "../../utils/context";
import { booleanConverter } from "../../utils/converters/booleanConverter";
import { BaseAppWithPngExportContext } from "../../utils/converters/pngExportContext";

enum STATE {
    MAIN,
    ONE,
    MULTIPLE,
    DETAIL
}

const loc = {
    en: enGB,
    fr,
    de,
    cy,
    cs
}

@customElement("remote-browser-app")
export class RemoteBrowser extends BaseAppWithPngExportContext implements IWithlocale {

    public get manager(): ThermalManager {
        return this.registryRef.value!.registry.manager;
    }

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

    @state()
    protected detail?: {
        folder: string,
        lrc: string,
        png?: string
    } = undefined;


    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;




    









    connectedCallback(): void {
        super.connectedCallback();

        const updatePosition = () => {
            const rect = this.getBoundingClientRect();

            if (rect.top < -50) {
                this.classList.add("is-pinned");
            } else {
                this.classList.remove("is-pinned");
            }

        };


        window.addEventListener("scroll", updatePosition);
        window.addEventListener("resize", updatePosition);

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        initLocalesInTopLevelElement(this);
    }




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

        if (_changedProperties.has("folders")) {
            const keys = Object.keys(this.folders);
            if (keys.length === 1) {
                this.actionOpenOneFolder(keys[0]);
            }
        }

        if (this.registryRef.value) {
            this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID, () => {
                this.registryRef.value?.registry.range.applyMinmax();
            });
        }
    }



    protected async showDetail(
        folder: string,
        lrc: string,
        png?: string
    ) {
        this.detail = {
            folder, lrc, png
        };
        this.state = STATE.DETAIL;

        this.resetRegistry();

        this.scrollToComponent();

    }

    protected async closeDetail() {

        delete this.detail;
        this.detail = undefined;

        const data = this.dataMultiple ?? this.dataOnly;

        switch (typeof data) {
            case "undefined":
                this.state = STATE.MAIN;
                break;
            case typeof this.dataOnly:
                this.state = STATE.ONE;
                break;
            case typeof this.dataMultiple:
                this.state = STATE.MULTIPLE;
                break;
        }

        this.scrollToComponent();

    }


    protected scrollToComponent() {
        this.scrollIntoView({ behavior: "smooth", block: "start" });
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
        // this.scrollToComponent();

        try {

            const query = new QueryBuilder(url, subfolder);
            const json = await query.info();
            this.info = json;
            this.folders = json.folders;
            this.loadingInfo = false;

        } catch (err) {
            this.error = "There was an error loading info"
        }

    }

    protected async loadDataOne(
        folder: string,
        url: string,
        subfolder?: string
    ) {

        this.loadingData = false;
        this.dataOnly = undefined;
        this.dataMultiple = undefined;

        this.scrollToComponent();

        const query = new QueryBuilder(url, subfolder);
        const data = await query.folder(folder);
        this.log("folder", folder, data);

        this.scrollToComponent();

        this.dataOnly = data;
        this.loadingData = false;

        // Turn on the synchronisation of analyses
        if (this.registryRef.value) {
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

    }

    protected async loadDataMultiple(
        only: string[],
        grouping: ApiTimeGrouping,
        url: string,
        subfolder?: string
    ) {

        this.loadingData = true;
        this.dataOnly = undefined;
        this.dataMultiple = undefined;

        this.scrollToComponent();

        const query = new QueryBuilder(url, subfolder);
        query.setOnly(only.join(","));
        query.setGrid(true);

        const data = await query.grid(grouping);

        this.scrollToComponent();

        this.dataMultiple = data;
        this.loadingData = false;

        // Turn off synchronisation of analyses
        this.registryRef.value?.registry.groups.removeListener(this.UUID);

    }


    protected async loadData(
        only: string[],
        grouping: ApiTimeGrouping,
        url: string,
        subfolder?: string
    ) {

        if (only.length > 1) {

            this.loadDataMultiple(only, grouping, url, subfolder);

        } else if (only.length === 1) {

            this.loadDataOne(only[0], url, subfolder);

        }

    }


    protected renderMainScreen() {
        return html`
<group-provider class="screen screen-main" autoclear="true" slug="main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(folder => {

            return html`
        <button class="folder" @click=${() => this.actionOpenOneFolder(folder.folder)}>

            <div class="folder-header">
                <div class="folder-header-text">
                    <h1>${folder.name}</h1>
                    ${folder.description !== undefined ? html`<p>${folder.description}</p>` : nothing}
                    <div>${t(T.numfiles, { num: folder.lrc_count })}</div>
                </div>
                <div class="folder-header-icon">
                    ${folder.lrc_count > 1
                    ? html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>`
                    : html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>`
                }
                </div>
            </div>

            <file-provider thermal="${folder.preview.lrc}" batch="true" autoclear="true">
                <file-canvas style="pointer-events: none;"></file-canvas>
                <div class="open-button">
                    <thermal-btn variant="primary">${t(T.open)}</thermal-btn>
                </div>
            </file-provider>
            
        </button>
            `;

        })}
    </nav>


</group-provider>

        `;
    }


    protected resetRegistry() {
        if (this.registryRef.value) {
            this.registryRef.value.registry.forEveryInstance(instance => instance.unmountFromDom());
            this.registryRef.value.registry.reset();
            this.registryRef.value.registry.minmax.reset();
            this.registryRef.value.registry.range.reset();
            this.registryRef.value.registry.opacity.imposeOpacity(1);
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


    protected actionShowEverything() {
        this.only = Object.keys(this.folders);
        this.resetRegistry();
        this.state = STATE.MULTIPLE;
    }


    protected renderLoading(what: string) {
        return html`<div class="loading">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
            <div>${what}</div>
        </div>`;
    }



    protected renderOne() {

        if (this.loadingData || this.dataOnly === undefined) {
            return this.renderLoading("Loading folder data");
        }

        return html`
            <group-provider slug="${this.dataOnly.info.folder}">

                ${Object.values(this.dataOnly.files).map(file => {
            return html`<div>
                    <file-provider 
                        batch="true" 
                        thermal="${file.lrc}" 
                        visible="${file.png}"
                    >
                        <file-thumbnail
                            grouping="years"
                            .ondetail=${() => {
                    this.showDetail(this.dataOnly!.info.name, file.lrc, file.png)
                }}
                        ></file-thumbnail>
                    </file-provider>
                    
                    </div>`;
        })}
            
            </group-provider>
        `;

    }


    protected renderMultiple() {

        if (this.loadingData || this.dataMultiple === undefined || this.dataMultiple.data === undefined) {
            return this.renderLoading("Loading selected folders' data");
        }

        const groups = this.dataMultiple.data;

        const header = Object.entries(
            Object.values(
                Object.values(this.dataMultiple.data)
            )[0]
        ).map(([f, v]) => ({
            name: v.name,
            key: f
        }));

        const columns = header.length;

        const sortedKeys = Object.keys(Object.values(groups)[0]).sort((a, b) => a < b ? -1 : 1);

        return html`

            <table class="affected">

                <tbody>
                ${Object.entries(groups).map(([timestamp, folders]) => {

            let title: string | undefined = undefined;
            const groupTimestamp = parseInt(timestamp);

            if (this.by === ApiTimeGrouping.HOURS) {
                title = format(groupTimestamp * 1000, "d. M. yyyy - HH") + ":00";
            } else if (this.by === ApiTimeGrouping.DAYS) {
                title = format(groupTimestamp * 1000, "d. M. yyyy");
            } else if (this.by === ApiTimeGrouping.WEEKS) {
                title = format(groupTimestamp * 1000, "wo");
            } else if (this.by === ApiTimeGrouping.MONTHS) {
                title = format(groupTimestamp * 1000, "LLLL yyyy", { locale: loc[this._locale! as keyof typeof loc] })
            } else if (this.by === ApiTimeGrouping.YEARS) {
                title = format(groupTimestamp * 1000, "yyyy");
            }

            return html`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${columns}">
                                <div>
                                    <h2>${title}</h2>
                                    <group-provider slug="${timestamp}" class="buttons">
                                        <group-range-propagator></group-range-propagator>

                                        <file-dropdown label="${t(T.download).toLowerCase()}">
                                            <group-download-buttons label=${title}></group-download-buttons>
                                        </file-dropdown>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>
                        <group-provider slug="${timestamp}" class="row">
                            ${sortedKeys.map((key) => {
                const info = folders[key];
                return html`<td class="cell-content" data-name="${info.name}">
                                    ${Object.values(info.files).map(file => html`
                                    <div style="background-color: var(--thermal-background); padding: var(--thermal-gap); border-radius: var(--thermal-radius);">
                                        <file-provider
                                            batch="true"
                                            thermal="${file.lrc}"
                                            visible="${file.png}"
                                        >
                                            
                                            <file-thumbnail
                                                grouping="${this.by}"
                                                .ondetail=${() => {
                        this.showDetail(info.name, file.lrc, file.png)
                    }}
                                            ></file-thumbnail>
                                        </file-provider>
                                    </div>
                                ` )}
                                    
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
        <thermal-btn>${t(T[`by${by}` as keyof typeof T])}</thermal-btn>
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

            const dropdown = theOthers.length > 0
                ? html`<thermal-dropdown variant="background" class="selector">
                    <span slot="invoker">${theOne.name}</span>

                    ${theOthers.map(f => html`<div slot="option" @click=${() => this.actionOpenOneFolder(f.folder)}>
                        <thermal-btn>${f.name}</thermal-btn>
                    </div>`)}

                </thermal-dropdown>`
                : html`<thermal-btn variant="background" interactive="false">${theOne.name}</thermal-btn>`;

            const add = theOthers.length > 0
                ? theOthers.map((f, i) => html`<thermal-btn @click=${() => this.actionToggleFolder(f.folder)}>
                    <span class="button-inline-icon">+</span> ${f.name}
                </thermal-btn> ${i !== theOthers.length - 1 ? ` ${t(T.or)} ` : nothing}`)
                : html`<span>${t(T.remotefoldersbrowseraddfolderhint)}</span>`;

            content = html`${t(T.showingfolder)} ${dropdown}. 
            
            ${theOthers.length > 0
                    ? html` ${t(T.doyouwanttoadd)} ${add}?`
                    : add}
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
                ${displayed.map((f, i) => html`<thermal-btn
                    title="${t(T.remove)}" 
                    variant="background"
                    @click=${() => this.actionToggleFolder(f.folder)}
                >
                    ${f.name} <span class="button-inline-icon">✕</span>
                </thermal-btn>${i !== displayed.length - 1 ? ` ${t(T.and)} ` : nothing}`)}
                ${t(T.groupped)} ${this.renderTimeToggle()}.
            

            ${available.length > 0
                    ? html`${t(T.youmayalsoadd)} ${available.map((f, i) => html`
                    <thermal-btn 
                        @click=${() => this.actionToggleFolder(f.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${f.name}
                    </thermal-btn>
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
        return html`<section>
            ${this.state === STATE.ONE ? this.renderOne() : nothing}
            ${this.state === STATE.MULTIPLE ? this.renderMultiple() : nothing}
            ${this.state === STATE.DETAIL ? this.renderDetail() : nothing}
        </section>`;

    }

    protected renderDetail() {
        if (this.detail === undefined) {
            return this.renderLoading("Loading the IR image");
        }
        return html`
        <group-provider slug="detail" autoclear="true">
            <file-provider thermal="${this.detail?.lrc}" visible="${this.detail?.png}" batch="true" autoclear="true">
                <article class="detail">
                    <header class="detail-header">
                        <thermal-btn @click=${() => this.closeDetail()} variant="foreground">${t(T.close)}</thermal-btn>

                        <thermal-btn variant="background" interactive="false">
                            ${this.detail.folder}
                        </thermal-btn>
                        <thermal-btn variant="background" interactive="false">
                            <file-label></file-label>
                        </thermal-btn>

                        <file-info-button></file-info-button>
                        <file-download-dropdown></file-download-dropdown>

                        <registry-palette-dropdown></registry-palette-dropdown>
                        <registry-range-form></registry-range-form>
                    </header>

                    <main>
                        <section>
                            <file-canvas></file-canvas>
                            <file-timeline></file-timeline>
                        </section>
                        <section>
                            <file-analysis-complex></file-analysis-complex>
                        </section>
                    </main>    
                    
                </article>
            </file-provider>
        </group-provider>
        `;
    }


    protected renderApp() {


        if (this.info === undefined) {
            return this.renderLoading(t(T.loading));
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

    --thermal-browser-width: 150px;

    

    @media(min-width: 400px) {
        --thermal-browser-width: 300px;
    }
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

    display: grid;
    width: 100%;
    grid-template-columns: repeat( auto-fill, minmax(var(--thermal-browser-width), 1fr) );
    gap: var(--thermal-gap);

    .folder {

        padding: 0;
        overflow: hidden;

        border-radius: var(--thermal-radius);
        border: 1px solid var( --thermal-slate );

        background: var(--thermal-background);
        color: var(--thermal-foreground);

        cursor: pointer;
        flex-grow: 1;

        transition: all .2s ease-in-out;

        file-canvas,
        file-provider {
            displaY: block;
        }

        file-provider {
            overflow: hidden;
            position: relative;
        }

        file-canvas {
            transition: all .4s ease-in-out;
        }

        .open-button {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
            transition: all .4s ease-in-out;
            opacity: 0;
            pointer-events: none;
            transform: translateY(20px);
        }


        .folder-header {
            padding: var(--thermal-gap);
            display: grid;
            gap: var(--thermal-gap);
            grid-template-columns: auto 2rem;
            text-align: left;
        }

        .folder-header-icon {
            color: var(--thermal-slate-light);
            transition: all .4s ease-in-out;
        }


        &:hover,
        &:focus {
            background: var(--thermal-background);
            box-shadow: var(--thermal-shadow);
            file-canvas {
                transform: scale(1.2);
            }

            .open-button {
                opacity: 1;
                transform: translateY(0px);
            }

            .folder-header-icon {
                color: var(--thermal-primary);
            }
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

        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(var(--thermal-browser-width), 1fr) );
        gap: var(--thermal-gap);

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
                // flex-grow: 1;
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
    

}


.info {

    padding: var(--thermal-gap);
    border: 1px solid var(--thermal-slate);
    border-radius: var(--thermal-radius);
    background-color: var(--thermal-slate-light);

    margin-bottom: 1em;

    thermal-btn,
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



    .detail {
        padding: var(--thermal-gap);
        border-radius: var(--thermal-radius);
        border: 1px solid var( --thermal-slate );
        background-color: var(--thermal-background);
        box-sizing: border-box;
        width: 100%;

        main {
            display: grid;
            gap: var(--thermal-gap);
            grid-template-columns: 1fr;
            @media ( min-width: 900px ) {
                grid-template-columns: 2fr 1fr;
            }
            @media ( min-width: 1300px ) {
                grid-template-columns: 1fr 1fr;
            }
        }

        header {
            width: 100%;
            display: flex;
            gap: 5px;
            margin-bottom: var(--thermal-gap);
            align-items: center;
        }

    }

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: 1px solid var(--thermal-slate);
        border-radius: var(--thermal-radius);
        box-sizing: border-box;
        padding: var(--thermal-gap);
        min-height: 30vh;
        color: var(--thermal-slate-dark);
        background: var(--thermal-slate-light);
    }


    .lds-facebook {
  /* change color here */
  color: var(--thermal-slate-dark);
}
.lds-facebook,
.lds-facebook div {
  box-sizing: border-box;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: currentColor;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0s;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}


    `;


    protected renderHeader() {

        if (this.state === STATE.MAIN) {
            return nothing;
        }

        return html`
            <div slot="bar-persistent">
                <registry-range-form stacked="false"></registry-range-form>
            </div>

            ${this.state === STATE.ONE && this.dataOnly !== undefined
                ? html`<group-provider slug="${this.dataOnly.info.folder}" slot="bar-pre">
                    <group-download-dropdown></group-download-dropdown>
                </group-provider>`
                : nothing
            }
            <registry-opacity-slider slot="bar-pre"></registry-opacity-slider>
            <group-tool-buttons showhint="false" showpopup="true" slot="bar-pre"></group-tool-buttons>       
        `;

    }

    protected renderHistogram() {
        if (this.state === STATE.MAIN) return nothing;
        return html`<registry-histogram expandable="true"></registry-histogram>
        <registry-range-slider></registry-range-slider>
        <registry-ticks-bar></registry-ticks-bar>
        
        <nav id="graf">
        ${this.dataOnly !== undefined
                ? html`<group-provider slug="${this.dataOnly.info.folder}">

                    <div style="width:100%">
                        <group-chart></group-chart>
                    </div>

                </group-provider>`
                : nothing}
        </nav>
        `;
    }

    protected renderTableHeader() {

        if (this.state !== STATE.MULTIPLE) return nothing;

        const header = Object.values(this.folders).filter(f => this.only.includes(f.folder));

        return html`<table class="affected">
                <thead>
                    <tr>
                        ${header.map(folder => html`<th>
                            <div class="cell-header">
                                ${folder.name}
                            </div>
                        </th>` )}
                    </tr>
                </thead>
            </table>
            `;

    }



    protected render(): unknown {

        let title = t(T.remotefoldersbrowser);
        let onlabel: undefined | (() => void) = undefined;

        if (this.info === undefined) {
            title = t(T.loading) + "...";
        } else {
            // In case there is only one group in the entire app, show a special title
            if (Object.keys(this.folders).length === 1 && this.label) {
                title = this.label;
            }

            // If looking on the main page, show the label
            else if (this.state === STATE.MAIN && this.label) {
                title = this.label;
            }

            // In all other cases, show the close button
            else if (this.state !== STATE.MAIN) {
                title = t(T.close);
                onlabel = () => this.actionCloseToHomepage();
            }

        }

        return html`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${ref(this.registryRef)}>

        <thermal-app 
            author="${ifDefined(this.author)}" 
            license="${ifDefined(this.license)}" 
            showfullscreen="true" 
            label=${title} 
            .onlabel=${ifDefined(onlabel)}
        >

            ${this.state !== STATE.MAIN
                ? html`<registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>`
                : nothing
            }

            ${this.state === STATE.MAIN && this.enablegrouping && Object.keys(this.folders).length > 1
                ? html`<thermal-btn slot="bar-pre" @click=${() => {
                    this.actionShowEverything();
                }} tooltip="Zobrazit všechny soubory v níže uvedených složkách v mřížce podle času">${t(T.showeverything)}</thermal-btn>`
                : nothing
            }

            ${this.renderHeader()}
            
            <div slot="pre">
                ${this.enablegrouping ? this.renderInfo() : nothing}
                ${this.renderHistogram()}
                ${this.renderTableHeader()}
            </div>
        
            <div class=${classMap({
                screen: true,
                "screen-main": this.state === STATE.MAIN,
                "screen-browser": [STATE.ONE, STATE.MULTIPLE].includes(this.state),
                "screen-browser__one": this.state === STATE.ONE,
                "screen-browser__multiple": this.state === STATE.MULTIPLE,
                "screen-detail": this.state === STATE.DETAIL
            })}>
                ${this.renderApp()}
            </div>

             <thermal-dialog label="${t(T.config)}" slot="close">
                <thermal-btn slot="invoker" icon="settings" iconStyle="solid" tooltip="${t(T.config)}">
                </thermal-btn>
                <div slot="content">
                    <table>
                    <png-export-panel></png-export-panel>
                    <registry-display-panel></registry-display-panel>
                    </table>
                </div>
            </thermal-dialog>

        </thermal-app>

    </registry-provider>
</manager-provider>
        
        `;
    }


}