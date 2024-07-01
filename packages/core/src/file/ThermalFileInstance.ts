import { ThermalGroup } from "../group/ThermalGroup";
import { ThermalCursorPositionOrUndefined } from "../properties/drives/CursorPositionDrive";
import { ThermalRangeOrUndefined } from "../properties/drives/RangeDriver";
import { TimelineDrive } from "../properties/drives/TimelineDrive";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
import { IThermalInstance } from "../properties/structure";
import { ThermalFileInterface, ThermalFileSource } from "./ThermalFileSource";
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
export class ThermalFileInstance extends EventTarget implements IThermalInstance, ThermalFileInterface {



    // Core properties are mirrored from the source

    /** Url of the thermal file source */
    public get url() { return this.source.url; }
    /** Filename of the thermal file */
    public get fileName() { return this.source.fileName; }
    /** Optional visible URL */
    public get visibleUrl() { return this.source.visibleUrl; }
    public get signature() { return this.source.signature; }
    public get dataType() { return this.source.fileDataType; }
    public get unit() { return this.source.unit; };
    public get width() { return this.source.width; }
    public get height() { return this.source.height; }
    public get timestamp() { return this.source.timestamp; }

    public get version() { return this.source.version; }
    public get streamCount() { return this.source.streamCount; }
    public get fileDataType() { return this.source.fileDataType; }
    public get frameCount() { return this.source.frameCount; }
    public get frames() { return this.source.frames; }
    public get duration() { return this.source.duration; }

    public get min() { return this.source.min; }
    public get max() { return this.source.max; }
    public get pixels() { return this.source.pixels; }
    public get pixelsForHistogram() { return this.source.pixelsForHistogram }
    

    // Necessary properties are calculated in the constructor

    public readonly id: string;
    protected readonly horizontalLimit: number;
    protected readonly verticalLimit: number;

    public constructor(
        protected readonly source: ThermalFileSource,
        public readonly group: ThermalGroup
    ) {

        super();

        this.id = `instance_${this.group.id}_${this.source.url}`;
        this.horizontalLimit = (this.width / 4) * 3;
        this.verticalLimit = (this.height / 4) * 3;
    }
    



    public destroySelfAndBelow() {
        this.detachFromDom();
    };
    public removeAllChildren() {
        this.detachFromDom();
    };
    public reset() { };




    // The root container
    public root: HTMLDivElement | null = null;

    // The canvas layer
    public readonly canvasLayer: ThermalCanvasLayer = new ThermalCanvasLayer(this);

    // The visible layer
    public readonly visibleLayer: VisibleLayer = new VisibleLayer(this, this.visibleUrl);

    /// The cursor layer
    public readonly cursorLayer: ThermalCursorLayer = new ThermalCursorLayer(this);

    // The listener layer
    public readonly listenerLayer: ThermalListenerLayer = new ThermalListenerLayer(this);




    /**
     * Dom bindings
     */

    protected _mounted: boolean = false;
    public get mountedBaseLayers() { return this._mounted; }
    protected set mountedBaseLayers(value: boolean) { this._mounted = value; }

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



    /**
     * Load listener layer and activate all listeners.
     * Should be called as a last mount layer.
     * @todo refactor this with variants!
     */

    protected mountListener() {

        if (this.root === undefined) {
            console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);
            return;
        }

        this.listenerLayer.mount();

        this.listenerLayer.getLayerRoot().onmousemove = (event: MouseEvent) => {

            // Show the cursor
            this.cursorLayer.show = true;

            // Store the local hover state
            this.isHover = true;

            const client = this.width;
            const parent = this.root!.clientWidth;

            const aspect = client / parent;

            const x = Math.round(event.offsetX * aspect);
            const y = Math.round(event.offsetY * aspect);

            this.group.cursorPosition.recieveCursorPosition({ x, y });

            if (this._onHover)
                this._onHover(event, this);

        };

        this.listenerLayer.getLayerRoot().onmouseleave = () => {

            this.cursorLayer!.show = false;

            this.isHover = false;

            // Clear the synchronised cursor in any case
            this.group.cursorPosition.recieveCursorPosition(undefined);

        };

        this.listenerLayer.getLayerRoot().onclick = (event) => {

            if (this._onClick)
                this._onClick(event, this);

        };

    }

    protected unmountListener() {

        this.listenerLayer.unmount();

    }


    public mountToDom( container: HTMLDivElement ) {
        this.attachToDom(container);
    }

    public unmountFromDom() {
        this.detachFromDom();
    }


    /**
     * Onmousemove interactions
     */

    protected _onHover?: ((event: MouseEvent, target: ThermalFileInstance) => void) = undefined;

    public setHoverHandler(handler?: ((event: MouseEvent, target: ThermalFileInstance) => void)) {
        this._onHover = handler;
    }

    public setHoverCursor(
        value: CSSStyleDeclaration["cursor"]
    ) {
        if (this.root)
            if (this.root.style.cursor !== value)
                this.root.style.cursor = value;
    }


    /**
     * Onclick interactions
     */

    protected _onClick?: ((event: MouseEvent, target: ThermalFileInstance) => void) = undefined;

    public setClickHandler(handler: ((event: MouseEvent, target: ThermalFileInstance) => void)| undefined = undefined ) {
        this._onClick = handler;
    }



    /**
     * Drawing
     */

    public draw() {
        if (this.mountedBaseLayers === true) 
        this.canvasLayer.draw();
    }

    /** Recieve a palette setting */
    public recievePalette(
        palette: string | number
    ) {
        console.log( palette );
        this.draw();
    }






    /** 
     * CursorValue & hover state 
    */

    public readonly cursorValue: CursorValueDrive = new CursorValueDrive(this, undefined);


    protected _isHover: boolean = false;
    public get isHover() { return this._isHover }
    protected set isHover(value: boolean) {
        this._isHover = value;
    }

    public recieveCursorPosition(
        position: ThermalCursorPositionOrUndefined,
    ) {

        this.cursorValue.recalculateFromCursor(position);

        if ( position !== undefined && this.cursorValue.value !== undefined ) {
            this.cursorLayer.setCursor( position.x, position.y, this.cursorValue.value );
            this.cursorLayer.show = true;
        } else {
            this.cursorLayer.show = false;
            this.cursorLayer.resetCursor();
        }

    }

    public getTemperatureAtPoint(
        x: number,
        y: number
    ): number {

        const index = ( y * this.width ) + x;
        return this.pixels[ index ];

    }

    /**
     * Range
     */


    /** Recieve the range from the registry and redraw */
    public recieveRange(
        value: ThermalRangeOrUndefined
    ) {
        if (value !== undefined) {
            this.draw();
        }
    }


    /**
     * Opacity
     */

    /** Recieve the opacity from the registry and project it to the canvas layer */
    public recieveOpacity(value: number) {

        if (this.visibleLayer && this.canvasLayer) {
            this.canvasLayer.opacity = value;
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
        if ( ! this._export ) {
            const newExport = new ThermalFileExport( this );
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




    /**
     * Frames
     */
    public readonly timeline = new TimelineDrive( this, 0 );




}