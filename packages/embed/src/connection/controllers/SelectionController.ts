import { ReactiveController } from "lit";
import { AppWithClientController } from "./ClientController";
import { FileInfo } from "@labirthermal/server";
import { CallbacksManager } from "@labirthermal/core";
import { BaseElement } from "../../hierarchy/BaseElement";
import { AppWithContentController } from "./ContentController";


export interface AppWithSelectionController extends AppWithContentController {

    selection: SelectionController;

}

export type SelectionChangedCallback = ( selectedFiles: FileInfo[] ) => void;


/** Controls the selection inside the current app*/
export class SelectionController implements ReactiveController {

    host: AppWithSelectionController;

    /** Unique identifier for the listeners */
    private UUID: string;

    /** Internal container for selection */
    private _selectedFiles: FileInfo[] = [];

    /** Dynamically converted upon every call - created from the _selectedFiles Set */
    public get array(): FileInfo[] {
        return Array.from(this._selectedFiles);
    }

    /** Callback called when the selection changes */
    private _onSelectionChange: CallbacksManager<SelectionChangedCallback> = new CallbacksManager();

    constructor(
        host: AppWithSelectionController
    ) {
        this.host = host;
        this.UUID = host.UUID + "__selection_controller";
        this.host.addController(this);
    }

    hostConnected(): void {

        this._onSelectionChange.add( "debug", console.log );

    }

    hostDisconnected(): void {}

    hostUpdate(): void {}

    hostUpdated(): void {}


    /**
     * Iterate over every selected file synchronously
     */
    public forEverySelectedSync(
        callback: ( file: FileInfo ) => void
    ): void {
        this._selectedFiles.forEach( file => {
            callback( file );
        } );
    }


    /**
     * Iterate over every selected file asynchronously using `Promise.all()s`
     */
    public async forEverySelectedAsync(
        callback: ( file: FileInfo ) => Promise<void>
    ): Promise<void> {
        const promises = this._selectedFiles.map( file => {
            return callback( file );
        } );
        await Promise.all( promises );
    }



    /**
     * Clear the current selection
     */
    public clearSelection(): void {
        if ( this._selectedFiles.length === 0 ) {
            return;
        }
        this._selectedFiles = [];
        this._onSelectionChange.call( this._selectedFiles );
        this.host.requestUpdate();
    }


    /** 
     * Add a file to the current selection 
     * @return boolean Whether the file was added
     */
    public addToSelection(
        file: FileInfo
    ): boolean {
        if ( ! this._selectedFiles.includes( file ) ) {
            this._selectedFiles.push( file );
            this._onSelectionChange.call( this._selectedFiles );
            this.host.requestUpdate();
            return true;
        }
        return false;
    }

    public addMultipleToSelection(
        files: FileInfo[]
    ): void {

        let hasChanged = false;

        files.forEach( file => {
            if ( ! this._selectedFiles.includes( file ) ) {
                this._selectedFiles.push( file );
                hasChanged = true;
            }
        } );

        if ( hasChanged ) {
            this._onSelectionChange.call( this._selectedFiles );
            this.host.requestUpdate();
        }

    }


    /**
     * Remove the file from the current selection
     * @return boolean Whether the file was removed
     */
    public removeFromSelection(
        file: FileInfo
    ): boolean {
        if ( this._selectedFiles.includes( file ) ) {
            this._selectedFiles = this._selectedFiles.filter( f => f !== file );
            this._onSelectionChange.call( this._selectedFiles );
            this.host.requestUpdate();
            return true;
        }
        return false;
    }


    /** 
     * Rerender the provided element whenever the selection changes 
     */
    public subscribeToSelectionChange(
        element: BaseElement
    ): void {

        console.log( element );

        this._onSelectionChange.add(
            element.UUID, 
            () => {
                element.requestUpdate();
            }
        );

    }

    public fileIsSelected(
        file: FileInfo
    ): boolean {
        return this._selectedFiles.includes( file );
    }

    public getSelectedFiles(): FileInfo[] {
        return this._selectedFiles;
    }


}