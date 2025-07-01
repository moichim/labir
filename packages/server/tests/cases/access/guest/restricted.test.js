import { describe, expect, test } from 'vitest'
import { apiCallGuest } from '../../utils/apiCallGuest';

describe("Guest: Restricted folder", () => {

    test('/restricted', async () => {

        const response = await apiCallGuest("access/restricted", "GET");

        expect(response.json.success).toBe( false );

    });

    test( "/restricted/accessible", async () => {

        const response = await apiCallGuest( "access/restricted/accessible", "GET" );

        expect( response.json.success ).toBe( false );
        expect( response.json.code ).toBe( 403 );

    } );

    test( "/restricted/restricted", async () => {

        const response = await apiCallGuest( "access/restricted/restricted", "GET" );

        expect( response.json.success ).toBe( false );
        expect( response.json.code ).toBe( 403 );

    } );

} );