import { Client } from "../Client";
import { RequestFactory } from "../request/RequestFactory";
import { ApiResponseDataType, ApiResponseType } from "./ResponseTypes";

/** A base class for all routes. It is intentionally concieved very universally, because it might happen that one operation would consist of several subsequent requests. */
export abstract class Operation<R extends ApiResponseDataType>  {

    protected readonly request!: RequestFactory;

    constructor(
        protected readonly client: Client
    ) {
        this.request = this.client.createRequest();
    }

    /** In a factory, the operation needs to be initialised before returning. */
    public abstract init(): this;

    /** Perform the operation and all its requests. */
    public abstract execute(): Promise<ApiResponseType<R>>;



}