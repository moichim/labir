import { Operation } from "../Operation";
import { ApiResponseType } from "../../routes/ResponseTypes";

export type LogoutDataType = object;

export class Logout extends Operation<LogoutDataType> {

    public init(): this {

        this.request.setMethod("POST");
        this.request.setAction("logout");

        return this;
    }

    public async execute(): Promise<ApiResponseType<LogoutDataType>> {
        return await this.client.fetch(this.request);
    }

}