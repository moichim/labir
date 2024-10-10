import { provide } from "@lit/context";
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ManagerConsumer } from "../consumers/ManagerConsumer";
import { RegistryContext, registryContext, registryLoadingContext, registryMaxContext, registryMinContext, registryOpacityContext, registryRangeFromContext, registryRangeToContext } from "./context/RegistryContext";
import { getDefaultRegistry } from "./getters";

@customElement("registry-provider")
export class RegistryProviderElement extends ManagerConsumer {


    protected UUIDRegistryListeners = this.UUID + "__registry-listener";

    @property({ type: String, reflect: true, attribute: true })
    slug!: string;

    
    @provide({ context: registryContext })
    public registry!: RegistryContext;

    @provide( {context: registryOpacityContext} )
    @property({type: Number, reflect: true, attribute: true})
    public opacity: number = 1;

    @provide( {context: registryMinContext} )
    @state()
    protected min?: number;

    @provide( {context: registryMaxContext} )
    @state()
    protected max?: number;

    @provide({context: registryRangeFromContext})
    @property({type: Number, reflect: true, attribute: true})
    public from?: number;

    @provide({context: registryRangeToContext})
    @property({type: Number, reflect: true, attribute: true})
    public to?: number;

    @provide({context: registryLoadingContext})
    @property({type: String, reflect: true, attribute: true})
    public loading: boolean = false;


    connectedCallback(): void {
        super.connectedCallback();

        let registry = getDefaultRegistry( this.manager );

        if ( this.slug === undefined ) {
            registry = this.manager.addOrGetRegistry( this.slug );
        }

        this.registry = registry;

        // Bind opacity to the element property
        this.registry.opacity.addListener( this.UUIDRegistryListeners, value => {
            this.opacity = value;
        } );

        // Bind minmax changes to the element state
        this.registry.minmax.addListener( this.UUIDRegistryListeners, value => {
            if ( value === undefined ) {
                this.min = undefined;
                this.max = undefined;
            } else {
                this.min = value.min;
                this.max = value.max;
            }
        } );

        // Bind range changes to the element property
        this.registry.range.addListener( this.UUIDRegistryListeners, value => {

            if ( value === undefined ) {
                this.from = undefined;
                this.to = undefined;
            } else {
                this.from = value.from;
                this.to = value.to;
            }
        } );

        // Bind loading changes to the element property
        this.registry.loading.addListener( this.UUIDRegistryListeners, value => {
            this.loading = value;
        } );

        // Set the fixed range if necessary
        if ( this.from !== undefined && this.to !== undefined ) {
            this.registry.range.imposeRange( {
                from: this.from,
                to: this.to
            } );
        }
        
    }

    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback( name, _old, value );


        // Project the range to internals

        if ( ( name === "from" || name === "to" ) && value && this.registry ) {

            const range = this.registry.range;

            if ( this.from !== undefined && this.to !== undefined ) {

                const newValue = {
                    from: name === "from" ? parseFloat(value) : this.from,
                    to: name === "to" ? parseFloat( value ) : this.to
                }

                if ( range.value !== undefined ) {

                    const valueDiffers = this.from !== range.value?.from || this.to !== range.value.to;

                    if ( valueDiffers ) {
                        range.imposeRange( newValue );
                    }

                } else {
                    range.imposeRange( newValue );
                }


            }

        }

        // Project the opacity to internals
        if ( name=== "opacity" ) {
            const sanitisedOpacity = Math.min( 1, Math.max( 0, this.opacity ) );
            if ( sanitisedOpacity !== this.registry.opacity.value ) {
                this.registry.opacity.imposeOpacity( sanitisedOpacity );
            }
        }

    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}