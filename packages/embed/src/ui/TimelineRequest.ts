import { nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";

@customElement("timeline-request")
export class TimelineRequest extends BaseElement {

    @property({type: String, reflect: true})
    thermal!: string;

    @property({type: String, reflect: true})
    visible?: string;

    render() {
        return nothing;
    }


}
