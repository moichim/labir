import { ThermalManager } from "@labirthermal/core";
import { consume } from "@lit/context";
import { state } from "lit/decorators.js";
import { AbstractThermalElement } from "../AbstractThermalElement";
import { managerContext } from "../providers/context/ManagerContext";


export abstract class AbstractManagerConsumer extends AbstractThermalElement {

    @consume({ context: managerContext, subscribe: true })
    @state()
    public manager!: ThermalManager;

}