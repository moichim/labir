import { ThermalPaletteType } from "@labir/core";
import { PropertyValueMap, PropertyValues, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import 'toolcool-range-slider';
import { RangeSlider } from "toolcool-range-slider";
import "toolcool-range-slider/dist/plugins/tcrs-marks.min.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";



@customElement("registry-range-slider")
export class RangeSliderElement extends RegistryConsumer {

    @property({ type: Number, reflect: false })
    public min?: number;

    @property({ type: Number, reflect: false })
    public max?: number;

    @property({ type: Number, reflect: true })
    public from?: number;

    @property({ type: Number, reflect: true })
    public to?: number;

    @state()
    protected hasFixedFrom: boolean = false;

    @state()
    protected hasFixedTo: boolean = false;

    @state()
    protected palette!: ThermalPaletteType;

    @state()
    protected sliderRef: Ref<RangeSlider> = createRef();

    @state()
    protected initialised: boolean = false;

    protected getClassName(): string {
        return "RangeSliderElement";
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.palette = this.registry.palette.currentPalette;

        this.registry.palette.addListener( this.UUID, () => {
            this.palette = this.registry.palette.currentPalette;
        } );

        this.registry.minmax.addListener(this.UUID, value => {
            if (value) {
                this.min = value.min;
                this.max = value.max;
            }
        });

        this.registry.range.addListener(this.UUID, value => {
            if (value) {
                    this.from = value.from;
                    this.to = value.to;
            }
        });

    }

    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate( _changedProperties );

        if ( "from" in _changedProperties && "to" in _changedProperties ) {

            this.registry.range.setFixedRange( {
                from: _changedProperties.from as number, 
                to: _changedProperties.to as number
            } );
        }
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {

        super.firstUpdated(_changedProperties);

        // Set the fixed value if necessary
        if ( this.from && this.to ) {
            this.registry.range.setFixedRange( {
                from: this.from,
                to: this.to
            } );
        }


    }

    public sliderDownListener(event: Event) {
        const evt = event as CustomEvent;
        const detail = evt.detail as { value1: number, value2: number };

        this.from = detail.value1;
        this.to = detail.value2;
    }


    public sliderUpListener() {
        if (this.from !== undefined && this.to !== undefined)
            this.registry.range.setFixedRange({ from: this.from, to: this.to });
    }

    public updated(_changedProperties: PropertyValues): void {
        super.updated( _changedProperties );

        const slider = this.sliderRef.value;

        if ( slider && this.initialised === false ) {
            this.initialised = true;
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
                this.registry.range.setFixedRange({ from: this.from, to: this.to });

        });
        }

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

        if ( this.canRanderSlider() === false ) {
            return html`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `;
        }

        return html`

        <div class="container ready">

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