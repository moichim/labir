import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";

@customElement("button-range-auto")
export class RegistrySetAutoRangeElement extends RegistryConsumer {

    doAction() {
        this.registry.range.applyAuto();
    }

    protected render(): unknown {
        return html`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `;
    }

    

}