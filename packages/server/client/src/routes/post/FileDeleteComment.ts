import { FileInfo } from "../../responseEntities";
import { OperationWithFile } from "../OperationWithFile";
import { ApiResponseType } from "../ResponseTypes";

export type FileDeleteCommentDataType = {
    file: FileInfo
}

export class FileDeleteComment extends OperationWithFile<FileDeleteCommentDataType> {

    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("filedeletecomment");
        return this;
    }

    public setCommentTimestamp(
        timestamp: number
    ): this {
        this.request.addBodyParameter("timestamp", timestamp);
        return this;
    }

    public execute(): Promise<ApiResponseType<FileDeleteCommentDataType>> {
        return this.client.fetch<FileDeleteCommentDataType>(this.request);
    }

}