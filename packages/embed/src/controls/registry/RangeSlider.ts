import { consume } from "@lit/context";
import { PropertyValues, css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import 'toolcool-range-slider';
import { RangeSlider } from "toolcool-range-slider";
import "../../../node_modules/toolcool-range-slider/src/plugins/moving-tooltip-plugin";
import "toolcool-range-slider/dist/plugins/tcrs-marks.min.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { ManagerPaletteContext, managerPaletteContext } from "../../hierarchy/providers/context/ManagerContext";
import { registryMaxContext, registryMinContext, registryRangeFromContext, registryRangeToContext } from "../../hierarchy/providers/context/RegistryContext";
import { loadingContext } from "../../hierarchy/providers/context/FileContexts";





@customElement("registry-range-slider")
export class RangeSliderElement extends RegistryConsumer {

    @consume({ context: registryMinContext, subscribe: true })
    @state()
    public min?: number;

    @consume({ context: registryMaxContext, subscribe: true })
    @state()
    public max?: number;

    @consume({ context: registryRangeFromContext, subscribe: true })
    @state()
    public from?: number;

    @consume({ context: registryRangeToContext, subscribe: true })
    @state()
    public to?: number;

    @state()
    protected hasInitialValues: boolean = false;

    @consume({ context: managerPaletteContext, subscribe: true })
    @state()
    protected palette!: ManagerPaletteContext;

    @state()
    protected sliderRef: Ref<RangeSlider> = createRef();

    @state()
    protected initialised: boolean = false;

    @state()
    @consume({context: loadingContext, subscribe: true})
    protected loading: boolean = false;

    protected getClassName(): string {
        return "RangeSliderElement";
    }

    connectedCallback(): void {
        super.connectedCallback();

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.registry.range.removeListener(this.UUID);
        this.registry.minmax.removeListener(this.UUID);
        this.initialised = false;
    }

    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate(_changedProperties);

        if ("from" in _changedProperties && "to" in _changedProperties) {
            this.registry.range.imposeRange({
                from: _changedProperties.from as number,
                to: _changedProperties.to as number
            });
        }
    }

    protected getSlider() {
        return this.renderRoot?.querySelector("tc-range-slider");
    }

    public sliderDownListener(event: Event) {
        const evt = event as CustomEvent;
        const detail = evt.detail as { value1: number, value2: number };

        this.from = detail.value1;
        this.to = detail.value2;
    }


    public sliderUpListener() {
        if (this.from !== undefined && this.to !== undefined)
            this.registry.range.imposeRange({ from: this.from, to: this.to });
    }

    public updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        // Initialise the slider
        if ( _changedProperties.has("loading") && this.loading === false ) {
            this.log("should initialise now");
            this.initialiseSlider();
        }

        

    }


    /**
     * Create the initial listeners and bind the CSS to the slider
     */
    protected initialiseSlider() {

        this.initialised = true;

        // The main functionality needs to be deferred, since the component is rendered in the next tick
        setTimeout( () => {

            const slider = this.sliderRef.value;

            if (slider) {
                slider.addCSS(`
                    .tooltip {
                        font-size: 12px;
                    }
                    .pointer-shape {
                        border-radius: 0;
                        width: 10px;
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
    
                slider.addEventListener("onMouseDown", event => {
                    this.log(event);
                });
            }

        }, 0);


        this.registry.range.addListener(this.UUID, value => {
            if (value) {

                this.log( "přišla hodnota", value );

                if ( this.from !== undefined && this.to !== undefined ) {

                    // If new min is larger the existing max
                    if ( this.max! < value.from ) {
                        this.to = value.to;
                        this.from = value.from;
                    } 
                    // If new max is smaller than existing min
                    else {
                        this.from = value.from;
                        this.to = value.to;
                    }

                } else {
                    this.from = value.from;
                    this.to = value.to;
                }

                // Set the values the hard way to the component - in case their setting is somehow not working in the component itself

                if ( this.sliderRef.value ) {

                    if ( value.from && this.from ) {
                        this.sliderRef.value.setAttribute(  "value1", this.from.toString() );
                    }
        
                    if ( value.to && this.to ) {
                        this.sliderRef.value.setAttribute(  "value2", this.to.toString() );
                    }
                }

            }
        });
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
                height: calc( var( --thermal-fs ) * .9 );
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

        if ( this.loading === true ) {
            return html`<div class="container loading">
                <div class"skeleton"></div>    
            </div>`;
        }

        return html`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${ref(this.sliderRef)}
                slider-width="100%"
                slider-height="15px"
                animate-onclick="false"
                min="${this.min}"
                max="${this.max}"

                value1="${this.from}"
                value2="${this.to}"

                slider-radius="0"

                slider-bg="var( --thermal-slate )"
                slider-bg-hover="var( --thermal-slate )"
                slider-bg-fill="${this.palette.data.gradient}"
                pointer-shadow="0 0 5px var(--thermal-primary)"
                pointer-shadow-hover="0 0 10px var(--thermal-primary)"
                pointer-shadow-hover="0 0 10px var(--thermal-primary)"

                pointer-border="2px solid var(--thermal-primary)"
                pointer-border-hover="2px solid var(--thermal-primary)"
                pointer-border-focus="2px solid var(--thermal-primary)"
                pointer-bg="${this.palette.data.pixels[0]}"
                
                pointer2-border="2px solid var(--thermal-primary)"
                pointer2-border-hover="2px solid var(--thermal-primary)"
                pointer2-border-focus="2px solid var(--thermal-primary)"
                pointer2-bg="${this.palette.data.pixels[this.palette.data.pixels.length - 1]}"
                
                generate-labels="true"

                moving-tooltip="true"
                moving-tooltip-distance-to-pointer="-30"
                moving-tooltip-width="40"
                moving-tooltip-height="20"
                moving-tooltip-bg="var(--thermal-slate-dark)"
                moving-tooltip-text-color="var(--thermal-background)"
                
            ></tc-range-slider>

        </div>

        <slot></slot>

        `;
    }

}