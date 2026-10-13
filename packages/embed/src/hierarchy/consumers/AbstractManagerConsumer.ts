import type { ThermalManager } from "@labirthermal/core";
import { consume } from "@lit/context";
import { AbstractThermalElement } from "../AbstractThermalElement";
import type { ManagerController} from "../controllers/ManagerController";
import { managerControllerContext } from "../controllers/ManagerController";


export abstract class AbstractManagerConsumer extends AbstractThermalElement {

    /** @deprecated Use the manager controller instead */
    public get manager(): ThermalManager {
        return this.managerController.managerObject;
    }

    @consume({ context: managerControllerContext, subscribe: true })
    public managerController!: ManagerController;

}