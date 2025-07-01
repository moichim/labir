import { RequestFactory } from "../../request/RequestFactory";
import { FolderInfo } from "../../types";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type GetDefaultDataType = {
    folder: FolderInfo,
    subfolders: {
        [index: string]: FolderInfo
    }
}

export class GetDefault extends Operation<GetDefaultDataType> {

    protected request!: RequestFactory;

    public init(): this {
        this.request = this.client.createRequest();
        this.request.setMethod( "GET" );
        return this;
    }

    public setPath(
        path: string
    ): this {
        this.request.setPath(path);
        return this;
    }


    public async execute(): Promise<ApiResponseType<GetDefaultDataType>> {
        const response = await this.client.fetch<GetDefaultDataType>(this.request);
        return response;
    }


}