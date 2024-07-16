import { html } from "lit";
import { customElement, queryAssignedNodes } from "lit/decorators.js";
import { TimelineElement } from "../properties/Timeline";
import { ElementInheritingFile } from "../structure/file/ElementInheritingFile";
import { MarkerElement } from "./Marker";

@customElement("thermal-lesson")
export class LessonElement extends ElementInheritingFile {

    protected getClassName(): string {
        return "LessonElement";
    }

    @queryAssignedNodes({slot: "mark", flatten: true})
    public marksElement!: MarkerElement[];

    @queryAssignedNodes({slot: "timeline", flatten: true})
    public timeline!: TimelineElement[];

    connectedCallback(): void {
        super.connectedCallback();
    }

    protected render(): unknown {
        return html`
            <slot name="mark"></slot>
        `;
    }





}