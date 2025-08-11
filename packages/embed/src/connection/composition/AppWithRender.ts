import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { AppWithContent } from "./AppWithContent";
import { AppState } from "./AppWithState";
import { FileInfo, FolderInfo, BreadcrumbItem } from "@labir/server";
import { provide } from "@lit/context";
import { property } from "lit/decorators.js";
import { compactContext, compactContextSetter, DisplayMode, displayModeContext, displayModeSetterContext, editTagsContext, editTagsSetterContext, showDiscussionContext, showDiscussionSetterContext, syncAnalysisContext, syncAnalysisSetterContext } from "../ClientContext";

/** 
 * This layer provides the necessary render methods
 */
export abstract class AppWithRender extends AppWithContent {



    @property({ type: String, reflect: true })
    @provide({ context: compactContext })
    protected compact: boolean = false;

    @provide({ context: compactContextSetter })
    protected compactSetter: (compact: boolean) => void = (compact: boolean) => {
        this.compact = compact;
        this.requestUpdate();
    };


    @property({ type: String, reflect: true })
    @provide({ context: displayModeContext })
    protected displayMode: DisplayMode = DisplayMode.GRID;

    @provide({ context: displayModeSetterContext })
    protected displayModeSetter: (mode: DisplayMode) => void = (mode: DisplayMode) => {
        this.displayMode = mode;
        this.requestUpdate();
    };

    @property({ type: Boolean, reflect: true })
    @provide({ context: showDiscussionContext })
    protected showDiscussion: boolean = false;

    @provide({ context: showDiscussionSetterContext })
    protected showDiscussionSetter: (columns: boolean) => void = (columns: boolean) => {
        this.showDiscussion = columns;
        this.requestUpdate();
    };

    @property({ type: Boolean, reflect: true })
    @provide( {context: editTagsContext } )
    protected editableTags: boolean = false;

    @provide({ context: editTagsSetterContext })
    protected editTagsSetter: (edit: boolean) => void = (edit: boolean) => {
        this.editableTags = edit;
        this.requestUpdate();
    };


    @property({ type: Boolean, reflect: true })
    @provide({context: syncAnalysisContext})
    protected syncAnalyses: boolean = false;

    @provide({ context: syncAnalysisSetterContext })
    protected syncAnalysisSetter: (sync: boolean) => void = (sync: boolean) => {
        this.syncAnalyses = sync;
        this.log( "syncAnalyses", sync );
        this.requestUpdate();
    };


    static styles?: CSSResultGroup | undefined = css`
    
            :host {
            
            }
    
            .base-info-content {
    
                display: flex;
                width: 100%;
                gap: var(--thermal-gap);
                flex-direction: column;
            
            }
    
    
            .poster {
            
                box-sizing: border-box;
                width: 100%;
    
                padding: var(--thermal-gap);
    
                border: 1px dashed var(--thermal-slate);
                border-radius: var(--thermal-radius);
    
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
    
                &.standalone {
                    min-height: 200px;
                }
            
            }
    
            *[slot="pre"] {
                margin-bottom: var(--thermal-gap);
            }
        
        `;




    protected renderContent(): TemplateResult {

        switch (this.state) {
            case AppState.LOADING:
                return this.renderLoading();
            case AppState.POSTER:
                return this.renderPoster();
            case AppState.USER:
                return this.renderUser();
            case AppState.FOLDER:
                return this.renderFolder();
            case AppState.DETAIL:
                return this.renderDetail();
            default:
                return html`<div>Unknown state</div>`;
        }

    }


    private renderLoading(): TemplateResult {

        return html`<main>
            <div class="poster standalone">
                <thermal-spinner message=${this.customStateContent}></thermal-spinner>
            </div>
        </main>`;

    }

    private renderPoster(): TemplateResult {

        return html`<main>
            <div class="poster standalone">
                ${this.customStateContent}
            </div>            
        </main>`

    }

    private renderUser(): TemplateResult {

        return html`
        
        <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>
        
        ${this.renderBreadcrumb()}

        ${this.renderUserFolders()}

        <main>


        </main>`;

    }

    private renderFolder(): TemplateResult {

        return html`

            <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>
        
            ${this.renderBreadcrumb()}

            <folder-base-info
                .info=${this.folder}
                .parents=${this.breadcrumb}
                .onParentClick=${(folder: FolderInfo) => this.setPath(folder.path)}
                slot="pre"
            >

                <thermal-slot label="Složka">

                    ${this.renderFolderCreateSubfolderDialog()}

                    ${this.renderFolderUploadFileDialog()}

                    ${this.renderFolderManagementButtons()}

                </thermal-slot>

                ${this.renderDisplayMode()}

            </folder-base-info>


            ${this.files && this.files.length > 0 ? html`<div slot="pre">
                <registry-histogram expandable="true"></registry-histogram>
                <registry-range-slider></registry-range-slider>
                <registry-ticks-bar></registry-ticks-bar>
            </div>`
            : nothing}

            ${this.renderFolderSubfolders()}

            ${this.renderFolderFiles()}
        
        `;

    }




