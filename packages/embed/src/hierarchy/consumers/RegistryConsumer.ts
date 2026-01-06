import { ThermalRegistry } from "@labirthermal/core";
import { consume } from "@lit/context";
import { registryContext } from "../providers/context/RegistryContext";
import { ManagerConsumer } from "./ManagerConsumer";
import { PropertyValues } from "lit";
import { state } from "lit/decorators.js";

export abstract class RegistryConsumer extends ManagerConsumer {

    @state()
    @consume({ context: registryContext, subscribe: true })
    public registry!: ThermalRegistry

    connectedCallback(): void {
        super.connectedCallback();
        if (this.registry === undefined) {
            // throw new Error( `RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>` );
        }
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);
    }

}