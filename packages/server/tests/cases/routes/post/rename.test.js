import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { apiCall } from "../../utils/apiCall";

const getRenameFolderUrl = (folderName, $toName) => {
    return `${folderName}?action=rename&name=${$toName}`;
}

describe( "POST action=rename", () => {

    test( "unauthorised user should not be allowed", async () => {

        const url = getRenameFolderUrl( "another_folder", "Pracovní název složky" );

        const response = await apiCall( "http://localhost:8080/" + url, "POST" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } );


    test( "guest should not be allowed to rename a restricted folder", async () => {

        const url = getRenameFolderUrl( "access/restricted", "Pracovní název složky" );

        const response = await apiCallGuest( url, "POST" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 403 );

    });


    test( "renaming an existing folder and back again",  async () => {

        const urlFrom = getRenameFolderUrl( "another-folder", "Pracovní název složky" );

        const response = await apiCallGuest( urlFrom, "POST" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data.result ).not.toBeUndefined();
        const newTarget = response.json.data.result.newSlug;

        const urlTo = getRenameFolderUrl( newTarget, "another-folder" );

        const back = await apiCallGuest( urlTo, "POST" );

        expect( back.json.success ).toBe( true );
        expect( back.json.data.result ).not.toBeUndefined();

        expect( back.json.data.result.newSlug ).toBe( "another-folder" ); 

    } );

} );