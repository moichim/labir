import { describe, expect, test } from 'vitest'
import { apiCallGuest } from '../../utils/apiCallGuest';
import { loginGuest } from "../../utils/loginGuest";


describe("Guest: Restrict login to an accessible folder", () => {

    test('/accessible', async () => {

        const login = await loginGuest( "accessible" );

        expect( login.json.success ).toBe( false );
        expect( login.json.code ).toBe( 401 );

    });

    test( "/accessible/accessible", async () => {

        const login = await loginGuest( "accessible/accessible" );
        expect( login.json.success ).toBe( false );
        expect( login.json.code ).toBe( 401 );

    } );

    test( "/accessible/restricted", async () => {

        const login = await loginGuest( "accessible/restricted" );
        expect( login.json.success ).toBe( false );
        expect( login.json.code ).toBe( 401 );

    } );

} );



describe("Guest: Allow access to accessible folder when logged in", () => {

    test('/accessible', async () => {

        const response = await apiCallGuest( "accessible" );
        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    });

    test( "/accessible/accessible", async () => {

        const login = await apiCallGuest( "accessible/accessible" );
        expect( login.json.success ).toBe( true );
        expect( login.json.data ).not.toBeUndefined();

    } );

    test( "/accessible/restricted", async () => {

        const login = await apiCallGuest( "accessible/restricted" );
        expect( login.json.success ).toBe( false );
        expect( login.json.code ).toBe( 403 );

    } );

} );