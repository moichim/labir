import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { BtnSizes, BtnVariants } from "../../ui/Btn";
import { ThermalDialog } from "../../ui/Dialog";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";

@customElement("file-video-export-button")
export class FileVideoExport extends BaseElement {

    @property({ type: String, reflect: true })
    public variant?: BtnVariants;

    @property({ type: String, reflect: true })
    public size?: BtnSizes = "md";

    @property({ type: String })
    public icon?: string;

    @property({ type: String })
    public iconStyle?: string;

    @property({ type: Boolean })
    public plain?: boolean;

    @property({ type: String, reflect: true })
    public tooltip?: string;

    @property({ type: String, reflect: true })
    public label: string = "Exportovat video";

    @property({ type: String, reflect: true })
    public pre?: String;

    private dialogRef: Ref<ThermalDialog> = createRef();

    protected slug: string = this.UUID + "__file-export";

    @state() 
    protected isOpen: boolean = false;



    public onInstanceCreated(instance: Instance): void {
        // throw new Error("Method not implemented.");
    }
    public onFailure(error: ThermalFileFailure): void {
        // throw new Error("Method not implemented.");
    }


    public renderDialog(): unknown {

        const content = this.isOpen === true
            ? html`<file-video-export-panel></file-video-export-panel>`
            : nothing;

        return html`<thermal-dialog
            ${ref(this.dialogRef)}
            label="Export videa"
            is-fullscreen="true"
            .beforeClose=${() => {
                this.isOpen = false;
                return true;
            }}
        >

            <div slot="content">
                
                ${content}

            </div>
        
        </thermal-dialog>`;

    }

    public renderTriggerButton(): unknown {
        return html`<thermal-btn
            @click=${() => {
                this.dialogRef.value?.setOpen();
                setTimeout( () => {
                    this.log("Otevírám dialog", this.dialogRef.value);
                    this.isOpen = true;
                }, 1000 );
            }}
            variant=${this.variant || "default"}
            size=${this.size || "md"}
            plain="${this.plain || false}"
            icon=${ifDefined(this.icon)}
            iconStyle=${ifDefined(this.iconStyle)}
            tooltip=${ifDefined(this.tooltip)}
            pre=${ifDefined(this.pre)}
        >
            ${this.label}
        </thermal-btn>`;
    }

    protected render(): unknown {
        return html`
            ${this.renderDialog()}
            ${this.renderTriggerButton()}
        `
    }



}