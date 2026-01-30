import { directive, Directive } from "lit/directive.js";
import { AbstractSingleVideoExport } from "../AbstractSingleVideoExport";
import { css, html } from "lit";
import { slotOrNothing } from "../../../../connection/controllers/apps/directives/SlotOrNothing";

export class SingleVideoExportConfigDirective extends Directive {

    private renderRadio(
        label: string,
        checked: boolean,
        onChange: ( value: boolean ) => void
    ): unknown {
        return html`<thermal-radio
            .checked=${checked}
            .onChange=${onChange}
        >${label}</thermal-radio>`;
    }

    private renderDropdown(
        value: string,
        options: string[],
        onChange: ( value: string ) => void
    ): unknown {

        const elements: unknown[] = options.map( option => html`<thermal-btn
            slot="option"
            @click=${() => onChange( option )}
        >${option}</thermal-btn>` );

        return html`<thermal-dropdown>
            <span slot="invoker">${value}</span>
            ${elements}
        </thermal-dropdown>`;

    }

    private renderConfigHeader(
        element: AbstractSingleVideoExport
    ): unknown {

        const slots: unknown[] = [];

        const thermalScale: unknown[] = [
            html`<registry-palette-dropdown></registry-palette-dropdown>`,
            html`<registry-range-form></registry-range-form>`
        ];

        slots.push( slotOrNothing( "thermalscale", thermalScale ) );

        const components: unknown[] = [
            this.renderRadio(
                "Histogram", 
                element.renderProps.hasHistogram, 
                element.setHasHistogram.bind(element) 
            ),
            this.renderRadio(
                "Thermal Scale", 
                element.renderProps.hasThermalScale,
                element.setHasThermalScale.bind(element)
            ),
            this.renderRadio(
                "Analysis", 
                element.renderProps.hasAnalysis,
                element.setHasAnalysis.bind(element)
            ),
            this.renderRadio(
                "Timeline", 
                element.renderProps.hasTimeline,
                element.setHasTimeline.bind(element)
            )
        ];

        slots.push( slotOrNothing( "config", components ) );

        const appearance: unknown[] = [
            this.renderRadio(
                "Is Vertical",
                element.renderProps.isVertical,
                element.setIsVertical.bind(element)
            ),
            this.renderDropdown(
                element.renderProps.skin,
                [ "light", "dark", "solarized" ],
                ( value: string ) => element.setSkin( value as any )
            )
        ];

        slots.push( slotOrNothing( "display", appearance ) );





        return slots;

    }

    private  renderExportButton(
        element: AbstractSingleVideoExport
    ): unknown {

        return html`<thermal-btn
            variant="primary"
            size="lg"
        >Export</thermal-btn>`;

    }

    public static readonly styles = css`
    
        .export-bar {

            width: 100%;

            display: grid;
            grid-template-columns: 1fr auto;
            gap: 1em;

            .export-bar-part {
            }

            .export-bar-part--config {
                display: flex;
                flex-wrap: wrap;
                gap: 1em 2em;

                background: var( --thermal-background );
                padding: 1em;

                thermal-slot {
                    box-sizing: border-box;
                }
            }

            .export-bar-part--actions {
            }
        
        
        }
    
    `;


    public render( element: AbstractSingleVideoExport ): unknown {
        
        return html`<div class="export-bar">

            <div class="export-bar-part export-bar-part--config">
                ${this.renderConfigHeader( element )}
            </div>

            <div class="export-bar-part export-bar-part--actions">
                ${this.renderExportButton( element )}
            </div>
        
        </div>`;

    }

}

export const exportConfigDirective = directive( SingleVideoExportConfigDirective );