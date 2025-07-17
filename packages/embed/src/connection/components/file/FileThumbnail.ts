import { customElement, property, state } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import icons from "../../../utils/icons";
import { FileInfo } from "@labir/server";
import { FolderInfo } from "packages/server/client/dist";
import { TemplateResult, html, css, CSSResultGroup, nothing, PropertyValues } from "lit";
import { TimeFormat } from "@labir/core";
import { booleanConverter } from "../../../utils/converters/booleanConverter";

@customElement("server-file-thumbnail")
export class FileThumbnail extends ClientConsumer {

    @property({ type: Object })
    public file!: FileInfo;

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: Function })
    public onFileClick: (file: FileInfo) => void = () => { };

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void = () => { };

    @property({ type: String, reflect: true, converter: booleanConverter(false) })
    protected compact: boolean = false;

    protected icon = icons.image.outline("icon");

    protected updated(changedProperties: Map<string, any>): void {
        if (changedProperties.has('compact')) {
            if (this.compact) {
                this.classList.add('compact');
                this.classList.remove( "detailed" );
            } else {
                this.classList.remove('compact');
                this.classList.add( "detailed" );
            }
        }
    }

    protected renderTime(): unknown {

        const time = this.file.timestamp
            ? TimeFormat.human(this.file.timestamp)
            : undefined;

        if (!time) {
            return nothing
        }

        return html`
            <div class="header_text_time">
                ${time}
            </div>`;
    }

    protected renderLabel(): unknown {

        if (!this.file.label) {
            return nothing;
        }

        return html`
            <h2><span>${this.file.label}</span></h2>
        `;
    }


    protected renderActionDetail(): unknown {

        const variant = this.compact ? "default" : "primary";

        return html`<thermal-btn 
            variant=${variant}
            size="sm"
            @click=${() => this.onFileClick(this.file)}
        >Detail</thermal-btn>`;

    }

    protected renderActionEdit(): unknown {

        if (!this.folder.may_manage_files_in) {
            return nothing;
        }

        return html`<file-edit-dialog
            .file=${this.file}
            .folder=${this.folder}
            .onSuccess=${this.onChange}
            label=""
            plain="true"
            variant="background"
            size="sm"
        ></file-edit-dialog>`;

    }

    protected renderActionComments(): unknown {

        if (this.file.comments.length > 0 || this.isLoggedIn) {
            return html`<file-comments-dialog 
                .file=${this.file}
                .folder=${this.folder}
                .onSuccess=${this.onChange}
                label=""
                plain="true"
                variant="background"
                size="sm"
                badge="true"
            ></file-comments-dialog>`;
        }

        return nothing;

    }

    protected renderActionDelete(): unknown {

        if (!this.folder.may_manage_files_in) {
            return nothing;
        }

        return html`<file-delete-dialog 
            .file=${this.file}
            .folder=${this.folder}
            .onDelete=${this.onChange}
            label=""
            plain="true"
            variant="background"
            size="sm"
        ></file-delete-dialog>`;

    }

    protected renderNumAnalyses(): unknown {
        if (!this.file.analyses || this.file.analyses.length === 0) {
            return nothing;
        }

        return html`
            <span class="header_actions_num-analyses">
                ${this.file.analyses.length} analýzy
            </span>
        `;
    }




    public static styles?: CSSResultGroup | undefined = css`
        :host {
            display: block;
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }


        file-provider {
            display: contents;
        }

        h2 {
            margin: 0;
            padding: 0;
            font-size: 1em;
            line-height: 1.2;
        }

        :host(.compact) {

            file-edit-dialog,
            file-comments-dialog,
            file-delete-dialog,
            .header_icon,
            .header_actions_num-analyses {
                display: none;
            }

            header {
                display: flex;
                box-sizing: border-box;
                width: 100%;
                align-items: center;
                flex-wrap: nowrap;
                margin-bottom: .5em;
            }

            .header_text {
                flex-grow: 1;
                display: flex;
                align-items: center;
                gap: .5em;
                min-width: 0; /* Important for flex item shrinking */
            }

            .header_actions {
                flex-shrink: 0; /* Prevent actions from shrinking */
            }

            .header_text_time {
                white-space: nowrap;
                flex-shrink: 0; /* Time should not shrink */
            }

            h2 {
                min-width: 0; /* Allow h2 to shrink */
                flex-shrink: 1; /* Allow h2 to shrink */
                overflow: hidden; /* Hide overflow on h2 itself */
                font-weight: normal;

                color: var(--thermal-slate);
            }

            h2 span {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

        }

        :host(.detailed) {

            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            overflow: hidden;

            header {
                width: 100%;
                box-sizing: border-box;
                min-height: 60px;
                background: var(--thermal-background);
                padding: .5em;
                display: grid;
                grid-template-columns: 1fr 1.2em;
                grid-template-rows: auto auto;
                gap: calc(var(--thermal-gap) * 0.5);
            }

            .header_text {
                grid-column: 1;
                grid-row: 1;
                display: flex;
                flex-direction: column;
                gap: .25em;
            }

            .header_icon {
                grid-column: 2;
                grid-row: 1;
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;
                color: var(--thermal-slate);
            }

            .header_actions {
                grid-column: 1 / -1;
                grid-row: 2;
                display: flex;
                gap: .25em;
                align-items: center;
            }


            .header_text_time {
                font-size: .8em;
                color: var(--thermal-slate-dark);
            }

            .header_actions_num-analyses {
                font-size: .6em;
                color: var(--thermal-slate);
            }

        }

    `;




    protected render(): TemplateResult {
        return html`
            <file-provider
                thermal=${this.file.url}
                batch="true"
                autoclear="true"
                role="article"
            >
                <header>

                    <div class="header_text">

                        ${this.renderTime()}

                        ${this.renderLabel()}

                    </div>

                    <div class="header_icon">
                        ${this.i(this.icon)}
                    </div>

                    <div class="header_actions">

                        ${this.renderActionDetail()}

                        ${this.renderActionEdit()}

                        ${this.renderActionComments()}

                        ${this.renderActionDelete()}

                        ${this.renderNumAnalyses()}
                    </div>

                </header>

                <main>
                    <file-canvas></file-canvas>
                </main>

            </file-provider>
        `;
    }

}