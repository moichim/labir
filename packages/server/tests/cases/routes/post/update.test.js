import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";

describe("POST action=update", () => {
    test("update name, description, meta in folder", async () => {
        // 1. Vytvoř složku
        const createUrl = "access/restricted_to_guest?action=create";
        const original = { name: "Složka pro update", description: "Původní popis", meta: { foo: "bar" } };
        const createResponse = await apiCallGuest(createUrl, "POST", original);
        expect(createResponse.json.success).toBe(true);
        const folderPath = createResponse.json.data.result.info.path;

        // 2. Proveď update
        const updateUrl = folderPath + "?action=update";
        const updated = { name: "Nový název", description: "Nový popis", meta: { foo: "baz", novy: "meta" } };
        const updateResponse = await apiCallGuest(updateUrl, "POST", updated);
        expect(updateResponse.json.success).toBe(true);
        expect(updateResponse.json.data.result.info.name).toBe(updated.name);
        expect(updateResponse.json.data.result.info.description).toBe(updated.description);
        expect(updateResponse.json.data.result.info.data.foo).toBe(updated.meta.foo);
        expect(updateResponse.json.data.result.info.data.novy).toBe(updated.meta.novy);

        // 3. Ověř, že změny zůstaly i po GET
        const infoResponse = await apiCallGuest(folderPath, "GET");
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.name).toBe(updated.name);
        expect(infoResponse.json.data.folder.description).toBe(updated.description);
        expect(infoResponse.json.data.folder.data.foo).toBe(updated.meta.foo);
        expect(infoResponse.json.data.folder.data.novy).toBe(updated.meta.novy);

        // 4. Smazání složky po testu
        const deleteUrl = folderPath + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(folderPath);
    });

    test("update & move folder: name, description, meta, and verify after move", async () => {
        // 1. Vytvoř složku
        const createUrl = "access/restricted_to_guest?action=create";
        const original = { name: "Složka pro přesun", description: "Původní popis", meta: { foo: "bar", puvodni: "meta" } };
        const createResponse = await apiCallGuest(createUrl, "POST", original);
        expect(createResponse.json.success).toBe(true);
        const oldFolderPath = createResponse.json.data.result.info.path;

        // 2. Proveď update s přesunem (move)
        const updateUrl = oldFolderPath + "?action=update";
        const updated = { name: "Přesunutá složka", description: "Nový popis po přesunu", meta: { foo: "baz", nove: "meta" }, move: true };
        const updateResponse = await apiCallGuest(updateUrl, "POST", updated);
        expect(updateResponse.json.success).toBe(true);
        const newFolderPath = updateResponse.json.data.result.info.path;
        expect(newFolderPath).not.toBe(oldFolderPath);
        expect(updateResponse.json.data.result.info.name).toBe(updated.name);
        expect(updateResponse.json.data.result.info.description).toBe(updated.description);
        expect(updateResponse.json.data.result.info.data.foo).toBe(updated.meta.foo);
        expect(updateResponse.json.data.result.info.data.nove).toBe(updated.meta.nove);
        // původní meta by měla zůstat
        expect(updateResponse.json.data.result.info.data.puvodni).toBe(original.meta.puvodni);

        // 3. Ověř, že změny zůstaly i po GET na nové cestě
        const infoResponse = await apiCallGuest(newFolderPath, "GET");
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.name).toBe(updated.name);
        expect(infoResponse.json.data.folder.description).toBe(updated.description);
        expect(infoResponse.json.data.folder.data.foo).toBe(updated.meta.foo);
        expect(infoResponse.json.data.folder.data.nove).toBe(updated.meta.nove);
        expect(infoResponse.json.data.folder.data.puvodni).toBe(original.meta.puvodni);

        // 4. Smazání nové složky po testu
        const deleteUrl = newFolderPath + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(newFolderPath);
    });
});
