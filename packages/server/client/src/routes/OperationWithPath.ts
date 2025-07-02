import { Operation } from "./Operation";
import { ApiResponseDataType } from "./ResponseTypes";

/** A base operation that needs to have a path specified. */
export abstract class OperationWithPath<R extends ApiResponseDataType> extends Operation<R> {

    public setPath(
        path: string
    ): this {
        this.request.setPath(path);
        return this;
    }

}