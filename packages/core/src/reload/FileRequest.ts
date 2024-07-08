import { FileErrors, FileFailureService, FileLoadingError } from "./FileLoadingError";
import { FileReaderService } from "./FileReaderService";
import { FileResult } from "./FileResult";
import { determineParser } from "./parsers";

export type FileResultListener = ( result: FileResult ) => void

export class FileRequest {

    public readonly id = Math.random();

    protected constructor(
        public readonly thermalUrl: string,
        public readonly visibleUrl?: string
    ) {}

    public static fromUrl(
        thermalUrl: string,
        visibleUrl?: string
    ) {
        return new FileRequest( thermalUrl, visibleUrl );
    }

    /** @deprecated Use promises instead of callbacks here! This needs to be removed! */
    protected listeners: Map<string, FileResultListener> = new Map;

    /** @deprecated Use promises instead of callbacks here! This needs to be removed! */
    public addListener( key: string, listener: FileResultListener ) {
        this.listeners.set( key, listener );
    }

    /** @deprecated Use promises instead of callbacks here! This needs to be removed! */
    public removeListener( key: string ) {
        this.listeners.delete( key );
    }

    /** @deprecated Use promises instead of callbacks here! This needs to be removed! */
    protected callListeners( result: FileResult ) {
        this.listeners.forEach( listener => listener( result ) );
        this.listeners.clear();
    }

    protected processResult( result: FileResult ) {
        this.callListeners( result );
        return result;
    }

    public response?: Promise<FileResult>;

    async load(): Promise<FileResult> {

        if ( this.response === undefined ) {

            // Fetch the file
            this.response = this.postLoaded( fetch( this.thermalUrl ) );
        }

        return this.response;

        

    }

    protected async postLoaded( response: Promise<Response> ) {

        const res = await response;

        // If the file was not found, return the appropriate failure
        if ( res.status !== 200 ) {

            return this.processResult( 
                new FileFailureService( 
                    this.thermalUrl, 
                    FileErrors.FILE_NOT_FOUND, 
                    `File '${this.thermalUrl}' was not found.` 
                ) 
            );

        }

        // Read the file data
        const buffer = await res.arrayBuffer();

        // Determine the parser and create the service
        try {

            const parser = determineParser( buffer, this.thermalUrl );

            return this.processResult( 
                new FileReaderService( 
                    buffer, 
                    parser, 
                    this.thermalUrl, 
                    this.visibleUrl 
                )
            );

        } catch ( error ) {

            if ( error instanceof FileLoadingError ) {
                return this.processResult( 
                    FileFailureService.fromError( error ) 
                );
            }

            else {
                throw error;
            }

        }

    }

}