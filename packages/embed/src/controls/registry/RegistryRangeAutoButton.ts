import { t } from "i18next";
import { html } from "lit";
import { AbstractRegistryConsumer } from "../../hierarchy/consumers/AbstractRegistryConsumer";
import { T } from "../../translations/Languages";

export class RegistryRangeAutoButton extends AbstractRegistryConsumer {

    doAction() {
        this.registry.range.applyAuto();
    }

    protected render(): unknown {
        return html`<thermal-btn @click=${this.doAction}>${t(T.automaticrange)}</thermal-btn>`;
    }

    

}