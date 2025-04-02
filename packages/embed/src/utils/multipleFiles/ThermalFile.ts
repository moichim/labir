import { nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";

@customElement("thermal-file")
export class ThermalFileElement extends BaseElement {

    @property({ type: String })
    lrc?: string;

    @property({ type: String })
    png?: string;

    @property({ type: String })
    label?: string;

    protected render(): unknown {
        return nothing;
    }

}