"use client";

import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { ThermalFileInstance } from "./ThermalFileInstance";
import { BaseStructureObject } from "../base/BaseStructureObject";
import { AbstractFile } from "./AbstractFile";
import { ILrcFrame } from "../loading/mainThread/parsers/lrc/LrcTrame";
import { ThermalLoader } from "../loading/mainThread/parsers/thermalLoader";

/** Properties that are common for both source and instance. @deprecated */
export interface ThermalFileInterface {

    /** Short filenam of the thermal file */
    fileName: string,

    /** Full URL of the thermal file (is used as key for caching) */
    url: string,

    /** Optional URL to a visible file */
    visibleUrl?: string
    
    /** @deprecated LRC only property - should be moved to metadata */
    signature: string,
    
    /** @deprecated LRC only property - should be moved to metadata */
    version: number,

    /** @deprecated LRC only property - should be moved to metadata */
    streamCount: number,

    /** @deprecated LRC only property - should be moved to metadata */
    fileDataType: number,

    /** @deprecated LRC only property - should be moved to metadata */
    unit: number,

    /** The timestamp belonging to the entire frame */
    timestamp: number,
    
    /** Width of the image */
    width: number,

    /** Height of the image */
    height: number,

    /** The current pixels state */
    pixels: number[],

    /** Minimal temperature of the entire file */
    min: number,

    /** Minimal temperature of the entire file */
    max: number,

    frameCount: number

    // frames: ThermalFrames

    
}

export type ThermalFrame = {
    timestamp: number,
    pixels: number[],
}

// type ThermalFrames = Map<number,ThermalFrame>;

/**
 * Stores information about a loaded & parsed thermal file
 * 
 * - loads the file
 * - can create `ThermalFileInstance`
 * - once loaded, the `ThermalFileSource` is cached in `ThermalRegistry.sourcesByUrl`
 * 
 * If a file is cached. The cache is organised by files' URLS. Once a URL is already cached, the existing source us used instead of refetching the file again.
 * 
 * The processing of the file is executed by `Thermalloader`, resp. by parser classes.
 */
export class ThermalFileSource extends BaseStructureObject implements ThermalFileInterface {

    public readonly fileName: string;
    public readonly pixelsForHistogram: number[];
    public readonly duration: number;

    public constructor(
        public readonly url: string,
        public readonly signature: string,
        public readonly version: number,
        public readonly streamCount: number,
        public readonly fileDataType: number,
        public readonly unit: number,
        public readonly width: number,
        public readonly height: number,
        public readonly timestamp: number,
        public readonly pixels: number[],
        public readonly min: number,
        public readonly max: number,
        public readonly frameCount: number,
        public readonly frames: ILrcFrame[],
        public readonly visibleUrl?: string,
    ) {
        super();

        // Get the filename
        this.fileName = this.url.substring( this.url.lastIndexOf( "/" ) + 1 );

        // Get the pixels in frame
        let totalPixelsBuffer: number[] = [];

        this.frames.forEach( frame => {
            totalPixelsBuffer = totalPixelsBuffer.concat( frame.pixels )
        } );

        this.pixelsForHistogram = totalPixelsBuffer;

        // Get the duration
        this.duration = this.frames.length === 0
            ? 0
            : this.frames[ this.frames.length - 1 ].timestamp - this.frames[0].timestamp;
    }

    public static async fromUrl(
        thermalUrl: string,
        visibleUrl?: string
    ) {

        try {
            const file = await ThermalLoader.fromUrl(thermalUrl, visibleUrl);
            return file;
        } catch ( error ) {
            return null;
        }
    }

    public static async fromUrlWithErrors(
        thermalUrl: string,
        visibleUrl?: string
    ) {
        return await ThermalLoader.fromUrl( thermalUrl, visibleUrl );
    }

    public createInstance(
        group: ThermalGroup
    ) {

        const instance = new ThermalFileInstance( this, group );

        instance.postInit();

        return instance as AbstractFile;
    }

    

}