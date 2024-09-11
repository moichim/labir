import { AbstractAnalysis } from "@labir/core";
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
    selectedRef: Ref<HTMLInputElement> = createRef();
    activeRef: Ref<HTMLInputElement> = createRef();

    protected uuid(value: string) {
        return `${this.UUID}__${value}`;
    }

    public connectedCallback(): void {

        super.connectedCallback();

        this.hydrate( this.analysis );


    }


    protected hydrate(analysis: AbstractAnalysis) {

        this.log("HYDRATUJI", analysis.key);


        this.selected = analysis.selected;
        this.color = analysis.initialColor;
        this.top = analysis.top;
        this.left = analysis.left;
        this.width = analysis.width;
        this.height = analysis.height;

        analysis.onSelected.add(
            "__onSelected",
            (value) => {
                console.log( this.analysis.key, "selected", value.selected, this.selected );
                this.selected = true;
            }
        );
        analysis.onDeselected.add(
            "__onDeselected",
            (value) => {
                console.log( this.analysis.key, "deselected", value.selected, this.selected );
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


        analysis.onResize.add( "__onResize", () => {
            this.top = analysis.top;
            this.left = analysis.left;
            this.width = analysis.width;
            this.height = analysis.height;
        } );

    }

    protected dehydrate(analysis: AbstractAnalysis) {

        this.log("DEHYDRATUJI", analysis.key);

        analysis.onSelected.remove("__onSelected");
        analysis.onDeselected.remove("__onDeselected");
        analysis.onValues.remove("__onValues");
        analysis.onResize.remove( "__onResize" );

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
                    if ( this.analysis.selected ) {
                        this.analysis.setDeselected();
                    } else {
                        this.analysis.setSelected();
                    }
                }} class="interactive-toggle">
                    <div class="selected"></div>
                    <span class="color" style="background-color:${this.analysis.initialColor};"></span>
                    <span class="title">${this.analysis.key}</span>
                </td>
                <td>${this.temperatureOrNothing(this.values.min)}</td>
                <td>${this.temperatureOrNothing(this.values.max)}</td>
                <td>${this.temperatureOrNothing(this.values.avg)}</td>
                <td>
                    ${this.width} x ${this.height} px
                </td>
                <td>
                    <thermal-button @click=${() => { this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key) }}>Remove</thermal-button>
                </td>
        `;
    }

}