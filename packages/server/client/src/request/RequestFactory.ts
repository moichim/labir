import { RequestOptions } from "https";
import { Client } from "../Client";

type AvailableMethod = "GET" | "POST";

export class RequestFactory {

    protected path?: string = undefined;
    protected method: AvailableMethod = "GET";
    protected action?: string = undefined;
    protected query: Map<string, string> = new Map<string, string>();
    protected body: { [key: string]: any } = {};
    protected headers: { [key: string]: string } = {};


    constructor(
        protected readonly client: Client
    ) {

    }

    public setPath(
        value: string
    ): RequestFactory {
        this.path = value;
        return this;
    }

    public setMethod(
        value: AvailableMethod
    ): RequestFactory {
        this.method = value;
        return this;
    }

    public setAction(
        value: string
    ): RequestFactory {
        this.action = value;
        return this;
    }

    public addQueryParameter(
        key: string,
        value: string
    ): RequestFactory {
        this.query.set(key, value);
        return this;
    }

    public addBodyParameter(
        key: string,
        value: any
    ): RequestFactory {
        this.body[key] = value;
        return this;
    }

    public addHeader(
        key: string,
        value: string
    ): RequestFactory {
        this.headers[key] = value;
        return this;
    }

    public createRequest(): Request|false {


        const isValidRequestToRoot = ["connect", "login"].includes( this.action || "" )

        if ( 
            this.path === undefined 
            && ! isValidRequestToRoot
         ) {
            return false;
        }

        let address = this.client.getServerUrl();

        if ( ! isValidRequestToRoot ) {
            address += this.path;
        }

        const queryString: {[key: string]:string} = {};

        // Append the action if it is set
        if ( this.action !== undefined ) {
            queryString["action"] = this.action;
        }

        // Append the query parameters if any
        if ( this.query.size > 0 ) {
            this.query.forEach( (value, key) => {
                queryString[key] = value;
            });
        }

        // Create the URL with query parameters
        if ( Object.keys( queryString ).length > 0) {

            address += "?";
            address += new URLSearchParams(queryString).toString();

        }

        const url = new URL( address );

        // Always use a plain object for headers to allow property assignment
        const headers: Record<string, string> = { 
            ...this.headers,
            "Content-Type": "application/json",
        };

        // Set the PHP session ID if available
        const session = this.client.auth.getSession();
        if ( session ) {
            headers["Cookie"] = session;
        }

        // Add credentials and session if any
        if ( this.client.auth.isLoggedIn() ) {
            // Ensure headers is a plain object
            headers["Authorization"] = this.client.auth.getAuthorisationHeader() || "";
        }

        const options: RequestInit = {
            method: this.method,
            headers: headers,
            credentials: "include", // Include credentials for cross-origin requests
        };

        // Assign the body only for post requests
        if ( this.method === "POST" && Object.keys(this.body).length > 0 ) {
    
            options.body = JSON.stringify(this.body);

        }

        const request = new Request( 
            url,
            options
        );

        return request;

    }

    public getAction(): string|undefined {
        return this.action;
    }


}