import Client, { FileInfo, TreeItem } from "@labir/server";
import { provide } from "@lit/context";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { FolderInfo, TagDefinition } from "packages/server/client/dist";
import { BreadcrumbItem } from "packages/server/client/src/responseEntities";
import { BaseAppWithPngExportContext } from "../utils/converters/pngExportContext";
import { clientContext, compactContext, compactContextSetter, currentUserTreeContext, currentUserTreeSetterContext, DisplayMode, displayModeContext, displayModeSetterContext, editTagsContext, editTagsSetterContext, showDiscussionContext, showDiscussionSetterContext, tagsFilterContext, tagsFilterSetterContext } from "./ClientContext";


enum STATE {
    LOADING,
    POSTER,
    CUSTOM,
    USER,
    FOLDER,
    DETAIL
}

/** @deprecated Use composed app instead. */
export abstract class BaseServerApp extends BaseAppWithPngExportContext {


    @property({ type: String, reflect: true, attribute: "path" })
    public path!: string;
    protected originalPath!: string;



    @property({ type: String, attribute: "server-url" })
    public serverUrl!: string;

    @provide({ context: clientContext })
    protected client!: Client;

    @state()
    protected isClientConnected: boolean = false;

    @state()
    protected error?: string;

    @provide({ context: currentUserTreeContext })
    protected tree: TreeItem[] = [];

    @provide({ context: currentUserTreeSetterContext })
    protected treeSetter: (tree: TreeItem[]) => void = (tree: TreeItem[]) => {
        this.tree = tree;
        this.requestUpdate();
    }




    // State management properties

    @state()
    private _success: boolean = true;


    @state()
    private _state: STATE = STATE.LOADING;

    /** Current state of the app */
    public get state(): STATE {
        return this._state;
    }

    @state()
    private _stateMesage?: string;

    @state()
    private _html?: TemplateResult

    /** Current state message of the app */
    public get stateMessage(): string | undefined {
        return this._stateMesage;
    }


    // Content properties

    @state()
    private _breadcrumb: BreadcrumbItem[] = [];
    public get breadcrumb(): BreadcrumbItem[] | undefined { return this._breadcrumb; }

    @state()
    private _userFolders?: FolderInfo[];
    public get userFolders(): FolderInfo[] | undefined { return this._userFolders; }

    @state()
    private _folder?: FolderInfo;
    public get folder(): FolderInfo | undefined { return this._folder; }

    @state()
    private _subfolders?: FolderInfo[];
    public get subfolders(): FolderInfo[] | undefined { return this._subfolders; }

    @state()
    private _files?: FileInfo[];
    public get files(): FileInfo[] | undefined { return this._files; }

    @state()
    private _tags?: {
        [index: string]: TagDefinition;
    }

    @state()
    private _file?: FileInfo;
    public get file(): FileInfo | undefined { return this._file; }



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
    protected editTags: boolean = false;

    @provide({ context: editTagsSetterContext })
    protected editTagsSetter: (edit: boolean) => void = (edit: boolean) => {
        this.editTags = edit;
        this.requestUpdate();
    };


    @provide({ context: tagsFilterContext })
    @property({ type: String, reflect: true, converter: {
        fromAttribute: (value: string) => value.split(",").map(tag => tag.trim()),
        toAttribute: (value: string[]) => value.join(",")
    }})
    public tagsFilter: string[] = [];

    @property({ type: Function })
    @provide({ context: tagsFilterSetterContext })
    protected tagsFilterSetter: (tags: string[]) => void = (tags: string[]) => {
        this.tagsFilter = tags;
        this.requestUpdate();
    };

    /**
     * Inicializace klienta při připojení komponenty
     */
    connectedCallback(): void {
        super.connectedCallback();
        this.initializeClient();

        this.client.onConnection.set(this.UUID, (status) => {
            if (status) {
                this.isClientConnected = true;
            } else {
                this.isClientConnected = false;
            }
            this.requestUpdate();
        });
    }

    protected setPath(
        value: string
    ): void {
        this.path = value;
        this.requestUpdate();
        this.initContentFromApi();
    }



    protected checkReadyForData(): boolean {
        if (this.client.isConnected() === false) {
            this.setError("Aplikace není připojena k serveru. Zkontrolujte připojení.");
            this.cleanupData();
            return false;
        }
        this.clearError();
        return true;
    }


