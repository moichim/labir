import * as Pool from 'workerpool/types/Pool';
import Pool__default from 'workerpool/types/Pool';

/** Definition of a palette containing its name, gradient and pixels value. */
type ThermalPaletteType = {
    /** Actial pixels that shall be ised for drawings of thermograms. */
    pixels: string[];
    /** Human-readable name of the palette. */
    name: string;
    /** A CSS gradient representing the color scale in the UI. */
    gradient: string;
    /** The CSS slug */
    slug: AvailableThermalPalettes;
};
/** Pixels of the IRON palette. Array of 256 strings containing CSS color notation usable in `HTMLCanvasElement`. */
declare const JET: string[];
/** Pixels of the IRON palette. Array of 256 strings containing CSS color notation usable in `HTMLCanvasElement`. */
declare const IRON: string[];
/** Pixels of the GRAYSCALE palette. Array of 256 strings containing CSS color notation usable in `HTMLCanvasElement`. */
declare const GRAYSCALE: string[];
/** Object mapping all available palettes. Keys of this object are extracted to the type `AvailableThermalPalettes` */
declare const ThermalPalettes: {
    iron: ThermalPaletteType;
    jet: ThermalPaletteType;
    grayscale: ThermalPaletteType;
};
/** Keys of palettes available in `@labir/core`. */
type AvailableThermalPalettes = "jet" | "iron" | "grayscale";

type AcceptableDateInput = number | Date;
declare abstract class TimeUtilsBase {
    /** Convert an input to a date object */
    static inputToDate: (value: AcceptableDateInput) => Date;
}

/** Utility class for time formatting in the LabIR ecosystem. */
declare class TimeFormat extends TimeUtilsBase {
    /** YYYY-MM-DD */
    static isoDate: (value: AcceptableDateInput) => string;
    /** HH:MM:SS */
    static isoTime: (value: AcceptableDateInput) => string;
    /** YYYY-MM-DD HH:MM:SS */
    static isoComplete: (value: AcceptableDateInput) => string;
    /** HH:mm */
    static humanTime: (value: AcceptableDateInput, showSeconds?: boolean) => string;
    /** j. M. ???? (y) */
    static humanDate: (value: AcceptableDateInput, includeYear?: boolean) => string;
    /** Range */
    static humanRangeDates(from: AcceptableDateInput, to: AcceptableDateInput): string;
    static human(date: AcceptableDateInput): string;
}

/** Defined time periods used in the LabIR ecosystem. */
declare enum TimePeriod {
    HOUR = "jednu hodinu",
    DAY = "jeden den",
    WEEK = "jeden t\u00FDden",
    MONTH = "jeden m\u011Bs\u00EDc",
    YEAR = "jeden rok"
}

/** Utility class for time rounding in the LabIR ecosystem. */
declare class TimeRound extends TimeUtilsBase {
    static down: (value: AcceptableDateInput, roundTo: TimePeriod) => Date;
    static up: (value: AcceptableDateInput, roundTo: TimePeriod) => Date;
    static pick: (value: AcceptableDateInput, period: TimePeriod) => Date[];
    static modify: (value: AcceptableDateInput, amount: number, period: TimePeriod) => Date;
}

/**
 * Manage callbacks on optional property values
 */
declare class CallbacksManager<CallbackType extends (...args: any[]) => any> extends Map<string, CallbackType> {
    /** @deprecated use set method instead */
    add(key: string, callback: CallbackType): void;
    call(...args: Parameters<CallbackType>): void;
}

type AbstractFilterParameters = {
    key: number;
    text: string;
};
declare abstract class AbstractFilter<T extends AbstractFilterParameters = AbstractFilterParameters> {
    protected _bypass: boolean;
    get bypass(): boolean;
    setBypass(value: boolean): void;
    readonly onBypass: CallbacksManager<(value: boolean) => void>;
    readonly onParameterChanged: CallbacksManager<(parameters: T) => void>;
    protected parameterChanged(): void;
    protected abstract getParameters(): T;
    abstract apply(buffer: ArrayBuffer): Promise<ArrayBuffer>;
}

declare abstract class BaseStructureObject {
    abstract getInstances(): Instance[];
}

/** Both `ThermalFileReader` and `ThermalFileFailure` share common attributes since they are both results of `FilesService.loadFile()` */
declare abstract class AbstractFileResult {
    readonly thermalUrl: string;
    readonly visibleUrl?: string | undefined;
    constructor(thermalUrl: string, visibleUrl?: string | undefined);
    /** @deprecated to identify success, use `instanceof` */
    abstract isSuccess(): boolean;
}

/**
 * Internal member of `FilesService`
 * - `FileService` members may listen to resolving of this object
 * - `load()` method effcently handles the fetch and processing of the file
 */
declare class FileRequest {
    protected readonly service: FilesService;
    readonly thermalUrl: string;
    readonly visibleUrl?: string | undefined;
    protected constructor(service: FilesService, thermalUrl: string, visibleUrl?: string | undefined);
    static fromUrl(service: FilesService, thermalUrl: string, visibleUrl?: string): FileRequest;
    /**
     * The request is stored internally, so that multiple calls of `load` will allways result in one single `Promise` - to this one.
     */
    response?: Promise<AbstractFileResult>;
    /**
     * Fetch a file, process the response and return the promise
     * - the promise is stored internally
     * - if the request is already loading/processing, any subsequent calls use the stored promise object
     */
    load(): Promise<AbstractFileResult>;
    /**
     * Process the raw response:
     * - decide if the file exists
     * - assign parser to the file
     * - create the service
     */
    protected processResponse(response: Response): Promise<AbstractFileResult>;
    /**
     * Actions taken on the `AbstractFileResult` object
     * @todo because there are no side effects, this method might appear redundant
     */
    protected pocessTheService(result: AbstractFileResult): AbstractFileResult;
}

/** Turn any element into a dropzone! */
declare class DropinElementListener {
    readonly service: FilesService;
    readonly element: HTMLElement;
    protected _hover: boolean;
    get hover(): boolean;
    readonly onMouseEnter: CallbacksManager<() => void>;
    readonly onMouseLeave: CallbacksManager<() => void>;
    readonly onDrop: CallbacksManager<() => void>;
    readonly onProcessingEnd: CallbacksManager<(results: AbstractFileResult[], event: Event | DragEvent) => void>;
    /** An invissible input element */
    input?: HTMLInputElement;
    protected hydrated: boolean;
    protected multiple: boolean;
    protected bindedEnterListener: DropinElementListener["handleEnter"];
    protected bindedLeaveListener: DropinElementListener["handleLeave"];
    protected bindedDropListener: DropinElementListener["handleDrop"];
    protected bindedInputChangeListener: DropinElementListener["handleInputChange"];
    protected bindedDragoverListener: DropinElementListener["handleDragover"];
    protected bindedClickListener: DropinElementListener["handleClick"];
    protected constructor(service: FilesService, element: HTMLElement, multiple?: boolean);
    static listenOnElement(service: FilesService, element: HTMLElement, multiple?: boolean): DropinElementListener;
    /** Bind all event listeners to the provided element */
    hydrate(): void;
    /** Remove all event listeners from the element */
    dehydrate(): void;
    handleClick(event: PointerEvent): void;
    handleDragover(event: DragEvent): void;
    protected handleFiles(files: File[]): Promise<AbstractFileResult[]>;
    handleDrop(event: DragEvent): Promise<{
        results: AbstractFileResult[];
        event: DragEvent;
    }>;
    handleInputChange(event: Event): Promise<{
        results: AbstractFileResult[];
        event: Event;
    }>;
    handleEnter(): void;
    handleLeave(): void;
    /** Build the internal input */
    protected getInput(): HTMLInputElement;
    openFileDialog(multiple?: boolean): void;
}

/** Codes of errors */
declare enum FileErrors {
    NOT_SPECIFIED = 0,
    FILE_NOT_FOUND = 1,
    MIME_UNSUPPORTED = 2,
    PARSING_ERROR = 3,
    OUT_OF_MEMORY = 4
}
/** The error that is thrown anytime something happens during the loading */
declare class FileLoadingError extends Error {
    readonly code: FileErrors;
    readonly url: string;
    constructor(code: FileErrors, url: string, message?: string);
}

declare class ThermalFileFailure extends AbstractFileResult {
    readonly code: FileErrors;
    readonly message: string;
    constructor(thermalUrl: string, code: FileErrors, message: string);
    isSuccess(): boolean;
    static fromError(error: FileLoadingError): ThermalFileFailure;
}

/**
 * Handle batch loading of thermal files.
 *
 * This class should be used as a lazy-loaded member of a thermal registry.
 */
declare class BatchLoader {
    readonly registry: ThermalRegistry;
    readonly onBatchStart: CallbacksManager<() => void>;
    readonly onBatchComplete: CallbacksManager<(result: (Instance | ThermalFileFailure)[]) => void>;
    private set;
    get numberOfBatches(): number;
    get currentOpenBatch(): Batch | undefined;
    get hasLoadingBatches(): boolean;
    get numLoadingBatches(): number;
    constructor(registry: ThermalRegistry);
    getBatchById(id: string): Batch;
    /**
     * Request a file through a batch
     *
     * If there is an open batch, register the request in it.
     * Else open a new batch.
     *
     * The batch will execute automatically in the next tick.
     */
    request(thermalUrl: string, visibleUrl: string | undefined, group: ThermalGroup, callback: BatchLoadingCallback, id?: string): Batch;
    closeBatch(): void;
    /**
     * This method is called from the inside of a batch object
     * to indicate its completion.
     *
     * Upon completion, the batch object is deleted and if there
     * are no other batches, mark the registry as loaded.
     */
    batchFinished(batch: Batch): void;
}

/**
 * A single batch object
 *
 * A batch is created from all requests registered in a single tick.
 * The Batch creation and requests registration is handled completely
 * by `BatchLoader.request` method.
 *
 * Internally, this object stores an array of file requests along
 * with all the necessary additional information: the target group
 * and a callback that will be fired AFTER ALL FILES OF THE BATCH ARE LOADED.
 *
 */
declare class Batch {
    protected readonly loader: BatchLoader;
    readonly id?: string | undefined;
    private _loading;
    get loading(): boolean;
    readonly onResolve: CallbacksManager<(result: (Instance | ThermalFileFailure)[]) => void>;
    /** The current timeout fn that is being overriden by every call of the `request` method */
    private timeout?;
    /** Array of currently queued requests */
    private queue;
    get size(): number;
    protected constructor(loader: BatchLoader, id?: string | undefined);
    static init(loader: BatchLoader, id?: string): Batch;
    static initWithRequest(loader: BatchLoader, thermalUrl: string, visibleUrl: string | undefined, group: ThermalGroup, callback: BatchLoadingCallback): Batch;
    /**
     * Request a thermal file
     *
     * Requesting adds new record to the queue and creates a new
     * timeout closure.
     */
    request(thermalUrl: string, visibleUrl: string | undefined, group: ThermalGroup, callback: BatchLoadingCallback): void;
    close(): void;
}

interface ThermalMinmaxType {
    min: number;
    max: number;
}
type ThermalMinmaxOrUndefined = ThermalMinmaxType | undefined;
/**
 * A common basis for all Minmax properties
 */
declare abstract class AbstractMinmaxProperty<Target extends ThermalRegistry | ThermalGroup> extends AbstractProperty<ThermalMinmaxOrUndefined, Target> {
    /** Get the current distance between min and max */
    get distanceInCelsius(): undefined | number;
}

type GraphDataTypes = PointAnalysisData | AreaAnalysisData;
declare class AnalysisGraph {
    readonly analysis: AbstractAnalysis;
    constructor(analysis: AbstractAnalysis);
    protected _min: boolean;
    protected _max: boolean;
    protected _avg: boolean;
    get state(): {
        MIN: boolean;
        MAX: boolean;
        AVG: boolean;
    };
    protected _value?: GraphDataTypes;
    get value(): GraphDataTypes | undefined;
    protected set value(value: GraphDataTypes | undefined);
    setMinActivation(active: boolean): void;
    setMaxActivation(active: boolean): void;
    setAvgActivation(active: boolean): void;
    readonly onGraphActivation: CallbacksManager<(min: boolean, max: boolean, avg: boolean) => void>;
    readonly onGraphData: CallbacksManager<(data: GraphDataTypes | undefined, analysis: AbstractAnalysis) => void>;
    readonly onAnalysisSelection: CallbacksManager<(activated: boolean, analysis: AbstractAnalysis) => void>;
    protected emitGraphActivation(): void;
    protected hydrate(): Promise<void>;
    protected getGraphData(): Promise<GraphDataTypes>;
    getGraphColors(): string[];
    getGraphLabels(): string[];
    hasDataToPrint(): boolean;
    getDtaAtTime(timestamp: number): number[];
}

