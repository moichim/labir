import { AvailableThermalPalettes, ThermalGroup } from "@labirthermal/core";
import { BreadcrumbItem, FileInfo, FolderInfo } from "@labirthermal/server";
import { provide } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, Ref } from "lit/directives/ref.js";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { T } from "../../translations/Languages";
import { compactContext, compactContextSetter, DisplayMode, displayModeContext, displayModeSetterContext, editTagsContext, editTagsSetterContext, lockedBrowsingTo, lockedBrowsingToSetter, showDiscussionContext, showDiscussionSetterContext, syncAnalysisContext, syncAnalysisSetterContext } from "../ClientContext";
import { FolderBaseInfo } from "../components/folder/single/FolderBaseInfo";
import { AppWithContent } from "./AppWithContent";
import { AppState, FolderMode } from "./AppWithState";

/** 
 * This layer provides the necessary render methods
 */
export abstract class AppWithRender extends AppWithContent {

    @property({ type: String, attribute: "label-tooltip" })
    public labelTooltip?: string;

    @property({ type: String, attribute: "label-icon" })
    public labelIcon?: string;

    @property({ type: String, attribute: "label-icon-style" })
    public labelIconStyle?: string;

    @property({ type: String, attribute: "label-variant" })
    public labelVariant?: string;

    @property({ type: String, reflect: true })
    public palette?: AvailableThermalPalettes;

    @property({ type: Number, reflect: true })
    public from?: number;

    @property({ type: Number, reflect: true })
    public to?: number;


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
    @provide({ context: editTagsContext })
    protected editableTags: boolean = false;

    @provide({ context: editTagsSetterContext })
    protected editTagsSetter: (edit: boolean) => void = (edit: boolean) => {
        this.editableTags = edit;
        this.requestUpdate();
    };


    @property({ type: Boolean, reflect: true })
    @provide({ context: syncAnalysisContext })
    protected syncAnalyses: boolean = false;

    @provide({ context: syncAnalysisSetterContext })
    protected syncAnalysisSetter: (sync: boolean) => void = (sync: boolean) => {
        this.syncAnalyses = sync;
        this.requestUpdate();
    };

    @property({ type: String, attribute: "locked-location" })
    @provide({ context: lockedBrowsingTo })
    protected lockedLocation?: string;

    @provide({ context: lockedBrowsingToSetter })
    protected lockedLocationSetter: (locked: string | undefined) => void = (locked: string | undefined) => {
        this.lockedLocation = locked;
        this.requestUpdate();
    };

    protected updated(_changedProperties: PropertyValues): void {

        super.updated(_changedProperties);

        if (this.registryElement.value) {

            const registry = this.registryElement.value.registry;

            registry.manager.palette.addListener(this.UUIDContent, (palette) => {
                this.palette = palette as unknown as AvailableThermalPalettes;
                this.requestUpdate();
            });

            registry.range.addListener(this.UUIDContent, (range) => {
                this.from = range ? range.from : undefined;
                this.to = range ? range.to : undefined;
                this.requestUpdate();
            });

        }


    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
        if (this.registryElement.value) {
            const registry = this.registryElement.value.registry;
            registry.manager.palette.removeListener(this.UUIDContent);
            registry.range.removeListener(this.UUIDContent);
        }
    }


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
    
                border: var(--thermal-border-width) dashed var(--thermal-slate);
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

            .user-layout {
            
                display: grid;
                grid-template-columns: 1fr 500px;
                gap: var(--thermal-gap);


                .user-layout-info,
                user-folders {
                
                    box-sizing: border-box;
                    padding: var(--thermal-gap);
                    border: var(--thermal-border-width) dashed var(--thermal-slate);
                    border-radius: var(--thermal-radius);
                
                }

                .user-info-field {

                    strong {
                        font-weight: normal;
                        font-size: .7em;
                        color: var(--thermal-slate);
                        text-transform: uppercase;
                        margin-bottom: .3em;
                        display: block;
                    }

                    margin-bottom: var(--thermal-gap);  
                }

            }
        
        `;




    protected renderContent(): TemplateResult {

        this.log( this.grid );

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

        if (!this.client.auth.isLoggedIn()) {
            return html`<div class="poster">
    <login-form></login-form>
</div>`;
        }

        return html`<registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>
${this.renderBreadcrumb()}
${this.renderUserFolders()}
`;

    }

    private getGroup(): ThermalGroup | undefined {
        const base = this.renderRoot.querySelector("folder-base-info") as FolderBaseInfo;
        return base?.group;
    }

    private renderFolder(): TemplateResult {

        return html`<registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

${this.renderBreadcrumb()}

<folder-base-info
    slug=${this.getCurrentSlug()}
    .info=${this.folder}
    .parents=${this.breadcrumb}
    .onParentClick=${(folder: FolderInfo) => this.setPath(folder.path)}
    slot="pre"
>
    ${this.folder?.may_manage_files_in || this.folder?.may_manage_folders_in || ( this.folder && this.folder.lrc_count > 0  )

        ? html`<thermal-slot label="${t(T.folder)}">
    ${this.renderFolderManagementButtons()}
    ${this.renderFolderDownloadDropdown()}
</thermal-slot>`
        : nothing
    }

