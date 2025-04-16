import { Instance } from "../../../../file/instance";
import { AreaAnalysisData, PointAnalysisData } from "../../../../loading/workers/parsers/structure";
import { AnalysisGraph } from "../../data/graphs/AnalysisGraph";
import { CallbacksManager } from "../../../callbacksManager";
import { AbstractPoint } from "./AbstractPoint";
import { LineAnalysisData } from "./line/LineAnalysis";


type AnalysisEvent = (analysis: AbstractAnalysis) => void;

export abstract class AbstractAnalysis {

    public readonly onSerializableChange = new CallbacksManager<( analysis: AbstractAnalysis, change: string ) => void>

    public abstract recievedSerialized(input: string): void;
    public abstract toSerialized(): string;
    protected serializedIsValid( input: string ): boolean {
        const splitted = input
            .split( ";" )
            .map( segment => segment.trim() );

        if ( splitted.length < 2 ) {
            return false;
        }

        if ( ! ["point","ellipsis","rectangle"].includes( splitted[1]) ) {
            return false;
        }

        if ( splitted[1] !== this.getType() ) {
            return false;
        }

        return true;
    }


    public abstract get graph(): AnalysisGraph;

    /** Selection status */
    protected _selected: boolean = false;
    public get selected() { return this._selected; }
    public readonly onSelected = new CallbacksManager<AnalysisEvent>;
    public readonly onDeselected = new CallbacksManager<AnalysisEvent>;

    /** Actions taken when the value changes. Called internally by `this.recalculateValues()` */
    public readonly onValues = new CallbacksManager<(min?: number, max?: number, avg?: number) => void>;

    /** Actions taken when the analysis moves or resizes anyhow. This is very much important and it is called from the edit tool. */
    public readonly onMoveOrResize = new CallbacksManager<(analysis: AbstractAnalysis) => void>

    /** The main DOM element of this analysis. Is placed in `this.renderRoot` */
    public readonly layerRoot: HTMLDivElement;

    /** Alias of the file's canvasLayer root. The analysis DOM will be placed here. */
    public get renderRoot(): HTMLElement {
        // return this.file.dom.canvasLayer.getLayerRoot();
        return this.file.canvasLayer.getLayerRoot()
    }

    public readonly points: Map<string, AbstractPoint> = new Map;

    protected _top!: number;
    protected _left!: number;
    protected _width!: number;
    protected _height!: number;

    public get left() { return this._left; }
    public get top() { return this._top; }
    /** This dimension does not count the last pixel. */
    public get width() { return this._width; }
    /** This dimension does not count the last pixel. */
    public get height() { return this._height; }
    public get right() { return this._left + this._width; }
    public get bottom() { return this._top + this._height; }

    protected abstract onSetTop(validatedValue: number): void;
    protected abstract onSetLeft(validatedValue: number): void;
    protected abstract onSetWidth(validatedValue: number): void;
    protected abstract onSetHeight(validatedValue: number): void;

    protected abstract validateWidth(value: number): number;
    protected abstract validateHeight(value: number): number;

    protected abstract getVerticalDimensionFromNewValue(bottom: number, preferredSide: "top" | "bottom"): { top: number, bottom: number, height: number };
    protected abstract getHorizontalDimensionsFromNewValue(value: number, preferredSide: "left" | "right"): { left: number, right: number, width: number }

    public setTop(value: number) {

        if (isNaN(value)) {
            return;
        }

        if ( value === this.top ) {
            return;
        }

        const { top, height } = this.getVerticalDimensionFromNewValue(value, "top");

        let shouldEmit = false;

        if (top !== this.top) {
            this._top = top;
            this.onSetTop(top);
            shouldEmit = true;
        }

        if (height !== this.height) {
            this._height = height;
            this.onSetHeight(height);
            shouldEmit = true;
        }

        if ( shouldEmit ) {
            this.onSerializableChange.call( this, "top" );
        }

    }

    public setLeft(value: number) {

        if (isNaN(value)) {
            return;
        }

        if ( value === this.left ) {
            return;
        }

        const { left, width } = this.getHorizontalDimensionsFromNewValue(value, "left");

        let shouldEmit = false;

        if (left !== this.left) {
            this._left = left;
            this.onSetLeft(left);
            shouldEmit = true;
        }

        if (width !== this.width) {
            this._width = width;
            this.onSetWidth(width);
            shouldEmit = true;
        }

        if ( shouldEmit ) {
            this.onSerializableChange.call( this, "left" );
        }

    }


