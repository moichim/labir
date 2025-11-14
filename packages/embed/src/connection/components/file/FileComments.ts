import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FileInfo } from "@labirthermal/server";
import { FolderInfo } from "packages/server/client/dist";
import { css, CSSResultGroup, html, nothing } from "lit";
import { t } from "i18next";
import { T } from "../../../translations/Languages";

@customElement("file-comments")
export class FileComments extends ClientConsumer {

    @property({ type: Object })
    public file!: FileInfo;

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: Function })
    onChange: (file: FileInfo) => void = () => { };

    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            font-size: var(--thermal-fs);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: .25em;
            flex: 1;
            min-height: 100px;
            overflow-y: auto;
            padding: .25em 0;
        }

        .form-container {
            flex-shrink: 0;
            margin-top: .25em;
        }

        .placeholder {

            height: 100%;
            padding: .5em;

            display: flex;
            justify-content: center;
            align-items: center;

            border: 1px dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);

            font-size: .8em;
            color: var(--thermal-slate);

            &.tiny {
            
                height: 40px;
                text-align: center;

            
            }


        }
    
    `;

    protected firstUpdated(): void {
        // Use timeout to ensure DOM is fully rendered before scrolling
        setTimeout(() => this.scrollToBottom(), 0);
    }

    protected updated(): void {
        this.scrollToBottom();
    }

    private scrollToBottom(): void {
        const listElement = this.shadowRoot?.querySelector('.list') as HTMLElement;
        if (listElement) {
            listElement.scrollTo({
                top: listElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    }

    protected render(): unknown {

        return html`

            <div class="list">
                ${this.file.comments && this.file.comments.length > 0
                ? this.file.comments.map((comment) => html`
                        <file-comment
                            .comment=${comment}
                            .file=${this.file}
                            .folder=${this.folder}
                            .onChange=${this.onChange}
                        ></file-comment>
                    `)
                : html`<div class="placeholder">
                    <span>${t(T.nocomments)}</span>
                </div>`
            }
            </div>
            
            ${this.folder && this.folder.may_manage_files_in
                ? html`
                    <div class="form-container">
                        <file-comment-form 
                            .file=${this.file} 
                            .folder=${this.folder} 
                            .onChange=${(file: FileInfo) => {
                                this.onChange(file);
                                setTimeout( () => this.scrollToBottom(), 0 );
                            }}>
                        </file-comment-form>
                    </div>
                    `
                : nothing
            }

            ${this.folder && !this.folder.may_manage_files_in
                ? html`<div class="placeholder  tiny"><span>Nemáte oprávnění komentovat tento soubor</span></div>`
                : nothing
            }
        `;
    }

}