import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { ThermalRangeOrUndefined } from "@labir/core";
import { setRegistryHighlightContext } from "../../hierarchy/providers/context/RegistryContext";
import { consume } from "@lit/context";

@customElement("registry-range-full-button")
export class RegistrySetAutoRangeElement extends RegistryConsumer {

    protected buttonRef: Ref<HTMLElement> = createRef();

    @consume( { context: setRegistryHighlightContext, subscribe: true } )
    protected setter?: ( value?: ThermalRangeOrUndefined ) => void;

    public getTourableRoot(): HTMLElement | undefined {
        return this.buttonRef.value;
    }

    doAction() {
        this.registry.range.applyMinmax();
    }

    mouseenter(){
        if ( this.registry.minmax.value !== undefined && this.setter) {
            this.setter({
                from: this.registry.minmax.value.min,
                to: this.registry.minmax.value.max
            });
        }
    }

    mouseleave(){
        if ( this.setter ) {
            this.setter( undefined );
        }
    }

    protected render(): unknown {
        return html`
            <thermal-button 
                ${ref(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${t(T.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `;
    }

    

}
