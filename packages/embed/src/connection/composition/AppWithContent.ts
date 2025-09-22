import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { FileInfo, FolderInfo, TagDefinition } from "packages/server/client/dist";
import { BreadcrumbItem } from "packages/server/client/src/responseEntities";
import { AppWithClientProvider } from "./AppWithClientProvider";
import { AppState, FolderMode } from "./AppWithState";
import { Ref } from "lit/directives/ref.js";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { GetGridDataType, GridGrouping } from "@labir/server";
import { provide } from "@lit/context";
import { subfoldersModeContext, subfoldersModeSetterContext, subgildersGridByMode, subgildersGridByModeSetter } from "../ClientContext";


/** 
 * This layer handles the content logic & fetching 
 */
export abstract class AppWithContent extends AppWithClientProvider {

    protected abstract registryElement: Ref<RegistryProviderElement>;

    @state()
    private _breadcrumb: BreadcrumbItem[] = [];
    public get breadcrumb(): BreadcrumbItem[] | undefined { return this._breadcrumb; }
    protected updateBreadcrumb(breadcrumb: BreadcrumbItem[]): void {
        this._breadcrumb = breadcrumb;
        this.requestUpdate();
    }


    @state()
    private _userFolders: FolderInfo[] = [];
    public get userFolders(): FolderInfo[] { return this._userFolders; }
    public updateUserFolders(userFolders: FolderInfo[]): void {
        this._userFolders = userFolders;
        this.requestUpdate();
    }

    @state()
    private _folder?: FolderInfo;
    public get folder(): FolderInfo | undefined { return this._folder; }
    public updateFolder(folder: FolderInfo): void {
        this._folder = folder;
        this.requestUpdate();
    }

    @state()
    private _subfolders?: FolderInfo[];
    public get subfolders(): FolderInfo[] | undefined { return this._subfolders; }
    public updateSubfolders(subfolders: FolderInfo[]): void {
        this._subfolders = subfolders;
        this.requestUpdate();
    }

    @state()
    protected grid?: GetGridDataType;



    @state()
    private _tags?: { [key: string]: TagDefinition };
    protected get tags(): { [key: string]: TagDefinition } | undefined { return this._tags; }
    public updateTags(tags: { [key: string]: TagDefinition }): void {
        this._tags = tags;
        this.requestUpdate();
    }


    @state()
    private _files?: FileInfo[];
    public get files(): FileInfo[] | undefined { return this._files; }
    public updateFiles(files: FileInfo[]): void {
        this._files = files;
        this.requestUpdate();
    }

    @state()
    private _file?: FileInfo;
    public get file(): FileInfo | undefined { return this._file; }
    public updateFile(file: FileInfo): void {
        this._file = file;

        this.requestUpdate();

        // Upon updating the file, try to update it in the list of files as well
        const fileInList = this.files?.findIndex(f => f.fileName === file.fileName) ?? -1;

        if (fileInList !== -1 && this.files) {
            this.files[fileInList] = file;
        }


    }

    public propagateFileUpdate(
        file: FileInfo
    ): void {
        if (this._file) {
            this.updateFile(this._file);
        }

        if ( this.grid ) {
            Object.values( this.grid.groups ).forEach( group => {

                Object.values( group.folders ).forEach( folder => {

                    folder.forEach( f => {
                        if ( 
                            f.fileName === file.fileName 
                            && f.url === file.url
                        ) {
                            Object.assign( f, file );
                            this.requestUpdate();
                        }
                    } );

                } );

            });
        }
    }


    @property({ type: String, reflect: true, attribute: "folder-mode", converter: {
        fromAttribute(value: string): FolderMode {
            if ( value === FolderMode.GRID ) return FolderMode.GRID;
            return FolderMode.LIST;
        }
    } })
    @provide({ context: subfoldersModeContext })
    public folderMode: FolderMode = FolderMode.LIST;

    @state()
    @provide({ context: subfoldersModeSetterContext })
    private _folderModeSetter: (mode: FolderMode) => void = (mode: FolderMode) => {
        this.folderMode = mode;
        this.requestUpdate();

        if ( this.path && this.folderMode === FolderMode.GRID ) {
            this.grid = undefined;
            this.fetchGrid( 
                this.path, 
                this.gridFolders, 
                this.by 
            );
        }
    }
    public get folderModeSetter(): (mode: FolderMode) => void { return this._folderModeSetter; }


