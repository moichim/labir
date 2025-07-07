import { beforeAll, describe, expect, it } from "vitest";
import { Client } from "../../Client";
import { PostRoutesFactory } from "../factories/PostRoutesFactory";
import { UploadFile } from "./UploadFile";

import { readFileSync } from "fs";
import { File } from "@web-std/file";
import path from "path";

const PUBLIC_DIR = path.resolve(__dirname, "../../../../../../public");

describe("UploadFile route", () => {
    it("should upload a real .lrc file from the public folder", async () => {
        const client = new Client("http://localhost:8080");
        await client.connect();
        await client.routes.post.login("guest", "querty").execute();

        // Najdi .lrc soubor ve složce public v rootu repozitáře
        const lrcPath = path.join(PUBLIC_DIR, "klokani_01.lrc");
        const lrcBuffer = readFileSync(lrcPath);
        const lrcOriginalName = path.basename(lrcPath);
        const lrcFile = new File([lrcBuffer], lrcOriginalName, { type: "application/octet-stream" });

        // Nyní nahraj PNG obrázek kitten.png
        const pngPath = path.join(PUBLIC_DIR, "kitten.png");
        const pngBuffer = readFileSync(pngPath);
        const pngOriginalName = path.basename(pngPath);
        const pngFile = new File([pngBuffer], pngOriginalName, { type: "image/png" });

        // Request
        const request = client.routes.post.uploadFile("access/restricted_to_guest/accessible", lrcFile);

        request
            .setVisual(pngFile)
            .setPreview(pngFile);

        const responseLrc = await request.execute();

        console.log(responseLrc, lrcFile);
        
        expect(responseLrc.success).toBe(true);
        expect(responseLrc.data?.file).toBeDefined();
        expect(responseLrc.data?.file.path).toContain("access/restricted_to_guest/accessible");

    });
    
});
