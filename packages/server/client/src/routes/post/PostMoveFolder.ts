import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

export type PostMoveFolderDataType = {

}

export class PostMoveFolder extends OperationWithPath<PostMoveFolderDataType> {

    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("move");
        return this;
    }

    public setTarget(
        target: string
    ): this {
        this.request.addBodyParameter("target", target);
        return this;
    }

    public async execute(): Promise<ApiResponseType<PostMoveFolderDataType>> {
        const response = await this.client.fetch<PostMoveFolderDataType>(this.request);
        return response;
    }
}