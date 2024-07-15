import { format } from "date-fns";
import { html, LitElement, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";

const timeToAttributeConvertor = (value: number) => {
    // value = addMinutes( value, ( new Date( value ) ).getTimezoneOffset() ).getTime();

    return format(value, "m:ss:SSS");

};
const timeFromAttributeConvertor = (value: string) => {

    const parts = value
        .replaceAll(" ", "")
        .split(":");

    const min = parseInt(parts[0]);
    const sec = parseInt(parts[1]);
    const ms = parseInt(parts[2].slice(0, 2));

    const result = (min * 60 * 1000)
        + (sec * 1000)
        + (ms);

    return result;

};
@customElement("thermal-marker")
export class MarkerElement extends LitElement {


    @property({type: String, reflect: true})
    public say?: string;

    @property({type: String, reflect: true, converter: {
        fromAttribute: timeFromAttributeConvertor,
        toAttribute: timeToAttributeConvertor
    }})
    public from?: number = 500;

    @property({type: String, reflect: true, converter: {
        fromAttribute: timeFromAttributeConvertor,
        toAttribute: timeToAttributeConvertor
    }})
    public to?: number = 500;

    @property({type: String, reflect: true, converter: {
        fromAttribute: timeFromAttributeConvertor,
        toAttribute: timeToAttributeConvertor
    }})
    public duration?: number = 500;

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated( _changedProperties );

        /*
        setTimeout( () => {
            this.from = undefined;
        }, 1000 );
        */
    }


    public getStartMs() {
        return this.from;
    }

    public getEndMs() {

        if ( this.from === undefined ) {
            return undefined;
        }

        if ( this.from === undefined && this.duration === undefined ) {
            return this.from;
        } 
        
        if ( this.to && this.to > this.from ) {
            return this.to;
        } 
        
        if ( this.duration && this.from ) {
            return this.from + this.duration;
        }

    }

    public getStartPercent( duration: number ) {
        const ms = this.getStartMs();
        return ms !== undefined
            ? ms / duration * 100
            : undefined;
    }

    public getEndPercent( duration: number ) {
        const ms = this.getEndMs();
        return ms !== undefined
            ? ms / duration * 100
            : undefined;
    }

    @state()
    protected isValid: boolean = true;


    protected hasValidTime() {
        return this.getStartMs() !== undefined;
    }

    protected render(): unknown {

        if ( this.isValid === false ) {
            return nothing;
        }

        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }

}