import { ReactiveController } from "lit";
import { AppWithContentController, ContentController } from "./ContentController";
import { FileInfo, FolderInfo } from "@labirthermal/server";
import { CallbacksManager } from "@labirthermal/core";
import { BaseElement } from "../../hierarchy/BaseElement";

export enum DisplayState {
    LOADING,
    ERROR,
    USER,
    FOLDER,
    FILE
}

/** Which way should we display list of folders? */
export enum FolderListDisplayMode {
    /** Folders shall be displayed as table, one under another */
    TABLE = "asTable",
    /** Folders shall be displayed as list of folders */
    LIST = "asList",
    /** The files within subfolders shall be displayed in a grid */
    GRID = "asGrid",
}

/** Which way should we display lists of files? */
export enum FileListDisplayMode {
    /** Files shall be displayed in a responsive grid, taking in consideration a predefined columns mode & compact mode */
    GRID = "asGrid",
    /** Files shall be displayed in a table, one under another */
    TABLE = "asTable"
}


/** A standard interface for navigation & display. It uses the ContentController to fetch data based on the current folder and file */
export interface AppWithDisplayController extends AppWithContentController {

    /** @context Provides the current state & perform the fetches */
    content: ContentController;

    /** @state Indicating the current application display state */
    appState: DisplayState;

    /** @property Reflected from the inside */
    folderListDisplayMode: FolderListDisplayMode;

    /** @property Reflected from the inside */
    fileDisplayMode: FileListDisplayMode;

    /** @property Reflected from the inside */
    editTags: boolean;

    /** @property Reflected from the inside */
    displayComments: boolean;
}

export class DisplayController implements ReactiveController {

    host: AppWithDisplayController;

    private _slug: string = "";

    /** Identificator for current internals based on the current state 
     * - us updated upon navigation which might be change of the state or enforcing to load a specific folder / file / grid
    */
    public get slug(): string { return this._slug; }

    public get appState(): DisplayState { return this.host.appState; }
    public get folderListDisplayMode(): FolderListDisplayMode { return this.host.folderListDisplayMode; }
    public get fileDisplayMode(): FileListDisplayMode { return this.host.fileDisplayMode; }
    public get editTags(): boolean { return this.host.editTags; }
    public get displayComments(): boolean { return this.host.displayComments; }

    private readonly onAppModeUpdate: CallbacksManager<() => void> = new CallbacksManager();

    private readonly onFolderDisplayModeUpdate: CallbacksManager<() => void> = new CallbacksManager();

    private readonly onFileDisplayModeUpdate: CallbacksManager<() => void> = new CallbacksManager();

    private readonly onEditTagsUpdate: CallbacksManager<() => void> = new CallbacksManager();

    private readonly onDisplayCommentsUpdate: CallbacksManager<() => void> = new CallbacksManager();

    private readonly onNavigate: CallbacksManager<() => void > = new CallbacksManager();

    constructor(
        host: AppWithDisplayController
    ) {
        this.host = host;
        host.addController(this);
    }

    hostConnected(): void {}

    hostDisconnected(): void {}

    hostUpdate(): void {}

    hostUpdated(): void {}

    private refreshSlugOnNavigate(): void {
        this._slug = this.host.content.getRegistrySlug();
        this.onNavigate.call();
        this.host.requestUpdate();
    }

    async navigateToFolderAndLoad(
        targetFolderPath: string
    ): Promise<void> {

        await this.host.content.fetchAllContentByState(
            targetFolderPath,
            undefined,
            this.host.folderListDisplayMode === FolderListDisplayMode.GRID,
        );

        if ( this.host.folderPath !== targetFolderPath ) {

        } else {
            this.setAppMode( DisplayState.FOLDER );
        }

        this.refreshSlugOnNavigate();

    }

    async navigateToPreloadedFile(
        parentFolder: FolderInfo,
        file: FileInfo
    ): Promise<void> {

        this.host.log(
            "Nastavuji se na soubor:",
            file
        );

        this.host.content.dangerouslySetFolder(
            parentFolder
        );

        this.host.content.dangerouslySetFileState(
            file
        );

        this.setAppMode( DisplayState.FILE );

        this.refreshSlugOnNavigate();

    }

    async navigateToUserFoldersAndLoad(): Promise<void> {

    }




