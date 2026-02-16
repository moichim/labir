import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractRegistryProvider } from "../abstraction/AbstractRegistryProvider";
import { registryOpacityContext, registryRangeFromContext, registryRangeToContext } from "../providers/context/RegistryContext";

@customElement("registry-mirror")
export class RegistryProviderElement extends AbstractRegistryProvider {

    @property({ type: String, reflect: true, attribute: true })
    slug!: string;

    @provide({ context: registryOpacityContext })
    @property({ type: Number, reflect: true, attribute: true })
    public opacity: number = 1;

    @provide({ context: registryRangeFromContext })
    @property({ type: Number })
    public from?: number;

    @provide({ context: registryRangeToContext })
    @property({ type: Number })
    public to?: number;

}