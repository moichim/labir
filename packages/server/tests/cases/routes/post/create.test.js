import { describe, test, expect, afterEach } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { apiCall } from "../../utils/apiCall";
import { cleanupFolders } from "../../utils/cleanupFolders";


describe("POST action=create", () => {

    // Sběr vytvořených složek pro úklid po každém testu
    let createdFolders = [];

    afterEach(async () => {
        await cleanupFolders(createdFolders);
        createdFolders = [];
    });

    test("unauthorised user should not be allowed", async () => {

        // --- Pokus o vytvoření složky bez přihlášení ---
        const url = "another_folder?action=create";
        const response = await apiCall(
            "http://localhost:8080/" + url,
            "POST",
            { name: "Pracovní název složky" }
        );

        expect(response.json.success).toBe(false);
        expect(response.json.data).toBeUndefined();
        expect(response.json.code).toBe(401);

    });


    test("guest should not be allowed to rename a folder to which he does not have any access", async () => {

        // --- Pokus o vytvoření složky jako guest v restricted složce ---
        const url = "access/restricted?action=create";
        const response = await apiCallGuest(
            url,
            "POST",
            { name: "Pracovní název složky" }
        );

        expect(response.json.success).toBe(false);
        expect(response.json.data).toBeUndefined();
        expect(response.json.code).toBe(403);

    });


    test("guest should not be able to create folder in a location that may accept files", async () => {

        // --- Pokus o vytvoření složky v místě, které může přijímat soubory ---
        const url = "access/restricted_to_guest/restricted?action=create";
        const response = await apiCallGuest(
            url,
            "POST",
            { name: "Název nové složky" }
        );

        expect(response.json.success).toBe(false);
        expect(response.json.data).toBeUndefined();
        expect(response.json.code).toBe(403);

    } );


    test("creation should fail when the folder already exists", async () => {

        // --- Pokus o vytvoření složky, která už existuje ---
        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest(
            url,
            "POST",
            { name: "Název nové složky", description: "Popiska nové složky" }
        );

        expect(response.json.success).toBe(false);
        expect(response.json.data).toBeUndefined();
        expect(response.json.code).toBe(409);

    });


    test("create folder with meta, name, description and verify all fields", async () => {

        // --- 1. Vytvoření složky s meta, jménem a popiskou ---
        const meta = { lat: "50.123", long: "14.456", custom: "test" };
        const name = "Složka s meta v JSON";
        const description = "Popis složky v JSON";
        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest(
            url,
            "POST",
            {
                name: name,
                description: description,
                meta: meta
            }
        );

        // --- 2. Ověření úspěšného vytvoření a správnosti dat ---
        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();
        expect(response.json.data.result).not.toBeUndefined();
        expect(response.json.data.result.info).not.toBeUndefined();
        expect(response.json.data.result.info.name).toBe(name);
        expect(response.json.data.result.info.description).toBe(description);
        expect(response.json.data.result.info.data.lat).toBe(meta.lat);
        expect(response.json.data.result.info.data.long).toBe(meta.long);
        expect(response.json.data.result.info.data.custom).toBe(meta.custom);

        // --- 3. Přidání složky do seznamu pro úklid ---
        createdFolders.push(response.json.data.result.info.path);

        // --- 4. Smazání složky po testu ---
        const deleteUrl = response.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(response.json.data.result.info.path);
    });


    test("create folder with various tags (valid and invalid) and verify only valid tags are saved", async () => {
        
        // --- 1. Vytvoření složky s kombinací validních a nevalidních tagů ---
        const tags = {
            valid1: { name: "Validní tag", color: "#fff" },
            invalid1: { description: "Chybí name" },
            invalid2: { name: 123, color: "#000" },
            invalid3: { name: "Nesprávný color", color: 123 },
            valid2: { name: "Druhý validní tag", description: "Popis" },
            invalid4: "string místo objektu",
            valid3: { name: "Třetí validní tag" },
            arrayTag: [1,2,3],
            simpleString: "jen string"
        };
        const expectedTags = {
            valid1: { name: "Validní tag", color: "#fff" },
            valid2: { name: "Druhý validní tag", description: "Popis" },
            valid3: { name: "Třetí validní tag" }
        };
        const name = "Složka s různými tagy";
        const url = "access/restricted_to_guest?action=create";
        const response = await apiCallGuest(
            url,
            "POST",
            {
                name: name,
                tags: tags
            }
        );

        // --- 2. Ověření, že byly uloženy pouze validní tagy (pole own_tags) ---
        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();
        expect(response.json.data.result).not.toBeUndefined();
        expect(response.json.data.result.info).not.toBeUndefined();
        expect(response.json.data.result.info.name).toBe(name);
        expect(response.json.data.result.info.own_tags).toMatchObject(expectedTags);

        // --- 3. Načtení detailu složky a ověření tagů ---
        const infoResponse = await apiCallGuest(
            response.json.data.result.info.path,
            "GET"
        );
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.own_tags).toMatchObject(expectedTags);

        // --- 4. Přidání složky do seznamu pro úklid ---
        createdFolders.push(response.json.data.result.info.path);

        // --- 5. Smazání složky po testu ---
        const deleteUrl = response.json.data.result.info.path + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(response.json.data.result.info.path);
    });


});
