import { describe, expect, test } from 'vitest'
import { apiCall } from '../../utils/apiCall';

describe("Unauthorised: Accessible folder", () => {

    test('/accessible', async () => {

        const response = await apiCall("http://localhost:8080/access/accessible", "GET");
        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();

    });

    test( "/accessible/accessible", async () => {

        const response = await apiCall( "http://localhost:8080/access/accessible/accessible", "GET" );
        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    } );

    test( "/accessible/restricted", async () => {

        const response = await apiCall( "http://localhost:8080/access/accessible/restricted", "GET" );
        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } );

} );