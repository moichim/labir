import { t } from "i18next";
import { html } from "lit";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { AbstractRegistryConsumer } from "../../hierarchy/consumers/AbstractRegistryConsumer";
import { T } from "../../translations/Languages";

export class RegistryRangeFullButton extends AbstractRegistryConsumer {

    protected buttonRef: Ref<HTMLElement> = createRef();

    doAction() {
        this.registry.range.applyMinmax();
    }

    mouseenter() {

        if (this.registry.minmax.value !== undefined && this.registryController) {
            this.registryController.setHighlight({
                from: this.registry.minmax.value.min,
                to: this.registry.minmax.value.max
            });
        }
    }

    mouseleave() {

        if (this.registryController) {
            this.registryController.setHighlight(undefined);
        }

    }

    protected render(): unknown {
        return html`<thermal-btn 
    ${ref(this.buttonRef)} 
    @click=${this.doAction} 
    @mouseenter="${this.mouseenter}" 
    @mouseleave="${this.mouseleave}"
    @focus="${this.mouseenter}"
    @blur="${this.mouseleave}"
>${t(T.fullrange)}</thermal-btn>`;
    }



}
