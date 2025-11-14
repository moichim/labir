import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { AbstractAnalysis, AbstractAreaAnalysis, PointAnalysis } from "@labirthermal/core";
import { css, html, nothing, PropertyValues } from "lit";
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { consume } from "@lit/context";
import { interactiveAnalysisContext } from "../../../utils/context";

@customElement("file-analysis-overview-row")
export class FileAnalysisRow extends BaseElement {

    @property()
    public analysis!: AbstractAnalysis;

    @consume({ context: interactiveAnalysisContext, subscribe: true })
    interactiveanalysis: boolean = false;

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

        return html`
            <td class="${may ? "may" : "mayNot"} ${active ? "active" : "inactive"}">

                ${may
                ? html`
                        <button
                            @click=${clickFn}
                            style="background-color: ${active ? this.color : "transparent"};"
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

            &.interactive .name-text {
                cursor: pointer;
            }

            &.interactive:hover .name-text {
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

        svg {
            width: calc( var(--thermal-gap) * .8 );
            color: var(--thermal-slate);
            transition: color .2s ease-in-out;
            cursor: pointer;

            &:hover {
                color: var( --thermal-foreground );
            }
        }

    `;



    protected render(): unknown {
        return html`
        
        <td 
            class="name ${this.selected ? "selected" : "notSelected"} ${this.interactiveanalysis ? "interactive" : ""}"
        >
            <span
                class="name-text"
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

            </span>

            <file-analysis-edit .analysis=${this.analysis}>

                <svg slot="invoker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                </svg>

            </file-analysis-edit>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" @click=${() => {
                this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)
            }}>
                <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
            </svg>

        </td>
        ${this.renderCell(
                this.value.min,
                this.analysis instanceof AbstractAreaAnalysis, //this.may.min,
                this.graph.min,
                () => {
                    this.analysis.graph.setMinActivation(!this.graph.min);
                    this.log( "Graph analysis min", this.graph.min );
                }
            )}
        ${this.renderCell(
                this.value.max,
                this.analysis instanceof AbstractAreaAnalysis, // this.may.max,
                this.graph.max,
                () => {
                    this.analysis.graph.setMaxActivation(!this.graph.max);
                }
            )}

         ${this.renderCell(
                this.value.avg,
                true, // this.may.avg,
                this.graph.avg,
                () => {
                    this.analysis.graph.setAvgActivation(!this.graph.avg);
                }
            )}

        <!--
        <td>${this.dimension}</td>
        ${this.interactiveanalysis === true ? html`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-btn @click=${() => {
                this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)
            }}>${t(T.remove)}</thermal-btn>
        </td>`
        : nothing }

        -->
        
        `;
    }

}