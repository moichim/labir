import { Auth } from "./authentication/Auth";
import { RequestFactory } from "./request/RequestFactory";
import { GetConnectDataType } from "./routes/get/GetConnect";
import { ApiResponseDataType, ApiResponseError, ApiResponseSuccess, ApiResponseType } from "./routes/ResponseTypes";
import { Routes } from "./routes/Routes";

export class Client {

    /** 
     * The core server URL ending with a slash */
    protected serverUrl: string;

    public readonly auth: Auth;
    public readonly routes: Routes;

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
     * Testuje připojení k serveru 
     */
    public async connect(): Promise<ApiResponseType<GetConnectDataType>> {

        // If already connected, throw an error
        if ( this.connected ) {
            throw new Error("Client is already connected.");
        }

        // Perform the connection request
        const request = this.routes.GetConnect();
        const response = await request.execute();

        // Mark self as connected if the response was successful
        if ( response.success === true ) {
            this.connected = true;
        }

        return response;

    }

    public isConnected(): boolean {
        return this.connected;
    }

    /**
     * Creates a new RequestFactory instance
     */
    public createRequest(): RequestFactory {
        return new RequestFactory(this);
    }

    /**
     * 
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

        json.request = request;
        json.response = response;

        // If the response failed completely, throw an error
        if ( !response.ok ) {
            throw new Error( "Request was not successfull at all!" );
        }

        // If the response came, but was not successfull, return error
        if ( !json.success ) {
            return json as ApiResponseError;
        }

        return json as ApiResponseSuccess<R>;

    }

}