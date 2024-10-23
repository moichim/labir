import { describe, expect, test } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../../devserver/node/mocks';
import { loadFileForTests } from '../../../../devserver/node/scaffold';
import { Instance } from '../../../file/instance';

const left = 10;
const top = 20;
const right = 100;
const bottom = 100;

const width = right - left;
const height = bottom - top;

    const getRectAnalysis = (name: string, instance: Instance) => {
        return instance.analysis.layers.placeRectAt(name, top, left, right, bottom);
    }

    const getEllipsisAnalysis = (name: string, instance: Instance) => {
        return instance.analysis.layers.placeEllipsisAt(name, top, left, right, bottom);
    }

    const getPointAnalysis = (name: string, instance: Instance ) => {
        return instance.analysis.layers.placePointAt(name, top, left);
    }


describe( "Serialisation of analysis", () => {

    test( "serializes name", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const analysis = getEllipsisAnalysis( "ABCDEFG", instance );

        // Contain the initial name
        expect( analysis.serialized ).toContain( "ABCDEFG" );

        // Set the name
        analysis.setName( "XYZ" );

        // Contains the new name
        expect( analysis.serialized ).toContain( "XYZ" );

    } );

    test( "serializes color", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const analysis = getRectAnalysis( "ABCDEFG", instance );

        // Contain the initial color
        expect( analysis.serialized ).toContain( "Orange" );

        // Set the color
        analysis.setInitialColor( "Pink" );

        // Contains the new name
        expect( analysis.serialized ).toContain( "Pink" );

    } );

    test( "serialisation dimensions", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const analysis = getRectAnalysis( "ABCDEFG", instance );

        expect( analysis.serialized ).toContain(`top:${top}`);
        expect( analysis.serialized ).toContain(`left:${left}`);
        expect( analysis.serialized ).toContain(`width:${width}`);
        expect( analysis.serialized ).toContain(`height:${height}`);

        const newTop = 14;
        const newLeft = 17;
        const newWidth = 19;
        const newHeight = 23;

        analysis.setTop( newTop );
        analysis.setLeft( newLeft );
        analysis.setWidth( newWidth );
        analysis.setHeight( newHeight );

        analysis.serialize();
        analysis.recalculateValues();

        expect( analysis.serialized ).toContain(`top:${newTop}`);
        expect( analysis.serialized ).toContain(`left:${newLeft}`);
        expect( analysis.serialized ).toContain(`width:${newWidth}`);
        expect( analysis.serialized ).toContain(`height:${newHeight}`);

        expect( analysis.top ).toEqual( newTop );
        expect( analysis.left ).toEqual( newLeft );
        expect( analysis.width ).toEqual( newWidth );
        expect( analysis.height ).toEqual( newHeight );

    } );

    test( "serialisation of analysis", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const analysis = getRectAnalysis( "ABCDEFG", instance );

        // Initial state
        expect( analysis.serialized ).not.toContain( "avg" );
        expect( analysis.serialized ).not.toContain( "min" );
        expect( analysis.serialized ).not.toContain( "max" );

        // AVG

        analysis.graph.setAvgActivation( true );
        expect( analysis.serialized ).toContain( "avg" );

        analysis.graph.setAvgActivation( false );
        expect( analysis.serialized ).not.toContain( "avg" );


        // MIN

        analysis.graph.setMinActivation( true );
        expect( analysis.serialized ).toContain( "min" );

        analysis.graph.setMinActivation( false );
        expect( analysis.serialized ).not.toContain( "min" );

    
        // MAX

        analysis.graph.setMaxActivation( true );
        expect( analysis.serialized ).toContain( "max" );

        analysis.graph.setMaxActivation( false );
        expect( analysis.serialized ).not.toContain( "max" );

    });

    test( "parsing of serialized color", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const analysis = getRectAnalysis( "ABCDEFG", instance );

        const name = "fňukálek";
        const left = 37;
        const top = 41;
        const width = 43;
        const height = 47;
        const color = "olive";

        const formatSerialized = (
            withSpaces: boolean,
            name: string,
            type: "rectangle"|"ellipsis"|"point",
            left: number,
            top: number,
            width: number,
            height: number,
            color: string,
            avg: boolean,
            min: boolean,
            max: boolean,
            separator: string = ";"
        ) => {


            const valueWithEventualSpaces = ( value: string|number ) => {
                if ( withSpaces === false ) {
                    return value.toString();
                }

                else {
                    return ` ${value.toString()}  `;
                }
            }

            const output: string[] = [];

            output.push( valueWithEventualSpaces(name) );
            output.push( valueWithEventualSpaces(type) );
            output.push( `top:${valueWithEventualSpaces(top)}` );
            output.push( `left:${valueWithEventualSpaces(left)}` );
            output.push( `width:${valueWithEventualSpaces(width)}` );
            output.push( `height:${valueWithEventualSpaces(height)}` );
            output.push( `color:${valueWithEventualSpaces(color)}` );

            if ( avg ) output.push( "avg" );
            if ( min ) output.push( "min" );
            if ( max ) output.push( "max" );

            return output.join( separator );

        }

        const version_1 = formatSerialized( false, name, "rectangle", left, top, width, height, color, false, false, false, ";" );

        analysis.recievedSerialized( `${name};rectangle;top:${top};left:${left};width:${width};height:${height};color:${color};` );

        analysis.recievedSerialized( version_1 );

        expect( analysis.name ).toEqual( name );
        expect( analysis.initialColor ).toEqual( color );
        expect( analysis.top ).toEqual( top );
        expect( analysis.left ).toEqual( left );
        expect( analysis.width ).toEqual( width );
        expect( analysis.height ).toEqual( height );

        expect( analysis.serialized ).not.toContain( "avg" );
        expect( analysis.serialized ).not.toContain( "min" );
        expect( analysis.serialized ).not.toContain( "max" );

    } );

    test( "point analysis", async () => {

        const instance = await loadFileForTests( THERMOGRAM_PATHS.SOUSTRUH );

        const analysis = getPointAnalysis( "ABCDEFG", instance );

        expect( analysis.top ).toEqual(top);

        expect( analysis.serialized ).toContain( `top:${top}` );
        expect( analysis.serialized ).toContain( `left:${left}` );
        expect( analysis.serialized ).toContain( `color:${analysis.initialColor}` );
        expect( analysis.serialized ).not.toContain( "avg" );
        expect( analysis.serialized ).not.toContain( "max" );
        expect( analysis.serialized ).not.toContain( "min" );

        analysis.setWidth( 14 );
        expect( analysis.width ).toEqual(0);

        analysis.setHeight( 17 );
        expect( analysis.height ).toEqual(0);

        analysis.setLeft( 19 );
        expect( analysis.left ).toEqual(19);

        analysis.setTop( 23 );
        expect( analysis.top ).toEqual(23);

        analysis.serialize();

        expect( analysis.serialized ).toContain( `top:${23}` );
        expect( analysis.serialized ).toContain( `left:${19}` );



    } );

} );