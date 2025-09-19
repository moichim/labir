import { FileInfo } from "../../responseEntities";
import { OperationWithFile } from "../OperationWithFile";
import { ApiResponseType } from "../ResponseTypes";

export type FileAddCommentDataType = {
    file: FileInfo
}

export class FileAddComment extends OperationWithFile<FileAddCommentDataType> {

    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("fileaddcomment");
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

    public execute(): Promise<ApiResponseType<FileAddCommentDataType>> {
        return this.client.fetch<FileAddCommentDataType>(this.request);
    }

}