import { describe, expect, test } from 'vitest';
import { ThermalManager } from '../../hierarchy/ThermalManager';
import { loadFileForTests } from '../../../devserver/node/scaffold';
import { THERMOGRAM_PATHS } from '../../../devserver/node/mocks';

describe( "ToolDrive", () => {
    test( "Tool selection", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );
        
        const group = instance.group;

        const tools = group.tool;

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