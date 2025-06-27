import { describe, test, expect } from "vitest";
import { apiCall } from "../../utils/apiCall";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { apiCallRoot } from "../../utils/apiCallRoot";

describe( "GET action=currentusertree", () => {

    test( "inaccessible to unauthorised", async () => {

        const response = await apiCall( "http://localhost:8080/access?action=currentusertree" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } );

    test( "accessible to guest", async () => {

        const response = await apiCallGuest( "access?action=currentusertree", "GET" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.tree ).not.toBeUndefined();

    } );


    test( "accessible to guest", async () => {

        const response = await apiCallRoot( "access?action=currentusertree", "GET" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.tree ).not.toBeUndefined();

    } );

} );