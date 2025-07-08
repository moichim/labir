import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

export type UpdateFileDataType = {

}

export class UpdateFile extends OperationWithPath<UpdateFileDataType> {
    
    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("updatefile");
        return this;
    }

    public setFile(
        filename: string
    ): this {
        this.request.addQueryParameter("filename", filename);
        return this;
    }

    public setLabel( value: string ): this {
        this.request.addBodyParameter("label", value);
        return this;
    }

    public setDescription( value: string ): this {
        this.request.addBodyParameter("description", value);
        return this;
    }

    

    public async execute(): Promise<ApiResponseType<UpdateFileDataType>> {
        const response = await this.client.fetch(this.request);
        return response;
    }
}