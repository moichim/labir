import { FileResult } from "./FileResult";
import { IParserObject } from "./parsers";

export enum FileServiceStates {
    PENDING = 0,
    LOADING = 1,
    SUCCESS = 2,
    ERROR = 3
}




/**
 * Stores the blob and provides all the data for instance
 * - this service is registered in FileService
 * - eventually, this service might be moved to the
 */
export class FileReaderService extends FileResult {

    public readonly id = Math.random();

    public constructor(
        public readonly buffer: ArrayBuffer,
        public readonly parser: IParserObject,
        thermalUrl: string,
        visibleUrl?: string
    ) {
        super( thermalUrl, visibleUrl );
    }

    public isSuccess(): boolean {
        return true;    
    }

    public dimensions(): ReturnType<IParserObject["dimensions"]> {
        return this.parser.dimensions( this.buffer );
    }


    

}