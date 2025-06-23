import { describe, expect, test } from 'vitest'
import { apiCallRoot } from '../../utils/apiCallRoot.js'

// Základní end-to-end test pro /get/default
// Pokud je potřeba změnit port nebo cestu, uprav dle svého prostředí

describe('GET action=default', () => {

    test('response structure with tags', async () => {
        const request = await fetch('http://localhost:8080/zihle');
        const json = await request.json();

        expect(request.status).toBe(200);
        expect(json.success).toBe(true);
        expect(json.data).not.toBeUndefined();
        expect(json.data.folder).not.toBeUndefined();
        expect(json.data.subfolders).not.toBeUndefined();

        // Ověření základní struktury folderu
        const folder = json.data.folder;
        expect(folder).toHaveProperty('entity', 'folder');
        expect(folder).toHaveProperty('api');
        expect(folder).toHaveProperty('path');
        expect(folder).toHaveProperty('slug');
        expect(folder).toHaveProperty('name');
        expect(folder).toHaveProperty('description');
        expect(folder).toHaveProperty('data');
        expect(folder).toHaveProperty('lrc_count');

        // Ověření subfolders (pole nebo false)
        const subfolders = json.data.subfolders;
        expect(typeof subfolders === 'object' || subfolders === false).toBeTruthy();
        if (subfolders && typeof subfolders === 'object') {
            // Ověření, že subfolders obsahuje alespoň jeden klíč (složku)
            expect(Object.keys(subfolders).length).toBeGreaterThan(0);
            // Ověření, že každá složka má správnou strukturu a obsahuje textové pole 'name'
            Object.values(subfolders).forEach(sub => {
                expect(sub).toHaveProperty('name');
                expect(typeof sub.name).toBe('string');
                expect(sub.name.length).toBeGreaterThan(0);
            });
        }
    });

    test('own_tags obsahuje správné tagy a strukturu', async () => {
        const request = await fetch('http://localhost:8080/zihle');
        const json = await request.json();
        const folder = json.data.folder;
        expect(folder).toHaveProperty('own_tags');
        expect(typeof folder.own_tags).toBe('object');
        expect(folder.own_tags).toHaveProperty('something');
        expect(folder.own_tags.something).toMatchObject({
            name: 'Něco',
            description: expect.any(String),
            color: expect.stringMatching(/^#([A-Fa-f0-9]{6})$/)
        });
        const tag = folder.own_tags.something;
        expect(tag).toHaveProperty('name', 'Něco');
        expect(tag).toHaveProperty('description', 'A placeholder tag for testing purposes.');
        expect(tag).toHaveProperty('color', '#FF5733');
        const expectedTags = ['something'];
        expectedTags.forEach(tag => {
            expect(folder.own_tags).toHaveProperty(tag);
        });
    });

    test('parent_tags má správnou strukturu', async () => {
        const request = await fetch('http://localhost:8080/zihle');
        const json = await request.json();
        const folder = json.data.folder;
        expect(folder).toHaveProperty('parent_tags');
        if (folder.parent_tags) {
            expect(Array.isArray(folder.parent_tags) || typeof folder.parent_tags === 'object').toBeTruthy();
        }
    });

    test('_content.json', async () => {
        const request = await fetch('http://localhost:8080/zihle');
        const json = await request.json();
        const folder = json.data.folder;

        // Ověření, že data z _content.json jsou správně načtena
        expect(folder).toHaveProperty('name', 'Žihle');
        expect(folder).toHaveProperty('description', 'Složka s daty měření pro lokalitu Žihle. Obsahuje podadresáře s jednotlivými sadami měření a souvisejícími daty.');
        // Ověření, že data obsahují případně další klíče z _content.json
        expect(folder.data).toBeDefined();
        expect(typeof folder.data).toBe('object');
        expect(folder.data).not.toBeNull();
        // Ověření přítomnosti latitude a longitude
        expect(folder.data).toHaveProperty('latitude', 50.027);
        expect(folder.data).toHaveProperty('longitude', 13.237);
    });

    test('_content.json v podsložce', async () => {
        // Test pro podsložku s _content.json
        const request = await fetch('http://localhost:8080/zihle/deska');
        const json = await request.json();
        const folder = json.data.folder;
        expect(folder).toHaveProperty('name', 'Deska měření');
        expect(folder).toHaveProperty('description', 'Data pro složku deska v lokalitě Žihle.');
        expect(folder.data).toBeDefined();
        expect(typeof folder.data).toBe('object');
        expect(folder.data).not.toBeNull();
    });

    test('výchozí hodnoty bez _content.json', async () => {
        // Test pro podsložku bez _content.json (např. trava)
        const request = await fetch('http://localhost:8080/zihle/trava');
        const json = await request.json();
        const folder = json.data.folder;
        // Výchozí hodnoty: name a description podle fallbacku (název složky)
        expect(folder).toHaveProperty('name', 'trava');
        expect(folder).toHaveProperty('description', null);
        expect(folder.data).toBeDefined();
        expect(typeof folder.data).toBe('object');
        expect(folder.data).not.toBeNull();
        expect(Object.keys(folder.data).length).toBe(0);
    });

    test('neviditelná podsložka (show: false)', async () => {
        // Test pro podsložku, která má v _content.json show: false
        const request = await fetch('http://localhost:8080/zihle');
        const json = await request.json();
        const subfolders = json.data.subfolders;
        
        // Ověření, že dlouhodobe-mereni není mezi viditelnými podsložkami
        expect(subfolders).not.toHaveProperty('dlouhodobe-mereni');
    });

    test('neviditelná podsložka (show: false) pro uživatele root', async () => {
        // Test pro podsložku, která má v _access.json show: false, ale uživatel root ji vidí
        const response = await apiCallRoot('zihle');
        const subfolders = response.json.data.subfolders;

        // Ověření, že dlouhodobe-mereni je mezi viditelnými podsložkami
        expect(subfolders).toHaveProperty('dlouhodobe-mereni');
    });

    test('pokud složka nemá žádné podsložky, subfolders je false', async () => {
        // Zvol složku, která nemá žádné podsložky (např. trava)
        const request = await fetch('http://localhost:8080/zihle/trava');
        const json = await request.json();
        expect(json.data).toBeDefined();
        expect(json.data.subfolders).toBe(false);
    });

});
