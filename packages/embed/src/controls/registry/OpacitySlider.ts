import { PropertyValueMap, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";

@customElement("registry-opacity-slider")
export class OpacityRangeElement extends RegistryConsumer {


    @property({ type: Number, reflect: true, attribute: true })
    value!: number;

    connectedCallback(): void {
        super.connectedCallback();

        // this.log( this.registry );

        // Set the default value from the registry
        this.value = this.registry.opacity.value;

        // Handler of incoming changes
        const handleChange = (value: number) => {
           
            // Proceed only when value is different
            if ( this.value !== value ) {
                // Store the value
                this.value = value;
                // Update the DOM
                this.renderRoot.querySelector<HTMLInputElement>( "#handler" )!.value = value.toString();
            }
        }

        // Register incoming changes
        this.registry.opacity.addListener( this.UUID, handleChange.bind( this ) );

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.registry.opacity.removeListener( this.UUID )
    }

    /** Handle user input events */
    onInputChange( event: {target: {value: string}} ) {
        const value = parseFloat( event.target.value );
        this.value = value;
        this.registry.opacity.imposeOpacity( value );
    }

    /** After update the DOM, impose the value to the registry */
    protected updated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {

        super.updated( _changedProperties );

        if ( _changedProperties.has( "value" ) ) {
            const value = parseFloat( _changedProperties.get( "value" ) as string );
            if ( value !== this.value ) {
                this.registry.opacity.imposeOpacity( this.value );
            }
        }
        
    }


    static styles = css`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;

    protected render(): unknown {
        return html`
            <input
                id="handler"
                class="thermal-opacity-handler"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value="${this.value}"
                @input="${this.onInputChange}"
            />
            <slot></slot>
        `;
    }

}