import { describe, test, expect, afterEach } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { cleanupFolders } from "../../utils/cleanupFolders";

const createdFolders = [];

describe("POST action=move", () => {

    test("move folder to another parent", async () => {

        // --- 1. Vytvoření cílové složky (kam se bude přesouvat) ---
        const targetParent = "access/restricted_to_guest";
        const createTarget = await apiCallGuest(
            targetParent + "?action=create",
            "POST",
            {
                name: "Cilova slozka 1",
                access: {
                    may_have_files: false
                }
            }
        );
        const targetPath = createTarget.json.data.result.info.path;
        createdFolders.push(targetPath);
        expect(createTarget.json.success).toBe(true);

        // --- 2. Vytvoření zdrojové složky (která se bude přesouvat) ---
        const createSource = await apiCallGuest(
            targetPath + "?action=create",
            "POST",
            {
                name: "Presouvana slozka 1",
                description: "Popis",
                meta: {
                    foo: "bar"
                }
            }
        );
        const sourcePath = createSource.json.data.result.info.path;
        createdFolders.push(sourcePath);
        expect(createSource.json.success).toBe(true);

        // --- 3. Vytvoření další cílové složky (nový parent pro přesun) ---
        const createNewTarget = await apiCallGuest(
            targetParent + "?action=create",
            "POST",
            {
                name: "Nova cilova 1",
                access: {
                    may_have_files: false
                }
            }
        );
        const newTargetPath = createNewTarget.json.data.result.info.path;
        createdFolders.push(newTargetPath);
        expect(createNewTarget.json.success).toBe(true);

        // --- 4. Proveď přesun zdrojové složky do nové cílové složky ---
        const moveUrl = sourcePath + "?action=move";
        const moveBody = {
            target: newTargetPath
        };
        const moveResponse = await apiCallGuest(
            moveUrl,
            "POST",
            moveBody
        );
        expect(moveResponse.json.success).toBe(true);
        expect(moveResponse.json.data.result.moved).toBe(true);
        expect(moveResponse.json.data.result.oldSlug).toBe(sourcePath);

        // --- 5. Ověř správnou novou cestu podle webalizace názvu ---
        const webalized = "presouvana-slozka-1"; // Strings::webalize("Presouvana slozka")
        const expectedNewPath = newTargetPath + "/" + webalized;
        createdFolders.push(expectedNewPath);
        expect(moveResponse.json.data.result.info.path).toBe(expectedNewPath);
        expect(moveResponse.json.data.result.info.slug).toBe(webalized);
        expect(moveResponse.json.data.result.info.name).toBe("Presouvana slozka 1");
        expect(moveResponse.json.data.result.info.description).toBe("Popis");
        expect(moveResponse.json.data.result.info.data.foo).toBe("bar");

        // --- 6. Ověř, že složka je na novém místě a má správná data ---
        const infoResponse = await apiCallGuest(
            expectedNewPath,
            "GET"
        );
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.path).toBe(expectedNewPath);
        expect(infoResponse.json.data.folder.slug).toBe(webalized);
        expect(infoResponse.json.data.folder.name).toBe("Presouvana slozka 1");
        expect(infoResponse.json.data.folder.description).toBe("Popis");
        expect(infoResponse.json.data.folder.data.foo).toBe("bar");

        // --- 7. Úklid: smaž všechny vytvořené složky ---
        await apiCallGuest(expectedNewPath + "?action=delete", "POST");
        await apiCallGuest(targetPath + "?action=delete", "POST");
        await apiCallGuest(newTargetPath + "?action=delete", "POST");
    });



    test("move fails if target is missing in body", async () => {

        // --- 1. Vytvoření složky, kterou budeme zkoušet přesunout ---
        const createResp = await apiCallGuest(
            "access/restricted_to_guest?action=create",
            "POST",
            {
                name: "Pro test target missing 2"
            }
        );
        const folderPath = createResp.json.data.result.info.path;
        createdFolders.push(folderPath);
        expect(createResp.json.success).toBe(true); 

        // --- 2. Pokus o přesun bez zadání target ---
        const moveResp = await apiCallGuest(
            folderPath + "?action=move",
            "POST",
            {}
        );
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(400);

        // --- 3. Úklid: smaž vytvořenou složku ---
        await apiCallGuest(
            folderPath + "?action=delete", 
            "POST"
        );

    });


    test("move fails if source folder does not exist", async () => {

        // --- 1. Pokus o přesun neexistující složky ---
        const moveResp = await apiCallGuest(
            "neexistujici-slozka?action=move",
            "POST",
            { target: "access/restricted_to_guest" }
        );
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);

    });


    test("move fails if target folder already exists", async () => {

        // --- 1. Vytvoř cílovou složku ---
        const createTargetParent = await apiCallGuest(
            "access/restricted_to_guest?action=create",
            "POST",
            {
                name: "Cilova 3",
                access: {
                    may_have_files: false
                }
            }
        );
        const targetParentPath = createTargetParent.json.data.result.info.path;
        createdFolders.push(targetParentPath);
        expect(createTargetParent.json.success).toBe(true);

        // --- 2. V cíli vytvoř podsložku Target ---
        const createTargetSub = await apiCallGuest(
            targetParentPath + "?action=create",
            "POST",
            {
                name: "Target 3",
                access: {
                    may_have_files: false
                }
            }
        );
        const targetSubPath = createTargetSub.json.data.result.info.path;
        createdFolders.push(targetSubPath);
        expect(createTargetSub.json.success).toBe(true);

        // --- 3. Někde jinde vytvoř další složku Target ---
        const createOtherParent = await apiCallGuest(
            "access/restricted_to_guest?action=create",
            "POST",
            {
                name: "Jinde 3",
                access: {
                    may_have_files: false
                }
            }
        );
        const otherParentPath = createOtherParent.json.data.result.info.path;
        createdFolders.push(otherParentPath);
        expect(createOtherParent.json.success).toBe(true);

        const createOtherTarget = await apiCallGuest(
            otherParentPath + "?action=create",
            "POST",
            {
                name: "Target 3",
                access: {
                    may_have_files: false
                }
            }
        );
        const otherTargetPath = createOtherTarget.json.data.result.info.path;
        createdFolders.push(otherTargetPath);
        expect(createOtherTarget.json.success).toBe(true);

        // --- 4. Pokus o přesun Target do Cíl/Target (kde už existuje) ---
        const moveResp = await apiCallGuest(
            otherTargetPath + "?action=move",
            "POST",
            {
                target: targetParentPath
            }
        );
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(409);

        // --- 5. Úklid: smaž všechny vytvořené složky ---
        await apiCallGuest(otherTargetPath + "?action=delete", "POST");
        await apiCallGuest(targetSubPath + "?action=delete", "POST");
        await apiCallGuest(targetParentPath + "?action=delete", "POST");
        await apiCallGuest(otherParentPath + "?action=delete", "POST");

    });


    test("move fails if target parent is not writable for guest", async () => {
        // Vytvoř složku, kterou bude guest přesouvat
        const createResp = await apiCallGuest(
            "access/restricted_to_guest?action=create",
            "POST",
            {
                name: "Presunout me 4"
            }
        );
        expect(createResp.json.success).toBe(true);
        const folderPath = createResp.json.data.result.info.path;
        createdFolders.push(folderPath);
        // Pokus o přesun do restricted (kam guest nemá právo zápisu)
        const moveResp = await apiCallGuest(
            folderPath + "?action=move",
            "POST",
            {
                target: "access/restricted"
            }
        );
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);
        // Explicitní úklid
        await apiCallGuest(folderPath + "?action=delete", "POST");
    });


    test("move fails if target parent is public, but unaccessible to guest", async () => {

        // --- 1. Vytvoř složku, kterou bude guest přesouvat ---
        const createResp = await apiCallGuest(
            "access/restricted_to_guest?action=create",
            "POST",
            {
                name: "Presunout me 5"
            }
        );
        console.log( createResp.json );
        const folderPath = createResp.json.data.result.info.path;
        createdFolders.push(folderPath);
        expect(createResp.json.success).toBe(true);

        // --- 2. Pokus o přesun do accessible (kam guest nemá právo zápisu) ---
        const moveResp = await apiCallGuest(
            folderPath + "?action=move",
            "POST",
            {
                target: "access/accessible"
            }
        );
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);

        // --- 3. Úklid: smaž vytvořenou složku ---
        await apiCallGuest(folderPath + "?action=delete", "POST");

    });


    test("move fails if target parent does not allow subfolders", async () => {

        // --- 1. Vytvoř cílovou složku, která NEumožňuje podsložky ---
        const createTarget = await apiCallGuest(
            "access/restricted_to_guest?action=create",
            "POST",
            {
                name: "Zakazana cilova 6",
                access: {
                    may_have_files: true
                }
            }
        );
        const targetPath = createTarget.json.data.result.info.path;
        createdFolders.push(targetPath);
        expect(createTarget.json.success).toBe(true);

        // --- 2. Vytvoř zdrojovou složku ---
        const createSource = await apiCallGuest(
            "access/restricted_to_guest?action=create",
            "POST",
            {
                name: "Presunout me 6"
            }
        );
        const sourcePath = createSource.json.data.result.info.path;
        createdFolders.push(sourcePath);
        expect(createSource.json.success).toBe(true);

        // --- 3. Pokus o přesun do zakázané cílové složky ---
        const moveResp = await apiCallGuest(
            sourcePath + "?action=move",
            "POST",
            {
                target: targetPath
            }
        );
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);

        // --- 4. Úklid: smaž vytvořené složky ---
        await apiCallGuest(sourcePath + "?action=delete", "POST");
        await apiCallGuest(targetPath + "?action=delete", "POST");

    });


    afterEach(async () => {
        await cleanupFolders(createdFolders);
        createdFolders.length = 0;
    });

});
