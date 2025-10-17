import { AvailableThermalPalettes, CallbacksManager, ThermalGroup, ThermalManager } from "@labir/core";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { GroupProviderElement } from "../../hierarchy/mirrors/GroupMirror";
import { createOrGetManager } from "../../hierarchy/providers/getters";
import { T } from "../../translations/Languages";
import { initLocalesInTopLevelElement, IWithlocale } from "../../translations/localeContext";
import { booleanConverter } from "../../utils/converters/booleanConverter";
import { AbstractMultipleApp } from "../multiple/AbstractMultipleApp";
import { ThermalFileElement } from "../../utils/multipleFiles/ThermalFile";
import { GroupEntry, Grouping, TimeGrouping } from "../../utils/multipleFiles/TimeGrouping";


enum STATE {
    GROUP,
    DETAIL
}

@customElement("thermal-group-app")
export class GroupElement extends AbstractMultipleApp implements IWithlocale {


    public get manager(): ThermalManager {
        return this.groupRef.value!.group.registry.manager;
    }

    protected groupRef: Ref<GroupProviderElement> = createRef();

    @property({ type: String, reflect: true, attribute: true })
    public palette: AvailableThermalPalettes = "jet";

    @property({ type: Number, reflect: true })
    public from?: number;

    @property({ type: Number, reflect: true })
    public to?: number;


    // Presentational attributes
    @property({ type: String, reflect: true })
    public author?: string;

    @property({ type: String, reflect: true })
    public label: string = "Group of IR images";

    @property({ type: String, reflect: false })
    public description?: string;

    @property({ type: String, reflect: true })
    public license?: string;

    /** `TimeEntryElements` slotted in slot called `entry`. Flat list. Need to be filtered before usage. */
    @state()
    @queryAssignedElements({ flatten: true })
    public entries!: Array<Element>;

    /** Internal key from which an isolated hierarchy of @labir/core components will be created. */
    @property({ type: String, reflect: true })
    public slug: string = Math.random().toFixed(5);

    /** Number of columns of files. */
    @property()
    public columns: number = 3;

    /** The breakpoint in PX below which the images will be 100% wide. The breakpoint is relative to the container, not to the window. */
    @property()
    public breakpoint: number = 700;

    /** The current grouping mode. Its change will trigger reorganisation of rows. */
    @property({ type: String, reflect: true })
    public grouping: Grouping = "none";

    /** The internal grouping object. */
    public grouper!: TimeGrouping;

    /** The group and all its parents are created from the slug and stored locally. */
    protected group!: ThermalGroup;

    /** Loaded files groupped according to the current grouping mode. */
    @state()
    groups: GroupEntry[] = [];

    @property({ type: String })
    public files?: string;


    public readonly onGroupInit = new CallbacksManager<(group: ThermalGroup) => void>

    public readonly onColumns = new CallbacksManager<(columns: number) => void>

    @property({ type: String, reflect: true })
    public analysis1?: string;

    @property({ type: String, reflect: true })
    public analysis2?: string;

    @property({ type: String, reflect: true })
    public analysis3?: string;

    @property({ type: String, reflect: true })
    public analysis4?: string;

    @property({ type: String, reflect: true })
    public analysis5?: string;

    @property({ type: String, reflect: true })
    public analysis6?: string;

    @property({ type: String, reflect: true })
    public analysis7?: string;

    @property({ type: String, reflect: true, converter: booleanConverter(false) })
    public preservetime: boolean = true;

    @state()
    protected state: STATE = STATE.GROUP;

    @state()
    protected detail?: {
        lrc: string,
        png?: string
    } = undefined;

    @state()
    protected loading?: boolean = false;


    connectedCallback(): void {
        super.connectedCallback();

        const manager = createOrGetManager(this.slug)
        const registry = manager.addOrGetRegistry(this.slug);
        const group = registry.groups.addOrGetGroup(this.slug, this.label, this.description);

        group.files.addListener(this.UUID, (instances) => {
            if (group.analysisSync.value === false) {
                const instance = instances[0];
                if (instance) {
                    group.analysisSync.turnOn(instance);
                }
            }
        })

        this.group = group;
        this.grouper = new TimeGrouping(this, group);

        this.onGroupInit.call(this.group);

    }