declare enum PointPlacement {
    START = 1,
    MIDDLE = 2,
    END = 3
}
declare abstract class AbstractPoint {
    readonly key: string;
    readonly analysis: AbstractAnalysis;
    get file(): Instance;
    private pxX;
    private _x;
    get x(): number;
    onX: CallbacksManager<(x: number, prev: number) => void>;
    abstract mayMoveToX(value: number): boolean;
    private pxY;
    private _y;
    get y(): number;
    onY: CallbacksManager<(y: number, prev: number) => void>;
    abstract mayMoveToY(value: number): boolean;
    /**
     * Recieves X from the tool.
     *
     * Needs to determine the placement using `analyzeXFromTool`.
     * Calls `sideEffectOnXFromTool`.
     */
    setXFromTool(value: number): void;
    /** Recieves the X directly, along with the placement, with no side effects. */
    setXDirectly(value: number, placement: PointPlacement): void;
    /**
     * Recieves Y from the tool.
     *
     * Needs to determine the placement using `analyzeYFromTool`.
     * Calls `sideEffectOnYFromTool`.
     */
    setYFromTool(value: number): void;
    /** Recieves the Y directly, along with the placement, with no side effects. */
    setYDirectly(value: number, placement: PointPlacement): void;
    /** Format the `left` style from given position and placement */
    private getXStyle;
    private getYStyle;
    /** Convert a percentage and a offset in pixels into a CSS style string */
    private formatPositionStyle;
    protected abstract analyzeXFromTool(value: number): {
        x: number;
        placement: PointPlacement;
    };
    protected abstract sideEffectOnXFromTool(value: number, placement: PointPlacement): void;
    protected abstract analyzeYFromTool(value: number): {
        y: number;
        placement: PointPlacement;
    };
    protected abstract sideEffectOnYFromTool(value: number, placement: PointPlacement): void;
    protected _color: string;
    protected get color(): string;
    setColor(value: string): void;
    protected abstract onSetColor(value: string): void;
    get initialColor(): string;
    get activeColor(): string;
    get inactiveColor(): string;
    protected _active: boolean;
    get active(): boolean;
    protected _isHover: boolean;
    get isHover(): boolean;
    protected _isDragging: boolean;
    get isDragging(): boolean;
    get root(): HTMLDivElement;
    /** Get the size of the point's area in the file's listener layer. The active area serves for emulation of PointerEvents of this point. */
    abstract getRadius(): number;
    /** The container is allways positioned by percents. The container dimension is allways 1x1. The container contains the inner element which handles the display. */
    container: HTMLDivElement;
    /** The display element. */
    innerElement: HTMLDivElement;
    constructor(key: string, top: number, left: number, analysis: AbstractAnalysis, color: string, placementX: PointPlacement, placementY: PointPlacement);
    isWithin(top: number, left: number): boolean;
    isInSelectedLayer(): boolean;
    private calculatePercentageX;
    private calculatePercentageY;
    /** @deprecated */
    protected getPercentageX(): number;
    /** @deprecated */
    protected getPercentageY(): number;
    protected getPercentageCoordinates(): {
        x: number;
        y: number;
    };
    /** Create the display element */
    abstract createInnerElement(): HTMLDivElement;
    mouseEnter(): void;
    mouseLeave(): void;
    readonly onMouseEnter: CallbacksManager<(point: ThisType<AbstractPoint>) => void>;
    readonly onMouseLeave: CallbacksManager<(point: ThisType<AbstractPoint>) => void>;
    readonly onActivate: CallbacksManager<(point: ThisType<AbstractPoint>) => void>;
    readonly onDeactivate: CallbacksManager<(point: ThisType<AbstractPoint>) => void>;
    protected abstract actionOnMouseEnter(): void;
    protected abstract actionOnMouseLeave(): void;
    protected abstract actionOnActivate(): void;
    protected abstract actionOnDeactivate(): void;
    activate(): void;
    deactivate(): void;
}

declare class LinePoint extends AbstractPoint {
    mayMoveToX(value: number): boolean;
    mayMoveToY(value: number): boolean;
    protected analyzeXFromTool(value: number): {
        x: number;
        placement: PointPlacement;
    };
    protected sideEffectOnXFromTool(value: number, placement: PointPlacement): void;
    protected analyzeYFromTool(value: number): {
        y: number;
        placement: PointPlacement;
    };
    protected sideEffectOnYFromTool(value: number, placement: PointPlacement): void;
    protected onSetColor(value: string): void;
    getRadius(): number;
    protected actionOnActivate(): void;
    protected actionOnDeactivate(): void;
    createInnerElement(): HTMLDivElement;
    actionOnMouseEnter(): void;
    actionOnMouseLeave(): void;
}

type LineAnalysisData = {};
declare class LineAnalysis extends AbstractAnalysis {
    readonly point1: LinePoint;
    readonly point2: LinePoint;
    protected readonly svg: SVGSVGElement;
    protected readonly line: SVGLineElement;
    protected constructor(key: string, color: string, file: Instance, top: number, left: number);
    private calculatePercentageX;
    private calculatePercentageY;
    static startAddingAtPoint(key: string, color: string, file: Instance, top: number, left: number): LineAnalysis;
    recievedSerialized(input: string): void;
    toSerialized(): string;
    updateLine(): void;
    get graph(): AnalysisGraph;
    protected onSetTop(validatedValue: number): void;
    protected onSetLeft(validatedValue: number): void;
    protected onSetWidth(validatedValue: number): void;
    protected onSetHeight(validatedValue: number): void;
    protected validateWidth(value: number): number;
    protected validateHeight(value: number): number;
    protected getVerticalDimensionFromNewValue(bottom: number, preferredSide: "top" | "bottom"): {
        top: number;
        bottom: number;
        height: number;
    };
    protected getHorizontalDimensionsFromNewValue(value: number, preferredSide: "left" | "right"): {
        left: number;
        right: number;
        width: number;
    };
    protected setColorCallback(value: string): void;
    getType(): string;
    isWithin(x: number, y: number): boolean;
    protected getValues(): {
        min?: number;
        max?: number;
        avg?: number;
    };
    getAnalysisData(): Promise<LineAnalysisData>;
}

type AnalysisEvent = (analysis: AbstractAnalysis) => void;
declare abstract class AbstractAnalysis {
    readonly key: string;
    readonly file: Instance;
    readonly onSerializableChange: CallbacksManager<(analysis: AbstractAnalysis, change: string) => void>;
    abstract recievedSerialized(input: string): void;
    abstract toSerialized(): string;
    protected serializedIsValid(input: string): boolean;
    abstract get graph(): AnalysisGraph;
    /** Selection status */
    protected _selected: boolean;
    get selected(): boolean;
    readonly onSelected: CallbacksManager<AnalysisEvent>;
    readonly onDeselected: CallbacksManager<AnalysisEvent>;
    /** Actions taken when the value changes. Called internally by `this.recalculateValues()` */
    readonly onValues: CallbacksManager<(min?: number, max?: number, avg?: number) => void>;
    /** Actions taken when the analysis moves or resizes anyhow. This is very much important and it is called from the edit tool. */
    readonly onMoveOrResize: CallbacksManager<(analysis: AbstractAnalysis) => void>;
    /** The main DOM element of this analysis. Is placed in `this.renderRoot` */
    readonly layerRoot: HTMLDivElement;
    /** Alias of the file's canvasLayer root. The analysis DOM will be placed here. */
    get renderRoot(): HTMLElement;
    readonly points: Map<string, AbstractPoint>;
    protected _top: number;
    protected _left: number;
    protected _width: number;
    protected _height: number;
    get left(): number;
    get top(): number;
    /** This dimension does not count the last pixel. */
    get width(): number;
    /** This dimension does not count the last pixel. */
    get height(): number;
    get right(): number;
    get bottom(): number;
    protected abstract onSetTop(validatedValue: number): void;
    protected abstract onSetLeft(validatedValue: number): void;
    protected abstract onSetWidth(validatedValue: number): void;
    protected abstract onSetHeight(validatedValue: number): void;
    protected abstract validateWidth(value: number): number;
    protected abstract validateHeight(value: number): number;
    protected abstract getVerticalDimensionFromNewValue(bottom: number, preferredSide: "top" | "bottom"): {
        top: number;
        bottom: number;
        height: number;
    };
    protected abstract getHorizontalDimensionsFromNewValue(value: number, preferredSide: "left" | "right"): {
        left: number;
        right: number;
        width: number;
    };
    setTop(value: number): void;
    setLeft(value: number): void;
    setWidth(value: number): void;
    setHeight(value: number): void;
    setBottom(value: number): void;
    setRight(value: number): void;
    /** Access all the file's analysis layers. */
    get layers(): AnalysisLayersStorage;
    protected _min?: number;
    get min(): number | undefined;
    protected _max?: number;
    get max(): number | undefined;
    protected _avg?: number;
    get avg(): number | undefined;
    dangerouslySetValues(avg: number, min?: number | undefined, max?: number | undefined): void;
    get arrayOfPoints(): AbstractPoint[];
    get arrayOfActivePoints(): AbstractPoint[];
    protected _color: string;
    get color(): string;
    setColor(value: string): void;
    protected abstract setColorCallback(value: string): void;
    readonly onSetColor: CallbacksManager<(value: string) => void>;
    protected _initialColor: string;
    get initialColor(): string;
    setInitialColor(value: string): void;
    readonly onSetInitialColor: CallbacksManager<(value: string) => void>;
    readonly activeColor = "yellow";
    readonly inactiveColor = "black";
    /** @deprecated is moved to GraphObject instead */
    get onGraphActivation(): CallbacksManager<(min: boolean, max: boolean, avg: boolean) => void>;
    /** Indicated whether the analysis is in the state of initial creation (using mouse drag) or if it is already finalized. */
    ready: boolean;
    readonly nameInitial: string;
    protected _name: string;
    get name(): string;
    setName(value: string): void;
    readonly onSetName: CallbacksManager<(value: string) => void>;
    abstract getType(): string;
    constructor(key: string, file: Instance, initialColor: string);
    remove(): void;
    /** Selection / Deselection */
    setSelected(exclusive?: boolean, emitGlobalEvent?: boolean): void;
    setDeselected(emitGlobalEvent?: boolean): void;
    /** Detect whether a coordinate is withing the analysis. */
    abstract isWithin(x: number, y: number): boolean;
    /** Recalculate the analysis' values from the current position and dimensions. Called whenever the analysis is resized or whenever file's `pixels` change. */
    recalculateValues(): void;
    /** Obtain the current values of the analysis using current position and dimensions */
    protected abstract getValues(): {
        min?: number;
        max?: number;
        avg?: number;
    };
    /** Override this method to get proper analysis data. */
    abstract getAnalysisData(): Promise<PointAnalysisData | AreaAnalysisData | LineAnalysisData>;
    /** When parsing incoming serialized attribute, look if segments have an exact value */
    static serializedSegmentsHasExact(segments: string[], lookup: string): boolean;
    /** When parsing incooming serialized attribute, try to extract it by its key as string */
    static serializedGetStringValueByKey(segments: string[], key: string): string | undefined;
    /** When parsing incooming serialized attribute, try to extract it by its key as number */
    static serializedGetNumericalValueByKey(segments: string[], key: string): number | undefined;
}

/**
 * Analysis slot takes care of serialisation
 *
 * Slot is an independent object that applies on the first 7 analysis.
 * All the serialisation is perfoemed here. An analysis does not know
 * about its slots at all.
 *
 * One analysis may be in one slot only. Never in two slots.
 */
declare class AnalysisSlot {
    readonly slot: number;
    private _analysis;
    get analysis(): AbstractAnalysis;
    private _serialized;
    get serialized(): string;
    /** @deprecated Serialisation is emitted by the driver. This emitter is used mainly in tests, but not elsewhere. */
    readonly onSerialize: CallbacksManager<(serializedValue: string, analysis: AbstractAnalysis) => void>;
    /** Serialisation is done in the next tick */
    protected enqueuedSerialisation?: ReturnType<typeof setTimeout>;
    constructor(slot: number, analysis: AbstractAnalysis);
    /** Generate the listener key for this slot */
    private listenerKey;
    /** Remove all listeners created by this slot */
    private dehydrate;
    /** Add all listeners to the analysis object */
    private hydrate;
    protected enqueueSerialisation(): void;
    protected serialize(): void;
    recieveSerialized(serialized: string): void;
    /** Call global and particular callbacks */
    protected propagateSerialisationUp(value: string | undefined): void;
}

type AnalysisSlotsMap = Map<number, AnalysisSlot>;
/** Say the slot number. True = next free. False = no slot at all */
type SlotInitialisationValue = number | true | false;
/**
 * Create up to 7 slots for analysis of the image.
 *
 * Value of this property is a map.
 */
