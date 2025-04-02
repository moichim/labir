import { ThermalGroup } from "@labir/core";
import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractGroupProvider } from "../abstraction/AbstractGroupProvider";
import { groupContext } from "../providers/context/GroupContext";

@customElement("group-mirror")
export class GroupProviderElement extends AbstractGroupProvider {

    @property({ type: String })
    public slug!: string;

    @provide({ context: groupContext })
    group!: ThermalGroup;

    @property({ type: Boolean })
    autoclear: boolean = false;


}