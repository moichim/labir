import { Comment, FileInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FolderInfo } from "@labir/server";
import { ClientConsumer } from "../ClientConsumer";
import { T } from "../../../translations/Languages";
import { t } from "i18next";

@customElement("file-comment-form")
export class FileCommentForm extends ClientConsumer {

    @property({ type: Object })
    public comment?: Comment;

    @property({ type: Object })
    public file!: FileInfo;

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void = () => { };

    @state()
    protected error?: string;

    @state()
    protected message: string = "";

    // Initialize message from existing comment when component updates
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
        if (changedProperties.has('comment') && this.comment && !this.message) {
            this.message = this.comment.message;
        }
    }

    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
            font-size: var( --thermal-fs );
        }


        main {
            display: flex;
            flex-direction: column;
            gap: .25em;
        }

        textarea {
            min-height: 40px;
            padding: .5em;
            resize: vertical;

            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);

            font-family: inherit;
            font-size: calc(var(--thermal-fs) * 0.8);

            color: var(--thermal-foreground);
            background: var(--thermal-background);
            
        }

        .form-actions {
            display: flex;
            justify-content: flex-end;
        }

        .small {
            font-size: calc(var(--thermal-fs) * 0.8);
        }

        .slate {
            color: var(--thermal-slate);
        }
    
    `;

    protected async handleSubmit(event: Event): Promise<void> {

        event.preventDefault();

        console.log("Submit message");

        if (this.client && this.message.trim().length >= 3) {

            // Pokud nebyl poskytnut comment, tak vytvoř nový
            if (!this.comment) {

                const request = this.client?.routes.post.fileAddComment(this.folder.path, this.file.fileName, this.message.trim());

                const result = await request.execute();

                if (result.success) {
                    this.message = ""; // Clear form after successful submission
                    this.error = undefined;
                    this.onChange?.(result.data.file);
                } else {
                    this.error = result.message;
                }

            } else {

                const request = this.client.routes.post.fileUpdateComment(
                    this.folder.path,
                    this.file.fileName,
                    this.comment.timestamp,
                    this.message.trim()
                );

                const result = await request.execute();

                if (result.success) {
                    this.message = ""; // Clear form after successful submission
                    this.error = undefined;
                    this.onChange?.(result.data.file);
                } else {
                    this.error = result.message;
                }

            }

        }

    }

    protected handleMessageChange(event: Event): void {
        const target = event.target as HTMLTextAreaElement;
        this.message = target.value;
    }

    protected handleKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const canSubmit = this.message.trim().length >= 3;
            if (canSubmit) {
                this.handleSubmit(event);
            }
        }
    }

    protected mayManage(): boolean {

        // Pookud uživatel smí spravovat soubory či složky v dané složce a pokud je zároveň autorem komentáře, může jej spravovat
        if (
            this.folder
            && (
                this.folder.may_manage_files_in
                || this.folder.may_manage_folders_in
            )
        ) {
            return true;
        }

        return false;

    }

    protected render(): unknown {

        // Pokud klient není připojen, pokud soubor, komentář či složka neexistují, nic nevykresluj
        if (!this.client || !this.file || !this.folder) {
            return nothing;
        }

        const canSubmit = this.message.trim().length >= 3;
        const isEditing = !!this.comment;

        const label = isEditing
            ? t(T.editcomment)
            : t(T.addcomment);

        return html`
            <form >
                <main>
                    <textarea 
                        placeholder=${label}
                        .value=${this.message}
                        @input=${this.handleMessageChange}
                        @keydown=${this.handleKeyDown}
                        required
                    ></textarea>
                    
                    ${this.error ? html`<div class="error">${this.error}</div>` : nothing}
                    
                    <div class="form-actions">
                        <thermal-btn 
                            variant="primary" 
                            size="sm"
                            type="submit"
                            ?disabled=${!canSubmit}
                            @click=${this.handleSubmit}
                        >
                            ${label}
                        </thermal-btn>

                    </div>
                </main>
            </form>
        `;

    }


}