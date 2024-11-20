import { customElement, property, queryAssignedElements, queryAssignedNodes, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { html, nothing, PropertyValues } from "lit";
import { GroupConsumer } from "../../../hierarchy/consumers/GroupConsumer";
import { TimeEntryElement } from "./TimeEntryElement";
import { GroupProviderElement } from "../../../hierarchy/providers/GroupProvider";
import { Instance, ThermalFileFailure, ThermalGroup, ThermalManager, ThermalRegistry, TimeFormat } from "@labir/core";
import { createOrGetManager } from "../../../hierarchy/providers/getters";

@customElement("time-group")
export class TimeGroupElement extends BaseElement {

    @state()
    @queryAssignedElements({ slot: 'entry', flatten: true })
    entries!: Array<Element>;

    @state()
    instances: Instance[] = [];


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

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.log( " tg 1. first updated", Array.from( _changedProperties.keys() ) );
    }

    public setManagerSlug(
        slug: string
    ) {

        this.log( "setting manager slug" );

        // this.scopeSlug = slug;
        const manager = createOrGetManager(slug);
        const registry = manager.addOrGetRegistry(slug);
        const group = registry.groups.addOrGetGroup(this.slug);


        console.log( manager.id, registry.hash, this.entries );

        this.manager = manager;
        this.registry = registry;
        this.group = group;

        setTimeout( () => this.processChildren(this.entries ), 0 );

        this.scopeSlug = slug;

        /*
        setTimeout( () => {
            this.scopeSlug = slug;
        }, 10 );
        */

        /*
        this.log( "setting slug", this.slug );
        this.scopeSlug = slug;
        this.manager = createOrGetManager( this.scopeSlug );
        this.registry = this.manager.addOrGetRegistry( this.scopeSlug );
        this.group = this.registry.groups.addOrGetGroup( this.slug );
        this.log( {
            managerId: this.manager.id, 
            registryId: this.registry.id, 
            registryHash: this.registry.hash,
            groupId: this.group.id, 
            groupHash: this.group.hash
        } );

        */

        // this.processChildren(this.entries);

    }

    
    protected processChildren(
        elements: Element[]
    ) {

        this.log( "Procesuji děti" );


        let batch: ReturnType<ThermalRegistry["batch"]["request"]> | undefined;

        elements.forEach(element => {
            if (element instanceof TimeEntryElement && this.registry && this.group) {
                // console.log(element.thermal, batch);

                const callback = async (item: ThermalFileFailure|Instance) => {
                    // console.log(item);
                    // console.log( "výsledek", item );
                };

                if (batch === undefined) {
                    batch = this.registry.batch.request(
                        element.thermal,
                        undefined,
                        this.group,
                        callback,
                        this.UUID
                    );

                    this.log( "otevřel jsem batch", batch );

                    batch.onResolve.set(this.UUID, result => {
                        this.log( "přišly výsledky", result );

                        const instances = result
                            .filter( r => r instanceof Instance )
                            .sort( (a,b) => {
                                return a.timestamp - b.timestamp;
                            } );

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

    render() {
        return html`
            <slot name="entry"></slot>

            ${this.scopeSlug !== undefined
                ? html`
                <manager-mirror slug=${this.scopeSlug}>

                    <registry-mirror slug="${this.scopeSlug}">

                        <group-mirror slug="${this.slug}">

                            <group-tool-buttons></group-tool-buttons>

                            ${ this.name
                                ? html`<h2>${this.name}</h2>`
                                : nothing
                            }

                            <slot></slot>

                            <div style="display: flex; gap: 5px;">

                                ${ this.instances.map( i => html`<div style="width: 40%">
                                 <div>${TimeFormat.human( i.timestamp )}</div>
                                 <file-mirror .file=${i}>

                                    <file-canvas></file-canvas>

                                    <file-info-button></file-info-button>

                                    <file-timeline></file-timeline>

                                    <file-analysis-table></file-analysis-table>
                                 
                                 </file-mirror>
                                </div>` ) }
                            
                            
                            </div>
                        
                        </group-mirror>
                    
                    </registry-mirror>

                </manager-mirror>
                `
                : nothing
            }

        `;
    }

}