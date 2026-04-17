import { t } from "i18next";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { AbstractRegistryConsumer } from "../../hierarchy/consumers/AbstractRegistryConsumer";
import { T } from "../../translations/Languages";

@customElement("registry-range-auto-button")
export class RegistrySetAutoRangeElement extends AbstractRegistryConsumer {

    doAction() {
        this.registry.range.applyAuto();
    }

    protected render(): unknown {
        return html`<thermal-btn @click=${this.doAction}>${t(T.automaticrange)}</thermal-btn>`;
    }

    

}