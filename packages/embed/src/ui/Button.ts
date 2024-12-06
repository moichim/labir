import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TourableElement } from '../tour/TourableElement';
import { createRef, ref, Ref } from 'lit/directives/ref.js';

@customElement("thermal-button")
export class ThermalButton extends TourableElement {

    public static VARIANTS = ["slate", "primary", "foreground", "background"]

    protected tourableElementRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElementRef.value
    }

    static shadowRootOptions: ShadowRootInit = {
        ...LitElement.shadowRootOptions,
        mode: "open"
    }

    @property({
        type: String, converter: {
            fromAttribute: (value: string) => {
                if (ThermalButton.VARIANTS.includes(value)) {
                    return value;
                }
                return "slate"
            },
            toAttribute: (value) => value
        }
    })
    public variant: string = "slate";

    @property({
        type: Boolean,
        reflect: true,
        converter: {
            fromAttribute: ( value: string ) => {
                return value === "true";
            },
            toAttribute: ( value: boolean ) => {
                return value ? "true" : "false"
            }
        }
    })
    interactive: boolean = true;

    @property({ type: String })
    public size: string = "sm";

    static styles = css`

    :host([interactive="true"]) button:hover {
        box-shadow: var( --thermal-shadow );
    }

    :host([interactive="false"]) button:hover {
        cursor: default;
    }

    button {
        
        cursor: pointer;
    
        margin: 0;
        padding: calc( var( --thermal-gap ) * .3 ) calc( var( --thermal-gap ) * .5 );
        
        background: var( --thermal-slate-light );
        color: var( --thermal-foreground );
        
        border: 1px solid var( --thermal-slate );
        border-radius: var( --thermal-radius );

        transition: all .4 ease-in-out;

        box-shadow: var( --thermal-shadow-none );
        
        &.slate {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
        }
        &.primary {
            background: var( --thermal-primary );
            color: white;
        }
        &.foreground {
            background: var( --thermal-foreground );
            color: var( --thermal-background );
        }
        &.background {
            background: var( --thermal-background );
            color: var( --thermal-foreground );
        }
    }
    
    `;

    render() {

        return html`
            <button class="${this.variant}" ${ref(this.tourableElementRef)}>
                <slot></slot>
            </button>
        `;

    }

}