    protected async initContentFromApi(): Promise<void> {

        this.cleanupData();

        if (this.checkReadyForData()) {

            this.setLoadingState(
                "Načítám obsah."
            );

            const path = this.path!;

            const request = this.client.routes.get.info(path);

            const result = await request.execute();

            if (result.success === true) {

                this.setBreadcumb(result.data.breadcrumb);

                this.setFolderState(
                    result.data.folder,
                    result.data.subfolders
                        ? Object.values(result.data.subfolders)
                        : []
                );

                if ( result.data.folder.lrc_count > 0 ) {

                    const filesRequest = this.client.routes.get.files( path );

                    if ( this.tagsFilter && this.tagsFilter.length > 0 ) {
                        this.tagsFilter.forEach( tag => filesRequest.addTag(tag) );
                    }

                    const files = await filesRequest.execute();

                    console.log( files.data?.tags );

                    this._tags = files.data?.tags ?? {};

                    this._files = files.data?.files;

                }



            } else {

                let content = html`<p>${result.message}</p>`;

                switch (result.code) {
                    case 404:
                        content = html`<p>Složka nebyla nalezena.</p>`;
                        break;
                    case 403:
                        content = html`<p>Nemáte oprávnění k zobrazení této složky.</p>`;
                        break;
                    case 401:
                        content = html`<login-form prompt="Tato složka je přístupná pouze přihlášeným uživatelům."></login-form>`;
                        break;
                }

                this.setPosterState(
                    content,
                    false
                );
            }

        }

    }




    /**
     * Vytvoří novou instanci klienta
     */
    protected async initializeClient(): Promise<void> {

        this.clearError();

        if (!this.serverUrl || this.serverUrl.trim() === '') {
            this.setError("Server URL is required. Please set the 'server-url' attribute.");
            return;
        }

        this.client = new Client(this.serverUrl);

        const result = await this.client.connect();

        if (result.success === false) {
            this.setError("Failed to connect to the server: " + result.message);
            this.isClientConnected = false;
            return;

        }

        this.log("Initialised successfully", {
            url: this.serverUrl,
            result,
            client: this.client
        });


    }

    protected setError(message: string): void {
        this.error = message;
        this.requestUpdate();
    }

    protected clearError(): void {
        this.error = undefined;
        this.requestUpdate();
    }








    // State management methods




    protected setLoadingState(
        message: string
    ): void {
        this._state = STATE.LOADING;
        this._stateMesage = message;
        this._success = true;
    }

    protected setPosterState(
        html: TemplateResult,
        success: boolean
    ): void {

        this._state = STATE.POSTER;
        this._html = html;
        this._success = success;

    }

    protected setFolderState(
        info: FolderInfo,
        subfolders?: FolderInfo[]
    ): void {
        this._state = STATE.FOLDER;
        this._folder = info;
        this._subfolders = subfolders;
        this._stateMesage = undefined;
        this._success = true;
    }

    protected setDetailState(
        file: FileInfo
    ) {
        this._state = STATE.DETAIL;
        this._file = file;
        this._success = true;
    }



    protected setBreadcumb(
        value: BreadcrumbItem[]
    ): void {
        this._breadcrumb = value;
        this.requestUpdate();
    }



