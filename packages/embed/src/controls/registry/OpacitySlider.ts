import { consume } from "@lit/context";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { registryOpacityContext } from "../../hierarchy/providers/context/RegistryContext";
import { createRef, Ref, ref } from "lit/directives/ref.js";

@customElement("registry-opacity-slider")
export class OpacityRangeElement extends RegistryConsumer {

    @consume({context: registryOpacityContext, subscribe: true})
    value!: number;

    protected containerRef: Ref<HTMLElement> = createRef();

    connectedCallback(): void {
        super.connectedCallback();

        // Handler of incoming changes
        const handleIncomingChange = (value: number) => {
           
            // Proceed only when value is different
            if ( this.value !== value ) {
                // Update the DOM
                this.renderRoot.querySelector<HTMLInputElement>( "#handler" )!.value = value.toString();
            }
        }

        // Register incoming changes
        this.registry.opacity.addListener( this.UUID, handleIncomingChange.bind( this ) );

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.registry.opacity.removeListener( this.UUID )
    }

    /** Handle user input events */
    handleUserChangeEvent( event: {target: {value: string}} ) {
        const value = parseFloat( event.target.value );
        this.registry.opacity.imposeOpacity( value );
    }


    static styles = css`

        :host {
        }

        .thermal-opacity-handler {
            display: block;
            width: 100%;
            max-width: 100px;
            cursor: pointer;
            accent-color: var(--thermal-slate);
            
        }
        
        .thermal-opacity-container {
            display: flex;
            width: 100%;
            align-items: space-between;
            justify-content: space-between;
            color: var( --thermal-slate-dark );
            font-size: calc( var( --thermal-fs-sm ) * .7 );
            max-width: 100px;
        }
    
    `;

    protected render(): unknown {
        return html`
            <div ${ref(this.containerRef)}>
                <input
                    id="handler"
                    class="thermal-opacity-handler"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value="${this.value}"
                    @input="${this.handleUserChangeEvent}"
                />
                <div class="thermal-opacity-container">
                    <div>VIS</div>
                    <div>${this.value}</div>
                    <div>IR</div>
                </div>
            </div>
            <slot></slot>
        `;
    }

}