import { ThermalGroup, ThermalTool } from "@labir/core";
import { provide } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RegistryConsumer } from "../consumers/RegistryConsumer";
import { groupContext, toolContext, toolsContext } from "../providers/context/GroupContext";
import { AbstractGroupProvider } from "../abstraction/AbstractGroupProvider";

@customElement("group-mirror")
export class GroupProviderElement extends AbstractGroupProvider {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }


    @property({ type: String })
    public slug!: string;

    @provide({ context: groupContext })
    group!: ThermalGroup;

    @provide({ context: toolContext })
    tool!: ThermalTool;

    @provide({ context: toolsContext })
    tools!: ThermalGroup["tool"]["tools"]

    @property({ type: Boolean })
    autoclear: boolean = false;


}