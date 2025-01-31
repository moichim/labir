import { PropertyValueMap, css, html, nothing } from "lit";

import { customElement, property, state } from "lit/decorators.js";
import { ThermalRegistry } from "@labir/core";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { booleanConverter } from "../../utils/booleanMapper";

@customElement("registry-histogram")
export class HistogramElement extends RegistryConsumer {


    @state()
    protected histogram: ThermalRegistry["histogram"]["value"] = [];

    @property({ type: Boolean, reflect: true })
    public interactive: boolean = false;

    @property( { type: String, reflect: true } )
    public height: string = "calc( var( --thermal-gap ) * 1.5 )";

    @property({type: String, reflect: true })
    public heightExpanded: string = "400px";

    @property({type: Boolean, reflect: true, converter: booleanConverter(false)})
    public expandable: boolean = false;

    @state()
    protected expanded: boolean = false;

    protected tourableElementRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElementRef.value;
    }

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
            background:  var(--thermal-slate-light);
            // height: calc( var( --thermal-gap ) * 1.5);

            &.expandable {
                transition: all .2s ease-in-out;
                cursor: pointer;
                &:hover {
                    background: var(--thermal-background);
                }
            }
        }

        .histogram-bar {
            flex-grow: 1;
            position: relative;
            height: 100%;

            &:hover {
                .histogram-bar-inner {
                    background: var(--thermal-foreground);
                }
            }
        }

        .histogram-bar-inner {
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            background: var(--thermal-slate-dark);
            transition: height .5s ease-in-out;
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

            <div class="container ${this.histogram.length > 0 ? "ready" : "loading"} ${this.interactive ? "interactive" : nothing}" ${ref(this.tourableElementRef)}>

                <div class="histogram ${this.expandable === true ? "expandable" : ""}" style="height: ${this.expanded ? this.heightExpanded: this.height}" part="bg" @click=${() => {
                    if ( this.expandable === true ) {
                        this.expanded = !this.expanded;
                    }
                }}>

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