import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { css, html, nothing } from "lit";
import { ref } from "lit/directives/ref.js";
import icons from "../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { computePosition, flip, shift, offset, arrow, autoUpdate, Placement } from '@floating-ui/dom';
import { booleanConverter } from "../utils/converters/booleanConverter";

export type BtnVariants = "primary" | "foreground" | "background" | "default" | "breadcrumb";

export type BtnSizes = "sm" | "md" | "lg" | "xl";

@customElement( "thermal-btn" )
export class ThermalBtn extends BaseElement {

    @property({type: String, attribute: "tooltip-placement"})
    public tooltipPlacement: Placement = "top";

    @property( { type: String } )
    public pre?: string;

    @property({ type: String, attribute: true, reflect: true })
    public variant?: BtnVariants;

    @property({ type: String, attribute: true, reflect: true })
    public size?: BtnSizes;

    @property({type: String})
    public icon?: string;

    @property({type: String})
    public iconStyle:string = "outline";

    @property({type: String, converter: booleanConverter(false)})
    public disabled?: boolean;

    @property({type: String, converter: booleanConverter(false)})
    public interactive?: boolean;

    @property({type: Boolean, attribute: true})
    public plain?: boolean;

    @property({type: String})
    public tooltip?: string;

    @property({type: Number, reflect: true})
    public tabindex: number = 0;

    private tooltipElement?: HTMLElement;
    private arrowElement?: HTMLElement;
    private cleanupAutoUpdate?: () => void;

    protected firstUpdated() {
        // Ensure element is focusable
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
        // Add keyboard event listener
        this.addEventListener('keydown', this.handleKeydown);
        // Add click event listener to prevent disabled button clicks
        this.addEventListener('click', this.handleClick);
        // Tooltip will be rendered in render(), not in body
        if (this.tooltip) {
            this.addEventListener('mouseenter', this.showTooltip);
            this.addEventListener('mouseleave', this.hideTooltip);
            this.addEventListener('focus', this.showTooltip);
            this.addEventListener('blur', this.hideTooltip);
        }
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>) {
        // Tooltip rendering is handled in render()
        if (changedProperties.has('tooltip')) {
            if (this.tooltip) {
                this.addEventListener('mouseenter', this.showTooltip);
                this.addEventListener('mouseleave', this.hideTooltip);
                this.addEventListener('focus', this.showTooltip);
                this.addEventListener('blur', this.hideTooltip);
            } else {
                this.removeEventListener('mouseenter', this.showTooltip);
                this.removeEventListener('mouseleave', this.hideTooltip);
                this.removeEventListener('focus', this.showTooltip);
                this.removeEventListener('blur', this.hideTooltip);
            }
        }
    }

    // Tooltip setup is now handled in render()

    private removeTooltip() {
        this.tooltipElement = undefined;
        this.arrowElement = undefined;
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
        this.removeEventListener('mouseenter', this.showTooltip);
        this.removeEventListener('mouseleave', this.hideTooltip);
        this.removeEventListener('focus', this.showTooltip);
        this.removeEventListener('blur', this.hideTooltip);
    }

