import { ThermalGroup, ThermalTool } from "@labir/core";
import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractGroupProvider } from "../abstraction/AbstractGroupProvider";
import { groupContext, toolContext, toolsContext } from "./context/GroupContext";

@customElement("group-provider")
export class GroupProviderElement extends AbstractGroupProvider {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public slug!: string;

    @provide({ context: groupContext })
    group!: ThermalGroup;

    @provide({ context: toolContext })
    tool!: ThermalTool;

    @provide({ context: toolsContext })
    tools!: ThermalGroup["tool"]["tools"]

    @property({ type: Boolean, reflect: true })
    autoclear: boolean = false;

}