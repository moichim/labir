import { AbstractFile } from "../file/IFileInstance";
import { ThermalGroup } from "../group/ThermalGroup";
import { ILrcFrame } from "../parsers/lrc/LrcTrame";
import { FileReaderService } from "./FileReaderService";
import { ParsedFileBaseInfo, ParsedFileFrame } from "./parsers/types";

export class Instance extends AbstractFile {



    public exportAsPng(): void {
        throw new Error("Method not implemented.");
    }
    public exportThermalDataAsSvg(): void {
        throw new Error("Method not implemented.");
    }


    protected constructor(
        public readonly group: ThermalGroup,
        public readonly service: FileReaderService,
        public readonly width: number,
        public readonly height: number,
        public readonly timestamp: number,
        public readonly frameCount: number,
        public readonly duration: number,
        public readonly frameInterval: number,
        initialPixels: number[],
        public readonly fps: number,
        public readonly min: number,
        public readonly max: number,
        public readonly bytesize: number,
        public readonly averageEmissivity: number,
        public readonly averageReflectedKelvins: number,
        public readonly frame: ParsedFileFrame
    ) {
        super( 
            group,
            service.thermalUrl, 
            width, 
            height,
            initialPixels,
            timestamp,
            duration,
            min,
            max,
            frameCount,
            service.visibleUrl 
        );
        this.pixels = frame.pixels;
        //this._pixels = this.timeline.currentFrame.pixels;
    }

    protected formatId() {
        return `instance_${this.group.id}_${this.service.thermalUrl}`;
    }

    protected onSetPixels(value: number[]): void {
        console.log( value );
        throw new Error("Method not implemented.");
    }
    

    public static fromService(
        group: ThermalGroup,
        service: FileReaderService,
        baseInfo: ParsedFileBaseInfo,
        firstFrame: ParsedFileFrame
    ): Instance {

        return new Instance(
            group,
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