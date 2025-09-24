import Client from "@labir/server";
import { provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import { clientContext } from "../ClientContext";
import { AppWithState } from "./AppWithState";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { Ref } from "lit/directives/ref.js";


/**
 * This layer handles the client & connection and the related context logic.
 */
export abstract class AppWithClientProvider extends AppWithState {

    @state()
    protected abstract registryElement: Ref<RegistryProviderElement>;

    @property({ type: String, reflect: true, attribute: "folder-path" })
    public path?: string;
    protected originalPath?: string;

    @property({type: String, attribute: "file-name"})
    public fileName?: string;

    @property({ type: String, reflect: true, attribute: "server-url" })
    public serverUrl!: string;

    @property({ type: String, attribute: "server-api-root" })
    public serverApiRoot!: string;

    @provide({ context: clientContext })
    protected client!: Client;

    @state()
    protected isClientConnected: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();

        // Store the origina path for further reuse
        this.originalPath = this.path;

        // Check the necessary attributes
        if (!this.serverUrl) {
            this.setError("Server URL is not set in the 'server-url' attribute.");
            return;
        }

        this.initializeClient();

    }

    private UUIDClient: string = this.UUID + "__app_with_client";

    private async initializeClient(): Promise<void> {

        this.setStateLoading(
            "Připojuji se k serveru."
        );

        // Clear the error message
        this.clearError();

        // Create the client
        this.client = new Client(this.serverUrl, this.serverApiRoot);

        // Listen to connection events
        this.client.onConnection.set(this.UUIDClient, status => {
            this.isClientConnected = status !== false;
            this.requestUpdate();
        });

        // Perform the connection
        await this.client.connect();

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.client.onConnection.delete(this.UUIDClient);

    }


}