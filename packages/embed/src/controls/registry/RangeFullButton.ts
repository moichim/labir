import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";

@customElement("button-range-full")
export class RegistrySetAutoRangeElement extends RegistryConsumer {

    doAction() {
        this.registry.range.applyMinmax();
    }

    protected render(): unknown {
        return html`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `;
    }

    

}