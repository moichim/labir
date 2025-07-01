import { RequestFactory } from "../../request/RequestFactory";
import { Identity } from "../../types";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type GetConnectDataType = {
    identity: false | Identity
}

export class GetConnect extends Operation<GetConnectDataType> {

    protected request!: RequestFactory;

    public init(): this {
        this.request = this.client.createRequest();
        this.request.setMethod("GET");
        this.request.setAction("connect");
        return this;
    }


    public async execute(): Promise<ApiResponseType<GetConnectDataType>> {
        const response = await this.client.fetch<GetConnectDataType>(this.request);

        if (response.success) {

            // If the connection was successful, set the identity in the auth module
            const typedResponse = response;

            // If the identity is not false, login the user
            if (typedResponse.data.identity !== false) {
                this.client.auth.login(typedResponse.data.identity);
            }

        }

        return response;
    }


}