import { RequestFactory } from "../../request/RequestFactory";
import { FolderInfo, Identity } from "../../types";
import { Operation } from "../Operation";
import { ApiResponseError, ApiResponseSuccess, ApiResponseType } from "../ResponseTypes";

export type GetConnectDataType = {
    message: string,
    identity: false | Identity
}

export class GetConnect extends Operation<GetConnectDataType> {

    protected request!: RequestFactory;

    public init(): this {
        this.request = this.client.createRequest();
        this.request.setMethod( "GET" );
        this.request.setAction( "connect" );
        return this;
    }


    public async execute(): Promise<ApiResponseType<GetConnectDataType>> {
        const response = await this.client.fetch<GetConnectDataType>(this.request);

        if ( response.success ) {

            // If the connection was successful, set the identity in the auth module
            const typedResponse = response as ApiResponseSuccess<GetConnectDataType>;

            // If the identity is not false, login the user
            if ( typedResponse.data.identity !== false ) {
                this.client.auth.login( typedResponse.data.identity );
            }

        }

        return response;
    }


}