import { ThermalGroup } from "@labirthermal/core";
import { html, PropertyValues } from "lit";
import { AbstractRegistryConsumer } from "../consumers/AbstractRegistryConsumer";
import { GroupController, IElementWithGroupController } from "../controllers/GroupController";

export abstract class AbstractGroupProvider extends AbstractRegistryConsumer implements IElementWithGroupController {

    public static properties = {
        ...GroupController.HOST_PROPERTIES,
    };

    public groupSlug!: string;

    public groupController: GroupController = new GroupController(this)

    public groupObject!: ThermalGroup;

    public autoclearGroup: boolean = true;

    updated(
        values: PropertyValues<AbstractGroupProvider>
    ): void {
        super.updated(values);
        this.groupController.hostUpdatedWatcher(values);
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}