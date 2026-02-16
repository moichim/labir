import { ThermalRangeOrUndefined } from "@labirthermal/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { ManagerConsumer } from "../consumers/ManagerConsumer";
import { ComponentWithRegistryProvider, RegistryProviderController } from "../controllers/RegistryController";
import { registryContext, RegistryContext, registryHighlightContext, registryLoadingContext, registryMaxContext, registryMinContext, setRegistryHighlightContext } from "../providers/context/RegistryContext";

export abstract class AbstractRegistryProvider extends ManagerConsumer implements ComponentWithRegistryProvider {

    public slug!: string;

    @provide({ context: registryContext })
    public registry!: RegistryContext;

    public opacity: number = 1;

    @provide({ context: registryMinContext })
    @state()
    public min?: number;

    @provide({ context: registryMaxContext })
    @state()
    public max?: number;


    public from?: number;

    public to?: number;

    @provide({ context: registryLoadingContext })
    @state()
    public loading: boolean = false;

    @property({ type: Boolean })
    public autoclear: boolean = false;

    @provide({ context: registryHighlightContext })
    protected highlight: ThermalRangeOrUndefined;

    @provide({ context: setRegistryHighlightContext })
    public setHighlight = (value: ThermalRangeOrUndefined) => {
        this.highlight = value;
    }

    private controller: RegistryProviderController = new RegistryProviderController(this);




    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        this.controller.initListeners(this.registry);


    }

    protected updated(_changedProperties: PropertyValues<this>): void {

        super.updated(_changedProperties);

        this.controller.onUpdate(_changedProperties);

    }


    protected render(): unknown {
        return html`<slot></slot>`;
    }


}