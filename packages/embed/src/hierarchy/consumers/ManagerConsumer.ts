import { consume } from "@lit/context";
import { state } from "lit/decorators.js";
import { BaseElement } from "../BaseElement";
import { ManagerContext, managerContext } from "../providers/context/ManagerContext";
export abstract class ManagerConsumer extends BaseElement {

    @consume({ context: managerContext, subscribe: true })
    @state()
    public manager!: ManagerContext;

    connectedCallback(): void {
        super.connectedCallback();

        if (this.manager === undefined) {
            throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`);
        }

    }

}