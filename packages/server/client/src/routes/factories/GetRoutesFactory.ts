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
    
    /**
     * Connects to a server, eventually returning the existing identity of the currently logged-in user.
     * - if you want to load existing user identity, you need to pass the PHPSESSID to the client before calling this method using `auth.setSession()`.
     */
    public connect(): GetConnect {
        return (new GetConnect(this.client)).init();
    }

    /**
     * Get information about a folder.
     * @param path Path of the folder.
     * @returns 
     */
    public info(
        path: string
    ): GetDefault {
        return (new GetDefault(this.client))
            .init()
            .setPath(path);
    }

    /**
     * List of files in the given folder.
     * @param path Path to the folder from which you want to get the files
     */
    public files(
        path: string
    ): GetFiles {
        return (new GetFiles(this.client))
            .init()
            .setPath( path );
    }

    /**
     * Generate the grid from subfolders inside the given directory.
     * @param path Path to the folder from which you want the grid to be generated
     */
    public grid(
        path: string
    ): GetGrid {
        return (new GetGrid(this.client))
            .init()
            .setPath( path );
    }

    /**
     * Fetch full information about a file.
     * @param path Path to the folder where the file is located
     * @param filename Name of the LRC file
     */
    public file(
        path: string,
        filename: string
    ): GetFile {
        return (new GetFile(this.client))
            .init()
            .setPath( path )
            .setFileName( filename );
    }

    public currentUserTree(): GetCurrentUserTree {
        return (new GetCurrentUserTree(this.client)).init();
    }

}