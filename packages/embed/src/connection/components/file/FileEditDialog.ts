import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { html, css, CSSResultGroup } from "lit";
import { FileInfo } from "@labir/server";
import { BtnSizes, BtnVariants } from "packages/embed/src/ui/Btn";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("file-edit-dialog")
export class FileEditDialog extends ClientConsumer {

    @property({ type: String })
    public label: string = "Upravit soubor";

    @property({ type: String, reflect: false })
    public variant?: BtnVariants;

    @property({ type: String, reflect: true })
    public size?: BtnSizes = "sm";

    @property({ type: String })
    public plain?: boolean;

    @property({ type: Object })
    public file!: FileInfo;

    @property({ type: String })
    private fileLabel: string = "";

    @property({ type: String })
    private fileDescription: string = "";

    @property({ type: String })
    private errorMessage: string = "";

    @property({ type: Function })
    public onSuccess?: (file: FileInfo) => void;

    public static styles?: CSSResultGroup = css`
        .content {
        }

        .form-group {
            margin-bottom: var(--thermal-gap);
        }

        label {
            display: block;
            margin-bottom: calc(var(--thermal-gap) * 0.5);
            font-weight: bold;
        }

        input {
            width: 100%;
            box-sizing: border-box;
            padding: calc(var(--thermal-gap) * 0.5);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
        }

        textarea {
            width: 100%;
            box-sizing: border-box;
            padding: calc(var(--thermal-gap) * 0.5);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
            font-family: inherit;
            resize: vertical;
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: 1px solid var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }
    `;

    protected firstUpdated() {
        this.fileLabel = this.file.label || "";
        this.fileDescription = this.file.description || "";
    }

    protected async handleSubmit(): Promise<boolean> {

        // Clear previous error
        this.errorMessage = "";

        const result = await this
            .client
            ?.routes
            .post
            .updateFile(this.file.path, this.file.fileName.trim())
            .setLabel(this.fileLabel.trim())
            .setDescription(this.fileDescription.trim())
            .execute()!;

        if (result?.success) {
            if (this.onSuccess) {
                this.onSuccess(result.data!.file);
            }
        } else {
            this.errorMessage = result?.message || "Nepodařilo se upravit soubor";
        }

        return result?.success;

    }

    private handleLabelChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.fileLabel = target.value;
    }

    private handleDescriptionChange(event: Event) {
        const target = event.target as HTMLTextAreaElement;
        this.fileDescription = target.value;
    }

    protected render(): unknown {

        return html`
            <thermal-dialog
                label="Upravit soubor"
                .beforeClose=${() => this.handleSubmit()}
                button="Uložit změny"
            >
                <slot name="invoker" slot="invoker">
                    <thermal-btn 
                        variant=${ifDefined( this.variant ) }
                        size=${ifDefined( this.size ) }
                        plain=${ifDefined( this.plain ) }
                        icon="edit" iconStyle="micro"
                    >${this.label}</thermal-btn>
                </slot>

                <div class="content" slot="content">
                    <div class="form-group">
                        <label for="file-label">Label:</label>
                        <input 
                            type="text" 
                            id="file-label"
                            .value=${this.fileLabel}
                            @input=${this.handleLabelChange}
                            placeholder="Zadejte label souboru (volitelné)"
                        />
                    </div>
                    <div class="form-group">
                        <label for="file-description">Popis:</label>
                        <textarea 
                            id="file-description"
                            .value=${this.fileDescription}
                            @input=${this.handleDescriptionChange}
                            placeholder="Zadejte popis souboru (volitelné)"
                            rows="3"
                        ></textarea>
                    </div>
                    ${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ''}
                </div>

            </thermal-dialog>
        `;

    }
}
