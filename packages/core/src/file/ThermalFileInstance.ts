"use client";

import { ThermalGroup } from "../group/ThermalGroup";
import { ILrcFrame } from "../parsers/lrc/LrcTrame";
import { TimelineDrive } from "../properties/drives/TimelineDrive";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
import { AbstractFile } from "./IFileInstance";
import { ThermalFileSource } from "./ThermalFileSource";
import { ThermalFileExport } from "./instanceUtils/ThermalFileExports";
import { VisibleLayer } from "./instanceUtils/VisibleLayer";
import { ThermalCanvasLayer } from "./instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "./instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "./instanceUtils/thermalListenerLayer";


/**
 * @todo implement variants toggling
 * @todo implement activation properly!
 * @todo implement unmounting
 * @todo rename binding to mounting
 */
export class ThermalFileInstance extends AbstractFile {



    // Core properties are mirrored from the source

    /** Optional visible URL */
    declare public signature: string;
    public get dataType() { return this.source.fileDataType; }
    declare public unit: number;

    declare public version: number;
    declare public streamCount: number;
    declare public fileDataType: number;
    declare public frames: ILrcFrame[];
    public getPixelsForHistogram() { return this.source.pixelsForHistogram }

    /**
     * Frames
     */
    declare public timeline: TimelineDrive;






    // Necessary properties are calculated in the constructor

    public constructor(
        protected readonly source: ThermalFileSource,
        public readonly group: ThermalGroup
    ) {

        super(
            group,
            source.url,
            source.width,
            source.height,
            source.pixels,
            source.timestamp,
            source.duration,
            source.min,
            source.max,
            source.frameCount,
            source.visibleUrl
        );



    }

    /** @deprecated */
    postInit() {

        this.signature = this.source.signature;
        this.unit = this.source.unit;
        this.version = this.source.version;
        this.streamCount = this.source.streamCount;
        this.fileDataType = this.source.fileDataType;

        this.frames = this.source.frames;
        this.timeline = new TimelineDrive(this, 0);
        this.pixels = this.timeline.currentFrame.pixels;

        this.canvasLayer = new ThermalCanvasLayer(this);
        this.visibleLayer = new VisibleLayer(this, this.visibleUrl);
        this.cursorLayer = new ThermalCursorLayer(this);
        this.listenerLayer = new ThermalListenerLayer(this);
        this.cursorValue = new CursorValueDrive(this, undefined);


        return this;
    }

    protected formatId(thermalUrl: string) {
        return `instance_${this.group.id}_${thermalUrl}`;
    }

    protected onSetPixels(value: number[]): void {

        value;

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


    //////  Human readable data shall be moved elsewhere!

    public get unitHuman() {
        return this.unit === 0
            ? "none"
            : this.unit === 1
                ? "intensity"
                : this.unit === 2
                    ? "°C"
                    : this.unit === 3
                        ? "Kelvin"
                        : "unit not specified"
    }

    public get dataTypeHuman() {
        return this.dataType === 0
            ? "Float16"
            : this.dataType === 1
                ? "Float32"
                : this.dataType === 2
                    ? "Int16"
                    : "error parsing data type"
    }




    /**
     * Exports
     */
    protected _export?: ThermalFileExport;
    /** Lazy-loaded `ThermalFileExport` object */
    public get export() {
        if (!this._export) {
            const newExport = new ThermalFileExport(this);
            this._export = newExport;
        }
        return this._export;
    }


    /** 
     * Export the current canvas state as PNG 
     * @deprecated call this.export directly
    */
    public exportAsPng() {
        this.export.canvasAsPng();
    }

    /** 
     * Export thermal parameters as CSV table 
     * @deprecated call this.export directly
    */
    public exportThermalDataAsSvg() {
        this.export.thermalDataAsCsv();
    }

}