    @property({ type: String, reflect: true, attribute: "grid-grouping", converter: {
        fromAttribute(value: string): GridGrouping {

            if ( [GridGrouping.DAY, GridGrouping.MONTH, GridGrouping.YEAR, GridGrouping.HOUR].includes(value as GridGrouping) ) {
                return value as GridGrouping;
            } 

            return GridGrouping.HOUR;

    } } } )
    @provide( { context: subgildersGridByMode } )
    public by: GridGrouping = GridGrouping.HOUR;

    @state()
    @provide( { context: subgildersGridByModeSetter } )
    private _folderGridBySetter: ( mode: GridGrouping ) => void = ( mode: GridGrouping ) => {
        this.by = mode;
        this.requestUpdate();
        if ( this.path && this.folderMode === FolderMode.GRID ) {
            this.grid = undefined;
            this.fetchGrid( 
                this.path, 
                this.gridFolders, 
                this.by 
            );
        }
    }



    @state()
    public gridFolders: string[] = [];

    protected updateGridFolders( folders: string[] ): void {

        if ( ! this.path ) { return; }

        if ( this.grid ) {
            this.grid = undefined;
        }

        this.gridFolders = folders;
        this.requestUpdate();
        this.fetchGrid(
            this.path,
            folders,
            this.by
        );
    }

    protected UUIDContent: string = this.UUID + "__app_with_content";



    connectedCallback(): void {
        super.connectedCallback();


        // Listen to identity changes
        this.client.auth.onIdentity.set(this.UUIDContent, (identity, userFolders) => {

            this.log("Identity changed:", identity, userFolders);

            // Store the user folders
            if (identity && userFolders) {
                this.updateUserFolders(userFolders);
            } else {
                this.updateUserFolders([]);
            }

            // Refetch the content
            this.fetchContent();

        });

        // Listen to the connection state
        this.client.onConnection.set(this.UUIDContent, (state) => {

            // If the connection is lost, clear the content
            if (state !== false) {
                this.fetchContent();
            }

        });

    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();

        // Remove the listeners
        this.client.auth.onIdentity.delete(this.UUIDContent);
        this.client.onConnection.delete(this.UUIDContent);
    }


