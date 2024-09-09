import { describe, expect, test } from 'vitest';
import { ThermalManager } from '../../hierarchy/ThermalManager';

describe( "ToolDrive", () => {
    test( "Tool selection", () => {
        const manager = new ThermalManager;

        const tools = manager.tool;

        expect( tools.value.key ).toEqual( "inspect" );

        let counter = 0;

        tools.addListener( "initial listener", value => {
            counter++;
            value;
        } );


        tools.selectTool( "addTest" );

        expect(counter).toEqual(1);
        expect( tools.value.key ).toEqual( "add-rect" );



    } );
} );