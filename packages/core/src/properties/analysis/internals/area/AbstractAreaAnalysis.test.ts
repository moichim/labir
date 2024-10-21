import { describe, expect, test } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../../../devserver/node/mocks';
import { loadFileForTests } from '../../../../../devserver/node/scaffold';
import {AbstractAreaAnalysis} from "./AbstractAreaAnalysis";
import { Instance } from '../../../../file/instance';


const left = 10;
const top = 20;
const right = 30;
const bottom = 40;

const width = right - left;
const height = bottom - top;



describe("AreaAnalysis", async () => {

    

    const getId = () => ( Math.random() * 1000000 ).toFixed(0);

    const getRectAnalysis = ( instance: Instance ) => {
        return instance.analysis.layers.placeRectAt(getId(), top, left, right, bottom);
    }

    const getEllipsisAnalysis = ( instance: Instance  ) => {
        return instance.analysis.layers.placeEllipsisAt(getId(), top, left, right, bottom);
    }

    const resetHorizontal = ( analysis: AbstractAreaAnalysis ) => {
        analysis.setLeft( left );
        analysis.setRight( right );
        expect( analysis.left ).toEqual( left );
        expect( analysis.right ).toEqual( right );
        expect( analysis.width ).toEqual( width );
    }

    const resetVertical = ( analysis: AbstractAreaAnalysis ) => {
        analysis.setTop( top );
        analysis.setBottom( bottom );
        expect( analysis.top ).toEqual( top );
        expect( analysis.bottom ).toEqual( bottom );
        expect( analysis.height ).toEqual( height );
    }

    

    test("horizontal setters", async () => {

        const instance = await loadFileForTests(THERMOGRAM_PATHS.SOUSTRUH);

        const analysis = getEllipsisAnalysis( instance );

        expect(analysis.top).toEqual(top);
        expect(analysis.left).toEqual(left);
        expect(analysis.right).toEqual(right);
        expect(analysis.bottom).toEqual(bottom);

        expect(analysis.width).toEqual(width);
        expect(analysis.height).toEqual(height);

        // Inset slightly

        // Inset slightly left
        analysis.setLeft(left + 5);
        expect(analysis.left).toEqual(left + 5);
        expect(analysis.width).toEqual(width - 5);
        expect(analysis.right).toEqual(right);

        // Set back
        resetHorizontal( analysis );

        // Inset slightly right
        analysis.setRight(right - 5);
        expect(analysis.width).toEqual(width - 5);
        expect(analysis.left).toEqual(left);
        expect(analysis.right).toEqual(right - 5);

        // Set back
        resetHorizontal( analysis );

        // Outset slightly

        // Outset slightly left
        analysis.setLeft(left - 5);
        expect(analysis.left).toEqual(left - 5);
        expect(analysis.width).toEqual(width + 5);
        expect(analysis.right).toEqual(right);

        // Set back
        resetHorizontal( analysis );

        // Outset slightly right
        analysis.setRight(right - 7);
        expect(analysis.right).toEqual(right - 7);
        expect(analysis.width).toEqual(width - 7);
        expect(analysis.left).toEqual(left);

        // Set back
        resetHorizontal( analysis );


        // Negative left
        analysis.setLeft(-1000);
        expect(analysis.left).toEqual(0);
        expect(analysis.right).toEqual(right);
        expect(analysis.width).toEqual(right);

        // Set back
        resetHorizontal( analysis );

        // Negative right
        analysis.setRight(-1000);
        expect(analysis.left).toEqual(0);
        expect(analysis.right).toEqual(left);
        expect(analysis.width).toEqual(left);

        // Set back
        resetHorizontal( analysis );

        // Too much right
        analysis.setRight(analysis.file.width * 2);
        expect(analysis.right).toEqual(analysis.file.width - 1);
        expect(analysis.left).toEqual(left);
        expect(analysis.width).toEqual(analysis.file.width - 1 - left);

        // Set back
        resetHorizontal( analysis );

        // Too much left
        analysis.setLeft(analysis.file.width * 2);
        expect(analysis.left).toEqual(right);
        expect(analysis.right).toEqual(analysis.file.width - 1);
        expect( analysis.width ).toEqual( analysis.file.width - 1 - right );

        // Set back
        resetHorizontal( analysis );

        // Set near from inside left
        analysis.setLeft( right - 5 );
        expect( analysis.left ).toEqual( right - 5 );
        expect( analysis.right ).toEqual( right );
        expect( analysis.width ).toEqual( 5 );

        // Set back
        resetHorizontal( analysis );

        // Set near from inside right
        analysis.setRight( left + 5 );
        expect( analysis.left ).toEqual( left );
        expect( analysis.right ).toEqual( left + 5 );
        expect( analysis.width ).toEqual( 5 );

        // Set back
        resetHorizontal( analysis );

        // Overlapping left
        analysis.setRight( left - 5 );
        expect( analysis.left ).toEqual( left - 5 );
        expect( analysis.right ).toEqual( left );
        expect( analysis.width ).toEqual( 5 );

        // Set back
        resetHorizontal( analysis );

        // Overlapping right
        analysis.setLeft( right + 5 );
        expect( analysis.left ).toEqual( right );
        expect( analysis.right ).toEqual( right + 5 );
        expect( analysis.width ).toEqual( 5 );

        resetHorizontal( analysis );

        // Extrema cases

        // NaN
        analysis.setLeft( NaN );
        expect( analysis.left ).toEqual( left );



    });

    test("vertical setters", async () => {

        const instance = await loadFileForTests(THERMOGRAM_PATHS.SOUSTRUH);

        const analysis = getEllipsisAnalysis( instance );

        expect(analysis.top).toEqual(top);
        expect(analysis.left).toEqual(left);
        expect(analysis.right).toEqual(right);
        expect(analysis.bottom).toEqual(bottom);

        expect(analysis.width).toEqual(width);
        expect(analysis.height).toEqual(height);

        // Inset slightly

        // Inset slightly left
        analysis.setTop(top + 5);
        expect(analysis.top).toEqual(top + 5);
        expect(analysis.height).toEqual(height - 5);
        expect(analysis.bottom).toEqual(bottom);

        // Set back
        resetVertical( analysis );

        // Inset slightly right
        analysis.setBottom(bottom - 5);
        expect(analysis.height).toEqual(height - 5);
        expect(analysis.top).toEqual(top);
        expect(analysis.bottom).toEqual(bottom - 5);



        ///////////////////////////////////////
        ///                                 ///
        ///                                 ///
        ///     HERE AM I                   ///
        ///                                 ///
        ///                                 ///
        ///////////////////////////////////////





        // Set back
        resetHorizontal( analysis );

        // Outset slightly

        // Outset slightly left
        analysis.setLeft(left - 5);
        expect(analysis.left).toEqual(left - 5);
        expect(analysis.width).toEqual(width + 5);
        expect(analysis.right).toEqual(right);

        // Set back
        resetHorizontal( analysis );

        // Outset slightly right
        analysis.setRight(right - 7);
        expect(analysis.right).toEqual(right - 7);
        expect(analysis.width).toEqual(width - 7);
        expect(analysis.left).toEqual(left);

        // Set back
        resetHorizontal( analysis );


        // Negative left
        analysis.setLeft(-1000);
        expect(analysis.left).toEqual(0);
        expect(analysis.right).toEqual(right);
        expect(analysis.width).toEqual(right);

        // Set back
        resetHorizontal( analysis );

        // Negative right
        analysis.setRight(-1000);
        expect(analysis.left).toEqual(0);
        expect(analysis.right).toEqual(left);
        expect(analysis.width).toEqual(left);

        // Set back
        resetHorizontal( analysis );

        // Too much right
        analysis.setRight(analysis.file.width * 2);
        expect(analysis.right).toEqual(analysis.file.width - 1);
        expect(analysis.left).toEqual(left);
        expect(analysis.width).toEqual(analysis.file.width - 1 - left);

        // Set back
        resetHorizontal( analysis );

        // Too much left
        analysis.setLeft(analysis.file.width * 2);
        expect(analysis.left).toEqual(right);
        expect(analysis.right).toEqual(analysis.file.width - 1);
        expect( analysis.width ).toEqual( analysis.file.width - 1 - right );

        // Set back
        resetHorizontal( analysis );

        // Set near from inside left
        analysis.setLeft( right - 5 );
        expect( analysis.left ).toEqual( right - 5 );
        expect( analysis.right ).toEqual( right );
        expect( analysis.width ).toEqual( 5 );

        // Set back
        resetHorizontal( analysis );

        // Set near from inside right
        analysis.setRight( left + 5 );
        expect( analysis.left ).toEqual( left );
        expect( analysis.right ).toEqual( left + 5 );
        expect( analysis.width ).toEqual( 5 );

        // Set back
        resetHorizontal( analysis );

        // Overlapping left
        analysis.setRight( left - 5 );
        expect( analysis.left ).toEqual( left - 5 );
        expect( analysis.right ).toEqual( left );
        expect( analysis.width ).toEqual( 5 );

        // Set back
        resetHorizontal( analysis );

        // Overlapping right
        analysis.setLeft( right + 5 );
        expect( analysis.left ).toEqual( right );
        expect( analysis.right ).toEqual( right + 5 );
        expect( analysis.width ).toEqual( 5 );

    });

});