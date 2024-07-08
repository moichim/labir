import { describe, expect, test } from 'vitest';
import { FileService } from './FileService';
import { FileReaderService } from './FileReaderService';
import { THERMOGRAM_PATHS } from '../../node/mocks/thermogram.mock';
import { FileErrors, FileFailureService } from './FileLoadingError';

describe( "FileService", () => {

    test( "Should be working", async () => {

        const service = new FileService;

        const req1 = service.loadFile( THERMOGRAM_PATHS.SEQUENCE ).then( result => console.log( "třetí request", result ) );
        const req2 = service.loadFile( THERMOGRAM_PATHS.SEQUENCE, "sth" ).then( result => console.log( "druhý request", result ) );
        service.loadFile( THERMOGRAM_PATHS.SEQUENCE, "sth" ).then( result => console.log( "druhý request", result ) );
        service.loadFile( THERMOGRAM_PATHS.SEQUENCE, "sth" ).then( result => console.log( "druhý request", result ) );
        service.loadFile( THERMOGRAM_PATHS.SEQUENCE, "sth" ).then( result => console.log( "druhý request", result ) );

        const file = await service.loadFile( THERMOGRAM_PATHS.SEQUENCE ) as FileReaderService;

        console.log( file, req1, req2 );

        expect( file ).toBeInstanceOf( FileReaderService );

        const shouldBeInCache = await service.loadFile( THERMOGRAM_PATHS.SEQUENCE ) as FileReaderService;

        expect( file.id ).toEqual( shouldBeInCache.id );

        const error = await service.loadFile( THERMOGRAM_PATHS.ERR404 ) as FileFailureService;
        expect( error ).toBeInstanceOf( FileFailureService );

        expect( error.code ).toEqual( FileErrors.FILE_NOT_FOUND );

        expect( file.dimensions().width ).toEqual( 160 );

    } );

} );