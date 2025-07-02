import { describe, expect, test, afterEach } from "vitest";
import { Client } from "../../Client";
import { b } from "vitest/dist/suite-IbNSsUWN.js";
import { cleanupFolders } from "../../utils/cleanupFolders";

describe("PostCreateFolder", () => {

    const createdFolders: string[] = [];

    afterEach( async () => {

        await cleanupFolders( createdFolders );

        createdFolders.length = 0; // Clear the array

    } );

    test("should not be able to create anything when not logged in", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        const request = client.routes.post.createFolder();
        request
            .setPath("access/accessible")
            .setName("Test Folder")
            .setDescription("This is a test folder")
            .setMeta({ key: "value" });

        const result = await request.execute();

        expect(result.success).toBe(false);
        expect(result.code).toBe(401);

    });

    test( "should create a folder once logged in as root", async () => {

        const client = new Client("http://localhost:8080");

        await client.connect();

        // Login as root
        const loginRequest = client.routes.post.login();
        loginRequest.setUser("root").setPassword("abcdefghijk");
        const loginResult = await loginRequest.execute();

        expect(loginResult.success).toBe(true);

        // Create a folder
        const createFolderRequest = client.routes.post.createFolder();
        createFolderRequest
            .setPath("access/accessible")
            .setName("Test Folder")
            .setDescription("This is a test folder")
            .setMeta({ key: "value" });

        

        const createFolderResult = await createFolderRequest.execute();

        createdFolders.push( createFolderResult.data?.result.info.path || "" );

        // console.log( createFolderResult );

        expect(createFolderResult.success).toBe(true);
        // expect(createFolderResult.data.name).toBe("Test Folder");


    });

});