    public setWidth(value: number) {
        if ( value === this.height ) {
            return;
        }
        const val = this.validateWidth(value);
        if (!isNaN(val) && val !== this.width) {
            this._width = val;
            this.onSetWidth(val);
            this.onSerializableChange.call( this, "width" );
        }
    }

    public setHeight(value: number) {
        if ( value === this.height ) {
            return;
        }
        const val = this.validateHeight(value);
        if (!isNaN(val) && val !== this.height) {
            this._height = val;
            this.onSetHeight(val);
            this.onSerializableChange.call( this, "height" );
        }
    }


    public setBottom(value: number) {

        if (isNaN(value)) {
            return;
        }

        if ( value === this.bottom ) {
            return;
        }

        // Calculate the height from the bottom value
        const { top, height } = this.getVerticalDimensionFromNewValue(value, "bottom");

        let shouldEmit = false;

        // Use existing setters to set vertical properties
        if (top !== this.top) {
            this._top = top;
            this.onSetTop(top);
            shouldEmit = true;
        };

        if (height !== this.height) {
            this._height = height;
            this.onSetHeight(height);
            shouldEmit = true;
        }

        if ( shouldEmit ) {
            this.onSerializableChange.call( this, "bottom" );
        }

    }

    public setRight(value: number) {

        if (isNaN(value)) {
            return;
        }

        if ( value === this.right ) {
            return;
        }

        // Calculate the width from the right value
        const { left, width } = this.getHorizontalDimensionsFromNewValue(value, "right");

        let shouldEmit = false;

        // Use existing setters to set horizontal properties
        if (left !== this.left) {
            this._left = left;
            this.onSetLeft(left);
            shouldEmit = true;
        }
        if (width !== this.width) {
            this._width = width;
            this.onSetWidth(width);
            shouldEmit = true;
        }

        if ( shouldEmit ) {
            this.onSerializableChange.call( this, "right" );
        }

    }



    /** Access all the file's analysis layers. */
    public get layers() {
        return this.file.analysis.layers;
    }

    protected _min?: number;
    public get min() {
        return this._min;
    }

    protected _max?: number;
    public get max() {
        return this._max;
    }

    protected _avg?: number;
    public get avg() {
        return this._avg;
    }

    public dangerouslySetValues(
        avg: number,
        min: number|undefined = undefined,
        max: number|undefined = undefined,
    ) {
        this._avg = avg;
        this._min = min;
        this._max = max;

        this.onValues.call( this.min, this.max, this.avg );
    }


    public get arrayOfPoints() {
        return Array.from(this.points.values());
    }

    public get arrayOfActivePoints() {
        return this.arrayOfPoints.filter(point => point.active);
    }

    protected _color: string = "black";
    public get color() { return this._color; }
    public setColor(value: string) {
        this._color = value;
        this.setColorCallback(value);
        this.onSetColor.call(value);
    }
    protected abstract setColorCallback(value: string): void;
    public readonly onSetColor = new CallbacksManager<(value: string) => void>;


    protected _initialColor: string;
    public get initialColor() {
        return this._initialColor;
    }

    public setInitialColor(value: string) {
        if ( value === this.initialColor ) {
            return;
        }
        this._initialColor = value;
        this.onSetInitialColor.call(value);
        this.onSerializableChange.call( this, "color" );
        if (this.selected === true) {
            this.setColor(value);
        }

    }

    public readonly onSetInitialColor = new CallbacksManager<(value: string) => void>;


    // public readonly initialColor: string;
    public readonly activeColor = "yellow";
    public readonly inactiveColor = "black";

    /** @deprecated is moved to GraphObject instead */
    public get onGraphActivation() {
        return this.graph.onGraphActivation;
    }

    /** Indicated whether the analysis is in the state of initial creation (using mouse drag) or if it is already finalized. */
    public ready: boolean = false;

    public readonly nameInitial: string;
    protected _name: string;
    public get name() { return this._name; }
    public setName(value: string) {

        if ( value === this.name ) {
            return;
        }

        this._name = value;
        this.onSerializableChange.call( this, "name" );
        this.onSetName.call(value);
    }
    public readonly onSetName = new CallbacksManager<(value: string) => void>;


    public abstract getType(): string;



