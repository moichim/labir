import { FileInfo } from "../../responseEntities";
import { OperationWithFile } from "../OperationWithFile";
import { ApiResponseType } from "../ResponseTypes";

export type FileUpdateCommentDataType = {
    file: FileInfo
}

export class FileUpdateComment extends OperationWithFile<FileUpdateCommentDataType> {

    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("fileupdatecomment");
        return this;
    }

    public setCommentTimestamp(
        timestamp: number
    ): this {
        this.request.addBodyParameter("timestamp", timestamp);
        return this;
    }

    /**
     * Nastaví text komentáře, který bude odeslán na server.
     *
     * @param message Text komentáře
     */
    public setMessage(
        message: string
    ): this {
        this.request.addBodyParameter("message", message);
        return this;
    }

    public execute(): Promise<ApiResponseType<FileUpdateCommentDataType>> {
        return this.client.fetch<FileUpdateCommentDataType>(this.request);
    }

}