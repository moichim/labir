import { describe, expect, test } from 'vitest'
import { apiCallRoot } from '../../utils/apiCallRoot';

describe("Root: Accessible folder", () => {

    test('/accessible', async () => {

        const response = await apiCallRoot("access/accessible");
        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();

    });

    test( "/accessible/accessible", async () => {

        const response = await apiCallRoot( "access/accessible/accessible" );
        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    } );

    test( "/accessible/restricted", async () => {

        const response = await apiCallRoot( "access/accessible/restricted" );
        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    } );

} );