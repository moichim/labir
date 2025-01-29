import { css, CSSResultGroup, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";

export abstract class AbstractFileButton extends FileConsumer {

    protected ref = createRef<HTMLElement>();

    abstract getDefaultLabel(): string;

    abstract enter(): void;

    abstract action(): void;

    abstract leave(): void;

    public onInstanceCreated(): void {}

    public onFailure(): void {}

    public getTourableRoot(): HTMLElement | undefined {
        return this.ref.value;
    }

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
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`;
        }

}