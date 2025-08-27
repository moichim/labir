import { css, CSSResultGroup, html } from "lit";
import { BaseElement } from "../../../hierarchy/BaseElement";

export abstract class AbstractModeBar extends BaseElement {

    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
        
            display: flex;
            color: var(--thermal-foreground);
            cursor: pointer;
            align-items: center;
            gap: .25em;
        
        }


        .radio {

            display: flex;
            align-items: center;
            gap: .25em;

            cursor: pointer;

            input,
            span {
                display: block;
            }

            span {
                font-size: .8em;
            }
        }
    
    `;


    protected renderToggle(
        label: string,
        checked: boolean,
        onChange: (checked: boolean) => void
    ): unknown {

        return html`<thermal-radio
            type="checkbox"
            .checked=${checked}
            .onChange=${(value: boolean) => {
                onChange(value);
            }}
        >${label}</thermal-radio>`;

    }

}