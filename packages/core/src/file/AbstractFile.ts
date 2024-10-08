import { BaseStructureObject } from "../base/BaseStructureObject";
import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { AnalysisDrive } from "../properties/analysis/AnalysisDrive";
import { ThermalRangeOrUndefined } from "../properties/drives/RangeDriver";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
import { TimelineDrive } from "../properties/time/playback/TimelineDrive";
import { RecordingDrive } from "../properties/time/recording/RecordingDrive";
import { IFileInstance } from "./IFileInstance";
import { ThermalCanvasLayer } from "./instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "./instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "./instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "./instanceUtils/VisibleLayer";

/** Define methods for all files. 
 * @deprecated Replace by Instance! This class is not needed anymore since it comes from the time of `ThermalFileInstance` */
export abstract class AbstractFile extends BaseStructureObject implements IFileInstance {


    public readonly id: string;
    public readonly horizontalLimit: number;
    public readonly verticalLimit: number;

    public readonly group: ThermalGroup;
    public get pool() {
        return this.group.registry.manager.pool;
    }

    public readonly url: string;
    public readonly thermalUrl: string;
    public readonly visibleUrl?: string;
    public readonly fileName: string;
    public readonly frameCount: number;

    signature: string = "unknown";
    version: number = -1;
    streamCount: number = -1;
    fileDataType: number = -1;
    unit: number = -1;


    public width: number;
    public height: number;
    public timestamp: number;
    public duration: number;
    public min: number;
    public max: number;

    private _isHover: boolean = false;
    public get isHover() { return this._isHover; }
    protected set isHover(value: boolean) {
        this._isHover = value;
    }


    // DOM root
    public root: HTMLDivElement | null = null;

    // DOM layers
    public canvasLayer!: ThermalCanvasLayer;
    public visibleLayer!: VisibleLayer;
    public cursorLayer!: ThermalCursorLayer;
    public listenerLayer!: ThermalListenerLayer;

    // Drives
    public timeline!: TimelineDrive;
    public cursorValue!: CursorValueDrive;
    public analysis!: AnalysisDrive;
    

    // Recording is lazyloaded

    public recording!: RecordingDrive;

    private _mounted: boolean = false;
    public get mountedBaseLayers() { return this._mounted; }
    public set mountedBaseLayers(value: boolean) {
        this._mounted = value;
    }


    private _pixels: number[];
    public get pixels() { return this._pixels; }
    public set pixels(value: number[]) {
        this._pixels = value;
        this.onSetPixels(value);
        
    }

    public abstract getPixelsForHistogram(): number[];


    constructor(
        group: ThermalGroup,

        thermalUrl: string,

        width: number,
        height: number,
        initialPixels: number[],
        timestamp: number,
        duration: number,
        min: number,
        max: number,
        frameCount: number,

        visibleUrl?: string
    ) {
        super();
        this.group = group;
        this.id = this.formatId(thermalUrl);

        this.url = thermalUrl;
        this.thermalUrl = thermalUrl;
        this.visibleUrl = visibleUrl;
        this.fileName = this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/") + 1);

        this.width = width;
        this.height = height;
        this.timestamp = timestamp;
        this.duration = duration;
        this.min = min;
        this.max = max;
        this.frameCount = frameCount;

        this.horizontalLimit = (this.width / 4) * 3;
        this.verticalLimit = (this.height / 4) * 3;

        this._pixels = initialPixels;
    }

    public abstract postInit(): AbstractFile;


    protected abstract onSetPixels(value: number[]): void;

    protected abstract formatId(thermalUrl: string): string;

    /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
    protected attachToDom(
        container: HTMLDivElement
    ) {

        if (this.root !== null || this.mountedBaseLayers === true) {
            console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`);
            this.detachFromDom();
            this.unmountListener();
        }

        this.root = container;

        // Container styles
        /** @todo there was a reason for border */
        // this.root.style.borderWidth = "2px";
        // this.root.style.borderStyle = "solid";
        // this.root.style.borderColor = "transparent";
        // this.root.style.margin = "-1px";
        this.root.classList.add("thermalImageRoot");
        this.root.style.transition = "border-color .1s ease-in-out";
        this.root.style.zIndex = "10";
        this.root.style.position = "relative";
        this.root.style.lineHeight = "0";

        // Visible layer is mounted on the bottom 
        // and only if the URL exists
        if (this.visibleLayer.exists)
            this.visibleLayer.mount();

        // The rest is mounted in the given order
        this.canvasLayer.mount();
        this.cursorLayer.mount();


        // Container dataset
        this.root.dataset.thermalFile = this.id;
        this.root.dataset.mounted = "true";

        // Mount the interactions
        this.mountListener();

        // Global state
        this.mountedBaseLayers = true;


    }

    /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
    protected detachFromDom() {

        if (this.root === undefined) {
            console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`);
        }

        if (this.root) {
            this.root.dataset.mounted = "false";
            this.root.dataset.thermalFile = undefined;
        }
        // this.root?.remove();
        this.visibleLayer.unmount();
        this.canvasLayer.unmount();
        this.cursorLayer.unmount();

        this.unmountListener();

        this.mountedBaseLayers = false;

    }


    protected abstract mountListener(): void;
    protected abstract unmountListener(): void;

    

    public mountToDom(container: HTMLDivElement): void {
        this.attachToDom(container);
    }

    public unmountFromDom(): void {
        this.detachFromDom();
    }

    public draw() {
        if (this.mountedBaseLayers === true)
            this.canvasLayer.draw();
    }

    public recievePalette(palette: string | number): void {
        palette;
        this.draw();
    }

    public destroySelfAndBelow() {
        this.detachFromDom();
    };

    public removeAllChildren() {
        this.detachFromDom();
    };

    

    public getTemperatureAtPoint(
        x: number,
        y: number
    ): number {

        const index = (y * this.width) + x;
        return this.pixels[index];

    }

    public getColorAtPoint(
        x: number,
        y: number
    ): string | undefined {

        const temperature = this.getTemperatureAtPoint( x, y );

        const min = this.group.registry.range.value?.from;
        const max = this.group.registry.range.value?.to;

        if ( min !== undefined && max !== undefined ) {
            const temperatureRelative = temperature - min;
            const temperatureAspect = temperatureRelative / ( max - min );
            const colorIndex = Math.round( 255 * temperatureAspect );
            return this.group.registry.palette.currentPalette.pixels[ colorIndex ]
        }

        return undefined;
    }

    public recieveRange(
        value: ThermalRangeOrUndefined
    ) {
        if (value !== undefined) {
            this.draw();
        }
    }

    public reset() { }

    public recieveOpacity(value: number) {

        if (this.visibleLayer && this.canvasLayer) {
            this.canvasLayer.opacity = value;
        }
    }

    public abstract exportAsPng(): void;

    public abstract exportThermalDataAsSvg(): void;

}
