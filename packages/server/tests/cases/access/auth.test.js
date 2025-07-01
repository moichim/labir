import { describe, expect, test } from 'vitest';
import { apiCall } from '../utils/apiCall';


describe( "Authentication",  () => {

    test( "GET to login should be restricted", async () => {

        const request = await apiCall( "http://localhost:8080/some_folder?action=login", "GET" );

        expect( request.json.success ).toBe( false );

    } );


    test( "POST to login without credentials in the body", async () => {

        const request = await apiCall( "http://localhost:8080/some_folder?action=login", "POST" );

        expect( request.json.success ).toBe( false );
        expect( request.json.code ).toBe( 400 );

    } );


    test( "POST to login with non existing user", async () => {

        const request = await apiCall( "http://localhost:8080/some_folder?action=login", "POST", {
            user: "non_existing_user",
            password: "some_password"
        } );

        expect( request.json.success ).toBe( false );
        expect( request.json.code ).toBe( 401 );

    } );


    test( "POST to login with correct user but wrong password", async () => {

        const request = await apiCall( "http://localhost:8080/some_folder?action=login", "POST", {
            user: "root",
            password: "wrong_password"
        } );

        expect( request.json.success ).toBe( false );
        expect( request.json.code ).toBe( 401 );

    } );


    test( "POST to login with incorrect user but with an existing password", async () => {

        const request = await apiCall( "http://localhost:8080/some_folder?action=login", "POST", {
            user: "non_existing_user",
            password: "abcdefghijk"
        } );

        expect( request.json.success ).toBe( false );
        expect( request.json.code ).toBe( 401 );

    } );


    test( "POST to login with correct credentials", async () => {

        const request = await apiCall( "http://localhost:8080/some_folder?action=login", "POST", {
            user: "root",
            password: "abcdefghijk"
        } );

        expect( request.response.status ).toBe( 200 );
        expect( request.json.success ).toBe( true );
        expect( request.json.data ).not.toBeUndefined();

        // Test the incoming message content
        expect( request.json.data.login ).not.toBeUndefined();
        expect( request.json.data.login.user ).not.toBeUndefined();
        expect( request.json.data.login.user ).toBe( "root" );
        expect( request.json.data.login.token ).not.toBeUndefined();


    } );

} );