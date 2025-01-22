import { CSSResultGroup, html } from "lit";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { AbstractFileButton } from "../file/buttons/AbstractFileButton";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { customElement } from "lit/decorators.js";
import { consume } from "@lit/context";
import { setRegistryHighlightContext } from "../../hierarchy/providers/context/RegistryContext";
import { ThermalRangeOrUndefined } from "@labir/core";

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