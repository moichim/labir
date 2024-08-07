import { customElement, property, state } from "lit/decorators.js";
import { ElementInheritingRegistry } from "../structure/registry/ElementInheritingregistry";

import { PropertyValueMap, css, html } from "lit";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import 'toolcool-range-slider';
import "toolcool-range-slider/dist/plugins/tcrs-marks.min.js";
import { RangeSlider } from "toolcool-range-slider";
import { ThermalPaletteType } from "@labir/core";



@customElement("thermal-range")
export class RangeSliderElement extends ElementInheritingRegistry {

    @property({ type: Number, reflect: true })
    public min?: number;

    @property({ type: Number, reflect: true })
    public max?: number;

    @property({ type: Number, reflect: true })
    public from?: number;

    @property({ type: Number, reflect: true })
    public to?: number;

    @state()
    protected palette!: ThermalPaletteType;

    @state()
    protected sliderRef: Ref<RangeSlider> = createRef();

    protected getClassName(): string {
        return "RangeSliderElement";
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.palette = this.registry.palette.currentPalette;

        this.registry.palette.addListener( this.identificator, () => {
            this.palette = this.registry.palette.currentPalette;
        } );

        this.registry.minmax.addListener(this.identificator, value => {
            if (value) {
                this.min = value.min;
                this.max = value.max;
            }
        });

        this.registry.range.addListener(this.identificator, value => {
            if (value) {
                this.from = value.from;
                this.to = value.to;
            }
        });

    }

    protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {

        super.firstUpdated(_changedProperties);

        const slider = this.sliderRef.value!;

        slider.addCSS( `
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        ` );

        slider.addEventListener("change", (event: Event) => {

            const evt = event as CustomEvent;
            const detail = evt.detail as { value1: number, value2: number };

            this.from = detail.value1;
            this.to = detail.value2;

        });


        slider.addEventListener("onMouseUp", () => {

            if (this.from !== undefined && this.to !== undefined)
                this.registry.range.imposeRange({ from: this.from, to: this.to });

        });


    }

    protected canRanderSlider() {
        return this.min !== undefined
            && this.max !== undefined
            && this.from !== undefined
            && this.to !== undefined
    }

    static styles = css`

        .container {
            height: var( --thermal-gap );
            padding: calc( var( --thermal-gap ) * .5 );
            padding-top: 0;
            padding-bottom: 0;
            margin-bottom: -6px;
        }

        .loading {

            .skeleton {
                background: var( --thermal-slate );
                height: .9rem;
            }

            tc-range-slider {
                display: none;
            }
        }

        .ready {

            .skeleton {
                display: none;
            }

        }
    
    `;

    protected render(): unknown {
        return html`

        <div class="container ${this.canRanderSlider() ? "ready" : "loading"}">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${ref(this.sliderRef)}
                slider-width="100%"
                slider-height="0.9rem"
                animate-onclick="false"
                min="${this.min}"
                max="${this.max}"

                value1="${this.from}"
                value2="${this.to}"

                slider-radius="0"

                slider-bg="var( --thermal-slate )"
                slider-bg-hover="var( --thermal-slate )"
                slider-bg-fill="${this.palette.gradient}"

                pointer-bg="${this.palette.pixels[0]}"
                pointer2-bg="${this.palette.pixels[ this.palette.pixels.length - 1 ]}"
                
                generate-labels="true"
                
            ></tc-range-slider>

        </div>

        `;
    }

}