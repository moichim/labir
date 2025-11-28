import { customElement, property, state } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { css, CSSResultGroup, html, nothing } from "lit";
import { FileInfo, FolderInfo } from "@labirthermal/server";
import { BtnSizes, BtnVariants } from "../../../ui/Btn";
import { ifDefined } from "lit/directives/if-defined.js";
import { T } from "../../../translations/Languages";
import { t } from "i18next";
import { booleanConverter } from "../../../utils/converters/booleanConverter";

@customElement("file-delete-dialog")
export class FileDeleteDialog extends ClientConsumer {

    @property({ type: String, converter: booleanConverter(false) })
    public showLabel: boolean = false;

    @property({ type: String })
    public label: string = t(T.deletefile);

    @property({ type: String, reflect: false })
    public variant?: BtnVariants;

    @property({ type: String, reflect: true })
    public size: BtnSizes = "sm";

    @property({ type: String })
    public plain: boolean = false;

    @property({ type: Object })
    public file!: FileInfo;

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: Function })
    public onDelete?: (file: FileInfo) => void = () => { };

    @state()
    protected isOpen: boolean = false;

    @state()
    protected isDeleting: boolean = false;

    @state()
    protected error?: string;

    public static styles?: CSSResultGroup | undefined = css`
        .content {
            padding: var(--thermal-gap);
        }

        .warning {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            margin-bottom: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
        }

        .file-info {
            background: var(--thermal-background);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin: calc(var(--thermal-gap) * 0.5) 0;
        }

        .file-name {
            font-weight: bold;
            font-size: calc(var(--thermal-fs) * 1.1);
        }

        .file-description {
            color: var(--thermal-slate);
            font-size: calc(var(--thermal-fs) * 0.9);
            margin-top: calc(var(--thermal-gap) * 0.25);
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }
    `;

    protected async handleDelete(): Promise<boolean> {
        if (!this.client || this.isDeleting) return false;

        this.error = undefined;

        try {
            const request = this.client.routes.post.deleteFile(this.folder.path, this.file.fileName);
            const result = await request.execute();

            if (result.success) {
                this.isOpen = false;
                this.onDelete?.(this.file);
                return true;
            } else {
                this.error = result.message;
            }
        } catch (error) {
            this.error = "Došlo k neočekávané chybě při mazání souboru.";
        }

        return false;
    }

    protected mayDelete(): boolean {
        return !!(
            this.folder &&
            (this.folder.may_manage_files_in || this.folder.may_manage_folders_in)
        );
    }

    protected render(): unknown {
        if (!this.mayDelete()) {
            return nothing;
        }

        const label = t(T.deletefile);

        return html`

            <thermal-dialog
                label=${label}
                button=${label}
                .beforeClose=${async () => {
                this.error = undefined;
                return await this.handleDelete();
            }}
            >

                <thermal-btn
                    slot="invoker"
                    variant=${ifDefined(this.variant)}
                    size=${ifDefined(this.size)}
                    plain=${ifDefined(this.plain)}
                    icon="trash"
                    iconStyle="micro"
                    tooltip=${label}
                >
                    ${this.showLabel ? label : nothing }
                </thermal-btn>

                <div slot="content" class="dialog-content">
                    
                    <div class="warning">
                        <strong>Pozor!</strong> Tato akce je nevratná.
                    </div>
                    
                    <p>
                        Opravdu chcete smazat soubor <strong>${this.file.fileName}</strong>?
                        ${this.file.label ? html`<br>(<em>${this.file.label}</em>)` : nothing}
                    </p>

                    ${this.error ? html`<div class="error">${this.error}</div>` : nothing}

                </div>
            </thermal-dialog>
        `;
    }
}
