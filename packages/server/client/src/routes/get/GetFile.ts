import { RequestFactory } from "../../request/RequestFactory";
import { FileInfo } from "../../types";
import { Operation } from "../Operation";
import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

export type GetFileDataType = {
    file: FileInfo
}

export class GetFile extends OperationWithPath<GetFileDataType> {

    public init(): this {
        this.request.setMethod("GET");
        this.request.setAction("file");
        return this;
    }

    public setFileName(
        value: string
    ) {
        this.request.addQueryParameter("file", value);
        return this;
    }


    public execute(): Promise<ApiResponseType<GetFileDataType>> {
        const result = this.client.fetch<GetFileDataType>(this.request);
        return result;
    }


}