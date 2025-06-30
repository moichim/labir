import { Client } from "../Client";
import { GetConnect } from "./get/GetConnect";
import { GetDefault } from "./get/GetDefault";
import { PostLogin } from "./post/PostLogin";

export class Routes {

    constructor(
        protected readonly client: Client
    ) {}


    public GetDefault(): GetDefault {
        return ( new GetDefault(this.client) ).init();
    }

    public GetConnect(): GetConnect {
        return ( new GetConnect(this.client) ).init();
    }

    public PostLogin(): PostLogin {
        return ( new PostLogin(this.client) ).init();
    }

}