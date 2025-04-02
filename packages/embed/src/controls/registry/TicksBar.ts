import { ThermalMinmaxOrUndefined, ThermalRangeOrUndefined } from "@labir/core";
import { consume } from "@lit/context";
import { css, html, nothing, PropertyValueMap } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { registryHighlightContext } from "../../hierarchy/providers/context/RegistryContext";

type TickType = {
    percentage: number,
    value: number
}

@customElement("registry-ticks-bar")
export class TicksElement extends RegistryConsumer {

    static TICK_WIDTH = 40;
    static TICK_FIXED = 2;

    protected ticksRef: Ref<HTMLDivElement> = createRef();

    protected observer!: ResizeObserver;

    @consume({context: registryHighlightContext, subscribe: true})
    protected highlight?: ThermalRangeOrUndefined;

    @property({ type: String, reflect: true })
    public placement: string = "top";

    @state()
    protected minmax: ThermalMinmaxOrUndefined = undefined;

    @state()
    protected ticks: TickType[] = [];

    protected containerRef: Ref<HTMLElement> = createRef();

    connectedCallback(): void {

        super.connectedCallback();

        this.registry.minmax.addListener(this.UUID, value => {
            this.minmax = value;
            if ( this.ticksRef.value ) {
                this.calculateTicks(value, this.ticksRef.value.clientWidth);
            }
        });

    }

    protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {

        super.firstUpdated(_changedProperties);

        this.observer = new ResizeObserver(entries => {

            const entry = entries[0];
            this.calculateTicks(this.minmax, entry.contentRect.width);

        });

        this.observer.observe(this.ticksRef.value!);

    }


    protected clamp(input: number, min: number, max: number): number {
        return input < min ? min : input > max ? max : input;
    }


    protected map(current: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
        const mapped: number = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
        return this.clamp(mapped, out_min, out_max);
    }


    protected calculateTicks(minmax: ThermalMinmaxOrUndefined, width: number) {
        if (minmax === undefined) {
            this.ticks = [];
        } else {

            const ticksPercentageBuffer = [0];

            const numTicks = Math.floor(width / TicksElement.TICK_WIDTH) - 2;

            const step = 100 / numTicks;

            for (let i = 1; i < numTicks; i++) {

                ticksPercentageBuffer.push(step * i);

            }

            ticksPercentageBuffer.push(100);

            this.ticks = ticksPercentageBuffer.map(percent => this.calculateOneTick(minmax, percent) as TickType).filter(value => value !== undefined);

        }
    }


    protected calculateOneTick(
        minmax: ThermalMinmaxOrUndefined,
        percent: number

    ) {
        if (minmax === undefined) {
            return undefined;
        } else {
            const value = this.map(percent, 0, 100, minmax.min, minmax.max);
            return {
                percentage: percent,
                value: value
            } as TickType
        }

    }


    static styles = css`

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );
            height: var( --thermal-fs );
            
        }

        .skeleton {
            height: 100%;
            background: var( --thermal-slate-light );
        }

        .ready {
            .skeleton {
                display: none;
            }
        }

        .ticks {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            width: 100%;
            position: relative;
            color: var( --thermal-slate-dark );
            font-family: sans-serif;
            height: 1em;
        }

        .tick {

            position: relative;

            &::before {
                display: block;
                content: "";
                width: 1px;
                height: 10px;
                background: var(--thermal-slate);
            }
        
        }

        .placement-top {
            margin-top: 10x;
            padding-bottom: var( --thermal-gap );
            .tick {
                &::before {
                    background: var(--thermal-slate);
                }
            }
        }

        .placement-bottom {
            .tick {
                &::before {
                    display: block;
                    content: "";
                    width: 1px;
                    height: 5px;
                    background: currentcolor;

                    position: absolute;
                    top: 12px;
                }
            }
        }

        .tick-value {

            position: absolute;
            width: 40px;
            left: -20px;
            text-align: center;
        
        }


    `;


    protected render(): unknown {

        let highlightLeft: number | undefined = undefined;
        let highlightWidth: number | undefined = undefined;

        if ( this.registry.minmax.value && this.highlight ) {

            const min = this.registry.minmax.value.min;
            const minmax = this.registry.minmax.value.max - min;

            highlightLeft = (this.highlight.from - min) / minmax * 100;
            highlightWidth = (this.highlight.to - min) / minmax * 100 - highlightLeft;

        }

        return html`

            <div class="container ${this.minmax !== undefined ? "ready" : "loading"} placement-${this.placement}" ${ref(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${ref(this.ticksRef)}>

                    ${highlightLeft !== undefined && highlightWidth !== undefined
                ? html`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${highlightLeft}%; width: ${highlightWidth}%; background-color: var(--thermal-foreground)"></div>`
                : nothing
            }

                    ${this.ticks.map(tick => {
                return html`
                    <div class="tick" >
                        <div class="tick-value">
                            ${tick.value.toFixed(TicksElement.TICK_FIXED)}
                        </div>
                    </div>
                        `;
            })}

                </div>                

            </div>
        
        `;
    }

}