import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ManagerConsumer } from "../consumers/ManagerConsumer";
import { RegistryContext, registryContext, registryLoadingContext, registryMaxContext, registryMinContext, registryOpacityContext, registryRangeFromContext, registryRangeToContext } from "../providers/context/RegistryContext";

@customElement("registry-mirror")
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
    @property({type: Number})
    public from?: number;

    @provide({context: registryRangeToContext})
    @property({type: Number})
    public to?: number;

    @provide({context: registryLoadingContext})
    @property({type: String})
    public loading: boolean = false;


    connectedCallback(): void {
        super.connectedCallback();

        let registry = this.manager.addOrGetRegistry( this.slug );

        // this.hash = registry.hash.toString();

        this.registry = registry;

        

        // Set the fixed range if necessary
        if ( this.from !== undefined && this.to !== undefined ) {
            this.registry.range.imposeRange( {
                from: this.from,
                to: this.to
            } );
        }
        
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated( _changedProperties );

        this.log( "first updated" );

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


    }

    protected updated(_changedProperties: PropertyValues): void {
        
        super.updated( _changedProperties );

        if ( _changedProperties.has( "from" ) || _changedProperties.has( "to" ) ) {

            if ( this.from !== undefined && this.to !== undefined ) {

                this.registry.range.imposeRange({
                    from: this.from,
                    to: this.to
                })

            }

        }

        if ( _changedProperties.has( "opacity" ) ) {
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