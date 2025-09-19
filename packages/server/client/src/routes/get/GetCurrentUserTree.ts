import { TreeItem } from "../../responseEntities";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type GetCurrentUserTreeDataType = {
    tree: TreeItem[]
}

/**
 * Get the list of all folders accessible to the currently logged in user.
 */
export class GetCurrentUserTree extends Operation<GetCurrentUserTreeDataType> {

    public init(): this {
        this.request.setMethod( "GET" );
        this.request.setAction( "currentusertree" );
        return this;
    }

    public execute(): Promise<ApiResponseType<GetCurrentUserTreeDataType>> {
        const response = this.client.fetch<GetCurrentUserTreeDataType>(this.request);
        return response;
    }

    

}