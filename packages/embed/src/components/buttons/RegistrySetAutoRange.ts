import { html } from "lit";
import { ElementInheritingRegistry } from "../structure/registry/ElementInheritingregistry";
import { customElement } from "lit/decorators.js";

@customElement("thermal-range-auto")
export class RegistrySetAutoRangeElement extends ElementInheritingRegistry {

    protected getClassName(): string {
        return "RegistrySetAutoRangeElement";
    }

    doAction() {
        this.registry.range.applyAuto();
    }

    protected render(): unknown {
        return html`
            <thermal-button @click=${this.doAction}>Auto</thermal-button>
        `;
    }

    

}