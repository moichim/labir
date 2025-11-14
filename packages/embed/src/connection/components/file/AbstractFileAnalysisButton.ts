import { Instance } from "@labirthermal/core";
import Client, { FileInfo, FolderInfo } from "@labirthermal/server";
import { consume } from "@lit/context";
import { html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { BtnSizes, BtnVariants } from "../../../ui/Btn";
import { clientContext } from "../../ClientContext";
import { booleanConverter } from "../../../utils/converters/booleanConverter";

export abstract class AbstractFileAnalysisButton extends FileConsumer {

    @property({ type: String })
    public label: string = "";

    @property({ type: String, reflect: false })
    public variant?: BtnVariants;

    @property({ type: String, reflect: true })
    public size: BtnSizes = "sm";

    @property({ type: String })
    public plain: boolean = false;

    @property({ type: String })
    public icon?: string;

    @property({ type: String })
    public iconStyle?: string;

    @property({ type: String, converter: booleanConverter(false) })
    public disabled: boolean = false;

    @property({ type: String })
    public tooltip?: string;

    @property({ type: Object })
    public info!: FileInfo;

    @property({ type: Object })
    public folder!: FolderInfo;

    protected onClick?: (file: Instance) => void;


    @consume({ context: clientContext, subscribe: true })
    protected client?: Client;


    protected render(): unknown {

        const callback = this.onClick
            ? () => this.onClick!(this.file!)
            : () => { };

        return html`<thermal-btn
            @click=${() => callback()}
            variant=${ifDefined(this.variant)}
            size=${ifDefined(this.size)}
            icon=${ifDefined(this.icon)}
            iconStyle=${ifDefined(this.iconStyle)}
            plain=${ifDefined(this.plain)}
            tooltip=${ifDefined(this.tooltip)}
            disabled=${ifDefined(this.disabled ? true : undefined)}
        >${this.label}</thermal-btn>`;
    }


}