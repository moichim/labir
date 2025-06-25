import { describe, test, expect, afterAll } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { apiCall } from "../../utils/apiCall";
import { cleanupFolders } from "../../utils/cleanupFolders";

const getApiCallUrl = (action, folderName, newFolderName, description) => {
    return `${folderName}?action=${action}&name=${newFolderName}&description=${description}`;
}

describe( "POST action=create", () => {
    const createdFolders = [];

    test( "unauthorised user should not be allowed", async () => {
        const url = "another_folder?action=create";
        const response = await apiCall( "http://localhost:8080/" + url, "POST", { name: "Pracovní název složky" } );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 401 );

    } );


    test( "guest should not be allowed to rename a restricted folder", async () => {

        const url = "access/restricted?action=create";
        const response = await apiCallGuest( url, "POST", { name: "Pracovní název složky" } );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 403 );

    });


    test( "creation should fail when the folder already exists", async () => {

        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest( url, "POST", { name: "Název nové složky", description: "Popiska nové složky" } );

        expect( response.json.success ).toBe( false );
        expect( response.json.data ).toBeUndefined();
        expect( response.json.code ).toBe( 409 );

    } );


    test( "creation and deletion response data structure", async () => {

        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest( url, "POST", { name: "Temporary folder for deletion" } );

        expect( response.json.success ).toBe( true );
        expect( response.json.data ).not.toBeUndefined();
        expect( response.json.data.result ).not.toBeUndefined();
        expect( response.json.data.result.info ).not.toBeUndefined();
        expect( response.json.data.result.info.path ).toBeDefined();
        expect( response.json.data.result.info.name ).toBeDefined();
        expect( response.json.data.result.info.description ).toBeDefined();

        createdFolders.push(response.json.data.result.info.path);

        const deleteUrl = getApiCallUrl( "delete", response.json.data.result.info.path, "" );
        const deleteResponse = await apiCallGuest( deleteUrl, "POST" );

        expect( deleteResponse.json.success ).toBe( true );
        expect( deleteResponse.json.data ).not.toBeUndefined();
        expect( deleteResponse.json.data.result ).not.toBeUndefined();
        expect( deleteResponse.json.data.result.deleted ).toBeDefined();
        expect( deleteResponse.json.data.result.deleted ).toBe( response.json.data.result.info.path );

    } );

    afterAll(async () => {
        await cleanupFolders(createdFolders);
    });
} );


