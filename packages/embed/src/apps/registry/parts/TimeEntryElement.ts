import { nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";

@customElement("time-entry")
export class TimeEntryElement extends BaseElement {

    @property({ type: String, reflect: true, attribute: true })
    thermal!: string;

    @property({ type: String, reflect: true, attribute: true })
    visible?: string;

    @property({ type: String, reflect: true, attribute: true })
    author?: string;

    @property({ type: String, reflect: true, attribute: true })
    note?: string;

    protected render(): unknown {
        return nothing;
    }

}