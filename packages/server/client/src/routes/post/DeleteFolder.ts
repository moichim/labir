import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

type DeleteFolderDataType = object;

export class DeleteFolder extends OperationWithPath<DeleteFolderDataType> {


    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("delete");
        return this;
    }


    public async execute(): Promise<ApiResponseType<DeleteFolderDataType>> {
        return await this.client.fetch<DeleteFolderDataType>(this.request);
    }


}