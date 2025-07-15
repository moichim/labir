import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import icons, { icon } from "../utils/icons";
import { html, nothing, PropertyValues } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

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

            if (icon && icon in icons) {

                const factory = icons[icon as keyof typeof icons];

                if (factory) {

                    if (this.variant in factory) {
                        this.element = factory[this.variant as keyof typeof factory](this.classes, this.css);
                    }

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