    private renderDetail(): TemplateResult {

        return html`
        
            <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

            ${this.renderBreadcrumb()}

            <folder-base-info 
                .info=${this.folder} 
                .parents=${this.breadcrumb} 
                .onParentClick=${(item: BreadcrumbItem) => {this.setPath( item.path )}} 
                slot="pre"
            >
            </folder-base-info>

            <server-file-detail
                .file=${this.file!}
                .folder=${this.folder!}

                .onChange=${(file: FileInfo) => this.setStateFile(file)}

                .onClose=${() => this.setPath(this.folder!.path)}

                style="margin-top: -1em;"
            >
            
                ${this.folder?.may_manage_files_in
                    ? html`<file-edit-dialog
                        .file=${this.file}
                        .onSuccess=${(file: FileInfo) => this.setStateFile(file)}
                        slot="header"
                        variant="primary"
                    ></file-edit-dialog>
                    <file-delete-dialog
                        .file=${this.file}
                        .folder=${this.folder}
                        .onDelete=${() => this.fetchContent()}
                        slot="header"
                        variant="foreground"
                    ></file-delete-dialog>`
                    : nothing
                }

            </server-file-detail>
        
        `;

    }







    protected getRegistrySlug(): string {

        return [
            this.path,
            this.client?.auth?.getIdentity()?.user || "anonymous",
            this.folder?.slug || "unknown_folder",
            this.file?.fileName || "unknown_file",
        ].join("__");

    }












    private renderUserFolders(): unknown {

        if ( this.userFolders && this.userFolders.length > 0 ) {

            return html`<user-folders
                .folders=${this.userFolders}
                .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)}
            ></user-folders>`;

        }

        return nothing;

    }





    private renderBreadcrumb(): TemplateResult {

        return html`<folder-breadcrumb
            .breadcrumb=${this.breadcrumb}
            .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)}
            .onUserClick=${() => this.setStateUser()}
            slot="pre"
        ></thermal-breadcrumb>`;

    }

    /**
     * Renders the display mode settings
     */
    private renderDisplayMode(): unknown {

        if ( 
            this.files 
            && this.files.length > 0 
            && this.folder
        ) {

            return html`<thermal-slot label="Zobrazení">
                <display-mode-settings
                    .folder=${this.folder}
                ></display-mode-settings>
            </thermal-slot>
            <thermal-slot label="Obsah">
                <editing-mode-settings
                    .folder=${this.folder}
                ></editing-mode-settings>
            </thermal-slot>
            <thermal-slot label="Analýzy">
                <analysis-mode-settings
                    .folder=${this.folder}
                ></analysis-mode-settings>
            </thermal-slot>
            `;

        }

        return nothing;

    }


    /**
     * Renders the folder management buttons if the user has permissions
     */
    private renderFolderManagementButtons(): unknown {

        if (
            this.folder
            && (
                this.folder.may_manage_folders_in
                || this.folder.may_manage_files_in
            )
        ) {

            return html`<folder-edit-dialog
                .folder=${this.folder}
                .onSuccess=${(folder: FolderInfo) => {
                    this.setPath(folder.path);
                }}
            ></folder-edit-dialog>
            <folder-delete-dialog
                .folder=${this.folder}
                .onSuccess=${(folder: FolderInfo) => {
                    this.setPath(folder.path);
                }}
            ></folder-delete-dialog>`;

        }

        return nothing;

    }

    private renderFolderCreateSubfolderDialog(): unknown {

        if ( 
            this.folder 
            && this.folder.may_manage_folders_in 
        ) {

            return html`<folder-add-dialog 
                .folder=${this.folder}
                .onSuccess=${(folder: FolderInfo) => {
                    this.fetchContent();
                }}
            ></folder-add-dialog>`;

        }

        return nothing;


    }

    private renderFolderUploadFileDialog(): unknown {

        if ( this.folder && this.folder.may_manage_files_in ) {

            return html`<folder-upload-dialog
                .folder=${this.folder}
                .onSuccess=${(files: FileInfo[]) => {
                    this.fetchContent();
                }}
            ></folder-upload-dialog>`;

        }

        return nothing;

    }


    private renderFolderSubfolders(): unknown {

        if (
            this.subfolders
            && this.subfolders.length > 0
        ) {

            return html`<folder-subfolders
                .folder=${this.folder}
                .subfolders=${this.subfolders}
                .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)}
                slot="pre"
            ></folder-subfolders>`;

        }

        return nothing;

    }


    private renderFolderFiles(): unknown {

        if ( 
            this.files 
            && this.files.length > 0 
        ) {

            return html`<folder-files
                .files=${this.files}
                .folder=${this.folder}

                .onFileClick=${(file: FileInfo) => this.setStateFile(file)}

                .onFileDelete=${(file: FileInfo) => {
                    if ( this.files ) {
                        this.updateFiles( 
                            this.files.filter(f => f.fileName !== file.fileName) 
                        );
                    }
                }}

                .onChange=${(file: FileInfo) => this.updateFile(file)}
            ></folder-files>`;

        }

        return nothing;

    }




}