describe( "POST action=delete", () => {
    const createdFolders = [];

    test( "create and delete a folder", async () => {

        const createUrl = "access/restricted_to_guest?action=create";
        const createResponse = await apiCallGuest( createUrl, "POST", { name: "Temporary folder for deletion", description: "A description of a new folder" } );

        expect( createResponse.json.success ).toBe( true );
        expect( createResponse.json.data ).not.toBeUndefined();
        expect( createResponse.json.data.result ).not.toBeUndefined();
        expect( createResponse.json.data.result.info ).not.toBeUndefined();
        expect( createResponse.json.data.result.info.path ).toBeDefined();
        expect( createResponse.json.data.result.info.name ).toBe( "Temporary folder for deletion" );
        expect( createResponse.json.data.result.info.description ).toBe( "A description of a new folder" );
        expect( createResponse.json.data.result.info.slug ).toBe( "temporary-folder-for-deletion" );
        expect( createResponse.json.data.result.info.protected ).toBe( true );

        createdFolders.push(createResponse.json.data.result.info.path);

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

        const createUrl = "access/restricted_to_guest?action=create";
        const createResponse = await apiCallGuest( createUrl, "POST", { name: "Temporary folder with subfolders" } );
        
        expect( createResponse.json.success ).toBe( true );
        expect( createResponse.json.data ).not.toBeUndefined();
        expect( createResponse.json.data.result ).not.toBeUndefined();
        expect( createResponse.json.data.result.info ).not.toBeUndefined();
        expect( createResponse.json.data.result.info.path ).toBeDefined();
        expect( createResponse.json.data.result.info.name ).toBe( "Temporary folder with subfolders" );
        expect( createResponse.json.data.result.info.slug ).toBe( "temporary-folder-with-subfolders" );

        createdFolders.push(createResponse.json.data.result.info.path);

        // Vytvoření více sub-složek
        const subfolders = ["Subfolder 1", "Subfolder 2", "Subfolder 3"];
        const subfolderResponses = [];
        for (const subfolderName of subfolders) {
            const subfolderCreateUrl = createResponse.json.data.result.info.path + "?action=create";
            const subfolderCreateResponse = await apiCallGuest( subfolderCreateUrl, "POST", { name: subfolderName } );
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

    afterAll(async () => {
        await cleanupFolders(createdFolders);
    });
} );


describe( "POST action=create with meta", () => {
    const createdFolders = [];
    test("create folder with meta data", async () => {
        const meta = { lat: "50.123", long: "14.456", custom: "test" };
        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest(url, "POST", { name: "Složka s meta", meta: meta });

        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();
        expect(response.json.data.result).not.toBeUndefined();
        expect(response.json.data.result.info).not.toBeUndefined();

        // Ověř, že meta data jsou ve výsledku info
        expect(response.json.data.result.info.data.lat).toBe(meta.lat);
        expect(response.json.data.result.info.data.long).toBe(meta.long);
        expect(response.json.data.result.info.data.custom).toBe(meta.custom);

        // Ověř, že name a description zůstaly správně
        expect(response.json.data.result.info.name).toBe("Složka s meta");

        createdFolders.push(response.json.data.result.info.path);

        // Smazání složky po testu
        const deleteUrl = response.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(response.json.data.result.info.path);
    });

    afterAll(async () => {
        await cleanupFolders(createdFolders);
    });
});


describe( "POST action=create with meta, name, description in JSON", () => {
    const createdFolders = [];
    test("create folder with meta, name, description in JSON body", async () => {
        const meta = { lat: "50.123", long: "14.456", custom: "test" };
        const name = "Složka s meta v JSON";
        const description = "Popis složky v JSON";
        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest(url, "POST", { name, description, meta });

        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();
        expect(response.json.data.result).not.toBeUndefined();
        expect(response.json.data.result.info).not.toBeUndefined();

        // Ověř, že meta data jsou ve výsledku info
        expect(response.json.data.result.info.data.lat).toBe(meta.lat);
        expect(response.json.data.result.info.data.long).toBe(meta.long);
        expect(response.json.data.result.info.data.custom).toBe(meta.custom);

        // Ověř, že name a description jsou z JSON
        expect(response.json.data.result.info.name).toBe(name);
        expect(response.json.data.result.info.description).toBe(description);

        createdFolders.push(response.json.data.result.info.path);

        // Smazání složky po testu
        const deleteUrl = response.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(response.json.data.result.info.path);
    });

    afterAll(async () => {
        await cleanupFolders(createdFolders);
    });
});


describe("POST action=create with tags", () => {
    const createdFolders = [];
    test.skip("create folder with tags and verify tags are accessible", async () => {
        const tags = { project: "labir", type: "test", custom: [1, 2, 3] };
        const name = "Složka s tagy";
        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest(url, "POST", { name, tags });

        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();
        expect(response.json.data.result).not.toBeUndefined();
        expect(response.json.data.result.info).not.toBeUndefined();
        expect(response.json.data.result.info.name).toBe(name);

        // Ověř, že tagy jsou dostupné přes API (např. v info nebo samostatně)
        // Pokud API vrací tagy v info, ověř zde
        expect(response.json.data.result.info.tags).toMatchObject(tags);

        // Pokud je potřeba ověřit načtení tagů samostatně, proveď GET na složku
        const infoResponse = await apiCallGuest(response.json.data.result.info.path, "GET");
        expect(infoResponse.json.success).toBe(true);
        // Ověř, že tagy jsou dostupné v detailu složky
        expect(infoResponse.json.data.folder.tags).toMatchObject(tags);

        createdFolders.push(response.json.data.result.info.path);

        // Smazání složky po testu
        const deleteUrl = response.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(response.json.data.result.info.path);
    });


    test("create folder with valid tags and verify tags are accessible", async () => {
        const tags = {
            tag1: { name: "Správný tag", description: "Popis", color: "#123456" },
            tag2: { name: "Druhý tag" }
        };
        const name = "Složka s validními tagy";
        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest(url, "POST", { name, tags });

        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();
        expect(response.json.data.result).not.toBeUndefined();
        expect(response.json.data.result.info).not.toBeUndefined();
        expect(response.json.data.result.info.name).toBe(name);
        // Ověř, že tagy jsou dostupné a správné
        expect(response.json.data.result.info.own_tags).toMatchObject(tags);

        const infoResponse = await apiCallGuest(response.json.data.result.info.path, "GET");
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.own_tags).toMatchObject(tags);

        createdFolders.push(response.json.data.result.info.path);

        // Smazání složky po testu
        const deleteUrl = response.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(response.json.data.result.info.path);
    });

    test("create folder with some invalid tags - only valid tags are saved", async () => {
        const tags = {
            valid1: { name: "Validní tag", color: "#fff" },
            invalid1: { description: "Chybí name" },
            invalid2: { name: 123, color: "#000" },
            invalid3: { name: "Nesprávný color", color: 123 },
            valid2: { name: "Druhý validní tag", description: "Popis" },
            invalid4: "string místo objektu",
            valid3: { name: "Třetí validní tag" }
        };
        const expectedTags = {
            valid1: { name: "Validní tag", color: "#fff" },
            valid2: { name: "Druhý validní tag", description: "Popis" },
            valid3: { name: "Třetí validní tag" }
        };
        const name = "Složka s validními a nevalidními tagy";
        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest(url, "POST", { name, tags });

        // expect(response.json).toMatchSnapshot(); // pro debug

        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();
        expect(response.json.data.result).not.toBeUndefined();
        expect(response.json.data.result.info).not.toBeUndefined();
        expect(response.json.data.result.info.name).toBe(name);
        // Ověř, že byly uloženy pouze validní tagy (pole own_tags)
        expect(response.json.data.result.info.own_tags).toMatchObject(expectedTags);

        const infoResponse = await apiCallGuest(response.json.data.result.info.path, "GET");
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.own_tags).toMatchObject(expectedTags);

        createdFolders.push(response.json.data.result.info.path);

        // Smazání složky po testu
        const deleteUrl = response.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(response.json.data.result.info.path);
    });

    afterAll(async () => {
        await cleanupFolders(createdFolders);
    });
});
