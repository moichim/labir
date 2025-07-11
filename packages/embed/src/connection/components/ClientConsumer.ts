import { consume } from "@lit/context";
import { Client } from "packages/server/client/src/Client";
import { clientContext } from "../ClientContext";
import { BaseElement } from "../../hierarchy/BaseElement";
import { state } from "lit/decorators.js";
import { Identity, ServerInfo } from "@labir/server";

export abstract class ClientConsumer extends BaseElement {

    @consume({ context: clientContext, subscribe: true })
    protected client?: Client;

    // Mark isConnecting as deprecated
    /** @deprecated ATTENTION! This is a webcomponents property. To address the Client connecting state, use `isClientConnected` */
    declare isConnected: boolean;


    // Internal state properties

    @state()
    private _isClientConnecting: boolean = true;

    @state()
    private _isClientConnected: boolean = false;

    @state()
    private _isClientLoading: boolean = false;

    @state()
    private _identity?: Identity;

    @state()
    private _serverInfo?: ServerInfo;

    


    // Public accessors (these properties should never be manipulated from the outside)


    /** Reflects the connecting state. Listening happens in ClientConsumer class. */
    public get isClientConnecting(): boolean {
        return this._isClientConnecting;
    }


    /** Reflects the current connection state. Listening happens in ClientConsumer class. */
    public get isClientConnected(): boolean {
        return this._isClientConnected;
    }


    /** Dynamic accessor from ClientConsumer. If there is no identity, the user is not logged in. Listening happens in ClientConsumer */
    protected get isLoggedIn(): boolean {
        return this._identity !== undefined;
    }
    

    /** Reflects current loading state of the Client. Listening happens in ClientConsumer. */
    protected get isClientLoading(): boolean {
        return this._isClientLoading;
    }


    /** Reflects the current identity. Listening happens in ClientConsumer class. */
    protected get identity(): Identity | undefined {
        return this._identity;
    }


    /** Reflects the current server information */
    protected get serverInfo(): ServerInfo | undefined {
        return this._serverInfo;
    }



    /** Internal ID for listeners of ClientConsumer */
    private UUID_INTERNAL = this.UUID + "__consumer_internal";


    connectedCallback(): void {
        super.connectedCallback();

        if (this.client) {

            // Set default values from the actual state of the client
            
            this._isClientConnected = this.client.isConnected();

            this._identity = this.client.auth.getIdentity();

            this._isClientLoading = this.client?.loading ?? true;

            this._serverInfo = this.client.serverInfo;

            // Register connection listener
            this.client.onConnection.set(this.UUID_INTERNAL, (status) => {
                this._isClientConnected = status !== undefined;
                
                this._isClientConnecting = false;
                console.log( status );
                this._serverInfo = status !== false
                    ? status
                    : undefined;

                this.requestUpdate();
            });

            // Register identity listener
            this.client.auth.onIdentity.set(this.UUID_INTERNAL, (identity) => {
                this._identity = identity;
                this.requestUpdate();
            });

            // Register loading state listener
            this.client.onLoading.set(this.UUID_INTERNAL, (isLoading) => {
                this._isClientLoading = isLoading;
                this.requestUpdate();
            });


        } else {
            console.warn("ClientConsumer: client context is not provided.");
        }

    }

    disconnectedCallback(): void {

        super.disconnectedCallback();

        // Unregister listeners to avoid memory leaks

        // Connection
        this.client?.onConnection.delete(this.UUID_INTERNAL);

        // Identity
        this.client?.auth.onIdentity.delete(this.UUID_INTERNAL);

        // Loading
        this.client?.onLoading.delete(this.UUID_INTERNAL);
    }

}