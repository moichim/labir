import Client from "@labirthermal/server";
import { property, state } from "lit/decorators";
import { BaseAppWithPngExportContext } from "../../utils/converters/pngExportContext";
import { AppWithClientController, ClientController } from "./ClientController";
import { AppWithContentController, ContentController } from "./ContentController";

export abstract class ConnectedAppBase extends BaseAppWithPngExportContext implements AppWithClientController, AppWithContentController<ConnectedAppBase> {

    /** The reactive reactive controller for the client connection */
    public readonly client = new ClientController<ConnectedAppBase>( this );

    public readonly content = new ContentController<ConnectedAppBase>( this );
    
    @property({ 
        type: String, 
        reflect: true, 
        attribute: "server-url" 
    })
    serverUrl!: string;

    @property({ 
        type: String, 
        attribute: "server-api-root" 
    })
    serverApiRoot!: string;

    @state()
    apiClient!: Client;

    @property({ 
        type: String, 
        reflect: true, 
        attribute: "folder-path" 
    })
    public folderPath?: string | undefined;

    @property({ 
        type: String, 
        attribute: "file-name",
        reflect: true
    })
    public fileName?: string | undefined;


}