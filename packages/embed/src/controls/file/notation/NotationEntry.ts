import { html, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, queryAssignedNodes, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { durationConverter } from "../../../utils/durationConverter";

@customElement("notation-entry")
export class NotationEntry extends BaseElement {

    @property({type: Number, reflect: true, converter: durationConverter})
    public from?: number;

    @property({type: Number, reflect: true, converter: durationConverter})
    public to?: number;

    @property({type: Number, reflect: true, converter: durationConverter})
    public duration?: number;

    @property({type: String, reflect: true})
    public label?: string;

    @property({type: String})
    public image?: string;

    @property({type: String, reflect: true})
    public say?: String;

    @property({type: String, reflect: true})
    public color?: string;

    @state()
    public _active: boolean = false;

    public get active() { return this._active; }

    @queryAssignedElements() 
    slotContent!: Element[];


    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate(_changedProperties);

        // If DURATION changed, propagate it to TO
        if ( _changedProperties.has( "duration" ) ) {
            if ( this.from !== undefined && this.duration !== undefined ) {
                this.to = this.from + this.duration;
            }
        }

        // If TO changed but not DURATION, propagate the change to DURATION
        if ( _changedProperties.has("to") && !_changedProperties.has("duration") ) {
            if ( this.from !== undefined && this.to !== undefined ) {
                this.duration = this.to - this.from;
            }
        }

        // If FROM changed but not therest, propagate the change to DURATION
        if ( _changedProperties.has("from") && !_changedProperties.has("to") && !_changedProperties.has("duration") ) {
            if ( this.from !== undefined && this.to !== undefined ) {
                this.duration = this.to - this.from;
            }
        }
    }



    public activate() {
        if ( this._active === false ) {
            this._active = true;
        }
    }

    public deactivate() {
        if ( this._active === true ) {
            this._active = false;
        }
    }

    public setMs( ms: number ) {

        if ( this.from !== undefined && this.to !== undefined ) {
            if ( ms >= this.from && ms < this.to) {
                this.activate();
            } else {
                this.deactivate();
            }
        }

    }

    public getRenderContent() {
        return Array.from(this.slotContent);
    }

    public getTTSString() {}

    protected render(): unknown {
        return html`
            <slot style="display: none;"></slot>
        `;
    }

}