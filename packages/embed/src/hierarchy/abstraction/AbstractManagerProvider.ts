import { AvailableThermalPalette, ThermalManager } from "@labirthermal/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { AbstractThermalElement } from "../AbstractThermalElement";
import { IElementWithManagerController, ManagerController } from "../controllers/ManagerController";
import { toolsContext } from "../providers/context/ManagerContext";
import { removeManager } from "../providers/getters";

export abstract class AbstractManagerProvider extends AbstractThermalElement implements IElementWithManagerController  {

    public managerController: ManagerController = new ManagerController(this);

    public managerSlug!: string;

    public managerObject!: ThermalManager;

    public palette!: AvailableThermalPalette;

    public advancedPalettes: boolean = false;

    public smoothThermograms: boolean = false;

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

    public updated(changedProperties: PropertyValues<AbstractManagerProvider>): void {
        super.updated(changedProperties);
        this.managerController.hostUpdated(changedProperties);
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}