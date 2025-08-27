import { FolderInfo, Identity } from "../../responseEntities";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type LoginDataType = {
    login: Identity,
    userFolders: FolderInfo[]
}

export class Login extends Operation<LoginDataType> {

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

    public async execute(): Promise<ApiResponseType<LoginDataType>> {

        const response = await this.client.fetch<LoginDataType>(this.request);

        if (response.success ) {

            // Login the user
            this.client.auth.login( response.data.login, response.data.userFolders );

        }


        return response;
    }

}