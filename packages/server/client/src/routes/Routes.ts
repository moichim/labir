import { Client } from "../Client";
import { GetConnect } from "./get/GetConnect";
import { GetDefault } from "./get/GetDefault";
import { GetFiles } from "./get/GetFiles";
import { PostLogin } from "./post/PostLogin";

export class Routes {

    constructor(
        protected readonly client: Client
    ) {}

    public GetConnect(): GetConnect {
        return ( new GetConnect(this.client) ).init();
    }

    public GetDefault(): GetDefault {
        return ( new GetDefault(this.client) ).init();
    }

    public GetFiles(): GetFiles {
        return ( new GetFiles(this.client) ).init();
    }

    public PostLogin(): PostLogin {
        return ( new PostLogin(this.client) ).init();
    }

}