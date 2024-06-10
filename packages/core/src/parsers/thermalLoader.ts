import fetch from 'cross-fetch';

import AbstractParser from "./AbstractParser";
import LrcParser from './lrcParser';

/**
 * Loader of thermal files from the web or from the user dropin.
 */
export class ThermalLoader {

    public thermalUrl!: string;
    public visibleUrl?: string;
    protected parser?: AbstractParser;
    public blob!: Blob;

    protected constructor() {
    }

    /** Load a thermal file from an URL and return a `ThermalFileSource` instance. */
    public static async fromUrl(
        thermalUrl: string,
        visibleUrl?: string
    ) {
        const loader = new ThermalLoader;
        loader.thermalUrl = thermalUrl;
        loader.visibleUrl = visibleUrl;
        return await loader.loadFromUrl();
    }

    protected async loadFromUrl() {

        const response = await fetch( this.thermalUrl );
        this.blob = await response.blob();

        if ( response.status !== 200 ) {
            throw new Error( `There was an error loading '${this.thermalUrl}'` );
        }

        this.parser = this.assignParserInstance();

        return await this.parser.parse();
    }


    /** Load a thermal file from a provided Blob/File and return a `ThermalFileSource` instance. */
    public static async fromFile(
        file: File
    ) {
        const loader = new ThermalLoader;
        loader.thermalUrl = file.name;
        loader.blob = file;
        return await loader.loadFromBlob();
    }

    public async loadFromBlob() {

        this.parser = this.assignParserInstance();

        return await this.parser.parse();

    }

    /** 
     * Determine the file type and return the corresponding parser. 
     * @todo In the future, new parsers shall be added.
     */
    protected assignParserInstance() {
        return new LrcParser( this.thermalUrl, this.blob, this.visibleUrl );
    }

}