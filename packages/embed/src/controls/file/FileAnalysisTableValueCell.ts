import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { css, html, nothing } from "lit";

@customElement("file-analysis-cell")
export class FileAnalysisTableValueCell extends BaseElement {

    @property({ type: String })
    value?: number;

    @property({type: Number})
    fixed: number = 2;

    @property({ type: String })
    unit: string = " °C";

    @property({ type: String })
    isSequence: boolean = false;

    @property({ type: Boolean })
    graphDisabled: boolean = false;

    @property({ type: String })
    graphActive: boolean = false;

    @property()
    activateGraphFn?: () => void;

    @property()
    deactivateGraphFn?: () => void;

    public static styles = css`

    :host {
            display: table-cell;
        }
    
    `;

    protected valueOrNothing(): string {

        if ( this.value === undefined ) {
            return "-";
        }

        return this.value.toFixed( this.fixed ) + this.unit;

    }

    public handleClick() {
        if ( this.graphActive ) {
            this.deactivateGraphFn?.();
        } else {
            this.activateGraphFn?.();
        }
    }

    protected render(): unknown {

        this.log(this.graphDisabled)

        if ( this.graphDisabled === true) {
            return html`<span>${this.valueOrNothing()}</span>`;
        }
        return html`
            <button 
                title="Show graph" 
                @click=${this.handleClick.bind(this)}
                style="background-color: ${this.graphActive ? "green" : "red"};"
                >
                ${this.valueOrNothing()} ${this.graphActive ? "🔴" : "🟢"}
            </button>
        `;
    }

}