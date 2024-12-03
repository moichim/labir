import { consume } from "@lit/context";
import { ManagerConsumer } from "../../hierarchy/consumers/ManagerConsumer";
import { managerGraphFunctionContext } from "../../hierarchy/providers/context/ManagerContext";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";

@customElement("manager-graph-smooth-switch")
export class SmoothSwitch extends ManagerConsumer {

    @consume({context: managerGraphFunctionContext, subscribe: true})
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

            <div>

                <thermal-button
                    variant=${this.smooth ? "default" : "foreground"}
                    @click=${() => this.manager.graphSmooth.setGraphSmooth(false)}
                >Straight lines</thermal-button>

                <thermal-button
                    variant=${this.smooth ? "foreground" : "default"}
                    @click=${() => this.manager.graphSmooth.setGraphSmooth(true)}
                >Smooth lines</thermal-button>

            </div>

            <slot name="tour"></slot>
        `;
    }

}