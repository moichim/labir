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

    test("update tags in folder (overwrite, not merge)", async () => {
        // 1. Vytvoř složku s původními tagy
        const createUrl = "access/restricted_to_guest?action=create";
        const originalTags = {
            tag1: { name: "Původní tag", color: "#111" },
            tag2: { name: "Druhý tag", description: "Popis" }
        };
        const createResponse = await apiCallGuest(createUrl, "POST", { name: "Složka pro update tagů", tags: originalTags });
        expect(createResponse.json.success).toBe(true);
        const folderPath = createResponse.json.data.result.info.path;

        // 2. Proveď update s novými tagy
        const updateUrl = folderPath + "?action=update";
        const newTags = {
            tag3: { name: "Nový tag", color: "#222" },
            tag4: { name: "Další nový tag" }
        };
        const updateResponse = await apiCallGuest(updateUrl, "POST", { tags: newTags });
        expect(updateResponse.json.success).toBe(true);
        // Ověř, že own_tags obsahuje pouze nové tagy
        expect(updateResponse.json.data.result.info.own_tags).toMatchObject(newTags);
        expect(Object.keys(updateResponse.json.data.result.info.own_tags)).toHaveLength(2);
        expect(updateResponse.json.data.result.info.own_tags.tag1).toBeUndefined();

        // 3. Ověř po GET, že staré tagy zmizely a nové zůstaly
        const infoResponse = await apiCallGuest(folderPath, "GET");
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.own_tags).toMatchObject(newTags);
        expect(Object.keys(infoResponse.json.data.folder.own_tags)).toHaveLength(2);
        expect(infoResponse.json.data.folder.own_tags.tag1).toBeUndefined();

        // 4. Smazání složky po testu
        const deleteUrl = folderPath + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(folderPath);
    });

    test("update tags in folder with mergeTags=true (merge old and new tags)", async () => {
        // 1. Vytvoř složku s původními tagy
        const createUrl = "access/restricted_to_guest?action=create";
        const originalTags = {
            tag1: { name: "Původní tag", color: "#111" },
            tag2: { name: "Druhý tag", description: "Popis" }
        };
        const createResponse = await apiCallGuest(createUrl, "POST", { name: "Složka pro merge tagů", tags: originalTags });
        expect(createResponse.json.success).toBe(true);
        const folderPath = createResponse.json.data.result.info.path;

        // 2. Proveď update s novými tagy a mergeTags=true
        const updateUrl = folderPath + "?action=update";
        const newTags = {
            tag2: { name: "Druhý tag - změněný", color: "#222" }, // přepíše původní tag2
            tag3: { name: "Nový tag" }
        };
        const updateResponse = await apiCallGuest(updateUrl, "POST", { tags: newTags, mergeTags: true });
        expect(updateResponse.json.success).toBe(true);
        // Výsledek by měl obsahovat tag1 (původní), tag2 (nový) a tag3 (nový)
        const expectedTags = {
            tag1: { name: "Původní tag", color: "#111" },
            tag2: { name: "Druhý tag - změněný", color: "#222" },
            tag3: { name: "Nový tag" }
        };
        expect(updateResponse.json.data.result.info.own_tags).toMatchObject(expectedTags);
        expect(Object.keys(updateResponse.json.data.result.info.own_tags)).toHaveLength(3);

        // 3. Ověř po GET, že merge zůstal
        const infoResponse = await apiCallGuest(folderPath, "GET");
        expect(infoResponse.json.success).toBe(true);
        expect(infoResponse.json.data.folder.own_tags).toMatchObject(expectedTags);
        expect(Object.keys(infoResponse.json.data.folder.own_tags)).toHaveLength(3);

        // 4. Smazání složky po testu
        const deleteUrl = folderPath + "?action=delete";
        const deleteResponse = await apiCallGuest(deleteUrl, "POST");
        expect(deleteResponse.json.success).toBe(true);
        expect(deleteResponse.json.data.result.deleted).toBe(folderPath);
    });
});