declare class AnalysisSlotsState extends AbstractProperty<AnalysisSlotsMap, Instance> {
    static MAX_SLOTS: number;
    /** @deprecated Use particular assignement slot instead */
    readonly onSlotInit: CallbacksManager<(number: number, slot: AnalysisSlot) => void>;
    /** @deprecated Use particular assignement slot instead */
    readonly onSlotRemove: CallbacksManager<(number: number) => void>;
    readonly onSlot1Assignement: CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    readonly onSlot2Assignement: CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    readonly onSlot3Assignement: CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    readonly onSlot4Assignement: CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    readonly onSlot5Assignement: CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    readonly onSlot6Assignement: CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    readonly onSlot7Assignement: CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    readonly onSlot1Serialize: CallbacksManager<(value: string | undefined) => void>;
    readonly onSlot2Serialize: CallbacksManager<(value: string | undefined) => void>;
    readonly onSlot3Serialize: CallbacksManager<(value: string | undefined) => void>;
    readonly onSlot4Serialize: CallbacksManager<(value: string | undefined) => void>;
    readonly onSlot5Serialize: CallbacksManager<(value: string | undefined) => void>;
    readonly onSlot6Serialize: CallbacksManager<(value: string | undefined) => void>;
    readonly onSlot7Serialize: CallbacksManager<(value: string | undefined) => void>;
    /** Calculate the next free slot */
    getNextFreeSlotNumber(): number | undefined;
    assignSlot(slot: number, analysis: AbstractAnalysis): AnalysisSlot;
    hasSlot(slot: number): boolean;
    getSlot(slot: number): AnalysisSlot | undefined;
    getSlotMap(): Map<number, AnalysisSlot | undefined>;
    getAnalysisSlot(analysis: AbstractAnalysis): number | undefined;
    /**
     * Completely remove the slot and also the corresponding analysis
     */
    removeSlotAndAnalysis(slot: number): void;
    /**
     * Remove a slot that is assigned to a given analysis, but keep the analysis
     */
    unassignAnalysisFromItsSlot(analysis: AbstractAnalysis): void;
    /**
     * Create an analysis from a serialized state
     */
    createFromSerialized(serialized: string, slotNumber?: SlotInitialisationValue): AbstractAnalysis | undefined;
    protected validate(value: AnalysisSlotsMap): AnalysisSlotsMap;
    protected afterSetEffect(): void;
    /**
     * Internal replacement of standard callbacks call. Here, the value is stored as a map reference, therefore there are no reassignements. Standard callbacks are called upon reassignement. This method is called in their place.
     */
    private callEffectsAndListeners;
    /**
     * Whenever a slot is assigned, call both particular and general listeners
     */
    private emitOnAssignement;
    /**
     * Whenever a slit serializes call the particular manager
     */
    private emitSerializedValue;
    /**
     * Get a callback manager that is triggered upon a slot serialisation
     */
    getOnSerializeManager(slot: number): CallbacksManager<(value: string | undefined) => void> | undefined;
    /**
     * Get a callback manager that is triggered whenever a slot is assigned
     */
    getOnAssignementManager(slot: number): CallbacksManager<(slot: AnalysisSlot | undefined) => void> | undefined;
    /**
     * Get value of a given slot
     */
    getSlotValue(slot: number): string | undefined;
    /**
     * Call a function on every existing slot skipping empty slots.
     */
    forEveryExistingSlot(fn: (slot: AnalysisSlot, num: number) => void): void;
}

interface ITool {
    key: string;
    name: string;
    description: string;
    icon: string;
    active: boolean;
}
declare abstract class AbstractTool {
    readonly manager: ThermalManager;
    active: boolean;
    constructor(manager: ThermalManager);
    /** Action taken upon tool activation */
    activate(): void;
    protected abstract onActivate(): void;
    /** Actions taken upon tool deactivation */
    deactivate(): void;
    protected abstract onDeactivate(): void;
    abstract onCanvasClick(x: number, y: number, file: Instance): void;
    abstract onCanvasLeave(file: Instance): void;
    /** Whenever a point is entered by the mouse */
    abstract onPointEnter(point: AbstractPoint): void;
    /** Whenever the mouse leaves the point */
    abstract onPointLeave(point: AbstractPoint): void;
    /** Whenever the point should move to a new position */
    abstract onPointMove(point: AbstractPoint, top: number, left: number): void;
    /** Whenever a point is clicked */
    abstract onPointDown(point: AbstractPoint): void;
    /** Whenever a point is ended clicking */
    abstract onPointUp(point: AbstractPoint): void;
    /** Assamble the cursor label at the given point */
    abstract getLabelValue(x: number, y: number, file: Instance): string;
}

interface IWithTool extends IBaseProperty {
    tool: ToolDrive;
}
/** The tool type merging Abstract class and the interface */
type ThermalTool = AbstractTool & ITool & {
    key: string;
};
declare class ToolDrive extends AbstractProperty<ThermalTool, ThermalManager> {
    /** Create own set of tools from the registry of tools */
    protected _tools: {
        [x: string]: ThermalTool;
    };
    /** Readonly list of available tools */
    get tools(): {
        [x: string]: ThermalTool;
    };
    constructor(parent: ThermalManager, initial: ThermalTool);
    protected validate(value: ThermalTool): ThermalTool;
    protected afterSetEffect(value: ThermalTool): void;
    /** Pick a tool. Its activation is handled by the `afterSetEffect` */
    selectTool(tool: ThermalTool | keyof ToolDrive["tools"]): void;
}

/** Access list of points from analysis layers */
declare class AnalysisPointsAccessor {
    readonly drive: AnalysisDrive;
    constructor(drive: AnalysisDrive);
    /** Get all points from all layers */
    get all(): AbstractPoint[];
    /** Get all points from selected layers */
    get allInSelectedLayers(): AbstractPoint[];
    /** Get only active points from selected layers */
    get activeInSelectedLayers(): AbstractPoint[];
    /** Extract points from all provided layers */
    protected extractPointsFromLayers(layers: AbstractAnalysis[], activeOnly?: boolean): AbstractPoint[];
}

interface IWithAnalysis extends IBaseProperty {
    analysis: AnalysisDrive;
}
declare class AnalysisDrive extends AbstractProperty<AbstractAnalysis[], Instance> {
    readonly layers: AnalysisLayersStorage;
    readonly points: AnalysisPointsAccessor;
    protected listener?: HTMLElement;
    /** Alias of the current `ToolDrive` value. */
    protected get currentTool(): ThermalTool;
    /** Cached listener on `this.listenerLayerContainer` - pointermove event. */
    protected bindedPointerMoveListener?: (event: PointerEvent) => void;
    /** Cached listener on `this.listenerLayerContainer` - pointerdown event. */
    protected bindedPointerDownListener?: (event: PointerEvent) => void;
    /** Cached listener on `this.listenerLayerContainer` - pointerup event. */
    protected bindedPointerUpListener?: (event: PointerEvent) => void;
    /**
     * Value of this drive is stored in `AnalysisLayersStorage` and from there, it is mirrored to the drive.
     * It is better to add listeners to the storage, not to the drive.
     */
    dangerouslySetValueFromStorage(value: AbstractAnalysis[]): void;
    protected validate(value: AbstractAnalysis[]): AbstractAnalysis[];
    protected afterSetEffect(): void;
    /** Calculate the top/left position from a `MouseEvent` */
    protected getRelativePosition(event: MouseEvent): {
        top: number;
        left: number;
    };
    /** Activate listeners for the current drive on the file's listener layer. */
    activateListeners(container: HTMLDivElement): void;
    /** Remove all listeners from the file's listener layer */
    deactivateListeners(): void;
}

declare abstract class AbstractArea {
    readonly analysis: AbstractAnalysis;
    private pxX;
    private pxY;
    get fileWidth(): number;
    get fileHeight(): number;
    get root(): HTMLDivElement;
    protected element: HTMLDivElement;
    protected _top: number;
    protected _width: number;
    protected _left: number;
    protected _height: number;
    get top(): number;
    set top(value: number);
    get left(): number;
    set left(value: number);
    get height(): number;
    set height(value: number);
    get width(): number;
    set width(value: number);
    get center(): {
        x: number;
        y: number;
    };
    constructor(analysis: AbstractAnalysis, top: number, right: number, left: number, bottom: number);
    build(): void;
    abstract onBuild(): void;
    setColor(value: string): void;
    abstract onSetColor(value: string): void;
}

declare abstract class AbstractHandlePoint extends AbstractPoint {
    analysis: AbstractAreaAnalysis;
    constructor(key: string, top: number, left: number, analysis: AbstractAreaAnalysis, color: string, placementX: PointPlacement, placementY: PointPlacement);
    createInnerElement(): HTMLDivElement;
    actionOnMouseEnter(): void;
    actionOnMouseLeave(): void;
}

declare class CornerPoint extends AbstractHandlePoint {
    protected _pairX: CornerPoint;
    protected _pairY: CornerPoint;
    get pairX(): CornerPoint;
    get pairY(): CornerPoint;
    setPairX(point: CornerPoint): void;
    setPairY(point: CornerPoint): void;
    getRadius(): number;
    mayMoveToX(value: number): boolean;
    mayMoveToY(value: number): boolean;
    private getCenterX;
    private getCenterY;
    get isLeftSide(): boolean;
    get isTopSide(): boolean;
    get isRightSide(): boolean;
    get isBottomSide(): boolean;
    protected analyzeXFromTool(value: number): {
        x: number;
        placement: PointPlacement;
    };
    protected analyzeYFromTool(value: number): {
        y: number;
        placement: PointPlacement;
    };
    protected sideEffectOnXFromTool(value: number, placement: PointPlacement): void;
    protected sideEffectOnYFromTool(value: number, placement: PointPlacement): void;
    isMoving: boolean;
    protected onSetColor(value: string): void;
    protected actionOnActivate(): void;
    protected actionOnDeactivate(): void;
}

declare class RectangleArea extends AbstractArea {
    onBuild(): void;
    onSetColor(value: string): void;
}

