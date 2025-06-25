import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";

describe("POST action=move", () => {
    test("move folder to another parent", async () => {
        // 1. Vytvoř cílovou složku a zdrojovou složku
        const targetParent = "access/restricted_to_guest";
        const createTarget = await apiCallGuest(targetParent + "?action=create", "POST", { name: "Cilova slozka" });
        console.log( createTarget.json );
        expect(createTarget.json.success).toBe(true);
        const targetPath = createTarget.json.data.result.info.path;

        const createSource = await apiCallGuest(targetPath + "?action=create", "POST", { name: "Presouvana slozka", description: "Popis", meta: { foo: "bar" } });
        expect(createSource.json.success).toBe(true);
        const sourcePath = createSource.json.data.result.info.path;

        // 2. Vytvoř další cílovou složku
        const createNewTarget = await apiCallGuest(targetParent + "?action=create", "POST", { name: "Nova cilova" });
        expect(createNewTarget.json.success).toBe(true);
        const newTargetPath = createNewTarget.json.data.result.info.path;

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

        // 4. Ověř, že složka je na novém místě
        const infoResponse = await apiCallGuest(expectedNewPath, "GET");
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.path).toBe(expectedNewPath);
        expect(infoResponse.json.data.folder.slug).toBe(webalized);
        expect(infoResponse.json.data.folder.name).toBe("Presouvana slozka");
        expect(infoResponse.json.data.folder.description).toBe("Popis");
        expect(infoResponse.json.data.folder.data.foo).toBe("bar");

        // 5. Úklid
        await apiCallGuest(newTargetPath + "/presouvana-slozka?action=delete", "POST");
        await apiCallGuest(targetPath + "?action=delete", "POST");
        await apiCallGuest(newTargetPath + "?action=delete", "POST");
    });

    test("move fails if target is missing in body", async () => {
        // Vytvoř složku
        const createResp = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Pro test target missing" });
        expect(createResp.json.success).toBe(true);
        const folderPath = createResp.json.data.result.info.path;
        // Zkus přesun bez target
        const moveResp = await apiCallGuest(folderPath + "?action=move", "POST", {});
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(400);
        // Úklid
        await apiCallGuest(folderPath + "?action=delete", "POST");
    });

    test("move fails if source folder does not exist", async () => {
        const moveResp = await apiCallGuest("neexistujici-slozka?action=move", "POST", { target: "access/restricted_to_guest" });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);
    });

    test("move fails if target folder already exists", async () => {
        // 1. Vytvoř cílovou složku
        const createTargetParent = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Cilova" });
        expect(createTargetParent.json.success).toBe(true);
        const targetParentPath = createTargetParent.json.data.result.info.path;
        // 2. V cíli vytvoř podsložku Target
        const createTargetSub = await apiCallGuest(targetParentPath + "?action=create", "POST", { name: "Target" });
        expect(createTargetSub.json.success).toBe(true);
        const targetSubPath = createTargetSub.json.data.result.info.path;
        // 3. Někde jinde vytvoř další složku Target
        const createOtherParent = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Jinde" });
        expect(createOtherParent.json.success).toBe(true);
        const otherParentPath = createOtherParent.json.data.result.info.path;
        const createOtherTarget = await apiCallGuest(otherParentPath + "?action=create", "POST", { name: "Target" });
        expect(createOtherTarget.json.success).toBe(true);
        const otherTargetPath = createOtherTarget.json.data.result.info.path;
        // 4. Pokus o přesun Target do Cíl/Target (kde už existuje)
        const moveResp = await apiCallGuest(otherTargetPath + "?action=move", "POST", { target: targetParentPath });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(409);
        // 5. Úklid
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
        // Pokus o přesun do restricted (kam guest nemá právo zápisu)
        const moveResp = await apiCallGuest(folderPath + "?action=move", "POST", { target: "access/restricted" });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);
        // Úklid
        await apiCallGuest(folderPath + "?action=delete", "POST");
    });


    test("move fails if target parent is public, but unaccessible to guest", async () => {
        // Vytvoř složku, kterou bude guest přesouvat
        const createResp = await apiCallGuest("access/restricted_to_guest?action=create", "POST", { name: "Presunout me" });
        expect(createResp.json.success).toBe(true);
        const folderPath = createResp.json.data.result.info.path;
        // Pokus o přesun do accessible (kam guest nemá právo zápisu)
        const moveResp = await apiCallGuest(folderPath + "?action=move", "POST", { target: "access/accessible" });
        expect(moveResp.json.success).toBe(false);
        expect(moveResp.json.code).toBe(403);
        // Úklid
        await apiCallGuest(folderPath + "?action=delete", "POST");
    });
});
