import { Client } from "../../Client";
import { CreateFolder } from "../post/CreateFolder";
import { Login } from "../post/Login";
import { MoveFolder } from "../post/MoveFolder";
import { UpdateFolder } from "../post/UpdateFolder";
import { UploadFile } from "../post/UploadFile";

export class PostRoutesFactory {

    constructor(
        protected readonly client: Client
    ) { }

    public login(
        login: string,
        password: string
    ): Login {
        return (new Login(this.client))
            .init()
            .setUser(login)
            .setPassword(password);
    }

    public createFolder(
        /** An obligatory path of the folder in which the new Folder shall be created */
        targetPath: string,
        /** Name of the new folder - will be webalised for the real folder name in the file system */
        newFolderName: string
    ): CreateFolder {
        return (new CreateFolder(this.client))
            .init()
            .setName(newFolderName)
            .setPath(targetPath);
    }

    public updateFolder(
        path: string
    ): UpdateFolder {
        return (new UpdateFolder(this.client))
            .init()
            .setPath( path );
    }

    public moveFolder(
        folderPath: string,
        target: string
    ): MoveFolder {
        return (new MoveFolder(this.client))
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