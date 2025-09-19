import { OperationWithFile } from "../OperationWithFile";
import { ApiResponseType } from "../ResponseTypes";

type DeleteFileDataType = object;

export class DeleteFile extends OperationWithFile<DeleteFileDataType> {

    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("filedelete");
        return this;
    }

    public setLrc(file: File): this {
        this.request.addFile("lrc", file);
        return this;
    }

    public async execute(): Promise<ApiResponseType<DeleteFileDataType>> {
        const response = await this.client.fetch<DeleteFileDataType>(this.request);
        return response;
    }

}