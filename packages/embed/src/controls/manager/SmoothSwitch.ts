import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ManagerConsumer } from "../../hierarchy/consumers/ManagerConsumer";
import { managerSmoothContext } from "../../hierarchy/providers/context/ManagerContext";
import { T } from "../../translations/Languages";

@customElement("manager-smooth-switch")
export class SmoothSwitch extends ManagerConsumer {

    @consume({context: managerSmoothContext, subscribe: true})
    smooth!: boolean;

    public static styles = css`
    
        :host {
            display: block;
        }

    `;

    protected render(): unknown {
        return html`<thermal-btn
    variant=${this.smooth ? "default" : "foreground"}
    @click=${() => this.manager.smooth.setSmooth(false)}
>${t(T.pixelated)}</thermal-btn>

<thermal-btn
    variant=${this.smooth ? "foreground" : "default"}
    @click=${() => this.manager.smooth.setSmooth(true)}
>${t(T.smooth)}</thermal-btn>`;
    }

}