import { ThermalGroup } from "@labir/core";
import { consume } from "@lit/context";
import { groupContext } from "../providers/context/GroupContext";
import { RegistryConsumer } from "./RegistryConsumer";

export abstract class GroupConsumer extends RegistryConsumer {

    @consume({ context: groupContext, subscribe: true })
    group!: ThermalGroup;

    public constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();

    }

}