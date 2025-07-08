import { FileInfo } from "../../responseEntities";
import { OperationWithFile } from "../OperationWithFile";
import { ApiResponseType } from "../ResponseTypes";

export type FileClearCommentsDataType = {
    file: FileInfo
}

export class FileClearComments extends OperationWithFile<FileClearCommentsDataType> {

    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("fileclearcomments");
        return this;
    }

    /**
     * Executes the request to clear comments on a file.
     */
    public execute(): Promise<ApiResponseType<  FileClearCommentsDataType>> {
        return this.client.fetch<FileClearCommentsDataType>(this.request);
    }

}