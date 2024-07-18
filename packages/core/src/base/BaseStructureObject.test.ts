import { describe, test, expect } from 'vitest';
import { ThermalManager } from '../hierarchy/ThermalManager';

describe( "Abstract service worker", () => {

    test( "pooling is working", async () => {

        const poolableObject = new ThermalManager;
        const pooledResult = await poolableObject.pool.exec( ( a: number, b: number) => a + b, [ 1,2 ] );
        expect( pooledResult ).toEqual( 3 );

    } );

} );