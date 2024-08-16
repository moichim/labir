import { PropertyValueMap, css, html, nothing } from "lit";

import { customElement, property, state } from "lit/decorators.js";
import { ThermalRegistry } from "@labir/core";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";

@customElement("histogram-element")
export class HistogramElement extends RegistryConsumer {


    @state()
    protected histogram: ThermalRegistry["histogram"]["value"] = [];

    @property({ type: Boolean, reflect: true })
    public interactive: boolean = false;

    @property( { type: String, reflect: true } )
    public height: string = "calc( var( --thermal-gap ) * 1.5 )";

    protected getClassName(): string {
        return "HistogramElement";
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {
        super.firstUpdated( _changedProperties );

        this.registry.histogram.addListener( this.UUID, value => {
            this.histogram = value;
        } );

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.registry.histogram.removeListener( this.UUID );
    }

    static styles = css`

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );

            &.loading {
                .histogram {
                    background: var( --thermal-slate );
                }
            }
        }

        .histogram {
            display: flex;
            width: 100%;
            background:  white;
            // height: calc( var( --thermal-gap ) * 1.5);
        }

        .histogram-bar {
            flex-grow: 1;
            position: relative;
            height: 100%;
        }

        .histogram-bar-inner {
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            background: black;
        }

        .interactive {
            cursor: pointer;
            &:hover {
                opacity: .8;
            }
        }


    `;

    protected renderHistogram(): unknown {
        return html`

            <div class="container ${this.histogram.length > 0 ? "ready" : "loading"} ${this.interactive ? "interactive" : nothing}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map( item => {

                        return html`
                            <div class="histogram-bar">
                                <div style="height: ${item.height}%" class="histogram-bar-inner"></div>
                            </div
                        `;

                    } )}

                </div>

            </div>
        
        `;
    }

    protected render(): unknown {
        if ( this.interactive === false ) {
            return this.renderHistogram();
        }
        return html`
            <thermal-dialog label="Histogram">

                <div slot="invoker">
                    ${this.renderHistogram()}
                </div>

                <div slot="content">
                    <div style="margin: 0 calc( var( --thermal-gap ) * -0.5 )">
                        <thermal-ticks placement="bottom"></thermal-ticks>
                        <thermal-range></thermal-range>
                    </div>
                    <thermal-histogram slot="pre" height="400px"></thermal-histogram>
                    
                    <div style="margin: 0 calc( var( --thermal-gap ) * -0.5 )">
                        <thermal-ticks></thermal-ticks>
                    </div>
                </div>
            
            </thermal-dialog>
        `
    }
}