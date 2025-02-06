import { customElement, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { html, PropertyValues } from "lit";
import { NotationEntry } from "./NotationEntry";
import { consume } from "@lit/context";
import { NotationSetListContext, notationSetListContext } from "./NotationContext";


@customElement("notation-container")
export class NotationContainer extends BaseElement {

    /**
     * The unfiltered list of items
     */
    @queryAssignedElements({ flatten: true })
    _items!: Array<HTMLElement>;

    /**
     * The filtered list of all entries provided
     */
    @state()
    items: NotationEntry[] = [];


    /**
     * The method that sends the content above
     */
    @consume({ context: notationSetListContext, subscribe: true })
    protected setter?: NotationSetListContext;

    protected createRenderRoot() {
        return this;
      }

    protected willUpdate(_changedProperties: PropertyValues): void {

        super.willUpdate(_changedProperties);

        // Update items locally upon the first mount
        this.items = this._items.filter(item => item instanceof NotationEntry);

        this.log(">>>>>>>>", {
            "this": this,
            "unflitered": this.items,
            "filtered": this._items
        });

        // Send the items upwards
        if (this.setter !== undefined) {
            this.setter(this.items);
        }

    }


    protected render(): unknown {

        return html`<slot></slot>`;

    }



}