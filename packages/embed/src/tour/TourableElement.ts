import { property } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { provide } from "@lit/context";
import { tourableElementContext, TourableElementReference } from "./tourContext";

export abstract class TourableElement extends BaseElement {

    public abstract getTourableRoot(): HTMLElement|undefined;

    @property({type: String})
    tour?: string;

    @provide({context: tourableElementContext})
    protected tourableElement: TourableElementReference;

    connectedCallback(): void {
        super.connectedCallback();

        if ( this.tour ) {
            this.tourableElement = {
                element: this,
                step: this.tour
            };
        }

    }

}