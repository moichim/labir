import { html, nothing, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { BaseElement } from "../hierarchy/BaseElement";
import icons from "../utils/icons";

// Define the type for the icon factory functions
type IconFactory = Record<string, (classes?: string, css?: string) => string>;

@customElement("thermal-icon")
export class ThermalIcon extends BaseElement {


    @property({ type: String, reflect: true })
    public icon?: string;

    @property({ type: String, reflect: true })
    public variant?: string;

    @property({ type: String, reflect: true })
    public classes?: string;

    @property({ type: String, reflect: true })
    public css?: string;


    protected element?: string;

    connectedCallback(): void {
        super.connectedCallback();

        this.updateIcon();
    }

    protected updated(_changedProperties: PropertyValues): void {

        super.updated(_changedProperties);


        this.updateIcon();


    }

    protected updateIcon(): void {

        if (
            (this.icon === undefined || this.icon.trim() === "")
            || (this.variant === undefined || this.variant.trim() === "")
        ) {
            this.element = undefined;
            return;
        } else {

            const icon = this.icon && this.icon.trim() !== ""
                ? this.icon
                : false;
            const factory = icons[icon as keyof typeof icons] as IconFactory;

            if (factory) {

                if (this.variant in factory) {
                    const fn = factory[this.variant] as (classes?: string, css?: string) => string;
                    this.element = fn(this.classes, this.css);
                }

            }

        }

    }

    protected render(): unknown {

        if (!this.element) {
            return nothing;
        } else {
            return html`${unsafeSVG(this.element)}`;
        }
    }

}