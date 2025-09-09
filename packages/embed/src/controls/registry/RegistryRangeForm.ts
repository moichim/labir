import { customElement, state } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { css, CSSResultGroup, html, PropertyValues } from "lit";
import { ThermalMinmaxOrUndefined, ThermalRangeOrUndefined } from "@labir/core";

@customElement("registry-range-form")
export class RegistryRangeForm extends RegistryConsumer {


    @state()
    protected min: number | undefined;

    @state()
    protected max: number | undefined;

    @state()
    protected from: number | undefined;
    
    @state()
    protected to: number | undefined;

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.hydrate();
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.dehydrate();
    }

    private hydrate(): void {
        if (this.registry === undefined) {
            return;
        }

        // Update initial state
        this.recieveMinmax( this.registry.minmax.value );
        this.recieveRange( this.registry.range.value );

        // Register internal listeners
        this.registry.minmax.addListener(this.UUID, this.recieveMinmax.bind(this));
        this.registry.range.addListener(this.UUID, this.recieveRange.bind(this));
    }

    private dehydrate(): void {
        if (this.registry === undefined) {
            return;
        }

        // Remove listeners
        this.registry.minmax.removeListener(this.UUID);
        this.registry.range.removeListener(this.UUID);
    }

    private recieveMinmax( value: ThermalMinmaxOrUndefined ): void {
        if ( value ) {
            if (this.min !== value.min ) this.min = value.min;
            if (this.max !== value.max ) this.max = value.max;
        } else {
            this.min = undefined;
            this.max = undefined;
            this.from = undefined;
            this.to = undefined;
        }
    }

    private recieveRange( value: ThermalRangeOrUndefined ): void {
        if ( value ) {
            if (this.from !== value.from ) this.from = value.from;
            if (this.to !== value.to ) this.to = value.to;
        } else {
            this.from = undefined;
            this.to = undefined;
        }
    }

    private updateFrom( value: number | undefined ): void {
        if ( this.registry && value !== undefined && this.to !== undefined) {
            this.from = value;
            this.registry.range.imposeRange( { from: value, to: this.to } );
        }
    }

    private updateTo( value: number | undefined ): void {
        if ( this.registry && value !== undefined && this.from !== undefined) {
            this.to = value;
            this.registry.range.imposeRange( { from: this.from, to: value } );
        }
    }


    static styles?: CSSResultGroup | undefined = css`

        :host {
            font-family: inherit;
            font-style: normal;
            font-size: var(--font-size);
            display: flex;
            flex-wrap: no-wrap;
            gap: .5em;
        }

        .input-group {
            position: relative;
        }
    
        .input-group-inner {
            display: flex;
            align-items: stretch;
            height: 2em;
            position: relative;
            z-index: 1;
        }


        .input-group-outer {
            position: absolute;
            z-index: 0;
            text-align: center;
            width: 100%;

            font-size: .75em;
            height: 2em;
            background: var( --thermal-slate-light );

            opacity: 0;

            transition: all .25s ease-in-out;

            box-sizing: border-box;

            &.input-group-outer__top {
                top: 3px;
                padding-bottom: .5em;
                border-radius: var( --thermal-radius ) var( --thermal-radius ) 0 0;
            }

            &.input-group-outer__bottom {
                bottom: 3px;
                padding-top: .5em;
                border-radius: 0 0 var( --thermal-radius ) var( --thermal-radius );
            }
        }

        .input-group:focus-within .input-group-outer {

            opacity: 1;

            &.input-group-outer__top {
                top: -1.5em;
            }

            &.input-group-outer__bottom {
                bottom: -1.5em;
            }
        }

        .input-group button,
        .input-group aside,
        .input-group input {

            border: 0;
            border-top: 1px solid var( --thermal-slate );
            border-bottom: 1px solid var( --thermal-slate );

            color: var( --thermal-foreground );
            background: var( --thermal-background );
            
            font-family: inherit;
            font-size: 1em;
            line-height: 1em;

            transition: all .25s ease-in-out;
        
        }

        .input-group-inner input, 
        .input-group-inner aside {
            display: block;
            vertical-align: middle;
        }

        .input-group-inner aside {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: .3em;
        }

        .input-group-inner input {

            outline: 0;
            padding: 0;
            margin: 0;

            text-align: right;

            width: 3.5em;

            &:hover,
            &:focus {
                border-top-color: var( --thermal-primary );
                border-bottom-color: var( --thermal-primary );
                color: var( --thermal-primary );
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
            }

            &[type=number] {
                -moz-appearance:textfield; /* Firefox */
            }
            
        }

        .input-group-inner > button {

            cursor: pointer;

            outline: 0;

            &.left {
                border-right: 1px solid var( --thermal-slate-light );
            }

            &.right {
                border-left: 1px solid var( --thermal-slate-light );
            }

            &:hover,
            &:focus {
                background: var( --thermal-slate-light );
            }

            &:first-child {
                border-left: 1px solid var( --thermal-slate );
                border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );
            }

            &:last-child {
                border-right: 1px solid var( --thermal-slate );
                border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;
            }
        
        }
    
    `;

    protected renderInput(
        name: string,
        label: string,
        step: number,
        onChange: (value: number | null) => void,
        value: number | undefined,
        mayMin: number | undefined,
        mayMax: number | undefined,
        before: undefined | unknown = undefined,
        after: undefined | unknown = undefined,
        
    ): unknown {
        return html`
        <div class="input-group">
            <div class="input-group-outer input-group-outer__top">Step</div>
            <div class="input-group-inner">
                ${before}
                <button class="left">-</button>
                <input
                    value=${value?.toFixed(2) ?? ""}
                    type="number"
                ></input>
                <aside>°C</aside>
                <button class="right">+</button>
                ${after}
            </div>
            <div class="input-group-outer input-group-outer__bottom">Zaokrouhlit</div>
        </div>
        `;
    }

    protected render(): unknown {
        return html`
        ${this.renderInput(
            "from",
            "Od",
            0.01,
            (value) => this.updateFrom(value === null ? undefined : value),
            this.from,
            undefined,
            undefined,
            html`<button class="left">--</button>`
        )}
        ${this.renderInput(
            "to",
            "Do",
            0.01,
            (value) => this.updateTo(value === null ? undefined : value),
            this.to,
            undefined,
            undefined,
            undefined,
            html`<button class="right">++</button>`
        )}
        `;
    }

}