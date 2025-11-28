import { css, CSSResultGroup, html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";

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
            
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 300px;

            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            
            box-sizing: border-box;
            padding: var(--thermal-gap);
            color: var(--thermal-slate-dark);
            background: var(--thermal-slate-light);
            
        }
    
    `;

    protected render(): unknown {
        return html`
            <thermal-spinner message=${this.message} style="display: block"></thermal-spinner>
        `;
    }


}