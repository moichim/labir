import { customElement, property, queryAssignedElements, queryAssignedNodes, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { GroupConsumer } from "../../../hierarchy/consumers/GroupConsumer";
import { TimeEntryElement } from "./TimeEntryElement";
import { GroupProviderElement } from "../../../hierarchy/providers/GroupProvider";
import { Instance, ThermalFileFailure, ThermalGroup, ThermalManager, ThermalRegistry, TimeFormat } from "@labir/core";
import { createOrGetManager } from "../../../hierarchy/providers/getters";

import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import { endOfDay, endOfHour, endOfMonth, endOfWeek, startOfDay, startOfHour, startOfMonth, startOfWeek } from "date-fns";
import { format } from "date-fns";

export type Grouping = "none"|"hour"|"day"|"week"|"month";

@customElement("time-group")
export class TimeGroupElement extends BaseElement {

    @state()
    @queryAssignedElements({ slot: 'entry', flatten: true })
    entries!: Array<Element>;

    @state()
    instances: Instance[] = [];

    @property()
    columns: number = 3;

    @property({ type: String, reflect: true })
    public grouping: "none"|"hour"|"day"|"week"|"month" = "none";


    public connectedCallback(): void {
        super.connectedCallback();
    }

    @property()
    public name?: string;

    @property()
    public slug!: string;

    protected manager?: ThermalManager;
    protected registry?: ThermalRegistry;
    protected group?: ThermalGroup;


    @state()
    protected scopeSlug?: string;

    public setManagerSlug(
        slug: string
    ) {

        // this.scopeSlug = slug;
        const manager = createOrGetManager(slug);
        const registry = manager.addOrGetRegistry(slug);
        const group = registry.groups.addOrGetGroup(this.slug);

        this.manager = manager;
        this.registry = registry;
        this.group = group;

        setTimeout(() => this.processChildren(this.entries), 0);

        this.scopeSlug = slug;

    }

    protected files: Map<Instance, string|undefined> = new Map();

    @state()
    protected groups: {
        [index: string]: {
            instance: Instance,
            innerHtml?: string
        }[]
    } = {};

    clearGroups() {
        Object.values( this.groups ).forEach( item => item.forEach( i => i.instance.unmountFromDom() ) );
        this.groups = {};
    }


    protected processChildren(
        elements: Element[]
    ) {

        let batch: ReturnType<ThermalRegistry["batch"]["request"]> | undefined;

        elements.forEach(element => {
            if (element instanceof TimeEntryElement && this.registry && this.group) {

                console.log(element.innerHTML, element.assignedSlot, element.shadowRoot?.slotAssignment);
                // console.log(element.thermal, batch);

                const callback = async (
                    result: Instance|ThermalFileFailure
                ) => {
                    const innerHtml = element.innerHTML.trim();
                    const storedContent = innerHtml.length > 0 ? innerHtml : undefined;
                    if ( result instanceof Instance ) {
                        this.files.set( result, storedContent );
                        this.groupOneItem( result, storedContent );
                    }
                };

                if (batch === undefined) {
                    batch = this.registry.batch.request(
                        element.thermal,
                        undefined,
                        this.group,
                        callback,
                        this.UUID
                    );

                    batch.onResolve.set(this.UUID, result => {

                        const instances = result
                            .filter(r => r instanceof Instance)
                            .sort((a, b) => {
                                return a.timestamp - b.timestamp;
                            });

                        this.instances = instances;

                    });

                } else {
                    batch.request(
                        element.thermal,
                        undefined,
                        this.group,
                        callback
                    );
                }

            }
        });
    }

    protected groupResult( files: TimeGroupElement["files"] ) {

        this.clearGroups();

        Object.values( files ).forEach( item => {

            this.groupOneItem( item.instance, item.innerHtml );

        });


    }

    protected groupOneItem(
        instance: Instance,
        innerHtml?: string
    ) {


        const scope = this.getStartFn( instance.timestamp ).toString();

        let array = this.groups[scope];

        if ( array === undefined ) {
            const newArray = [] as {instance: Instance, innerHtml?: string}[];
            this.groups[scope] = newArray;
            array = newArray;
        }

        array.push( {
            instance,
            innerHtml
        } );



    }

    protected getStartFn( value: number ) {
        if ( this.grouping === "day" ) return startOfDay(value).getTime();
        else if ( this.grouping === "hour" ) return startOfHour(value).getTime();
        else if ( this.grouping === "week" ) return startOfWeek(value).getTime();
        else if ( this.grouping === "month" ) return startOfMonth(value).getTime();
        else return 0;
    }

    protected getEndFn() {
        if ( this.grouping === "day" ) return endOfDay;
        else if ( this.grouping === "hour" ) return endOfHour;
        else if ( this.grouping === "week" ) return endOfWeek;
        else if ( this.grouping === "month" ) return endOfMonth;
        else return endOfDay;
    }

    protected formatTimestamp( value: string ) {

        const val = parseInt( value );

        console.log( val );

        if ( this.grouping === "day" ) 
            return TimeFormat.humanDate( val );
        else if ( this.grouping === "hour" ) 
            return format( val, "H" ) + ":00" + " of " + TimeFormat.humanDate( val );
        else if ( this.grouping === "week" )
            return "Week " + format( val, "w" ) + " of " + format(val,  "yyyy" );
        else if ( this.grouping === "month" )
            return [format( val, "MMMM" ), format(val,  "yyyy" )].join( " ");
        return "none"
    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( _changedProperties.has( "groups" ) ) {
            console.log( this.groups );
        }

        if ( _changedProperties.has( "grouping" ) ) {
            this.groupResult( this.files );
        }

    }



    public static styles?: CSSResultGroup | undefined = css`

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

            ${this.scopeSlug !== undefined && Object.values( this.groups ).length > 0
                ? html`
                <manager-mirror slug=${this.scopeSlug}>

                    <registry-mirror slug="${this.scopeSlug}">

                        <group-mirror slug="${this.slug}">

                            <group-tool-buttons></group-tool-buttons>

                            ${this.name
                        ? html`<h2>${this.name}</h2>`
                        : nothing
                    }

                            <slot></slot>

                            ${Object.entries( this.groups )
                            .sort( ([keyA],[keyB]) => {
                                return parseInt( keyA ) - parseInt( keyB )
                            } )
                            .map( ([key, g]) => {
                                return html`
                                    ${key !== "0" ? html`<h3>${this.formatTimestamp(key)}</h3>`:nothing}
                                    
                                    <div class="files-list file-list-${this.columns}">

                                    ${ g
                                    .sort( (a,b) => {
                                        return a.instance.timestamp - b.instance.timestamp;
                                    } ) 
                                    .map( ( {instance, innerHtml}) => {
                                     
                                        return html`

                                        <div class="file">
                                        
                                        <file-mirror .file=${instance}>

                                            <div class="file-title">
                                            
                                                ${TimeFormat.human(instance.timestamp)}

                                                ${ innerHtml !== undefined
                                                ? html`
                                                    <thermal-dialog label="File description">

                                                        <thermal-button slot="invoker">Description</thermal-button>

                                                        <div slot="content">${unsafeHTML( innerHtml )}</div>
                                                    
                                                    </thermal-dialog>
                                                `
                                                : nothing
                                            }

                                                <file-info-button></file-info-button>


                                            </div>

                                            <file-canvas></file-canvas>

                                            <file-timeline></file-timeline>

                                            <file-analysis-table></file-analysis-table>
                                    
                                        </file-mirror>

                                        </div>
                                        
                                        `;
                                    
                                    } ) }

                                        

                                    </div>

                                `
                            } ) }
                        
                        </group-mirror>
                    
                    </registry-mirror>

                </manager-mirror>
                `
                : nothing
            }

        `;
    }

}