import { HttpResponse, http } from "msw";
import fs from "node:fs";
import path from "path"

export enum THERMOGRAM_PATHS {
    
    /** A thermogram produced by TIMI Edu camera */
    SOUSTRUH = "https://edu.labir.cz/thermogram.lrc",

    /** Tušňáci ze ZOO by Jiří Tesač. Not from TIMI Edu camera. */
    TUCNACI = "https://edu.labir.cz/tucnaci.lrc",
    
    /** A thermogram produced by TIMI Edu camera */
    CAS = "https://edu.labir.cz/cas.lrc",

    /** A non existing route */
    ERR404 = "https://edu.labir.cz/error/404",

    /** A LRC file containing a sequence of frames */
    SEQUENCE = "https://edu.labir.cz/sequence.lrc"
}

const thermogramMockHandlers =  [

    http.get( THERMOGRAM_PATHS.SOUSTRUH, () => {
        const file = fs.readFileSync( path.resolve( "../../public/soustruh.lrc" ) );

        return HttpResponse.arrayBuffer( file, {
            headers: {
                "Content-Type": "octet-stream"
            }
        } );
    } ),

    http.get( THERMOGRAM_PATHS.SEQUENCE, () => {
        const file = fs.readFileSync( path.resolve( "../../public/sequence.lrc" ) );

        return HttpResponse.arrayBuffer( file, {
            headers: {
                "Content-Type": "octet-stream"
            }
        } );
    } ),


    http.get( THERMOGRAM_PATHS.TUCNACI, () => {
        const file = fs.readFileSync( path.resolve( "../../public/tucnaci_04.lrc" ) );

        return HttpResponse.arrayBuffer( file, {
            headers: {
                "Content-Type": "octet-stream"
            }
        } );
    } ),

    http.get( THERMOGRAM_PATHS.CAS, () => {
        const file = fs.readFileSync( path.resolve( "../../public/image-thermal 2024-01-12 14-09-37.lrc" ) );

        return HttpResponse.arrayBuffer( file, {
            headers: {
                "Content-Type": "octet-stream"
            }
        } );
    } ),


    http.get( THERMOGRAM_PATHS.ERR404, () => {
        return new HttpResponse(null, { status: 404 })
    } )
]


export default thermogramMockHandlers;