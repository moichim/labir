import { Client } from "../../Client";
import { PostLogin } from "../post/PostLogin";

export class PostRoutesFactory {

    constructor(
        protected readonly client: Client
    ) { }

    public login(): PostLogin {
        return (new PostLogin(this.client)).init();
    }

}