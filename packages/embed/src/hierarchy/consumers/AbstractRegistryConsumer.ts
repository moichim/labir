import type { ThermalRegistry } from "@labirthermal/core";
import { consume } from "@lit/context";
import type { RegistryController } from "../controllers/RegistryController";
import { registryControllerContext } from "../controllers/RegistryController";
import { AbstractManagerConsumer } from "./AbstractManagerConsumer";

export abstract class AbstractRegistryConsumer extends AbstractManagerConsumer {

    /** @deprecated Use registryController instead */
    public get registry(): ThermalRegistry {
        return this.registryController.registryObject;
    }

    @consume({ context: registryControllerContext, subscribe: true })
    public registryController!: RegistryController;

}