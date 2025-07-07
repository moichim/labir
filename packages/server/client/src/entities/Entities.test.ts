import { describe, test, expect } from "vitest";
import { Client } from "../Client";

describe( "Entities", () => {

    test( "connect to folder", async () => {

        const client = new Client( "http://localhost:8080" );
        await client.connect();

        const login = client.routes.post.login( "root", "abcdefghijk" );
        await login.execute();

        expect( client.isConnected() ).toBe( true );

        const observer1 = await client.entities.connectToFolder( "access/accessible", {
            onFolderChanged( folder, change ) {
                // console.log( "OBSERVER1", "Folder changed:", folder, change );
            }
        } );

        const observer2 = await client.entities.connectToFolder( "access/accessible", {
            onFolderChanged( folder, change ) {
                // console.log( "OBSERVER2", "Folder changed:", folder, change );
            }
        } );

        // expect( zihle.current()?.name ).toBe("Root update");

        observer1.update.name.enqueue( "Entity update name ABCD" );
        observer2.update.description.enqueue( "Nějaká popiska prde" );

        await observer1.persist();

        // console.log( changed );

    } );

} );