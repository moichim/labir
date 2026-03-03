import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";

@customElement("thermal-group")
export class ThermalGroup extends BaseElement {

    @property()
    name?: string;

    static styles = css`
        :host {
            display: none;
        }
    `;

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}