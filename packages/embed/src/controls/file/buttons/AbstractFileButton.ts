import { css, CSSResultGroup, html } from "lit";
import { property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import { BtnSizes, BtnVariants } from "../../../ui/Btn";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { Instance } from "@labir/core";
import { ifDefined } from "lit/directives/if-defined.js";

export abstract class AbstractFileButton extends FileConsumer {

    @property({ type: String, reflect: false })
    public variant?: BtnVariants;

    @property({ type: String, reflect: true })
    public size?: BtnSizes = "sm";

    @property({ type: String})
    public icon?: string;

    @property({type: String})
    public iconStyle?: string;

    @property({ type: Boolean })
    public plain?: boolean;

    protected abstract tooltip?: string;

    protected ref = createRef<HTMLElement>();

    abstract getDefaultLabel(): string;

    abstract enter(): void;

    abstract action(): void;

    abstract leave(): void;

    public onInstanceCreated(file: Instance): void { }

    public onFailure(): void { }

    static styles?: CSSResultGroup | undefined = css`
        slot {
            display: content;
        }

        button.default {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var(--thermal-foreground);
            border-color: var(--thermal-slate);
            border-style: solid;
            border-width: 1px;
            border-radius: var( --thermal-radius );
            background-color: var(--thermal-slate-light);
            white-space: nowrap;
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }

    `;

    protected render(): unknown {
        return html`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${ref(this.ref)}
            >
                <thermal-btn 
                    variant=${this.variant || "default"}
                    size=${this.size || "sm"}
                    plain="${this.plain || false}"
                    class="default"
                    tooltip=${this.tooltip}
                    icon=${ifDefined(this.icon)}
                    iconStyle=${ifDefined(this.iconStyle)}
                >${this.getDefaultLabel()}</thermal-btn>
            </slot>`;
    }

}