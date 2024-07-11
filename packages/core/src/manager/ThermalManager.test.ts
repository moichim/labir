import { describe, expect, test } from 'vitest';
import { ThermalManager } from './ThermalManager';
import { ThermalRegistry } from '../registry/ThermalRegistry';
import { THERMOGRAM_PATHS } from '../../node/mocks';

describe( "ThermalManager", () => {
    
    const REGISTRY_ID = "registry_id";
    const GROUP_ID = "group_id";

    test( "handling registries", () => {

        const manager = new ThermalManager;
        
        const registry = manager.addOrGetRegistry( REGISTRY_ID );

        // Test creating one registry
        expect( registry ).toBeInstanceOf( ThermalRegistry );
        expect( registry.id ).toEqual( REGISTRY_ID );

        // Test getting an existing registry
        const registry_second = manager.addOrGetRegistry( REGISTRY_ID );
        expect( registry_second.id ).toEqual( REGISTRY_ID );
        expect( registry_second.hash ).toEqual( registry.hash );
        expect( registry_second ).toEqual( registry );

        // Test the length of registries
        expect( Object.values( manager.registries ).length ).toEqual( 1 );

        // Remove the registry
        manager.removeRegistry( REGISTRY_ID );
        expect( Object.values( manager.registries ).length ).toEqual( 0 );

    } );

    test( "initialisation with options", () => {

        const manager_with_defaults = new ThermalManager;
        expect( manager_with_defaults.palette.value ).toEqual( "jet" );

        const manager_with_options = new ThermalManager( { palette: "iron" } );
        expect( manager_with_options.palette.value ).toEqual( "iron" );

    } );

    test( "caching file sources", async () => {

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry( REGISTRY_ID );

        // Load one file
        await registry.loadOneFile( { thermalUrl: THERMOGRAM_PATHS.SOUSTRUH }, GROUP_ID );

        expect( manager.isUrlRegistered( THERMOGRAM_PATHS.SOUSTRUH ) ).toBe( true );
        expect( manager.getSourcesArray().length ).toEqual( 1 );

        // Load that file again
        await registry.loadOneFile( { thermalUrl: THERMOGRAM_PATHS.SOUSTRUH }, GROUP_ID );
        expect( manager.getSourcesArray().length ).toEqual( 1 );

        // Load that file in another group
        await registry.loadOneFile( {thermalUrl: THERMOGRAM_PATHS.SOUSTRUH}, "another_group" );
        expect( manager.getSourcesArray().length ).toEqual( 1 );

        expect( manager.getRegisteredUrls().includes( THERMOGRAM_PATHS.SOUSTRUH ) ).toEqual( true );

    } );

    test( "palette management", () => {
        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry( REGISTRY_ID );

        // Checks before the change
        expect( manager.palette.value ).toEqual( "jet" );
        expect( manager.palette.currentPalette.name ).toEqual( "paleta JET" );
        expect( manager.palette.value ).toEqual( registry.palette.value );

        // Checks after the change
        manager.palette.setPalette( "iron" );
        
        expect( manager.palette.value ).toEqual( "iron" );
        expect( manager.palette.currentPalette.name ).toEqual( "paleta IRON" );
        expect( manager.palette.value ).toEqual( registry.palette.value );

    } );

} );