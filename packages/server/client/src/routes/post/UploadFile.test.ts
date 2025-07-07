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
        const filePath = path.join(PUBLIC_DIR, "klokani_01.lrc");
        const buffer = readFileSync(filePath);
        // Zachovej původní jméno souboru
        const originalName = path.basename(filePath);
        const file = new File([buffer], originalName, { type: "application/octet-stream" });
        const upload = client.routes.post.updateFile("access/restricted_to_guest/accessible", file);
        const response = await upload.execute();
        console.log( response, file );
        expect(response.success).toBe(true);
        expect(response.data?.file).toBeDefined();
        expect(response.data?.file.fileName).toMatch(/klokani_01(__(\d+))?\.lrc/);
        expect(response.data?.file.path).toContain("access/restricted_to_guest/accessible");
    });
    
});
