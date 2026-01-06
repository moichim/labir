import { ThermalGroup } from "@labirthermal/core";
import { consume } from "@lit/context";
import { groupContext } from "../providers/context/GroupContext";
import { RegistryConsumer } from "./RegistryConsumer";
import { state } from "lit/decorators.js";

export abstract class GroupConsumer extends RegistryConsumer {

    @state()
    @consume({ context: groupContext, subscribe: true })
    public group!: ThermalGroup;

    public constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();

    }

}