import { customElement, property, state } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import icons from "../../../utils/icons";
import { FileInfo } from "@labir/server";
import { FolderInfo } from "packages/server/client/dist";
import { TemplateResult, html, css, CSSResultGroup, nothing, PropertyValues } from "lit";
import { TimeFormat } from "@labir/core";
import { booleanConverter } from "../../../utils/converters/booleanConverter";
import { consume } from "@lit/context";
import { compactContext, DisplayMode, displayModeContext, editTagsContext, showDiscussionContext } from "../../ClientContext";

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

    @property({ type: Function })
    public onFileDelete?: (file: FileInfo) => void = () => { };

    @consume({ context: compactContext, subscribe: true })
    @property({ type: Boolean, reflect: true, converter: booleanConverter(false) })
    protected compact: boolean = false;


    @property({ type: String, reflect: true })
    @consume({ context: displayModeContext, subscribe: true })
    protected displayMode: DisplayMode = DisplayMode.GRID;

    @property({ type: String, reflect: true })
    @consume({ context: showDiscussionContext, subscribe: true })
    protected showDiscussion: boolean = false;

    @property({ type: Boolean, reflect: true })
    @consume({ context: editTagsContext, subscribe: true })
    public editableTags: boolean = false;

    protected icon = icons.image.outline("icon");

    protected updated(changedProperties: Map<string, any>): void {
        if (changedProperties.has('compact')) {
            if (this.compact) {
                this.classList.add('compact');
                this.classList.remove("detailed");
            } else {
                this.classList.remove('compact');
                this.classList.add("detailed");
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
            <div class="header_text_time" @click=${() => this.onFileClick(this.file)}>
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


    protected renderDescription(): unknown {

        if (!this.file.description) {
            return nothing;
        }

        return html`
            <p class="description">${this.file.description}</p>
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

        if (this.file.comments.length > 0 || (this.isLoggedIn && this.folder.may_manage_files_in)) {
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
            .onDelete=${this.onFileDelete}
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
            height: 100%; /* Přidáno pro výšku */
        }

        file-provider {
            display: contents;
        }

        p.description {
            margin: 0; padding: 0;
        }

        file-canvas {
            display: block;
            flex-grow: 1; /* Přidáno pro vyplnění výšky */
            min-height: 0; /* Důležité pro správné zkracování */
        }

        .header_actions_num-analyses {
            font-size: .6em;
            color: var(--thermal-slate);
        }

        h2 {
            margin: 0;
            padding: 0;
            font-size: 1em;
            line-height: 1.2;
        }

        .header_text {
            cursor: pointer;

            h2,
            .header_text_time {
                transition: color 0.2s ease-in-out;
            }
        }

        :host(.compact[displaymode="grid"]) {
            file-edit-dialog,
            file-comments-dialog,
            file-delete-dialog,
            .header_icon,
            .header_actions_num-analyses,
            p.description {
                display: none;
            }

            header {
                display: flex;
                box-sizing: border-box;
                width: 100%;
                align-items: center;
                flex-wrap: nowrap;
                margin-top: .5em;
            }

            .header_text {
                flex-grow: 1;
                display: flex;
                align-items: center;
                gap: .5em;
                min-width: 0;

                cursor: pointer;

                &:hover {
                    .header_text_time {
                        color: var(--thermal-primary);
                    }
                }
            }

            .header_actions {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: .25em;
                margin-left: auto; /* Zarovnání doprava */
            }

            .header_text_time {
                white-space: nowrap;
                flex-shrink: 0;
            }

            h2 {
                min-width: 0;
                flex-shrink: 1;
                overflow: hidden;
                font-weight: normal;
                color: var(--thermal-slate);
            }

            h2 span {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            file-tags {
                margin-left: auto; /* Tagy vždy doprava */
            }
        }

        :host(.detailed[displaymode="grid"]) {
            border: 1px solid var(--thermal-slate);
            border-radius: 0 0 var(--thermal-radius) var(--thermal-radius);
            overflow: hidden;

            display: flex;
            flex-direction: column;

            p.description {
                display: none;
                margin: 0; padding: 0;
            }

            file-canvas {
                min-height: 0;
                display: block;
            }

            header {
                width: 100%;
                box-sizing: border-box;
                min-height: 60px;
                height: auto;
                background: var(--thermal-background);
                padding: .5em;
                display: grid;
                grid-template-columns: 1fr 1.2em;
                grid-template-rows: 1fr 1em;
                gap: calc(var(--thermal-gap) * 0.5);
                align-self: stretch;
                flex-grow: 1;
            }

            .header_text {
                grid-column: 1;
                grid-row: 1;
                display: flex;
                flex-direction: column;
                gap: .25em;
                align-self: stretch;
                justify-self: stretch;

                &:hover {
                    
                    h2,
                    .header_text_time {
                        color: var(--thermal-primary);
                    }
                }
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
                height: 1em;
                justify-content: flex-end; /* Zarovnání doprava */
            }

            .header_text_time {
                font-size: .8em;
                color: var(--thermal-slate-dark);
            }

            .file-comments {
                background: var(--thermal-background);
                padding: .5em;
                width: 100%;
                box-sizing: border-box;
                file-comments {
                    border-radius: var(--thermal-radius);
                    border: 1px solid var(--thermal-slate);
                    background: var(--thermal-slate-light);
                    padding: .5em;
                }
            }

            file-tags {
                margin-left: auto; /* Tagy vždy doprava */
            }

        }

        :host([displaymode="table"]) {
            display: table-row;
            vertical-align: top;
            border-bottom: .5em solid transparent;

            file-provider {
                display: contents;
            }

            main {
                width: 500px;
            }

            main,
            header,
            file-analysis-table,
            .file-comments {
                display: table-cell;
                vertical-align: top;
            }

            header {
                background: var(--thermal-background);
                border-radius: var(--thermal-radius);
                box-sizing: border-box;
                padding: 1em;
                height: 100%;
                position: relative;

                padding-bottom: 2em;
            }

            .header_text {
                display: flex;
                flex-direction: column;
                gap: 1em;
                min-height: fit-content;

                &:hover {   
                    h2,
                    .header_text_time {
                        color: var(--thermal-primary);
                    }
                }
            }

            .header_icon {
                display: none;
            }

            .header_actions {
                display: flex;
                gap: .25em;
                align-items: center;
                vertical-align: bottom;
                position: absolute;
                bottom: 1em;
                left: 1em;
                right: 1em;
                justify-content: flex-end; /* Zarovnání doprava */
            }

            p.description {
                font-size: .8em;
                color: var(--thermal-slate);
            }

            .file-comments {
                display: block;
                height: 100%;
                width: 300px;
            }

            file-tags {
                margin-left: auto; /* Tagy vždy doprava */
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
                autoHighlight="true"
            >

                <main>
                    <file-canvas></file-canvas>
                </main>



                <header>

                    <div class="header_text" @click=${() => this.onFileClick(this.file)}>

                        ${this.renderTime()}

                        ${this.renderLabel()}

                        ${this.renderDescription()}

                    </div>

                    <div class="header_icon">
                        ${this.i(this.icon)}
                    </div>

                    <div class="header_actions">

                        ${this.renderActionDetail()}

                        ${this.renderActionEdit()}

                        ${!this.showDiscussion ? this.renderActionComments() : nothing}

                        ${this.renderActionDelete()}

                        ${this.renderNumAnalyses()}

                        <file-range-propagator></file-range-propagator>

                        <file-tags
                            .file=${this.file}
                            .folder=${this.folder}
                            .onChange=${this.onChange}
                            inline="true"
                            .editable="${this.editableTags}"
                            size="sm"
                        ></file-tags>
                    </div>

                </header>


                <file-analysis-table></file-analysis-table>

                
                ${this.showDiscussion === true
                ? html`
                    <div class="file-comments">
                        <file-comments
                            .file=${this.file}
                            .folder=${this.folder}
                            .onChange=${this.onChange}
                            style="height: 300px;"
                        ></file-comments>
                    </div>`
                : nothing
            }


            </file-provider>
        `;
    }

}