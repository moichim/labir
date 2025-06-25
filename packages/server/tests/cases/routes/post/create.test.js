import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { apiCall } from "../../utils/apiCall";

const getApiCallUrl = (action, folderName, newFolderName, description) => {
    return `${folderName}?action=${action}&name=${newFolderName}&description=${description}`;
}

describe( "POST action=create", () => {


    test( "unauthorised user should not be allowed", async () => {

        const url = getApiCallUrl( "create", "another_folder", "Pracovní název složky" );

        const response = await apiCall( "http://localhost:8080/" + url, "POST" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } );


    test( "guest should not be allowed to rename a restricted folder", async () => {

        const url = getApiCallUrl( "create", "access/restricted", "Pracovní název složky" );

        const response = await apiCallGuest( url, "POST" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 403 );

    });


    test( "creation should fail when the folder already exists", async () => {

        const url = getApiCallUrl( "create", "access/restricted_to_guest", "Název nové složky", "Popiska nové složky" );

        const response = await apiCallGuest( url, "POST" );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 409 );

    } );


    test( "creation and deletion response data structure", async () => {

        const url = getApiCallUrl( "create", "access/restricted_to_guest", "Temporary folder for deletion" );

        const response = await apiCallGuest( url, "POST" );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.result ).not.toBeUndefined();
        expect( response.json.data.result.info ).not.toBeUndefined();
        expect( response.json.data.result.info.path ).toBeDefined();
        expect( response.json.data.result.info.name ).toBeDefined();
        expect( response.json.data.result.info.description ).toBeDefined();

        const deleteUrl = getApiCallUrl( "delete", response.json.data.result.info.path, "" );
        const deleteResponse = await apiCallGuest( deleteUrl, "POST" );

        expect( deleteResponse.json.success ).toBe( true );
        expect( deleteResponse.json.data ).not.toBeUndefined();
        expect( deleteResponse.json.data.result ).not.toBeUndefined();
        expect( deleteResponse.json.data.result.deleted ).toBeDefined();
        expect( deleteResponse.json.data.result.deleted ).toBe( response.json.data.result.info.path );

    } );

} );


