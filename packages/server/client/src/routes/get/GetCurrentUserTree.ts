import { RequestFactory } from "../../request/RequestFactory";
import { TreeItem } from "../../types";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type GetCurrentUserTreeDataType = {
    tree: TreeItem[]
}

/**
 * Get the list of all folders accessible to the currently logged in user.
 */
export class GetCurrentUserTree extends Operation<GetCurrentUserTreeDataType> {

    protected request!: RequestFactory;

    public init(): this {
        this.request = this.client.createRequest();
        this.request.setMethod( "GET" );
        this.request.setAction( "currentusertree" );
        return this;
    }

    public execute(): Promise<ApiResponseType<GetCurrentUserTreeDataType>> {
        const response = this.client.fetch<GetCurrentUserTreeDataType>(this.request);
        return response;
    }

    

}