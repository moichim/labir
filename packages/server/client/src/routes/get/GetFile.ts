import { RequestFactory } from "../../request/RequestFactory";
import { FileInfo } from "../../types";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type GetFileDataType = {
    file: FileInfo
}

export class GetFile extends Operation<GetFileDataType> {

    protected request!: RequestFactory;

    public init(): this {
        this.request = this.client.createRequest();
        this.request.setMethod("GET");
        this.request.setAction("file");
        return this;
    }

    public setPath(
        value: string
    ): this {
        this.request.setPath( value );
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