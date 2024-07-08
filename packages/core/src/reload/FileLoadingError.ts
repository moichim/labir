import { FileResult } from "./FileResult";

export enum FileErrors {
    NOT_SPECIFIED = 0,
    FILE_NOT_FOUND = 1,
    MIME_UNSUPPORTED = 2,
    PARSING_ERROR = 3,
    OUT_OF_MEMORY = 4
}

export class FileLoadingError extends Error {

    public constructor(
        public readonly code: FileErrors,
        public readonly url: string,
        message?: string
    ) {
        super(message);
    }
}

export class FileFailureService extends FileResult {

    constructor(
        thermalUrl: string,
        public readonly code: FileErrors,
        public readonly message: string
    ) {
        super( thermalUrl );
    }

    public isSuccess(): boolean {
        return false;    
    }

    public static fromError( error: FileLoadingError ) {
        return new FileFailureService( error.url, error.code, error.message );
    }

}