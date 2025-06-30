import { RequestFactory } from "../../request/RequestFactory";
import { Identity } from "../../types";
import { Operation } from "../Operation";
import { ApiResponseSuccess, ApiResponseType } from "../ResponseTypes";

export type PostLoginData = {
    login: Identity
}

export class PostLogin extends Operation<PostLoginData> {

    protected request!: RequestFactory;

    public init(): this {
        this.request = this.client.createRequest();
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

    public async execute(): Promise<ApiResponseType<PostLoginData>> {

        const response = await this.client.fetch<PostLoginData>(this.request);

        if (response.success ) {

            // Retype the response
            const typedResponse = response as ApiResponseSuccess<PostLoginData>;

            // Login the user
            this.client.auth.login( typedResponse.data.login );

        }


        return response;
    }

}