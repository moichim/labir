import { describe, expect, test } from 'vitest'
import { loginGuest } from './loginGuest';

describe( "loginGuest()", () => {
    
    
    test( "login to the proper folder", async () => {

        const response = await loginGuest( );

        // console.log( response.json );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.login ).not.toBeUndefined();
        expect( response.json.data.login.token ).not.toBeUndefined();
        expect( response.json.data.login.user ).not.toBeUndefined();

    } );

} );