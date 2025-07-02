import { RequestFactory } from "../../request/RequestFactory";
import { FileInfo, FolderInfo, TagsWithContent } from "../../types";
import { Operation } from "../Operation";
import { OperationWithPath } from "../OperationWithPath";
import { OperationWithFilters } from "../OperationWithPathAndFilters";
import { ApiResponseType } from "../ResponseTypes";

export type GetFilesDataType = {
    folder: FolderInfo,
    subfolders: {
        [index: string]: FolderInfo
    },
    time: {
        files: {
            from: number,
            to: number
        }
    },
    count: {
        displayed: number,
        omitted: number,
        total: number
    },
    files: FileInfo[],
    tags: TagsWithContent
}

export class GetFiles extends OperationWithFilters<GetFilesDataType> {

    public init(): this {
        this.request.setMethod( "GET" );
        this.request.setAction( "files" );
        return this;
    }


    public async execute(): Promise<ApiResponseType<GetFilesDataType>> {
        const response = await this.client.fetch<GetFilesDataType>(this.request);
        return response;
    }


}