    /** Setup the internal display mode state */
    private setAppMode(
        mode: DisplayState
    ): void {

        if ( mode !== this.host.appState ) {
            this.host.appState = mode;
            this.onAppModeUpdate.call();
            this.host.requestUpdate();
        }

    }

    /** Setup the internal file display mode state */
    public setFileDisplayMode(
        mode: FileListDisplayMode
    ): void {

        if ( mode !== this.host.fileDisplayMode ) {
            this.host.fileDisplayMode = mode;
            this.onFileDisplayModeUpdate.call();
            this.host.requestUpdate();
        }

    }

    /** Public display internal  folder display setter */
    public setFolderDisplayMode(
        mode: FolderListDisplayMode
    ): void {

        if ( mode !== this.host.folderListDisplayMode ) {
            this.host.folderListDisplayMode = mode;
            this.onFolderDisplayModeUpdate.call();
            this.host.requestUpdate();
        
        }
    }

    /** The given element will request update whenever the app mode changes */
    public subscribeToAppMode(
        element: BaseElement,
    ): void {

        this.onAppModeUpdate.set(
            element.UUID,
            () => {
                element.requestUpdate();
            }
        );

    }

    /** The given element will request update whenever the folder display mode changes */
    public subscribeToFolderDisplayMode(
        element: BaseElement
    ): void {

        this.onFolderDisplayModeUpdate.set(
            element.UUID,
            () => {
                element.requestUpdate();
            }
        );

    }

    /** The given element will request update whenever the file display mode changes */
    public subscribeToFileDisplayMode(
        element: BaseElement
    ): void {

        this.onFileDisplayModeUpdate.set(
            element.UUID,
            () => {
                element.requestUpdate();
            }
        );

    }

    public subscribeToEditTags(
        element: BaseElement
    ): void {
        this.onEditTagsUpdate.set(
            element.UUID,
            () => {
                element.requestUpdate();
            }
        );
    }

    public subscribeToDisplayComments(
        element: BaseElement
    ): void {
        this.onDisplayCommentsUpdate.set(
            element.UUID,
            () => {
                element.requestUpdate();
            }
        );
    }


    /** Unsubscribe the element from all display mode changes */
    public unsubscribeFromAll(
        element: BaseElement
    ): void {
        this.onAppModeUpdate.delete( element.UUID );
        this.onFolderDisplayModeUpdate.delete( element.UUID );
        this.onFileDisplayModeUpdate.delete( element.UUID );
        this.onEditTagsUpdate.delete( element.UUID );
        this.onDisplayCommentsUpdate.delete( element.UUID );
    }


    /** 
     * Can the current folder have a grid display?
     * - only if the subfolders have sime lrc files
     */
    public canHaveGrid(
        subfolders: FolderInfo[]
    ): boolean {
        return subfolders.some( f => f.lrc_count > 0 );
    }



    /** 
     * Is the current user allowed to edit the given folder?
     * - only when they may manage folders or files in it
     */
    public canEditFolder(
        folder: FolderInfo
    ): boolean {

        return folder.may_manage_folders_in
            || folder.may_manage_files_in;

    }

    /** Is the user allowed to delete the folder?
     * - roots can delete everything
     * - other users can delete the folder only if they may manage folders in it AND the folder can contain files
     */
    public canDeleteFolder(
        folder: FolderInfo
    ): boolean {
        if ( this.host.client.isRoot ) {
            return true;
        }

        return folder.may_manage_files_in;
    }

    /** Is the user allowed to edit or upload files in the given folder? */
    public canEditOrUploadFiles(
        folder: FolderInfo
    ): boolean {
        return folder.may_manage_files_in;
    }

    /** 
     * Is the user allowed to display comments at all?
     * - roots can allways
     * - logged in users can allways
     */
    public canTurnOnComments(): boolean {

        if ( this.host.client.isRoot ) {
            return true;
        }

        return this.host.client.isLoggedIn;

    }

    /** Is the user allowed to turn on the tags editing? 
     * - anonymous can not
     * - root can edit everything
     * - logged in users can edit only if they may manage files in the folder
    */
    public canTurnOnTagsEditing(
        folder: FolderInfo
    ): boolean {

        if ( this.host.client.isLoggedIn === false ) {
            return false;
        }

        if ( this.host.client.isRoot ) {
            return true;
        }

        return folder.may_manage_files_in;
    }


}