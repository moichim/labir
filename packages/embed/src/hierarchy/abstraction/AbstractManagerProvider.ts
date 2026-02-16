import { ThermalManager, ThermalTool } from "@labirthermal/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { BaseElement } from "../BaseElement";
import { ComponentWithManagerProvider, ManagerController } from "../controllers/ManagerController";
import { managerContext, ManagerContext, ManagerGraphFunctionContext, ManagerPaletteContext, managerPaletteContextDefaultValue, toolContext, toolsContext } from "../providers/context/ManagerContext";

export abstract class AbstractManagerProvider extends BaseElement implements ComponentWithManagerProvider {

    @provide({ context: managerContext })
    public manager!: ManagerContext;

    public slug!: string;

    public palette: ManagerPaletteContext = managerPaletteContextDefaultValue;

    public smooth: boolean = false;

    public graphSmooth: ManagerGraphFunctionContext = false;

    @property({ type: Boolean })
    public autoclear: boolean = false;

    @provide({ context: toolContext })
    public tool!: ThermalTool;

    @provide({ context: toolsContext })
    public tools!: ThermalManager["tool"]["tools"];

    private readonly controller: ManagerController = new ManagerController( this )



    protected firstUpdated(_changedProperties: PropertyValues): void {

        super.firstUpdated(_changedProperties);

        this.controller.initListeners();

    }


    protected render(): unknown {
        return html`<slot></slot>`;
    }

}