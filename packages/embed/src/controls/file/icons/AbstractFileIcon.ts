import { css, CSSResultGroup, html } from "lit";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";

export abstract class AbstractFileIcon extends FileConsumer {

    tabIndex: number = 1;

    abstract enter(): void;

    abstract action(): void;

    abstract leave(): void;

    public onInstanceCreated(): void { }

    public onFailure(): void { }

    protected abstract getLabel(): ReturnType<typeof html>|string;

    protected abstract getIcon(): ReturnType<typeof html>;

    connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener("pointerdown", this.action.bind(this));
        this.addEventListener("mouseenter", this.enter.bind(this));
        this.addEventListener("mouseleave", this.leave.bind(this));
        this.addEventListener("focus", this.enter.bind(this));
        this.addEventListener("blur", this.leave.bind(this));

    }


    static styles?: CSSResultGroup | undefined = css`
        :host {
            display: content;
            position: relative;
            cursor: pointer;
        }

        svg {
            width: 1em;
            color: currentcolor;
            transition: all .3s ease-in-out;
            cursor: pointer;
            transform: translateY(3px);
        }

        :host,
        button {
            margin: 0;
            padding: 0;
            background: transparent;
            color: currentcolor;
            border: none;
        }

        .label {
            display: none;
            position: absolute;
            z-index: 9999;
            top: -30px;
            left: 0;
            width: 0;
        }

        .label-inner {
            padding: 5px 10px;
            border-radius: var(--thermal-radius);
            border: 1px solid var(--thermal-slate);
            background: var(--thermal-primary);
            color: var(--thermal-background);
            width: fit-content;
            white-space: preserve nowrap;
            font-size: 12px;
        }

        :host(:hover) {
            svg {
                color: var(--thermal-primary);
            }
            .label {
                display: block;
            }
        }

    `;

    protected render(): unknown {

        return html`
            <button id="${this.UUID}" tabindex="0">${this.getIcon()}</button>
            <div class="label">
                <label class="label-inner" for="#${this.UUID}">${this.getLabel()}</label>
            </div>
        `;
    }

}