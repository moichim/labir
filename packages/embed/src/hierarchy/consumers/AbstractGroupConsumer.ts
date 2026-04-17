import { ThermalGroup } from "@labirthermal/core";
import { consume } from "@lit/context";
import { groupContext } from "../providers/context/GroupContext";
import { AbstractRegistryConsumer } from "./AbstractRegistryConsumer";

export abstract class AbstractGroupConsumer extends AbstractRegistryConsumer {

    @consume({ context: groupContext, subscribe: true })
    group!: ThermalGroup;

}