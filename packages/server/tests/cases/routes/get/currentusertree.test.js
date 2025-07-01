/**
 * Testy pro endpoint GET action=currentusertree
 * --------------------------------------------------
 * Ověřuje:
 *  - přístupová práva (nepřihlášený, guest, root)
 *  - správnost vrácených dat (tree) pro různé uživatele
 *
 * Struktura testů:
 * 1. Přístupová práva (401 pro nepřihlášeného, 200 pro guest/root)
 * 2. Ověření, že guest vidí pouze složky dle _users.json (tj. /access/restricted_to_guest)
 * 3. Ověření, že root vidí celý strom (od /)
 */

import { describe, test, expect } from "vitest";
import { apiCall } from "../../utils/apiCall";
import { apiCallGuest } from "../../utils/apiCallGuest";
import { apiCallRoot } from "../../utils/apiCallRoot";

describe("GET action=currentusertree", () => {

    test("inaccessible to unauthorised", async () => {

        const response = await apiCall("http://localhost:8080/?action=currentusertree");

        expect(response.json.success).toBe(false);
        expect(response.json.code).toBe(401);

    });

    test("accessible to guest", async () => {

        const response = await apiCallGuest("?action=currentusertree", "GET");

        expect(response.json.success).toBe(true);
        expect(response.json.data.tree).not.toBeUndefined();

    });


    test("accessible to root", async () => {

        const response = await apiCallRoot("?action=currentusertree", "GET");

        expect(response.json.success).toBe(true);
        expect(response.json.data.tree).not.toBeUndefined();

    });


    const testTreeItemList = (list) => {
        list.forEach(item => {
            expect(item).toHaveProperty("entity");
            expect(item.entity).toBe("treeitem");
            expect(item).toHaveProperty("name");
            expect(item).toHaveProperty("path");
            expect(item).toHaveProperty("slug");
            expect(item).toHaveProperty("description");
            expect(item).toHaveProperty("lrc_count");
            expect(item).toHaveProperty("may_have_files");
            expect(item).toHaveProperty("metadata");
            expect(item).toHaveProperty("subfolders");

            testTreeItemList(item.subfolders || []);

        });
    };

    // Pomocná rekurzivní funkce pro kontrolu složek ve stromu
    function checkFoldersInTree(expected, tree) {
        expected.forEach(expectedFolder => {
            const found = tree.find(child => child.slug === expectedFolder.name);
            expect(found).toBeDefined();
            if (expectedFolder.children && expectedFolder.children.length > 0) {
                checkFoldersInTree(expectedFolder.children, found.subfolders || []);
            }
        });
    }



    test("guest tree contains pouze /access/restricted_to_guest a jeho podstrom", async () => {
        // Guest má podle _users.json přístup pouze do /access/restricted_to_guest
        const response = await apiCallGuest("?action=currentusertree", "GET");
        expect(response.json.success).toBe(true);
        expect(response.json.data.tree).not.toBeUndefined();
        const tree = response.json.data.tree;
        testTreeItemList(tree);

        // Očekávaná struktura pro guesta
        const expectedGuestFolders = [
            {
                name: "restricted_to_guest",
                children: [
                    { name: "accessible", children: [] },
                    { name: "nazev-nove-slozky", children: [] },
                    { name: "restricted", children: [] }
                ]
            }
        ];
        // Strom pro guesta začíná polem subfolders (root je /access/restricted_to_guest)
        checkFoldersInTree(expectedGuestFolders, tree);
    });



    test("root tree contains / as root and includes všechny složky z www/data", async () => {
        const response = await apiCallRoot("?action=currentusertree", "GET");
        expect(response.json.success).toBe(true);
        expect(response.json.data.tree).not.toBeUndefined();
        const tree = response.json.data.tree;

        testTreeItemList(tree);


        // Hierarchická struktura složek v www/data
        const expectedFolders = [
            {
                name: "",
                children: [
                    {
                        name: "access",
                        children: [
                            {
                                name: "accessible",
                                children: [
                                    { name: "accessible", children: [] },
                                    { name: "restricted", children: [] }
                                ]
                            },
                            {
                                name: "restricted",
                                children: [
                                    { name: "accessible", children: [] },
                                    { name: "restricted", children: [] }
                                ]
                            },
                            {
                                name: "restricted_to_guest",
                                children: [
                                    { name: "accessible", children: [] },
                                    { name: "nazev-nove-slozky", children: [] },
                                    { name: "restricted", children: [] }
                                ]
                            }
                        ]
                    },
                    { name: "another-folder", children: [] },
                    {
                        name: "manetin", children: [
                            { name: "les", children: [] },
                            { name: "naves", children: [] },
                            { name: "optherm", children: [] }
                        ]
                    },
                    { name: "some_folder", children: [] },
                    {
                        name: "specials", children: [
                            { name: "restricted", children: [] },
                            { name: "user", children: [] }
                        ]
                    },
                    { name: "zihle", children: [] }
                ]
            }
        ];

        // Ověř, že všechny složky z expectedFolders jsou ve stromu
        checkFoldersInTree(expectedFolders, tree);

    });

});