    public constructor(
        public readonly key: string,
        public readonly file: Instance,
        initialColor: string
    ) {

        this._initialColor = initialColor;
        this.nameInitial = key;
        this._name = key;
        // this.setInitialColor( initialColor );

        // Create the layer root
        this.layerRoot = document.createElement("div");
        this.layerRoot.style.position = "absolute";
        this.layerRoot.style.top = "0px";
        this.layerRoot.style.left = "0px";
        this.layerRoot.style.width = "100%";
        this.layerRoot.style.height = "100%";
        this.layerRoot.style.overflow = "hidden";
        this.layerRoot.id = `analysis_${this.key}`;

        this.renderRoot.appendChild(this.layerRoot);

        // This callback is absolutely crucial and may never be removed!
        /** @todo what happend if the callback key is set rendomly? I do not want this callback to be overriden anyhow! */
        this.onMoveOrResize.set("call recalculate values when a control point moves", () => {
            this.recalculateValues();
            /** @todo */
            // ... probably here should be serialisation
            this.onSerializableChange.call( this, "moveOrResize" );
        });

        this.onSerializableChange.set( "sync slots", () => {
            this.file.group.analysisSync.syncSlots( this.file );
        } );

    }

    public remove() {
        this.setDeselected();
        this.renderRoot.removeChild(this.layerRoot);
    }

    /** Selection / Deselection */

    public setSelected(
        exclusive: boolean = false,
        emitGlobalEvent: boolean = true
    ) {

        if (this.selected === true) {
            return;
        }

        // Internal mechanisms
        this._selected = true;
        this.onSelected.call(this);
        this.setColor(this.initialColor);

        // Eventually disable all other analysis
        if (exclusive === true) {
            this.layers.all
                .filter(analysis => analysis.key !== this.key)
                .forEach(analysis => {
                    if (analysis.selected) {
                        analysis.setDeselected(false);
                    }
                })
        }

        // Call selected listener
        if (emitGlobalEvent === true) {
            this.layers.onSelectionChange.call(this.layers.selectedOnly);
        }

        const slot = this.file.slots.getAnalysisSlot( this );

        if ( slot ) {
            this.file.group.analysisSync.setSlotSelected( this.file, slot );
        }

    }

    public setDeselected(emitGlobalEvent: boolean = true) {

        if (this.selected === false) {
            return;
        }

        // Internal mechanisms
        this._selected = false;
        this.onDeselected.call(this);
        this.setColor(this.inactiveColor);

        // Deactivate all points
        this.arrayOfActivePoints.forEach(point => point.deactivate());

        // Eventually call global mechanisms
        if (emitGlobalEvent === true) {
            this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);
        }

        const slot = this.file.slots.getAnalysisSlot( this );

        if ( slot ) {
            this.file.group.analysisSync.setSlotDeselected( this.file, slot );
        }
    }


    /** Detect whether a coordinate is withing the analysis. */
    public abstract isWithin(x: number, y: number): boolean;

    /** Recalculate the analysis' values from the current position and dimensions. Called whenever the analysis is resized or whenever file's `pixels` change. */
    public recalculateValues() {

        const { min, max, avg } = this.getValues();
        this._min = min;
        this._max = max;
        this._avg = avg;
        this.onValues.call(this.min, this.max, this.avg);

    }

    /** Obtain the current values of the analysis using current position and dimensions */
    protected abstract getValues(): { min?: number, max?: number, avg?: number }

    /** Override this method to get proper analysis data. */
    public abstract getAnalysisData(): Promise<PointAnalysisData | AreaAnalysisData | LineAnalysisData>;


    /** When parsing incoming serialized attribute, look if segments have an exact value */
    public static serializedSegmentsHasExact(
        segments: string[],
        lookup: string
    ): boolean {
        return segments.find(segment => segment === lookup) ? true : false;
    }

    /** When parsing incooming serialized attribute, try to extract it by its key as string */
    public static serializedGetStringValueByKey(
        segments: string[],
        key: string
    ): string | undefined {
        const regexp = new RegExp(`${key}:*`);
        const item = segments.find(s => {
            if (s.match(regexp)) {
                return isNaN(parseInt(s.split(":")[1]));
            }
        });
        return item?.split(":")[1].trim();
    }

    /** When parsing incooming serialized attribute, try to extract it by its key as number */
    public static serializedGetNumericalValueByKey(
        segments: string[],
        key: string
    ): number | undefined {
        const regexp = new RegExp(`${key}:\\d+`);
        const item = segments.find(s => s.match(regexp));
        if (item === undefined) {
            return undefined;
        }
        return parseInt(item.split(":")[1]);
    }

}