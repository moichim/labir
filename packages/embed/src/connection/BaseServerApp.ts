import { provide } from "@lit/context";
import { BaseAppWithPngExportContext } from "../utils/converters/pngExportContext";
import Client from "@labir/server";
import { clientContext } from "./ClientContext";
import { property } from "lit/decorators.js";

export abstract class BaseServerApp extends BaseAppWithPngExportContext {

    /**
     * URL serveru pro připojení klienta
     */
    @property({ type: String, attribute: "server-url" })
    public serverUrl!: string;

    @provide({context: clientContext})
    protected client!: Client;

    /**
     * Inicializace klienta při připojení komponenty
     */
    connectedCallback(): void {
        super.connectedCallback();
        this.initializeClient();
    }

    /**
     * Vytvoří novou instanci klienta
     */
    protected initializeClient(): void {
        if (!this.serverUrl || this.serverUrl.trim() === '') {
            throw new Error("Server URL is required. Please set the 'server-url' attribute.");
        }
        
        this.client = new Client(this.serverUrl);
        this.log("Client initialized with server URL:", this.serverUrl);

        this.client.connect().then( () => this.log( this.client ) );
    }

}