import { describe, expect, test } from "vitest";
import { Client } from "../src/Client";
import { ApiResponseError, ApiResponseSuccess } from "../src/routes/ResponseTypes";
import { GetConnect, GetConnectDataType } from "../src/routes/get/GetConnect";

describe("Client", () => {

    test( "serverUrl ends with /", () => {

        const client = new Client("http://localhost:8080");

        expect( client.getServerUrl() ).toBe( "http://localhost:8080/" );

    } );

    test( "connection to an existing server", async () => {

        const client = new Client("http://localhost:8080");

        // Before connection, the server should not be connecting
        expect( client.isConnected() ).toBe( false );

        // Connect to the server
        const connection = await client.connect();

        // Expect a successfull message
        expect( connection.success ).toBe( true );        
        expect( connection ).toHaveProperty( "data" );

        const connectionTypes = connection as ApiResponseSuccess<GetConnectDataType>;

        expect( connectionTypes.data ).toHaveProperty("message", "Connection established successfully." );

        // Check if the client is connected
        expect( client.isConnected() ).toBe( true );

    } );

    test( "connection to a non existing server should fail", async () => {

        const client = new Client("http://localhost:9999");

        // Before connection, the server should not be connecting
        expect( client.isConnected() ).toBe( false );

        // Try to connect to the server
        await expect( client.connect() ).rejects.toThrowError( /server is not available|network error/i );

        // Check if the client is still not connected
        expect( client.isConnected() ).toBe( false );

    } );

    test( "fetchning from client that is not connected already should fail", async () => {

        const client = new Client("http://localhost:8080");

        // Before connection, the server should not be connecting
        expect( client.isConnected() ).toBe( false );

        const request = client.routes.GetDefault();
        request.setPath( "zihle" );

        await expect( request.execute() ).rejects.toThrowError( "Client is not connected to the server!" );

        // Check if the client is still not connected
        expect( client.isConnected() ).toBe( false );

    } );

    test( "once the client is connected, PHPSESSID should be present in all headers", async () => {

        const client = new Client("http://localhost:8080");

        // Before connection, the PHPSESSID should be undefined
        expect( client.auth.getSession() ).toBeUndefined();

        // Connect to the server
        await client.connect();

        // After connection, the PHPSESSID should be set
        expect( client.auth.getSession() ).toBeDefined();

        // Create a request to the default route
        const get = client.routes.GetDefault();

        // Configure the request
        get.setPath("zihle");
        
        // Execute the request
        const result = await get.execute();

        // Expect the result to be successfull
        expect(result).toHaveProperty("success", true);
        expect(result.success).toBe( true );

        // Expect the subsequent request rawObject to have PHPSESSID in the headers
        expect( result.request.headers.get("Cookie") ).toBeDefined();
        expect( result.request.headers.get("Cookie") ).toMatch(/PHPSESSID=/);
        expect( result.request.headers.get("Cookie") ).toContain( client.auth.getSession() );


        // Expect the subsequent request to have PHPSESSID in the headers
        expect( result.response.headers.get("set-cookie") ).toMatch(/PHPSESSID=/);
        expect( result.response.headers.get("set-cookie") ).toContain( client.auth.getSession() )

    } );

    test( "once the client is connected, the connection method is able to send the token by its sessionid", async () => {

        const client1 = new Client("http://localhost:8080");
        await client1.connect();

        expect( client1.auth.getSession() ).toBeDefined();
        expect( client1.isConnected() ).toBe( true );

        const client2 = new Client("http://localhost:8080");

        // Set the session from the first client
        client2.auth.setSession( client1.auth.getSession() );
        
        // Now connect the second client
        const connection = await client2.connect();

        expect( client1.auth.getSession() ).toEqual( client2.auth.getSession() );


    } );


    test("a simple successfull request to an existing folder", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        // Create a request to the default route
        const get = client.routes.GetDefault();

        // Configure the request
        get.setPath("zihle");
        const result = await get.execute();

        // Expect the result to be successfull
        expect(result).toHaveProperty("success", true);
        expect(result.success).toBe( true );

    });

    test( "a simple request to an non-existing folder properly passes down the error", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        // Create a request to the default route
        const get = client.routes.GetDefault();

        // Configure the request
        get.setPath("non-existing-folder");

        const result = await get.execute();

        expect( result.response.status ).toBe(200);
        expect( result.success ).toBe( false );

        const typedResult = result as ApiResponseError;

        expect( typedResult.code ).toBe(404);
        expect( typedResult.error ).toMatch(/Folder does not exist/i);

    } );

});