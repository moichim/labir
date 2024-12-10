import { Instance } from "@labir/core";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { createOrGetManager } from "../../../hierarchy/providers/getters";
import { TimeEntryElement } from "./TimeEntryElement";

import { GroupRenderer } from "../../miltiple/GroupRenderer";
import { InstanceInteractionCallback, InstanceRenderer } from "../../miltiple/InstanceRenderer";
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

    @property({ type: Number, reflect: true })
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

    @property({ type: Object })
    onInstanceEnter?: InstanceInteractionCallback

    @property({ type: Object })
    onInstanceLeave?: InstanceInteractionCallback

    @property({ type: Object })
    groupRenderer?: GroupRenderer;

    public setManagerSlug(
        slug: string
    ) {

        this.scopeSlug = slug;
        const manager = createOrGetManager(slug);
        const registry = manager.addOrGetRegistry(slug);
        const group = registry.groups.addOrGetGroup(this.slug);

        // Create the grouper class
        this.grouper = new TimeGrouping(this, group);

        // Process all entries (valid only)
        setTimeout(() => {

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



    public static styles = [
        InstanceRenderer.styles,
        GroupRenderer.styles,
        css`

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

        .grp {

            padding: calc( var( --thermal-gap ) * 0.3 );
        
        }

        .grp-inner {

            width: 100%;
            box-sizing: border-box;
            padding: calc( var( --thermal-gap ) * 0.3 );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
        
        }

        .grp-header {

            display: flex;
            justify-content: space-between;
            align-items: center;
        
        }

        .grp-header h2 {
            margin: 0;
            padding: 0;
            padding-bottom: calc( var( --thermal-gap ) * .8 );
            font-size: calc( var( --thermal-fs ) * 1.3);
            line-height: 1em;
        }
    
    `
    ];

    render() {
        return html`
            <slot name="entry"></slot>

            ${this.scopeSlug
                ? html`<manager-mirror slug=${this.scopeSlug}>

                    <registry-mirror slug="${this.scopeSlug}">

                        <group-mirror slug="${this.slug}">

                                <div class="grp">

                                    <div class="grp-inner">

                                        <div class="grp-header">

                                            <h2>${this.name ?? this.slug}</h2>

                                            <div>

                                                <button
                                                    class="file-info-button"
                                                    @click=${() => this.grouper?.group.analysisSync.png.downloadPng({
                                                        columns: this.columns
                                                    })}
                                                >png</button>

                                                <button
                                                    class="file-info-button"
                                                    @click=${() => this.grouper?.group.analysisSync.csv.downloadAsCsv()}
                                                >csv</button>


                                                <button
                                                    class="file-info-button"
                                                    @click=${() => {
                        if (this.grouper)
                            this.grouper.group.registry.range.imposeRange({
                                from: this.grouper.group.minmax.value!.min,
                                to: this.grouper.group.minmax.value!.max
                            });
                    }}
                                                >range</button>

                                            </div>
                                        
                                        </div>



                                        <slot></slot>

                                        <group-tool-buttons></group-tool-buttons>

                                        ${this.groups.map(group => this.groupRenderer?.renderGroup(
                        group,
                        this.columns,
                        this.grouping,
                        (instance) => {
                            if (this.onInstanceEnter) this.onInstanceEnter(instance)
                        },
                        (instance) => {
                            if (this.onInstanceLeave) this.onInstanceLeave(instance)
                        }
                    ))}

                                    </div>

                                </div>

                        </group-mirror>
                    
                    </registry-mirror>

                </manager-mirror>

                `
                : nothing}

        `;
    }

}