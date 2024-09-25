import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { AbstractAnalysis, PointAnalysis } from "@labir/core";
import { css, html, PropertyValues } from "lit";

@customElement("file-analysis-table-row")
export class FileAnalysisRow extends BaseElement {

    @property()
    public analysis!: AbstractAnalysis;

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

    @property({type: Boolean, reflect: true, attribute: true})
    protected selected: boolean = false;

    

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
            }

            const newAnalysis = this.analysis;

            // Update activation
            this.selected = newAnalysis.selected;

            // Update the color
            this.color = newAnalysis.initialColor;

            // Update dimensions
            this.dimension = newAnalysis.width + "x" + newAnalysis.height;

            // Update values
            this.value = {
                min: newAnalysis.min,
                max: newAnalysis.max,
                avg: newAnalysis.avg
            }

            // Update may
            if ( newAnalysis.file.timeline.isSequence) {
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
            newAnalysis.onMoveOrResize.set(this.UUID, (analysis) => {
                this.dimension = analysis.width + "x" + analysis.height;
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


        }

    }


    protected valueOrNothing(value: number | undefined): string {
        return value === undefined ? "-" : value.toFixed(2) + " °C";
    }


    protected renderCell(
        value: number|undefined, 
        may: boolean, 
        active: boolean, 
        clickFn: () => void
    ): unknown {

        return html`
            <td class="${may ? "may" : "mayNot"} ${active ? "active" : "inactive"}">

                ${may
                    ? html`
                        <button
                            @click=${clickFn}
                            style="background-color: ${active ? this.color : "transparent"}"
                            title="${active ? "Hide graph" : "Show graph"}"
                        >
                            ${this.valueOrNothing(value)}
                        </button>
                    `
                    : this.valueOrNothing(value)
                }

            </td>
        `;
    }



    public static styles = css`
    
        :host {
            display: table-row;
            font-size: var( --thermal-fs-sm ) !important;
        }

        button, td {
            font-size: var( --thermal-fs-sm ) !important;
            color: var( --thermal-foreground);
        }

        .may button {
            border: 1px solid var( --thermal-slate-light );
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

            cursor: pointer;

            &:hover {
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

    `;



    protected render(): unknown {
        return html`
        
        <td 
            class="name ${this.selected ? "selected" : "notSelected"}"
            @click=${ () => {
                if ( this.selected ) this.analysis.setDeselected( true );
                else this.analysis.setSelected( false, true );
            } }
        >
            <u aria-hidden="true"></u>
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.key}</span>
        </td>

        ${this.renderCell(
            this.value.avg, 
            this.may.avg, 
            this.graph.avg, 
            () => {
                    this.analysis.graph.setAvgActivation( ! this.graph.avg );
                    console.log( "WTF!!", this.analysis.graph.state );
            }
        )}
        ${this.renderCell(
            this.value.min, 
            this.may.min, 
            this.graph.min, 
            () => {
                    this.analysis.graph.setMinActivation( ! this.graph.min );
                    console.log( "WTF!!", this.analysis.graph.state );
            }
        )}
        ${this.renderCell(
            this.value.max, 
            this.may.max, 
            this.graph.max, 
            () => {
                    this.analysis.graph.setMaxActivation( ! this.graph.max );
                    console.log( "WTF!!", this.analysis.graph.state );
            }
        )}
        <td>${this.dimension}</td>
        <td>
        <thermal-button @click=${() => {
            this.analysis.file.analysis.layers.removeAnalysis( this.analysis.key )
        }}>Remove</thermal-button>
        </td>
        
        `;
    }

}