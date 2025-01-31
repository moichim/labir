import { ThermalRangeOrUndefined } from "@labir/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { setRegistryHighlightContext } from "../../hierarchy/providers/context/RegistryContext";
import { T } from "../../translations/Languages";
import { AbstractFileButton } from "../file/buttons/AbstractFileButton";

@customElement("group-range-propagator")
export class GroupRangePropagator extends GroupConsumer {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    public static styles = AbstractFileButton.styles;

    @consume({context: setRegistryHighlightContext, subscribe: true})
    protected setter?: ( value: ThermalRangeOrUndefined ) => void;

    connectedCallback(): void {
        super.connectedCallback();

        this.onmouseenter = () => {
            if ( this.group && this.group.minmax.value && this.setter ) {
                this.setter({
                    from: this.group.minmax.value.min,
                    to: this.group.minmax.value.max
                });
            }
        }

        this.onmouseleave = () => {
            if ( this.setter ) {
                this.setter(undefined);
            }
        }

        this.onclick = () => {
            if ( this.group && this.group.minmax.value ) {
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