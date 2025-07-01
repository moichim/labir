import { Client } from "../../Client";
import { PostLogin } from "../post/PostLogin";
import { PostUpdateFolder } from "../post/PostUpdateFolder";

export class PostRoutesFactory {

    constructor(
        protected readonly client: Client
    ) { }

    public login(): PostLogin {
        return (new PostLogin(this.client)).init();
    }

    public updateFolder(): PostUpdateFolder {
        return (new PostUpdateFolder(this.client)).init();
    }

}