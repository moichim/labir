import { describe, expect, test } from 'vitest'
import { apiCall } from '../../utils/apiCall';

describe("Unauthorised: Restricted folder", () => {

    test('/restricted', async () => {

        const response = await apiCall("http://localhost:8080/access/restricted", "GET");
        expect(response.json.success).toBe(false);
        expect(response.json.data).toBeUndefined();

    });

    test( "/restricted/accessible", async () => {

        const response = await apiCall( "http://localhost:8080/access/restricted/accessible", "GET" );
        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } );

    test( "/restricted/restricted", async () => {

        const response = await apiCall( "http://localhost:8080/access/restricted/restricted", "GET" );
        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } );

} );