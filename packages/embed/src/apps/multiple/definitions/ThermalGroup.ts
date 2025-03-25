import { PropertyValues, html } from "lit";
import { property, state, queryAssignedElements, customElement } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";

@customElement("thermal-group")
export class ThermalGroup extends BaseElement {

    @property()
    name?: string; 

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}