import { FolderInfo } from "../../responseEntities";
import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

export type GetInfoDataType = {
    folder: FolderInfo,
    subfolders: false | {
        [index: string]: FolderInfo
    }
}

export class GetInto extends OperationWithPath<GetInfoDataType> {

    public init(): this {
        this.request.setMethod( "GET" );
        return this;
    }


    public async execute(): Promise<ApiResponseType<GetInfoDataType>> {
        const response = await this.client.fetch<GetInfoDataType>(this.request);
        return response;
    }


}