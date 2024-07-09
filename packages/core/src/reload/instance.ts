import { ThermalFileInstance } from "../file/ThermalFileInstance";
import { IThermalInstance } from "../properties/structure";
import { FileReaderService } from "./FileReaderService";
import { ParsedFileBaseInfo, ParsedFileFrame } from "./parsers/types";

export class Instance implements ThermalFileInstance, IThermalInstance {

    public get url() { return this.service.thermalUrl; }
    public get visibleUrl() { return this.service.visibleUrl; }
    public get filename() { return this.service.fileName; }



    protected _pixels: number[];
    public get pixels() { return this._pixels; }

    protected constructor(
        public readonly service: FileReaderService,
        public readonly width: number,
        public readonly height: number,
        public readonly timestamp: number,
        public readonly frameCount: number,
        public readonly duration: number,
        public readonly frameInterval: number,
        public readonly fps: number,
        public readonly min: number,
        public readonly max: number,
        public readonly bytesize: number,
        public readonly averageEmissivity: number,
        public readonly averageReflectedKelvins: number,
        public readonly frame: ParsedFileFrame
    ) {
        this._pixels = frame.pixels;
    }

    public static fromService(
        service: FileReaderService,
        baseInfo: ParsedFileBaseInfo,
        firstFrame: ParsedFileFrame
    ): Instance {

        return new Instance(
            service,
            baseInfo.width,
            baseInfo.height,
            baseInfo.timestamp,
            baseInfo.frameCount,
            baseInfo.duration,
            baseInfo.frameInterval,
            baseInfo.fps,
            baseInfo.min,
            baseInfo.max,
            baseInfo.bytesize,
            baseInfo.averageEmissivity,
            baseInfo.averageReflectedKelvins,
            firstFrame
        );

    }

}