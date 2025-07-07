import { Client } from "../../Client";
import { GetConnect } from "../get/GetConnect";
import { GetCurrentUserTree } from "../get/GetCurrentUserTree";
import { GetDefault } from "../get/GetDefault";
import { GetFile } from "../get/GetFile";
import { GetFiles } from "../get/GetFiles";
import { GetGrid } from "../get/GetGrid";

/**
 * Factory for creating GET routes
 */
export class GetRoutesFactory {

    constructor(
        protected readonly client: Client
    ) { }
    
    public connect(): GetConnect {
        return (new GetConnect(this.client)).init();
    }

    public default(
        path: string
    ): GetDefault {
        return (new GetDefault(this.client))
            .init()
            .setPath(path);
    }

    public files(): GetFiles {
        return (new GetFiles(this.client)).init();
    }

    public grid(): GetGrid {
        return (new GetGrid(this.client)).init();
    }

    public file(): GetFile {
        return (new GetFile(this.client)).init();
    }

    public currentUserTree(): GetCurrentUserTree {
        return (new GetCurrentUserTree(this.client)).init();
    }

}