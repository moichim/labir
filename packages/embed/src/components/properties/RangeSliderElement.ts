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
        }

        .loading {

            tc-range-slider {
                display: none;
            }
        }

        .ready {
        }
    
    `;

    protected render(): unknown {
        return html`

        <div class="container ${this.canRanderSlider() ? "ready" : "loading"}">

            <tc-range-slider 
                ${ref(this.sliderRef)}
                slider-width="100%"
                slider-height="0.9rem"
                animate-onclick="false"
                min="${this.min}"
                max="${this.max}"

                value1="${this.from}"
                value2="${this.to}"

                slider-bg-fill="${this.palette.gradient}"
                
                generate-labels="true"
                
            ></tc-range-slider>

        </div>

        `;
    }

}