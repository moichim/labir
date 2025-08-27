import Client from "@labir/server";
import { provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import { clientContext } from "../ClientContext";
import { AppWithState } from "./AppWithState";


/**
 * This layer handles the client & connection and the related context logic.
 */
export abstract class AppWithClientProvider extends AppWithState {

    @property({ type: String, reflect: true, attribute: "path" })
    public path!: string;
    protected originalPath!: string;

    @property({ type: String, reflect: true, attribute: "server-url" })
    public serverUrl!: string;

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

    private async initializeClient(): Promise<void> {

        this.setStateLoading(
            "Připojuji se k serveru."
        );

        // Clear the error message
        this.clearError();

        // Create the client
        this.client = new Client(this.serverUrl);

        // Listen to connection events
        this.client.onConnection.set(this.UUID + "__app_with_client", status => {
            this.isClientConnected = status !== false;
            this.requestUpdate();
            this.log("Client connection status changed:", status);
        });

        // Perform the connection
        const response = await this.client.connect();

        this.log( response );

    }


}