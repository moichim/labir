import { provide } from "@lit/context";
import { customElement, property, state } from "lit/decorators.js";
import { AbstractRegistryProvider } from "../abstraction/AbstractRegistryProvider";
import { RegistryContext, registryContext, registryLoadingContext, registryMaxContext, registryMinContext, registryOpacityContext, registryRangeFromContext, registryRangeToContext } from "../providers/context/RegistryContext";

@customElement("registry-mirror")
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
    @property({ type: Number })
    public from?: number;

    @provide({ context: registryRangeToContext })
    @property({ type: Number })
    public to?: number;

    @provide({ context: registryLoadingContext })
    @property({ type: String })
    public loading: boolean = false;

    @property({ type: Boolean })
    autoclear: boolean = false;

}