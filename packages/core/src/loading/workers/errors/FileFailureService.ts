import { AbstractFileResult } from "../AbstractFileResult";
import { FileErrors, FileLoadingError } from "./FileLoadingError";

export class FileFailureService extends AbstractFileResult {

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