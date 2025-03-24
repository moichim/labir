import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";

@customElement( "thermal-loading" )
export class Loading extends BaseElement {

    @state()
    protected loaded: boolean = false;

    @property({type: String})
    public message?: string;

    @property({type: String})
    public bordercolor: string = "var(--thermal-slate)";

    @property({type: String})
    public bgcolor: string = "var(--thermal-slate-light)";

    @property({type: String})
    public textcolor: string = "var(--thermal-slate-dark)";

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);
        this.style.borderColor = this.bordercolor;
        this.style.backgroundColor = this.bgcolor;
        this.style.color = this.textcolor;
    }

    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;

            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            
            box-sizing: border-box;
            padding: var(--thermal-gap);
            color: var(--thermal-slate-dark);
            background: var(--thermal-slate-light);

            --width: 60px;
            --height: 80px;
            --bar: 10px;
            --gap: 8px;
        }

        .lds-facebook {
            /* change color here */
            color: var(--thermal-slate-dark);
        }
        .lds-facebook,
        .lds-facebook div {
            box-sizing: border-box;
        }
        .lds-facebook {
            display: inline-block;
            position: relative;
            width: var(--width);
            height: var(--height);
        }
        .lds-facebook div {
            display: inline-block;
            position: absolute;
            left: var(--gap);
            width: var(--bar);
            background: currentColor;
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .lds-facebook div:nth-child(1) {
            left: var(--gap);
            animation-delay: -0.24s;
        }
        .lds-facebook div:nth-child(2) {
            left: calc(var(--bar) * 2);
            animation-delay: -0.12s;
        }
        .lds-facebook div:nth-child(3) {
            left: calc( var(--bar) * 3 + var(--gap) * .3 ); 
            animation-delay: 0s;
        }
        @keyframes lds-facebook {
            0% {
                top: 8px;
                height: 64px;
            }
            50%, 100% {
                top: 24px;
                height: 32px;
            }
        }
    
    `;

    protected render(): unknown {
        return html`
            <div class="lds-facebook" style="color: ${this.textcolor}">
                <div></div>
                <div></div>
                <div></div>
            </div>
            ${this.message ? html`<div>${this.message}</div>` : nothing }
        `;
    }


}