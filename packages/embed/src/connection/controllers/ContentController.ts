import { CallbacksManager } from "@labirthermal/core";
import { BreadcrumbItem, FolderInfo, GetGridDataType } from "@labirthermal/server";
import { ReactiveController } from "lit";
import { FileInfo } from "packages/server/client/dist";
import { AppWithClientController, ClientController } from "./ClientController";

export interface AppWithContentController<T extends AppWithClientController> extends AppWithClientController {

    folderPath?: string;
    fileName?: string;

    client: ClientController<T>

}

export class ContentController<
    T extends AppWithClientController
> implements ReactiveController {

    host: AppWithContentController<T>;

    private _folder?: FolderInfo;
    private _subfolders: FolderInfo[] = [];
    private _files?: FileInfo[];
    private _file?: FileInfo;
    private _grid?: GetGridDataType;
    private _breadcrumb?: BreadcrumbItem[];

    public get folder(): FolderInfo | undefined { return this._folder; }
    public get subfolders(): FolderInfo[] { return this._subfolders; }
    public get files(): FileInfo[] | undefined { return this._files; }
    public get file(): FileInfo | undefined { return this._file; }
    public get grid(): GetGridDataType | undefined { return this._grid; }
    public get breadcrumb(): BreadcrumbItem[] | undefined { return this._breadcrumb; }

    /** Event called whenever loading starts */
    public readonly onLoadingStarted: CallbacksManager<() => void> = new CallbacksManager();
    /** Event called whenever loading finishes */
    public readonly onLoadingFinished: CallbacksManager<() => void> = new CallbacksManager();

    

    constructor(
        host: AppWithContentController<T>
    ) {
        this.host = host;
        host.addController(this);
    }

    hostConnected(): void {
    }

    hostDisconnected(): void {

    }

    hostUpdate(): void {


    }

    hostUpdated(): void {

    }



    /** Set the current folder state. Intended for API calls, but can be used by routers & buttons as well. This method tries to modify the current folder path property */
    public dangerouslySetFolder(
        folder: FolderInfo | undefined
    ): void {
        
        // If the object is identical, do nothing
        if (this._folder === folder) return;

        // If both objects are defined, merge them
        if ( this.folder && folder ) {
            Object.assign( this.folder, folder );
        } 
        // Otherwise just reassign the internal state
        else {
            this._folder = folder;
        }

        // Try to update the folder path property of the component
        if ( this.host.folderPath !== folder?.path ) {
            this.host.folderPath = folder?.path;
        }
        this.host.requestUpdate();
    }

    /** Set the current subfolders state. Intended for API calls */
    public dangerouslySetSubfolders(
        subfolders: FolderInfo[] | undefined
    ): void {
        if (this._subfolders === subfolders) return;
        this._subfolders = subfolders || [];
        this.host.requestUpdate();
    }

    /** Update the current state of the file. Intended for API calls. */
    public dangerouslySetFiles(
        files: FileInfo[] | undefined
    ): void {
        if (this._files === files) return;
        this._files = files;
        this.host.requestUpdate();
    }

    /** Update the inner state of of the current file. Intended for API calls but can be used by routers or the UI as well. */
    public dangerouslySetFileState(
        file: FileInfo | undefined
    ): void {

        // Do nothing if the object is identical
        if (this._file === file) return;

        // If both variables are defined, merge the both objects
        if ( this.file && file ) {
            Object.assign( this.file, file );
        } 
        // Otherwise, just override the internal state
        else {
            this._file = file;
        }

        // Update the fileName property of the host component
        if ( this.file ) {
            this.host.fileName = this.file.fileName;
        }

        // Call the update on the host
        this.host.requestUpdate();

    }

    /** Update the current grid state. Intended for API calls only. */
    public dangerouslySetGridState(
        grid?: GetGridDataType
    ): void {
        if (this._grid === grid) return;
        this._grid = grid;
        this.host.requestUpdate();
    }

    /** 
     * Update the information about the folder wherever it is:
     * - in the main folder state if the path matches
     * - in the subfolders list if the path matches
     * - in the grid groups if the path matches
     * - in the grid header if the slug matches
     * - in the grid all_subdirectories if the slug matches
     */
    public updateFolderState(
        folder: FolderInfo
    ): void {

        // if the current folder is defined and matches, update it
        if ( this.folder && this.folder.path === folder.path ) {
            Object.assign( this.folder, folder );
        }

        // Iterate over current subfolders and update the all matching ones
        if ( this.subfolders ) {

            this.subfolders.forEach( subfolder => {
                if ( subfolder.path === folder.path ) {
                    Object.assign( subfolder, folder );
                };
            } );

        }

        // Try to find the folder in the current grid and update it as well
        if ( this.grid && this.grid.folder && this.grid.folder.path !== folder.path ) {
            Object.assign( this.grid.folder, folder );
        }

        // Look into the grid header as well
        if ( 
            this.grid 
            && this.grid.header 
            && this.grid.header[folder.slug] !== undefined
        ) {
            Object.assign( this.grid.header[folder.slug], folder );
        }

        // Try to look in the all subdirectories of the grid
        if ( 
            this.grid 
            && this.grid.all_subdirectories 
            && this.grid.all_subdirectories[folder.slug] !== undefined
        ) {
            Object.assign( this.grid.all_subdirectories[folder.slug], folder );
        }

        // Look into the breadcrumb and eventually update the folder name there as well
        if ( this._breadcrumb ) {
            this._breadcrumb.forEach( item => {
                if ( item.path === folder.path ) {
                    item.name = folder.name;
                }
            })
        }

        // Let the host know about the update
        this.host.requestUpdate();

    }

    /** 
     * Update the information about a file wherever it is:
     * - in the main file state if the URL matches
     * - in the files list if the URL matches
     * - in the grid groups if the URL matches
     * - in the grid tags if the URL matches
    */
    public updateFileState(
        file: FileInfo
    ): void {

        // Update the main file state if necessary
        if ( this.file && this.file.url === file.url ) {
            Object.assign( this.file, file );
        }

        // Look at the current files and update the one that matches
        if ( this.files ) {
            this.files.forEach( currentFile => {
                if ( currentFile.url === file.url ) {
                    Object.assign( currentFile, file );
                }} 
            );
        }

        // Look into the grid of subfolders and update the matching file there
        if ( this.grid ) {

            // Update the file in the grid files
            for ( const group of Object.values( this.grid.groups ) ) {

                Object.values( group.folders ).forEach( folder => {

                    folder.forEach( fileInFolder => {
                        if ( fileInFolder.url === file.url ) {
                            Object.assign( fileInFolder, file );
                        }
                    } );

                } );

            }

            // Update the file in the tags as well
            for ( const tag of Object.values( this.grid.tags ) ) {

                for ( const folder of Object.values( tag.folders ) ) {
                    folder.forEach( fileInFolder => {
                        if ( fileInFolder.url === file.url ) {
                            Object.assign( fileInFolder, file );
                        }
                    } );

                }

            }

        }

        // Let the host know about the update
        this.host.requestUpdate();

    }

    /** Clear the entire content in this controller */
    public purgeContentState(): void {

        this._folder = undefined;
        this._subfolders = [];
        this._files = undefined;
        this._file = undefined;
        this._grid = undefined;

    }


    /** 
     * Performs the entire fetch cascade based on the provided parameters 
     */
    public async fetchAllContentByState(
        folderPath: string,
        fileName?: string,
        isGridView?: boolean
    ): Promise<void> {

        this.purgeContentState();

        this.onLoadingStarted.call();


        // If it is a grid, do fetch the grid data only and do nothing else
        if ( isGridView === true ) {

            await this.fetchGridData( folderPath );

        } 
        // If it is not a grid, do fetch the folder info and then either the files or the one file
        else {

            await this.fetchFolder( folderPath );

            if ( 
                this._folder !== undefined 
                && this._folder.lrc_count > 0 
                && this._subfolders.length === 0
                && fileName === undefined
            ) {
                await this.fetchFiles( folderPath );
            } else if ( fileName !== undefined ) {
                await this.fetchFile( folderPath, fileName );
            }

        }

        this.onLoadingFinished.call();

        this.host.requestUpdate();

    }


    /** Request and update a folder information, storing also all subfolders */
    private async fetchFolder(
        folderPath: string
    ): Promise<void> {

        const result = await this.host.apiClient.routes.get
            .info( folderPath )
            .execute();

        if ( result.success ) {
            this.dangerouslySetFolder( result.data.folder );
            this.dangerouslySetSubfolders( Object.values( result.data.subfolders ) );
        }

    }

    /** Request all files in a folder */
    private async fetchFiles(
        folderPath: string
    ): Promise<void> {

        const result = await this.host.apiClient.routes.get
            .files(folderPath)
            .execute();

        if ( result.success ) {
            this.dangerouslySetFiles( Object.values( result.data.files ) );
        }

    }

    /** Request the grid data for a folder */
    private async fetchGridData(
        folderPath: string
    ): Promise<void> {

        const result = await this.host.apiClient.routes.get
            .grid(folderPath)
            .execute();

        if ( result.success ) {
            this.dangerouslySetFolder( result.data.folder );
            this.dangerouslySetGridState( result.data );
        }

    }

    /** Fetch information about a file */
    private async fetchFile(
        folderPath: string,
        fileName: string
    ): Promise<void> {

        const result = await this.host.apiClient.routes.get
            .file(
                folderPath,
                fileName
            )
            .execute();
        
        if ( result.success ) {

            this.dangerouslySetFileState( result.data.file )

        }

    }



}