import { ThermalGroup, TimeFormat } from "@labirthermal/core";
import { FileInfo } from "@labirthermal/server";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { FolderInfo } from "packages/server/client/dist";
import { FileProviderElement } from "../../../hierarchy/providers/FileProvider";
import { groupContext } from "../../../hierarchy/providers/context/GroupContext";
import { T } from "../../../translations/Languages";
import { booleanConverter } from "../../../utils/converters/booleanConverter";
import icons from "../../../utils/icons";
import { compactContext, DisplayMode, displayModeContext, editTagsContext, showDiscussionContext, syncAnalysisContext } from "../../ClientContext";
import { ClientConsumer } from "../ClientConsumer";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("server-file-thumbnail")
export class FileThumbnail extends ClientConsumer {

    @property({ type: Object })
    public file!: FileInfo;

    @consume({ context: groupContext, subscribe: true })
    @state()
    protected group?: ThermalGroup;

    protected instanceRef: Ref<FileProviderElement> = createRef();



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

    @consume({ context: syncAnalysisContext, subscribe: true })
    protected syncAnalyses = false;

    @state()
    protected hasDisplayedAnalysis: boolean = false;

    protected icon = icons.image.outline("icon");

    protected get fileObject() {
        const ref = this.instanceRef.value;
        return ref?.file;
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.hydrate();
        if (this.instanceRef.value) {

            this.instanceRef.value.onSuccess.set(this.UUID, () => {
                this.hydrate();
            });

        }
    }

    protected hydrate() {

        // Read the analysis right away
        if (this.fileObject) {
            this.hasDisplayedAnalysis = this.fileObject.analysis.value.length > 0;
            this.fileObject.analysis.addListener(this.UUID, analyses => {
                this.hasDisplayedAnalysis = analyses.length > 0;
            });
        }

    }


    protected dehydrate() {
        this.fileObject?.analysis.removeListener(this.UUID);
    }

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

    connectedCallback(): void {
        super.connectedCallback();
        this.hydrate();
    }


    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.dehydrate();
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
            size="${this.displayMode === DisplayMode.TABLE ? "md" : "sm"}"
            @click=${() => this.onFileClick(this.file)}
        >${t(T.detail).toLowerCase()}</thermal-btn>`;

    }

    protected renderActionEdit(): unknown {

        if (!this.folder.may_manage_files_in) {
            return nothing;
        }

        return html`<file-edit-dialog
            .file=${this.file}
            .folder=${this.folder}
            .onSuccess=${() => {
                this.onChange?.(this.file!);
            }}
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

    public restoreAnalyses() {

        const instance = this.instanceRef.value?.file;

        if (!instance) {
            return;
        }

        this.file.analyses.forEach(analysis => {
            instance.slots.createAnalysisFromSerialized(analysis)?.setSelected();
        })

    }


    protected renderAnalyses(): unknown {

        let content: unknown = nothing;

        // For grid, display only the table
        if (this.displayMode === DisplayMode.GRID) {
            content = html`<file-analysis-table></file-analysis-table>`;
        }

        // For table, display a complex and store buttons
        else if (this.displayMode === DisplayMode.TABLE) {

            const hasStoredAnalyses = this.file.analyses.length > 0;
            let restoreLabel: undefined | string = undefined;

            if (hasStoredAnalyses) {
                restoreLabel = `Načíst uložené analýzy (${this.file.analyses.length})`;
            }


            content = html`

            <div class="analyses-inner">
                
                <file-analysis-complex showhint="false">
                    ${hasStoredAnalyses && !this.syncAnalyses ? html`<thermal-btn 
                        @click=${this.restoreAnalyses.bind(this)}
                        size="md"
                        variant="primary"
                        icon="restore"
                        iconStyle="outline"
                    >
                        ${restoreLabel}
                    </thermal-btn>` : nothing}
                </file-analysis-complex>

                ${this.hasDisplayedAnalysis
                    ? html`<aside>

                    ${!this.syncAnalyses
                            ? html`<thermal-btn
                            icon="link"
                            iconStyle="micro"
                            tooltip="Aplikovat tyto analýzy na všechny soubory ve složce"
                            @click=${() => {

                                    // Získej instanci současného souboru
                                    const instance = this.instanceRef.value?.file;

                                    if (!instance || !this.group) {
                                        return;
                                    }

                                    this.group.analysisSync.copyAllSlotsToAllInstances( instance );

                                }}
                        ></thermal-btn>
                        <file-analysis-remove-button disalbled="false"></file-analysis-remove-button>
                        `
                            : nothing
                        }

                    ${this.folder.may_manage_files_in
                            ? html`
                        <file-analysis-store-button
                            size="md"
                            .info=${this.file}
                            .folder=${this.folder}
                            .onChange=${this.onChange}

                        ></file-analysis-store-button>`
                            : nothing}


                    <file-analysis-restore-button
                        size="md"
                        .info=${this.file}
                        .folder=${this.folder}
                        .onChange=${this.onChange}
                    ></file-analysis-restore-button>

                </aside>`
                    : nothing}

            </div>
            `;


        }


        return html`<div class="analyses">
            ${content}
        </div>`;

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
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
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
                    border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
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
            border-bottom: .5em var(--thermal-border-style)transparent;

            file-provider {
                display: contents;
            }

            main {
                width: 500px;
            }

            main,
            header,
            .analyses,
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

                min-width: 220px;
            }

            file-canvas {
                min-width: 300px;
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
                flex-wrap: wrap;
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

            .analyses {

                padding: .5em;
                border-radius: var(--thermal-radius);
                background: var( --thermal-background );

                .analyses-inner {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: .5em;

                    file-analysis-complex {
                        flex-grow: 1;
                    }

                    aside {
                        display: flex;
                        gap: .5em;
                        width: 100%;
                    }
                }

                file-analysis-complex {
                    background: var(--thermal-background);
                }

            }


        }
    `;




    protected render(): TemplateResult {

        const visibleUrl = this.file.visual
            ? this.file.visual
            : undefined;

        return html`
            <file-provider
                thermal=${this.file.url}
                visible=${ ifDefined(visibleUrl) }
                batch="true"
                autoclear="true"
                role="article"
                autoHighlight="true"
                ${ref(this.instanceRef)}
            >

                <main>
                    <file-canvas></file-canvas>
                    <file-timeline></file-timeline>
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

                        <file-range-propagator 
                            variant="${this.compact ? "default" : "background"}"
                            .plain="true"
                            size="${this.displayMode === DisplayMode.TABLE ? "md" : "sm"}"
                        ></file-range-propagator>

                        ${this.renderActionEdit()}

                        ${!this.showDiscussion ? this.renderActionComments() : nothing}

                        ${this.renderActionDelete()}

                        ${this.renderNumAnalyses()}

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

                ${this.renderAnalyses()}

                
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