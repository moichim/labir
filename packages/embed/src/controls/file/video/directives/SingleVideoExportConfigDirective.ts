import { directive, Directive } from "lit/directive.js";
import { AbstractSingleVideoExport } from "../AbstractSingleVideoExport";
import { css, html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { slotOrNothing } from "../../../../connection/controllers/apps/directives/SlotOrNothing";
import { Quality, QUALITY_HIGH, QUALITY_LOW, QUALITY_MEDIUM, QUALITY_VERY_HIGH, QUALITY_VERY_LOW } from "mediabunny";

export class SingleVideoExportConfigDirective extends Directive {

    private renderRadio(
        label: string,
        checked: boolean,
        onChange: (value: boolean) => void
    ): unknown {
        return html`<thermal-radio
            .checked=${checked}
            .onChange=${onChange}
        >${label}</thermal-radio>`;
    }

    private renderText(
        label: string,
        suffix: string,
        value: string,
        onChange: (value: string) => void
    ): unknown {
        return html`<div class="export-config-field export-config-field--text">

            <div class="export-config-field--label">
                <label>${label}</label>
            </div>

            <div class="export-config-field--value">

                <div class="">
                    <input
                        type="text"
                        .value=${value}
                        @input=${(event: InputEvent) => {
                            const target = event.target as HTMLInputElement;
                            onChange(target.value);
                        }}
                    />
                    <span class="unit">${suffix}</span>
                </div>

            </div>

        </div>`;
    }

    private renderDropdown(
        value: string,
        options: string[],
        onChange: (value: string) => void
    ): unknown {

        const elements: unknown[] = options.map(option => html`<thermal-btn
            slot="option"
            @click=${() => onChange(option)}
        >${option}</thermal-btn>`);

        return html`<thermal-dropdown>
            <span slot="invoker">${value}</span>
            ${elements}
        </thermal-dropdown>`;

    }

    private renderNumber(
        label: string,
        unit: string,
        value: number,
        onChange: (value: number) => void,
        min?: number,
        max?: number,
        step?: number
    ): unknown {
        return html`<div class="export-config-field">

            <div class="export-config-field--label">
                <label>${label}</label>
            </div>

            <div class="export-config-field--value">

                <div class="">
                    <input
                        type="number"
                        .value=${value === undefined || value === null ? "" : String(value)}
                        min=${ifDefined(min)}
                        max=${ifDefined(max)}
                        step=${ifDefined(step)}
                        @input=${(event: InputEvent) => {
                const target = event.target as HTMLInputElement;
                const raw = target.value.trim();
                if (raw === "") {
                    // empty - signal with NaN
                    onChange(NaN);
                    return;
                }
                let num = parseFloat(raw);
                if (min !== undefined && !isNaN(num) && num < min) num = min;
                if (max !== undefined && !isNaN(num) && num > max) num = max;
                onChange(num);
            }}
                    />
                    <span class="unit">${unit}</span>
                </div>

            </div>

        </div>`;
    }

    private renderConfigHeader(
        element: AbstractSingleVideoExport
    ): unknown {

        const slots: unknown[] = [];

        const thermalScale: unknown[] = [
            html`<registry-palette-dropdown></registry-palette-dropdown>`,
            html`<registry-range-form></registry-range-form>`
        ];

        slots.push(slotOrNothing("thermalscale", thermalScale));

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

        slots.push(slotOrNothing("config", components));

        const appearance: unknown[] = [
            this.renderRadio(
                "Is Vertical",
                element.renderProps.isVertical,
                element.setIsVertical.bind(element)
            ),
            this.renderDropdown(
                element.renderProps.skin,
                ["light", "dark", "solarized"],
                (value: string) => element.setSkin(value as any)
            ),
        ];

        slots.push(slotOrNothing("display", appearance));

        slots.push(
            this.renderNumber(
                "Šírka videa",
                "px",
                element.renderProps.exportFrameWidth,
                element.setExportFrameWidth.bind(element),
                500,
                1920,
                10
            )
        );

        slots.push(
            this.renderNumber(
                "Okraje videa",
                "px",
                element.renderProps.exportFramePadding,
                element.setExportFramePadding.bind(element),
                0,
                100,
                1
            )
        );

        slots.push(
            this.renderNumber(
                "Mezera",
                "px",
                element.renderProps.exportFrameGap,
                element.setExportFrameGap.bind(element),
                0,
                100,
                1
            )
        );

        slots.push(
            this.renderNumber(
                "Výška grafu",
                "px",
                element.renderProps.exportGraphHeight,
                element.setExportGraphHeight.bind(element),
                200,
                700,
                1
            )
        );

        // Název souboru
        slots.push(
            this.renderText(
                "Název souboru",
                ".mp4",
                element.renderProps.fileName,
                element.setFileName.bind(element)
            )
        );

        const options = [
            {
                label: "Velmi vysoká",
                value: QUALITY_VERY_HIGH
            },
            {
                label: "Vysoká",
                value: QUALITY_HIGH
            },
            {
                label: "Střední",
                value: QUALITY_MEDIUM
            },
            {
                label: "Nízká",
                value: QUALITY_LOW
            },
            {
                label: "Velmi nízká",
                value: QUALITY_VERY_LOW
            }
        ];

        const choices = options.map( option => option.label );
        const setter = (label: string) => {
            const found = options.find( o => o.label === label );
            if ( found ) {
                element.setMp4Quality( found.value );
                console.log(found.value);
            }
        }

        const value = options.find( o => o.value === element.renderProps.mp4Quality )?.label ?? "Neznámá";

        const output: unknown[] = [

            this.renderDropdown(
                value,
                choices,
                setter.bind(this)
            )

        ];

        slots.push( slotOrNothing( "file", output ) );




        return slots;

    }

    private renderExportButton(
        element: AbstractSingleVideoExport
    ): unknown {

        return html`<thermal-btn
            variant="primary"
            size="lg"
            @click=${element.record.bind(element)}
        >Export</thermal-btn>`;

    }

    public static readonly styles = css`
    
        .export-bar {

            width: 100%;

            .export-bar-part {
            }

            .export-bar-part--config {
                display: flex;
                flex-wrap: wrap;
                gap: 1em 2em;

                background: var( --thermal-background );
                padding: 1em;

                border-radius: var( --thermal-radius );

                thermal-slot {
                    box-sizing: border-box;
                }
            }

            .export-bar-part--actions {
            }
        

            .export-config-field {

                &:hover,
                &:focus-within {
                    .export-config-field--label {
                        color: var( --thermal-foreground );
                        &::after {
                            background: var( --thermal-foreground );
                        }
                    }
                }
                
                .export-config-field--label {

                    margin: 0px 0px 0.5em;
                    padding: 0px;
                    font-weight: normal;
                    font-size: 0.7em;
                    text-transform: uppercase;
                    color: var(--thermal-slate);
                    display: flex;
                    align-items: center;
                    gap: 0.5em;

                    &::after {
                        content: "";
                        flex-grow: 1;
                        height: 1px;
                        background: var( --thermal-slate-light );
                    }

                }

                .export-config-field--value {

                    input {
                        border: var( --thermal-slate-light ) solid 1px;
                        text-align: right;
                        font-family: var( --thermal-ff );
                        padding: .3em .1em .3em .3em;
                        width: 5em;
                        display: inline-block;
                    }

                    .unit {
                        font-size: 0.7em;
                    }

                }

                &.export-config-field--text {
                    .export-config-field--value input {
                        width: 300px;
                        text-align: left;
                    }
                }
            
            }

        
        }
    
    `;


    public render(element: AbstractSingleVideoExport): unknown {

        return html`<div class="export-bar">

            <div class="export-bar-part export-bar-part--config">
                ${this.renderConfigHeader(element)}
            </div>
        
        </div>`;

    }

}

export const exportConfigDirective = directive(SingleVideoExportConfigDirective);