import { describe, expect, test } from 'vitest'
import { apiCallGuest } from '../../utils/apiCallGuest';

describe("Guest: Restricted folder", () => {

    test('/restricted', async () => {

        const response = await apiCallGuest("restricted", "GET");

        expect(response.json.success).toBe( false );
        expect(response.json.data).toBeUndefined();

    });

    test( "/restricted/accessible", async () => {

        const response = await apiCallGuest( "restricted/accessible", "GET" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 403 );

    } );

    test( "/restricted/restricted", async () => {

        const response = await apiCallGuest( "restricted/restricted", "GET" );

        console.log( response.json );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 403 );

    } );

} );