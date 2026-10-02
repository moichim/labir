import { ThermalRangeOrUndefined, ThermalRegistry } from "@labirthermal/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { AbstractManagerConsumer } from "../consumers/AbstractManagerConsumer";
import { IElementWithRegistryController, RegistryController } from "../controllers/RegistryController";
import { setRegistryHighlightContext } from "../providers/context/RegistryContext";
import { property } from "lit/decorators.js";

export abstract class AbstractRegistryProvider extends AbstractManagerConsumer implements IElementWithRegistryController {


    registrySlug!: string;
    registryObject!: ThermalRegistry;
    registryController: RegistryController = new RegistryController(this);

    public opacity: number = 1;

    public min?: number;

    public max?: number;

    public from?: number;

    public to?: number;

    public loading: boolean = false;

    public autoclear: boolean = false;

    public highlight: ThermalRangeOrUndefined;

    @property({reflect: true, type: String})
    public testProperty: string = "something";

    @provide({ context: setRegistryHighlightContext })
    public setHighlight = (value: ThermalRangeOrUndefined) => {
        this.highlight = value;
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        if (this.autoclear === true && this.registryObject !== undefined) {
            this.manager.removeRegistry(this.registryObject.id);
        }
    }


    protected updated(_changedProperties: PropertyValues<AbstractRegistryProvider>): void {

        super.updated(_changedProperties);

        this.registryController.hostUpdatedWatcher(_changedProperties);

    }


    protected render(): unknown {
        return html`<slot></slot>`;
    }


}