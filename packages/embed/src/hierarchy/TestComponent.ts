import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GroupConsumer } from "./consumers/GroupConsumer";

@customElement("test-component")
export class TestComponent extends GroupConsumer {

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public uuid!: string;


    connectedCallback(): void {
        super.connectedCallback();
        this.log( this, {
            managerId: this.manager.id, 
            registryId: this.registry.id,
            groupId: this.group.id,
            group: this.group
        });
    }

    protected render(): unknown {
        return html`
            <div>Jsem consumer a tester</div>
            <slot></slot>
        `;
    }

}