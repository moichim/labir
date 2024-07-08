import { FileLoadingError, FileErrors } from "../FileLoadingError";
import { LrcParser } from "./LrcParser"

type ParserFileType = {
    extension: string,
    minme: string
}

/**
 * Interface for a parser object
 * - all methods must be completely and totally static
 * - data needs to be transferred as ArrayBuffer, since it is serialisable
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects#transferring_objects_between_threads
 */
export interface IParserObject {

    /** Define the supported file type for the purpose of display */
    extensions: ParserFileType[],

    /** Determine whether the file corresponds to the given parser */
    is( buffer: ArrayBuffer, url: string ): boolean,

    dimensions( buffer: ArrayBuffer ): {width: number, height: number }
}

/**
 * Add parser objects here to register them
 */
const parsers = {
    LrcParser
}

const parsersArray = Object.values( parsers );


/**
 * Determines the parser and returns it (throws error if none found)
 * 
 * @throws FileLoadingError
 */
export const determineParser = (
    buffer: ArrayBuffer,
    url: string
) => {
    const parser = parsersArray.find( parser => parser.is( buffer, url ) );
    if ( parser === undefined ) {
        throw new FileLoadingError( FileErrors.MIME_UNSUPPORTED, url, `No parser found for '${url}'.` );
    }
    return parser!;
}


/**
 * Array of all supported file types and extensions
 * - this is only for the purpose of display!
 * - no functionality is relies on this data
 * - all the functionality needs to be implemented in static functions of the parser itself
 */
export const supportedFileTypes: IParserObject["extensions"][] = parsersArray.map( parser => parser.extensions );

