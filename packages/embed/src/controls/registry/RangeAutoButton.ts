import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { createRef, Ref, ref } from "lit/directives/ref.js";

@customElement("registry-range-auto-button")
export class RegistrySetAutoRangeElement extends RegistryConsumer {

    protected buttonRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.buttonRef.value;
    }

    doAction() {
        this.registry.range.applyAuto();
    }

    protected render(): unknown {
        return html`
            <thermal-button ${ref(this.buttonRef)} @click=${this.doAction}>Automatic range</thermal-button>
            <slot name="tour"></slot>
        `;
    }

    

}