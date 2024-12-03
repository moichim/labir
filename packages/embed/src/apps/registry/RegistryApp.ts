import { customElement, property, queryAssignedElements, queryAssignedNodes, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { css, CSSResultGroup, html, PropertyValues } from "lit";
import { Grouping, TimeGroupElement } from "./parts/TimeGroupElement";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { AbstractMultipleApp } from "../miltiple/AbstractMultipleApp";
import { ifDefined } from "lit/directives/if-defined.js";
import { ThermalRegistry } from "@labir/core";
import { createOrGetManager } from "../../hierarchy/providers/getters";

@customElement("thermal-registry-app")
export class TimeApp extends AbstractMultipleApp {

    protected registryProviderRef: Ref<RegistryProviderElement> = createRef();

    @property()
    slug!: string;

    @property({ type: String, reflect: true })
    public grouping: Grouping = "none";

    @property({ type: String, reflect: true })
    columns: number = 3;

    @property({ type: Number, reflect: true })
    breakpoint: number = 700;

    @property({type: String, reflect: true })
    groups: number = 3;

    @property({type: String, reflect: true})
    autogroups: boolean = true;


    @queryAssignedElements({
        flatten: true
    })
    @state()
    entries!: Array<Node>;

    @state()
    protected registry?: ThermalRegistry


    connectedCallback(): void {
        super.connectedCallback();

        const manager = createOrGetManager( this.slug );
        this.registry = manager.addOrGetRegistry( this.slug );
    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("entries")) {
            console.log("Změnily se mi entrýz, budu je připínat.", this.entries);
        }

        if ( _changedProperties.has( "grouping" ) && this.grouping ) {
            this.forEveryGroup( group => group.grouping = this.grouping );
        }

        if ( _changedProperties.has( "columns" ) && this.columns ) {
            this.forEveryGroup( group => group.columns = this.columns );
        }

        if ( _changedProperties.has( "breakpoint" ) && this.breakpoint ) {
            this.forEveryGroup( group => group.breakpoint = this.breakpoint );
        }

        if ( _changedProperties.has( "groups" ) && this.autogroups ) {
            this.forEveryGroup( group => group.width = this.groups );
        }

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.forEveryGroup( group => {

            group.setManagerSlug( this.slug );
            group.width = this.groups;
            group.onInstanceEnter = ( instance ) => {
                this.highlightFrom = instance.min;
                this.highlightTo = instance.max;
            }
            group.onInstanceLeave = ( ) => {
                this.highlightFrom = undefined;
                this.highlightTo = undefined;
            }

            group.groupRenderer = this.groupRenderer;
        } );
    }

    protected forEveryGroup(
        fn: ( group: TimeGroupElement ) => any
    ) {

        const forOneNode = ( node: Node, fn: ( group: TimeGroupElement ) => any ) => {

            if ( node instanceof TimeGroupElement ) {
                fn(node);
                return;
            } else {
                if ( node.hasChildNodes() ) {

                    const children = Array.from( node.childNodes );

                    children.forEach( n => {
                        if ( n instanceof Element  ) {
                            forOneNode( n, fn );
                            return;
                        }
                    } );

                }
                return;
            }

        }

        this.entries.forEach( node => forOneNode( node, fn ) );

    }

    public static styles?: CSSResultGroup | undefined = css`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;

    


    protected render(): unknown {
        return html`
        <manager-provider slug="${this.slug}">

            <registry-provider slug="${this.slug}">
                <thermal-app>

                    <thermal-button variant="foreground" interactive="false" slot="bar">Skupinové zobrazení</thermal-button>

                    <div slot="bar" style="flex-grow: 4;">
                        
                        <thermal-bar slot="bar">
                            <registry-palette-dropdown></registry-palette-dropdown>

                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${(event: InputEvent) => {
                                console.log( event.target.value );
                                this.columns = parseInt( event.target.value );
                            }}></input>

                            <input type="range" min="1" max="10" step="1" value=${this.groups} @input=${(event: InputEvent) => {
                                console.log( event.target.value );
                                this.groups = parseInt( event.target.value );
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

                            <registry-range-full-button
                                                @mouseenter=${() => {
                        this.highlightFrom = this.registry?.minmax.value?.min;
                        this.highlightTo = this.registry?.minmax.value?.max;
                    }}
                                                @focus=${() => {
                        this.highlightFrom = this.registry?.minmax.value?.min;
                        this.highlightTo = this.registry?.minmax.value?.max;
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

                        </thermal-bar>
                        
                    </div>

                    <registry-histogram></registry-histogram>
                    <registry-range-slider></registry-range-slider>
                    <registry-ticks-bar highlightFrom=${ifDefined(this.highlightFrom)} highlightTo=${ifDefined(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `;
    }


}