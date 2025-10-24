import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ManagerConsumer } from "../../hierarchy/consumers/ManagerConsumer";
import { managerGraphFunctionContext } from "../../hierarchy/providers/context/ManagerContext";
import { T } from "../../translations/Languages";

@customElement("manager-graph-smooth-switch")
export class SmoothSwitch extends ManagerConsumer {

    @consume({context: managerGraphFunctionContext, subscribe: true})
    smooth!: boolean;

    public static styles = css`
    
        :host {}

    `;

    protected render(): unknown {
        return html`

            <div>

                <thermal-btn
                    variant=${this.smooth ? "default" : "foreground"}
                    @click=${() => this.manager.graphSmooth.setGraphSmooth(false)}
                >${t(T.straightlines)}</thermal-btn>

                <thermal-btn
                    variant=${this.smooth ? "foreground" : "default"}
                    @click=${() => this.manager.graphSmooth.setGraphSmooth(true)}
                >${t(T.smoothlines)}</thermal-btn>

            </div>
        `;
    }

}