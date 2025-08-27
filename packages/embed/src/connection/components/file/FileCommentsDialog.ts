import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { html, css, CSSResultGroup, nothing } from "lit";
import { FileInfo, FolderInfo } from "@labir/server";
import { BtnSizes, BtnVariants } from "../../../ui/Btn";
import { ifDefined } from "lit/directives/if-defined.js";
import { TimeFormat } from "@labir/core";
import { T } from "../../../translations/Languages";
import { t } from "i18next";

@customElement("file-comments-dialog")
export class FileCommentsDialog extends ClientConsumer {

    @property({ type: String })
    public label: string = "Komentáře";

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
    public onSuccess?: (file: FileInfo) => void;

    @property({ type: String })
    public hasBadge: boolean = false;

    public static styles?: CSSResultGroup = css`
        .content {
            min-height: 500px;
            min-width: 400px;
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }

        :host(.has-comments) thermal-btn::after {
            content: '';
            position: absolute;
            top: -0px;
            right: -0px;
            width: 6px;
            height: 6px;
            background: var(--thermal-danger, #f00);
            border-radius: 50%;
            pointer-events: none;
        }

        :host(.has-comments) thermal-btn {
            position: relative;
        }

        file-comments {
            height: 400px;
        }

        .file {
            padding: .5em;
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            box-sizing: border-box;

            display: flex;
            gap: .25em;
            flex-direction: column;

            > * {
                margin: 0;
                padding: 0;
                font-size: 1em;
            }


        }

        .small {
            font-size: .8em;
        }
    `;

    protected render(): unknown {

        const label = t(T.comments);


        return html`
            <thermal-dialog
                label=${label}
            >
                <slot name="invoker" slot="invoker">
                    <thermal-btn 
                        variant=${ifDefined( this.variant ) }
                        size=${ifDefined( this.size ) }
                        plain=${ifDefined( this.plain ) }
                        icon="comment" 
                        iconStyle="micro"
                        tooltip=${label}
                    >${this.label}</thermal-btn>
                </slot>

                <div class="content" slot="content">

                    <div class="file">
                        <p class="small">${TimeFormat.human( this.file.timestamp)}</p>
                        ${this.file.label 
                            ? html`<h2>${this.file.label}</h2>` 
                            : nothing }
                        ${this.file.description
                            ? html`<p class="small">${this.file.description}</p>`
                            : nothing }
                    </div>

                    <file-comments
                        .file=${this.file}
                        .folder=${this.folder}
                        .onChange=${this.onSuccess}
                    ></file-comments>
                </div>

            </thermal-dialog>
        `;
    }

    protected updated(): void {
        if (this.file?.comments && this.file.comments.length > 0) {
            this.classList.add('has-comments');
        } else {
            this.classList.remove('has-comments');
        }
    }
}
