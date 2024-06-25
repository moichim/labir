import { html } from "lit";
import { ElementInheritingRegistry } from "../structure/registry/ElementInheritingregistry";
import { customElement } from "lit/decorators.js";

@customElement("thermal-range-minmax")
export class RegistrySetMinmaxRangeButton extends ElementInheritingRegistry {

    protected getClassName(): string {
        return "RegistrySetMinmaxRangeButton";
    }

    doAction() {
        this.registry.range.applyMinmax();
    }

    protected render(): unknown {
        return html`
            <thermal-button @click=${this.doAction}>Maximal range</thermal-button>
        `;
    }

    

}