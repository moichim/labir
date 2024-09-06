import { describe, expect, test } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../../../devserver/node/mocks';
import { loadFileForTests } from '../../../../../devserver/node/scaffold';
import { TestAnalysis } from '../test/TestAnalysis';
import { AnalysisAddPosition, AnalysisStorage } from './AnalysisStorage';

enum IDS {
    REG = "test_registry",
    GR = "test_group", 
}

describe( "AnalysisStorage", () => {

    test( "adding and removing", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );


        const storage = instance.analysis.storage;

        // Default = 0
        expect( storage.all.length ).toEqual(0);

        // Add one
        storage.addAnalysis( new TestAnalysis( "test", instance ) );
        expect( storage.all.length ).toEqual(1);

        // Add another
        storage.addAnalysis( new TestAnalysis( "another", instance ) );
        expect( storage.all.length ).toEqual(2);

        let counter = 0;
        storage.onRemove.add( "raise the check", () => {
            counter += 1;
        } );

        // Add yet another on the place of the another
        storage.addAnalysis( new TestAnalysis( "another", instance ) );

        expect( storage.all.length ).toEqual(2);
        expect( counter ).toEqual(1);

    } );


    test("selecting", async () => {
        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const storage = instance.analysis.storage;

        const analysis1 = new TestAnalysis("test1", instance);
        storage.addAnalysis( analysis1 );

        const analysis2 = new TestAnalysis("test2", instance);
        storage.addAnalysis( analysis2 );

        expect( storage.all.length ).toEqual(2);

        expect( storage.selectedOnly.length ).toEqual(0);

        storage.select( analysis1 );
        expect( storage.selectedOnly.length ).toEqual(1);

        storage.select( analysis2.key );
        expect( storage.selectedOnly.length ).toEqual(2);

        storage.select( analysis1, true );
        expect( storage.selectedOnly.length ).toEqual(1);

        analysis1.setDeselected();
        expect( storage.selectedOnly.length ).toEqual(0);

    });

    test( "layers", async () => {
        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );
        const storage = instance.analysis.storage;
        const analysis1 = new TestAnalysis( "test1", instance );
        const analysis2 = new TestAnalysis( "test2", instance );
        storage.addAnalysis( analysis1 );
        storage.addAnalysis( analysis2 );
        expect( storage.all[0].key ).toEqual( analysis2.key );
        storage.addAnalysis( analysis2, AnalysisAddPosition.APPEND );
        expect( storage.all[0].key ).toEqual( analysis1.key );
    } );

    test( "drive integration", async () => {
        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );
        const storage = instance.analysis.storage;

        const drive = instance.analysis;

        let counter = 0;
        drive.addListener( "Testuji listener", value => {
            counter++;
        } );

        expect( counter ).toEqual(0);

        drive.storage.addAnalysis( new TestAnalysis( "debug", instance ) );

        expect( counter ).toEqual(1);

        drive.storage.addAnalysis( new TestAnalysis("debug", instance) );

        expect( counter ).toEqual(3);

        drive.storage.addAnalysis( new TestAnalysis( "debug2", instance ) );

        expect( counter ).toEqual(4);

    } );

} );