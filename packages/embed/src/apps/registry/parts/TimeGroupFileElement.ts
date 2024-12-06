import { Instance } from "@labir/core";
import { css, CSSResultGroup, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GroupConsumer } from "../../../hierarchy/consumers/GroupConsumer";

@customElement("time-group-item")
export class TimeGroupFileWrapper extends GroupConsumer {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    @property({ type: Object })
    file!: Instance;

    @property({ type: String })
    innerHtml?: string;

    @property({ type: String })
    label?: string;


    public static styles?: CSSResultGroup | undefined = css`

        :host {
            display: block;
        }
    
        .file-title {
            background: var(--thermal-slate);
            color: var(--thermal-foreground);
        }

    `;

    protected render(): unknown {

        return html`
            <file-mirror .file=${this.file}>

                <div class="file-title">
                    ${this.label}
                </div>

                <file-canvas></file-canvas>

                <file-timeline></file-timeline>                            <file-analysis-table></file-analysis-table>
            </file-mirror>
        `;


    }



}