    protected async load() {
        this.loading = true;
        const files = this.files ?
            this.parseFilesProperty(this.files)
            : [];

        // Fire the initial grouping
        if (files.length > 0) {
            this.grouper.processParsedFiles(files);
        } else {
            this.grouper.processEntries(this.entries.filter(el => el instanceof ThermalFileElement));
        }

        this.group.files.addListener( this.UUID, value => {
            this.loading = false;
            if ( value.length < 4 ) {
                this.columns = value.length;
            } else {
                this.columns = 4;
            }
        } );
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        initLocalesInTopLevelElement(this);

        this.group.registry.manager.palette.setPalette(this.palette);

        if (this.from !== undefined && this.to !== undefined) {
            this.group.registry.range.imposeRange({
                from: this.from,
                to: this.to
            });
        }

        setTimeout( () => this.load(), 0 );

    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        // Project grouping into the grouper...
        if (_changedProperties.has("grouping")) {
            if (this.grouper) this.grouper.setGrouping(this.grouping);
        }

        if (_changedProperties.has("palette") && this.palette) {
            if (this.grouper) this.grouper.group.registry.palette.setPalette(this.palette);
        }

        if (_changedProperties.has("columns")) {
            this.onColumns.call(this.columns);
        }

        if (_changedProperties.has("files")) {

            if (this.files && _changedProperties.get("files") !== undefined) {
                const parsedFiles = this.parseFilesProperty(this.files);

                if (parsedFiles.length > 0) {
                    this.grouper.processParsedFiles(parsedFiles);
                }
            }

        }

        if (_changedProperties.has("analysis1")) {
            this.group.analysisSync.recieveSlotSerialized(this.analysis1, 1);
            this.group.analysisSync.recieveSlotSerialized(this.analysis2, 2);
            this.group.analysisSync.recieveSlotSerialized(this.analysis3, 3);
            this.group.analysisSync.recieveSlotSerialized(this.analysis4, 4);
            this.group.analysisSync.recieveSlotSerialized(this.analysis5, 5);
            this.group.analysisSync.recieveSlotSerialized(this.analysis6, 6);
            this.group.analysisSync.recieveSlotSerialized(this.analysis7, 7);
        }
    }

    protected scrollToComponent() {
        this.scrollIntoView({ behavior: "smooth", block: "start" });
    }


    protected async showDetail(
        lrc: string,
        png?: string
    ) {

        this.detail = {
            lrc,
            png
        }

        this.group.files.removeAllInstances();
        this.group.registry.range.reset();
        this.group.analysisSync.reset();
        this.group.analysisGraph.reset();
        this.state = STATE.DETAIL;
        this.scrollToComponent();
    }

    protected async closeDetail() {

        delete this.detail;
        this.detail = undefined;
        this.group.analysisSync.reset();
        this.group.analysisGraph.reset();
        this.group.registry.range.reset();
        this.load();
        this.state = STATE.GROUP;
        this.scrollToComponent();

    }



    static styles?: CSSResultGroup | undefined = css`


        :host {
            --gap: calc(var(--thermal-gap) * .5);
        }

        .app-content {
            box-sizing: border-box;
            display: grid;
            width: 100%;
            gap: var(--thermal-gap);
            grid-template-columns: 30px 1fr;
        }


        .group {

            
        
        }

        .group:not(.group__bordered) {
            margin-top: calc( var( --thermal-gap ) * .5 );
        }

        .group__bordered {
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            margin-top: calc( var( --thermal-gap ) * .5 );
            background-color: color-mix(in srgb, var( --thermal-slate-light ), #fff);
        }

        .group__bordered .group-files {
            padding: calc( var( --thermal-gap ) * .5 );
        }

        

        .group-files {
            display: flex;
            flex-wrap: wrap;

            div file-mirror {
                padding: calc( var(--gap) * .5);
                display: block;
            }
        }

        .group-files-1 div { width: 100%; }
        .group-files-2 div { width: 50%; }
        .group-files-3 div { width: calc(100% / 3); }
        .group-files-4 div { width: calc(100% / 4); }
        .group-files-5 div { width: calc(100% / 5); }
        .group-files-6 div { width: calc(100% / 6); }
        .group-files-7 div { width: calc(100% / 7); }
        .group-files-8 div { width: calc(100% / 8); }
        .group-files-9 div { width: calc(100% / 9); }
        .group-files-10 div { width: calc(100% / 10); }

        .group-header {

            display: flex;
            gap: var(--thermal-gap);
            align-items: center;
            padding: calc( var( --thermal-gap ) * .5 );
            border-bottom: 1px solid var( --thermal-slate-light );
        }

        .group-title {
            margin: 0;
            padding: 0;
            font-size: calc( var(--thermal-fs) * 1.2 );
            color: var( --thermal-foreground );
        }

        .group-info {
            color: var( --thermal-slate );
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
        }

        .detail {
            padding: var(--thermal-gap);
            background: var(--thermal-background);
            box-sizing: border-box;
            border-radius: var(--thermal-gap);
            border: 1px solid var(--thermal-slate);
            width: 100%;
        }

        group-tool-bar {
            position: sticky;
            top: 0px;
            z-index: 999;
        }


    
    `;


