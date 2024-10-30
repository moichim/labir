import { describe, expect, test } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../devserver/node/mocks';
import { loadFileForTests } from '../../../devserver/node/scaffold';

describe( "AnalysisSlotsDrive", () => {

    test( "assignment", async () => {

        const instance = await loadFileForTests(THERMOGRAM_PATHS.SOUSTRUH);

        // No slots at first
        expect( instance.slots.hasSlot(1) ).toEqual( false );


        // Create the first analysis
        const analysis = instance.analysis.layers.placeRectAt( "Test", 10, 10, 100, 100, "green" );

        expect( analysis ).not.toBeUndefined();
        
        // Assign it to an empty slot
        instance.slots.initSlot( 1, analysis );
        expect( instance.slots.hasSlot( 1 ) ).toEqual( true );

        // Clear an occupied slot
        instance.slots.removeSlot( 1 );
        expect( instance.slots.hasSlot( 1 ) ).toEqual( false );
        expect( instance.analysis.value.length ).toEqual( 0 );

        // Create two new instances
        const analysis2 = instance.analysis.layers.placeEllipsisAt( "test sth", 0, 0, 100, 100 );
        const analysis3 = instance.analysis.layers.placeRectAt( "sth test", 15, 13, 100, 100 );

        // Assign a slot
        instance.slots.initSlot( 2, analysis2 );
        expect( instance.slots.hasSlot( 2 ) ).toEqual( true );
        expect( instance.slots.getSlot( 2 )?.analysis.name ).toEqual( analysis2.name );

        // Replace that slot
        instance.slots.replaceSlot( 2, analysis3 );
        // The name should correspond
        expect( instance.slots.getSlot(2)?.analysis.name ).toEqual( analysis3.name );
        // The old analysis should be removed
        expect( instance.analysis.value.length ).toEqual( 1 );
        expect( instance.analysis.value[0].name ).toEqual( analysis3.name );


    } );

} );