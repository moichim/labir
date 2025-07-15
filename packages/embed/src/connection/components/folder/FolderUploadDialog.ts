import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { html, css, CSSResultGroup } from "lit";
import { FolderInfo } from "@labir/server";

@customElement("folder-upload-dialog")
export class FolderUploadDialog extends ClientConsumer {

    @property( { type: Object} )
    public folder!: FolderInfo;

    @property({ type: String })
    private errorMessage: string = "";

    @property({ type: Object })
    private selectedFiles: FileList | null = null;

    @property({ type: Function})
    public onSuccess?: (files: File[]) => void;

    public static styles?: CSSResultGroup = css`
        .content {
            padding: var(--thermal-gap);
        }

        .form-group {
            margin-bottom: var(--thermal-gap);
        }

        label {
            display: block;
            margin-bottom: calc(var(--thermal-gap) * 0.5);
            font-weight: bold;
        }

        input[type="file"] {
            width: 100%;
            padding: calc(var(--thermal-gap) * 0.5);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
        }

        .file-info {
            background: var(--thermal-slate-light);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: calc(var(--thermal-gap) * 0.5);
        }

        .file-item {
            font-size: calc(var(--thermal-fs) * 0.9);
            margin-bottom: calc(var(--thermal-gap) * 0.25);
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

    protected async handleSubmit(): Promise<boolean> {

        if (!this.selectedFiles || this.selectedFiles.length === 0) {
            this.errorMessage = "Vyberte alespoň jeden soubor";
            return false;
        }

        // Clear previous error
        this.errorMessage = "";

        try {
            const uploadPromises = Array.from(this.selectedFiles).map(async (file) => {
                const result = await this
                    .client
                    ?.routes
                    .post
                    .uploadFile(this.folder.path, file)
                    .execute();
                
                if (!result?.success) {
                    throw new Error(`Nepodařilo se nahrát soubor ${file.name}: ${result?.message}`);
                }
                
                return file;
            });

            const uploadedFiles = await Promise.all(uploadPromises);

            if (this.onSuccess) {
                this.onSuccess(uploadedFiles);
            }

            this.selectedFiles = null;
            return true;

        } catch (error) {
            this.errorMessage = error instanceof Error ? error.message : "Nepodařilo se nahrát soubory";
            return false;
        }

    }

    private handleFileChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.selectedFiles = target.files;
    }

    protected render(): unknown {
        
        return html`
            <thermal-dialog
                label="Nahrát soubor"
                .beforeClose=${() => this.handleSubmit()}
                button="Nahrát soubor"
            >
                <slot name="invoker" slot="invoker">
                    <thermal-btn size="sm" variant="primary" icon="upload" iconStyle="micro">Nahrát soubor</thermal-btn>
                </slot>

                <div class="content" slot="content">
                    <div class="form-group">
                        <label for="file-input">Vyberte soubory:</label>
                        <input 
                            type="file" 
                            id="file-input"
                            @change=${this.handleFileChange}
                            multiple
                            accept=".lrc,.jpg,.jpeg,.png,.gif,.bmp,.tiff"
                        />
                    </div>

                    ${this.selectedFiles && this.selectedFiles.length > 0 ? html`
                        <div class="file-info">
                            <strong>Vybrané soubory (${this.selectedFiles.length}):</strong>
                            ${Array.from(this.selectedFiles).map(file => html`
                                <div class="file-item">${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</div>
                            `)}
                        </div>
                    ` : ''}

                    ${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ''}
                </div>

            </thermal-dialog>
        `;

    }
}
