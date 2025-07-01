import { describe, expect, test } from "vitest";
import { Client } from "../../Client";
import { testFileInfo } from "../../utils/testFileStructure";
import { testFolderInfo } from "../../utils/testFolderStructure";
import { testTagDefinition } from "../../utils/testTagDefinition";

describe("GetFiles", () => {

    test("should not be able to read files from hidden folders", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetFiles();
        request.setPath("access/restricted/restricted");

        const response = await request.execute();

        expect(response.success).toBe(false);
        expect(response.code).toBe(401);

    });


    test("should be able to read files from a public folder", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetFiles();
        request.setPath("access/accessible/accessible");

        const response = await request.execute();

        expect(response.success).toBe(true);

        // Check if the response has the required top-level properties
        expect(response).toHaveProperty("code");
        expect(response).toHaveProperty("message");
        expect(response).toHaveProperty("data");
        expect(response).toHaveProperty("colophon");

        // Check if the response has the folder and subfolders
        expect(response.data).toHaveProperty("folder");
        expect(response.data).toHaveProperty("files");
        expect(response.data).toHaveProperty("time");
        expect(response.data).toHaveProperty("count");

        // Validate all files in the response
        if (response.data && Array.isArray(response.data.files)) {
            for (const file of response.data.files) {
                testFileInfo(file);
            }
        }

        // Check if the folder is the public folder
        expect(response.data!.folder.name).toBe("Jméno složky");

        testFolderInfo(response.data!.folder);

    });

    test("guest is able to read files from folders to which he is granted access", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        // Login as guest
        const login = client.routes.PostLogin();
        login.setUser("guest");
        login.setPassword("querty");
        const loginResponse = await login.execute();

        expect(loginResponse.success).toBe(true);

        const files = client.routes.GetFiles();
        files.setPath("access/restricted_to_guest/restricted");

        const response = await files.execute();

        expect(response.success).toBe(true);

        testFolderInfo(response.data!.folder);

        if (response.data && Array.isArray(response.data.files)) {
            for (const file of response.data.files) {
                testFileInfo(file);
            }
        }

    });

    test("guest should not be able to read from folders inaccessible to him", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        // Login as guest
        const login = client.routes.PostLogin();
        login.setUser("guest");
        login.setPassword("querty");
        const loginResponse = await login.execute();

        expect(loginResponse.success).toBe(true);

        const files = client.routes.GetFiles();
        files.setPath("access/restricted/restricted");

        const response = await files.execute();

        expect(response.success).toBe(false);
        expect(response.code).toBe(403);

    });

    test("root should be able to read from anywhere", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        // Login as root
        const login = client.routes.PostLogin();
        login.setUser("root");
        login.setPassword("abcdefghijk");
        const loginResponse = await login.execute();

        expect(loginResponse.success).toBe(true);

        const files = client.routes.GetFiles();
        files.setPath("access/restricted/restricted");

        const response = await files.execute();

        expect(response.success).toBe(true);

        if (response.data && Array.isArray(response.data.files)) {
            for (const file of response.data.files) {
                testFileInfo(file);
            }
        }

        testFolderInfo(response.data!.folder);

    });





    // Create the date that will be used from filters
    const date = new Date();
    date.setTime(1739795230214 + 1000 * 60 * 60 * 24 * 30 * 2);



    test("filtering by from", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetFiles();
        request.setPath("manetin/les");

        request.setFrom(date);

        const response = await request.execute();

        expect(response.success).toBe(true);

        // Check if the response has the required top-level properties
        expect(response).toHaveProperty("code");
        expect(response).toHaveProperty("message");
        expect(response).toHaveProperty("data");
        expect(response).toHaveProperty("colophon");

        // Check if the response has the folder and subfolders
        expect(response.data).toHaveProperty("folder");
        expect(response.data).toHaveProperty("files");
        expect(response.data).toHaveProperty("time");
        expect(response.data).toHaveProperty("count");

        // Validate all files in the response
        if (response.data && Array.isArray(response.data.files)) {
            for (const file of response.data.files) {
                testFileInfo(file);
            }
        }

        expect(response.data!.count.displayed).toEqual(14);
        expect(response.data!.count.omitted).toEqual(7);
        expect(response.data!.count.total).toEqual(21);

    });

    test("filter by to", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetFiles();
        request.setPath("manetin/les");

        request.setTo(date);

        const response = await request.execute();

        expect(response.success).toBe(true);

        // Check if the response has the required top-level properties
        expect(response).toHaveProperty("code");
        expect(response).toHaveProperty("message");
        expect(response).toHaveProperty("data");
        expect(response).toHaveProperty("colophon");

        // Check if the response has the folder and subfolders
        expect(response.data).toHaveProperty("folder");
        expect(response.data).toHaveProperty("files");
        expect(response.data).toHaveProperty("time");
        expect(response.data).toHaveProperty("count");

        // Validate all files in the response
        if (response.data && Array.isArray(response.data.files)) {
            for (const file of response.data.files) {
                testFileInfo(file);
            }
        }

        expect(response.data!.count.displayed).toEqual(7);
        expect(response.data!.count.omitted).toEqual(14);
        expect(response.data!.count.total).toEqual(21);

    });

    test("filter by one tag that is in two files", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetFiles();

        request.setPath("manetin/les");

        request.addTag("tag1");

        const result = await request.execute();

        expect(result.success).toBe(true);

        expect(result.data!.count.displayed).toEqual(2);
        expect(result.data!.count.omitted).toEqual(19);
        expect(result.data!.count.total).toEqual(21);

        expect(result.data!.files.length).toEqual(2);

        expect(result.data!.tags).toHaveProperty("tag1");

        testTagDefinition(result.data!.tags.tag1);

        result.data!.tags.tag1.folders.les.forEach(file => {
            testFileInfo(file)
        });

    });


    test("filter by the second tag that is in three files", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetFiles();

        request.setPath("manetin/les");

        request.addTag("tag2");

        const result = await request.execute();

        expect(result.success).toBe(true);

        expect(result.data!.count.displayed).toEqual(3);
        expect(result.data!.count.omitted).toEqual(18);
        expect(result.data!.count.total).toEqual(21);

        expect(result.data!.files.length).toEqual(3);

        expect(result.data!.tags).toHaveProperty("tag2");

        testTagDefinition(result.data!.tags.tag2);

        result.data!.tags.tag2.folders.les.forEach(file => {
            testFileInfo(file)
        });

    });

    test("filter by both tags that overlap in one single file", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.GetFiles();

        request.setPath("manetin/les");

        request
            .addTag("tag1")
            .addTag("tag2");

        const result = await request.execute();

        expect(result.success).toBe(true);

        expect(result.data!.count.displayed).toEqual(1);
        expect(result.data!.count.omitted).toEqual(20);
        expect(result.data!.count.total).toEqual(21);

        expect(result.data!.files.length).toEqual(1);

        expect(result.data!.tags).toHaveProperty("tag1");
        expect(result.data!.tags).toHaveProperty("tag2");

        testTagDefinition(result.data!.tags.tag1);

        result.data!.tags.tag1.folders.les.forEach(file => {
            testFileInfo(file)
        });

    });


});

