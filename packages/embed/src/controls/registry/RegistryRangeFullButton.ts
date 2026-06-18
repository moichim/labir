import { ThermalRangeOrUndefined } from "@labirthermal/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { html } from "lit";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { AbstractRegistryConsumer } from "../../hierarchy/consumers/AbstractRegistryConsumer";
import { setRegistryHighlightContext } from "../../hierarchy/providers/context/RegistryContext";
import { T } from "../../translations/Languages";

export class RegistryRangeFullButton extends AbstractRegistryConsumer {

    protected buttonRef: Ref<HTMLElement> = createRef();

    @consume( { context: setRegistryHighlightContext, subscribe: true } )
    protected setter?: ( value?: ThermalRangeOrUndefined ) => void;

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
