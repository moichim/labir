import { BaseStructureObject } from "../base/BaseStructureObject";
import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { ParsedFileBaseInfo } from "../loading/workers/parsers/structure";
import { AnalysisDrive } from "../properties/analysis/AnalysisDrive";
import { ThermalRangeOrUndefined } from "../properties/drives/RangeDriver";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
import { TimelineDrive } from "../properties/time/playback/TimelineDrive";
import { RecordingDrive } from "../properties/time/recording/RecordingDrive";
import { FileMeta } from "./FileMeta";
import { IFileInstance } from "./IFileInstance";
import { ThermalCanvasLayer } from "./instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "./instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "./instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "./instanceUtils/VisibleLayer";

/** Displayable object for every file type.
 * 
 * This class takes care of the display fundamentals.
 * 
 * Most drivers are set in individual implementations, not here.
 */
export abstract class AbstractFile extends BaseStructureObject implements IFileInstance {


    public readonly id: string;

    /** Internal limit for cursor label position */
    public readonly horizontalLimit: number;

    /** Internal limit for cursor label position */
    public readonly verticalLimit: number;

    public readonly group: ThermalGroup;

    public get pool() {
        return this.group.registry.manager.pool;
    }

    public readonly thermalUrl: string;
    public readonly visibleUrl?: string;
    public readonly fileName: string;

    signature: string = "unknown";
    version: number = -1;
    streamCount: number = -1;
    fileDataType: number = -1;
    unit: number = -1;

    /** Stored core information. They may change in time because of filters. */
    public readonly meta: FileMeta;


    public get width(): number { return this.meta.current.width; }
    public get height(): number { return this.meta.current.height; }
    public get timestamp(): number { return this.meta.current.timestamp; }
    public get duration(): number { return this.meta.current.duration; }
    public get min(): number { return this.meta.current.min; }
    public get max(): number { return this.meta.current.max; }
    public get bytesize(): number { return this.meta.current.bytesize; }
    public get averageEmissivity(): number { return this.meta.current.averageEmissivity; }
    public get averageReflectedKelvins(): number { return this.meta.current.averageReflectedKelvins; }
    public get timelineData() { return this.meta.current.timeline; }
    public get fps(): number { return this.meta.current.fps; }
    public get frameCount(): number { return this.meta.current.frameCount; }

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
    public get mounted() { return this._mounted; }
    protected set mounted(value: boolean) { this._mounted = value; }

    private _built: boolean = false;
    public get built() { return this._built; }
    protected set built(value: boolean) { this._built = value; }


    private _pixels: number[];
    public get pixels() { return this._pixels; }
    public setPixels(value: number[]) {
        this._pixels = value;
        this.onSetPixels(value);

    }

    public abstract getPixelsForHistogram(): number[];


    constructor(
        group: ThermalGroup,
        baseInfo: ParsedFileBaseInfo,
        initialPixels: number[],
        thermalUrl: string,
        visibleUrl?: string
    ) {
        super();
        this.group = group;
        this.id = this.formatId(thermalUrl);

        this.meta = new FileMeta(baseInfo);

        this.thermalUrl = thermalUrl;
        this.visibleUrl = visibleUrl;
        this.fileName = this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/") + 1);

        this.horizontalLimit = (this.width / 4) * 3;
        this.verticalLimit = (this.height / 4) * 3;

        this._pixels = initialPixels;

    }

    public abstract postInit(): ThisType<AbstractFile>;


    protected abstract onSetPixels(value: number[]): void;

    protected abstract formatId(thermalUrl: string): string;

    protected abstract doBuildInnerDom(): void;
    protected abstract doDestroyInnerDom(): void;

    public buildInnerDom(force: boolean = true): void {

        // If forced, clear the existing DOM
        if (this.built === true && force === true ) {
            this.destroyInnerDom();
        }

        // If there is no DOM, create it and mark the root
        if (this.built === false) {

            this.doBuildInnerDom();

            if (this.root) {
                this.root.classList.add("thermalImageRoot");
                this.root.style.transition = "border-color .1s ease-in-out";
                this.root.style.zIndex = "10";
                this.root.style.position = "relative";
                this.root.style.lineHeight = "0";

                this.root.dataset.thermalFile = this.id;
                this.root.dataset.built = "true";

            }

            this.built = true;

        }

    }

    public destroyInnerDom() {

        this.unmountListener();

        // Unmark the root
        if (this.root) {
            this.root.classList.remove("thermalImageRoot");
            this.root.style.removeProperty("transition");
            this.root.style.removeProperty("zIndex");
            this.root.style.removeProperty("position");
            this.root.style.removeProperty("lineHeight");
            this.root.dataset.thermalFile = undefined;
            this.root.dataset.built = "false";
        }

        // Destroy anything that exists
        this.doDestroyInnerDom();
        
        this.built = false;
    }

    /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
    protected attachToDom(
        container: HTMLDivElement
    ) {

        if (this.root !== null || this.mounted === true) {
            console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`);

            this.destroyInnerDom();

            // this.detachFromDom();
            // this.unmountListener();
        }

        this.root = container;

        this.buildInnerDom();

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
        this.mounted = true;


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

        this.unmountListener();

        this.destroyInnerDom();

        // this.visibleLayer.unmount();
        // this.canvasLayer.unmount();
        // this.cursorLayer.unmount();

        this.mounted = false;

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
        if (this.mounted === true)
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

        const temperature = this.getTemperatureAtPoint(x, y);

        const min = this.group.registry.range.value?.from;
        const max = this.group.registry.range.value?.to;

        if (min !== undefined && max !== undefined) {
            const temperatureRelative = temperature - min;
            const temperatureAspect = temperatureRelative / (max - min);
            const colorIndex = Math.round(255 * temperatureAspect);
            return this.group.registry.palette.currentPalette.pixels[colorIndex]
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

}