    private showTooltip = async () => {
        if (!this.tooltipElement || !this.arrowElement) return;
        this.tooltipElement.style.visibility = 'visible';
        this.tooltipElement.style.opacity = '1';
        const updatePosition = async () => {
            if (!this.tooltipElement || !this.arrowElement) return;
            const { x, y, placement, middlewareData } = await computePosition(this, this.tooltipElement, {
                placement: this.tooltipPlacement,
                middleware: [
                    offset(6),
                    flip(),
                    shift({ padding: 8 }),
                    arrow({ element: this.arrowElement })
                ]
            });
            Object.assign(this.tooltipElement.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
            // Position arrow
            const { x: arrowX, y: arrowY } = middlewareData.arrow || {};
            const side = placement.split('-')[0];
            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[side];
            Object.assign(this.arrowElement.style, {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                [staticSide as string]: '-4px',
            });
        };
        updatePosition();
        this.cleanupAutoUpdate = autoUpdate(this, this.tooltipElement, updatePosition);
    };

    private hideTooltip = () => {
        if (!this.tooltipElement) return;
        this.tooltipElement.style.opacity = '0';
        this.tooltipElement.style.visibility = 'hidden';
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
    };

    private handleClick = (event: MouseEvent) => {
        // Prevent click if disabled
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    private handleKeydown = (event: KeyboardEvent) => {
        // Don't trigger click if disabled
        if (this.disabled) return;
        
        // Trigger click on Enter or Space
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.click();
        }
    };

    disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.handleKeydown);
    this.removeEventListener('click', this.handleClick);
    this.removeTooltip();
    }

    public static styles = css`

        :host {

            font-family: var( --thermal-font-family );
            font-size: calc( var( --thermal-fs ) * .8);
            line-height: var( --thermal-line-height );
        
            --color: var( --thermal-foreground );
            --color-hover: var( --color );

            --bg: var( --thermal-slate-light );
            --bg-hover: var( --bg );

            --border-width: 1px;
            --border-style: solid;
            --border-color: var( --thermal-slate );
            --border-color-hover: var( --border-color );

            --radius: var(--thermal-radius);
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
            
            --padding: .5em .7em;
            --icon-size: 1em;
            --gap: .5em;
            --opacity: 1;
            --letter-spacing: normal;

            --cursor: pointer;
            --transition-duration: .15s;

            --tooltip-bg: var(--thermal-foreground, black);
            --tooltip-color: var( --thermal-background, white);
            --tooltip-padding: 0.5em 0.75em;
            --tooltip-border-radius: var(--thermal-radius, 4px);
            --tooltip-font-size: 0.9em;
            --tooltip-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        }



        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-grow: 0;
            gap: var(--gap);
            vertical-align: middle;
            
            position: relative;

            margin: 0;
            padding: var(--padding);
            width: fit-content;
            box-sizing: border-box;

            border-width: var( --border-width );
            border-style: var( --border-style );
            border-color: var( --border-color );
            border-radius: var( --radius );
            
            background-color: var(--bg);
            color: var(--color);

            box-shadow: var( --shadow ); 
            
            cursor: var( --cursor );
            opacity: var( --opacity );
            
            --letter-spacing: var( --letter-spacing );
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;

            transition: all var(--transition-duration) ease-in-out;

            /* Focus styling */
            outline: none;

            
        }


        :host(:focus),
        :host(:focus-visible),
        :host(:hover) {
            outline: none;
            box-shadow: var( --shadow-hover );
            background-color: var(--bg-hover);
            color: var(--color-hover);
            border-color: var( --border-color-hover );
        }

        svg,
        span {
            vertical-align: middle;
            display: inline-block;
        }



        :host([disabled=true]),
        :host([disabled="true"])
        :host([disabled="true"]:hover),
        :host([disabled="true"]:focus) {

            
            color: color-mix(in srgb, var(--color) 50%, transparent);
            background: color-mix(in srgb, var(--bg) 50%, transparent);
            border-color: color-mix(in srgb, var(--border-color) 50%, transparent);
            --cursor: not-allowed;
            --shadow: none;
            --shadow-hover: none;

            button {
                outline: 0 !important;
                pointer-events: none;
            }
        }


        :host([interactive="false"]),
        :host([interactive=false]),
        :host([interactive="false"]:hover),
        :host([interactive=false]:hover),
        :host([interactive="false"]:focus),
        :host([interactive=false]:focus) {
            --shadow-hover: none;
            --cursor: text;
            --color-hover: var( --color );
            --bg-hover: var( --bg );
        }





        :host([size="sm"]),
        :host([size=sm]) {
            --padding: .1em .2em;
            line-height: 1.2;
            --letter-spacing: 0.5px;
            font-size: .7em;
        }

        :host([size="lg"]),
        :host([size=lg]) {
            --padding: .5em .7em;
            line-height: 1.2;
            font-size: 1em;
        }

        :host([size="xl"]),
        :host([size=xl]) {
            line-height: 1.2;
            font-size: 2em;
        }

        :host([plain="true"]),
        :host([plain=true]) {
            --border-color: transparent;
            --border-color-hover: transparent;
            --border-width: 0px;
            border: none !important;
        }







        :host([variant="primary"]),
        :host([variant=primary]) {
            
            --color: var( --thermal-background );
            --color-hover: var( --thermal-background );
            
            --bg: var( --thermal-primary );
            --bg-hover: var( --thermal-primary-dark );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );

        }

        :host([variant="foreground"]),
        :host([variant=foreground]) {

            --color: var( --thermal-background );
            --color-hover: var( --thermal-background );
            
            --bg: var( --thermal-foreground );
            --bg-hover: var( --thermal-slate-dark );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
        }


        :host([variant="background"]),
        :host([variant=background]) {

            --color: var( --thermal-foreground );
            --color-hover: var( --thermal-foreground );
            
            --bg: var( --thermal-background );
            --bg-hover: var( --bg );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
        }



        :host([variant="text"]),
        :host([variant=text]) {

            --bg: transparent;
            --bg-hover: transparent;

            --border-color: transparent;
            --border-color-hover: transparent;

            --border-width: 0px;
            border: none !important;

            --shadow: none;
            --shadow-hover: none;

            --padding: 0px;
            --letter-spacing: normal;
        }

        



        .btn-icon {
            width: 1em;
        }


        /* Global tooltip styles */

        .thermal-tooltip {
            background-color: var(--tooltip-bg, #334155);
            color: var(--tooltip-color, white);
            padding: var(--tooltip-padding, 0.5em 0.75em);
            border-radius: var(--tooltip-border-radius, 4px);
            font-size: var(--tooltip-font-size, 1em);
            box-shadow: var(--tooltip-box-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));
            z-index: 9999;
            pointer-events: none;
            word-wrap: break-word;
            font-size: calc( var( --thermal-fs ) * 0.8 );
        }

        .thermal-tooltip-arrow {
            position: absolute;
            width: 8px;
            height: 8px;
            background: inherit;
            transform: rotate(45deg);
        }

        .prefix {
            font-weight: bold;
            padding-right: 0.25em;
        }

    `;

    protected render(): unknown {
        let icon: typeof nothing | string = nothing;
        if (this.icon && this.icon in icons) {
            const i = icons[this.icon as keyof typeof icons];
            if (typeof i[this.iconStyle as keyof typeof i] === 'function') {
                icon = (i[this.iconStyle as keyof typeof i] as CallableFunction)("btn-icon");
            }
        }
        // Tooltip rendering
        let tooltipHtml: unknown = nothing;
        if (this.tooltip) {
            tooltipHtml = html`
                <div
                    class="thermal-tooltip"
                    style="position: absolute; top: 0; left: 0; visibility: hidden; opacity: 0; transition: opacity 0.2s ease-in-out;"
                    @mouseenter=${this.showTooltip}
                    @mouseleave=${this.hideTooltip}
                    @focus=${this.showTooltip}
                    @blur=${this.hideTooltip}
                    ${ref((el: Element | undefined) => { this.tooltipElement = el as HTMLElement; })}
                >
                    ${this.tooltip}
                    <div class="thermal-tooltip-arrow" ${ref((el: Element | undefined) => { this.arrowElement = el as HTMLElement; })}></div>
                </div>
            `;
        }
        return html`
            ${unsafeSVG(icon)}${this.pre ? html`<span class="prefix">${this.pre}</span>` : nothing}<slot></slot>
            ${tooltipHtml}
        `;
    }

}