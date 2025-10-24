import { t } from "i18next";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { T } from "../../translations/Languages";

@customElement("registry-range-auto-button")
export class RegistrySetAutoRangeElement extends RegistryConsumer {

    doAction() {
        this.registry.range.applyAuto();
    }

    protected render(): unknown {
        return html`<thermal-btn @click=${this.doAction}>${t(T.automaticrange)}</thermal-btn>`;
    }

    

}