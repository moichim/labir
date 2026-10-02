import { ThermalRegistry } from "@labirthermal/core";
import { consume } from "@lit/context";
import { registryContext } from "../providers/context/RegistryContext";
import { AbstractManagerConsumer } from "./AbstractManagerConsumer";
import { RegistryController, registryControllerContext } from "../controllers/RegistryController";

export abstract class AbstractRegistryConsumer extends AbstractManagerConsumer {

    /** @deprecated Use registryController instead */
    public get registry(): ThermalRegistry {
        return this.registryController.registryObject;
    }

    @consume({ context: registryControllerContext, subscribe: true })
    public registryController!: RegistryController;

}