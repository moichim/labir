import { describe, expect, test } from "vitest";
import Client from "../../../src";
import { ApiResponseSuccess } from "../../../src/routes/ResponseTypes";
import { PostLoginData } from "../../../src/routes/post/PostLogin";

describe( "PostLogin", () => {

    test( "should be able to login as guest", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const login = client.routes.PostLogin();
        login.setUser("guest");
        login.setPassword("querty");

        const response = await login.execute();

        expect( response.success ).toBe( true );

        const typedResponse = response as ApiResponseSuccess<PostLoginData>;
        expect( typedResponse.data ).toHaveProperty("login");

        expect( typedResponse.data.login ).toBe( client.auth.getIdentity() );

    } );

    test( "should be able to login as root", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const login = client.routes.PostLogin();
        login.setUser("root");
        login.setPassword("abcdefghijk");

        const response = await login.execute();

        expect( response.success ).toBe( true );

        const typedResponse = response as ApiResponseSuccess<PostLoginData>;
        expect( typedResponse.data ).toHaveProperty("login");

        expect( typedResponse.data.login ).toBe( client.auth.getIdentity() );

    } );

    test( "should be able to login as František Dobrota", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        expect( client.auth.isLoggedIn() ).toBe( false );

        const login = client.routes.PostLogin();
        login.setUser("František Dobrota");
        login.setPassword("abcdefghijk");

        const response = await login.execute();

        expect( response.success ).toBe( true );

        expect( client.auth.isLoggedIn() ).toBe( true );

        const typedResponse = response as ApiResponseSuccess<PostLoginData>;
        expect( typedResponse.data ).toHaveProperty("login");

        expect( typedResponse.data.login ).toBe( client.auth.getIdentity() );

    } );

    test( "should not be able to login with wrong password", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const login = client.routes.PostLogin();
        login.setUser("guest");
        login.setPassword("wrongpassword");

        const response = await login.execute();

        expect( response.success ).toBe( false );

        expect( client.auth.isLoggedIn() ).toBe( false );

    } );

    test( "should not be able to login with wrong user", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const login = client.routes.PostLogin();
        login.setUser("wronguser");
        login.setPassword("querty");

        const response = await login.execute();

        expect( response.success ).toBe( false );

        expect( client.auth.isLoggedIn() ).toBe( false );

    } );

    test( "fails with no parameters provided", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const login = client.routes.PostLogin();

        // Do not set any parameters
        // login.setUser("guest");
        // login.setPassword("querty");

        const response = await login.execute();

        expect( response.success ).toBe( false );

        expect( client.auth.isLoggedIn() ).toBe( false );

    } );

    test( "once the user is logged in, a second connection with the same sessionid will login automatically", async () => {

        // Create the first client that will login
        const client1 = new Client("http://localhost:8080");
        await client1.connect();

        expect( client1.auth.getSession() ).toBeDefined();
        expect( client1.isConnected() ).toBe( true );

        const login = client1.routes.PostLogin();
        login.setUser("guest");
        login.setPassword("querty");

        // Perform the login
        await login.execute();

        expect( client1.auth.isLoggedIn() ).toBe( true );


        // Create a second client that will use the same sessionid
        const client2 = new Client("http://localhost:8080");

        client2.auth.setSession( client1.auth.getSession() );

        await client2.connect();

        // Expect the second client to be connected right away
        expect( client2.auth.isLoggedIn() ).toBe( true );

        // Expect both identitites to be the same
        expect( client1.auth.getIdentity() ).toEqual( client2.auth.getIdentity() );


    } );

} );