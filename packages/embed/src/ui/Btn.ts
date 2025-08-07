import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { css, html, nothing } from "lit";
import icons from "../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { computePosition, flip, shift, offset, arrow, autoUpdate } from '@floating-ui/dom';

export type BtnVariants = "primary" | "foreground" | "background" | "default";

export type BtnSizes = "sm" | "md" | "lg" | "xl";

@customElement( "thermal-btn" )
export class ThermalBtn extends BaseElement {

    @property({ type: String, attribute: true, reflect: true })
    public variant?: BtnVariants;

    @property({ type: String, attribute: true, reflect: true })
    public size?: BtnSizes;

    @property({type: String})
    public icon?: string;

    @property({type: String})
    public iconStyle:string = "outline";

    @property({type: String})
    public disabled?: boolean;

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
        
        if (this.tooltip) {
            this.setupTooltip();
        }
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('tooltip')) {
            if (this.tooltip && !this.tooltipElement) {
                this.setupTooltip();
            } else if (!this.tooltip && this.tooltipElement) {
                this.removeTooltip();
            } else if (this.tooltip && this.tooltipElement) {
                // Update existing tooltip content
                this.tooltipElement.textContent = this.tooltip;
            }
        }
    }

    private setupTooltip() {
        if (!this.tooltip) return;

        // Create tooltip element
        this.tooltipElement = document.createElement('div');
        this.tooltipElement.className = 'thermal-tooltip';
        this.tooltipElement.textContent = this.tooltip;
        this.tooltipElement.style.position = 'absolute';
        this.tooltipElement.style.top = '0';
        this.tooltipElement.style.left = '0';
        this.tooltipElement.style.visibility = 'hidden';
        this.tooltipElement.style.opacity = '0';
        this.tooltipElement.style.transition = 'opacity 0.2s ease-in-out';

        // Create arrow element
        this.arrowElement = document.createElement('div');
        this.arrowElement.className = 'thermal-tooltip-arrow';
        this.tooltipElement.appendChild(this.arrowElement);

        document.body.appendChild(this.tooltipElement);

        // Add event listeners
        this.addEventListener('mouseenter', this.showTooltip);
        this.addEventListener('mouseleave', this.hideTooltip);
        this.addEventListener('focus', this.showTooltip);
        this.addEventListener('blur', this.hideTooltip);
    }

    private removeTooltip() {
        if (this.tooltipElement) {
            document.body.removeChild(this.tooltipElement);
            this.tooltipElement = undefined;
            this.arrowElement = undefined;
        }
        
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
                placement: 'top',
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

    private handleKeydown = (event: KeyboardEvent) => {
        // Trigger click on Enter or Space
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.click();
        }
    };

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this.handleKeydown);
        this.removeTooltip();
    }

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

            /* Focus styling */
            outline: none;
        }

        :host(:focus),
        :host(:focus-visible) {
            outline: none;
            box-shadow: 0 0 0 2px var(--thermal-primary, #007bff);
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

        :host(:hover) {
            /** background-color: var(--thermal-slate); */
        }

        :host([disabled="true"]) {
            cursor: not-allowed;
            opacity: 0.6;
            pointer-events: none;
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

        :host([variant="background"][size="sm"]:hover),
        :host([variant="background"][size="sm"]:focus) {
            background-color: var(--thermal-slate-light);
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

        /* Global tooltip styles */
        :host {
            --tooltip-bg: var(--thermal-slate-dark, #334155);
            --tooltip-color: white;
            --tooltip-padding: 0.5rem 0.75rem;
            --tooltip-border-radius: var(--thermal-radius, 4px);
            --tooltip-font-size: 0.875rem;
            --tooltip-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }


        .thermal-tooltip {
            background-color: var(--tooltip-bg, #334155);
            color: var(--tooltip-color, white);
            padding: var(--tooltip-padding, 0.5rem 0.75rem);
            border-radius: var(--tooltip-border-radius, 4px);
            font-size: var(--tooltip-font-size, 0.875rem);
            box-shadow: var(--tooltip-box-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));
            z-index: 9999;
            pointer-events: none;
            max-width: 200px;
            word-wrap: break-word;
        }

        .thermal-tooltip-arrow {
            position: absolute;
            width: 8px;
            height: 8px;
            background: inherit;
            transform: rotate(45deg);
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