    /**
     * Cleans all loaded content
     */
    protected cleanupData(): void {
        this._folder = undefined;
        this._subfolders = undefined;
        this._file = undefined;
        this._files = undefined;
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


    // Render methods

    protected renderContent(): unknown {
        switch (this.state) {
            case STATE.LOADING:
                return this.renderLoadingState();
            case STATE.POSTER:
                return this.renderMessageState();
            case STATE.FOLDER:
                return this.renderFolderState();
            case STATE.DETAIL:
                return this.renderDetailState();
            default:
                return html`<div>Unknown state</div>`;
        }
    }

    protected renderLoadingState(): unknown {

        return html`<main>
            <div class="poster standalone">
                <thermal-spinner message=${this.stateMessage}></thermal-spinner>
        </main>`;
    }

    protected renderMessageState(): unknown {

        const successClass = this._success ? "state_message_success" : "state_message_error";

        return html`<main class="state_message ${successClass}">
            <article class="poster standalone">
            ${this._html}
            </article>
        </main>`;

    }


    protected renderFolderState(): unknown {


        return html`
        <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>
        

        <folder-breadcrumb .breadcrumb=${this.breadcrumb ?? []} 
        .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)} slot="pre"></folder-breadcrumb>

        <folder-base-info .info=${this.folder} .parents=${this.breadcrumb} .onParentClick=${(item: BreadcrumbItem) => {this.setPath( item.path )}} slot="pre">
    
                ${this.folder?.may_manage_folders_in ? html`
                <folder-add-dialog 
                    .folder=${this.folder}
                    .onSuccess=${(folder: FolderInfo) => this.initContentFromApi()}
                ></folder-add-dialog>
                <folder-edit-dialog
                    .folder=${this.folder}
                    .onSuccess=${(folder: FolderInfo) => this.initContentFromApi()}
                ></folder-edit-dialog>
                <folder-delete-dialog
                    .folder=${this.folder}
                    .onSuccess=${(folder: FolderInfo) => this.initContentFromApi()}
                ></folder-delete-dialog>
                
                ` : nothing}

                ${this.folder?.may_manage_files_in ? html`
                <folder-upload-dialog
                    .folder=${this.folder}
                    .onSuccess=${(files: FileInfo[]) => {
                            this.initContentFromApi();
                    }}
                ></folder-upload-dialog>

                <folder-edit-dialog
                    .folder=${this.folder}
                    .onSuccess=${(folder: FolderInfo) => this.initContentFromApi()}
                ></folder-edit-dialog>

                <folder-delete-dialog
                    .folder=${this.folder}
                    .onSuccess=${() => {

                        const parents = this.breadcrumb;
                        if (parents && parents.length > 1) {
                            const parent = parents[parents.length - 2];
                            this.setPath(parent.path);
                        } else {
                            this.setPath("/");
                        }
                        
                    }}
                ></folder-delete-dialog>

                
                ` : nothing}

                ${this.files && this.files.length > 0 ? html`<display-mode-settings
                    .folder=${this.folder}    
                ></display-mode-settings>` : nothing}

                <folder-tags-filter
                    .folder=${this.folder}
                    .tags=${this._tags}
                    .onTagClick=${(tag: TagDefinition) => {

                        if ( this.tagsFilter.includes(tag.slug) ) {
                            this.tagsFilter = this.tagsFilter.filter(t => t !== tag.slug);
                        } else {
                            this.tagsFilter.push( tag.slug );
                        }

                        this.requestUpdate();
                        this.initContentFromApi();

                    }}>
                </folder-tags-filter>

            </folder-base-info>


            ${this.files && this.files.length > 0 ? html`<div slot="pre">
                <registry-histogram expandable="true"></registry-histogram>
                <registry-range-slider></registry-range-slider>
                <registry-ticks-bar></registry-ticks-bar>
            </div>`
            : nothing}


            ${this.subfolders && this.subfolders.length > 0 ? html`<folder-subfolders 
                    .folder=${this.folder}
                    .subfolders=${this.subfolders} 
                    slot="pre" 
                    .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)}
                ></folder-subfolders>`
            : nothing}

            <folder-files
                .folder=${this.folder}
                .files=${this.files}
                .onFileClick=${(file: FileInfo) => this.setDetailState(file)}
                .onChange=${(file: FileInfo) => {
                    // this.initContentFromApi();
                    if (this._files) {
                        const idx = this._files.findIndex(f => f.fileName === file.fileName);
                        if (idx !== -1) {
                            this._files = [
                                ...this._files.slice(0, idx),
                                file,
                                ...this._files.slice(idx + 1)
                            ];
                        }
                    }
                    this.requestUpdate();
                }}
                .onFileDelete=${(file: FileInfo) => {
                    if (this._files) {
                        this._files = this._files.filter(f => f.fileName !== file.fileName);
                    }
                    this.requestUpdate();
                }}
            ></folder-files>


        `;
    }

    protected renderDetailState(): unknown {


        const slug = this.folder!.path + this.file!.fileName;

        return html`
        
        <registry-provider slug="${slug}" slot="bar-persistent">
            <registry-palette-dropdown></registry-palette-dropdown>
        </registry-provider>
        
        <main class="folder-state base-info-content">

            <folder-breadcrumb .breadcrumb=${this.breadcrumb ?? []} 
        .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)}></folder-breadcrumb>

            <folder-base-info .info=${this.folder} .parents=${this.breadcrumb} .onParentClick=${(item: BreadcrumbItem) => {this.setPath( item.path )}} slot="pre">
            </folder-base-info>

            <server-file-detail
                .file=${this.file}
                .folder=${this.folder}
                .onClose=${() => {
                    this.initContentFromApi();
                    this.setFolderState(this.folder!, this.subfolders);
                }}

                .onChange=${(file: FileInfo) => {
                    this.setDetailState(file);
                    this.requestUpdate();
                }}
                style="margin-top: -1em"
            >
                ${this.folder?.may_manage_files_in
                    ? html`<file-edit-dialog
                    slot="header"
                    variant="primary"
                    .file=${this.file}
                    .onSuccess=${(file: FileInfo) => {
                        this.setDetailState(file);
                    }}
                ></file-edit-dialog>`
                    : nothing}


                ${this.folder?.may_manage_files_in
                    ? html`<file-delete-dialog
                        slot="header" 
                        variant="foreground"
                        .file=${this.file} 
                        .folder=${this.folder} 
                        .onDelete=${() => this.initContentFromApi()}
                    ></file-delete-dialog>`
                : nothing}

            
            </server-file-detail>

        </main>`;
    }

}