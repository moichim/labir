import { ThermalGroup, ThermalTool } from "@labir/core";
import { html } from "lit";
import { RegistryConsumer } from "../consumers/RegistryConsumer";

export abstract class AbstractGroupProvider extends RegistryConsumer {

    protected UUIDGroupListeners = this.UUID + "__group-listener";

    public slug!: string;

    group!: ThermalGroup;

    tool!: ThermalTool;

    tools!: ThermalGroup["tool"]["tools"]

    public autoclear: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();

        this.group = this.registry.groups.addOrGetGroup(this.slug);

        if (this.slug) {
            // this.group = this.registry.groups.addOrGetGroup( this.slug );
        } else {
            // this.group = getDefaultGroup( this.registry );
        }

        // Assign tool
        this.tool = this.group.tool.value;
        this.tools = this.group.tool.tools;

        // Add tool listener
        this.group.tool.addListener(this.UUIDGroupListeners, value => {
            this.tool = value;
        });

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