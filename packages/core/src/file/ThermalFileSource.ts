import { ThermalLoader } from "../parsers/thermalLoader";
import { ThermalGroup } from "../group/ThermalGroup";
import { ThermalFileInstance } from "./ThermalFileInstance";

interface ThermalFileSourceInterface {
    url: string,
    signature: string,
    version: number,
    streamCount: number,
    fileDataType: number,
    unit: number,
    width: number,
    height: number,
    timestamp: number,
    pixels: number[],
    min: number,
    max: number,
    visibleUrl?: string
}

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
export class ThermalFileSource extends EventTarget implements ThermalFileSourceInterface {

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
        public readonly visibleUrl?: string
    ) {
        super();
    }

    public static async fromUrl(
        thermalUrl: string,
        visibleUrl?: string
    ) {
        const file = await ThermalLoader.fromUrl(thermalUrl, visibleUrl);

        if (!file)
            return null;

        return file;
    }

    public serialize() {
        return JSON.stringify(this);
    }

    public static fromStorage(stored: string) {
        const parsed = JSON.parse(stored) as ThermalFileSourceInterface;
        return new ThermalFileSource(
            parsed.url,
            parsed.signature,
            parsed.version,
            parsed.streamCount,
            parsed.fileDataType,
            parsed.unit,
            parsed.width,
            parsed.height,
            parsed.timestamp,
            parsed.pixels,
            parsed.min,
            parsed.max,
            parsed.visibleUrl
        );
    }

    public createInstance(
        group: ThermalGroup
    ) {
        return new ThermalFileInstance(this, group);
    }

}