import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { html, css, CSSResultGroup } from "lit";
import { FolderInfo } from "@labir/server";

@customElement("folder-edit-dialog")
export class FolderEditDialog extends ClientConsumer {

    @property( { type: Object} )
    public folder!: FolderInfo;

    @property({ type: String })
    private folderName: string = "";

    @property({ type: String })
    private folderDescription: string = "";

    @property({ type: String })
    private errorMessage: string = "";

    @property({ type: Function})
    public onSuccess?: (folder: FolderInfo) => void;

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

        input {
            width: 100%;
            padding: calc(var(--thermal-gap) * 0.5);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            font-size: var(--thermal-fs);
        }

        textarea {
            width: 100%;
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
        this.folderName = this.folder.name || this.folder.slug;
        this.folderDescription = this.folder.description || "";
    }

    protected async handleSubmit(): Promise<boolean> {

        if (!this.folderName.trim()) {
            this.errorMessage = "Název složky je povinný";
            return false;
        }

        // Clear previous error
        this.errorMessage = "";

        const result = await this
            .client
            ?.routes
            .post
            .updateFolder(this.folder.path)
            .setName(this.folderName.trim())
            .setDescription(this.folderDescription.trim())
            .execute()!;

        if (result?.success) {
            if (this.onSuccess) {
                this.onSuccess(result.data!.result.info);
            }
        } else {
            this.errorMessage = result?.message || "Nepodařilo se upravit složku";
        }

        return result?.success;

    }

    private handleInputChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.folderName = target.value;
    }

    private handleDescriptionChange(event: Event) {
        const target = event.target as HTMLTextAreaElement;
        this.folderDescription = target.value;
    }

    protected render(): unknown {
        
        return html`
            <thermal-dialog
                label="Upravit složku"
                .beforeClose=${() => this.handleSubmit()}
                button="Uložit změny"
            >
                <slot name="invoker" slot="invoker">
                    <thermal-btn size="sm" variant="primary" icon="edit" iconStyle="micro">Upravit složku</thermal-btn>
                </slot>

                <div class="content" slot="content">
                    <div class="form-group">
                        <label for="folder-name">Název složky:</label>
                        <input 
                            type="text" 
                            id="folder-name"
                            .value=${this.folderName}
                            @input=${this.handleInputChange}
                            placeholder="Zadejte název složky"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="folder-description">Popis:</label>
                        <textarea 
                            id="folder-description"
                            .value=${this.folderDescription}
                            @input=${this.handleDescriptionChange}
                            placeholder="Zadejte popis složky (volitelné)"
                            rows="3"
                        ></textarea>
                    </div>
                    ${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ''}
                </div>

            </thermal-dialog>
        `;

    }
}
