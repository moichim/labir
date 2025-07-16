import { Instance } from "@labir/core";
import Client, { FileInfo, FolderInfo } from "@labir/server";
import { consume } from "@lit/context";
import { html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { BtnSizes, BtnVariants } from "../../../ui/Btn";
import { clientContext } from "../../ClientContext";

export abstract class AbstractFileAnalysisButton extends FileConsumer {

    @property({ type: String })
    public label: string = "Tlačítko analýz";

    @property({ type: String, reflect: false })
    public variant?: BtnVariants;

    @property({ type: String, reflect: true })
    public size: BtnSizes = "sm";

    @property({ type: String })
    public plain: boolean = false;

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
            plain=${ifDefined(this.plain)}
        >${this.label}</thermal-btn>`;
    }


}