    /**
     * Retrieve the current slug for the state.
     * Slug should be usable by the groups of elements displayed in HTML templates
     */
    protected getCurrentSlug(
        message?: string
    ): string {


        const path = this.folder?.path
            ? this.folder.path.replace(/\//g, "-")
            : "no-folder";

        const user = this.client.auth.getIdentity()
            ? this.client.auth.getIdentity()!.user
            : "guest";

        const buf: string[] = [
            this.state,
            path,
            user
        ];

        switch (this.state) {

            case AppState.USER:
            case AppState.LOADING:
            case AppState.POSTER:
                break;

            case AppState.FOLDER:
                buf.push( this.folderMode );
                buf.push( this.by);
                buf.push( this.gridFolders.join("-") );
                break;

            case AppState.DETAIL:
                if (this.file) {
                    buf.push(this.file.fileName.replace(/\./g, "-"));
                } else buf.push("no-file");
                break;

            default:
                break;

        }

        if (message && message.trim().length > 0) {
            buf.push(message.replace(/\s+/g, "-").toLowerCase());
        }

        return buf.join("_");

    }




    protected setPath(
        path: string
    ): void {

        this.unsetFileAttribute();
        this.path = path;
        this.requestUpdate();
        this.fetchContent();

    }


    /** Checks if the current display has any subfolders */
    protected hasSubfolders(): boolean {
        return this.folder !== undefined
            && this.subfolders !== undefined
            && this.subfolders.length > 0;
    }


    /** Checks if the current display shows files */
    protected hasFiles(): boolean {
        return this.folder !== undefined
            && this.files !== undefined
            && this.files.length > 0;
    }

    /** Checks if the current display may have grid mode */
    protected mayHaveGridMode(): boolean {
        return this.hasSubfolders()
            && this.subfolders !== undefined
            && this.subfolders.filter( subfolder => subfolder.lrc_count > 0 ).length > 0;
    }









    protected cleanupContent(): void {

        // Clear the registry minmax and range
        if ( this.registryElement.value ) {
            const registry = this.registryElement.value.registry;
            registry.range.reset();
            registry.minmax.reset();
            registry.groups.removeAllGroups();
        }

        this._folder = undefined;
        this._subfolders = undefined;
        this._files = undefined;
        this._file = undefined;
        this._tags = undefined;
        this.grid = undefined;
        this._breadcrumb = [];

    }

    /** Perform the control before fetching data */
    private checkReadyForData(): boolean {

        // The client must be connected
        if (this.client.isConnected() === false) {
            this.setError("Aplikace není připojena k serveru. Zkontrolujte připojení.");
            this.cleanupContent();
            return false;
        }

        // The path must be set
        if (this.path === undefined || this.path.trim().length === 0) {
            this.setError("Není nastavena cesta!");
            this.cleanupContent();
            return false;
        }

        // If everything is OK, clear previous errors and return true
        this.clearError();
        return true;
    }


    protected async fetchContent(): Promise<void> {

        if ( !this.path ) {
            this.setStateUser();
            return;
        }


        // Proceed only if all conditions are met
        if (this.checkReadyForData()) {

            // Show the loading state
            this.setStateLoading(
                "Načítám obsah..."
            );

            // Clear all existing content
            this.cleanupContent();

            if (!this.path) return;

            const path = this.path;

            // 1. Fetch the current folder info
            const info = await this.client.routes.get
                .info(path)
                .execute();

            // 2. If successfull, store the folder info and eventually proceed
            if (info.success) {

                // Extract the subfolders from the info response
                const subfolders = info.data.subfolders
                    ? Object.values(info.data.subfolders)
                    : [];

                // Store and display incoming data
                this.setStateFolder(
                    info.data.folder,
                    info.data.breadcrumb,
                    subfolders
                );


                // 3. decide what to do next
                // If the fileName is set, try to fetch the file
                if ( this.fileName !== undefined ) {

                    const file = await this.client.routes.get.file(this.path, this.fileName).execute();
                    // In case the file is fetched, display it
                    if ( file.success === true && file.data.file ) {
                        this.setStateFile( file.data.file );
                    } else {
                        this.setStatePoster( html`<p>Požadovaný soubor nebyl nalezen.</p>` );
                    }
                    
                }
                // If not, decide whether to fetch files in the folder or the grid
                else if ( this.folderMode === FolderMode.GRID && this.hasSubfolders()) {

                    const request = this.client.routes.get.grid( path );

                    if ( this.gridFolders.length > 0 ) {
                        request.setFolders( this.gridFolders );
                    }

                    const result = await request.execute();

                    if ( result.success ) {
                        this.grid = result.data;

                        this.log( "načtena mřížka", this.grid );
                    }

                } 
                // If not the grid, fetch the files in the folder
                else if ( info.data.folder.lrc_count > 0 ) {

                    // Perform the fetch
                    const files = await this
                        .client
                        .routes
                        .get
                        .files(path)
                        .execute();

                    if (files.success) {

                        // Store the files
                        this.updateFiles(files.data.files);

                        // Store the tags
                        this.updateTags(files.data.tags);

                    } // end of files.success

                }


            } // end of info.success === true

            else {

                let content = html`<p>${info.message}</p>`;

                switch (info.code) {
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

                this.setStatePoster(
                    content
                );

            } // end of info.success === false

            this.requestUpdate();

        } // end ready for fetch

    }

    protected async fetchGrid(
        path: string,
        folders: string[],
        by: GridGrouping
    ): Promise<void> {

        this.log( path, folders, by );

        const request = this.client.routes.get.grid(path)
            .setBy( by );

        if ( folders.length > 0 ) {
            request.setFolders( folders );
        }

        const result = await request.execute();

        if (result.success) {
            this.grid = result.data;
            this.requestUpdate();
        }

    }

    protected switchFolderInternal(
        folder: FolderInfo
    ): void {
        this._folder = folder;
    }

    protected setStateFolder(
        folder: FolderInfo,
        breadcrumb: BreadcrumbItem[] = [],
        subfolders?: FolderInfo[]
    ): void {

        this.updateFolder(folder);
        this.updateBreadcrumb(breadcrumb);
        this.updateSubfolders(subfolders ?? []);
        this.state = AppState.FOLDER;

    }

    protected unsetFileAttribute(): void {
        this.removeAttribute("file-name");
        this.fileName = undefined;
    }

    protected setStateFile(
        file: FileInfo
    ): void {

        this.updateFile(file);
        this.state = AppState.DETAIL;
        this.fileName = file.fileName;
        this.setAttribute("file-name", this.fileName);
        this.requestUpdate();

    }

    protected setStateUser(): void {
        this.state = AppState.USER;
        this.folderMode = FolderMode.LIST;
        this.by = GridGrouping.HOUR;
        this.gridFolders = [];
        this.cleanupContent();
    }

}