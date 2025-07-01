import { Auth } from "./authentication/Auth";
import { RequestFactory } from "./request/RequestFactory";
import { GetConnectDataType } from "./routes/get/GetConnect";
import { ApiResponseDataType, ApiResponseType } from "./routes/ResponseTypes";
import { Routes } from "./routes/factories/Routes";

/**
 * The client for accessing a remote LabIR server.
 * - needs to call the asynchronouse method `connect()` method before any other request
 * - if `auth.setSession()` is called before connection, the session ID shall be passed to the connected server. In case there is a logged-in user in the given session its credentials will be sent back and the user will be logged in automatically right after the connection.
 * - otherwise, a standard login request needs to be performed via the `routes.post.login()`
 */
export class Client {

    /** 
     * The core server URL ending with a slash */
    protected serverUrl: string;

    /**
     * The authentication service stores the session ID and also the identity of the currently logged in user.
     * - The authentication itself is provided by the operation `PostLogin` which is accessible through the `routes.post.login()` method.
     */
    public readonly auth: Auth;

    /**
     * The factories for creating requests to the API.
     */
    public readonly routes: Routes;

    /**
     * Needs to be set to `true` before any requests are made (with the exception of the `connect()` route).
     */
    protected connected: boolean = false;

    constructor(
        serverUrl: string
    ) {

        this.serverUrl = serverUrl.trim();
        if (!this.serverUrl.endsWith("/")) {
            this.serverUrl += "/";
        }

        this.auth = new Auth( this );
        this.routes = new Routes( this );

    }

    /** 
     * Tests the availability of the server, establishes the connection and stores the following data crucial for all subsequent requests:
     * - PHPSESSID is stored in `Auth.setSesson()` 
     * - if a logged-in user was found on the session, its credentials will be stored in `Auth.login()`
     */
    public async connect(): Promise<ApiResponseType<GetConnectDataType>> {

        // If already connected, throw an error
        if ( this.connected ) {
            throw new Error("Client is already connected.");
        }

        // Perform the connection request
        const request = this.routes.get.connect();
        const response = await request.execute();

        // Mark self as connected if the response was successful
        if ( response.success === true ) {
            this.connected = true;
        }

        return response;

    }

    /** 
     * Was this `Client` already connected using `Client.connect()`? 
     */
    public isConnected(): boolean {
        return this.connected;
    }

    /**
     * Creates a new RequestFactory instance
     * - do not use this method directly, use the `routes` property instead
     */
    public createRequest(): RequestFactory {
        return new RequestFactory(this);
    }

    /**
     * @returns The server URL with a trailing slash
     */
    public getServerUrl(): string {
        return this.serverUrl;
    }


    /** 
     * Automatically process every incoming response. 
     * - store the session ID in Auth class
     */
    protected processResponse(
        response: Response
    ): void {

        const setCookie = response.headers.get("set-cookie") || "";
        const match = setCookie.match(/PHPSESSID=([^;]+)/);
        this.auth.setSession(match ? match[0] : undefined);

    }


    /** 
     * Processes a request factory created using `routes` 
     * 
     * All request factories need to be executed this way because there are necessary checks & processes upon every request:
     * - request is refused until the client is connected
     * - handling of unavailable server errors
     * - storage of the PHPSESSID in the `Auth` class
     * 
     * @todo implement emission of events using the `EventEmitter` class
     * @param factory The request factory to execute
     */
    public async fetch<R extends ApiResponseDataType>(
        factory: RequestFactory
    ): Promise<ApiResponseType<R>> {

        if ( factory.getAction() !== "connect" && this.connected === false ) {
            throw new Error("Client is not connected to the server!");

        }

        const request = factory.createRequest();
        if ( !request ) {
            throw new Error("Invalid request configuration");
        }

        let response: Response;
        try {
            response = await fetch( request );
        } catch (error) {
            throw new Error("Server is not available or network error occurred.");
        }

        // Process the response
        this.processResponse( response );

        const json = await response.json();

        json.raw = {
            request: request,
            response: response
        }

        // If the response failed completely, throw an error
        if ( !response.ok ) {
            throw new Error( "Request was not successfull at all!" );
        }

        return json as ApiResponseType<R>;

    }

}