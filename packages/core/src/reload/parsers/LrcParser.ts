import { IParserObject } from ".";

const extensions: IParserObject["extensions"] = [{
    extension: "lrc",
    minme: "application/octet-stream"
}];

const is: IParserObject["is"] = (data, url) => {
    
    // Check if the URL has appropriate extension
    const hasCorrectExtension = url.endsWith( "lrc" );
    
    // Check if the file contains correct signature
    const decoder = new TextDecoder();
    const hasCorrectSignature = decoder.decode( data.slice( 0, 4 ) ) === "LRC\0";

    // Return value
    return hasCorrectExtension && hasCorrectSignature;    

}


const dimensions: IParserObject["dimensions"] = buffer => {
    const view = new DataView( buffer );
    return {
        width: view.getUint16( 17, true ),
        height: view.getUint16( 19, true )
    }
}

export const LrcParser: IParserObject = {
    extensions,
    is,
    dimensions
}