import { css, html, PropertyValueMap } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ThermalMinmaxOrUndefined } from "@labir/core";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";

type TickType = {
    percentage: number,
    value: number
}

@customElement("ticks-bar")
export class TicksElement extends RegistryConsumer {

    static TICK_WIDTH = 40;
    static TICK_FIXED = 2;

    protected ticksRef: Ref<HTMLDivElement> = createRef();

    protected observer!: ResizeObserver;

    @property( {type: String, reflect: true} )
    public placement: string = "top";

    @state()
    protected minmax: ThermalMinmaxOrUndefined = undefined;

    @state()
    protected ticks: TickType[] = [];

    connectedCallback(): void {
        super.connectedCallback();

        // this.log( this.registry.minmax );

        this.registry.minmax.addListener( this.UUID, value => {

            // console.log( "minmax updated", value );
            this.minmax = value;
            this.calculateTicks( value, this.ticksRef.value!.clientWidth );
        } );

    }

    protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {

        super.firstUpdated( _changedProperties );

        this.observer = new ResizeObserver( entries => {

            const entry = entries[0];
            this.calculateTicks( this.minmax, entry.contentRect.width );

        } );

        this.observer.observe( this.ticksRef.value! );

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

            const ticksPercentageBuffer = [ 0 ];

            const numTicks = Math.floor( width / TicksElement.TICK_WIDTH ) - 2;

            const step = 100 / numTicks;

            for ( let i = 1; i<numTicks;i++ ) {

                ticksPercentageBuffer.push( step * i );

            }

            ticksPercentageBuffer.push( 100 );

            this.ticks = ticksPercentageBuffer.map( percent => this.calculateOneTick( minmax, percent ) as TickType ).filter( value => value !== undefined );

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
            background: var( --thermal-slate );
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
        }

        .tick {

            position: relative;

            &::before {
                display: block;
                content: "";
                width: 1px;
                height: 5px;
                //background: currentcolor;
            }
        
        }

        .placement-top {
            margin-bottom: calc( var( --thermal-gap ) * .5 );
            .tick {
                &::before {
                    background: currentcolor;
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

        return html`

            <div class="container ${this.minmax !== undefined ? "ready" : "loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${ref( this.ticksRef )}>

                    ${this.ticks.map( tick => {
                        return html`
                            <div class="tick" >
                                <div class="tick-value">
                                ${tick.value.toFixed( TicksElement.TICK_FIXED )}
                                </div>
                            </div>
                        `;
                    } )}

                </div>                

            </div>
        
        `;
    }

}