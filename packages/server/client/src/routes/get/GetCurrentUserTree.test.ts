import { describe, expect, test } from "vitest";
import { Client } from "../../Client";

describe( "GetCurrentUserTree", () => {


    test( "should fail when not logged in", async () => {

        const client = new Client( "http://localhost:8080" );

        await client.connect();

        expect( client.auth.isLoggedIn() ).toBe( false );

        const request = client.routes.get.currentUserTree();

        const result = await request.execute();

        expect( result.success ).toBe( false );
        expect( result.code ).toBe( 401 );

    } );

    test( "Should be accessible to guest", async () => {

        const client = new Client( "http://localhost:8080" );

        await client.connect();

        const login = client.routes.post.login();
        login.setUser( "guest" );
        login.setPassword( "querty" );

        await login.execute();

        expect( client.auth.isLoggedIn() ).toBe( true );

        const request = client.routes.get.currentUserTree();
        const result = await request.execute();

        expect( result.data ).toHaveProperty( "tree" );

    } );


    test( "Should be accessible to root", async () => {

        const client = new Client( "http://localhost:8080" );

        await client.connect();

        const login = client.routes.post.login();
        login.setUser( "root" );
        login.setPassword( "abcdefghijk" );

        await login.execute();

        expect( client.auth.isLoggedIn() ).toBe( true );

        const request = client.routes.get.currentUserTree();
        const result = await request.execute();

        expect( result.data ).toHaveProperty( "tree" );

        console.log( result.data!.tree );

    } );

} );