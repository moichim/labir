import { describe, expect, test } from "vitest";
import { Client } from "../../Client";
import { testFolderInfo } from "../../utils/testFolderInfo";

describe( "PostUpdateFolder", () => {

    test( "should not be accessible to unauthorised at all", async () => {

        const client = new Client("http://localhost:8080");
        await client.connect();

        const request = client.routes.post.updateFolder();

        request.setPath( "/access/accessible" );
        
        const result = await request.execute();

        expect( result.success ).toBe( false );
        expect( result.code ).toBe( 401 );

    } );

    test( "guest should be able to update folders accessible by him", async () => {

        const client = new Client("http://localhost:8080");
        await client.connect();

        const login = client.routes.post.login();
        login.setUser("guest");
        login.setPassword("querty");
        await login.execute();

        const folder = "access/restricted_to_guest";
        const temporaryName = "Temporary name of the folder";
        const temporaryDescription = "Temporary description of the folder";
        const temporaryTags = {
            tag1: {
                name: "Temporary tag 1",
                description: "Temporary description of tag 1",
                color: "#ff0000"
            },
            tag2: {
                name: "Temporary tag 2",
                description: "Temporary description of tag 2",
                color: "#00ff00"
            }
        };

        // Create the first request to the folder that shall be updated later
        const infoRequest = client.routes.get.default();
        infoRequest.setPath( folder );
        const infoResponse = await infoRequest.execute();
        expect( infoResponse.success ).toBe( true );

        // Update the folder
        const updateRequest = client.routes.post.updateFolder();
        updateRequest
            .setPath( folder )
            .setName( temporaryName )
            .setDescription( temporaryDescription )
            .addTags( temporaryTags );

        const updateResponse = await updateRequest.execute();

        testFolderInfo( updateResponse.data!.result.info );

        expect( updateResponse.data!.result.moved ).toBe( false );

        expect( updateResponse.data?.result.name ).toBe( temporaryName );
        expect( updateResponse.data?.result.slug ).toBe( infoResponse.data?.folder.path );
        expect( updateResponse.data?.result.description ).toBe( temporaryDescription );
        expect( updateResponse.data?.result.info.own_tags ).toEqual( temporaryTags );


        const updateBackRequest = client.routes.post.updateFolder();
        updateBackRequest
            .setPath( folder )
            .setName( infoResponse.data!.folder.name )
            .setDescription( infoResponse.data!.folder.description! )
            .removeTags( ["tag1", "tag2"] );

        const updateBackResponse = await updateBackRequest.execute();

        expect( updateBackResponse.success ).toBe( true );

        expect( updateBackResponse.data?.result.info ).toEqual( infoResponse.data?.folder );


    } );

} );