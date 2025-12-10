import Client from "@labirthermal/server";
import { property, state } from "lit/decorators.js";
import { BaseAppWithPngExportContext } from "../../../utils/converters/pngExportContext";
import { AppWithClientController, ClientController } from "../ClientController";
import { AppWithContentController, ContentController } from "../ContentController";
import { provide } from "@lit/context";
import { ControlledClientContext, ControlledContentContext } from "../controllerContexts";

export abstract class ConnectedAppBase extends BaseAppWithPngExportContext implements AppWithClientController, AppWithContentController<ConnectedAppBase> {

    /** The reactive reactive controller for the client connection */
    @provide({context: ControlledClientContext})
    public readonly client = new ClientController<ConnectedAppBase>( this );

    /** The reactive controller for contents */
    @provide({context: ControlledContentContext})
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
        attribute: "auth-url",
    })
    authUrl?: string | undefined;

    @property({
        type: String,
        attribute: "auth-token",
    })
    authToken?: string | undefined;

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

    connectedCallback(): void {
        
        if ( this.serverUrl === undefined || this.serverUrl.length === 0 ) {
            throw new Error("The 'server-url' attribute is required but was not provided.");
        }

        this.apiClient = new Client(
            this.serverUrl,
            this.serverApiRoot
        );

        super.connectedCallback();

        this.client.onReadyForContentRequests.add( this.UUID, () => {
            this.log( "Teď bych měl dostat prvnotní obsah asi" );
            this.content.fetchAllContentByState(
                this.folderPath!
            )
        } );

    }


}