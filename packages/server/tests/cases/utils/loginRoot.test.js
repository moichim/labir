import { describe, expect, test } from "vitest";
import { loginRoot } from "./loginRoot";

describe( "loginRoot()", () => {

    test( "login to proper folder", async () => {

        const response = await loginRoot( );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.login ).not.toBeUndefined();
        expect( response.json.data.login.token ).not.toBeUndefined();
        expect( response.json.data.login.user ).not.toBeUndefined();

    } );

    test( "login to another folder", async () => {

        const response = await loginRoot( );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.login ).not.toBeUndefined();
        expect( response.json.data.login.token ).not.toBeUndefined();
        expect( response.json.data.login.user ).not.toBeUndefined();

    } );

} );