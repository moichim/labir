import { describe, test, expect, afterAll } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { cleanupFolders } from "../../utils/cleanupFolders";

describe("POST action=move", () => {

    const createdFolders = [];

    test("move folder to another parent", async () => {
        // 1. Vytvoř cílovou složku a zdrojovou složku
        const targetParent = "access/restricted_to_guest";
        const createTarget = await apiCallGuest(targetParent + "?action=create", "POST", { name: "Cilova slozka", access: { may_have_files: false } });
        expect(createTarget.json.success).toBe(true);
        const targetPath = createTarget.json.data.result.info.path;
        createdFolders.push(targetPath);

        const createSource = await apiCallGuest(targetPath + "?action=create", "POST", { name: "Presouvana slozka", description: "Popis", meta: { foo: "bar" } });
        expect(createSource.json.success).toBe(true);
        const sourcePath = createSource.json.data.result.info.path;
        createdFolders.push(sourcePath);

        // 2. Vytvoř další cílovou složku
        const createNewTarget = await apiCallGuest(targetParent + "?action=create", "POST", { name: "Nova cilova", access: { may_have_files: false } });
        expect(createNewTarget.json.success).toBe(true);
        const newTargetPath = createNewTarget.json.data.result.info.path;
        createdFolders.push(newTargetPath);

        // 3. Proveď přesun
        const moveUrl = sourcePath + "?action=move";
        const moveBody = { target: newTargetPath };
        const moveResponse = await apiCallGuest(moveUrl, "POST", moveBody);
        expect(moveResponse.json.success).toBe(true);
        expect(moveResponse.json.data.result.moved).toBe(true);
        expect(moveResponse.json.data.result.oldSlug).toBe(sourcePath);
        // Ověř správnou novou cestu podle webalizace
        const webalized = "presouvana-slozka"; // Strings::webalize("Presouvana slozka")
        const expectedNewPath = newTargetPath + "/" + webalized;
        expect(moveResponse.json.data.result.info.path).toBe(expectedNewPath);
        expect(moveResponse.json.data.result.info.slug).toBe(webalized);
        expect(moveResponse.json.data.result.info.name).toBe("Presouvana slozka");
        expect(moveResponse.json.data.result.info.description).toBe("Popis");
        expect(moveResponse.json.data.result.info.data.foo).toBe("bar");
        createdFolders.push(expectedNewPath);

        // 4. Ověř, že složka je na novém místě
        const infoResponse = await apiCallGuest(expectedNewPath, "GET");
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.path).toBe(expectedNewPath);
        expect(infoResponse.json.data.folder.slug).toBe(webalized);
        expect(infoResponse.json.data.folder.name).toBe("Presouvana slozka");
        expect(infoResponse.json.data.folder.description).toBe("Popis");
        expect(infoResponse.json.data.folder.data.foo).toBe("bar");
        // Explicitní úklid
        await apiCallGuest(expectedNewPath + "?action=delete", "POST");
        await apiCallGuest(targetPath + "?action=delete", "POST");
        await apiCallGuest(newTargetPath + "?action=delete", "POST");
    });

    test("move fails if target is missing in body", async () => {
        // Vytvoř složku
        const createResp = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Pro test target missing" });
        expect(createResp.json.success).toBe(true);
        const folderPath = createResp.json.data.result.info.path;
        createdFolders.push(folderPath);
        // Zkus přesun bez target
        const moveResp = await apiCallGuest(folderPath + "?action=move", "POST", {});
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(400);
        // Explicitní úklid
        await apiCallGuest(folderPath + "?action=delete", "POST");
    });

    test("move fails if source folder does not exist", async () => {
        const moveResp = await apiCallGuest("neexistujici-slozka?action=move", "POST", { target: "access/restricted_to_guest" });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(404);
    });

    test("move fails if target folder already exists", async () => {
        // 1. Vytvoř cílovou složku
        const createTargetParent = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Cilova", access: { may_have_files: false } });
        expect(createTargetParent.json.success).toBe(true);
        const targetParentPath = createTargetParent.json.data.result.info.path;
        createdFolders.push(targetParentPath);
        // 2. V cíli vytvoř podsložku Target
        const createTargetSub = await apiCallGuest(targetParentPath + "?action=create", "POST", { name: "Target", access: { may_have_files: false } });
        expect(createTargetSub.json.success).toBe(true);
        const targetSubPath = createTargetSub.json.data.result.info.path;
        createdFolders.push(targetSubPath);
        // 3. Někde jinde vytvoř další složku Target
        const createOtherParent = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Jinde", access: { may_have_files: false } });
        expect(createOtherParent.json.success).toBe(true);
        const otherParentPath = createOtherParent.json.data.result.info.path;
        createdFolders.push(otherParentPath);
        const createOtherTarget = await apiCallGuest(otherParentPath + "?action=create", "POST", { name: "Target", access: { may_have_files: false } });
        expect(createOtherTarget.json.success).toBe(true);
        const otherTargetPath = createOtherTarget.json.data.result.info.path;
        createdFolders.push(otherTargetPath);
        // 4. Pokus o přesun Target do Cíl/Target (kde už existuje)
        const moveResp = await apiCallGuest(otherTargetPath + "?action=move", "POST", { target: targetParentPath });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);
        // Explicitní úklid
        await apiCallGuest(otherTargetPath + "?action=delete", "POST");
        await apiCallGuest(targetSubPath + "?action=delete", "POST");
        await apiCallGuest(targetParentPath + "?action=delete", "POST");
        await apiCallGuest(otherParentPath + "?action=delete", "POST");
    });

    test("move fails if target parent is not writable for guest", async () => {
        // Vytvoř složku, kterou bude guest přesouvat
        const createResp = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Presunout me" });
        expect(createResp.json.success).toBe(true);
        const folderPath = createResp.json.data.result.info.path;
        createdFolders.push(folderPath);
        // Pokus o přesun do restricted (kam guest nemá právo zápisu)
        const moveResp = await apiCallGuest(folderPath + "?action=move", "POST", { target: "access/restricted" });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);
        // Explicitní úklid
        await apiCallGuest(folderPath + "?action=delete", "POST");
    });

    test("move fails if target parent is public, but unaccessible to guest", async () => {
        // Vytvoř složku, kterou bude guest přesouvat
        const createResp = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Presunout me" });
        expect(createResp.json.success).toBe(true);
        const folderPath = createResp.json.data.result.info.path;
        createdFolders.push(folderPath);
        // Pokus o přesun do accessible (kam guest nemá právo zápisu)
        const moveResp = await apiCallGuest(folderPath + "?action=move", "POST", { target: "access/accessible" });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);
        // Explicitní úklid
        await apiCallGuest(folderPath + "?action=delete", "POST");
    });

    test("move fails if target parent does not allow subfolders", async () => {
        // Vytvoř cílovou složku, která NEumožňuje podsložky
        const createTarget = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Zakazana cilova", access: { may_have_files: false } });
        console.log( createTarget.json );
        expect(createTarget.json.success).toBe(true);
        const targetPath = createTarget.json.data.result.info.path;
        createdFolders.push(targetPath);
        // Vytvoř zdrojovou složku
        const createSource = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Presunout me" });
        expect(createSource.json.success).toBe(true);
        const sourcePath = createSource.json.data.result.info.path;
        createdFolders.push(sourcePath);
        // Pokus o přesun do zakázané cílové složky
        const moveResp = await apiCallGuest(sourcePath + "?action=move", "POST", { target: targetPath });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);
        // Explicitní úklid
        await apiCallGuest(sourcePath + "?action=delete", "POST");
        await apiCallGuest(targetPath + "?action=delete", "POST");
    });

    afterAll(async () => {
        await cleanupFolders(createdFolders);
    });
});
