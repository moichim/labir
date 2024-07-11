import { BaseStructureObject } from "../base/BaseStructureObject";
import { IFileInstance } from "../file/IFileInstance";
import { ThermalCanvasLayer } from "../file/instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "../file/instanceUtils/thermalCursorLayer";
import { ThermalFileExport } from "../file/instanceUtils/ThermalFileExports";
import { ThermalListenerLayer } from "../file/instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "../file/instanceUtils/VisibleLayer";
import { ThermalFileInstance } from "../file/ThermalFileInstance";
import { ThermalFileInterface } from "../file/ThermalFileSource";
import { ThermalGroup } from "../group/ThermalGroup";
import { ILrcFrame } from "../parsers/lrc/LrcTrame";
import { ThermalCursorPositionOrUndefined } from "../properties/drives/CursorPositionDrive";
import { ThermalRangeOrUndefined } from "../properties/drives/RangeDriver";
import { TimelineDrive } from "../properties/drives/TimelineDrive";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
import { IThermalInstance } from "../properties/structure";
import { FileReaderService } from "./FileReaderService";
import { ParsedFileBaseInfo, ParsedFileFrame } from "./parsers/types";

export class Instance extends BaseStructureObject implements IFileInstance {

    // Core properties
    public readonly id: string;
    public readonly horizontalLimit: number;
    public readonly verticalLimit: number;

    public get url() { return this.service.thermalUrl; }
    public get visibleUrl() { return this.service.visibleUrl; }
    public get filename() { return this.service.fileName; }



    protected _pixels: number[];
    public get pixels() { return this._pixels; }


    // DOM root
    public root: HTMLDivElement | null = null;

    // DOM layers
    public readonly canvasLayer: ThermalCanvasLayer = new ThermalCanvasLayer( this );
    public readonly visibleLayer: VisibleLayer = new VisibleLayer( this, this.visibleUrl );
    public readonly cursorLayer: ThermalCursorLayer = new ThermalCursorLayer( this );
    public readonly listenerLayer: ThermalListenerLayer = new ThermalListenerLayer( this );

    // Drives
    public readonly timeline: TimelineDrive = new TimelineDrive( this, 0 );
    public readonly cursorValue: CursorValueDrive = new CursorValueDrive(this, undefined);


    protected constructor(
        public readonly group: ThermalGroup,
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
        super();
        this._pixels = frame.pixels;
        this.id = `instance_${this.group.id}_${this.service.thermalUrl}`;
        this.horizontalLimit = (this.width / 4) * 3;
        this.verticalLimit = (this.height / 4) * 3;
        this._pixels = this.timeline.currentFrame.pixels;
    }

    



    frames: ILrcFrame[];
    destroySelfAndBelow: () => void;
    removeAllChildren: () => void;
    reset: () => void;
    fileName: string;
    signature: string;
    version: number;
    streamCount: number;
    fileDataType: number;
    unit: number;
    

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