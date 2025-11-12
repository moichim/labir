import { BaseStructureObject } from "../base/BaseStructureObject";
import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { ParsedFileBaseInfo } from "../loading/workers/parsers/structure";
import { AnalysisDrive } from "../properties/analysis/analysis/AnalysisDrive";
import { ThermalRangeOrUndefined } from "../properties/scale/RangeDriver";
import { CursorValueDrive } from "../properties/cursor/CursorValueDrive";
import { TimelineDrive } from "../properties/time/playback/TimelineDrive";
import { RecordingDrive } from "../properties/time/recording/RecordingDrive";
import { InstanceDOM } from "./dom/InstanceDom";
import { FileMeta } from "./utils/FileMeta";
import { IFileInstance } from "./IFileInstance";
import { ThermalCanvasLayer } from "./dom/layers/thermalCanvasLayer";
import ThermalCursorLayer from "./dom/layers/thermalCursorLayer";
import { ThermalListenerLayer } from "./dom/layers/thermalListenerLayer";
import { VisibleLayer } from "./dom/layers/VisibleLayer";
import { AbstractRenderer } from "./render/AbstractRenderer";
import { CpuRenderer } from "./render/CpuRenderer";
import { GlRenderer } from "./render/GlRenderer";

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

    /** @deprecated Use meta instead */
    public get width(): number { return this.meta.current.width; }
    /** @deprecated Use meta instead */
    public get height(): number { return this.meta.current.height; }
    /** @deprecated Use meta instead */
    public get timestamp(): number { return this.meta.current.timestamp; }
    /** @deprecated Use meta instead */
    public get duration(): number { return this.meta.current.duration; }
    /** @deprecated Use meta instead */
    public get min(): number { return this.meta.current.min; }
    /** @deprecated Use meta instead */
    public get max(): number { return this.meta.current.max; }
    /** @deprecated Use meta instead */
    public get bytesize(): number { return this.meta.current.bytesize; }
    /** @deprecated Use meta instead */
    public get averageEmissivity(): number { return this.meta.current.averageEmissivity; }
    /** @deprecated Use meta instead */
    public get averageReflectedKelvins(): number { return this.meta.current.averageReflectedKelvins; }
    /** @deprecated Use meta instead */
    public get timelineData() { return this.meta.current.timeline; }
    /** @deprecated Use meta instead */
    public get fps(): number { return this.meta.current.fps; }
    /** @deprecated Use meta instead */
    public get frameCount(): number { return this.meta.current.frameCount; }

    protected _dom?: InstanceDOM;
    public get dom() { return this._dom; }


    /** Renderer pro vykreslování do canvasu */
    protected renderer?: AbstractRenderer;


    public get hover() { 
        if ( this.dom )
            return this.dom.hover;
        return false;
    }


    // DOM root
    /** @deprecated use DOM object instead */
    public get root(): HTMLDivElement | null {
        if ( this.dom ) {
            return this.dom.root;
        }
        return null;
    };

    // DOM layers
    /** @deprecated use DOM object instead */
    public get canvasLayer() { return this.dom!.canvasLayer!;}
    /** @deprecated use DOM object instead */
    public get visibleLayer() {return this.dom!.visibleLayer!}
    /** @deprecated use DOM object instead */
    public get cursorLayer() { return this.dom!.cursorLayer! };
    /** @deprecated use DOM object instead */
    public get listenerLayer() { return this.dom!.listenerLayer! };

    // Drives
    public timeline!: TimelineDrive;
    public cursorValue!: CursorValueDrive;
    public analysis!: AnalysisDrive;


    // Recording is lazyloaded

    public recording!: RecordingDrive;

    /** @deprecated use DOM object instead */
    private _mounted: boolean = false;
    /** @deprecated use DOM object instead */
    public get mounted() { return this._mounted; }
    /** @deprecated use DOM object instead */
    protected set mounted(value: boolean) { this._mounted = value; }

    /** @deprecated use DOM object instead */
    private _built: boolean = false;
    /** @deprecated use DOM object instead */
    public get built() { return this._built; }
    /** @deprecated use DOM object instead */
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

    public abstract buildServices(): ThisType<AbstractFile>;


    protected abstract onSetPixels(value: number[]): void;

    protected abstract formatId(thermalUrl: string): string;

    public abstract createInnerDom(): {
        canvasLayer: ThermalCanvasLayer,
        visibleLayer: VisibleLayer,
        cursorLayer: ThermalCursorLayer,
        listenerLayer: ThermalListenerLayer,
    }


    public abstract hydrateListener(
        dom: InstanceDOM
    ): void;

    public abstract dehydrateListener(
        dom: InstanceDOM
    ): void;

    private rendererFactory(
        canvas: HTMLCanvasElement
    ): AbstractRenderer {
        const gl = canvas.getContext('webgl2');
        if (gl) {
            return new GlRenderer(this, canvas);
        } else {
            return new CpuRenderer(this, canvas);
        }
    }



    public mountToDom(container: HTMLDivElement): void {

        // Delete any existing DOM binding
        if ( this._dom !== undefined ) {
            this._dom.destroy();
            this._dom = undefined;
        }

        // Append a new DOM binding
        this._dom = new InstanceDOM(this, container);
        
        this._dom.build();
        


        this.renderer = this.rendererFactory( this._dom.canvasLayer!.canvas );
        this.renderer.init();

        this._dom.hydrate();

    }

    public unmountFromDom(): void {

        this.renderer?.destroy();

        if ( this.dom ) {
            this.dom.destroy();
        }

        delete this._dom;
        this._dom = undefined;

    }

    public async draw() {
    
        if ( this.dom && this.dom.canvasLayer) {

            return await this.renderer?.render();

        }
    }

    public recievePalette( palette: string|number ): void {
        palette;
        this.draw();
    }

    /** @deprecated use DOM object instead */
    public destroySelfAndBelow() {
        // this.detachFromDom();
        if ( this.dom ) {
            this.dom.destroy();
        }
    };

    /** @deprecated use DOM object instead */
    public removeAllChildren() {
        if ( this.dom ) {
            this.dom.destroy();
        }
    };



    public getTemperatureAtPoint(
        x: number,
        y: number
    ): number {

        const xx = Math.min( this.meta.width - 1, Math.max( 0, x ) );
        const yy = Math.min( this.meta.height - 1, Math.max( 0, y ) )


        const index = (yy * this.width) + xx;
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

        if ( this.dom && this.dom.visibleLayer && this.dom.canvasLayer && this.visibleUrl) {
            this.dom.canvasLayer.opacity = value;
        }
    }

}