                ${this.hasSubfolders() ? html`<thermal-slot label="${t(T.display)}">
                    <subfolders-mode 
                        .folder=${this.folder} 
                        .subfolders=${this.subfolders}
                        .selectedFolders=${this.gridFolders}
                        .onSelectionChange=${(selected: string[]) => this.updateGridFolders(selected)}
                        .grid=${this.grid}
                    ></subfolders-mode>
                </thermal-slot>` : nothing}

                ${this.hasFiles() || this.folderMode === FolderMode.GRID ? html`<thermal-slot label="${t(T.palette)}">
                    <registry-palette-dropdown></registry-palette-dropdown>
                </thermal-slot><thermal-slot label="${t(T.thermalrange)}">
                    <registry-range-form></registry-range-form>
                </thermal-slot>
                ` : nothing}

                ${this.renderDisplayMode()}

                ${this.hasSubfolders() && this.folderMode === FolderMode.GRID && this.isLoggedIn ? html`<thermal-slot label="${t(T.content)}">
                    <editing-mode-settings
                        .folder=${this.folder}
                    ></editing-mode-settings>
                </thermal-slot>` : nothing}

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


    private renderFolderDownloadDropdown(): unknown {
        if (this.files && this.files.length > 0) {

            return html`<thermal-dropdown>
    <span slot="invoker">${t(T.download)}</span>


    <thermal-btn
        slot="option"
        pre="LRC" 
        tooltip=${t(T.downloadoriginalfileshint)}
        @click=${() => {
                    this.getGroup()?.files.downloadAllFiles();
                }}
    >
        ${t(T.downloadoriginalfiles)}
    </thermal-btn>

    <thermal-btn 
        slot="option" 
        pre="PNG" 
        @click=${() => this.getGroup()?.forEveryInstance(instance => instance.export.downloadPng())}
         tooltip=${t(T.pngofindividualimageshint)}
    >
        ${t(T.pngofindividualimages)}
    </thermal-btn>

    <thermal-btn 
        slot="option"
        pre="PNG" 
        @click=${() => this.getGroup()?.analysisSync.png.downloadPng()}
        tooltip="${t(T.pngofentiregrouphint)}"
    >
        ${t(T.pngofentiregroup)}
    </thermal-btn>

</thermal-dropdown>`;


        }

        return nothing;
    }




