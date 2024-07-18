import { AbstractFile } from "./AbstractFile";
import { ThermalCanvasLayer } from "./instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "./instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "./instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "./instanceUtils/VisibleLayer";
import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { TimelineDrive } from "../properties/time/TimelineDrive";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
import { ThermalFileReader } from "../loading/workers/ThermalFileReader";
import { ParsedFileBaseInfo, ParsedFileFrame } from "../loading/workers/parsers/types";

export class Instance extends AbstractFile {

    declare public timeline: TimelineDrive;

    public exportAsPng(): void {
        throw new Error("Method not implemented.");
    }
    public exportThermalDataAsSvg(): void {
        throw new Error("Method not implemented.");
    }


    protected constructor(
        public readonly group: ThermalGroup,
        public readonly service: ThermalFileReader,
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
        public readonly firstFrame: ParsedFileFrame,
        public readonly timelineData: ParsedFileBaseInfo["timeline"]
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
        this.pixels = firstFrame.pixels;
    }

    public postInit() {
        this.canvasLayer = new ThermalCanvasLayer(this);
        this.visibleLayer = new VisibleLayer(this, this.visibleUrl);
        this.cursorLayer = new ThermalCursorLayer(this);
        this.listenerLayer = new ThermalListenerLayer(this);
        this.cursorValue = new CursorValueDrive(this, undefined);
        this.timeline = new TimelineDrive( this, 0, this.timelineData, this.firstFrame );
        this.timeline.init();
        return this;
    }

    protected formatId( thermalUrl: string ) {
        return `instance_${this.group.id}_${thermalUrl}`;
    }

    protected onSetPixels(value: number[]): void {
        
        value;
        // throw new Error("Method not implemented.");


        // If this file is loaded, recalculate all side effects
        if (this.mountedBaseLayers) {
            
            // Redraw
            this.draw();

            // Recalculate the value in the group container
            this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value);

            // Recalculate the value in the local cursor layer
            if (this.group.cursorPosition.value) {

                // Get the new value
                const value = this.getTemperatureAtPoint(this.group.cursorPosition.value.x, this.group.cursorPosition.value.y);

                // Set the value
                this.cursorLayer.setValue(value);
            }
        }
        
    }

    public getPixelsForHistogram(): number[] {
        return [];
    }
    

    public static fromService(
        group: ThermalGroup,
        service: ThermalFileReader,
        baseInfo: ParsedFileBaseInfo,
        firstFrame: ParsedFileFrame,
    ): Instance {

        const instance = new Instance(
            group,
            service,
            baseInfo.width,
            baseInfo.height,
            baseInfo.timestamp,
            baseInfo.frameCount,
            baseInfo.duration,
            baseInfo.frameInterval,
            firstFrame.pixels,
            baseInfo.fps,
            baseInfo.min,
            baseInfo.max,
            baseInfo.bytesize,
            baseInfo.averageEmissivity,
            baseInfo.averageReflectedKelvins,
            firstFrame,
            baseInfo.timeline
        );

        return instance.postInit();

    }

}