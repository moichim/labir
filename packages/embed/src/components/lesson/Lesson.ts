import { customElement, property, queryAssignedNodes } from "lit/decorators.js";
import { ElementInheritingFile } from "../structure/file/ElementInheritingFile";
import { html, PropertyValues } from "lit";
import { MarkerElement } from "./marker";
import { TimelineElement } from "../properties/Timeline";

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

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated( _changedProperties );
        this.log( this.timeline );

        this.log( "///// injektované závlislosti", this.group, this._injectedFile.value );

        this.log( "mark slots", this.marksElement);
    }


    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        this.log( name, _old, value );
    }

    protected render(): unknown {
        return html`
            <slot name="mark"></slot>
        `;
    }





}