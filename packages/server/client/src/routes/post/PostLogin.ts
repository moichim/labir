import { RequestFactory } from "../../request/RequestFactory";
import { Identity } from "../../responseEntities";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type PostLoginDataType = {
    login: Identity
}

export class PostLogin extends Operation<PostLoginDataType> {

    public init(): this {
        this.request.setMethod( "POST" );
        this.request.setAction( "login" );
        return this;
    }

    public setUser(
        user: string
    ): this {
        this.request.addBodyParameter("user", user);
        return this;
    }

    public setPassword(
        password: string
    ): this {
        this.request.addBodyParameter("password", password);
        return this;
    }

    public async execute(): Promise<ApiResponseType<PostLoginDataType>> {

        const response = await this.client.fetch<PostLoginDataType>(this.request);

        if (response.success ) {

            // Retype the response
            const typedResponse = response;

            // Login the user
            this.client.auth.login( typedResponse.data.login );

        }


        return response;
    }

}