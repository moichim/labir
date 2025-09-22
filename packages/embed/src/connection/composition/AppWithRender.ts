import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { AppWithContent } from "./AppWithContent";
import { AppState, FolderMode } from "./AppWithState";
import { FileInfo, FolderInfo, BreadcrumbItem } from "@labir/server";
import { provide } from "@lit/context";
import { property } from "lit/decorators.js";
import { compactContext, compactContextSetter, DisplayMode, displayModeContext, displayModeSetterContext, editTagsContext, editTagsSetterContext, showDiscussionContext, showDiscussionSetterContext, syncAnalysisContext, syncAnalysisSetterContext } from "../ClientContext";
import { ifDefined } from "lit/directives/if-defined.js";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { createRef, Ref } from "lit/directives/ref.js";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";

/** 
 * This layer provides the necessary render methods
 */
export abstract class AppWithRender extends AppWithContent {


    protected registryElement: Ref<RegistryProviderElement> = createRef();

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

        if ( ! this.client.auth.isLoggedIn()) {
            return html`
            <div class="poster">
                <login-form></login-form>
            </div>
            `;
        }

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
                slug=${this.getCurrentSlug()}
                .info=${this.folder}
                .parents=${this.breadcrumb}
                .onParentClick=${(folder: FolderInfo) => this.setPath(folder.path)}
                slot="pre"
            >

                ${this.folder?.may_manage_files_in === true || this.folder?.may_manage_folders_in === true ? html`
                    <thermal-slot label="${t(T.folder)}">

                    ${this.renderFolderCreateSubfolderDialog()}

                    ${this.renderFolderUploadFileDialog()}

                    ${this.renderFolderManagementButtons()}

                </thermal-slot>` : nothing}

                ${this.hasSubfolders() ? html`<thermal-slot label="Zobrazení">
                    <subfolders-mode 
                        .folder=${this.folder} 
                        .subfolders=${this.subfolders}
                        .selectedFolders=${this.gridFolders}
                        .onSelectionChange=${ (selected: string[]) => this.updateGridFolders(selected) }
                        .grid=${this.grid}
                    ></subfolders-mode>
                </thermal-slot>` : nothing}

                ${this.hasSubfolders() && this.folderMode === FolderMode.GRID ? html`
                <thermal-slot label="${t(T.palette)}">
                    <registry-palette-dropdown></registry-palette-dropdown>
                </thermal-slot>
                <thermal-slot label="${t(T.thermalrange)}">
                    <registry-range-form></registry-range-form>
                </thermal-slot>
                <thermal-slot label="Obsah">
                <editing-mode-settings
                    .folder=${this.folder}
                ></editing-mode-settings>
            </thermal-slot>
                ` : nothing}

                ${this.hasFiles() ? html`<thermal-slot label="${t(T.thermalrange)}">
                    <registry-range-form></registry-range-form>
                </thermal-slot>
                ` : nothing}

                ${this.renderDisplayMode()}

            </folder-base-info>


            ${this.hasFiles() || this.folderMode === FolderMode.GRID ? html`<div slot="pre">
                <registry-histogram expandable="true"></registry-histogram>
                <registry-range-slider></registry-range-slider>
                <registry-ticks-bar></registry-ticks-bar>
            </div>`
            : nothing}

            ${this.renderFolderSubfolders()}

            ${this.renderFolderGrid()}

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
        ></folder-base-info>

        <group-provider 
            slug=${this.getCurrentSlug()}
            batch="true"
            autoclear="true"
            style="display: contents;"
        >
            <file-provider
                thermal="${this.file?.url}"
                batch="true"
                autoclear="true"
                analysis1=${ifDefined(this.file?.analyses[0])}
                analysis2=${ifDefined(this.file?.analyses[1])}
                analysis3=${ifDefined(this.file?.analyses[2])}
                analysis4=${ifDefined(this.file?.analyses[3])}
                analysis5=${ifDefined(this.file?.analyses[4])}
                analysis6=${ifDefined(this.file?.analyses[5])}
                analysis7=${ifDefined(this.file?.analyses[6])}
                style="display: contents;"
            >
            
                

                <server-file-detail
                    .file=${this.file!}
                    .folder=${this.folder!}

                    .onChange=${(file: FileInfo) => this.setStateFile(file)}

                    .onClose=${() => this.setPath(this.folder!.path)}