declare abstract class AbstractAreaAnalysis extends AbstractAnalysis {
    points: Map<string, CornerPoint>;
    protected readonly wPx: string;
    protected readonly hPx: string;
    readonly tl: CornerPoint;
    readonly tr: CornerPoint;
    readonly bl: CornerPoint;
    readonly br: CornerPoint;
    readonly area: RectangleArea;
    protected _graph: AnalysisGraph | undefined;
    get graph(): AnalysisGraph;
    isWithin(x: number, y: number): boolean;
    protected abstract buildArea(left: number, top: number, width?: number, height?: number): AbstractArea;
    static calculateDimensionsFromCorners(top: number, left: number, right: number, bottom: number): {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    protected constructor(key: string, color: string, file: Instance, top: number, left: number, width?: number, height?: number);
    setColorCallback(value: string): void;
    protected calculateBounds(): void;
    protected addPoint(role: string, top: number, left: number, placementX: PointPlacement, placementY: PointPlacement): CornerPoint;
    protected validateWidth(value: number): number;
    protected validateHeight(value: number): number;
    protected onSetLeft(validatedValue: number): void;
    protected onSetTop(validatedValue: number): void;
    protected onSetWidth(validatedValue: number): void;
    protected onSetHeight(validatedValue: number): void;
    protected getVerticalDimensionFromNewValue(value: number, preferredSide: "top" | "bottom"): {
        top: number;
        bottom: number;
        height: number;
    };
    protected getHorizontalDimensionsFromNewValue(value: number, preferredSide: "left" | "right"): {
        left: number;
        right: number;
        width: number;
    };
    get leftSidePoints(): CornerPoint[];
    get rightSidePoints(): CornerPoint[];
    get topSidePoints(): CornerPoint[];
    get bottomSidePoints(): CornerPoint[];
    protected forPoints(points: CornerPoint[], fn: (point: CornerPoint) => void): void;
    recievedSerialized(input: string): void;
    toSerialized(): string;
}

declare class EllipsisAnalysis extends AbstractAreaAnalysis {
    getType(): string;
    static startAddingAtPoint(key: string, color: string, file: Instance, top: number, left: number): EllipsisAnalysis;
    static build(key: string, color: string, file: Instance, _top: number, _left: number, _right: number, _bottom: number): EllipsisAnalysis;
    protected buildArea(x: number, y: number, width?: number, height?: number): AbstractArea;
    protected getValues(): {
        min?: number;
        max?: number;
        avg?: number;
    };
    isWithin(x: number, y: number): boolean;
    getAnalysisData(): Promise<AreaAnalysisData>;
}

declare class PointPoint extends AbstractPoint {
    static size: number;
    static sizePx(aspect?: number): string;
    protected axisX?: HTMLDivElement;
    protected axisY?: HTMLDivElement;
    protected center?: HTMLDivElement;
    protected analyzeXFromTool(value: number): {
        x: number;
        placement: PointPlacement;
    };
    protected analyzeYFromTool(value: number): {
        y: number;
        placement: PointPlacement;
    };
    protected sideEffectOnXFromTool(): void;
    protected sideEffectOnYFromTool(): void;
    constructor(key: string, top: number, left: number, analysis: AbstractAnalysis, color: string);
    mayMoveToX(value: number): boolean;
    mayMoveToY(value: number): boolean;
    createInnerElement(): HTMLDivElement;
    protected buildAxisX(): HTMLDivElement;
    protected buildAxisY(): HTMLDivElement;
    protected buildCenter(): HTMLDivElement;
    protected onSetColor(value: string): void;
    protected actionOnMouseEnter(): void;
    protected actionOnMouseLeave(): void;
    protected actionOnActivate(): void;
    protected actionOnDeactivate(): void;
    getRadius(): number;
    protected setBoxShadow(color?: string | undefined): void;
}

declare class PointAnalysis extends AbstractAnalysis {
    getType(): string;
    readonly center: PointPoint;
    protected _graph: AnalysisGraph | undefined;
    get graph(): AnalysisGraph;
    static addAtPoint(key: string, color: string, file: Instance, top: number, left: number): PointAnalysis;
    protected constructor(key: string, color: string, file: Instance, top: number, left: number);
    setColorCallback(value: string): void;
    isWithin(x: number, y: number): boolean;
    protected getValues(): {
        min?: number;
        max?: number;
        avg?: number;
    };
    getAnalysisData(): Promise<PointAnalysisData>;
    protected validateWidth(): number;
    protected validateHeight(): number;
    protected onSetLeft(validatedValue: number): void;
    protected onSetTop(validatedValue: number): void;
    onSetWidth(): void;
    onSetHeight(): void;
    protected getVerticalDimensionFromNewValue(value: number): {
        top: number;
        height: number;
        bottom: number;
    };
    protected getHorizontalDimensionsFromNewValue(value: number): {
        left: number;
        right: number;
        width: number;
    };
    recievedSerialized(input: string): void;
    toSerialized(): string;
}

declare class RectangleAnalysis extends AbstractAreaAnalysis {
    getType(): string;
    static startAddingAtPoint(key: string, color: string, file: Instance, top: number, left: number): RectangleAnalysis;
    static build(key: string, color: string, file: Instance, _top: number, _left: number, _right: number, _bottom: number): RectangleAnalysis;
    protected buildArea(x: number, y: number, width?: number, height?: number): AbstractArea;
    protected getValues(): {
        min?: number;
        max?: number;
        avg?: number;
    };
    getAnalysisData(): Promise<AreaAnalysisData>;
}

type AnalysisAddedCallback = (analysis: AbstractAnalysis, layers: AbstractAnalysis[]) => void;
type AnalysisRemovedCallback = (key: string) => void;
type SelectionChangeEvent = (selectedAnalysis: AbstractAnalysis[]) => void;
type SlotUnion = "analysis1" | "analysis2" | "analysis3" | "analysis4" | "analysis5" | "analysis6" | "analysis7";
type SlotNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;
declare const availableAnalysisColors: string[];
declare class AnalysisLayersStorage extends Map<string, AbstractAnalysis> {
    readonly drive: AnalysisDrive;
    /** Array of all layers ordered from oldest to the newest */
    protected layers: Array<AbstractAnalysis>;
    protected get slots(): AnalysisSlotsState;
    /** Fired whenever an analysis is added */
    readonly onAdd: CallbacksManager<AnalysisAddedCallback>;
    /** Fired whenever an analysis is removed */
    readonly onRemove: CallbacksManager<AnalysisRemovedCallback>;
    /** Fired whenever the selection list changes */
    readonly onSelectionChange: CallbacksManager<SelectionChangeEvent>;
    /** Array of available colors */
    readonly colors: string[];
    constructor(drive: AnalysisDrive);
    protected addAnalysis(analysis: AbstractAnalysis, slotNumber?: SlotInitialisationValue): this;
    removeAnalysis(key: string): void;
    createLineFrom(top: number, left: number): LineAnalysis;
    /** Add a rectangular analysis in the given position and start editing it. */
    createRectFrom(top: number, left: number): RectangleAnalysis;
    /** Build an ellyptical analysis at the given position. */
    placeRectAt(name: string, top: number, left: number, right: number, bottom: number, color?: string, slotNumber?: SlotInitialisationValue): RectangleAnalysis;
    /** Add an ellyptical analysis in the given position and start editing it */
    createEllipsisFrom(top: number, left: number): EllipsisAnalysis;
    /** Build an ellyptical analysis at the given position. */
    placeEllipsisAt(name: string, top: number, left: number, right: number, bottom: number, color?: string, slotNumber?: SlotInitialisationValue): EllipsisAnalysis;
    createPointAt(top: number, left: number): PointAnalysis;
    placePointAt(name: string, top: number, left: number, color?: string, slotNumber?: SlotInitialisationValue): PointAnalysis;
    selectAll(): void;
    deselectAll(): void;
    /** Accessors */
    /** Array of all analysis ordered from the oldest to the newest. */
    get all(): AbstractAnalysis[];
    /** Array of all active analysis ordered from the oldest to the newest. */
    get selectedOnly(): AbstractAnalysis[];
    /** Get color for the next analysis */
    protected getNextColor(): string;
    /** Get name for the next analysis */
    protected getNextName(type: string): string;
}

declare class AnalysisGraphsStorage {
    readonly drive: AnalysisDataState;
    readonly listenerKey = "___listen-to-graphs___";
    get layers(): AnalysisLayersStorage;
    protected readonly _graphs: Map<string, AnalysisGraph>;
    get graphs(): Map<string, AnalysisGraph>;
    protected addGraph(graph: AnalysisGraph): void;
    protected removeGraph(graph: string): void;
    protected _output: AnalysisDataStateValue;
    get output(): AnalysisDataStateValue;
    protected set output(output: AnalysisDataStateValue);
    onOutput: CallbacksManager<(output: AnalysisDataStateValue) => void>;
    onAddGraph: CallbacksManager<(graph: AnalysisGraph) => void>;
    onRemoveGraph: CallbacksManager<(graph: string) => void>;
    constructor(drive: AnalysisDataState);
    refreshOutput(): AnalysisDataStateValue;
    hasGraph(): boolean;
    generateExportData(): {
        header: {
            key: string;
            displayLabel: string;
        }[];
        data: {
            [index: string]: string | number;
        }[];
    };
}

type HeaderRow = string[];
type ValueRow = [Date, ...number[]];
type DataType = [HeaderRow, ...ValueRow[]];
type AnalysisDataStateValue = {
    values: DataType;
    colors: string[];
};
/** Stores the data of all analysis. Purpose: store data for the purpose of graph. The graph data format is constructed for Google Charts webcomponent. */
declare class AnalysisDataState extends AbstractProperty<AnalysisDataStateValue, Instance> {
    protected _hasActiveGraphs: boolean;
    get hasActiveGraphs(): boolean;
    readonly onGraphsPresence: CallbacksManager<(hasActiveGraphs: boolean) => void>;
    readonly listeners: AnalysisGraphsStorage;
    constructor(parent: Instance);
    protected validate(value: AnalysisDataStateValue): AnalysisDataStateValue;
    protected afterSetEffect(): void;
    dangerouslyUpdateValue(value: AnalysisDataStateValue): void;
    /** Assamble the current analysis data and download them as CSV directly. */
    downloadData(): void;
}

/** The cursor position coordinates */
type ThermalCursorPosition = {
    x: number;
    y: number;
};
/** The cursor position coordinates or undefined */
type ThermalCursorPositionOrUndefined = ThermalCursorPosition | undefined;
/** An object that has CursorPositionDrive should implement it in one particular way. */
interface IWithCursorPosition extends IBaseProperty {
    cursorPosition: CursorPositionDrive;
}
/** Handles cursor position */
declare class CursorPositionDrive extends AbstractProperty<ThermalCursorPositionOrUndefined, ThermalGroup> {
    protected _hover: boolean;
    get hover(): boolean;
    protected validate(value: ThermalCursorPositionOrUndefined): ThermalCursorPositionOrUndefined;
    protected afterSetEffect(value: ThermalCursorPositionOrUndefined): void;
    recieveCursorPosition(position: ThermalCursorPositionOrUndefined): void;
}

/** The range should allways contain both properties. */
type ThermalRangeType = {
    from: number;
    to: number;
};
/** The range or undefined */
type ThermalRangeOrUndefined = ThermalRangeType | undefined;
/** An object with range should implement it in a unified way */
interface IWithRange extends IBaseProperty {
}
/** Handles the thermal range display. */
declare class RangeDriver extends AbstractProperty<ThermalRangeOrUndefined, ThermalRegistry> {
    get currentRange(): ThermalRangeOrUndefined;
    /**
     * Make sure the range is allways within the minmax values.
     *
     * If this method should work, the value needs to be set before the minmax is calculated.
     */
    protected validate(value: ThermalRangeOrUndefined): ThermalRangeOrUndefined;
    /**
     * Whenever the range changes, propagate the value to all instances
     */
    protected afterSetEffect(value: ThermalRangeOrUndefined): void;
    /**
     * Imposes a range to itself and below
     * - needs to be called before the minmax is calculated!
     */
    imposeRange(value: ThermalRangeOrUndefined): ThermalRangeOrUndefined;
    /** Sets the range to the current minmax values */
    applyMinmax(): void;
    /** Sets the range automatically based on the current histogram */
    applyAuto(): void;
}

type ThermalGroupGraphData = [
    string[],
    ...[Date, ...number[]][]
];
type ThermalGraphDefinition = {
    data: ThermalGroupGraphData;
    colors: string[];
};
type ThermalGraphGroupDataOrUndefined = ThermalGraphDefinition | undefined;
declare class AnalysisGroupGraph extends AbstractProperty<ThermalGraphGroupDataOrUndefined, ThermalGroup> {
    static LISTENER_ID: string;
    constructor(parent: ThermalGroup);
    protected timeout?: ReturnType<typeof setTimeout>;
    protected calculateData(): void;
    turnOn(): void;
    turnOff(): void;
    _wtf(): void;
    protected validate(value: ThermalGraphGroupDataOrUndefined): ThermalGraphGroupDataOrUndefined;
    protected afterSetEffect(): void;
}

type PropertyListenersTypes = boolean | number | string | ThermalRangeOrUndefined | ThermalMinmaxOrUndefined | ThermalCursorPositionOrUndefined | ThermalGroup[] | ThermalStatistics[] | Instance[] | AbstractAnalysis[] | AbstractTool | AnalysisDataStateValue | AnalysisSlotsMap | ThermalGraphGroupDataOrUndefined;
type PropertyListenerFn<T extends PropertyListenersTypes> = (value: T) => void;
interface IBaseProperty {
}
/**
 * A common basis for all observable properties
 * @internal
 */
declare abstract class AbstractProperty<ValueType extends PropertyListenersTypes, ParentType extends IBaseProperty> {
    readonly parent: ParentType;
    readonly _initial: ValueType;
    protected _value: ValueType;
    constructor(parent: ParentType, _initial: ValueType);
    reset(): void;
    protected abstract validate(value: ValueType): ValueType;
    protected abstract afterSetEffect(value: ValueType): void;
    /** Get the current value @readonly */
    get value(): ValueType;
    /** Set the value and call all listeners */
    protected set value(value: ValueType);
    protected _listeners: {
        [index: string]: PropertyListenerFn<ValueType>;
    };
    addListener(id: string, listener: PropertyListenerFn<ValueType>): void;
    removeListener(id: string): void;
    clearAllListeners(): void;
}

type ExportHeaderEntryType = {
    key: string;
    displayLabel: string;
};
type ExportHeaderType = ExportHeaderEntryType[];
declare class GroupExportCSV {
    readonly drive: AnalysisSyncDrive;
    constructor(drive: AnalysisSyncDrive);
    protected formatAnalysisDisplayName(analysis: AbstractAnalysis, scope?: string): string;
    protected formatAnalysisKey(analysis: AbstractAnalysis, scope?: string): string;
    protected formatFrameSlotValue(slot: AnalysisSlot, scope?: "min" | "max" | "avg"): {
        key: string;
        value: string;
    };
    /** Assamble the export header and data */
    protected getData(): {
        header: ExportHeaderType;
        data: {
            [index: string]: string | number;
        }[];
    };
    downloadAsCsv(): void;
}

type AbstractExportProps = {
    fileName?: string;
    width?: number;
    fontSize?: number;
    textColor?: string;
    backgroundColor?: string;
    showAnalysis?: boolean;
    showFileInfo?: boolean;
    showThermalScale?: boolean;
    author?: string;
    license?: string;
    showSource?: boolean;
};
type AbstractExportTypeMandatory = {
    fileName: string;
    width: number;
    fontSize: number;
    textColor: string;
    backgroundColor: string;
    showAnalysis: boolean;
    showFileInfo: boolean;
    showThermalScale: boolean;
    author?: string;
    license?: string;
    showSource: boolean;
};
declare abstract class AbstractPngExport<O extends AbstractExportProps, M extends AbstractExportTypeMandatory> {
    static FONT_SIZE_NORMAL: string;
    static FONT_SIZE_SMALL: string;
    static COLOR_BASE: string;
    static COLOR_GRAY: string;
    static COLOR_LIGHT: string;
    static WIDTH: string;
    static FONT_FAMILY: string;
    static GAP_BASE: string;
    static GAP_SMALL: string;
    static DEBUG: boolean;
    protected wrapper?: HTMLDivElement;
    protected container?: HTMLDivElement;
    private _exporting;
    get exporting(): boolean;
    readonly onExportingStatusChange: CallbacksManager<(status: boolean) => void>;
    /**
     * Indicate the exporting status. Internal method only!
     */
    private setExporting;
    /**
     * A helper function creating a DIV with default styles
     */
    protected createElementWithText<E extends HTMLElement>(element: string, text: string, fontSize?: string, fontWeight?: CSSStyleDeclaration["fontWeight"], color?: string): E;
    private buildWrapper;
    private buildContainer;
    /** Actions taken before the wrapper element is removed */
    protected abstract beforeDomRemoved(): void;
    /** Actions taken before the wrapper element is removed */
    protected abstract afterDomRemoved(): void;
    private clear;
    /** Action taken after the wrapper and container are built */
    protected abstract onBuildDom(params: M): void;
    /** Create the core DOM and append it to body */
    private buildDom;
    /**
     * Get final parameters from optional provided parameters
     */
    protected abstract getFinalParams(params?: O): M;
    /**
     * Make sure the file name has a valid extension
     */
    private makeSureFileNameIsValid;
    /**
     * This is the main method that shall create all the logic, append it to DOM and trigger a download via setTimeout. The download itself needs to be done through `this.downloadImage`.
     */
    protected abstract onDownload(params: M): void;
    downloadPng(params?: O): Promise<void>;
    /** A unified way to download an image */
    protected downloadImage(fileName: string, container: HTMLDivElement): void;
    buildHorizontalScale(element: HTMLDivElement, min: number, max: number, from: number, to: number, gradient: string, bgColor: string, text: string, highlight?: {
        from: number;
        to: number;
    }): HTMLDivElement;
}

type GroupExportPNGParams = AbstractExportProps & {
    columns?: number;
};
type GroupExportPNGParamsMandatory = AbstractExportTypeMandatory & {
    columns: number;
};
declare class GroupExportPNG extends AbstractPngExport<GroupExportPNGParams, GroupExportPNGParamsMandatory> {
    readonly drive: AnalysisSyncDrive;
    static DEFAULT_PROPS: GroupExportPNGParams;
    /** Alias to the group this exporter is attached to */
    protected get group(): ThermalGroup;
    /** Temporary local group is used to build a mirror of images. */
    protected localGroup?: ThermalGroup;
    /** The header element with title, description and other stuff */
    protected header?: HTMLDivElement;
    /** Images are mounted to this DIV */
    protected list?: HTMLDivElement;
    constructor(drive: AnalysisSyncDrive);
    protected buildHeader(): HTMLDivElement;
    protected buildList(): HTMLDivElement;
    protected buildInstance(instance: Instance, width: number, showAnalysis: boolean): void;
    protected onBuildDom(): void;
    protected beforeDomRemoved(): void;
    protected afterDomRemoved(): void;
    protected onDownload(params: GroupExportPNGParamsMandatory): void;
    /**
     * Take provided parameters and combine them with defaults and add filename.
     */
    protected getFinalParams(params?: GroupExportPNGParams): GroupExportPNGParamsMandatory;
}

interface IWithAnalysisSync extends IBaseProperty {
    analysisSync: AnalysisSyncDrive;
}
declare class AnalysisSyncDrive extends AbstractProperty<boolean, ThermalGroup> {
    readonly onSlotSync: CallbacksManager<(serialized: string | undefined, slot: number) => void>;
    protected validate(value: boolean): boolean;
    protected afterSetEffect(): void;
    turnOn(instance: Instance): void;
    turnOff(): void;
    protected _currentPointer?: Instance;
    get currentPointer(): Instance | undefined;
    forEveryExistingSlot(fn: (slot: AnalysisSlot, num: number) => void): void;
    protected setCurrentPointer(instance?: Instance): void;
    protected getSlotListeners(instance: Instance, slotNumber: number): {
        slot: AnalysisSlot | undefined;
        serialise: CallbacksManager<(value: string | undefined) => void>;
        assign: CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    } | undefined;
    static LISTENER_KEY: string;
    startSyncingSlot(instance: Instance, slotNumber: number): void;
    endSyncingSlot(instance: Instance, slotNumber: number): void;
    deleteSlot(instance: Instance, slotNumber: number): void;
    setSlotSelected(instance: Instance, slotNumber: number): void;
    setSlotDeselected(instance: Instance, slotNumber: number): void;
    /**
     * Get array of files excludint the one provided
     */
    protected allExceptOne(instance: Instance): Instance[];
    /**
     * Execute a given function on all files slot
     */
    protected forEveryOtherSlot(instance: Instance, slotNumber: number, fn: (slot: AnalysisSlot | undefined, file: Instance) => void): void;
    recieveSlotSerialized(serialized: string | undefined, slot: number): void;
    /** @deprecated Should sync individual slots only. This method synces all slots at once. */
    syncSlots(instance: Instance): void;
    protected _csv?: GroupExportCSV;
    /** Lazy loaded CSV export object. */
    get csv(): GroupExportCSV;
    protected _png?: GroupExportPNG;
    /** Lazy loaded PNG export object. */
    get png(): GroupExportPNG;
}

interface IWithFiles extends IBaseProperty {
    files: FilesState;
}
declare class FilesState extends AbstractProperty<Instance[], ThermalGroup> {
    protected _map: Map<string, Instance>;
    get map(): Map<string, Instance>;
    protected validate(value: Instance[]): Instance[];
    /** Array of all files sorted by timestamp from the earliest to the latest. */
    get sortedFiles(): Instance[];
    /**
     * Whenever the instances change, recreate the index
     */
    protected afterSetEffect(value: Instance[]): void;
    addFile(file: Instance): Instance;
    removeFile(file: string | Instance): void;
    /**
     * Removal
     */
    removeAllInstances(): void;
    /**
     * Iteration through all instances
     */
    forEveryInstance(fn: ((instance: Instance) => void)): void;
    downloadAllFiles(): void;
}

interface IWithMinmaxGroup extends IBaseProperty {
    minmax: MinmaxGroupProperty;
}
declare class MinmaxGroupProperty extends AbstractMinmaxProperty<ThermalGroup> {
    protected validate(value: ThermalMinmaxOrUndefined): ThermalMinmaxOrUndefined;
    protected afterSetEffect(): void;
    /** Call this method once all instances are created */
    recalculateFromInstances(): ThermalMinmaxOrUndefined;
    protected _getMinmaxFromInstances(): ThermalMinmaxOrUndefined;
}

interface IWithOpacity extends IBaseProperty {
    opacity: OpacityDrive;
}
declare class OpacityDrive extends AbstractProperty<number, ThermalRegistry> {
    /** Make sure the value is allways between 0 and 1 */
    protected validate(value: number): number;
    /**
     * Whenever the opacity changes, propagate the value to all instances
     */
    protected afterSetEffect(value: number): void;
    /** Impose an opacity to all instances */
    imposeOpacity(value: number): number;
}

interface IWithGroups extends IBaseProperty {
    groups: GroupsState;
}
/** Handles group creation and removal */
declare class GroupsState extends AbstractProperty<ThermalGroup[], ThermalRegistry> {
    protected _map: Map<string, ThermalGroup>;
    get map(): Map<string, ThermalGroup>;
    protected validate(value: ThermalGroup[]): ThermalGroup[];
    protected afterSetEffect(value: ThermalGroup[]): void;
    addExistingGroup(group: ThermalGroup): void;
    addOrGetGroup(groupId: string, name?: string, description?: string): ThermalGroup;
    removeGroup(groupId: string): void;
    removeAllGroups(): void;
}

interface IWithCursorValue extends IBaseProperty {
    cursorValue: CursorValueDrive;
}
declare class CursorValueDrive extends AbstractProperty<number | undefined, Instance> {
    protected validate(value: number | undefined): number | undefined;
    protected afterSetEffect(): void;
    recalculateFromCursor(position: ThermalCursorPositionOrUndefined): void;
    protected _getValueAtCoordinate(x: number | undefined, y: number | undefined): number | undefined;
}

interface IWithLoading extends IBaseProperty {
    /** Stores the loading state and executes all the listeners. */
    loading: LoadingState;
}
declare class LoadingState extends AbstractProperty<boolean, IWithLoading> {
    protected validate(value: boolean): boolean;
    protected afterSetEffect(): void;
    markAsLoading(): void;
    markAsLoaded(): void;
}

interface IWithMinmaxRegistry extends IBaseProperty {
    minmax: MinmaxRegistryProperty;
}
declare class MinmaxRegistryProperty extends AbstractMinmaxProperty<ThermalRegistry> {
    protected validate(value: ThermalMinmaxOrUndefined): ThermalMinmaxOrUndefined;
    protected afterSetEffect(): void;
    recalculateFromGroups(): ThermalMinmaxOrUndefined;
    protected _getMinmaxFromAllGroups(groups: ThermalGroup[]): ThermalMinmaxOrUndefined;
}

declare class FrameBuffer {
    protected readonly drive: TimelineDrive;
    /** @internal use accessors to get and set with side effects */
    protected _currentFrame: ParsedFileFrame;
    /** The current frame data @readonly */
    get currentFrame(): ParsedFileFrame;
    /** Upon every update of current frame, propagate current pixels to the instance */
    protected set currentFrame(frame: ParsedFileFrame);
    /** Get the current step value calculated from _currentFrame */
    get currentStep(): ParsedTimelineFrame;
    /** Number of images to preload at once */
    readonly bufferSize: number;
    /** The actual buffer holding pair of step & frame */
    protected buffer: Map<ParsedTimelineFrame, ParsedFileFrame>;
    /** Accessor to array of steps preloaded in the given moment */
    get preloadedSteps(): ParsedTimelineFrame[];
    /** Accessor to array of relative timestamps preloaded in the given moment */
    get preloadedTimestampsRelative(): number[];
    constructor(drive: TimelineDrive, firstFrame: ParsedFileFrame);
    init(): Promise<TimelineChangedStatusType>;
    /**
     * Activate a step
     * - look for the buffer for the corresponding frame
     * - if there is a corresponding frame, apply it
     * - if there is none, fetch it
     * - if sequence, fetch buffer
     *
     * **THIS IS THE MAIN SETTER**
     */
    recieveStep(step: ParsedTimelineFrame): Promise<TimelineChangedStatusType>;
    /** Preload frame data to the buffer based on the provided step */
    protected preloadAfterFrameSet(step: ParsedTimelineFrame): Promise<TimelineChangedStatusType>;
}

interface IWithTimeline extends IBaseProperty {
    timeline: TimelineDrive;
}
type FramesMap = Map<number, ParsedTimelineFrame>;
type TimelineChangedStatusType = {
    absoluteTime: number;
    relativeTime: number;
    currentFrame: ParsedFileFrame;
    currentStep: ParsedTimelineFrame;
    buffer: ParsedTimelineFrame[];
    preloaded: boolean;
    hasChanged: boolean;
};
declare const playbackSpeed: {
    1: number;
    0.5: number;
    2: number;
    3: number;
    5: number;
    10: number;
};
type PlaybackSpeeds = keyof typeof playbackSpeed;
/** Stores the frames and the time pointer which is in the miliseconds */
declare class TimelineDrive extends AbstractProperty<number, Instance> {
    readonly steps: ParsedFileBaseInfo["timeline"];
    readonly parent: Instance;
    protected _playbackSpeed: PlaybackSpeeds;
    get playbackSpeed(): PlaybackSpeeds;
    set playbackSpeed(value: PlaybackSpeeds);
    get playbackSpeedAspect(): number;
    readonly onFrame: CallbacksManager<(currentFrame: ParsedTimelineFrame) => void>;
    get duration(): number;
    get frameCount(): number;
    readonly startTimestampRelative: number;
    /** @deprecated not in use? */
    readonly endTimestampRelative: number;
    readonly stepsByAbsolute: FramesMap;
    readonly stepsByRelative: FramesMap;
    readonly stepsByIndex: FramesMap;
    readonly relativeSteps: number[];
    protected _currentStep: ParsedTimelineFrame;
    get currentStep(): ParsedTimelineFrame;
    readonly isSequence: boolean;
    protected _isPlaying: boolean;
    get isPlaying(): boolean;
    protected timer?: ReturnType<typeof setTimeout>;
    readonly buffer: FrameBuffer;
    readonly callbackdPlaybackSpeed: CallbacksManager<(value: PlaybackSpeeds) => void>;
    readonly callbacksPlay: CallbacksManager<() => void>;
    readonly callbacksPause: CallbacksManager<() => void>;
    readonly callbacksStop: CallbacksManager<() => void>;
    readonly callbacksEnd: CallbacksManager<() => void>;
    readonly callbacksChangeFrame: CallbacksManager<(frame: ParsedTimelineFrame) => void>;
    get currentMs(): number;
    get currentPercentage(): number;
    get currentFrameIndex(): number;
    get currentTime(): string;
    get frames(): ParsedTimelineFrame[];
    constructor(parent: Instance, initial: number, steps: ParsedFileBaseInfo["timeline"], initialFrameData: ParsedFileFrame);
    init(): void;
    protected afterSetEffect(): void;
    protected validate(value: number): number;
    _validateRelativeTime(value: number): number;
    _validateIndex(value: number): number;
    _convertRelativeToAspect(relativeTimeInMs: number): number;
    _convertRelativeToPercent(relativeTimeInMs: number): number;
    _convertPercenttRelative(percent: number): number;
    formatDuration(ms: number): string;
    next(): void;
    prev(): void;
    protected findPreviousOrThis(relativeTimeInMs: number): ParsedTimelineFrame;
    /**
     * Find previous frame by relative ms.
     */
    findPreviousRelative(relativeTimeInMs: number): ParsedTimelineFrame;
    findNextRelative(relativeTimeInMs: number): false | ParsedTimelineFrame;
    setRelativeTime(relativeTimeInMs: number): Promise<TimelineChangedStatusType>;
    setValueByPercent(percent: number): Promise<TimelineChangedStatusType>;
    /** This is the main play method */
    protected createNextStepTimer(): void;
    play(): void;
    pause(): void;
    stop(): void;
}

interface IWithRedording extends IBaseProperty {
    recording: RecordingDrive;
}
declare class RecordingDrive extends AbstractProperty<boolean, Instance> {
    parent: Instance;
    protected stream?: MediaStream;
    protected recorder?: MediaRecorder;
    protected mimeType?: string;
    protected _isRecording: boolean;
    protected _mayStop: boolean;
    get mayStop(): boolean;
    protected set mayStop(value: boolean);
    protected recordedChunks: Blob[];
    readonly callbackMayStop: CallbacksManager<(value: boolean) => void>;
    protected validate(value: boolean): boolean;
    protected afterSetEffect(value: boolean): void;
    start(): void;
    end(): void;
    /** Records the entire file from start to the end. */
    recordEntireFile(): Promise<void>;
    protected initRecording(): {
        stream: MediaStream;
        recorder: MediaRecorder;
        options: MediaRecorderOptions;
    };
    protected download(): void;
    protected clearRecording(): void;
}

/**
 * Object types
 */
/** Base object of the thermal tree */
interface IThermalObjectBase {
    destroySelfAndBelow: () => void;
    removeAllChildren: () => void;
    reset: () => void;
}
/** Base object for container tree containers */
interface IThermalContainer extends IThermalObjectBase {
}
/** An instance and its properties */
interface IThermalInstance extends IThermalObjectBase, IWithCursorValue, IWithRedording, IWithAnalysis, IWithTimeline {
    group: ThermalGroup;
}
/** Thermal group definition with all its properties */
interface IThermalGroup extends IThermalContainer, IWithMinmaxGroup, IWithFiles, IWithCursorPosition, IWithTool, IWithAnalysisSync {
}
/** Thermal registry definition with all its properties */
interface IThermalRegistry extends IThermalContainer, IWithGroups, IWithOpacity, IWithLoading, IWithMinmaxRegistry, IWithRange, IWithPalette {
}

/**
 * Control coordinated playback of files within a group.
 *
 * The value is actual time in relative MS (from start, to the end of the latest sequence).
 *
 * This functionality depends on batch analysis of all group files.
 *
 * @todo Group should have its own loading method for batch processing. This method should provide its own callbacks.
 */
declare class GroupPlayback extends AbstractProperty<number, ThermalGroup> {
    protected _hasAnyPlayback: boolean;
    /** Does this group include any sequence? */
    get hasAnyPlayback(): boolean;
    protected set hasAnyPlayback(value: boolean);
    readonly onHasAnyCallback: CallbacksManager<(value: boolean) => void>;
    protected recalculateHasAnyPlayback(instances: Instance[]): void;
    protected _playing: boolean;
    get playing(): boolean;
    protected set playing(value: boolean);
    readonly onPlayingStatusChange: CallbacksManager<(value: boolean) => void>;
    /** Internal pointer holding the current loop iteration*/
    protected loopStep: number;
    /** Internal setTimeout for playback. */
    protected loopTimer?: ReturnType<typeof setTimeout>;
    protected _loopInterval: number;
    /** Interval upon which the main loop triggers. In MS. */
    get loopInterval(): number;
    /** @deprecated The playback interval should not change during playback */
    setLoopInterval(value: number): void;
    /** @deprecated The loop playback should not change during playback */
    readonly onLoopIntervalChanged: CallbacksManager<(value: number) => void>;
    protected _duration: number;
    get duration(): number;
    protected set duration(value: number);
    readonly onDurationChanged: CallbacksManager<(value: number | undefined) => void>;
    protected recalculateDuration(instances: Instance[]): void;
    protected UUID: string;
    constructor(parent: ThermalGroup, initial: number);
    protected validate(value: number): number;
    protected afterSetEffect(value: number): void;
    /** Set time value by percent. The actual MS is calculated depending on the duration. */
    setValueByPercent(percent: number): void;
    /** Set the time value by MS. */
    setValueByRelativeMs(relativeMs: number): void;
    /** Convert percent value to relative time in MS */
    protected percentToMs(percent: number): number;
    /** Convert relative time in MS to percent value */
    protected msToPercent(ms: number): number;
    /**
     * The main method that shall create a timer leading to the next step.
     *
     * It might be called recursively to ensure fluent playback.
     */
    protected createTimerStep(recursive?: boolean): void;
    /**
     * Play the entire group
     */
    play(): void;
    /**
     * Stop the entire group
     */
    stop(): void;
    /**
     * Set the MS value to 0
     */
    reset(): void;
}

/**
 * Group of thermal images
 */
declare class ThermalGroup extends BaseStructureObject implements IThermalGroup {
    readonly registry: ThermalRegistry;
    readonly id: string;
    readonly name?: string | undefined;
    readonly description?: string | undefined;
    readonly hash: number;
    /** Human readable label = name or id or hasn */
    get label(): string;
    get pool(): Pool;
    constructor(registry: ThermalRegistry, id: string, name?: string | undefined, description?: string | undefined);
    readonly minmax: MinmaxGroupProperty;
    /** Tool drive from above */
    get tool(): ToolDrive;
    readonly files: FilesState;
    readonly cursorPosition: CursorPositionDrive;
    readonly analysisSync: AnalysisSyncDrive;
    readonly analysisGraph: AnalysisGroupGraph;
    protected _playback?: GroupPlayback;
    get playback(): GroupPlayback;
    /** Iteration */
    forEveryInstance: (fn: ((instance: Instance) => void)) => void;
    /** Remove all instances, reset the minmax */
    destroySelfAndBelow(): void;
    removeAllChildren(): void;
    reset(): void;
    readonly filters: FilterContainer;
    getInstances(): Instance[];
    startBatch(id: string): Batch;
}

/**
 * A singleton instance handling file loading
 */
declare class FilesService {
    readonly manager: ThermalManager;
    get pool(): Pool__default;
    constructor(manager: ThermalManager);
    static isolatedInstance(pool: Pool__default, registryName?: string): {
        service: FilesService;
        registry: ThermalRegistry;
    };
    /** Map of peoding requesta */
    protected readonly requestsByUrl: Map<string, FileRequest>;
    /** Number of currently pending requests */
    get requestsCount(): number;
    /** Is an URL currently pending? */
    fileIsPending(url: string): boolean;
    /** Cache of loaded files */
    protected readonly cacheByUrl: Map<string, AbstractFileResult>;
    /** Number of cached results */
    get cachedServicesCount(): number;
    /** Is the URL already in the cache? */
    fileIsInCache(url: string): boolean;
    /** Process a file obrained from anywhere */
    loadUploadedFile(file: File): Promise<AbstractFileResult>;
    /** Create a dropzone listener on a HTML element */
    handleDropzone(element: HTMLElement, multiple?: boolean): DropinElementListener;
    /** Load a file from URL, eventually using already cached result */
    loadFile(thermalUrl: string, visibleUrl?: string): Promise<AbstractFileResult>;
    loadFiles(files: {
        lrc: string;
        png?: string;
        callback?: (result: AbstractFileResult) => void;
        group: ThermalGroup;
    }[]): Promise<{
        lrc: string;
        png?: string | undefined;
        callback?: ((result: AbstractFileResult) => void) | undefined;
        group: ThermalGroup;
    }[]>;
}

/** Controls image smoothing */
declare class GraphSmoothDrive extends AbstractProperty<boolean, ThermalManager> {
    protected validate(value: boolean): boolean;
    protected afterSetEffect(): void;
    setGraphSmooth(value: boolean): void;
}

/** Controls image smoothing */
declare class SmoothDrive extends AbstractProperty<boolean, ThermalManager> {
    protected validate(value: boolean): boolean;
    protected afterSetEffect(value: boolean): void;
    setSmooth(value: boolean): void;
}

type ThermalManagerOptions = {
    palette?: AvailableThermalPalettes;
};
declare class ThermalManager extends BaseStructureObject {
    readonly id: number;
    /** Service for creation of loading and caching the files. */
    readonly service: FilesService;
    /** Index of existing registries */
    readonly registries: {
        [index: string]: ThermalRegistry;
    };
    /** A palette is common to all registries within the manager */
    readonly palette: PaletteDrive;
    readonly smooth: SmoothDrive;
    readonly graphSmooth: GraphSmoothDrive;
    readonly tool: ToolDrive;
    readonly pool: Pool__default;
    constructor(pool?: Pool__default, options?: ThermalManagerOptions);
    forEveryRegistry(fn: ((registry: ThermalRegistry) => void)): void;
    addOrGetRegistry(id: string, options?: ThermalRegistryOptions): ThermalRegistry;
    removeRegistry(id: string): void;
    readonly filters: FilterContainer;
    getInstances(): Instance[];
    forEveryInstance(callback: (instance: Instance) => void): void;
}

/** @deprecated Should use `AvailableThermalPalettes` instead. */
type PaletteId = keyof typeof ThermalPalettes;
interface IWithPalette extends IBaseProperty {
    palette: PaletteDrive;
}
declare class PaletteDrive extends AbstractProperty<PaletteId, ThermalManager> {
    get availablePalettes(): {
        iron: ThermalPaletteType;
        jet: ThermalPaletteType;
        grayscale: ThermalPaletteType;
    };
    /** All the current palette properties should be accessed through this property. */
    get currentPalette(): ThermalPaletteType;
    /** @deprecated Should not be used at all. Use `currentPalette` instead */
    get currentPixels(): string[];
    protected validate(value: PaletteId): PaletteId;
    /** Any changes to the value should propagate directly to every instance. */
    protected afterSetEffect(value: PaletteId): void;
    setPalette(key: PaletteId): void;
}

/** A stupid object containing only requested URLS. Does not perform any further logic. */
type ThermalFileRequest = {
    thermalUrl: string;
    visibleUrl?: string;
};

/** Handles the histogram creation and subscription.
 * - should be used only in registries
 */
declare class HistogramState extends AbstractProperty<ThermalStatistics[], ThermalRegistry> {
    protected _resolution: number;
    get resolution(): number;
    /** Map of temperature => countOfPixels in the scaled down resolution @deprecated */
    protected buffer: Map<number, number>;
    /** Total countOfPixels in every image @deprecated */
    protected bufferPixelsCount: number;
    /** @deprecated */
    protected _bufferResolution: number;
    set bufferResolution(value: number);
    get bufferResolution(): number;
    protected _loading: boolean;
    get loading(): boolean;
    protected set loading(value: boolean);
    readonly onCalculationStart: CallbacksManager<() => void>;
    readonly onCalculationEnd: CallbacksManager<(success: boolean) => void>;
    /** Set the historgam resolution
     * - does not recalculate the value!
     * - to recalculate value, call `recalculateWithCurrentSetting`
     *
     * @notice Higher the number, lower the resolution.
     * @deprecated Resolution is calculated in a separate thread, no resolution changes allowed
    */
    setResolution(value: number): void;
    /** If incorrect resolution is being set, set empty array @todo there may be an error in +1*/
    protected validate(value: ThermalStatistics[]): ThermalStatistics[];
    protected afterSetEffect(): void;
    /**
     * Recalculate the histogram buffer using web workers.
     * This is an async operation using `workerpool`
     */
    recalculateHistogramBufferInWorker(): void;
    protected recalculateHistogram(): Promise<void>;
}

type ThermalRegistryOptions = {
    histogramResolution?: number;
};
type BatchLoadingCallback = (result: ThermalFileFailure | Instance) => Promise<void>;
/**
 * The global thermal registry
 * @todo implementing EventTarget
 */
declare class ThermalRegistry extends BaseStructureObject implements IThermalRegistry {
    readonly id: string;
    readonly manager: ThermalManager;
    readonly hash: number;
    constructor(id: string, manager: ThermalManager, options?: ThermalRegistryOptions);
    /** Service */
    get service(): FilesService;
    get pool(): Pool;
    /** Groups are stored in an observable property */
    readonly groups: GroupsState;
    /** Iterator methods */
    forEveryGroup(fn: ((group: ThermalGroup) => void)): void;
    forEveryInstance(fn: (instance: Instance) => void): void;
    /** Full load of the registry with multiple files @deprecated */
    loadFullMultipleFiles(files: {
        [index: string]: ThermalFileRequest[];
    }): Promise<(false | Instance)[][]>;
    /** Load the registry with only one file. @deprecated */
    loadFullOneFile(file: ThermalFileRequest, groupId: string): Promise<Instance | ThermalFileFailure>;
    private _batch?;
    get batch(): BatchLoader;
    /** @deprecated use batch member class instead */
    registerRequest(thermalUrl: string, visibleUrl: string | undefined, group: ThermalGroup, callback: BatchLoadingCallback): void;
    readonly onProcessingStart: CallbacksManager<() => void>;
    readonly onProcessingEnd: CallbacksManager<() => void>;
    /**
     * Actions to take after the registry is loaded
     * - recalculate the minmax of groups
     * - recalculate minmax of registry
     * - impose new minmax as new range
     * - recalculate the histogram
    */
    postLoadedProcessing(): Promise<void>;
    reset(): void;
    removeAllChildren(): void;
    destroySelfAndBelow(): void;
    destroySelfInTheManager(): void;
    /**
     * Observable properties and drives
     */
    /**
     * Opacity property
     */
    readonly opacity: OpacityDrive;
    /**
     * Minmax property
     */
    readonly minmax: MinmaxRegistryProperty;
    /**
     * Loading
     */
    readonly loading: LoadingState;
    /**
     * Range
     */
    readonly range: RangeDriver;
    /**
     * Histogram
     */
    readonly histogram: HistogramState;
    /**
     * Palette
     */
    readonly palette: PaletteDrive;
    readonly filters: FilterContainer;
    getInstances(): Instance[];
}
type ThermalStatistics = {
    from: number;
    to: number;
    percentage: number;
    count: number;
    height: number;
};

type ParsedTimelineFrame = {
    index: number;
    absolute: number;
    relative: number;
    offset: number;
};
/**
 * Every file needs to have this information
 */
type ParsedFileBaseInfo = {
    width: number;
    height: number;
    timestamp: number;
    frameCount: number;
    duration: number;
    frameInterval: number;
    fps: number;
    min: number;
    max: number;
    timeline: ParsedTimelineFrame[];
    averageEmissivity: number;
    averageReflectedKelvins: number;
    bytesize: number;
};
type ParsedFileFrame = {
    timestamp: number;
    min: number;
    max: number;
    emissivity: number;
    reflectedKelvins: number;
    pixels: number[];
};
/**
 * Definition of a supported file type
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
*/
type ParserFileType = {
    /** File extension, lowercase and without starting dots */
    extension: string;
    /** Mime type of the file */
    minme: string;
};
/** A supported device dedfinition */
type SupportedDeviceType = {
    deviceName: string;
    deviceDescription: string;
    deviceUrl: string;
    manufacturer: string;
    manufacturerUrl: string;
};
type PointAnalysisData = {
    [time: number]: number;
};
type AreaAnalysisData = {
    [time: number]: {
        min: number;
        max: number;
        avg: number;
    };
};
/**
 * Interface for a parser object
 * - all methods must be completely and totally static
 * - data needs to be transferred as ArrayBuffer, since it is serialisable
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects#transferring_objects_between_threads
 */
interface IParserObject {
    /** Name of the file format */
    name: string;
    /** Description of the file format */
    description: string;
    /** List of supported devices */
    devices: SupportedDeviceType[];
    /** Define the supported file type for the purpose of display */
    extensions: ParserFileType[];
    /** Determine whether the file corresponds to the given parser */
    is(buffer: ArrayBuffer, url: string): boolean;
    /**
     * Get the basic information necessary for every file
     * - without any pixels!
     * - this sould be called once only
     */
    baseInfo(entireFileBuffer: ArrayBuffer): Promise<ParsedFileBaseInfo>;
    /**
     * Prepare an array buffer for `frameData()` so that we do not need to passe the entire file to it.
     * - the data passed to `frameData()` needs to be as little as possible to avoid memory problems
     * - because the data going to `frameData()` are created per every call, the may be transfered in threads (instead of clonning)
     *
     * **THIS IS SYNCHRONOUS AND NEEDS TO BE CALLED IN THE MAIN THREAD**
     */
    getFrameSubset(entireFileBuffer: ArrayBuffer, frameIndex: number): {
        array: ArrayBuffer;
        dataType: number;
    };
    /**
     * Calculate the pixels and other parameters of one frame
     * @param frameSubset ArrayBuffer of data related to the frame.
     * @param dataType
     */
    frameData(frameSubset: ArrayBuffer, dataType: number): Promise<ParsedFileFrame>;
    registryHistogram(files: ArrayBuffer[]): Promise<ThermalStatistics[]>;
    pointAnalysisData(file: ArrayBuffer, x: number, y: number): Promise<PointAnalysisData>;
    rectAnalysisData(file: ArrayBuffer, x: number, y: number, width: number, height: number): Promise<AreaAnalysisData>;
    ellipsisAnalysisData(file: ArrayBuffer, x: number, y: number, width: number, height: number): Promise<AreaAnalysisData>;
}

declare abstract class AbstractLayer {
    readonly instance: Instance;
    constructor(instance: Instance);
    abstract getLayerRoot(): HTMLElement;
    protected _mounted: boolean;
    get mounted(): boolean;
    mount(): void;
    unmount(): void;
    destroy(): void;
    protected abstract onDestroy(): void;
}

/** Displays the canvas and renders it */
declare class ThermalCanvasLayer extends AbstractLayer {
    protected renderCount: number;
    protected get pool(): Pool;
    protected container: HTMLDivElement;
    readonly canvas: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;
    protected get width(): number;
    protected get height(): number;
    protected get pixels(): number[];
    protected get from(): number;
    protected get to(): number;
    protected _opacity: number;
    get opacity(): number;
    set opacity(value: number);
    constructor(instance: Instance);
    getLayerRoot(): HTMLElement;
    protected onDestroy(): void;
    /** Returns an array of 255 RGB colors */
    protected getPalette(): string[];
    draw(): Promise<boolean>;
    exportAsPng(): void;
}

/** Displays the cursor pointer and its value */
declare class ThermalCursorLayer extends AbstractLayer {
    protected layerRoot: HTMLDivElement;
    protected center: HTMLDivElement;
    protected axisX: HTMLDivElement;
    protected axisY: HTMLDivElement;
    protected label: HTMLDivElement;
    constructor(instance: Instance);
    protected _show: boolean;
    get show(): boolean;
    setShow(value: boolean): void;
    protected _hover: boolean;
    get hover(): boolean;
    set hover(value: boolean);
    protected recalculateLabelPosition(x: number, y: number): void;
    /** @deprecated */
    setCursor(x: number, y: number, value: number): void;
    setLabel(x: number, y: number, value: string): void;
    setValue(value?: number): void;
    resetCursor(): void;
    protected px(number: number): string;
    getLayerRoot(): HTMLDivElement;
    protected onDestroy(): void;
}

/** Listens for the mouse events. Needs to be placed on top. */
declare class ThermalListenerLayer extends AbstractLayer {
    protected container: HTMLDivElement;
    constructor(instance: Instance);
    getLayerRoot(): HTMLElement;
    protected onDestroy(): void;
}

/** Contains the visible image. Needs to be placed on the bottom. */
declare class VisibleLayer extends AbstractLayer {
    _url?: string | undefined;
    protected container: HTMLDivElement;
    protected image?: HTMLImageElement;
    get url(): string | undefined;
    set url(value: string | undefined);
    get exists(): boolean;
    constructor(instance: Instance, _url?: string | undefined);
    getLayerRoot(): HTMLElement;
    protected onDestroy(): void;
}

declare class InstanceDOM {
    readonly parent: AbstractFile;
    readonly root: HTMLDivElement;
    static CLASS_BASE: string;
    static CLASS_BUILT: string;
    static CLASS_HYDRATED: string;
    static CLASS_HOVER: string;
    protected _built: boolean;
    get built(): boolean;
    protected setBuilt(value: boolean): void;
    protected _hydrated: boolean;
    get hydrated(): boolean;
    protected setHydrated(value: boolean): void;
    private _hover;
    get hover(): boolean;
    setHover(value: boolean): void;
    /** The layer holding the canvas element and also analysis DOM */
    protected _canvasLayer?: ThermalCanvasLayer;
    get canvasLayer(): ThermalCanvasLayer | undefined;
    /** Visible layer holding an eventual visible object */
    protected _visibleLayer?: VisibleLayer;
    get visibleLayer(): VisibleLayer | undefined;
    /** Cursor layer will draw the cursor and its label on top of everything */
    protected _cursorLayer?: ThermalCursorLayer;
    get cursorLayer(): ThermalCursorLayer | undefined;
    /** Listener layer is on top of everything and it handles all mouse events */
    protected _listenerLayer?: ThermalListenerLayer;
    get listenerLayer(): ThermalListenerLayer | undefined;
    constructor(parent: AbstractFile, root: HTMLDivElement);
    /**
     * Use the parent's create inner method to build and assign all inner DOM
     */
    build(): void;
    /** Destroy the entire DOM and remove all listeners */
    destroy(): void;
    /** Activate all listeners */
    hydrate(): void;
    /** Deactivate all listeners */
    dehydrate(): void;
}

/**
 * The file metadata = Parsed file base info.
 *
 * Stored here as a separate class. Purpose: separation of concern & provide listener on change.
 */
declare class FileMeta {
    private _current;
    get current(): ParsedFileBaseInfo;
    protected _onChange?: CallbacksManager<(value: ParsedFileBaseInfo) => void>;
    /**
     * Lazyloaded callback manager that is triggered whenever the value changes
     */
    get onChange(): CallbacksManager<(value: ParsedFileBaseInfo) => void>;
    get width(): number;
    get height(): number;
    constructor(baseInfo: ParsedFileBaseInfo);
    set(value: ParsedFileBaseInfo): void;
}

/** Define properties for a file */
interface IFileInstance extends IThermalInstance, BaseStructureObject {
    root: HTMLDivElement | null;
    horizontalLimit: number;
    id: string;
    verticalLimit: number;
    duration: number;
}

/** Displayable object for every file type.
 *
 * This class takes care of the display fundamentals.
 *
 * Most drivers are set in individual implementations, not here.
 */
declare abstract class AbstractFile extends BaseStructureObject implements IFileInstance {
    readonly id: string;
    /** Internal limit for cursor label position */
    readonly horizontalLimit: number;
    /** Internal limit for cursor label position */
    readonly verticalLimit: number;
    readonly group: ThermalGroup;
    get pool(): Pool;
    readonly thermalUrl: string;
    readonly visibleUrl?: string;
    readonly fileName: string;
    signature: string;
    version: number;
    streamCount: number;
    fileDataType: number;
    unit: number;
    /** Stored core information. They may change in time because of filters. */
    readonly meta: FileMeta;
    /** @deprecated Use meta instead */
    get width(): number;
    /** @deprecated Use meta instead */
    get height(): number;
    /** @deprecated Use meta instead */
    get timestamp(): number;
    /** @deprecated Use meta instead */
    get duration(): number;
    /** @deprecated Use meta instead */
    get min(): number;
    /** @deprecated Use meta instead */
    get max(): number;
    /** @deprecated Use meta instead */
    get bytesize(): number;
    /** @deprecated Use meta instead */
    get averageEmissivity(): number;
    /** @deprecated Use meta instead */
    get averageReflectedKelvins(): number;
    /** @deprecated Use meta instead */
    get timelineData(): ParsedTimelineFrame[];
    /** @deprecated Use meta instead */
    get fps(): number;
    /** @deprecated Use meta instead */
    get frameCount(): number;
    protected _dom?: InstanceDOM;
    get dom(): InstanceDOM | undefined;
    get hover(): boolean;
    /** @deprecated use DOM object instead */
    get root(): HTMLDivElement | null;
    /** @deprecated use DOM object instead */
    get canvasLayer(): ThermalCanvasLayer;
    /** @deprecated use DOM object instead */
    get visibleLayer(): VisibleLayer;
    /** @deprecated use DOM object instead */
    get cursorLayer(): ThermalCursorLayer;
    /** @deprecated use DOM object instead */
    get listenerLayer(): ThermalListenerLayer;
    timeline: TimelineDrive;
    cursorValue: CursorValueDrive;
    analysis: AnalysisDrive;
    recording: RecordingDrive;
    /** @deprecated use DOM object instead */
    private _mounted;
    /** @deprecated use DOM object instead */
    get mounted(): boolean;
    /** @deprecated use DOM object instead */
    protected set mounted(value: boolean);
    /** @deprecated use DOM object instead */
    private _built;
    /** @deprecated use DOM object instead */
    get built(): boolean;
    /** @deprecated use DOM object instead */
    protected set built(value: boolean);
    private _pixels;
    get pixels(): number[];
    setPixels(value: number[]): void;
    abstract getPixelsForHistogram(): number[];
    constructor(group: ThermalGroup, baseInfo: ParsedFileBaseInfo, initialPixels: number[], thermalUrl: string, visibleUrl?: string);
    abstract buildServices(): ThisType<AbstractFile>;
    protected abstract onSetPixels(value: number[]): void;
    protected abstract formatId(thermalUrl: string): string;
    abstract createInnerDom(): {
        canvasLayer: ThermalCanvasLayer;
        visibleLayer: VisibleLayer;
        cursorLayer: ThermalCursorLayer;
        listenerLayer: ThermalListenerLayer;
    };
    abstract hydrateListener(dom: InstanceDOM): void;
    abstract dehydrateListener(dom: InstanceDOM): void;
    mountToDom(container: HTMLDivElement): void;
    unmountFromDom(): void;
    draw(): Promise<boolean | undefined>;
    recievePalette(palette: string | number): void;
    /** @deprecated use DOM object instead */
    destroySelfAndBelow(): void;
    /** @deprecated use DOM object instead */
    removeAllChildren(): void;
    getTemperatureAtPoint(x: number, y: number): number;
    getColorAtPoint(x: number, y: number): string | undefined;
    recieveRange(value: ThermalRangeOrUndefined): void;
    reset(): void;
    recieveOpacity(value: number): void;
}

type FilterParent = ThermalManager | ThermalRegistry | ThermalGroup | AbstractFile;
declare class FilterContainer {
    readonly parent: FilterParent;
    private _layers;
    get layers(): AbstractFilter<AbstractFilterParameters>[];
    onLayers: CallbacksManager<(layers: AbstractFilter[]) => void>;
    protected setLayers(layers: AbstractFilter[]): void;
    constructor(parent: FilterParent);
    getActiveFilters(): AbstractFilter[];
    addFilter(filter: AbstractFilter): void;
    removeFilter(filter: AbstractFilter): void;
    applyFilters(): void;
    getFiltersArray(): void;
}

/**
 * Stores the file's `ArrayBuffer` and provides all the data for instance
 * - this service is registered in FilesService
 * - the instances are retrieved using `FilesService.loadOneFile`
 */
declare class ThermalFileReader extends AbstractFileResult {
    readonly service: FilesService;
    readonly parser: IParserObject;
    /** For the purpose of testing we have a unique ID */
    readonly id: number;
    /** In-memory cache of the `baseInfo` request. This request might be expensive in larger files or in Vario Cam files. Because the return value is allways the same, there is no need to make the call repeatedly. */
    protected baseInfoCache?: ParsedFileBaseInfo;
    readonly fileName: string;
    private get pool();
    protected originalBuffer?: ArrayBuffer;
    protected _buffer: ArrayBuffer;
    get buffer(): ArrayBuffer;
    protected set buffer(value: ArrayBuffer);
    constructor(service: FilesService, buffer: ArrayBuffer, parser: IParserObject, thermalUrl: string, visibleUrl?: string, preserveOriginalBuffer?: boolean);
    isSuccess(): boolean;
    /** @todo This method relies on the functionality of filters. */
    protected copyBuffer(buffer: ArrayBuffer): ArrayBuffer;
    /** Create copy of the self so that the */
    protected cloneForInstance(): ThermalFileReader;
    /** Read the fundamental data of the file. If this method had been called before, return the cached result. */
    baseInfo(): ReturnType<IParserObject["baseInfo"]>;
    /**
     * Before requesting a frame, create a dedicated `ArrayBuffer` containing only the frame's data
     *
     * **THIS IS SYNCHRONOUSE AND MIGHT BE EXPENSIVE**
     */
    protected getFrameSubset(frameIndex: number): ReturnType<IParserObject["getFrameSubset"]>;
    /** Read a given frame
     * @todo Implement index range check
     */
    frameData(index: number): ReturnType<IParserObject["frameData"]>;
    pointAnalysisData(x: number, y: number): ReturnType<IParserObject["pointAnalysisData"]>;
    rectAnalysisData(x: number, y: number, width: number, height: number): ReturnType<IParserObject["rectAnalysisData"]>;
    ellipsisAnalysisData(x: number, y: number, width: number, height: number): ReturnType<IParserObject["ellipsisAnalysisData"]>;
    /**
     * Recalculates the core array buffer using all available filters.
     *
     * This method does not emit anything - it only changes the array buffer.
     */
    applyFilters(filters: AbstractFilter[]): Promise<ThermalFileReader>;
    createInstance(group: ThermalGroup): Promise<Instance>;
}

type FileExportPngParams = AbstractExportProps;
type FileExportPngParamsMandatory = AbstractExportTypeMandatory;
declare class FilePngExport extends AbstractPngExport<FileExportPngParams, FileExportPngParamsMandatory> {
    readonly file: Instance;
    static DEFAULT_PARAMS: FileExportPngParamsMandatory;
    protected localInstance?: Instance;
    get canvas(): HTMLCanvasElement;
    constructor(file: Instance);
    protected onBuildDom(): void;
    protected beforeDomRemoved(): void;
    protected afterDomRemoved(): void;
    protected getFinalParams(params?: AbstractExportProps | undefined): FileExportPngParamsMandatory;
    protected onDownload(params: AbstractExportTypeMandatory): Promise<void>;
}

/**
 * An instance of the loaded file
 *
 * Holds DOM, displays the canvas,
 * handles playback and do all important
 * stuff.
 */
declare class Instance extends AbstractFile {
    readonly group: ThermalGroup;
    readonly reader: ThermalFileReader;
    readonly firstFrame: ParsedFileFrame;
    timeline: TimelineDrive;
    analysis: AnalysisDrive;
    analysisData: AnalysisDataState;
    slots: AnalysisSlotsState;
    /**
     * Exports
     */
    protected _export?: FilePngExport;
    /** Lazy-loaded `ThermalFileExport` object */
    get export(): FilePngExport;
    private constructor();
    createInnerDom(): {
        canvasLayer: ThermalCanvasLayer;
        visibleLayer: VisibleLayer;
        cursorLayer: ThermalCursorLayer;
        listenerLayer: ThermalListenerLayer;
    };
    hydrateListener(dom: InstanceDOM): void;
    dehydrateListener(dom: InstanceDOM): void;
    buildServices(): this;
    protected formatId(thermalUrl: string): string;
    protected onSetPixels(value: number[]): void;
    getPixelsForHistogram(): number[];
    static fromService(group: ThermalGroup, service: ThermalFileReader, baseInfo: ParsedFileBaseInfo, firstFrame: ParsedFileFrame): Instance;
    recieveCursorPosition(position: ThermalCursorPositionOrUndefined): void;
    readonly filters: FilterContainer;
    getInstances(): this[];
    getAllApplicableFilters(): AbstractFilter[];
    applyAllAvailableFilters(): Promise<void>;
}

/**
 * Array of all supported file types and extensions
 * - this is only for the purpose of display!
 * - no functionality is relies on this data
 * - all the functionality needs to be implemented in static functions of the parser itself
 */
declare const supportedFileTypes: IParserObject["extensions"][];
declare const supportedFileTypesInputProperty: string;

declare const getPool: () => Promise<Pool__default>;

declare class InspectTool extends AbstractTool implements ITool {
    readonly key = "inspect";
    readonly name: string;
    readonly description: string;
    readonly icon: string;
    protected onActivate(): void;
    protected onDeactivate(): void;
    onCanvasClick(): void;
    onCanvasLeave(): void;
    onPointEnter(): void;
    onPointLeave(): void;
    onPointMove(): void;
    onPointDown(): void;
    onPointUp(): void;
    getLabelValue: (x: number, y: number, file: Instance) => string;
}

declare class EditTool extends AbstractTool implements ITool {
    readonly key = "edit";
    readonly name = "editanalysis";
    readonly description = "dragcornersofselectedanalysis";
    readonly icon = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg class=\"thermal-tool-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\">\n  <polygon points=\"34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03\" fill=\"currentcolor\"/>\n</svg>";
    onActivate(): void;
    protected onDeactivate(): void;
    onCanvasLeave(): void;
    onCanvasClick(): void;
    onPointEnter(point: AbstractPoint): void;
    onPointLeave(point: AbstractPoint): void;
    onPointMove(point: AbstractPoint, top: number, left: number): void;
    onPointDown(point: AbstractPoint): void;
    onPointUp(point: AbstractPoint): void;
    getLabelValue(x: number, y: number, file: Instance): string;
}

/** Tool for analysis addition */
declare abstract class AbstractAddTool extends AbstractTool {
}

declare class AddEllipsisTool extends AbstractAddTool implements ITool {
    readonly key: string;
    readonly name: string;
    readonly description: string;
    readonly icon: string;
    protected onActivate(): void;
    protected onDeactivate(): void;
    onCanvasLeave(): void;
    onCanvasClick(top: number, left: number, file: Instance): void;
    onPointDown(): void;
    onPointUp(point: AbstractPoint): void;
    onPointMove(point: AbstractPoint, top: number, left: number): void;
    onPointLeave(): void;
    onPointEnter(): void;
    getLabelValue: (x: number, y: number, file: Instance) => string;
}

declare class AddRectangleTool extends AbstractAddTool implements ITool {
    readonly key: string;
    readonly name: string;
    readonly description: string;
    readonly icon: string;
    protected onActivate(): void;
    protected onDeactivate(): void;
    onCanvasLeave(): void;
    onCanvasClick(x: number, y: number, file: Instance): void;
    onPointDown(): void;
    onPointUp(point: AbstractPoint): void;
    onPointMove(point: AbstractPoint, top: number, left: number): void;
    onPointLeave(): void;
    onPointEnter(): void;
    getLabelValue: (x: number, y: number, file: Instance) => string;
}

export { AbstractAddTool, AbstractAnalysis, AbstractAreaAnalysis, AbstractFileResult, AbstractTool, AddEllipsisTool, AddRectangleTool, type AnalysisDataStateValue, AnalysisGraph, type AvailableThermalPalettes, Batch, CallbacksManager, CornerPoint, DropinElementListener, EditTool, EllipsisAnalysis, GRAYSCALE, IRON, InspectTool, Instance, JET, type PaletteId, type ParsedTimelineFrame, type PlaybackSpeeds, PointAnalysis, RectangleAnalysis, type SlotNumber, type SlotUnion, type ThermalCursorPositionOrUndefined, ThermalFileFailure, ThermalFileReader, ThermalGroup, ThermalManager, type ThermalManagerOptions, type ThermalMinmaxOrUndefined, type ThermalPaletteType, ThermalPalettes, type ThermalRangeOrUndefined, ThermalRegistry, type ThermalRegistryOptions, type ThermalTool, TimeFormat, TimePeriod, TimeRound, availableAnalysisColors, getPool, playbackSpeed, supportedFileTypes, supportedFileTypesInputProperty };
