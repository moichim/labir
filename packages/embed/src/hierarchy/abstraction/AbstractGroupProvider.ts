import { ThermalGroup } from "@labir/core";
import { html } from "lit";
import { RegistryConsumer } from "../consumers/RegistryConsumer";

export abstract class AbstractGroupProvider extends RegistryConsumer {

    protected UUIDGroupListeners = this.UUID + "__group-listener";

    public slug!: string;

    group!: ThermalGroup;

    public autoclear: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();

        this.group = this.registry.groups.addOrGetGroup(this.slug);

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        if (this.autoclear === true && this.group !== undefined) {
            this.registry.groups.removeGroup(this.group.id);
        }
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}