                    style="margin-top: -1em;"
                >
                <thermal-slot label="${t(T.file)}" slot="header">
                    ${this.folder?.may_manage_files_in
                        ? html`
                        

                            <file-edit-dialog
                                .file=${this.file}
                                .onSuccess=${(file: FileInfo) => this.setStateFile(file)}
                                variant="primary"
                                size="md"
                            ></file-edit-dialog>
                            <file-delete-dialog
                                .file=${this.file}
                                .folder=${this.folder}
                                .onDelete=${() => this.fetchContent()}
                                variant="foreground"
                                size="md"
                                showLabel="true"
                            ></file-delete-dialog>

                            <file-store-thumbnail
                                size="md"
                                variant="default"
                                .file=${this.file}
                                .folder=${this.folder}
                                tooltip="Uložit aktuální zobrazení jako náhledový obrázek pro složku '${this.folder.name ?? this.folder.slug}'."
                            ></file-store-thumbnail>
                            
                        `
                        : nothing
                    }
                        <file-download-dropdown
                            size="md"
                            variant="background"
                        ></file-download-dropdown>
                        <file-info-button></file-info-button>
                    </thermal-slot>

                    <thermal-slot label="${t(T.palette)}" slot="header">
                        <registry-palette-dropdown></registry-palette-dropdown>
                    </thermal-slot>

                    <thermal-slot label="${t(T.thermalrange)}" slot="header">
                        <registry-range-form></registry-range-form>
                    </thermal-slot>

                    

                    <thermal-slot 
                        label="${t(T.analyses)}" 
                        slot="header"
                    >

                        ${this.folder!.may_manage_files_in
                        ? html`<file-analysis-store-button
                            .info=${this.file}
                            .folder=${this.folder}
                            .onChange=${ ( file: FileInfo ) => {
                                this.setStateFile(file);
                            } }
                            size="md"
                        ></file-analysis-store-button>`
                        : nothing
                        }

                        ${this.file?.analyses && this.file.analyses?.length > 0 ? html`<file-analysis-restore-button
                            .info=${this.file}
                            .folder=${this.folder}
                            size="md"
                        ></file-analysis-restore-button>` : nothing}

                        <file-analysis-remove-button
                            .info=${this.file}
                            .folder=${this.folder}
                            .onChange=${ ( file: FileInfo ) => {
                                this.setStateFile(file);
                            } }
                            size="md"
                        ></file-analysis-remove-button>

                    </thermal-slot>

                </server-file-detail>

            </file-provider>    
        </group-provider>
        
            
        
        `;

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
                    .files=${this.files}
                    .onChangeAll=${(files: FileInfo[]) => this.updateFiles(files)}
                    .onChangeFile=${(file: FileInfo) => this.updateFile(file)}
                ></analysis-mode-settings>
                <folder-remove-analyses
                    .folder=${this.folder}
                    .files=${this.files}
                    .onChange=${(files: FileInfo[]) => this.updateFiles(files)}
                ></folder-remove-analyses>
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
            && this.folderMode === FolderMode.LIST
        ) {

            return html`<folder-subfolders
                .folder=${this.folder}
                .subfolders=${this.subfolders}
                .onFolderClick=${(folder: FolderInfo) => {
                    this.setPath(folder.path);
                }}
            ></folder-subfolders>`;

        }

        return nothing;

    }

    private renderFolderGrid(): unknown {

        if (this.state !== AppState.FOLDER || this.folderMode !== FolderMode.GRID || !this.hasSubfolders()) {
            return nothing;
        }

        return html`<subfolders-grid
            .grid=${this.grid}
            .slug=${this.getCurrentSlug()}
            .onFolderClick=${(folder: FolderInfo) => {
                this.setPath(folder.path);
            }}
            .onFileClick=${(folder: FolderInfo, file: FileInfo) => {

                this.switchFolderInternal(folder);

                this.setStateFile(file);
    
            }}
            .onFileEdit=${(file: FileInfo) => {

                this.propagateFileUpdate(file);

            }}
            .onChange=${() => {
                if ( this.path ) {
                    this.fetchGrid(
                        this.path,
                        this.gridFolders,
                        this.by
                    )
                }
            }}
            .selectedFolders=${this.gridFolders}
            .onSelectionChange=${ (selected: string[]) => this.updateGridFolders(selected) }
        ></subfolders-grid>`;

    }


    private renderFolderFiles(): unknown {

        if ( 
            this.files 
            && this.files.length > 0 
        ) {

            return html`<folder-files
                slug=${this.getCurrentSlug()}
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