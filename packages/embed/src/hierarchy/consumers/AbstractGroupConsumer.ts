import type { ThermalGroup } from "@labirthermal/core";
import { consume } from "@lit/context";
import type {
    GroupController} from "../controllers/GroupController";
import {
    groupControllerContext
} from "../controllers/GroupController";
import { AbstractRegistryConsumer } from "./AbstractRegistryConsumer";

export abstract class AbstractGroupConsumer extends AbstractRegistryConsumer {

    /** @deprecated Use groupController instead */
    public get group(): ThermalGroup {
        return this.groupController.groupObject;
    }

    @consume({ context: groupControllerContext, subscribe: true })
    groupController!: GroupController;

}