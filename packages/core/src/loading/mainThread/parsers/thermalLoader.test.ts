import { describe, expect, test } from 'vitest';
import { ThermalLoader } from './thermalLoader';
import { THERMOGRAM_PATHS } from '../../../../devserver/node/mocks';
import { ThermalFileSource } from '../../../file/ThermalFileSource';

describe( "ThermalLoader", () => {


    test( "loads a standard LRC image from the URL", async () => {

        const file = await ThermalLoader.fromUrl( THERMOGRAM_PATHS.SOUSTRUH );
        expect( file ).toBeInstanceOf( ThermalFileSource );

    } );

    test( "propertly react on non-existing files from URL", async () => {

        expect( async () => await ThermalLoader.fromUrl( THERMOGRAM_PATHS.ERR404 ) ).rejects.toThrowError( `There was an error` )

    } );

} );