import { Client } from "../Client";
import { ApiResponseDataType, ApiResponseError, ApiResponseSuccess, ApiResponseType } from "./ResponseTypes";

export abstract class Operation<R extends ApiResponseDataType>  {

    constructor(
        protected readonly client: Client
    ) {}

    public abstract init(): this;

    public abstract execute(): Promise<ApiResponseType<R>>;



}