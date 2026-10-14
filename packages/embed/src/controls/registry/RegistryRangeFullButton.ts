import { t } from "i18next";
import { html } from "lit";
import type { Ref} from "lit/directives/ref.js";
import { createRef, ref } from "lit/directives/ref.js";
import { AbstractRegistryConsumer } from "../../hierarchy/consumers/AbstractRegistryConsumer";
import { T } from "../../translations/Languages";

export class RegistryRangeFullButton extends AbstractRegistryConsumer {

    protected buttonRef: Ref<HTMLElement> = createRef();

    doAction() {
        this.registryObject.range.applyMinmax();
    }

    mouseenter() {

        if (this.registryObject.minmax.value !== undefined && this.registryController) {
            this.registryController.setHighlight({
                from: this.registryObject.minmax.value.min,
                to: this.registryObject.minmax.value.max
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

declare global {
    interface HTMLElementTagNameMap {
        "registry-range-full-button": RegistryRangeFullButton;
    }
}
