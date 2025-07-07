import { Client } from "../../Client";
import { PostCreateFolder } from "../post/PostCreateFolder";
import { PostLogin } from "../post/PostLogin";
import { PostMoveFolder } from "../post/PostMoveFolder";
import { PostUpdateFolder } from "../post/PostUpdateFolder";
import { UploadFile } from "../post/UploadFile";

export class PostRoutesFactory {

    constructor(
        protected readonly client: Client
    ) { }

    public login(
        login: string,
        password: string
    ): PostLogin {
        return (new PostLogin(this.client))
            .init()
            .setUser(login)
            .setPassword(password);
    }

    public createFolder(
        /** An obligatory path of the folder in which the new Folder shall be created */
        targetPath: string,
        /** Name of the new folder - will be webalised for the real folder name in the file system */
        newFolderName: string
    ): PostCreateFolder {
        return (new PostCreateFolder(this.client))
            .init()
            .setName(newFolderName)
            .setPath(targetPath);
    }

    public updateFolder(
        path: string
    ): PostUpdateFolder {
        return (new PostUpdateFolder(this.client))
            .init()
            .setPath( path );
    }

    public moveFolder(
        folderPath: string,
        target: string
    ): PostMoveFolder {
        return (new PostMoveFolder(this.client))
            .init()
            .setPath( folderPath )
            .setTarget( target );
    }

    public uploadFile(
        folderPath: string,
        file: File
    ): UploadFile {
        return (new UploadFile(this.client))
            .init()
            .setPath( folderPath )
            .setLrc( file );
    }

}