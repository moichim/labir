import { ThermalRegistry } from "@labirthermal/core";
import { consume } from "@lit/context";
import { registryContext } from "../providers/context/RegistryContext";
import { AbstractManagerConsumer } from "./AbstractManagerConsumer";

export abstract class AbstractRegistryConsumer extends AbstractManagerConsumer {

    @consume({ context: registryContext, subscribe: true })
    public registry!: ThermalRegistry

}