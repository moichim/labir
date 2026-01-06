import { ThermalGroup } from "@labirthermal/core";
import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractGroupProvider } from "../abstraction/AbstractGroupProvider";
import { groupContext } from "./context/GroupContext";
import { PropertyValues } from "lit";

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

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( 
            _changedProperties.has("slug") === true 
            && _changedProperties.get("slug") !== this.slug
        ) {

            if ( this.autoclear === true ) {
                // Remove any existing group
                if ( this.group ) {
                    this.group.registry.groups.removeGroup( this.group.id );
                }

                this.group = this.registry.groups.addOrGetGroup(this.slug);
            }

        }
    }

}