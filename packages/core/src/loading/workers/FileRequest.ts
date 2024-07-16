import { FileFailureService } from "./errors/FileFailureService";
import { FileErrors, FileLoadingError } from "./errors/FileLoadingError";
import { FileReaderService } from "./FileReaderService";
import { AbstractFileResult } from "./AbstractFileResult";
import { determineParser } from "./parsers";

export type FileResultListener = ( result: AbstractFileResult ) => void

/**
 * Internal member of `FilesService`
 * - `FileService` members may listen to resolving of this object
 * - `load()` method effcently handles the fetch and processing of the file
 */
export class FileRequest {

    
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

    

    /**
     * The request is stored internally, so that multiple calls of `load` will allways result in one single `Promise` - to this one.
     */
    public response?: Promise<AbstractFileResult>;


    /**
     * Fetch a file, process the response and return the promise
     * - the promise is stored internally
     * - if the request is already loading/processing, any subsequent calls use the stored promise object
     */
    async load(): Promise<AbstractFileResult> {

        if ( this.response === undefined ) {

            // Fetch the file
            this.response = this.processResponse( fetch( this.thermalUrl ) );
        }

        return this.response;

        

    }

    /** 
     * Process the raw response:
     * - decide if the file exists
     * - assign parser to the file
     * - create the service
     */
    protected async processResponse( response: Promise<Response> ) {

        const res = await response;

        // If the file was not found, return the appropriate failure
        if ( res.status !== 200 ) {

            return this.pocessTheService( 
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

            return this.pocessTheService( 
                new FileReaderService( 
                    buffer, 
                    parser, 
                    this.thermalUrl, 
                    this.visibleUrl 
                )
            );

        } catch ( error ) {

            if ( error instanceof FileLoadingError ) {
                return this.pocessTheService( 
                    FileFailureService.fromError( error ) 
                );
            }

            else {
                throw error;
            }

        }

    }


    /**
     * Actions taken on the `AbstractFileResult` object
     * @todo because there are no side effects, this method might appear redundant
     */
    protected pocessTheService( result: AbstractFileResult ) {
        return result;
    }

}