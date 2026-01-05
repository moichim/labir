import { provide } from "@lit/context";
import { customElement, property, state } from "lit/decorators.js";
import { AbstractRegistryProvider } from "../abstraction/AbstractRegistryProvider";
import { RegistryContext, registryContext, registryLoadingContext, registryMaxContext, registryMinContext, registryOpacityContext, registryRangeFromContext, registryRangeToContext } from "./context/RegistryContext";

@customElement("registry-provider")
export class RegistryProviderElement extends AbstractRegistryProvider {

    @property({ type: String, reflect: true, attribute: true })
    slug!: string;


    @provide({ context: registryContext })
    public registry!: RegistryContext;

    @provide({ context: registryOpacityContext })
    @property({ type: Number, reflect: true, attribute: true })
    public opacity: number = 1;

    @provide({ context: registryMinContext })
    @state()
    protected min?: number;

    @provide({ context: registryMaxContext })
    @state()
    protected max?: number;

    @provide({ context: registryRangeFromContext })
    @property({ type: Number, reflect: true, attribute: true })
    public from?: number;

    @provide({ context: registryRangeToContext })
    @property({ type: Number, reflect: true, attribute: true })
    public to?: number;

    @provide({ context: registryLoadingContext })
    @property({ type: String, reflect: true, attribute: true })
    public loading: boolean = false;

    @property({ type: Boolean, reflect: true })
    public autoclear: boolean = false;

    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties);

        // Refresh the registry of the slug changed
        if (
            changedProperties.has("slug") === true
            && changedProperties.get("slug") !== this.slug
        ) {


            // this.log( changedProperties.get("slug"), "->", this.slug );

            // Remove the existing registry if necessary
            if (this.registry !== undefined) {

                if (this.autoclear === true) {

                    // this.log( "removing registry" );

                    // this.manager.removeRegistry(this.registry.id);

                }

                // Create the new registry
                // this.registry = this.createRegistry(this.slug);

                // Hydrate
                // this.hydrateRegistry(this.registry);
            }

        }
    }

}