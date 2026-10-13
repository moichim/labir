import type { ThermalRegistry } from "@labirthermal/core";
import { consume } from "@lit/context";
import { registryObjectContext } from "../controllers/RegistryController";
import { AbstractManagerConsumer } from "./AbstractManagerConsumer";
import type { RegistryController} from "../controllers/RegistryController";
import { registryControllerContext } from "../controllers/RegistryController";

export abstract class AbstractRegistryConsumer extends AbstractManagerConsumer {

    /** @deprecated Use registryController instead */
    public get registry(): ThermalRegistry {
        return this.registryController.registryObject;
    }

    @consume({ context: registryControllerContext, subscribe: true })
    public registryController!: RegistryController;

}