    private renderDetail(): TemplateResult {

        return html`

        <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

        ${this.renderBreadcrumb()}

        <folder-base-info 
            .info=${this.folder} 
            .parents=${this.breadcrumb} 
            .onParentClick=${(item: BreadcrumbItem) => { this.setPath(item.path) }} 
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
                    from=${this.from}
                    to=${this.to}

                    .onChange=${(file: FileInfo) => this.setStateFile(file)}

                    .onClose=${() => {
                this.setPath(this.folder!.path);
                this.setStateFolder(this.folder!, this.breadcrumb);
            }}

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

                            <!--
                            <file-store-thumbnail
                                size="md"
                                variant="default"
                                .folder=${this.folder}
                                tooltip="Uložit aktuální zobrazení jako náhledový obrázek pro složku '${this.folder.name ?? this.folder.slug}'."
                            ></file-store-thumbnail>
                            -->
                            
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

                    <thermal-slot label="Visible vs. IR" slot="header">
                        <registry-opacity-slider></registry-opacity-slider>
                    </thermal-slot>

                    

                    <thermal-slot 
                        label="${t(T.analyses)}" 
                        slot="header"
                    >

                        ${this.folder!.may_manage_files_in
                ? html`<file-analysis-store-button
                            .info=${this.file}
                            .folder=${this.folder}
                            .onChange=${(file: FileInfo) => {
                        this.updateFile(file);
                    }}
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
                            .onChange=${(file: FileInfo) => {
                this.setStateFile(file);
            }}
                            size="md"
                        ></file-analysis-remove-button>

                    </thermal-slot>

                </server-file-detail>

            </file-provider>    
        </group-provider>
        
            
        
        `;

    }













    private renderUserInfoField(
        label: string,
        value: unknown
    ): unknown {
        return html`<section class="user-info-field">
            <strong>${label}:</strong> <div>${value}</div>
        </section>`;
    }



    private renderUserFolders(): unknown {

        const identity = this.client.auth.getIdentity();

        const userName = identity?.meta.name || identity?.user || "Uživatel";

        const login = identity?.user || "unknown";

        return html`<main class="user-layout">
            <user-folders
                .folders=${this.userFolders}
                .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)}
            ></user-folders>
            <section class="user-layout-info">

                ${this.renderUserInfoField("Uživatel", userName)}

                ${this.renderUserInfoField("Login", login)}

                <thermal-btn
                    @click=${() => {
                this.client.auth.logout();
            }}
                >${t(T.logout)}</thermal-btn>

            </section>
        <main>`;

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

            return html`<thermal-slot label="${t(T.display)}">
                <display-mode-settings
                    .folder=${this.folder}
                ></display-mode-settings>
                <registry-opacity-slider></registry-opacity-slider>
            </thermal-slot>
            <thermal-slot label="${t(T.content)}">
                <editing-mode-settings
                    .folder=${this.folder}
                ></editing-mode-settings>
            </thermal-slot>
            <thermal-slot label="${t(T.analyses)}">
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

        return html`
<folder-add-dialog 
    .folder=${this.folder}
    .onSuccess=${() => { this.fetchContent(); }}
    icon="addfolder"
    iconStyle="micro"
    variant="primary"
    tooltip=${t(T.createsubfolder)}
    label=${t(T.createfolder)}
></folder-add-dialog>
<folder-edit-dialog
    .folder=${this.folder}
    .onSuccess=${(folder: FolderInfo) => {
        this.setPath(folder.path);
        this.updateFolder(folder);
    }}
    icon="edit"
    iconStyle="micro"
    variant="primary"
    tooltip=${t(T.editfolder)}
    label=${t(T.edit)}
></folder-edit-dialog>
<folder-delete-dialog
    .folder=${this.folder}
    .onSuccess=${(folder: FolderInfo) => {
        // Remove the last segment from the path
        const newPath = folder!.path.split("/").slice(0, -1).join("/");
        this.setPath(newPath);
    }}
    tooltip=${t(T.deletefolder)}
    label=${t(T.delete)}
    variant="foreground"
    icon="trash"
    iconStyle="micro"
></folder-delete-dialog>`;

    }

    private renderFolderCreateSubfolderDialog(): unknown {

        return nothing;

    return html`<folder-add-dialog 
    .folder=${this.folder}
    .onSuccess=${() => { this.fetchContent(); }}
    icon="addfolder"
    iconStyle="micro"
    variant="primary"
    tooltip=${t(T.createsubfolder)}
    label=${t(T.createfolder)}
></folder-add-dialog>`;

    }


    private renderFolderSubfolders(): unknown {

        if (
            this.subfolders
            && this.subfolders.length > 0
            && this.folderMode !== FolderMode.GRID
        ) {

            return html`<folder-subfolders
                .folder=${this.folder}
                .subfolders=${this.subfolders}
                .onFolderClick=${(folder: FolderInfo) => {
                    this.setPath(folder.path);
                }}
                folderMode=${this.folderMode}
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

                this.setStateFolder(folder, this.breadcrumb, this.subfolders);
                this.breadcrumb?.push({
                    name: folder.name,
                    path: folder.path,
                    type: "folder",
                    slug: folder.slug,
                    protected: false,
                    current: true
                })
                this.setStateFile(file);

            }}
            .onFileEdit=${(file: FileInfo) => {

                this.propagateFileUpdate(file);

            }}
            .onChange=${() => {
                if (this.path) {
                    this.fetchGrid(
                        this.path,
                        this.gridFolders,
                        this.by
                    )
                }
            }}
            .selectedFolders=${this.gridFolders}
            .onSelectionChange=${(selected: string[]) => this.updateGridFolders(selected)}
        ></subfolders-grid>`;

    }

    private renderUploadForm(): unknown {
        if (this.folder && this.folder.may_manage_files_in === true) {

            const prompt = this.folder.meta.prompt || undefined;

            return html`<folder-upload-form
                    .folder=${this.folder}
                    .onSuccess=${() => {
                    this.fetchContent();
                }}
                    prompt=${ifDefined(prompt)}
                ></folder-upload-form>`;

        }

        return nothing;
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
                    if (this.files) {
                        this.updateFiles(
                            this.files.filter(f => f.fileName !== file.fileName)
                        );
                    }
                }}

                .onChange=${(file: FileInfo) => this.updateFile(file)}
            ></folder-files>

            <br/>
            
            ${this.renderUploadForm()}
            
            `;

        }

        return this.renderUploadForm();

    }




}