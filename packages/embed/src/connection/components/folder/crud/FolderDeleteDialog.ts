import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../../ClientConsumer";
import { html, css, CSSResultGroup } from "lit";
import { FolderInfo } from "@labir/server";
import { T } from "../../../../translations/Languages";
import { t } from "i18next";

@customElement("folder-delete-dialog")
export class FolderDeleteDialog extends ClientConsumer {

    @property( { type: Object} )
    public folder!: FolderInfo;

    @property({ type: Function})
    public onSuccess?: (folder: FolderInfo) => void;

    @property({ type: String })
    private errorMessage: string = "";

    public static styles?: CSSResultGroup = css`
        .content {
            padding: var(--thermal-gap);
        }

        .warning {
            background: var(--thermal-danger-light, #fee);
            border: 1px solid var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            margin-bottom: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
        }

        .folder-info {
            background: var(--thermal-background);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin: calc(var(--thermal-gap) * 0.5) 0;
        }

        .folder-name {
            font-weight: bold;
            font-size: calc(var(--thermal-fs) * 1.1);
        }

        .folder-description {
            color: var(--thermal-slate);
            font-size: calc(var(--thermal-fs) * 0.9);
            margin-top: calc(var(--thermal-gap) * 0.25);
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

        // Clear previous error
        this.errorMessage = "";

        const result = await this
            .client
            ?.routes
            .post
            .deleteFolder(this.folder.path)
            .execute()!;

        if (result?.success) {
            if (this.onSuccess) {
                this.onSuccess(this.folder);
            }
        } else {
            this.errorMessage = result?.message || "Nepodařilo se smazat složku";
        }

        return result?.success;

    }

    protected render(): unknown {

        const label = t(T.deletefolder);
        
        return html`
            <thermal-dialog
                label=${label}
                .beforeClose=${() => this.handleSubmit()}
                button=${label}
            >
                <slot name="invoker" slot="invoker">
                    <thermal-btn size="md" variant="foreground" icon="trash" iconStyle="micro" tooltip=${label}></thermal-btn>
                </slot>

                <div class="content" slot="content">
                    <div class="warning">
                        <strong>Upozornění:</strong> Tato akce je nevratná. Složka a veškerý její obsah bude trvale smazán.
                    </div>

                    <p>Opravdu chcete smazat následující složku?</p>

                    <div class="folder-info">
                        <div class="folder-name">${this.folder.name || this.folder.slug}</div>
                        ${this.folder.description ? html`<div class="folder-description">${this.folder.description}</div>` : ''}
                        ${this.folder.lrc_count > 0 ? html`<div class="folder-description">Obsahuje ${this.folder.lrc_count} souborů</div>` : ''}
                    </div>
                    
                    ${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ''}
                </div>

            </thermal-dialog>
        `;

    }
}
