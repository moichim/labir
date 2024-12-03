import { ThermalGroup, ThermalTool } from "@labir/core";
import { provide } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RegistryConsumer } from "../consumers/RegistryConsumer";
import { groupContext, toolContext, toolsContext } from "../providers/context/GroupContext";

@customElement("group-mirror")
export class GroupProviderElement extends RegistryConsumer {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    protected UUIDGroupListeners = this.UUID + "__group-listener";

    @property({ type: String })
    public slug!: string;

    @provide( {context: groupContext})
    group!: ThermalGroup;

    @provide( {context: toolContext} )
    tool!: ThermalTool;

    @provide( {context: toolsContext} )
    tools!: ThermalGroup["tool"]["tools"]

    connectedCallback(): void {
        super.connectedCallback();

        this.group = this.registry.groups.addOrGetGroup( this.slug );

        // Assign tool
        this.tool = this.group.tool.value;
        this.tools = this.group.tool.tools;

        // Add tool listener
        this.group.tool.addListener( this.UUIDGroupListeners, value => {
            this.tool = value;
        } );
        
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}