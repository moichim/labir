import { t } from "i18next";
import { html } from "lit";
import { AbstractGroupConsumer } from "../../hierarchy/consumers/AbstractGroupConsumer";
import { T } from "../../translations/Languages";
import { AbstractFileButton } from "../file/buttons/AbstractFileButton";

export class GroupRangePropagatorElement extends AbstractGroupConsumer {

    public static styles = AbstractFileButton.styles;

    connectedCallback(): void {
        super.connectedCallback();

        this.onmouseenter = () => {

            if (this.groupObject && this.groupObject.minmax.value && this.registryController) {
                this.registryController.setHighlight({
                    from: this.groupObject.minmax.value.min,
                    to: this.groupObject.minmax.value.max
                });
            }

        }

        this.onmouseleave = () => {

            if (this.registryController) {
                this.registryController.setHighlight(undefined);
            }

        }

        this.onclick = () => {
            if (this.groupObject && this.groupObject.minmax.value) {
                this.groupObject.registry.range.imposeRange({
                    from: this.groupObject.minmax.value.min,
                    to: this.groupObject.minmax.value.max
                });
            }
        }
    }

    protected render(): unknown {
        return html`
            <slot>
                <button class="default">${t(T.range).toLowerCase()}</button>
            </slot>
        `;
    }



}

declare global {
    interface HTMLElementTagNameMap {
        "group-range-propagator": GroupRangePropagatorElement;
    }
}