import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { apiCall } from "../../utils/apiCall";

const getCreateFolderUrl = (folderName, newFolderName, description) => {
    return `${folderName}?action=create&name=${newFolderName}&description=${description}`;
}

describe( "POST action=create", () => {

    test.skip( "unauthorised user should not be allowed", async () => {

        const url = getCreateFolderUrl( "another_folder", "Pracovní název složky" );

        const response = await apiCall( "http://localhost:8080/" + url, "POST" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } );


    test.skip( "guest should not be allowed to rename a restricted folder", async () => {

        const url = getCreateFolderUrl( "access/restricted", "Pracovní název složky" );

        const response = await apiCallGuest( url, "POST" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 403 );

    });


    test.skip( "renaming an existing folder and back again",  async () => {

        const urlFrom = getCreateFolderUrl( "another_folder", "Pracovní název složky" );

        const response = await apiCallGuest( urlFrom, "POST" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data.result ).not.toBeUndefined();
        const newTarget = response.json.data.result.newSlug;

        const urlTo = getCreateFolderUrl( newTarget, "another_folder" );

        const back = await apiCallGuest( urlTo, "POST" );

        expect( back.json.success ).toBe( true );
        expect( back.json.data.result ).not.toBeUndefined();

        expect( back.json.data.result.newSlug ).toBe( "another_folder" ); 

    } );


    test( "create a new folder that does not exist already", async () => {

        const url = getCreateFolderUrl( "access/restricted_to_guest", "Název nové složky", "Popiska nové složky" );

        const response = await apiCallGuest( url, "POST" );

        console.log( response.json );

    } );

} );