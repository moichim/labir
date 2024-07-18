import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ManagerContextNew } from "../../components/structure/contextsNew";
import { provide } from "@lit/context";
import { ThermalManager } from "@labir/core";

@customElement("manager-new")
export class ManagerElement extends LitElement {
    
    @provide({context: ManagerContextNew})
    @state()
    manager = new ThermalManager()

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}