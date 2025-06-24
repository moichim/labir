import { describe, expect, test } from 'vitest'
import { apiCall } from '../utils/apiCall';

describe( "User special cases", () => {

    test( "name with diacritics", async () => {

        const response = await apiCall(
            "http://localhost:8080/specials/user?action=login",
            "POST",
            {
                user: "František Dobrota",
                password: "abcdefghijk"
            }
        );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();

    } );

    test( "empty name", async () => {

        const response = await apiCall(
            "http://localhost:8080/specials/user?action=login",
            "POST",
            {
                user: "",
                password: "abcdefghijk"
            }
        );

        // console.log( response.json );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } )

} );