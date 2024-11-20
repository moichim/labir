import { customElement, property, queryAssignedElements, queryAssignedNodes, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { html, PropertyValues } from "lit";
import { TimeGroupElement } from "./parts/TimeGroupElement";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";

@customElement("time-app")
export class TimeApp extends BaseElement {

    protected registryProviderRef: Ref<RegistryProviderElement> = createRef();

    @property()
    slug!: string;


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

        this.log( "app 1. updated" );

        if (_changedProperties.has("entries")) {
            console.log("Změnily se mi entrýz, budu je připínat.", this.entries);
        }

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.log( "app 2. first updated", Array.from( _changedProperties.keys() ) );
        this.entries.forEach(node => this.processNode(node));
    }

    protected processNode(
        node: Node
    ): void {

        if (node instanceof TimeGroupElement) {
            node.setManagerSlug(this.slug);
            return;
        } else {

            if (node.hasChildNodes()) {
                
                const children = Array.from(node.childNodes);
                children.forEach(n => {
                    if ( n instanceof Element ) {
                        this.processNode(n);
                    }
                });
            }
            return;
        }

    }


    protected render(): unknown {
        return html`
        <manager-provider slug="${this.slug}">

            <registry-provider slug="${this.slug}">
                <thermal-app>

                    <thermal-button variant="foreground" interactive="false" slot="bar">Skupinové zobrazení</thermal-button>

                    <div slot="bar" style="flex-grow: 4;">

                    <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
                        
                        <thermal-bar>
                            <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
                        </thermal-bar>
                        
                    </div>

                    <registry-range-slider></registry-range-slider>
                    <registry-ticks-bar></registry-ticks-bar>
            
                    <slot></slot>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `;
    }


}