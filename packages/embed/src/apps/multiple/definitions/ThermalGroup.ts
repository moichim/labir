import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";

@customElement("thermal-group")
export class ThermalGroup extends BaseElement {

    @property()
    name?: string; 

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}