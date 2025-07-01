import { Client } from "../../Client";
import { GetRoutesFactory } from "./GetRoutesFactory";
import { PostRoutesFactory } from "./PostRoutesFactory";

export class Routes {

    /** 
     * All the available GET routed of the API 
     */
    public readonly get: GetRoutesFactory;

    /**
     * All the available POST routes of the API
     */
    public readonly post: PostRoutesFactory;

    constructor(
        protected readonly client: Client
    ) {
        this.get = new GetRoutesFactory(this.client);
        this.post = new PostRoutesFactory(this.client);
    }

}