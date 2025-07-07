import { FileInfo } from "../../types";
import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

export type UploadFileDataType = {
    file: FileInfo
};

export class UploadFile extends OperationWithPath<UploadFileDataType> {
    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("uploadfile");
        return this;
    }

    public setLrc(file: File): this {
        this.request.addFile("lrc", file);
        return this;
    }

    public setVisual(file: File): this {
        this.request.addFile("visual", file);
        return this;
    }

    public setPreview(file: File): this {
        this.request.addFile("preview", file);
        return this;
    }


    public async execute(): Promise<ApiResponseType<UploadFileDataType>> {
        
        const response = await this.client.fetch<UploadFileDataType>(this.request);
        return response;


    }
}