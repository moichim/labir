import { customElement, property, queryAssignedElements, queryAssignedNodes, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { html, PropertyValues } from "lit";
import { Grouping, TimeGroupElement } from "./parts/TimeGroupElement";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";

@customElement("time-app")
export class TimeApp extends BaseElement {

    protected registryProviderRef: Ref<RegistryProviderElement> = createRef();

    @property()
    slug!: string;

    @property({ type: String, reflect: true })
    public grouping: Grouping = "none";

    @property({ type: String, reflect: true })
    columns: number = 3;


    @queryAssignedElements({
        flatten: true
    })
    @state()
    entries!: Array<Node>;

    connectedCallback(): void {
        super.connectedCallback();
        console.log("connected", this.entries);
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

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.forEveryGroup( group => group.setManagerSlug( this.slug ) );
    }

    protected forEveryGroup(
        fn: ( group: TimeGroupElement ) => any
    ) {

        const forOneNode = ( node: Node, fn: ( group: TimeGroupElement ) => any ) => {

            console.log( node );

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

                            </thermal-dropdown>

                        </thermal-bar>
                        
                    </div>

                    <registry-histogram></registry-histogram>
                    <registry-range-slider></registry-range-slider>
                    <registry-ticks-bar></registry-ticks-bar>
            
                    <slot></slot>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `;
    }


}