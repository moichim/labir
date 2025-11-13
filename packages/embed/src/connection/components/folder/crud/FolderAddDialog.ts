import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../../ClientConsumer";
import { html, css, CSSResultGroup } from "lit";
import { FolderInfo } from "@labir/server";
import { AbstractFolderDialog } from "./AbstractFolderDialog";
import { t } from "i18next";
import { T } from "../../../../translations/Languages";

@customElement("folder-add-dialog")
export class FolderAddDialog extends AbstractFolderDialog {


    protected closeLabel: string = T.create;

    protected dialogLabel: string = T.createfolder;

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

    protected async beforeClose(): Promise<boolean> {

        if (!this.folderName.trim()) {
            this.errorMessage = "Název složky je povinný";
            return false;
        }

        // Clear previous error
        this.errorMessage = "";

        const path = this.folder.path;

        const result = await this
            .client
            ?.routes
            .post
            .createFolder( path, this.folderName.trim() )
            .setDescription(this.folderDescription.trim())
            .setMayHaveFiles(
                !this.folder.may_have_files!
            )
            .execute()!;

        if (result?.success) {
            this.folderName = "";
            this.folderDescription = "";

            if (this.onSuccess) {
                this.onSuccess(result.data!.result.info);
            }
        } else {
            this.errorMessage = result?.message || "Nepodařilo se vytvořit složku";
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


    protected renderContent(): unknown {
        return html`<div class="form-group">
    <label for="folder-name">Název složky:</label>
    <input 
        type="text" 
        id="folder-name"
        .value=${this.folderName}
        @input=${this.handleInputChange}
        placeholder="Zadejte název nové složky"
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
${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ''}`;

    }

    protected override renderButtons(): unknown {
            return html`<thermal-btn
        @click=${() => this.close()}
        slot="button"    
    >${t(T.back)}</thermal-btn>`;
        }


}