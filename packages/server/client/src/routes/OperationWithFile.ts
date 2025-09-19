import { OperationWithPath } from "./OperationWithPath";
import { ApiResponseDataType } from "./ResponseTypes";

/** A base operation that needs to have a path specified. */
export abstract class OperationWithFile<R extends ApiResponseDataType> extends OperationWithPath<R> {

    public setFile(
        filename: string
    ): this {
        this.request.addQueryParameter("file", filename);
        return this;
    }

}