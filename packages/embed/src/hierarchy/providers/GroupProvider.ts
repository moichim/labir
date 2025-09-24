import { ThermalGroup } from "@labir/core";
import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractGroupProvider } from "../abstraction/AbstractGroupProvider";
import { groupContext } from "./context/GroupContext";

@customElement("group-provider")
export class GroupProviderElement extends AbstractGroupProvider {

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public slug!: string;

    @provide({ context: groupContext })
    group!: ThermalGroup;

    @property({ type: Boolean })
    autoclear: boolean = false;


    disconnectedCallback(): void {
        super.disconnectedCallback();

        if (this.autoclear === true && this.group && this.registry) {
            this.registry.groups.removeGroup(this.group.id);
        }
    }
}