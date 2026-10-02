import { AvailableThermalPalette, ThermalManager } from "@labirthermal/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { AbstractThermalElement } from "../AbstractThermalElement";
import { IElementWithManagerController, ManagerController } from "../controllers/ManagerController";
import { toolsContext } from "../providers/context/ManagerContext";
import { removeManager } from "../providers/getters";
import { property } from "lit/decorators.js";

export abstract class AbstractManagerProvider extends AbstractThermalElement implements IElementWithManagerController {

    public managerController: ManagerController = new ManagerController(this);

    public managerSlug!: string;

    public managerObject!: ThermalManager;

    @property({
        type: String,
        reflect: true
    })
    public palette: AvailableThermalPalette = "jet";

    @property({ 
        type: Boolean, 
        reflect: true 
    })
    public advancedPalettes: boolean = false;

    @property({ 
        type: String, 
        reflect: true 
    })
    public smoothThermograms: boolean = false;

    @property({ 
        type: String, 
        reflect: true 
    })
    public smoothGraph: boolean = false;

    public tool!: keyof ThermalManager["tool"]["tools"];

    public slug!: string;

    public autoclear: boolean = false;


    connectedCallback(): void {

        super.connectedCallback();

    }


    disconnectedCallback(): void {
        super.disconnectedCallback();

        if (this.autoclear === true && this.managerObject !== undefined) {
            removeManager(this.managerObject);
        }
    }

    willUpdate(changedProperties: PropertyValues<AbstractManagerProvider>): void {
        super.willUpdate(changedProperties);
        this.log("Will update called with changed properties", changedProperties);
    }

    public updated(changedProperties: PropertyValues<AbstractManagerProvider>): void {
        super.updated(changedProperties);
        this.log("Updated called with changed properties", changedProperties);
        this.managerController.hostUpdatedWatcher(changedProperties);
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}