import { describe, expect, test } from 'vitest'
import { loginGuest } from './loginGuest';

describe( "loginGuest()", () => {
    
    
    test( "login to the proper folder", async () => {

        const response = await loginGuest( "access/restricted_to_guest" );

        console.log( response.json );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.login ).not.toBeUndefined();
        expect( response.json.data.login.token ).not.toBeUndefined();
        expect( response.json.data.login.user ).not.toBeUndefined();

    } );


    test( "login to a nested accessible folder", async () => {

        const response = await loginGuest( "access/restricted_to_guest/accessible" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.login ).not.toBeUndefined();
        expect( response.json.data.login.token ).not.toBeUndefined();
        expect( response.json.data.login.user ).not.toBeUndefined();

    } );


    test( "login to a nested restricted folder", async () => {

        const response = await loginGuest( "access/restricted_to_guest/restricted" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.login ).not.toBeUndefined();
        expect( response.json.data.login.token ).not.toBeUndefined();
        expect( response.json.data.login.user ).not.toBeUndefined();

    } );


    test( "unable to login to parent", async () => {

        const response = await loginGuest( "" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 400 );

    } );

} );