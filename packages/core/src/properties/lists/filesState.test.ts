import { describe, expect, test, vi } from 'vitest';
import { ThermalManager } from '../../hierarchy/ThermalManager';
import { THERMOGRAM_PATHS, delay } from '../../../devserver/node/mocks';

describe( "FilesState", () => {


    test( "propert loading of files and triggering recalculation", async () => {

        vi.useRealTimers();

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry( "test" );
        const group = registry.groups.addOrGetGroup( "test" );

        registry.onProcessingStart.set( "test", () => {
            console.log( "processing start" );
        } );

        registry.onProcessingEnd.set( "test", () => {
            console.log( "processing end" );
        } );

        group.files.addListener( "test", console.log );

        registry.batch.request(
            THERMOGRAM_PATHS.TUCNACI,
            undefined,
            group,
            async result => {
                console.log( result );
            }
        );

        registry.batch.request(
            THERMOGRAM_PATHS.SOUSTRUH,
            undefined,
            group,
            async result => {
                console.log( result );
            }
        );

        await delay( 1000 );

        expect( group.files.value.length ).toEqual( 2 );

    } );


} );