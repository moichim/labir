import '@google-web-components/google-chart';
import { AbstractAnalysis, AbstractAreaAnalysis, PointAnalysis } from "@labir/core";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, Ref } from 'lit/directives/ref.js';
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";

@customElement("file-analysis-row")
export class FileAnalysisList extends FileConsumer {

    @property({ type: Object, attribute: true })
    analysis!: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    selected: boolean = false;

    @property({ type: String, reflect: true, attribute: true })
    active: boolean = false;

    @state()
    color!: string;

    @state()
    values: { min: number | undefined, max: number | undefined, avg: number | undefined } = {
        min: undefined,
        max: undefined,
        avg: undefined
    }

    @state()
    top?: number;

    @state()
    left?: number;

    @state()
    width?: number;

    @state()
    height?: number;

    public onInstanceCreated(): void { }

    public onFailure(): void { }

    @state()
    protected graphMinActive: boolean = false;

    @state()
    protected graphMaxActive: boolean = false;

    @state()
    protected graphAvgActive: boolean = false;

    @state()
    selectedRef: Ref<HTMLInputElement> = createRef();
    activeRef: Ref<HTMLInputElement> = createRef();

    protected uuid(value: string) {
        return `${this.UUID}__${value}`;
    }

    public connectedCallback(): void {

        super.connectedCallback();

        this.hydrate(this.analysis);


    }


    protected hydrate(analysis: AbstractAnalysis) {

        this.log("HYDRATUJI", analysis.key);


        this.selected = analysis.selected;
        this.color = analysis.initialColor;
        this.top = analysis.top;
        this.left = analysis.left;
        this.width = analysis.width;
        this.height = analysis.height;

        if (analysis instanceof AbstractAreaAnalysis) {
            this.graphMinActive = analysis.graphMinActive;
            this.graphMaxActive = analysis.graphMaxActive;
            this.graphAvgActive = analysis.graphAvgActive;
        } else if (analysis instanceof PointAnalysis) {
            this.graphMinActive = false;
            this.graphMaxActive = false;
            this.graphAvgActive = analysis.graphActive;
        }

        if (analysis instanceof PointAnalysis) {

            analysis.onGraphActivation.add(
                "__onGraphActivation",
                (value) => {
                    this.graphMinActive = false;
                    this.graphMaxActive = false;
                    this.graphAvgActive = value;
                }
            );

        } else if (analysis instanceof AbstractAreaAnalysis) {
            analysis.onGraphActivation.add(
                "__onGraphActivation",
                (min, max, avg) => {
                    if (this.graphMinActive !== min)
                        this.graphMinActive = min;
                    if (this.graphMaxActive !== max)
                        this.graphMaxActive = max;
                    if (this.graphAvgActive !== avg)
                        this.graphAvgActive = avg;
                }
            );
        }

        analysis.onSelected.add(
            "__onSelected",
            (value) => {
                console.log(this.analysis.key, "selected", value.selected, this.selected);
                this.selected = true;
            }
        );
        analysis.onDeselected.add(
            "__onDeselected",
            (value) => {
                console.log(this.analysis.key, "deselected", value.selected, this.selected);
                this.selected = false;
            }
        );

        analysis.onValues.add(
            "__onValues",
            (min, max, avg) => {
                this.values = {
                    min, max, avg
                };
            }
        );


        analysis.onMoveOrResize.add("__onResize", () => {
            this.top = analysis.top;
            this.left = analysis.left;
            this.width = analysis.width;
            this.height = analysis.height;
        });

    }

    protected dehydrate(analysis: AbstractAnalysis) {

        this.log("DEHYDRATUJI", analysis.key);

        analysis.onSelected.delete("__onSelected");
        analysis.onDeselected.delete("__onDeselected");
        analysis.onValues.delete("__onValues");
        analysis.onMoveOrResize.delete("__onResize");
        // Remove callbacks
        if (analysis instanceof PointAnalysis) {
            analysis.onGraphActivation.delete("__onGraphActivation");
        } else if (analysis instanceof AbstractAreaAnalysis) {
            analysis.onGraphActivation.delete("__onGraphActivation");
        }

    }

    public willUpdate(_changedProperties: PropertyValues): void {

        super.willUpdate(_changedProperties);

        if (_changedProperties.has("analysis")) {

            const oldAnalysis = _changedProperties.get("analysis") as AbstractAnalysis;

            if (oldAnalysis) {
                this.dehydrate(oldAnalysis);
            }

            this.hydrate(this.analysis);

        }

    }

