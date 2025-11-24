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

    @property({type: String, converter: booleanConverter(false), reflect: true})
    public disabled?: boolean;

    @property({type: String, converter: booleanConverter(false), reflect: true})
    public interactive?: boolean;

    @property({type: Boolean, attribute: true, reflect: true})
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
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-grow: 0;
            gap: .5em;

            width: fit-content;
            box-sizing: border-box;

            vertical-align: middle;
            position: relative;

            margin: 0;
            padding: calc( var( --thermal-gap ) * .3 ) calc( var( --thermal-gap ) * .5 );

            border: 1px solid var( --thermal-slate );
            border-radius: var(--thermal-radius);
            
            background-color: var(--thermal-slate-light);
            color: var(--thermal-foreground);

            box-shadow: none; 
            
            cursor: pointer;
            
            text-align: center;
            white-space: nowrap;
            font-size: calc( var( --thermal-fs ) * .8);
            vertical-align: middle;

            transition: all .15s ease-in-out;

            /* Focus styling */
            outline: none;

            --tooltip-bg: var(--thermal-slate-dark, #334155);
            --tooltip-color: white;
            --tooltip-padding: 0.5em 0.75em;
            --tooltip-border-radius: var(--thermal-radius, 4px);
            --tooltip-font-size: 0.9em;
            --tooltip-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }


        :host(:focus),
        :host(:focus-visible),
        :host(:hover) {
            outline: none;
            box-shadow: var( --thermal-shadow );
        }

        /* Default styling when no attributes are present */
        :host(:not([variant])) {
            background-color: var(--thermal-slate-light);
            color: var(--thermal-foreground);
        }

        :host(:not([size])) {
            font-size: calc( var( --thermal-fs ) * .8);
            padding: calc( var( --thermal-gap ) * .3 ) calc( var( --thermal-gap ) * .5 );
        }

        :host(:not([plain])) {
            border: 1px solid var( --thermal-slate );
        }

        svg,
        span {
            vertical-align: middle;
            display: inline-block;
        }



        :host([disabled=true]) {
            cursor: not-allowed !important;
            opacity: .5;
            outline: 0 !important;
            box-shadow: none !important;

            button {
                outline: 0 !important;
                pointer-events: none;
            }
        }

        :host([disabled="true"]:hover) {
            
        }

        :host([disabled="false"]:hover) {
            box-shadow: var( --thermal-shadow );
        }

        :host([interactive="false"]) {
            box-shadow: none !important;
            cursor: text !important;
        }

        :host([interactive="false"]:hover) {
            color: var(--thermal-foreground) !important;
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
            box-shadow: none;
        }

        :host([variant="background"][size="sm"]:hover),
        :host([variant="background"][size="sm"]:focus) {
            background-color: var(--thermal-slate-light);
        }


        :host([variant="breadcrumb"][size="sm"]) {
            letter-spacing: 0px;
            font-size: 1em;
            padding: 0;
            background: transparent;
        }

        :host([variant="breadcrumb"][size="sm"]:hover),
        :host([variant="breadcrumb"][size="sm"]:focus) {
            box-shadow: none;
            color: var(--thermal-primary);
            slot {
                text-decoration: underline;
            }
        }


        :host([variant="plain"]) {
            background: transparent !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
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

        :host([size="lg"]) {
            font-size: calc( var( --thermal-fs ) );
            line-height: 1.2em;
            padding: .5em .7;
        }

        :host([size="xl"]) {
            font-size: calc( var( --thermal-fs ) * 2);
            line-height: 1.2;
        }

        :host([plain="true"]) {
            border: none !important;
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