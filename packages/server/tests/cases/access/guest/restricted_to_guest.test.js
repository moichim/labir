import { describe, expect, test } from 'vitest'
import { apiCallGuest } from '../../utils/apiCallGuest';

describe("Guest: A folder restricted to guest only", () => {

    test('/restricted_to_guest', async () => {

        const response = await apiCallGuest("restricted_to_guest", "GET");

        expect(response.json.success).toBe( true );
        expect(response.json.data).not.toBeUndefined();

    });

    test( "/restricted_to_guest/accessible", async () => {

        const response = await apiCallGuest( "restricted_to_guest/accessible", "GET" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    } );

    test( "/restricted_to_guest/restricted", async () => {

        const response = await apiCallGuest( "restricted_to_guest/restricted", "GET" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    } );

} );