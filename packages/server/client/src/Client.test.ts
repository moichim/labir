import { describe, expect, test } from "vitest";
import { Client } from "./Client";

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

        // expect( connection.message ).toHaveProperty("message", "Connection established successfully." );

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

        const request = client.routes.get.info("zihle");

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
        const get = client.routes.get.info( "zihle" );
        
        // Execute the request
        const result = await get.execute();

        // Expect the result to be successfull
        expect(result).toHaveProperty("success", true);
        expect(result.success).toBe( true );

        // Expect the subsequent request rawObject to have PHPSESSID in the headers
        expect( result.raw.request.headers.get("Cookie") ).toBeDefined();
        expect( result.raw.request.headers.get("Cookie") ).toMatch(/PHPSESSID=/);
        expect( result.raw.request.headers.get("Cookie") ).toContain( client.auth.getSession() );


        // Expect the subsequent request to have PHPSESSID in the headers
        expect( result.raw.response.headers.get("set-cookie") ).toMatch(/PHPSESSID=/);
        expect( result.raw.response.headers.get("set-cookie") ).toContain( client.auth.getSession() )

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
        const get = client.routes.get.info( "zihle" );
        
        // Execute the request
        const result = await get.execute();

        // Expect the result to be successfull
        expect(result).toHaveProperty("success", true);
        expect(result.success).toBe( true );

    });

    test( "a simple request to an non-existing folder properly passes down the error", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        // Create a request to the default route
        const get = client.routes.get.info( "non-existing-folder" );

        const result = await get.execute();

        expect( result.raw.response.status ).toBe(200);
        expect( result.success ).toBe( false );

        expect( result.code ).toBe(404);
        expect( result.message ).toMatch(/Folder does not exist/i);

    } );

});