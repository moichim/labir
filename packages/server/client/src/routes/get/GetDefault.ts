import { RequestFactory } from "../../request/RequestFactory";
import { FolderInfo } from "../../types";
import { Operation } from "../Operation";
import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

export type GetDefaultDataType = {
    folder: FolderInfo,
    subfolders: false | {
        [index: string]: FolderInfo
    }
}

export class GetDefault extends OperationWithPath<GetDefaultDataType> {

    public init(): this {
        this.request.setMethod( "GET" );
        return this;
    }


    public async execute(): Promise<ApiResponseType<GetDefaultDataType>> {
        const response = await this.client.fetch<GetDefaultDataType>(this.request);
        return response;
    }


}