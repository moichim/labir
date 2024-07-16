import { describe, expect, it } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../node/mocks';
import { FileReaderService } from './FileReaderService';
import { FilesService } from './FilesService';
import { Instance } from './instance';

enum IDS {
    REG = "test_registry",
    GR = "test_group", 
}

describe( "reloading", () => {

    it( "should be accessible", async () => {

        const {service, registry} = FilesService.isolatedInstance();

        const group = registry.groups.addOrGetGroup( IDS.GR );

        expect( service ).toBeInstanceOf( FilesService );

        // Load a group
        const file = await service.loadFile( THERMOGRAM_PATHS.SOUSTRUH ) as FileReaderService;

        expect( file ).toBeInstanceOf( FileReaderService );

        const instance = await file.createInstance( group );

        expect( instance ).toBeInstanceOf( Instance );



    } );

} );