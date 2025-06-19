import { describe, expect, test } from 'vitest';
import { apiCallRoot } from '../../utils/apiCallRoot';

describe("Root: Restricted folder", () => {

    test('/restricted', async () => {

        const response = await apiCallRoot("restricted" );
        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();

    });

    test( "/restricted/accessible", async () => {

        const response = await apiCallRoot( "restricted/accessible" );
        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    } );

    test( "/restricted/restricted", async () => {

        const response = await apiCallRoot( "restricted/restricted" );
        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    } );

} );