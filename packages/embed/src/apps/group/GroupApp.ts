import { property, queryAssignedElements, state, customElement } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { ThermalGroup } from "@labir/core";
import { createOrGetManager } from "../../hierarchy/providers/getters";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { TimeEntryElement } from "../time/parts/TimeEntryElement";
import { GroupEntry, Grouping, TimeGrouping } from "./utils/TimeGrouping";
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement("thermal-group-app")
export class GroupElement extends BaseElement {


    // Presentational attributes
    @property({ type: String, reflect: true })
    author?: string;

    @property({ type: String, reflect: true })
    label: string = "Group of IR images";

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

    connectedCallback(): void {
        super.connectedCallback();

        const manager = createOrGetManager(this.slug)
        const registry = manager.addOrGetRegistry(this.slug);
        const group = registry.groups.addOrGetGroup(this.slug);

        this.group = group;
        this.grouper = new TimeGrouping(this, group);

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        // Fire the initial grouping
        this.grouper.processEntries(this.entries.filter(el => el instanceof TimeEntryElement));
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        // Project grouping into the grouper...
        if (_changedProperties.has("grouping")) {
            if (this.grouper) this.grouper.setGrouping(this.grouping);
        }
    }

    public static styles?: CSSResultGroup | undefined = css`


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



        .file {
            box-sizing: border-box;
            padding: 2.5px;
        }

        .file article {
            border: 1px solid var(--thermal-slate);
            border-bottom: 0;
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            background-color: var(--thermal-slate-light);
        }

        .file thermal-file-mirror {
            display: block;
        }

        .file-title {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var( --thermal-foreground );
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            padding: calc( var(--thermal-fs) * .5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

        .file-title > h3 {
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .file-title > h3 > span {
            white-space: nowrap;
        }

        .file-title > div {
            flex-grow: 1;
            display: flex;
            gap: 5px;
            justify-content: flex-end;
        }

        .file-info-button {
            cursor: pointer;
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
        }

        .file-info-button:hover {
            color: var(--thermal-background);
            background-color: var(--thermal-primary);
        }


    
    `;

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
                this.columns = parseInt(event.target.value);
            }}></input>

                                    <thermal-dropdown>
                                        <span slot="invoker">${this.grouping === "none" ? "Do not grop" : "Group by " + this.grouping}</span>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "none"}">Do not group</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "hour"}">Group by hour</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "day"}">Group by day</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "week"}">Group by week</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "month"}">Group by month</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${() => this.grouping = "year"}">Group by year</thermal-button>
                                        </div>

                                    </thermal-dropdown>

                                    ${this.grouper.numFiles > 0
                                        ? html`<thermal-button @click=${() => this.grouper.forEveryInstance(instance => instance.export.canvasAsPng())}>Download individual images</thermal-button>`
                                        : nothing
                                    }
                                    
                                    ${this.grouper.numFiles > 0 
                                    ? html`<thermal-dialog label="export">
                                        <thermal-button slot="invoker">Export group as image</thermal-button>
                                        <div slot="content">
                                            <group-export-layout .group=${this.group}></group-export-layout>
                                        </div>
                                    </thermal-dialog>
                                    `
                                    : nothing
                                    }

                                </thermal-bar>

                            </div>


                            <registry-histogram></registry-histogram>
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>

                            <div class="app-content">

                                ${this.groups.map(group => {

                const title = group.label.trim().length > 0
                    ? group.label.trim()
                    : undefined;

                const info = group.info?.trim() !== ""
                    ? group.info?.trim()
                    : undefined;

                const listClasses = {
                    "group-files": true,
                    [`group-files-${this.columns}`]: true
                }

                const groupClasses = {
                    "group": true,
                    "group__bordered": this.grouping !== "none"
                }

                return html`
                                    <div class=${classMap(groupClasses)}>

                                        ${title || info
                        ? html`
                                                <div class="group-header">

                                                    ${title ? html`<h2 class="group-title">${title}</h2>` : nothing}

                                                    ${info ? html`<p class="group-info">${info}</p>` : nothing}

                                                </div>
                                            `
                        : nothing
                    }

                                        

                                        <section class=${classMap(listClasses)}>

                                            ${group.files.map(({ instance, innerHtml, label }) => {
                        return html`
                                                
                                                    <div class="file">

                                                        <article>

                                                            <file-mirror .file=${instance}>

                                                                <div class="file-title">
                                                                    <h3><span>${label}</span></h3>
                                                                    <div>
                                                                        ${innerHtml ? html`<thermal-dialog label="Note for ${label}">
                                                                            <button slot="invoker" class="file-info-button" role="button">note</button>
                                                                            <div slot="content">${unsafeHTML(innerHtml)}</div>
                                                                        </thermal-dialog>`
                                    : nothing}
                                                                        <button 
                                                                            class="file-info-button" 
                                                                            role="button"
                                                                            @click=${() => instance.export.canvasAsPng()}
                                                                        >png</button>
                                                                        <file-info-button>
                                                                            <button slot="invoker" class="file-info-button" role="button">info</button>
                                                                        </file-info-button>
                                                                    </div>
                                                                </div>

                                                                <file-canvas></file-canvas>
                                                                <file-analysis-table></file-analysis-table>
                                                            </file-mirror>

                                                        <article>
                                                    
                                                    </div>
                                                
                                                `;
                    })}
                                        
                                        </section>

                                    </div>
                                    `;

            })}
                            
                            </div>

                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `;
    }


}