import { describe, test, expect, afterEach } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { apiCall } from "../../utils/apiCall";
import { cleanupFolders } from "../../utils/cleanupFolders";

describe( "POST action=delete", () => {
    let createdFolders = [];

    afterEach(async () => {
        await cleanupFolders(createdFolders);
        createdFolders = [];
    });

    test( "create and delete a folder", async () => {

        // --- 1. Vytvoření složky ---
        const createUrl = "access/restricted_to_guest?action=create";
        const createResponse = await apiCallGuest(
            createUrl,
            "POST",
            {
                name: "Temporary folder for deletion",
                description: "A description of a new folder"
            }
        );

        // --- 2. Ověření odpovědi na vytvoření složky ---
        expect( createResponse.json.success ).toBe( true );
        expect( createResponse.json.data ).not.toBeUndefined();
        expect( createResponse.json.data.result ).not.toBeUndefined();
        expect( createResponse.json.data.result.info ).not.toBeUndefined();
        expect( createResponse.json.data.result.info.path ).toBeDefined();
        expect( createResponse.json.data.result.info.name ).toBe( "Temporary folder for deletion" );
        expect( createResponse.json.data.result.info.description ).toBe( "A description of a new folder" );
        expect( createResponse.json.data.result.info.slug ).toBe( "temporary-folder-for-deletion" );
        expect( createResponse.json.data.result.info.protected ).toBe( true );

        // --- 3. Přidání složky do seznamu pro úklid ---
        createdFolders.push(createResponse.json.data.result.info.path);

        // --- 4. Načtení detailu složky ---
        const infoResponse = await apiCallGuest(
            createResponse.json.data.result.info.path,
            "GET"
        );

        // --- 5. Ověření detailu složky ---
        expect( infoResponse.json.success ).toBe( true );
        expect( infoResponse.json.data.folder ).not.toBeUndefined();
        expect( infoResponse.json.data.folder.name ).toBe( "Temporary folder for deletion" );
        expect( infoResponse.json.data.folder.description ).toBe( "A description of a new folder" );
        expect( infoResponse.json.data.folder.path ).toBe( createResponse.json.data.result.info.path );
        expect( infoResponse.json.data.folder.slug ).toBe( "temporary-folder-for-deletion" );
        expect( infoResponse.json.data.folder.protected ).toBe( true );
        expect( infoResponse.json.data.folder ).toEqual( createResponse.json.data.result.info );

        // --- 6. Smazání složky ---
        const deleteUrl = createResponse.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(
            deleteUrl,
            "POST"
        );

        // --- 7. Ověření odpovědi na smazání složky ---
        expect( deleteResponse.json.success ).toBe( true );
        expect( deleteResponse.json.data ).not.toBeUndefined();
        expect( deleteResponse.json.data.result ).not.toBeUndefined();
        expect( deleteResponse.json.data.result.deleted ).toBeDefined();
        expect( deleteResponse.json.data.result.deleted ).toBe( createResponse.json.data.result.info.path );

    });


    test( "trying to delete a folder that does not exist", async () => {

        // --- 1. Pokus o smazání neexistující složky ---
        const deleteUrl = "access/restricted_to_guest/non_existent_folder?action=delete";
        const deleteResponse = await apiCallGuest(
            deleteUrl,
            "POST"
        );

        // --- 2. Ověření odpovědi na pokus o smazání neexistující složky ---
        expect( deleteResponse.json.success ).toBe( false );
        expect( deleteResponse.json.data ).toBeUndefined();
        expect( deleteResponse.json.code ).toBe( 404 );

    });


    test( "trying to delete a folder that exists but is not accessible by guest", async () => {

        // --- 1. Pokus o smazání složky, ke které guest nemá přístup ---
        const deleteUrl = "access/restricted/accessible?action=delete";
        const deleteResponse = await apiCallGuest(
            deleteUrl,
            "POST"
        );

        // --- 2. Ověření odpovědi na pokus o smazání nepřístupné složky ---
        expect( deleteResponse.json.success ).toBe( false );
        expect( deleteResponse.json.data ).toBeUndefined();
        expect( deleteResponse.json.code ).toBe( 403 );

    });


    test( "create a structure with subfolders and delete it back again", async () => {

        // --- 1. Vytvoření hlavní složky ---
        const createUrl = "access/restricted_to_guest?action=create";
        const createResponse = await apiCallGuest(
            createUrl,
            "POST",
            {
                name: "Temporary folder with subfolders",
                access: {
                    may_have_files: false, // Zamezení vytváření souborů v této složce
                }
            }
        );
        expect(createResponse.json.success).toBe(true);
        expect(createResponse.json.data).not.toBeUndefined();
        expect(createResponse.json.data.result).not.toBeUndefined();
        expect(createResponse.json.data.result.info).not.toBeUndefined();
        expect(createResponse.json.data.result.info.path).toBeDefined();
        expect(createResponse.json.data.result.info.name).toBe("Temporary folder with subfolders");
        expect(createResponse.json.data.result.info.slug).toBe("temporary-folder-with-subfolders");

        // --- 2. Přidání hlavní složky do seznamu pro úklid ---
        createdFolders.push(createResponse.json.data.result.info.path);

        // --- 3. Vytvoření více sub-složek ---
        const subfolders = ["Subfolder 1", "Subfolder 2", "Subfolder 3"];
        const subfolderResponses = [];
        for (const subfolderName of subfolders) {
            const subfolderCreateUrl = createResponse.json.data.result.info.path + "?action=create";
            const subfolderCreateResponse = await apiCallGuest(
                subfolderCreateUrl,
                "POST",
                {
                    name: subfolderName
                }
            );
            expect(subfolderCreateResponse.json.success).toBe(true);
            expect(subfolderCreateResponse.json.data).not.toBeUndefined();
            expect(subfolderCreateResponse.json.data.result).not.toBeUndefined();
            expect(subfolderCreateResponse.json.data.result.info).not.toBeUndefined();
            expect(subfolderCreateResponse.json.data.result.info.path).toBeDefined();
            expect(subfolderCreateResponse.json.data.result.info.name).toBe(subfolderName);
            subfolderResponses.push(subfolderCreateResponse);
        }

        // --- 4. Ověření existence všech sub-složek ---
        for (let i = 0; i < subfolders.length; i++) {
            const infoResponse = await apiCallGuest(
                subfolderResponses[i].json.data.result.info.path,
                "GET"
            );
            expect(infoResponse.json.success).toBe(true);
            expect(infoResponse.json.data.folder).not.toBeUndefined();
            expect(infoResponse.json.data.folder.name).toBe(subfolders[i]);
        }

        // --- 5. Smazání celé struktury ---
        const deleteUrl = createResponse.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(
            deleteUrl,
            "POST"
        );
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data).not.toBeUndefined();
        expect(deleteResponse.json.data.result).not.toBeUndefined();
        expect(deleteResponse.json.data.result.deleted).toBeDefined();
        expect(deleteResponse.json.data.result.deleted).toBe(createResponse.json.data.result.info.path);
    } );
});