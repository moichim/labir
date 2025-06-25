import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";

/**
 * Získá apiRoot souboru podle složky a indexu ve výpisu souborů
 * @param {string} folder - cesta ke složce (např. "access/restricted_to_guest/accessible")
 * @param {number} index - index souboru ve složce (výchozí 0)
 */
const getFileApiRoot = async (folder, index = 0) => {
    const list = await apiCallGuest(`${folder}?action=files`, "GET");
    expect(list.json.success).toBe(true);
    expect(list.json.data).toBeDefined();
    expect(list.json.data.files).toBeDefined();
    expect(Array.isArray(list.json.data.files)).toBe(true);
    expect(list.json.data.files.length).toBeGreaterThan(index);
    const fileFromList = list.json.data.files[index];
    expect(fileFromList).toBeDefined();
    expect(fileFromList.apiRoot).toBeDefined();
    return fileFromList.apiRoot;
}

describe("GET action=file", () => {

    test("obtaining apiRoot from files listing", async () => {

        const apiRoot = await getFileApiRoot("access/restricted_to_guest/accessible");

        const fileRequest = await apiCallGuest(apiRoot + "&action=file", "GET");

        expect(fileRequest.json.success).toBe(true);
        expect(fileRequest.json.data).toBeDefined();
        expect(fileRequest.json.data.file).toBeDefined();
        expect(fileRequest.json.data.file).toHaveProperty("entity", "file");
        expect(fileRequest.json.data.file).toHaveProperty("apiRoot");

    });

    test( "getting a nonexisting gile should fail", async () => {

        const apiRoot = await getFileApiRoot("access/restricted_to_guest/accessible");

        // Try to get a non-existing file
        const nonExistingFileRequest = await apiCallGuest(apiRoot + "nonexistingfile&action=file", "GET");

        expect(nonExistingFileRequest.json.success).toBe(false);
        expect(nonExistingFileRequest.json.error).toBeDefined();
        expect(nonExistingFileRequest.json.code).toBe(404);

    } );

    test( "geting a file from restricted folder should fail", async () => {

        await expect( getFileApiRoot("access/restricted/restricted") ).rejects.toThrow();

    } );

    test( "getting a file from non existing folder should fail", async () => {

        await expect( getFileApiRoot("access/restricted_to_guest/non_existing") ).rejects.toThrow();

    } );

});