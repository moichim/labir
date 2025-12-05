import { ReactiveController, ReactiveControllerHost } from "lit";
import { AppWithRender } from "../composition/AppWithRender";
import Client from "@labirthermal/server";
import { Identity, ServerInfo } from "packages/server/client/dist";
import { BaseElement } from "../../hierarchy/BaseElement";

export interface AppWithClientController extends BaseElement {
    /** URL Address of the webserver */
    serverUrl: string;
    /** API root path of the server */
    serverApiRoot: string;
    /** The main client instance */
    apiClient: Client;
}

export class ClientController<T extends AppWithClientController> implements ReactiveController {

    host: T;

    // Internal states

    private _isClientConnected: boolean = false;
    private _isLoggedIn: boolean = false;
    private _isRoot: boolean = false;
    private _identity?: Identity;
    private _serverInfo?: ServerInfo;

    // Public accessors

    public get isClientConnected(): boolean { return this._isClientConnected; }
    public get isLoggedIn(): boolean { return this._isLoggedIn; }
    public get isRoot(): boolean { return this._isRoot; }
    public get identity(): Identity | undefined { return this._identity; }
    public get serverInfo(): ServerInfo | undefined { return this._serverInfo; }

    // Internal setters

    private setIsClientConnected(value: boolean): void {
        if (this._isClientConnected === value) return;
        this._isClientConnected = value;
        this.host.requestUpdate();
    }

    private setIsLoggedIn(value: boolean): void {
        if (this._isLoggedIn === value) return;
        this._isLoggedIn = value;
        this.host.requestUpdate();
    }

    private setIsRoot(value: boolean): void {
        if (this._isRoot === value) return;
        this._isRoot = value;
        this.host.requestUpdate();
    }

    private setIdentity(value: Identity | undefined): void {
        if (this._identity === value) return;
        this._identity = value;
        this.host.requestUpdate();
    }

    private setServerInfo(value: ServerInfo | undefined): void {
        if (this._serverInfo === value) return;
        this._serverInfo = value;
        this.host.requestUpdate();
    }

    /** Unique identificator for the purpose of event listeners */
    private UUID: string;

    constructor(
        host: T
    ) {

        this.host = host;

        this.UUID = this.host.UUID + "__client_controller"

        host.addController(this);

    }

    hostConnected(): void {

        this.host.apiClient.onConnection.set(
            this.UUID,
            async status => {

                // Setup connection state
                this.setIsClientConnected(status !== false);

                // Ulož server info
                this.setServerInfo( status || undefined )

                /** @todo Zde by mělo být přihlašování postaru, ale uděláme to pak přes cookie... */


            }
        );

        this.host.apiClient.auth.onIdentity.set(
            this.UUID,
            identity => {

                if ( identity ) {
                    this.setIdentity(identity);
                    this.setIsLoggedIn(true);
                    this.setIsRoot(identity.meta.is_root);
                } else {
                    this.setIdentity(undefined);
                    this.setIsLoggedIn(false);
                    this.setIsRoot(false);
                }

            }
        );

        this.host.apiClient.connect();

    }

    hostDisconnected(): void {

    }

    hostUpdate(): void {

    }

    hostUpdated(): void {

    }

}