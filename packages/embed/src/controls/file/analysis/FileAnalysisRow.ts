import { AbstractAnalysis, AbstractAreaAnalysis, PointAnalysis, ThermalRangeOrUndefined } from "@labir/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { setRegistryHighlightContext } from "../../../hierarchy/providers/context/RegistryContext";
import { T } from "../../../translations/Languages";

@customElement("file-analysis-table-row")
export class FileAnalysisRow extends BaseElement {

    @property()
    public analysis!: AbstractAnalysis;

    @property({type: Boolean})
    public interactiveanalysis: boolean = false;

    @state()
    protected value: {
        min: number | undefined,
        max: number | undefined,
        avg: number | undefined
    } = {
            min: undefined,
            max: undefined,
            avg: undefined
        };

    @state()
    protected graph: {
        min: boolean,
        max: boolean,
        avg: boolean
    } = {
            min: false,
            max: false,
            avg: false
        }

    @state()
    protected may: {
        min: boolean,
        max: boolean,
        avg: boolean
    } = {
            min: false,
            max: false,
            avg: false
        }

    @state()
    protected dimension?: string;

    @state()
    protected color?: string;

    @property({ type: Boolean, reflect: true, attribute: true })
    protected selected: boolean = false;

    @state()
    protected name?: string;

    @consume( {context: setRegistryHighlightContext, subscribe: true} )
    protected setRegistryHighlight?: ( value: ThermalRangeOrUndefined ) => void;



    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        // Whenever the analysis changes, update the table row
        if (_changedProperties.has("analysis")) {

            const oldAnalysis = _changedProperties.get("analysis") as AbstractAnalysis;

            // Remove listeners
            if (oldAnalysis) {
                oldAnalysis.onDeselected.delete(this.UUID);
                oldAnalysis.onSelected.delete(this.UUID);
                oldAnalysis.onValues.delete(this.UUID);
                oldAnalysis.onMoveOrResize.delete(this.UUID);
                oldAnalysis.graph.onGraphActivation.delete(this.UUID);
                oldAnalysis.onSetInitialColor.delete(this.UUID);
                oldAnalysis.onSetName.delete(this.UUID);
            }

            const newAnalysis = this.analysis;

            // Update the name
            this.name = newAnalysis.name;

            // Update activation
            this.selected = newAnalysis.selected;

            // Update the color
            this.color = newAnalysis.initialColor;

            

            const formatDimension = (analysis: AbstractAnalysis) => {

                if ( analysis instanceof AbstractAreaAnalysis ) {
                    return newAnalysis.width + "x" + newAnalysis.height;
                }
                return "1x1";

            }

            // Update dimensions
            this.dimension = formatDimension( newAnalysis ); // newAnalysis.width + "x" + newAnalysis.height;

            // Update values
            this.value = {
                min: newAnalysis.min,
                max: newAnalysis.max,
                avg: newAnalysis.avg
            }

            // Update may
            if (newAnalysis.file.timeline.isSequence) {
                this.may = newAnalysis instanceof PointAnalysis
                    ? { avg: true, min: false, max: false }
                    : { avg: true, min: true, max: true };
            } else {
                this.may = { avg: false, min: false, max: false };
            }


            // Update graph
            this.graph = {
                min: newAnalysis.graph.state.MIN,
                max: newAnalysis.graph.state.MAX,
                avg: newAnalysis.graph.state.AVG
            }

            // Listen to resize or move
            newAnalysis.onSerializableChange.set(this.UUID, (analysis) => {
                this.dimension = formatDimension(analysis);// analysis.width + "x" + analysis.height;
            });

            // Listen to values
            newAnalysis.onValues.set(this.UUID, (min, max, avg) => {
                this.value = { min, max, avg };
            });

            // Listen to graph activation
            newAnalysis.graph.onGraphActivation.set(this.UUID, (min, max, avg) => {
                this.graph = { min, max, avg };
            });

            // Listen to selection
            newAnalysis.onSelected.set(this.UUID, () => {
                this.selected = true;
            });

            newAnalysis.onDeselected.set(this.UUID, () => {
                this.selected = false;
            });

            // Listen to initialColor
            newAnalysis.onSetInitialColor.set(this.UUID, (value) => {
                this.color = value;
            });

            // Listen to the name changes
            newAnalysis.onSetName.set(this.UUID, (value) => {
                this.name = value;
            });




        }

    }


    protected valueOrNothing(value: number | undefined): string {
        return value === undefined ? "-" : value.toFixed(2) + " °C";
    }


    protected renderCell(
        value: number | undefined,
        may: boolean,
        active: boolean,
        clickFn: () => void
    ): unknown {


        const bg = active ? this.color : "white";

        return html`
            <td class="${may ? "may" : "mayNot"} ${active ? "active" : "inactive"}">

                ${may
                ? html`
                        <thermal-btn
                            size="md"
                            @click=${clickFn}
                            style="background-color: ${bg};"
                            tooltip="${active ? "Skrýt v grafu" : "Zobrazit graf"}"
                        >
                            <span style="">${this.valueOrNothing(value)}</span>
                        </thermal-btn>
                    `
                : this.valueOrNothing(value)
            }

            </td>
        `;
    }



    public static styles = css`
    
        :host {
            display: table-row;
            white-space: nowrap;
        }

        button, td {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
            color: var( --thermal-foreground);
            white-space: nowrap;
        }

        .may button {
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            cursor: pointer;

            transition: all .2s ease-in-out;

            &:hover,
            &:focus {
                border-color: var( --thermal-slate-dark );
                color: var( --thermal-foreground );
            }
        }

        td {
            padding: 0.25em 0.5em;
        }

        

        .selected {
        }

        .name {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }
            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 1px solid var( --thermal-slate );
            }
            b {
                width: 1em;
                height: 1em;
            }

            &.selected u {
                background-color: var( --thermal-slate-dark );
            }

            &.notSelected span {
                text-decoration: line-through;
            }
        }

        .edit-buttons {
            display: flex;
            gap: 5px;
        }

    `;



    protected render(): unknown {
        return html`
        
        <td 
            class="name ${this.selected ? "selected" : "notSelected"} ${this.interactiveanalysis ? "interactive" : ""}"
            @click=${() => {

                if ( this.interactiveanalysis === false ) {
                    return;
                }

                if (this.selected) this.analysis.setDeselected(true);
                else this.analysis.setSelected(false, true);
            }}
        >
            ${this.interactiveanalysis === true ? html`<u aria-hidden="true"></u>` : nothing }
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(
                this.value.avg,
                this.may.avg,
                this.graph.avg,
                () => {
                    this.analysis.graph.setAvgActivation(!this.graph.avg);
                }
            )}
        ${this.renderCell(
                this.value.min,
                this.may.min,
                this.graph.min,
                () => {
                    this.analysis.graph.setMinActivation(!this.graph.min);
                }
            )}
        ${this.renderCell(
                this.value.max,
                this.may.max,
                this.graph.max,
                () => {
                    this.analysis.graph.setMaxActivation(!this.graph.max);
                }
            )}
        <td>${this.dimension}</td>
        ${this.interactiveanalysis === true ? html`<td class="edit-buttons">
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>

            <thermal-btn @click=${() => {
                this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)
            }} icon="trash" iconStyle="micro" variant="danger" size="md" tooltip="${t(T.remove)} ${this.analysis.name}">
            </thermal-btn>
        
        </td>`
        : nothing }
        
        `;
    }

}