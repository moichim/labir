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

            if (this.group && this.group.minmax.value && this.registryController) {
                this.registryController.setHighlight({
                    from: this.group.minmax.value.min,
                    to: this.group.minmax.value.max
                });
            }

        }

        this.onmouseleave = () => {

            if (this.registryController) {
                this.registryController.setHighlight(undefined);
            }

        }

        this.onclick = () => {
            if (this.group && this.group.minmax.value) {
                this.group.registry.range.imposeRange({
                    from: this.group.minmax.value.min,
                    to: this.group.minmax.value.max
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