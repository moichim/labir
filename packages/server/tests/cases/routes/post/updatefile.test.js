import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest.js";
import { apiCallRoot } from "../../utils/apiCallRoot.js";
import { getFileApiRoot } from "../get/file.test.js";

describe("POST action=updatefile", () => {

    test("should update label, description, tags and analyses", async () => {
        // Získání apiRoot a rozparsování parametrů
        const folder = "access/restricted_to_guest/accessible";
        const index = 0;
        const apiRoot = await getFileApiRoot(folder, index);
        // Získání path a file z apiRoot
        const url = new URL(apiRoot, "http://localhost:8080");
        const path = url.pathname.replace(/^\//, "");
        const file = url.searchParams.get("file");
        expect(path).toBeDefined();
        expect(file).toBeDefined();

        // Vygeneruj náhodné hodnoty
        const random = Math.random().toString(36).substring(2, 10);
        const label = `Test label ${random}`;
        const description = `Test description ${random}`;
        const tag1 = `testTag1_${random}`;
        const tag2 = `testTag2_${random}`;
        const analysis = `analysis_${random}`;

        // Proveď update
        const updateBody = {
            label,
            description,
            addTags: [tag1, tag2],
            removeTags: [],
            addAnalyses: [analysis],
            removeAnalyses: []
        };
        const updateResponse = await apiCallGuest(
            `${path}?action=updatefile&file=${encodeURIComponent(file)}`,
            "POST",
            updateBody
        );
        expect(updateResponse.json.success).toBe(true);
        expect(updateResponse.json.data).toBeDefined();
        expect(updateResponse.json.data.file).toBeDefined();
        expect(updateResponse.json.data.file.label).toBe(label);
        expect(updateResponse.json.data.file.description).toBe(description);
        expect(updateResponse.json.data.file.tags).toEqual(expect.arrayContaining([tag1, tag2]));
        expect(updateResponse.json.data.file.analyses).toEqual(expect.arrayContaining([analysis]));
    });
    
    test("should remove tags and analyses", async () => {
        // Získání apiRoot a rozparsování parametrů
        const folder = "access/restricted_to_guest/accessible";
        const index = 0;
        const apiRoot = await getFileApiRoot(folder, index);
        const url = new URL(apiRoot, "http://localhost:8080");
        const path = url.pathname.replace(/^\//, "");
        const file = url.searchParams.get("file");
        expect(path).toBeDefined();
        expect(file).toBeDefined();

        // Vygeneruj náhodné hodnoty
        const random = Math.random().toString(36).substring(2, 10);
        const tag1 = `removeTag1_${random}`;
        const tag2 = `removeTag2_${random}`;
        const analysis1 = `removeAnalysis1_${random}`;
        const analysis2 = `removeAnalysis2_${random}`;

        // Nejprve přidej tagy a analýzy
        const addBody = {
            addTags: [tag1, tag2],
            addAnalyses: [analysis1, analysis2],
        };
        const addResponse = await apiCallGuest(
            `${path}?action=updatefile&file=${encodeURIComponent(file)}`,
            "POST",
            addBody
        );
        expect(addResponse.json.success).toBe(true);
        expect(addResponse.json.data.file.tags).toEqual(expect.arrayContaining([tag1, tag2]));
        expect(addResponse.json.data.file.analyses).toEqual(expect.arrayContaining([analysis1, analysis2]));

        // Nyní odeber tag1 a analysis1
        const removeBody = {
            removeTags: [tag1],
            removeAnalyses: [analysis1],
        };
        const removeResponse = await apiCallGuest(
            `${path}?action=updatefile&file=${encodeURIComponent(file)}`,
            "POST",
            removeBody
        );
        expect(removeResponse.json.success).toBe(true);
        expect(removeResponse.json.data.file.tags).not.toContain(tag1);
        expect(removeResponse.json.data.file.tags).toContain(tag2);
        expect(removeResponse.json.data.file.analyses).not.toContain(analysis1);
        expect(removeResponse.json.data.file.analyses).toContain(analysis2);
    });
    
    test("should sanitize dangerous strings in label, description, tags and analyses", async () => {
        const folder = "access/restricted_to_guest/accessible";
        const index = 0;
        const apiRoot = await getFileApiRoot(folder, index);
        const url = new URL(apiRoot, "http://localhost:8080");
        const path = url.pathname.replace(/^\//, "");
        const file = url.searchParams.get("file");
        expect(path).toBeDefined();
        expect(file).toBeDefined();

        // Nebezpečné hodnoty jako objekt (bez on...=)
        const dangerous = {
            script: {
                submit: 'Bezpečný text! <script>alert(1)</script>',
                danger: '<script>'
            },
            php: {
                submit: '<?php echo 1; ?> Toto by mělo zůstat.',
                danger: '<?php'
            },
            js: {
                submit: 'Tohle se nesmí;eval(alert(1))',
                danger: 'eval('
            },
            newline: {
                submit: "\n\r\tFrantišek je borec",
                danger: "\n"
            },
            img: {
                submit: '<img src=x><br /> Toto je povolený tag.',
                danger: '<img'
            },
            iframe: {
                submit: "<iframe src='javascript:alert(1)'>Uvnitř HTML něco je</iframe>",
                danger: '<iframe'
            },
            sqli: {
                submit: "'; DROP TABLE users; -- Toto by mělo projít",
                danger: 'DROP TABLE'
            },
            a: {
                submit: '<a href=\"#\">odkaz</a> A toto zůstane',
                danger: '<a'
            },
            p: {
                submit: '<p>odstavec</p> Mimo odstavec.',
                danger: '<p'
            },
            div: {
                submit: '<div>obsah</div> Mimo obsah.',
                danger: '<div'
            },
            nested: {
                submit: `
                
                Toto je zalomený text
                `,
                danger: "\n"
            }
        };
        const updateBody = {
            label: "Toto zůstane" + dangerous.script.submit + dangerous.a.submit + dangerous.nested.submit,
            description: "Popiska zůstane" +dangerous.php.submit + dangerous.p.submit,
            addTags: [dangerous.js.submit, dangerous.div.submit],
            addAnalyses: [dangerous.newline.submit, dangerous.img.submit],
        };
        const updateResponse = await apiCallGuest(
            `${path}?action=updatefile&file=${encodeURIComponent(file)}`,
            "POST",
            updateBody
        );
        expect(updateResponse.json.success).toBe(true);
        const fileData = updateResponse.json.data.file;
        // Ověř, že žádný výstup neobsahuje .danger hodnoty
        for (const val of [fileData.label, fileData.description, ...fileData.tags, ...fileData.analyses]) {
            for (const key in dangerous) {
                expect(val).not.toContain(dangerous[key].danger);

                // Ověř, že neobsahuje koncové tagy
                if (["a", "p", "div", "img", "iframe", "script"].includes(key)) {
                    expect(val).not.toMatch(new RegExp(`</?${key}[^>]*>`, 'i'));
                }
            }
            // Ověř, že neobsahuje HTML tagy (vše mezi <...>)
            expect(val).not.toMatch(/<[^>]+>/);
            // Ověř, že neobsahuje PHP tagy
            expect(val).not.toMatch(/<\?php/);
            // Ověř, že neobsahuje uvozovky, zpětná lomítka, apod.
            expect(val).not.toMatch(/["'`\\]/);
            // Ověř, že neobsahuje zalomení řádků, tabulátory apod.
            expect(val).not.toMatch(/[\n\r\t]/);

            
        }
    });
    
    test("should reject input containing JS event handler attributes (on...=)", async () => {
        const folder = "access/restricted_to_guest/accessible";
        const index = 0;
        const apiRoot = await getFileApiRoot(folder, index);
        const url = new URL(apiRoot, "http://localhost:8080");
        const path = url.pathname.replace(/^\//, "");
        const file = url.searchParams.get("file");
        expect(path).toBeDefined();
        expect(file).toBeDefined();

        // Testovací vstup s onmouseover=
        const updateBody = {
            label: '"onmouseover=alert(1)"',
        };
        const updateResponse = await apiCallGuest(
            `${path}?action=updatefile&file=${encodeURIComponent(file)}`,
            "POST",
            updateBody
        );
        expect(updateResponse.json.success).toBe(false);
        expect(updateResponse.json.message).toMatch(/event handler|on\.\.\./i);
    });

    test("should collapse multiple spaces into one", async () => {
        const folder = "access/restricted_to_guest/accessible";
        const index = 0;
        const apiRoot = await getFileApiRoot(folder, index);
        const url = new URL(apiRoot, "http://localhost:8080");
        const path = url.pathname.replace(/^\//, "");
        const file = url.searchParams.get("file");
        expect(path).toBeDefined();
        expect(file).toBeDefined();

        // Vstup s více mezerami, tabulátory, novými řádky
        const input = "A    B\t\tC  D\n\nE   F   G";
        const updateBody = {
            label: input,
        };
        const updateResponse = await apiCallGuest(
            `${path}?action=updatefile&file=${encodeURIComponent(file)}`,
            "POST",
            updateBody
        );
        expect(updateResponse.json.success).toBe(true);
        const fileData = updateResponse.json.data.file;
        // Výsledek by měl být bez zalomení řádků a s jednou mezerou mezi slovy
        expect(fileData.label).toBe("A B C D E F G");
    });

    test("root user can add and remove metadata in access/accessible/accessible", async () => {
        // Získání apiRoot a rozparsování parametrů
        const folder = "access/accessible/accessible";
        const index = 0;
        // Získání apiRoot pro první soubor
        const list = await apiCallRoot(`${folder}?action=files`, "GET");
        expect(list.json.success).toBe(true);
        expect(list.json.data.files.length).toBeGreaterThan(0);
        const fileFromList = list.json.data.files[0];
        expect(fileFromList).toBeDefined();
        expect(fileFromList.apiRoot).toBeDefined();
        const url = new URL(fileFromList.apiRoot, "http://localhost:8080");
        const path = url.pathname.replace(/^\//, "");
        const file = url.searchParams.get("file");
        expect(path).toBeDefined();
        expect(file).toBeDefined();

        // Randomizované hodnoty
        const random = Math.random().toString(36).substring(2, 10);
        const label = `Root label ${random}`;
        const description = `Root desc ${random}`;
        const tag1 = `rootTag1_${random}`;
        const tag2 = `rootTag2_${random}`;
        const analysis = `rootAnalysis_${random}`;

        // Přidání metadat
        const addBody = {
            label,
            description,
            addTags: [tag1, tag2],
            addAnalyses: [analysis]
        };
        const addResponse = await apiCallRoot(
            `${path}?action=updatefile&file=${encodeURIComponent(file)}`,
            "POST",
            addBody
        );
        expect(addResponse.json.success).toBe(true);
        expect(addResponse.json.data.file.label).toBe(label);
        expect(addResponse.json.data.file.description).toBe(description);
        expect(addResponse.json.data.file.tags).toEqual(expect.arrayContaining([tag1, tag2]));
        expect(addResponse.json.data.file.analyses).toEqual(expect.arrayContaining([analysis]));

        // Odebrání metadat
        const removeBody = {
            removeTags: [tag1],
            removeAnalyses: [analysis]
        };
        const removeResponse = await apiCallRoot(
            `${path}?action=updatefile&file=${encodeURIComponent(file)}`,
            "POST",
            removeBody
        );
        expect(removeResponse.json.success).toBe(true);
        expect(removeResponse.json.data.file.tags).not.toContain(tag1);
        expect(removeResponse.json.data.file.analyses).not.toContain(analysis);
    });
});