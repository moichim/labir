import { describe, expect, test } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../../../devserver/node/mocks';
import { loadFileForTests } from '../../../../../devserver/node/scaffold';


describe( "AnalysisStorage", () => {

    test( "adding and removing", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );


        const storage = instance.analysis.layers;

        // Default = 0
        expect( storage.all.length ).toEqual(0);

        // Add one

        storage.placeEllipsisAt( "test", 10, 10, 100, 100 );

        expect( storage.all.length ).toEqual(1);

        // Add another
        storage.placeRectAt( "another", 20,20, 110, 110 );
        expect( storage.all.length ).toEqual(2);

        let counter = 0;
        storage.onRemove.add( "raise the check", () => {
            counter += 1;
        } );

        // Add yet another on the place of the another
        storage.placeRectAt( "another", 14, 14, 20, 20 );

        expect( storage.all.length ).toEqual(2);
        expect( counter ).toEqual(1);

    } );


    test("selecting", async () => {
        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const storage = instance.analysis.layers;

        const analysis1 = storage.placeRectAt( "test1", 10, 10, 100, 100 );

        const analysis2 = storage.placeEllipsisAt( "test2", 100, 100, 110, 110 );

        expect( storage.all.length ).toEqual(2);

        expect( storage.selectedOnly.length ).toEqual(0);

        analysis1.setSelected();
        expect( storage.selectedOnly.length ).toEqual(1);

        analysis2.setSelected();

        expect( storage.selectedOnly.length ).toEqual(2);

        analysis1.setDeselected( true );
        expect( storage.selectedOnly.length ).toEqual(1);

        analysis2.setDeselected();
        expect( storage.selectedOnly.length ).toEqual(0);

    });

    test( "layers", async () => {
        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );
        const storage = instance.analysis.layers;
        const analysis1 = storage.placeEllipsisAt( "test1", 10, 10, 100, 100 );
        const analysis2 = storage.placeRectAt( "test2", 14, 14, 20, 20 );
        expect( storage.all[0].key ).toEqual( analysis1.key );
        expect( storage.all[storage.all.length - 1].key ).toEqual( analysis2.key );
    } );

    test( "drive integration", async () => {
        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const drive = instance.analysis;

        let counter = 0;
        drive.addListener( "Testuji listener", () => {
            counter++;
        } );

        expect( counter ).toEqual(0);

        drive.layers.placeRectAt( "debug", 0, 0, 100, 100 );

        expect( counter ).toEqual(1);

        drive.layers.placeRectAt( "debug", 0, 0, 100, 100 );

        expect( counter ).toEqual(3);

        drive.layers.placeRectAt( "debug2", 0, 0, 100, 100 );

        expect( counter ).toEqual(4);

    } );

} );