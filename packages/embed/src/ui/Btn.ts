import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { css, html, nothing } from "lit";
import icons from "../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

export type BtnVariants = "primary" | "foreground" | "background" | "default";

export type BtnSizes = "sm" | "md" | "lg" | "xl";

@customElement( "thermal-btn" )
export class ThermalBtn extends BaseElement {

    @property({ type: String, reflect: true })
    public varaiant: BtnVariants = "primary";

    @property({ type: String, reflect: true })
    public size: BtnSizes = "md";

    @property({type: String, reflect: true})
    public icon?: string;

    @property({type: String, reflect: true})
    public iconStyle:string = "outline";

    @property({type: String, reflect: true})
    public disabled: boolean = false;

    @property({type: String, reflect: true})
    public plain: boolean = false;

    public static styles = css`
        :host {
            display: flex;
            varrical-align: middle;
            gap: .5em;

            margin: 0;
            padding: calc( var( --thermal-gap ) * .3 ) calc( var( --thermal-gap ) * .5 );

            border: 1px solid var( --thermal-slate );
            border-radius: var(--thermal-radius);
            
            background-color: var(--thermal-slate-light);
            color: var(--thermal-foreground);

            box-shadow: var( --thermal-shadow-none );
            
            cursor: pointer;
            
            text-align: center;
            white-space: nowrap;
            font-size: calc( var( --thermal-fs ) * .8);

            transition: all .2s ease-in-out;
            flex-grow: 0;
            width: fit-content;
        }

        svg,
        span {
            vertical-align: middle;
            display: inline-block;
        }




        :host(:hover) {
            /** background-color: var(--thermal-slate); */
        }






        :host([disabled="true"]) {
            cursor: not-allowed;
        }

        :host([disabled="true"]:hover) {
            
        }

        :host([disabled="false"]:hover) {
            box-shadow: var( --thermal-shadow );
        }







        

        :host([variant="primary"]) {
            background-color: var(--thermal-primary);
            color: white;
        }

        :host([variant="primary"]:hover) {
            background-color: var(--thermal-primary-dark, #0056b3);
        }



        :host([variant="foreground"]) {
            background-color: var(--thermal-foreground);
            color: var(--thermal-background);
        }

        :host([variant="foreground"]:hover) {
            background-color: var(--thermal-foreground-dark, #333);
        }














        :host([variant="background"]) {
            background-color: var(--thermal-background);
            color: var(--thermal-foreground);
        }
        :host([variant="background"]:hover) {

        }

        .btn-icon {
            width: 1em;
        }

        :host([size="sm"]) {
            font-size: calc( var( --thermal-fs ) * .7);
            line-height: 1.2;
            letter-spacing: 0.5px;
            padding: calc( var( --thermal-gap ) * .1 ) calc( var( --thermal-gap ) * .2 );
        }

        :host([size="xl"]) {
            font-size: calc( var( --thermal-fs ) * 2);
            line-height: 1.2;
        }





        :host([plain="true"]) {
            border: none !important;
        }

    `;

    protected render(): unknown {

        let icon: typeof nothing | string = nothing;

        if ( this.icon as keyof typeof icons in icons ) {

            let i = icons[ this.icon as keyof typeof icons ];

            if (  this.iconStyle in i ) {
                icon = i[ this.iconStyle as keyof typeof i ]("btn-icon");
            }

        }


        return html`${unsafeSVG( icon) }<slot></slot>`;
    }

}