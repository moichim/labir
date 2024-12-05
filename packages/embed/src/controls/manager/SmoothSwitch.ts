import { consume } from "@lit/context";
import { ManagerConsumer } from "../../hierarchy/consumers/ManagerConsumer";
import { managerSmoothContext } from "../../hierarchy/providers/context/ManagerContext";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { t } from "i18next";
import { T } from "../../translations/Languages";

@customElement("manager-smooth-switch")
export class SmoothSwitch extends ManagerConsumer {

    @consume({context: managerSmoothContext, subscribe: true})
    smooth!: boolean;

    protected tourableElementRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElementRef.value;
    }

    public static styles = css`
    
        :host {}

    `;

    protected render(): unknown {
        return html`

            <div ${ref(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth ? "default" : "foreground"}
                    @click=${() => this.manager.smooth.setSmooth(false)}
                >${t(T.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth ? "foreground" : "default"}
                    @click=${() => this.manager.smooth.setSmooth(true)}
                >${t(T.smooth)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `;
    }

}