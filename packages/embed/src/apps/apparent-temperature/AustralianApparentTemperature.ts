import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { createRef, Ref,ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("apparent-temperature-aat")
export class AustralianApparentTemperature extends BaseElement {

    tRef: Ref<HTMLInputElement> = createRef();
    vRef: Ref<HTMLInputElement> = createRef();
    haRef: Ref<HTMLInputElement> = createRef();

    /** Air temperature in degree celsius */
    @property({ type: Number, reflect: true, attribute: true })
    public t?: number;

    /** Wind speed in m/s */
    @property({ type: Number, reflect: true, attribute: true })
    public v?: number;

    /** Air humidity in percent */
    @property({ type: Number, reflect: true, attribute: true })
    public ha?: number;

    /** Result apparent temperature */
    @state()
    protected ta?: number;



    


    protected calculateE(
        h: number,
        t: number
    ) {

        return h * (6.105 / 100) * Math.exp(17.27 * t / (237.7 + t));

    }

    protected calculateTa(
        t: number,
        e: number,
        v: number
    ) {
        return t + (0.33 * e) - (0.7 * v) - 4;
    }


    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        if ( this.tRef.value ) {
            this.tRef.value.addEventListener( "change", event => {

                const target = event.target as HTMLInputElement;
                const value = parseFloat( target.value );

                if ( ! isNaN( value ) ) {

                    this.t = Math.min( 100, Math.max( -275.4, value ) );

                }

            } )
        }

        if ( this.haRef.value ) {
            this.haRef.value.addEventListener( "change", event => {

                const target = event.target as HTMLInputElement;
                const value = parseFloat( target.value );

                if ( ! isNaN( value ) ) {

                    this.ha = Math.min( 100, Math.max( 0, value ) );

                }

            } )
        }

        if ( this.vRef.value ) {
            this.vRef.value.addEventListener( "change", event => {

                const target = event.target as HTMLInputElement;
                const value = parseFloat( target.value );

                if ( ! isNaN( value ) ) {

                    this.v = Math.max( 0, value );

                }

            } )
        }
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated( _changedProperties );

        if ( this.t !== undefined && this.ha !== undefined && this.v !== undefined ) {

            const e = this.calculateE( this.ha, this.t );
            const ta = this.calculateTa(this.t, e, this.v);

            this.ta = ta;

        } 
        
        if ( this.t === undefined && this.tRef.value) {
            this.tRef.value.value = "";
        }

        if ( this.ha === undefined && this.haRef.value) {
            this.haRef.value.value = "";
        }

        if ( this.v === undefined && this.vRef.value) {
            this.vRef.value.value = "";
        }

    }


    static styles?: CSSResultGroup | undefined = css`

        .table {
            display: table;
            width: 100%;
            border-collapse: collapse;
        }
    
        .field {

            width: 100%;
            display: table-row;

        }

        .column {
            display: table-cell;
            padding: calc( var(--thermal-gap) * .5 );
        }

        .column__label {
            text-align: right;
        }

        .column__value {
        
        }

        .input_wrapper {

            background: var( --thermal-background );

            width: 200px;
            padding: calc( var( --thermal-gap ) / 2 );

            border-radius: var( --thermal-radius );
        
        }

        input {

            font-size: var(--thermal-fs);
            width: 150px;
            text-align: right;
            border: 0;
            border-bottom: 1px solid var( --thermal-slate-light );

            -moz-appearance: textfield;

            &:focus {
                outline: 0;
                border-bottom: 1px solid var( --thermal-primary );
            }
        
        }



        .result {

            padding: calc(var(--thermal-gap) * .7);
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );


            text-align: center;

            & > p {
                margin: 0;
                padding: calc( var( --thermal-gap ) * .25 );
            }

        }

        .result_value {
            font-weight: bold;
            font-size: calc( var(--thermal-fs) * 1.2 )
        }

        .result_label {
        }

        .result_comment {
            font-size: calc( var(--thermal-fs) * .8 )
        }


    `;


    protected renderNumberField(
        inputRef: Ref<HTMLInputElement>,
        id: string,
        label: string,
        unit: string,
        value?: number,
        min?: number,
        max?: number,
        step?: number,
        hint?: string
    ) {

        return html`
            <div class="field">

                <div class="column column__label">
                    <label for=${id}>
                        ${label}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${ref(inputRef)} 
                            id=${id}
                            name=${id}
                            value=${ifDefined( value )}
                            min=${ifDefined( min )}
                            max=${ifDefined( max )}
                            step=${ifDefined( step )}
                            type="number"
                        ></input>
                        <span>${unit}</span>
                    </div>

                    ${hint
                        ? html`<label for=${id}>${hint}</label>`
                        : nothing
                    }

                </div>

            </div>

            
        `;

    }

    protected renderResult(
        apparentTemperature: number,
        temperature: number
    ) {

        const diff = apparentTemperature - temperature;

        const prop = {
            diff: Math.abs( diff ).toFixed(2),
            t: temperature
        };

        const comment = diff < 0
            ? t( T.youfeelcolder, prop )
            : t( T.youfeelwarmer, prop );

        const result = apparentTemperature.toFixed( 2 );

        const color = diff < 0
            ? "blue"
            : "red"

        return html`<main class="result">

            <p class="result_label">${t(T.apparenttemperature)}</p>

            <p class="result_value">
                ${result} °C
            </p>

            <p class="result_comment">${comment}</p>
        
        </main>`;


    }


    protected render() {
        return html`
            <thermal-app label=${t(T.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${t(T.info)}>
                    <thermal-button slot="invoker">${t(T.info)}</thermal-button>
                    <div slot="content">
                        ${unsafeHTML( t(T.apparenttemperaturehint, {href: "https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t !== undefined || this.v !== undefined || this.ha !== undefined 
                    ? html`<thermal-button @click=${() => {
                        this.t = undefined;
                        this.ha = undefined;
                        this.ta = undefined;
                        this.v = undefined;
                    }}>Reset</thermal-button>`
                    : nothing
                }

                </thermal-bar>

                </div>

                <section class="table">

                ${ this.renderNumberField(
                    this.tRef,
                    this.UUID  + "aat_air_temperature",
                    t( T.airtemperature ),
                    "°C",
                    this.t,
                    -273.15,
                    100,
                    0.1
                ) }

                ${this.renderNumberField(
                    this.vRef,
                    this.UUID + "aat_wind_speed",
                    t( T.windspeed ),
                    "m/s2",
                    this.v,
                    0,
                    undefined,
                    0.1
                )}

                ${this.renderNumberField(
                    this.haRef,
                    this.UUID + "aat_air_humidity",
                    t( T.relativeairhumidity ),
                    "%",
                    this.ha,
                    0,
                    100,
                    0.1
                )}

                </section>

                ${this.ta !== undefined &&  this.t !== undefined
                    ? this.renderResult( this.ta, this.t )
                    : nothing
                }
                

            </thermal-app>
        `
    }





}