    protected renderGroup() {

        return html`${this.groups.map(group => html`<section class="group">
                                        
            <div class="group-files group-files-${this.columns}">
                ${group.files.map(file => html`<div class="file">
                    <file-mirror .file=${file.instance} autoclear="true">
                        <file-thumbnail
                            .ondetail=${() => {
                this.showDetail(file.instance.thermalUrl, file.instance.visibleUrl)
            }}
                            label=${ifDefined( file.label )}
                        ></file-thumbnail>
                    </file-mirror>
                </div>` )}
            </div>
        </section>` )} `;

    }

    protected renderDetail() {
        if (this.detail === undefined) {
            return nothing;
        }
        return html`<div class="detail">
            <file-provider thermal="${this.detail.lrc}" visible="${this.detail.png}">
                <file-detail label="${this.label}" .onback=${() => this.closeDetail()}></file-detail>
            </file-provider>
        </div>`;
    }



    protected render(): unknown {
        return html`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}" from="${ifDefined(this.from)}" to="${ifDefined(this.to)}">

                    <group-provider slug="${this.slug}" autoclear="true" ${ref(this.groupRef)}>

                        <thermal-app
                            author=${ifDefined(this.author)}
                            license=${ifDefined(this.license)}
                            showfullscreen="true"
                            label=${ifDefined(this.label)}
                        >

                            ${this.loading === false 
                                ? html`                                

                                <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>
                                
                                <registry-range-form slot="bar-pre"></registry-range-form>
                                        

                                ${this.state === STATE.GROUP
                                    ? html`
                                        ${this.grouper.numFiles > 0
                                            ? html`<group-download-dropdown slot="bar-pre"></group-download-dropdown>`
                                            : nothing
                                        }
                                        <div slot="bar-pre">
                                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${(event: InputEvent) => {

                        const target = event.target as null | { value: string }
                        const value = target?.value;
                        if (value !== undefined) {
                            this.columns = parseInt(value);
                        }
                    }}
                                            ></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${t(T.columns, { num: this.columns })}</div>
                                    </div>

                            <group-analysis-sync-button slot="bar-pre"></group-analysis-sync-button>
                                        `
                : nothing
            }
                                    

                            ${this.showabout === true ? html`<app-info-button slot="bar-pre"></app-info-button>` : nothing}

                                        `
                                        : nothing
                            }

                            <thermal-dialog label="${t(T.config)}" slot="close">
                                
                                <thermal-btn slot="invoker" icon="settings" iconStyle="solid" tooltip="${t(T.config)}"></thermal-btn>

                                <div slot="content">
                                    <table>
                                        <png-export-panel></png-export-panel>
                                        <registry-display-panel></registry-display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            ${ this.loading === false
                                ? html`
                                    ${this.showhistogram === true ? html`<registry-histogram expandable="true" slot="pre"></registry-histogram>` : nothing}

                                    <registry-range-slider slot="pre"></registry-range-slider>
                                    <registry-ticks-bar slot="pre"></registry-ticks-bar>
                                `
                                : nothing
                            }
                            

                            ${ this.state === STATE.GROUP ? html`
                                <group-chart slot="pre"></group-chart>
                            ` : nothing }

                            ${this.loading === true 
                                ? html`<thermal-loading message="${t(T.loading)}"></thermal-loading>`
                                : html`<div class="app-content">

                                    <slot></slot>

                                    <group-tool-bar></group-tool-bar>

                                    <div class="app-content-main">
                                    ${this.state === STATE.GROUP
                ? this.renderGroup()
                : this.renderDetail()
            }
                                    </div>
                            
                            </div>

                            ${ this.state === STATE.GROUP ? html`
                                <group-timeline></group-timeline>
                            ` : nothing }
                            `
                            }
                            

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `;
    }


}