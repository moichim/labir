import { AbstractFile } from "../file/IFileInstance";
import { ThermalCanvasLayer } from "../file/instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "../file/instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "../file/instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "../file/instanceUtils/VisibleLayer";
import { ThermalGroup } from "../group/ThermalGroup";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
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

    public postInit() {
        this.canvasLayer = new ThermalCanvasLayer(this);
        this.visibleLayer = new VisibleLayer(this, this.visibleUrl);
        this.cursorLayer = new ThermalCursorLayer(this);
        this.listenerLayer = new ThermalListenerLayer(this);
        this.cursorValue = new CursorValueDrive(this, undefined);

        return this;
    }

    protected formatId( thermalUrl: string ) {
        return `instance_${this.group.id}_${thermalUrl}`;
    }

    protected onSetPixels(value: number[]): void {
        console.log( value );
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
        service: FileReaderService,
        baseInfo: ParsedFileBaseInfo,
        firstFrame: ParsedFileFrame
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
            firstFrame
        );

        return instance.postInit();

    }

}