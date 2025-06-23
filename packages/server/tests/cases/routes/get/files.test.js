import { describe, expect, test } from 'vitest';

// Základní test pro /get/files

describe('GET action=files', () => {
    test('vrací soubory a metadata složky', async () => {
        const request = await fetch('http://localhost:8080/zihle/barevne-krabicky?action=files');
        const json = await request.json();

        expect(request.status).toBe(200);
        expect(json.success).toBe(true);
        expect(json.data).toBeDefined();
        expect(json.data.folder).toBeDefined();
        expect(json.data.files).toBeDefined();
        expect(Array.isArray(json.data.files)).toBe(true);
        // Ověření základní struktury souboru (pokud nějaké jsou)
        if (json.data.files.length > 0) {
            const file = json.data.files[0];
            expect(file).toHaveProperty('fileName');
            expect(file).toHaveProperty('timestamp');
            expect(file).toHaveProperty('tags');
        }
        // Ověření metadat složky
        const folder = json.data.folder;
        expect(folder).toHaveProperty('entity', 'folder');
        expect(folder).toHaveProperty('name');
        expect(folder).toHaveProperty('path');
    });

    test('filtruje soubory podle tagu', async () => {
        // Pokud existuje tag 'something', měl by vrátit pouze soubory s tímto tagem
        const request = await fetch('http://localhost:8080/zihle/barevne-krabicky?action=files&tags=something');
        const json = await request.json();
        expect(request.status).toBe(200);
        expect(json.success).toBe(true);
        expect(Array.isArray(json.data.files)).toBe(true);
        if (json.data.files.length > 0) {
            json.data.files.forEach(file => {
                expect(file.tags).toContain('something');
            });
        }
        
        // Očekáváme, že soubor s tagem je jeden
        expect( json.data.files.length ).toEqual(1);

        // Očekáváme, že soubor je i v tagu správně extrahován
        expect( Object.keys( json.data.tags ) ).toContain('something');
        expect( json.data.tags.something.folders ).not.toBeUndefined();
        expect( json.data.tags.something.folders["barevne-krabicky"] ).not.toBeUndefined();
        expect( json.data.tags.something.folders["barevne-krabicky"][0] ).not.toBeUndefined();
        expect( json.data.tags.something.folders["barevne-krabicky"][0].fileName ).toBeDefined();
        expect( json.data.tags.something.folders["barevne-krabicky"][0].fileName ).toBe( json.data.files[0].fileName );

    });

    test('vrací prázdné pole souborů pro neexistující tag', async () => {
        const request = await fetch('http://localhost:8080/zihle/barevne-krabicky?action=files&tags=neexistujici_tag');
        const json = await request.json();
        expect(request.status).toBe(200);
        expect(json.success).toBe(true);
        expect(Array.isArray(json.data.files)).toBe(true);
        expect(json.data.files.length).toBe(0);
    });

    test('filtruje soubory podle času (from/to)', async () => {
        // Nejprve zjistíme časové hodnoty existujících souborů
        const allReq = await fetch('http://localhost:8080/zihle/barevne-krabicky?action=files');
        const allJson = await allReq.json();
        expect(allJson.success).toBe(true);
        const files = allJson.data.files;
        if (files.length < 2) {
            // Pokud nejsou alespoň 2 soubory, test přeskočíme
            return;
        }
        // Vezmeme timestampy prvního a posledního souboru
        const timestamps = files.map(f => f.timestamp).sort((a, b) => a - b);
        const from = timestamps[0];
        const to = timestamps[timestamps.length - 1];
        // Očekáváme, že když nastavíme from=to, dostaneme max jeden soubor
        const req = await fetch(`http://localhost:8080/zihle/barevne-krabicky?action=files&from=${from}&to=${to}`);
        const json = await req.json();
        expect(json.success).toBe(true);
        expect(Array.isArray(json.data.files)).toBe(true);
        // Všechny soubory mají timestamp >= from a <= to
        json.data.files.forEach(file => {
            expect(file.timestamp).toBeGreaterThanOrEqual(from);
            expect(file.timestamp).toBeLessThanOrEqual(to);
        });
    });

    test('filtruje soubory podle času (from/to) a ověřuje tagy', async () => {
        // Nejprve zjistíme časové hodnoty existujících souborů
        const allReq = await fetch('http://localhost:8080/zihle/barevne-krabicky?action=files');
        const allJson = await allReq.json();
        expect(allJson.success).toBe(true);
        const files = allJson.data.files;
        if (files.length < 2) {
            // Pokud nejsou alespoň 2 soubory, test přeskočíme
            return;
        }
        // Vezmeme timestampy prvního a posledního souboru
        const timestamps = files.map(f => f.timestamp).sort((a, b) => a - b);
        const from = timestamps[0];
        const to = timestamps[timestamps.length - 1];
        // Očekáváme, že když nastavíme from=to, dostaneme max jeden soubor
        const req = await fetch(`http://localhost:8080/zihle/barevne-krabicky?action=files&from=${from}&to=${to}`);
        const json = await req.json();
        expect(json.success).toBe(true);
        expect(Array.isArray(json.data.files)).toBe(true);
        // Všechny soubory mají timestamp >= from a <= to
        json.data.files.forEach(file => {
            expect(file.timestamp).toBeGreaterThanOrEqual(from);
            expect(file.timestamp).toBeLessThanOrEqual(to);
        });
        // Ověření tagů a jejich extrakce
        if (json.data.files.length > 0) {
            const file = json.data.files[0];
            if (file.tags && file.tags.length > 0) {
                file.tags.forEach(tag => {
                    expect(Object.keys(json.data.tags)).toContain(tag);
                    expect(json.data.tags[tag].folders).not.toBeUndefined();
                    expect(json.data.tags[tag].folders["barevne-krabicky"]).not.toBeUndefined();
                    // Soubor by měl být v extrakci tagu
                    const found = json.data.tags[tag].folders["barevne-krabicky"].some(f => f.fileName === file.fileName);
                    expect(found).toBe(true);
                });
            }
        }
    });
});
