import { ThermalGroup } from "@labir/core";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { ifDefined } from 'lit/directives/if-defined.js';
import { createOrGetManager } from "../../hierarchy/providers/getters";
import { T } from "../../translations/Languages";
import { AbstractMultipleApp } from "../miltiple/AbstractMultipleApp";
import { TimeEntryElement } from "../registry/parts/TimeEntryElement";
import { GroupEntry, Grouping, TimeGrouping } from "./utils/TimeGrouping";

@customElement("thermal-group-app")
export class GroupElement extends AbstractMultipleApp {


    // Presentational attributes
    @property({ type: String, reflect: true })
    author?: string;

    @property({ type: String, reflect: true })
    label: string = "Group of IR images";

    @property({ type: String, reflect: false })
    description?: string;

    @property({ type: String, reflect: true })
    license?: string;

    /** `TimeEntryElements` slotted in slot called `entry`. Flat list. Need to be filtered before usage. */
    @state()
    @queryAssignedElements({ slot: 'entry', flatten: true })
    entries!: Array<Element>;

    /** Internal key from which an isolated hierarchy of @labir/core components will be created. */
    @property()
    slug: string = Math.random().toFixed(5);

    /** Number of columns of files. */
    @property()
    columns: number = 3;

    /** The breakpoint in PX below which the images will be 100% wide. The breakpoint is relative to the container, not to the window. */
    @property()
    breakpoint: number = 700;

    /** The current grouping mode. Its change will trigger reorganisation of rows. */
    @property({ type: String, reflect: true })
    public grouping: Grouping = "none";

    /** The internal grouping object. */
    protected grouper!: TimeGrouping;

    /** The group and all its parents are created from the slug and stored locally. */
    protected group!: ThermalGroup;

    /** Loaded files groupped according to the current grouping mode. */
    @state()
    groups: GroupEntry[] = [];

    @property({ type: String })
    public files?: string;



    connectedCallback(): void {
        super.connectedCallback();

        const manager = createOrGetManager(this.slug)
        const registry = manager.addOrGetRegistry(this.slug);
        const group = registry.groups.addOrGetGroup(this.slug, this.label, this.description);

        this.group = group;
        this.grouper = new TimeGrouping(this, group);

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        const files = this.files ?
            this.parseFilesProperty(this.files)
            : [];

        this.log( files, this.entries );

        // Fire the initial grouping
        if (files.length > 0) {
            this.grouper.processParsedFiles(files);
        } else {
            this.grouper.processEntries(this.entries.filter(el => el instanceof TimeEntryElement));
        }

    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        // Project grouping into the grouper...
        if (_changedProperties.has("grouping")) {
            if (this.grouper) this.grouper.setGrouping(this.grouping);
        }
    }

    public static styles?: CSSResultGroup | undefined = [
        AbstractMultipleApp.styles,
        css`


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
            width: calc( 100%  + 5px);
            margin: 0 -2.5px;
        }

        .group-files-1 .file { width: 100%; }
        
        .group-files-2 .file { width: 50%; }

        .group-files-3 .file { width: 33%; }

        .group-files-4 .file { width: 25%; }

        .group-files-5 .file { width: 20%; }

        .group-files-6 .file { width: calc( 100% / 6 ); }

        .group-files-7 .file { width: calc( 100% / 7 ); }

        .group-files-8 .file { width: calc( 100% / 8 ); }

        .group-files-9 .file { width: calc( 100% / 9 ); }

        .group-files-10 .file { width: calc( 100% / 10 ); }

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


    
    `];

    protected render(): unknown {
        return html`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}">

                    <group-provider slug="${this.slug}">

                        <thermal-app
                            author=${ifDefined(this.author)}
                            license=${ifDefined(this.license)}
                        >
                        
                            <thermal-button 
                                variant="foreground" 
                                interactive="false" 
                                slot="bar"
                            >
                                ${this.label}
                            </thermal-button>

                            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                                    <registry-palette-dropdown></registry-palette-dropdown>

                                    <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${(event: InputEvent) => {

                const target = event.target as null | { value: string }
                const value = target?.value;
                if (value !== undefined) {
                    this.columns = parseInt(value);
                }
            }}></input>

                                    <thermal-dropdown>
                                        <span slot="invoker">${this.grouping === "none" ? t(T.donotgroup) : t(T["by" + this.grouping])}</span>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "none"}">${t(T.donotgroup)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "hour"}">${t(T.byhour)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "day"}">${t(T.byday)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "week"}">${t(T.byweek)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "month"}">${t(T.bymonth)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "year"}">${t(T.byyear)}</thermal-button>
                                        </div>

                                    </thermal-dropdown>

                                    ${this.grouper.numFiles > 0
                ? html`
                                            <thermal-dropdown class="download">

                                                <span slot="invoker">${t(T.download)}</span>

                                                <div slot="option">
                                                    <thermal-button @click=${() => this.grouper.forEveryInstance(instance => instance.export.downloadPng())}>${t(T.pngofindividualimages)}</thermal-button>
                                                    <small>${t(T.pngofindividualimageshint)}</small>
                                                </div>

                                                <div slot="option">

                                                    <thermal-button @click=${() => this.group.analysisSync.png.downloadPng({
                    columns: this.columns
                })}>${t(T.pngofentiregroup)}</thermal-button>
                                                    <small>${t(T.pngofentiregrouphint)}</small>
                                                </div>


                                                <div slot="option">
                                                    <thermal-button @click=${() => { this.group.analysisSync.csv.downloadAsCsv() }}>${t(T.csvofanalysisdata)}</thermal-button>
                                                    <small>${t(T.csvofanalysisdatahint)}</small>
                                                </div>

                                            </thermal-dropdown>

                                            <registry-range-full-button
                                                @mouseenter=${() => {
                        this.highlightFrom = this.group.registry.minmax.value?.min;
                        this.highlightTo = this.group.registry.minmax.value?.max;
                    }}
                                                @focus=${() => {
                        this.highlightFrom = this.group.registry.minmax.value?.min;
                        this.highlightTo = this.group.registry.minmax.value?.max;
                    }}
                                                @mouseleave=${() => {
                        this.highlightFrom = undefined;
                        this.highlightTo = undefined;
                    }}
                                                @blur=${() => {
                        this.highlightFrom = undefined;
                        this.highlightTo = undefined;
                    }}
                                            ></registry-range-full-button>
                                        `
                : nothing
            }

                                </thermal-bar>

                            </div>


                            <registry-histogram></registry-histogram>
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar highlightFrom=${ifDefined(this.highlightFrom)} highlightTo=${ifDefined(this.highlightTo)}></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>

                            <div class="app-content">

                                    <slot></slot>


                                    ${this.groups.map(group => {

                return this.groupRenderer.renderGroup(
                    group,
                    this.columns,
                    this.grouping,
                    (instance) => {
                        this.highlightFrom = instance.min;
                        this.highlightTo = instance.max;
                    },
                    () => {
                        this.highlightFrom = undefined;
                        this.highlightTo = undefined;
                    }
                );

            })}


                                
                            
                            </div>

                            <group-timeline></group-timeline>

                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `;
    }


}