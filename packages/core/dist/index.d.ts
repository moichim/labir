import Pool from 'workerpool/types/Pool';

/**
 * Celkově framy začínají na indexu 25 (tam je timestamp prvního snímku)
 * Počet byte v hlavičce: 53
 * Data začínají na: 54
 */
interface ILrcFrame {
    /**
     * Časová značka snímku
     * - int64
     * - absolute 25
     * - in frame 0
     */
    timestamp: number;
    /**
     * Teplotní rozsah snímku, minimum; jednotky jsou podle streamu
     * - float
     * - absolute 33
     * - in frame 8
     */
    min: number;
    /**
     * Teplotní rozsah snímku, maximum; jednotky jsou podle streamu
     * - float
     * - absolute 37
     * - relative 12
     */
    max: number;
    /**
     * Měřicí rozsah kamery, minimum [K]
     * - float
     * - absolute 41
     * - relative 16
     */
    modeMinInKelvin: number;
    /**
     * Měřicí rozsah kamery, maximum [K]
     * - float
     * - absolute 45
     * - relative 20
     */
    modeMaxInKelvin: number;
    /**
     * Emisivita [0-1]
     * - float
     * - absolute 49
     * - relative 24
     */
    emissivity: number;
    /**
     * Odražená teplota [K]
     * - float
     * - absolute 53
     * - relative 28
     */
    reflectedTemperaatureInKelvin: number;
    /**
     * Vzdálenost [m]
     * - float
     * - absolute 57
     * - relative 32
     */
    distance: number;
    /**
     * Teplota atmosféry [K]
     * - float
     * - absolute 61
     * - relative 36
     */
    atmosphereTemperatureInKelvin: number;
    /**
     * Rel. vlhkost [0-1]
     * - float
     * - absolute 65
     * - relative 40
     */
    relativeHumidity: number;
    /**
     * Tau (propustnost atmosféry) [0-1]
     * - float
     * - absolute 69
     * - relative 44
     */
    tau: number;
    /**
     * Teplota okénka [K]
     * - float
     * - absolute 73
     * - relative 48
     */
    windowTemperature: number;
    /**
     * Propustnost okénka [0-1]
     * - float
     * - absolute 77
     * - relative 52
     */
    windowTransmissivity: number;
    /**
     * Je tau nastaveno? Typicky 0, není nastaveno, počítá se z parametrů atmosféry.
     * - uint8
     * - absolute 81
     * - relative 53
     */
    isTauSet: number;
    /**
     * Teplotní data
     * - float[]
     * - absolute 82
     * - relative 54
     * - délka podle data typu streamu
     */
    pixels: number[];
}

declare const JET: string[];
declare const IRON: string[];
declare const GRAYSCALE: string[];
declare const ThermalPalettes: {
    [index: string]: ThermalPaletteType;
};
type AvailableThermalPalettes = "iron" | "jet" | "grayscale";
type ThermalPaletteType = {
    pixels: string[];
    name: string;
    gradient: string;
};