    public handleMinClick() {
        if (this.analysis instanceof AbstractAreaAnalysis) {
            this.analysis.setGraphMinActivation(!this.graphMinActive);
        }
    }

    public handleMaxClick() {
        if (this.analysis instanceof AbstractAreaAnalysis) {
            this.analysis.setGraphMaxActivation(!this.graphMaxActive);
        }
    }

    public handleAvgClick() {
        if (this.analysis instanceof AbstractAreaAnalysis) {
            this.analysis.setGraphAvgActivation(!this.graphAvgActive);
        } else if (this.analysis instanceof PointAnalysis) {
            this.analysis.setGraphActivation(!this.graphAvgActive);
        }
    }


    static styles?: CSSResultGroup | undefined = css`

        :host {

            display: table-row;
            transiton: all .3s ease-in-out;
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
 
        }

        .interactive-toggle {
            cursor: pointer;
            transiton: all .3s ease-in-out;
            user-select: none;
        }

        .interactive-toggle:hover {
            color: var( --thermal-primary );
        }

        :host td {
            padding: calc( var( --thermal-gap ) / 3 );
        }

        .color {
            content: "";
            display: inline-block;
            width: 1rem;
            height: var(--thermal-fs);
        }

        .selected {
            width: calc( var( --thermal-gap ) / 2 );
            height: calc( var( --thermal-gap ) / 2 );
            border-radius: 50%;
            border: 2px solid var( --thermal-slate );
            display: inline-block;
        }

        :host([selected="true"]) {
            background: var(--thermal-background);
            .selected {
                background-color: var( --thermal-foreground )
            }

        }

        :host([selected="false"]) .title {
            text-decoration: line-through;
        }



    `;

    protected temperatureOrNothing(value: number | undefined) {
        if (value === undefined) {
            return "-";
        }
        return value.toFixed(1) + " °C"
    }



    protected render(): unknown {

        if (this.analysis === undefined) {
            return nothing;
        }

        return html`
                <td @click=${() => {
                if (this.analysis.selected) {
                    this.analysis.setDeselected();
                } else {
                    this.analysis.setSelected();
                }
            }} class="interactive-toggle">
                    <div class="selected"></div>
                    <span class="color" style="background-color:${this.analysis.initialColor};"></span>
                    <span class="title">${this.analysis.key}</span>
                </td>

                <file-analysis-cell 
                    .value=${this.values.avg} 
                    .handler=${this.handleAvgClick.bind(this)}
                >
                </file-analysis-cell>

                ${this.analysis.file.timeline.isSequence
                ? this.analysis instanceof PointAnalysis
                    ? html`
                            <file-analysis-cell 
                                .value=${this.values.avg} 
                                .graphActive=${this.graphAvgActive}
                                .activateGraphFn=${console.log}>
                            </file-analysis-cell>
                            <file-analysis-cell 
                                .value=${this.values.min} 
                                .graphActive=${this.graphMinActive}
                                graphDisabled>
                            </file-analysis-cell>
                            <file-analysis-cell 
                                .value=${this.values.max} 
                                .graphActive=${this.graphMaxActive}
                                graphDisabled>
                            </file-analysis-cell>
                        `
                    : html`
                        <file-analysis-cell 
                            .value=${this.values.avg} 
                            .activateGraphFn=${console.log}
                            .graphActive=${this.graphAvgActive}
                            >
                        </file-analysis-cell>
                        <file-analysis-cell 
                            .value=${this.values.min} 
                            .graphActive=${this.graphMinActive}
                        >
                        </file-analysis-cell>
                        <file-analysis-cell 
                            .value=${this.values.max} 
                            .graphActive=${this.graphMaxActive}
                        >
                        </file-analysis-cell>
                    `
                : html`
                    <file-analysis-cell 
                        .value=${this.values.avg} 
                        .graphActive=${this.graphAvgActive}
                        graphDisabled>
                    </file-analysis-cell>
                    <file-analysis-cell 
                        .value=${this.values.min} 
                        .graphActive=${this.graphMinActive}
                        graphDisabled>
                    </file-analysis-cell>
                    <file-analysis-cell 
                        .value=${this.values.max} 
                        .graphActive=${this.graphMaxActive}
                        graphDisabled>
                    </file-analysis-cell>`
            }

                <td>
                    ${this.width} x ${this.height} px
                </td>
                <td>
                    <thermal-button @click=${() => { this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key) }}>Remove</thermal-button>
                </td>
        `;
    }

}