import { customElement, property, queryAssignedElements, queryAssignedNodes, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { GroupConsumer } from "../../../hierarchy/consumers/GroupConsumer";
import { TimeEntryElement } from "./TimeEntryElement";
import { GroupProviderElement } from "../../../hierarchy/providers/GroupProvider";
import { Instance, ThermalFileFailure, ThermalGroup, ThermalManager, ThermalRegistry, TimeFormat } from "@labir/core";
import { createOrGetManager } from "../../../hierarchy/providers/getters";

import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { endOfDay, endOfHour, endOfMonth, endOfWeek, startOfDay, startOfHour, startOfMonth, startOfWeek } from "date-fns";
import { format } from "date-fns";
import { GroupEntry, TimeGrouping } from "../utils/TimeGrouping";

export type Grouping = "none" | "hour" | "day" | "week" | "month" | "year";

@customElement("time-group")
export class TimeGroupElement extends BaseElement {

    @state()
    @queryAssignedElements({ slot: 'entry', flatten: true })
    entries!: Array<Element>;

    @state()
    groups: GroupEntry[] = [];

    @state()
    instances: Instance[] = [];

    @property()
    columns: number = 3;

    @property()
    breakpoint: number = 700;

    @property({ type: Number, reflect: true})
    width: number = 1;

    @property({ type: String, reflect: true })
    public grouping: Grouping = "none";


    public connectedCallback(): void {
        super.connectedCallback();
    }

    @property()
    public name?: string;

    @property()
    public slug!: string;

    protected grouper?: TimeGrouping;


    @state()
    protected scopeSlug?: string;

    public setManagerSlug(
        slug: string
    ) {

        // this.scopeSlug = slug;
        const manager = createOrGetManager(slug);
        const registry = manager.addOrGetRegistry(slug);
        const group = registry.groups.addOrGetGroup(this.slug);

        // Create the grouper class
        this.grouper = new TimeGrouping(this, group);

        // Process all entries (valid only)
        setTimeout(() => {
            this.log("--------", this.grouper);
            if (this.grouper) {
                this.grouper.processEntries(
                    this.entries.filter(el => el instanceof TimeEntryElement)
                );
            }
        }, 0);

        this.scopeSlug = slug;

    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("groups")) {
            // console.log(this.groups);
        }

        if (_changedProperties.has("grouping")) {
            if (this.grouper) {
                this.grouper.setGrouping(this.grouping);
            }
        }

    }



    public static styles?: CSSResultGroup | undefined = css`

        :host([width="1"]) {
            width: 100%;
        }
        :host([width="2"]) {
            width: 50%;
        }
        :host([width="3"]) {
            width: 33%;
        }
        :host([width="4"]) {
            width: 25%;
        }
        :host([width="5"]) {
            width: 20%;
        }
        :host([width="6"]) {
            width: calc( 100% / 6  - 5px);
        }
        :host([width="7"]) {
            width: calc( 100% / 7  - 5px);
        }

        .files-list {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
        }

        .file {
            width: 100%;
        }

        @media ( min-width: 700px ) {
        
            .file-list-1 .file { width: 100%; }
        
            .file-list-2 .file { width: calc( 50%  - 5px); }

            .file-list-3 .file { width: calc( 33%  - 5px); }

            .file-list-4 .file { width: calc( 25%  - 5px); }

            .file-list-5 .file { width: calc( 20%  - 5px); }

            .file-list-6 .file { width: calc( 100% / 6  - 5px); }

            .file-list-7 .file { width: calc( 100% / 7  - 5px); }

            .file-list-8 .file { width: calc( 100% / 8  - 5px); }

            .file-list-9 .file { width: calc( 100% / 9  - 5px); }

            .file-list-10 .file { width: calc( 100% / 10  - 5px); }
        
        }


        .file-list-collapsed .file { width: 100% !important; }

        .file-title {
            background: var(--thermal-slate);
            color: var(--thermal-background);
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            padding: calc( var(--thermal-gap) * .5 );
        }
    
    `;

    render() {
        return html`
            <slot name="entry"></slot>

            <manager-mirror slug=${this.scopeSlug}>

                    <registry-mirror slug="${this.scopeSlug}">

                        <group-mirror slug="${this.slug}">

                            <group-tool-buttons></group-tool-buttons>

                                <h2>${this.name ?? this.slug}</h2>

                                <slot></slot>


                                ${this.groups.map(group => html`
                                
                                    <time-group-row
                                        columns=${this.columns}
                                        breakpoint=${this.breakpoint}
                                        label=${group.label}
                                        info=${group.info}
                                        .files=${group.files}
                                        from=${group.from}
                                        to=${group.to}
                                        grouping=${this.grouping}
                                    ></time-group-row>
                                    
                                ` )}


                        </group-mirror>
                    
                    </registry-mirror>

                </manager-mirror>

        `;
    }

}