type PaletteId = keyof typeof ThermalPalettes;
interface IWithPalette extends IBaseProperty {
    palette: PaletteDrive;
}
declare class PaletteDrive extends AbstractProperty<PaletteId, ThermalManager> {
    get availablePalettes(): {
        [index: string]: ThermalPaletteType;
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

interface IWithGroups extends IBaseProperty {
    groups: GroupsState;
}
/** Handles group creation and removal */
declare class GroupsState extends AbstractProperty<ThermalGroup[], ThermalRegistry> {
    protected _map: Map<string, ThermalGroup>;
    get map(): Map<string, ThermalGroup>;
    protected validate(value: ThermalGroup[]): ThermalGroup[];
    protected afterSetEffect(value: ThermalGroup[]): void;
    addOrGetGroup(groupId: string, name?: string, description?: string): ThermalGroup;
    removeGroup(groupId: string): void;
    removeAllGroups(): void;
}

/** Handles the histogram creation and subscription.
 * - should be used only in registries
 */
declare class HistogramState extends AbstractProperty<ThermalStatistics[], ThermalRegistry> {
    protected _resolution: number;
    get resolution(): number;
    /** Map of temperature => countOfPixels in the scaled down resolution */
    protected buffer: Map<number, number>;
    /** Total countOfPixels in every image */
    protected bufferPixelsCount: number;
    /**  */
    protected _bufferResolution: number;
    set bufferResolution(value: number);
    get bufferResolution(): number;
    /** Set the historgam resolution
     * - does not recalculate the value!
     * - to recalculate value, call `recalculateWithCurrentSetting`
     *
     * @notice Higher the number, lower the resolution.
    */
    setResolution(value: number): void;
    /** If incorrect resolution is being set, set empty array @todo there may be an error in +1*/
    protected validate(value: ThermalStatistics[]): ThermalStatistics[];
    protected afterSetEffect(): void;
    /** Recalculates the value using all current instances and with che current resolution */
    recalculateWithCurrentSetting(): ThermalStatistics[];
    /**
     * Recalculate the histogram buffer using web workers.
     * This is an async operation using `workerpool`
     */
    refreshBufferFromCurrentPixels(): void;
    protected recalculateHistogram(): void;
    /** Get the pixels from images, calculate the 1000 and store that in the buffer. @deprecated */
    _getHistorgramFromAllGroups(): ThermalStatistics[];
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

interface IWithMinmaxRegistry extends IBaseProperty {
    minmax: MinmaxRegistryProperty;
}
declare class MinmaxRegistryProperty extends AbstractMinmaxProperty<ThermalRegistry> {
    protected validate(value: ThermalMinmaxOrUndefined): ThermalMinmaxOrUndefined;
    protected afterSetEffect(): void;
    recalculateFromGroups(): ThermalMinmaxOrUndefined;
    protected _getMinmaxFromAllGroups(groups: ThermalGroup[]): ThermalMinmaxOrUndefined;
}

interface IWithInstances extends IBaseProperty {
    instances: InstancesState;
}
type InstanceFetchCallback = (instance?: ThermalFileInstance, errors?: string) => void;
type InstanceRemoveCallback = () => void;
type InstanceRemoveRequest = {
    url: string;
    callbacks: InstanceRemoveCallback[];
};
declare class InstancesState extends AbstractProperty<ThermalFileInstance[], ThermalGroup> {
    protected _requestedRemovals: Map<string, InstanceRemoveRequest>;
    enqueueAdd(thermalUrl: string, visibleUrl?: string, callback?: InstanceFetchCallback): void;
    enqueueRemove(thermalUrl: string, callback?: InstanceRemoveCallback): void;
    cleanup(): Promise<void>;
    protected _map: Map<string, ThermalFileInstance>;
    get map(): Map<string, ThermalFileInstance>;
    protected validate(value: ThermalFileInstance[]): ThermalFileInstance[];
    /**
     * Whenever the instances change, recreate the index
     */
    protected afterSetEffect(value: ThermalFileInstance[]): void;
    /**
     * Creation of of single instance
     * @deprecated Instances should not be created one by one, since every single action triggers the listeners
     */
    instantiateSource(source: ThermalFileSource): ThermalFileInstance;
    /**
     * Creation of instances at once
     * - triggers listeners only once
     */
    instantiateSources(sources: ThermalFileSource[]): void;
    /**
     * Removal
     */
    removeAllInstances(): void;
    /**
     * Iteration through all instances
     */
    forEveryInstance(fn: ((instance: ThermalFileInstance) => void)): void;
}

interface IWithCursorValue extends IBaseProperty {
    cursorValue: CursorValueDrive;
}
declare class CursorValueDrive extends AbstractProperty<number | undefined, ThermalFileInstance> {
    protected validate(value: number | undefined): number | undefined;
    protected afterSetEffect(): void;
    recalculateFromCursor(position: ThermalCursorPositionOrUndefined): void;
    protected _getValueAtCoordinate(x: number | undefined, y: number | undefined): number | undefined;
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
interface IThermalInstance extends IThermalObjectBase, IWithCursorValue {
}
/** Thermal group definition with all its properties */
interface IThermalGroup extends IThermalContainer, IWithMinmaxGroup, IWithInstances, IWithCursorPosition {
}
/** Thermal registry definition with all its properties */
interface IThermalRegistry extends IThermalContainer, IWithGroups, IWithOpacity, IWithLoading, IWithMinmaxRegistry, IWithRange, IWithPalette {
}

declare abstract class BaseStructureObject {
    private _pool?;
    /**
     * Lazy loaded instance of web worker pool.
     * @see https://github.com/josdejong/workerpool
    */
    get pool(): Pool;
}

type ThermalFetcherCallbackType = (source?: ThermalFileSource, errors?: string) => void;
type ThermalFetcherRequest = {
    thermalUrl: string;
    visibleUrl?: string;
    callbacks: ThermalFetcherCallbackType[];
};
declare class ThermalFetcher {
    readonly registry: ThermalRegistry;
    protected requests: Map<string, ThermalFetcherRequest>;
    get requestArray(): ThermalFetcherRequest[];
    protected timer?: ReturnType<typeof setTimeout>;
    constructor(registry: ThermalRegistry);
    request(thermalUrl: string, visibleUrl?: string, callback?: ThermalFetcherCallbackType): void;
    resolve(): Promise<(string | ThermalFileSource | undefined)[]>;
}

type ThermalFileRequest = {
    thermalUrl: string;
    visibleUrl?: string;
};
/**
 * A request for a thermal file is created and stored by a `ThermalGroup`
 *
 * - The request is created at first and triggered later.
 * - All the group's requests need to be triggered at once
 *
 * When triggered, the request looks for the file in the cache. If the file is not cached yet, the request tries to fetch it from the URL.
 *
* @todo Stores the entire instance of the group. Should store only the ID, because the group instances may change.
 */
declare class ThermalRequest extends EventTarget {
    readonly group: ThermalGroup;
    readonly url: string;
    readonly visibleUrl?: string | undefined;
    protected constructor(group: ThermalGroup, url: string, visibleUrl?: string | undefined);
    static single(group: ThermalGroup, thermalUrl: string, visibleUrl?: string): ThermalRequest;
    static multiple(group: ThermalGroup, requests: ThermalFileRequest[]): ThermalRequest[];
    fetch(): Promise<null | {
        file: ThermalFileSource;
        request: ThermalRequest;
    }>;
}

/**
 * Member of ThermalRegistry.
 *
 * - takes care of loading files.
 */
declare class ThermalRegistryLoader {
    readonly registry: ThermalRegistry;
    constructor(registry: ThermalRegistry);
    /** Buffer of all pending requests */
    protected _requests: ThermalRequest[];
    get requests(): ThermalRequest[];
    /** Loading state is stored in the registry */
    get loading(): boolean;
    /** Request a single file. To fetch it, call ``resolveQuery` */
    requestFile(group: ThermalGroup, thermalUrl: string, visibleUrl?: string): void;
    /** Request multiple files. To fetch them, call ``resolveQuery` */
    requestFiles(group: ThermalGroup, requests: ThermalFileRequest[]): void;
    /** @todo If there is an error, it is here. In the instancing, it seems that deleted groups remain and instances are binded to old groups. */
    resolveQuery(): Promise<ThermalGroup[]>;
}

type ThermalRegistryOptions = {
    histogramResolution?: number;
};
/**
 * The global thermal registry
 * @todo implementing EventTarget
 */
declare class ThermalRegistry extends BaseStructureObject implements IThermalRegistry {
    readonly id: string;
    readonly manager: ThermalManager;
    readonly hash: number;
    constructor(id: string, manager: ThermalManager, options?: ThermalRegistryOptions);
    /** Takes care of the entire loading */
    protected readonly loader: ThermalRegistryLoader;
    /** Groups are stored in an observable property */
    readonly groups: GroupsState;
    /** Iterator methods */
    forEveryGroup(fn: ((group: ThermalGroup) => void)): void;
    forEveryInstance(fn: (instance: ThermalFileInstance) => void): void;
    loadFiles(files: {
        [index: string]: ThermalFileRequest[];
    }): Promise<void>;
    /** Load the registry with only one file. */
    loadOneFile(file: ThermalFileRequest, groupId: string): Promise<void>;
    /** Completely flush the entire registry and process evyrything from the files that are being dropped here. */
    processDroppedFiles(files: File[], groupId: string): Promise<void>;
    readonly fetcher: ThermalFetcher;
    /** Register a single file request */
    enqueueFile(groupId: string, thermalUrl: string, visibleUrl?: string): void;
    loadQuery(): Promise<void>;
    /**
     * Actions to take after the registry is loaded
     * - recalculate the minmax of groups
     * - recalculate minmax of registry
     * - impose new minmax as new range
     * - recalculate the histogram
    */
    postLoadedProcessing(): void;
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
}
type ThermalStatistics = {
    from: number;
    to: number;
    percentage: number;
    count: number;
    height: number;
};

type PropertyListenersTypes = boolean | number | string | ThermalRangeOrUndefined | ThermalMinmaxOrUndefined | ThermalCursorPositionOrUndefined | ThermalGroup[] | ThermalFileInstance[] | ThermalStatistics[];
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

type FrameType = ILrcFrame & {
    /** Index of the frame within the sequence */
    index: number;
    /** Milisecondes since start of the sequence */
    ms: number;
};
type Frames = Array<FrameType>;
type FramesByTimestamp = Map<number, FrameType>;
type FramesByMs = Map<number, FrameType>;
type FramesByIndex = Map<number, FrameType>;
type TimelineFrameChangedEventListener = (frame: FrameType) => void;
/** Stores the frames and the time pointer which is in the miliseconds */
declare class TimelineDrive extends AbstractProperty<number, ThermalFileInstance> {
    readonly parent: ThermalFileInstance;
    protected readonly frames: Frames;
    get duration(): number;
    get frameCount(): number;
    readonly framesByTimestamp: FramesByTimestamp;
    readonly framesByMs: FramesByMs;
    readonly framesByIndex: FramesByIndex;
    readonly localTimeline: number[];
    protected _currentFrame: FrameType;
    protected set currentFrame(frame: FrameType);
    get currentFrame(): FrameType;
    get nextFrame(): FrameType | undefined;
    get nextFrameTimeoutDuration(): number | undefined;
    protected _onChangeListeners: Map<string, TimelineFrameChangedEventListener>;
    /** Event listener to changement of the current frame.
     * - the current frame is not changed every time the value changes
     * - the current frame is changed only when the ms value points fo a new previous frame
     */
    addChangeListener(identificator: string, fn: TimelineFrameChangedEventListener): void;
    removeChangeListener(identificator: string): void;
    constructor(parent: ThermalFileInstance, initial: number);
    /**
     * Get the next frame to a given MS
     * @todo improve the performance
     * @internal
     */
    getNextFrameToMs(ms: number): FrameType | undefined;
    /**
     * Get the previous frame to a given MS
     * @todo improve performance
     * @internal
     */
    getPreviousFrameToMs(ms: number): FrameType | undefined;
    /** Check if the value is within the duration */
    protected validate(value: number): number;
    /** Any time the value is set, check if there is a frame and eventually setit */
    protected afterSetEffect(value: number): void;
    setMs(ms: number): void;
    setPercentage(percentage: number): void;
    goToNextFrame(): void;
    static formatDuration(ms: number): string;
    protected timer?: ReturnType<typeof setTimeout>;
    play(): void;
    pause(): void;
    stop(): void;
}

/** Handle the entire exports of a file */
declare class ThermalFileExport {
    readonly file: ThermalFileInstance;
    constructor(file: ThermalFileInstance);
    canvasAsPng(): void;
    thermalDataAsCsv(fileNameSuffix?: string): void;
}

declare abstract class AbstractLayer {
    protected readonly instance: ThermalFileInstance;
    constructor(instance: ThermalFileInstance);
    abstract getLayerRoot(): HTMLElement;
    protected _mounted: boolean;
    get mounted(): boolean;
    mount(): void;
    unmount(): void;
    destroy(): void;
    protected abstract onDestroy(): void;
}

/** Contains the visible image. Needs to be placed on the bottom. */
declare class VisibleLayer extends AbstractLayer {
    _url?: string | undefined;
    protected container: HTMLDivElement;
    protected image?: HTMLImageElement;
    get url(): string | undefined;
    set url(value: string | undefined);
    get exists(): boolean;
    constructor(instance: ThermalFileInstance, _url?: string | undefined);
    getLayerRoot(): HTMLElement;
    protected onDestroy(): void;
}

/** Displays the canvas and renders it */
declare class ThermalCanvasLayer extends AbstractLayer {
    protected container: HTMLDivElement;
    protected canvas: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;
    protected get width(): number;
    protected get height(): number;
    protected get pixels(): number[];
    protected get from(): number;
    protected get to(): number;
    protected _opacity: number;
    get opacity(): number;
    set opacity(value: number);
    constructor(instance: ThermalFileInstance);
    getLayerRoot(): HTMLElement;
    protected onDestroy(): void;
    /** Returns an array of 255 RGB colors */
    protected getPalette(): string[];
    draw(): void;
    exportAsPng(): void;
}

/** Displays the cursor pointer and its value */
declare class ThermalCursorLayer extends AbstractLayer {
    protected layerRoot: HTMLDivElement;
    protected center: HTMLDivElement;
    protected axisX: HTMLDivElement;
    protected axisY: HTMLDivElement;
    protected label: HTMLDivElement;
    constructor(instance: ThermalFileInstance);
    protected _show: boolean;
    get show(): boolean;
    set show(value: boolean);
    protected _hover: boolean;
    get hover(): boolean;
    set hover(value: boolean);
    setCursor(x: number, y: number, value: number): void;
    setValue(value?: number): void;
    resetCursor(): void;
    protected px(number: number): string;
    getLayerRoot(): HTMLDivElement;
    protected onDestroy(): void;
}

/** Listens for the mouse events. Needs to be placed on top. */
declare class ThermalListenerLayer extends AbstractLayer {
    protected container: HTMLDivElement;
    constructor(instance: ThermalFileInstance);
    getLayerRoot(): HTMLElement;
    protected onDestroy(): void;
}

/**
 * @todo implement variants toggling
 * @todo implement activation properly!
 * @todo implement unmounting
 * @todo rename binding to mounting
 */
declare class ThermalFileInstance extends BaseStructureObject implements IThermalInstance, ThermalFileInterface {
    protected readonly source: ThermalFileSource;
    readonly group: ThermalGroup;
    /** Url of the thermal file source */
    get url(): string;
    /** Filename of the thermal file */
    get fileName(): string;
    /** Optional visible URL */
    get visibleUrl(): string | undefined;
    get signature(): string;
    get dataType(): number;
    get unit(): number;
    get width(): number;
    get height(): number;
    get timestamp(): number;
    get version(): number;
    get streamCount(): number;
    get fileDataType(): number;
    get frameCount(): number;
    get frames(): ILrcFrame[];
    get duration(): number;
    get min(): number;
    get max(): number;
    get pixelsForHistogram(): number[];
    protected _pixels: number[];
    get pixels(): number[];
    set pixels(pixels: number[]);
    readonly id: string;
    protected readonly horizontalLimit: number;
    protected readonly verticalLimit: number;
    constructor(source: ThermalFileSource, group: ThermalGroup);
    destroySelfAndBelow(): void;
    removeAllChildren(): void;
    reset(): void;
    root: HTMLDivElement | null;
    readonly canvasLayer: ThermalCanvasLayer;
    readonly visibleLayer: VisibleLayer;
    readonly cursorLayer: ThermalCursorLayer;
    readonly listenerLayer: ThermalListenerLayer;
    /**
     * Dom bindings
     */
    protected _mounted: boolean;
    get mountedBaseLayers(): boolean;
    protected set mountedBaseLayers(value: boolean);
    /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
    protected attachToDom(container: HTMLDivElement): void;
    protected detachFromDom(): void;
    /**
     * Load listener layer and activate all listeners.
     * Should be called as a last mount layer.
     * @todo refactor this with variants!
     */
    protected mountListener(): void;
    protected unmountListener(): void;
    mountToDom(container: HTMLDivElement): void;
    unmountFromDom(): void;
    /**
     * Onmousemove interactions
     */
    protected _onHover?: ((event: MouseEvent, target: ThermalFileInstance) => void);
    setHoverHandler(handler?: ((event: MouseEvent, target: ThermalFileInstance) => void)): void;
    setHoverCursor(value: CSSStyleDeclaration["cursor"]): void;
    /**
     * Onclick interactions
     */
    protected _onClick?: ((event: MouseEvent, target: ThermalFileInstance) => void);
    setClickHandler(handler?: ((event: MouseEvent, target: ThermalFileInstance) => void) | undefined): void;
    /**
     * Drawing
     */
    draw(): void;
    /** Recieve a palette setting */
    recievePalette(palette: string | number): void;
    /**
     * CursorValue & hover state
    */
    readonly cursorValue: CursorValueDrive;
    protected _isHover: boolean;
    get isHover(): boolean;
    protected set isHover(value: boolean);
    recieveCursorPosition(position: ThermalCursorPositionOrUndefined): void;
    getTemperatureAtPoint(x: number, y: number): number;
    /**
     * Range
     */
    /** Recieve the range from the registry and redraw */
    recieveRange(value: ThermalRangeOrUndefined): void;
    /**
     * Opacity
     */
    /** Recieve the opacity from the registry and project it to the canvas layer */
    recieveOpacity(value: number): void;
    get unitHuman(): "none" | "intensity" | "°C" | "Kelvin" | "unit not specified";
    get dataTypeHuman(): "Float16" | "Float32" | "Int16" | "error parsing data type";
    /**
     * Exports
     */
    protected _export?: ThermalFileExport;
    /** Lazy-loaded `ThermalFileExport` object */
    get export(): ThermalFileExport;
    /**
     * Export the current canvas state as PNG
     * @deprecated call this.export directly
    */
    exportAsPng(): void;
    /**
     * Export thermal parameters as CSV table
     * @deprecated call this.export directly
    */
    exportThermalDataAsSvg(): void;
    /**
     * Frames
     */
    readonly timeline: TimelineDrive;
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
    constructor(registry: ThermalRegistry, id: string, name?: string | undefined, description?: string | undefined);
    readonly minmax: MinmaxGroupProperty;
    readonly instances: InstancesState;
    readonly cursorPosition: CursorPositionDrive;
    /** Iteration */
    forEveryInstance: (fn: ((instance: ThermalFileInstance) => void)) => void;
    /**
     * Destruction
     */
    /** Remove all instances, reset the minmax */
    destroySelfAndBelow(): void;
    removeAllChildren(): void;
    reset(): void;
}

/** Properties that are common for both source and instance. */
interface ThermalFileInterface {
    /** Short filenam of the thermal file */
    fileName: string;
    /** Full URL of the thermal file (is used as key for caching) */
    url: string;
    /** Optional URL to a visible file */
    visibleUrl?: string;
    /** @deprecated LRC only property - should be moved to metadata */
    signature: string;
    /** @deprecated LRC only property - should be moved to metadata */
    version: number;
    /** @deprecated LRC only property - should be moved to metadata */
    streamCount: number;
    /** @deprecated LRC only property - should be moved to metadata */
    fileDataType: number;
    /** @deprecated LRC only property - should be moved to metadata */
    unit: number;
    /** The timestamp belonging to the entire frame */
    timestamp: number;
    /** Width of the image */
    width: number;
    /** Height of the image */
    height: number;
    /** The current pixels state */
    pixels: number[];
    /** Minimal temperature of the entire file */
    min: number;
    /** Minimal temperature of the entire file */
    max: number;
    frameCount: number;
}
/**
 * Stores information about a loaded & parsed thermal file
 *
 * - loads the file
 * - can create `ThermalFileInstance`
 * - once loaded, the `ThermalFileSource` is cached in `ThermalRegistry.sourcesByUrl`
 *
 * If a file is cached. The cache is organised by files' URLS. Once a URL is already cached, the existing source us used instead of refetching the file again.
 *
 * The processing of the file is executed by `Thermalloader`, resp. by parser classes.
 */
declare class ThermalFileSource extends BaseStructureObject implements ThermalFileInterface {
    readonly url: string;
    readonly signature: string;
    readonly version: number;
    readonly streamCount: number;
    readonly fileDataType: number;
    readonly unit: number;
    readonly width: number;
    readonly height: number;
    readonly timestamp: number;
    readonly pixels: number[];
    readonly min: number;
    readonly max: number;
    readonly frameCount: number;
    readonly frames: ILrcFrame[];
    readonly visibleUrl?: string | undefined;
    readonly fileName: string;
    readonly pixelsForHistogram: number[];
    readonly duration: number;
    constructor(url: string, signature: string, version: number, streamCount: number, fileDataType: number, unit: number, width: number, height: number, timestamp: number, pixels: number[], min: number, max: number, frameCount: number, frames: ILrcFrame[], visibleUrl?: string | undefined);
    static fromUrl(thermalUrl: string, visibleUrl?: string): Promise<ThermalFileSource | null>;
    static fromUrlWithErrors(thermalUrl: string, visibleUrl?: string): Promise<ThermalFileSource | null>;
    createInstance(group: ThermalGroup): ThermalFileInstance;
}

type ThermalManagerOptions = {
    palette?: AvailableThermalPalettes;
};
declare class ThermalManager extends BaseStructureObject {
    readonly id: number;
    constructor(options?: ThermalManagerOptions);
    readonly registries: {
        [index: string]: ThermalRegistry;
    };
    forEveryRegistry(fn: ((registry: ThermalRegistry) => void)): void;
    addOrGetRegistry(id: string, options?: ThermalRegistryOptions): ThermalRegistry;
    removeRegistry(id: string): void;
    /** The palette is stored absolutely globally */
    /**
     * Palette
     */
    readonly palette: PaletteDrive;
    /** Sources cache */
    protected _sourcesByUrl: {
        [index: string]: ThermalFileSource;
    };
    get sourcesByUrl(): {
        [index: string]: ThermalFileSource;
    };
    getSourcesArray(): ThermalFileSource[];
    getRegisteredUrls(): string[];
    registerSource(source: ThermalFileSource): ThermalFileSource;
    isUrlRegistered: (url: string) => boolean;
}

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

export { type AvailableThermalPalettes, GRAYSCALE, IRON, type InstanceFetchCallback, JET, type PaletteId, type ThermalCursorPositionOrUndefined, ThermalFileInstance, type ThermalFileRequest, ThermalFileSource, ThermalGroup, ThermalManager, type ThermalManagerOptions, type ThermalMinmaxOrUndefined, type ThermalPaletteType, ThermalPalettes, type ThermalRangeOrUndefined, ThermalRegistry, type ThermalRegistryOptions, TimeFormat, TimePeriod, TimeRound };
