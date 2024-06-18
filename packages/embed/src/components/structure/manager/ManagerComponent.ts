import { ThermalManager } from "@labir/core";
import { provide } from "@lit/context";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ManagerContext } from "./ManagerContext";

@customElement("thermal-manager")
export class ThermalManagerElement extends LitElement {

    static styles = css`

    button {
        color: green;
    }

    div {
    color: blue;
    }
    
    `;

    @provide({context: ManagerContext})
    manager = new ThermalManager()

    protected render(): unknown {
        return html`
            <div>${this.manager.id}</div>
            <slot></slot>
        `
    }

}