describe( "POST action=delete", () => {

    test( "create and delete a folder", async () => {

        const createUrl = getApiCallUrl( "create", "access/restricted_to_guest", "Temporary folder for deletion", "A description of a new folder" );
        const createResponse = await apiCallGuest( createUrl, "POST" );

        expect( createResponse.json.success ).toBe( true );
        expect( createResponse.json.data ).not.toBeUndefined();
        expect( createResponse.json.data.result ).not.toBeUndefined();
        expect( createResponse.json.data.result.info ).not.toBeUndefined();
        expect( createResponse.json.data.result.info.path ).toBeDefined();
        expect( createResponse.json.data.result.info.name ).toBe( "Temporary folder for deletion" );
        expect( createResponse.json.data.result.info.description ).toBe( "A description of a new folder" );
        expect( createResponse.json.data.result.info.slug ).toBe( "temporary-folder-for-deletion" );
        expect( createResponse.json.data.result.info.protected ).toBe( true );

        const infoResponse = await apiCallGuest( createResponse.json.data.result.info.path, "GET" );

        expect( infoResponse.json.success ).toBe( true );
        expect( infoResponse.json.data.folder ).not.toBeUndefined();
        expect( infoResponse.json.data.folder.name ).toBe( "Temporary folder for deletion" );
        expect( infoResponse.json.data.folder.description ).toBe( "A description of a new folder" );
        expect( infoResponse.json.data.folder.path ).toBe( createResponse.json.data.result.info.path );
        expect( infoResponse.json.data.folder.slug ).toBe( "temporary-folder-for-deletion" );
        expect( infoResponse.json.data.folder.protected ).toBe( true );
        expect( infoResponse.json.data.folder ).toEqual( createResponse.json.data.result.info );

        const deleteUrl = getApiCallUrl( "delete", createResponse.json.data.result.info.path, "" );
        const deleteResponse = await apiCallGuest( deleteUrl, "POST" );

        expect( deleteResponse.json.success ).toBe( true );
        expect( deleteResponse.json.data ).not.toBeUndefined();
        expect( deleteResponse.json.data.result ).not.toBeUndefined();
        expect( deleteResponse.json.data.result.deleted ).toBeDefined();
        expect( deleteResponse.json.data.result.deleted ).toBe( createResponse.json.data.result.info.path );

    } );


    test( "trying to delete a folder that does not exist", async () => {

        const deleteUrl = getApiCallUrl( "delete", "access/restricted_to_guest/non_existent_folder", "" );
        const deleteResponse = await apiCallGuest( deleteUrl, "POST" );

        expect( deleteResponse.json.success ).toBe( false );
        expect( deleteResponse.json.data ).toBeUndefined();
        expect( deleteResponse.json.code ).toBe( 404 );

    });


    test( "trying to delete a folder that exists but is not accessible by guest", async () => {

        const deleteUrl = getApiCallUrl( "delete", "access/restricted/accessible", "" );
        const deleteResponse = await apiCallGuest( deleteUrl, "POST" );

        expect( deleteResponse.json.success ).toBe( false );
        expect( deleteResponse.json.data ).toBeUndefined();
        expect( deleteResponse.json.code ).toBe( 403 );

    } );


    test( "create a structure with subfolders and delete it back again", async () => {

        const createUrl = getApiCallUrl( "create", "access/restricted_to_guest", "Temporary folder with subfolders" );
        const createResponse = await apiCallGuest( createUrl, "POST" );
        
        expect( createResponse.json.success ).toBe( true );
        expect( createResponse.json.data ).not.toBeUndefined();
        expect( createResponse.json.data.result ).not.toBeUndefined();
        expect( createResponse.json.data.result.info ).not.toBeUndefined();
        expect( createResponse.json.data.result.info.path ).toBeDefined();
        expect( createResponse.json.data.result.info.name ).toBe( "Temporary folder with subfolders" );
        expect( createResponse.json.data.result.info.slug ).toBe( "temporary-folder-with-subfolders" );

        // Vytvoření více sub-složek
        const subfolders = ["Subfolder 1", "Subfolder 2", "Subfolder 3"];
        const subfolderResponses = [];
        for (const subfolderName of subfolders) {
            const subfolderCreateUrl = getApiCallUrl( "create", createResponse.json.data.result.info.path, subfolderName );
            const subfolderCreateResponse = await apiCallGuest( subfolderCreateUrl, "POST" );
            expect( subfolderCreateResponse.json.success ).toBe( true );
            expect( subfolderCreateResponse.json.data ).not.toBeUndefined();
            expect( subfolderCreateResponse.json.data.result ).not.toBeUndefined();
            expect( subfolderCreateResponse.json.data.result.info ).not.toBeUndefined();
            expect( subfolderCreateResponse.json.data.result.info.path ).toBeDefined();
            expect( subfolderCreateResponse.json.data.result.info.name ).toBe( subfolderName );
            subfolderResponses.push(subfolderCreateResponse);
        }

        // Ověření existence všech sub-složek
        for (let i = 0; i < subfolders.length; i++) {
            const infoResponse = await apiCallGuest( subfolderResponses[i].json.data.result.info.path, "GET" );
            expect( infoResponse.json.success ).toBe( true );
            expect( infoResponse.json.data.folder ).not.toBeUndefined();
            expect( infoResponse.json.data.folder.name ).toBe( subfolders[i] );
        }

        // Smazání celé struktury
        const deleteUrl = getApiCallUrl( "delete", createResponse.json.data.result.info.path, "" );
        const deleteResponse = await apiCallGuest( deleteUrl, "POST" );
        expect( deleteResponse.json.success ).toBe( true );
        expect( deleteResponse.json.data ).not.toBeUndefined();
        expect( deleteResponse.json.data.result ).not.toBeUndefined();
        expect( deleteResponse.json.data.result.deleted ).toBeDefined();
        expect( deleteResponse.json.data.result.deleted ).toBe( createResponse.json.data.result.info.path );
    } );

} );