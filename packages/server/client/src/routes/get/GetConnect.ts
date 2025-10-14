import { FolderInfo, Identity } from "../../responseEntities";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type GetConnectDataType = {
    identity: false | Identity,
    userFolders: FolderInfo[]
}

export class GetConnect extends Operation<GetConnectDataType> {

    public init(): this {
        this.request.setMethod("GET");
        this.request.setAction("connect");

        return this;
    }


    public async execute(): Promise<ApiResponseType<GetConnectDataType>> {
        const response = await this.client.fetch<GetConnectDataType>(this.request);

        console.log( "Connection", response, this.client.auth.getSession() );

        if (response.success) {

            // If the identity is not false, login the user
            if (response.data.identity !== false) {
                this.client.auth.login(response.data.identity, response.data.userFolders);
            }

        }

        return response;
    }


}