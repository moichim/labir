import { ThermalManager } from "@labir/core";
import { provide } from "@lit/context";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { AbstractStructureElement } from "../AbstractStructureElement";
import { ManagerContext } from "../contexts";

@customElement("thermal-manager")
export class ThermalManagerElement extends AbstractStructureElement {

    protected getClassName(): string {
        return "ThermalManagerElement";
    }

    @provide({context: ManagerContext})
    manager = new ThermalManager()

    protected render(): unknown {
        return html`
            <slot></slot>
        `
    }

}