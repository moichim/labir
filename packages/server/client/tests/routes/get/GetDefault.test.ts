import { describe, expect, test } from "vitest";
import Client from "../../../src";
import { GetDefaultDataType } from "../../../src/routes/get/GetDefault";
import { PostLoginData } from "../../../src/routes/post/PostLogin";


describe( "GetDefault", () => {

    test( "should be able to read from public folders as unauthenticated", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetDefault();
        request.setPath( "access/accessible/accessible" );

        const response = await request.execute();

        expect( response.success ).toBe( true );

        // Check if the response has the folder and subfolders
        expect( response.data ).toHaveProperty("folder");
        expect( response.data ).toHaveProperty("subfolders");

        // Check if the folder is the public folder
        expect( response.data!.folder.name ).toBe( "Jméno složky" );

    } );

    test( "should not be able to read from protected folders as unauthenticated", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetDefault();
        request.setPath( "access/accessible/restricted" );

        const response = await request.execute();

        expect( response.success ).toBe( false );

        expect( response.code ).toBe( 401 );

    } );


    test( "should be able to see a protected folder once logged in with proper access", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();


        // Try to access the protected folder before logging in
        const failed_request = client.routes.GetDefault();
        failed_request.setPath( "access/restricted_to_guest" );

        const failed_response = await failed_request.execute();

        expect( failed_response.success ).toBe( false );;

        expect( failed_response ).toHaveProperty("code");
        expect( failed_response ).toHaveProperty("message");




        // Login as guest
        const login = client.routes.PostLogin();
        login.setUser("guest");
        login.setPassword("querty");

        const loginResponse = await login.execute();

        expect( loginResponse.success ).toBe( true );

        expect( loginResponse.data!.login ).toBe( client.auth.getIdentity() );

        // Now try to access the protected folder when we are logged in
        const request = client.routes.GetDefault();
        request.setPath( "access/restricted_to_guest" );

        const response = await request.execute();

        expect( response.success ).toBe( true );

        // Check if the response has the folder and subfolders
        expect( response.data ).toHaveProperty("folder");
        expect( response.data ).toHaveProperty("subfolders");

    } );

} );