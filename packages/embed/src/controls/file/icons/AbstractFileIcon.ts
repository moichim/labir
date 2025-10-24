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

    protected abstract getIcon(): string;

    protected abstract getIconStyle(): string;

    connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener("pointerdown", this.action.bind(this));
        this.addEventListener("mouseenter", this.enter.bind(this));
        this.addEventListener("mouseleave", this.leave.bind(this));
        this.addEventListener("focus", this.enter.bind(this));
        this.addEventListener("blur", this.leave.bind(this));

    }

    protected render(): unknown {

        return html`<thermal-btn 
    tooltip=${this.getLabel()}
    size="sm"
    plain="true"
    icon=${this.getIcon()} 
    iconStyle="${this.getIconStyle()}"
></thermal-btn>`;
    }

}