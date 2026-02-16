import { ThermalGroup } from "@labirthermal/core";
import { html } from "lit";
import { RegistryConsumer } from "../consumers/RegistryConsumer";
import { GroupProviderController } from "../controllers/GroupController";
import { groupContext } from "../providers/context/GroupContext";
import { provide } from "@lit/context";
import { property } from "lit/decorators.js";

export abstract class AbstractGroupProvider extends RegistryConsumer {

    public slug!: string;

    @provide({ context: groupContext })
    public group!: ThermalGroup;

    @property({ type: Boolean })
    autoclear: boolean = false;

    private controller: GroupProviderController = new GroupProviderController(this);

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}