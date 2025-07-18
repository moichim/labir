import { consume } from "@lit/context";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { booleanConverter } from "../../../utils/converters/booleanConverter";
import { compactContext, compactContextSetter } from "../../ClientContext";

@customElement("compact-toggle")
export class CompactToggle extends BaseElement {


    @property({ type: String, reflect: true, converter: booleanConverter(false) })
    @consume({ context: compactContext, subscribe: true })
    protected compact: boolean = false;

    @consume({ context: compactContextSetter, subscribe: true })
    protected compactSetter?: (compact: boolean) => void;

    tabindex: number = 1;       


    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener("click", () => {
            console.log("compact setter clicked");
            if (this.compactSetter) {
                this.compactSetter(!this.compact);
            }
        });

    }


    public static styles = css`
        :host {
        
            display: flex;
            color: var(--thermal-foreground);
            cursor: pointer;
            align-items: center;
            gap: .25em;
        
        }


        .radio {

            border: 1px solid var(--thermal-slate);
            border-radius: 50%;
            width: .8em;
            height: .8em;
            transition: all .2s ease-in-out;
            box-sizing: border-box;

            display: flex;
            align-items: center;
            justify-content: center;
        
        }

        .label {
        
            font-size: .8em;
            color: var(--thermal-slate);
            transition: all .2s ease-in-out;
        
        }

        :host([compact="true"]) .radio {
            background: var(--thermal-primary);
        }

        :host([compact="false"]) .radio {
            background: var(--thermal-slate-light);
        }

        :host(:hover),
        :host(:focus) {

            .label {
                color: var(--thermal-foreground);
            }

            .radio {
                border-color: var(--thermal-foreground);
            }

        }

    `


    protected render(): unknown {

        return html`

            <div class="radio"></div>
            <div class="label">
                Kompaktní zobrazení
            </div>
        
        `;

    }


}