import { OperationWithFile } from "../OperationWithFile";
import { ApiResponseType } from "../ResponseTypes";

export type MoveFileDataType = object;

export class MoveFile extends OperationWithFile<MoveFileDataType> {

    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("movefile");
        return this;
    }

    public setTarget(
        target: string
    ): this {
        this.request.addBodyParameter("target", target);
        return this;
    }

    public async execute(): Promise<ApiResponseType<MoveFileDataType>> {
        const response = await this.client.fetch<MoveFileDataType>(this.request);
        return response;
    }
}
