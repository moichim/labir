import { afterEach, describe, expect, it } from "vitest";
import { Client } from "../../Client";

import { File } from "@web-std/file";
import { readFileSync } from "fs";
import path from "path";
import { cleanupFiles } from "../../utils/cleanupFiles";
import { testFileInfo } from "../../utils/testFileStructure";

const PUBLIC_DIR = path.resolve(__dirname, "../../../../../../public");

describe("UploadFile route", () => {

    // Pole pro uložení URL nahraných souborů, které budou vyčištěny po každém testu
    let uploadedFileUrls: string[] = [];
    
    // Vyčištění nahraných souborů po každém testu
    afterEach(async () => {
        if (uploadedFileUrls.length) {
            await cleanupFiles(uploadedFileUrls);
            uploadedFileUrls = [];
        }
    });

    it( "should fail when trying to upload to a folder as not-logged in", async () => {

        const client = new Client("http://localhost:8080");
        await client.connect();

        // Pokus o upload souboru bez přihlášení
        const lrcPath = path.join(PUBLIC_DIR, "klokani_01.lrc");
        const lrcBuffer = readFileSync(lrcPath);
        const lrcOriginalName = path.basename(lrcPath);
        const lrcFile = new File([lrcBuffer], lrcOriginalName, { type: "application/octet-stream" });

        const request = client.routes.post.uploadFile("access/restricted_to_guest/accessible", lrcFile);

        const response = await request.execute();

        expect( response.success ).toBe( false );
        expect( response.code ).toBe( 401 );

    } );


    it( "should fail when trying to upload to a folder to which the guest does not have access", async () => {


        const client = new Client("http://localhost:8080");
        await client.connect();
        await client.routes.post.login("guest", "querty").execute();

        // Pokus o upload souboru do složky, kam guest nemá přístup
        const lrcPath = path.join(PUBLIC_DIR, "klokani_01.lrc");
        const lrcBuffer = readFileSync(lrcPath);
        const lrcOriginalName = path.basename(lrcPath);
        const lrcFile = new File([lrcBuffer], lrcOriginalName, { type: "application/octet-stream" });

        const request = client.routes.post.uploadFile("access/restricted", lrcFile);

        const response = await request.execute();

        expect( response.success ).toBe( false );
        expect( response.code ).toBe( 403 );

    } );

    it( "should fail when trying to upload to a non-existing folder", async () => {

        const client = new Client("http://localhost:8080");
        await client.connect();
        await client.routes.post.login("guest", "querty").execute();

        // Pokus o upload souboru do neexistující složky
        const lrcPath = path.join(PUBLIC_DIR, "klokani_01.lrc");
        const lrcBuffer = readFileSync(lrcPath);
        const lrcOriginalName = path.basename(lrcPath);
        const lrcFile = new File([lrcBuffer], lrcOriginalName, { type: "application/octet-stream" });

        const request = client.routes.post.uploadFile("access/restricted_to_guest/non_existing_folder", lrcFile);

        const response = await request.execute();

        expect( response.success ).toBe( false );
        expect( response.code ).toBe( 404 );

    } );


    it("should upload a real .lrc file from the public folder", async () => {

        // Vytvoření klienta a přihlášení
        const client = new Client("http://localhost:8080");
        await client.connect();
        await client.routes.post.login("guest", "querty").execute();

        // Načtení .lrc souboru z public složky
        const lrcPath = path.join(PUBLIC_DIR, "klokani_01.lrc");
        const lrcBuffer = readFileSync(lrcPath);
        const lrcOriginalName = path.basename(lrcPath);
        const lrcFile = new File([lrcBuffer], lrcOriginalName, { type: "application/octet-stream" });

        // Načtení PNG obrázku kitten.png z public složky
        const pngPath = path.join(PUBLIC_DIR, "kitten.png");
        const pngBuffer = readFileSync(pngPath);
        const pngOriginalName = path.basename(pngPath);
        const pngFile = new File([pngBuffer], pngOriginalName, { type: "image/png" });

        // Vytvoření requestu pro upload .lrc souboru s vizuálem a preview
        const request = client.routes.post.uploadFile("access/restricted_to_guest/accessible", lrcFile);
        request
            .setVisual(pngFile)
            .setPreview(pngFile);

        // Odeslání requestu a získání odpovědi
        const responseLrc = await request.execute();

        // Uložení URL nahraných souborů (včetně JSON) pro úklid po testu
        if (responseLrc.data?.file) {
            uploadedFileUrls.push(responseLrc.data.file.url);
            if (responseLrc.data.file.visual) uploadedFileUrls.push(responseLrc.data.file.visual);
            if (responseLrc.data.file.preview) uploadedFileUrls.push(responseLrc.data.file.preview);
            // Přidej i JSON soubor (stejná cesta jako .lrc, ale s .json)
            if (responseLrc.data.file.url && typeof responseLrc.data.file.url === "string") {
                const jsonUrl = responseLrc.data.file.url.replace(/\.lrc($|\?)/, ".json$1");
                uploadedFileUrls.push(jsonUrl);
            }
        }

        // Ověření úspěšnosti uploadu a správné cesty
        expect(responseLrc.success).toBe(true);
        expect(responseLrc.data?.file).toBeDefined();
        expect(responseLrc.data?.file.path).toContain("access/restricted_to_guest/accessible");

        // Integrita odpověďi
        testFileInfo(responseLrc.data?.file);

        // Uvěření, že bylo správně zaznamenáno, kdo soubor nahrál
        expect( responseLrc.data?.file.uploadedby ).toBeDefined();
        expect(responseLrc.data?.file.uploadedby).toStrictEqual({
            login: "guest",
            name: "Host",
            description: "Veřejný uživatel s omezeným přístupem.",
            institution: "Veřejnost"
        });

    });


});
