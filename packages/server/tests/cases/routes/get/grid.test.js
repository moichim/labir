import { describe, test, expect } from "vitest";
import { apiCall } from "../../utils/apiCall";
import { apiCallRoot } from "../../utils/apiCallRoot";
import { apiCallGuest } from "../../utils/apiCallGuest";

const testGridDataStructure = (grid, numFiles) => {
    // Presence of main data structures
    expect(grid).not.toBeUndefined();
    expect(grid.folder).not.toBeUndefined();
    expect(grid.all_subdirectories).not.toBeUndefined();
    expect(grid.header).not.toBeUndefined();
    expect(grid.groups).not.toBeUndefined();
    expect(grid.tags).not.toBeUndefined();
    expect(grid.count).not.toBeUndefined();
    expect(grid.time).not.toBeUndefined();

    // Count
    expect(grid.count.displayed).toBe(numFiles);
    expect(grid.count.omitted).toBe(0);
    expect(grid.count.total).toBe(numFiles);

    // Time
    expect(grid.time.selection).not.toBeUndefined();
    expect(grid.time.selection.from).not.toBeUndefined();
    expect(grid.time.selection.to).not.toBeUndefined();
    expect(grid.time.files).not.toBeUndefined();
    expect(grid.time.files.from).not.toBeUndefined();
    expect(grid.time.files.to).not.toBeUndefined();

    // Header keys need to correspond to rows keys
    const headerKeys = Object.keys(grid.header);
    Object.entries(grid.groups).forEach(([key, group]) => {
        expect(group).toHaveProperty('label');
        expect(group).toHaveProperty('from');
        expect(group).toHaveProperty('to');
        expect(group).toHaveProperty('folders');

        // The number of keys need to correspond
        expect(Object.keys(group.folders).length).toEqual(headerKeys.length);

        // Check that each row has the same keys as the header
        Object.entries(group.folders).forEach(([folderKey, folder]) => {

            expect(headerKeys).toContain(folderKey);

        });
    });

}

const testGridInsideFolder = async (folderPath, numFiles) => {

    const response = await apiCall(folderPath);

    expect(response.json.success).toBe(true);

    const grid = response.json.data.grid;

    testGridDataStructure(grid, numFiles);

}



describe("GET action=grid", () => {

    test("data structure", async () => {

        await testGridInsideFolder("http://localhost:8080/manetin?action=grid", 76);

        await testGridInsideFolder("http://localhost:8080/zihle?action=grid", 115);

    });

    test("grid with only one file", async () => {

        await testGridInsideFolder("http://localhost:8080/specials?action=grid", 1);

    });

    test("grid with only no files", async () => {

        await testGridInsideFolder("http://localhost:8080/specials/user?action=grid", 0);

    });

    test("grid of a restricted folder needs to be restricted", async () => {

        const response = await apiCall("http://localhost:8080/access/restricted?action=grid");

        expect(response.json.success).toBe(false);
        expect(response.json.code).toBe(401);

    });

    test("grid of a nested restricted folder needs to be restricted", async () => {

        const response = await apiCall("http://localhost:8080/access/restricted/accessible?action=grid");

        expect(response.json.success).toBe(false);
        expect(response.json.code).toBe(401);

    });

    test("grid of a accessible folder should return 1 folder for anonymous when the restricted is restricted", async () => {
        const response = await apiCall("http://localhost:8080/access/accessible?action=grid");
        expect(response.json.success).toBe(true);
        const grid = response.json.data.grid;
        expect(Object.keys(grid.header).length).toBe(1);
    });

    test("grid of a restricted folder should be accessible to root", async () => {

        const response = await apiCallRoot("access/restricted?action=grid");

        testGridDataStructure(response.json.data.grid, 2);

    });

    test("grid of a nested restricted folder should be accessible to root", async () => {

        const response = await apiCallRoot("access/restricted/accessible?action=grid");

        testGridDataStructure(response.json.data.grid, 0);

    });

    test("grid of a nested restricted folder should be accessible to guest", async () => {

        const response = await apiCallGuest("access/restricted_to_guest?action=grid");

        testGridDataStructure(response.json.data.grid, 2);

    });

    test("only two selected folders", async () => {

        const response = await apiCallRoot("zihle?action=grid&folders=barevne-krabicky,trava");

        expect(response.json.success).toBe(true);

        const grid = response.json.data.grid;

        // Check that the grid contains only two folders
        expect(Object.keys(grid.header).length).toBe(2);

        testGridDataStructure(grid, 22);

    });

    test("only three selected folders", async () => {

        const response = await apiCallRoot("zihle?action=grid&folders=barevne-krabicky,trava, deska");

        expect(response.json.success).toBe(true);

        const grid = response.json.data.grid;

        // Check that the grid contains only two folders
        expect(Object.keys(grid.header).length).toBe(3);

        testGridDataStructure(grid, 30);

    });


});