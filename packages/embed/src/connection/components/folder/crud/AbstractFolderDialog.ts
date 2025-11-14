import { property, state } from "lit/decorators.js";
import { ClientConsumer } from "../../ClientConsumer";
import { FolderInfo } from "@labirthermal/server";
import { BtnSizes, BtnVariants } from "packages/embed/src/ui/Btn";
import { css, CSSResultGroup, html } from "lit";
import { t } from "i18next";
import { T } from "../../../../translations/Languages";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ThermalDialog } from "packages/embed/src/ui/Dialog";

/** A base class for all dialogs related to folder CRUD operations. */
export abstract class AbstractFolderDialog extends ClientConsumer {

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: String, reflect: true})
    public icon?: string;

    @property({ type: String, reflect: true})
    public iconStyle?: string;

    @property({ type: String, reflect: true})
    public variant?: BtnVariants;

    @property({type: String, reflect: true})
    public size?: BtnSizes;

    @property({ type: Boolean, reflect: true })
    public plain?: boolean;

    @property({type: Boolean, reflect: true})
    public disabled?: boolean;

    @property({type: Boolean, reflect: true})
    public interactive?: boolean;

    @property({ type: String })
    public tooltip?: string;

    @property({ type: String, reflect: true })
    public label?: string;

    /** Internally defined label of the close button might be modified only internally. */
    @state()
    protected closeLabel: string = T.close;

    @state()
    protected dialogLabel: string = T.folder;

    /** A callback that is triggered upon successfull operation in the dialog. */
    public onSuccess?: (folder: FolderInfo) => void;

    /** Implement the function that is triggered before the dialog is closed */
    protected abstract beforeClose(): Promise<boolean>;

    /** Function for the main content of the dialog window. */
    protected abstract renderContent(): unknown;

    /** Optionally render additional buttons in the dialog footer. */
    protected abstract renderButtons(): unknown;

    private dialogRef = createRef<ThermalDialog>();

    protected close() {
        this.dialogRef.value?.setClose();
    }

    static styles?: CSSResultGroup = css`
    
        :host {
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }
    
    `;

    protected render(): unknown {
        return html`<thermal-dialog
    label=${t(this.dialogLabel)}
    button=${t(this.closeLabel)}
    .beforeClose=${() => this.beforeClose()}
    ${ref( this.dialogRef )}
>
    <thermal-btn
        slot="invoker"
        .icon=${ifDefined( this.icon )}
        .iconStyle=${ifDefined( this.iconStyle )}
        .variant=${ifDefined( this.variant )}
        .size=${ifDefined( this.size )}
        .plain=${ifDefined( this.plain )}
        .disabled=${ifDefined( this.disabled )}
        .interactive=${ifDefined( this.interactive )}
        .tooltip=${ifDefined( this.tooltip )}
    >
        ${this.label}
    </thermal-btn>
    <div class="content" slot="content">
        ${this.renderContent()}
    </div>
    ${this.renderButtons()}
</thermal-dialog>`;
    }

}