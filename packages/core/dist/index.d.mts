import * as Pool from 'workerpool/types/Pool';
import Pool__default from 'workerpool/types/Pool';
export { pool } from 'workerpool';

declare abstract class BaseStructureObject {
    readonly pool: Pool__default;
}

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

/** Interface to temporarily describe timeline drives during refactor */
interface ITimelineDrive {
    value: number;
    play(): void;
    pause(): void;
    stop(): void;
    setValueByPercent(percent: number): void;
    addListener(key: string, fn: PropertyListenerFn<number>): void;
    removeListener(key: string): void;
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
/** Stores the frames and the time pointer which is in the miliseconds @deprecated */
declare class TimelineDriveOld extends AbstractProperty<number, AbstractFile> implements ITimelineDrive {
    readonly parent: AbstractFile;
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
    constructor(parent: AbstractFile, initial: number);
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
    setValueByPercent(percentage: number): void;
    goToNextFrame(): void;
    static formatDuration(ms: number): string;
    protected timer?: ReturnType<typeof setTimeout>;
    play(): void;
    pause(): void;
    stop(): void;
}

/** Handle the entire exports of a file */
declare class ThermalFileExport {
    readonly file: AbstractFile;
    constructor(file: AbstractFile);
    canvasAsPng(): void;
    thermalDataAsCsv(fileNameSuffix?: string): void;
}

/**
 * @todo implement variants toggling
 * @todo implement activation properly!
 * @todo implement unmounting
 * @todo rename binding to mounting
 * @deprecated YES - we have a new variant!
 */
declare class ThermalFileInstance extends AbstractFile {
    protected readonly source: ThermalFileSource;
    readonly group: ThermalGroup;
    /** Optional visible URL */
    signature: string;
    get dataType(): number;
    unit: number;
    version: number;
    streamCount: number;
    fileDataType: number;
    frames: ILrcFrame[];
    getPixelsForHistogram(): number[];
    /**
     * Frames
     */
    timeline: TimelineDriveOld;
    constructor(source: ThermalFileSource, group: ThermalGroup);
    /** @deprecated */
    postInit(): this;
    protected formatId(thermalUrl: string): string;
    protected onSetPixels(value: number[]): void;
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
    readonly thermalUrl: string;
    readonly visibleUrl?: string | undefined;
    protected constructor(thermalUrl: string, visibleUrl?: string | undefined);
    static fromUrl(thermalUrl: string, visibleUrl?: string): FileRequest;
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
    protected processResponse(response: Promise<Response>): Promise<AbstractFileResult>;
    /**
     * Actions taken on the `AbstractFileResult` object
     * @todo because there are no side effects, this method might appear redundant
     */
    protected pocessTheService(result: AbstractFileResult): AbstractFileResult;
}

declare class FilesService {
    readonly manager: ThermalManager;
    private readonly pool;
    constructor(manager: ThermalManager);
    static isolatedInstance(registryName?: string): {
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
    loadFile(thermalUrl: string, visibleUrl?: string): Promise<AbstractFileResult>;
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
    readonly service: FilesService;
    /** Sources cache */
    protected _sourcesByUrl: {
        [index: string]: ThermalFileSource;
    };
    /** @deprecated */
    get sourcesByUrl(): {
        [index: string]: ThermalFileSource;
    };
    /** @deprecated */
    getSourcesArray(): ThermalFileSource[];
    /** @deprecated */
    getRegisteredUrls(): string[];
    /** @deprecated */
    registerSource(source: ThermalFileSource): ThermalFileSource;
    /** @deprecated */
    isUrlRegistered: (url: string) => boolean;
}

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
    protected recalculateHistogram(): Promise<void>;
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
type InstanceFetchCallback = (instance?: AbstractFile, errors?: string) => void;
type InstanceRemoveCallback$1 = () => void;
type InstanceRemoveRequest$1 = {
    url: string;
    callbacks: InstanceRemoveCallback$1[];
};
declare class InstancesState extends AbstractProperty<AbstractFile[], ThermalGroup> {
    protected _requestedRemovals: Map<string, InstanceRemoveRequest$1>;
    enqueueAdd(thermalUrl: string, visibleUrl?: string, callback?: InstanceFetchCallback): void;
    enqueueRemove(thermalUrl: string, callback?: InstanceRemoveCallback$1): void;
    cleanup(): Promise<void>;
    protected _map: Map<string, AbstractFile>;
    get map(): Map<string, AbstractFile>;
    protected validate(value: AbstractFile[]): AbstractFile[];
    /**
     * Whenever the instances change, recreate the index
     */
    protected afterSetEffect(value: AbstractFile[]): void;
    /**
     * Creation of of single instance
     * @deprecated Instances should not be created one by one, since every single action triggers the listeners
     */
    instantiateSource(source: ThermalFileSource): AbstractFile;
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
    forEveryInstance(fn: ((instance: AbstractFile) => void)): void;
}

interface IWithCursorValue extends IBaseProperty {
    cursorValue: CursorValueDrive;
}
declare class CursorValueDrive extends AbstractProperty<number | undefined, AbstractFile> {
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
    group: ThermalGroup;
}
/** Thermal group definition with all its properties */
interface IThermalGroup extends IThermalContainer, IWithMinmaxGroup, IWithInstances, IWithCursorPosition {
}
/** Thermal registry definition with all its properties */
interface IThermalRegistry extends IThermalContainer, IWithGroups, IWithOpacity, IWithLoading, IWithMinmaxRegistry, IWithRange, IWithPalette {
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

interface IMainThreadLoader {
    request(thermalUrl: string, visibleUrl?: string, callback?: ThermalFetcherCallbackType): void;
}

type ThermalFetcherCallbackType = (source?: ThermalFileSource, errors?: string) => void;
type ThermalFetcherRequest = {
    thermalUrl: string;
    visibleUrl?: string;
    callbacks: ThermalFetcherCallbackType[];
};
declare class ThermalFetcher implements IMainThreadLoader {
    readonly registry: ThermalRegistry;
    protected requests: Map<string, ThermalFetcherRequest>;
    get requestArray(): ThermalFetcherRequest[];
    protected timer?: ReturnType<typeof setTimeout>;
    constructor(registry: ThermalRegistry);
    request(thermalUrl: string, visibleUrl?: string, callback?: ThermalFetcherCallbackType): void;
    resolve(): Promise<(string | ThermalFileSource | undefined)[]>;
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
    /** Service */
    get service(): FilesService;
    /** Takes care of the entire loading */
    protected readonly loader: ThermalRegistryLoader;
    /** Groups are stored in an observable property */
    readonly groups: GroupsState;
    /** Iterator methods */
    forEveryGroup(fn: ((group: ThermalGroup) => void)): void;
    forEveryInstance(fn: (instance: AbstractFile) => void): void;
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
}
type ThermalStatistics = {
    from: number;
    to: number;
    percentage: number;
    count: number;
    height: number;
};

type PropertyListenersTypes = boolean | number | string | ThermalRangeOrUndefined | ThermalMinmaxOrUndefined | ThermalCursorPositionOrUndefined | ThermalGroup[] | ThermalFileInstance[] | ThermalStatistics[] | AbstractFile[];
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

declare abstract class AbstractLayer {
    protected readonly instance: AbstractFile;
    constructor(instance: AbstractFile);
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
    protected readonly pool: Pool;
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
    constructor(instance: AbstractFile);
    getLayerRoot(): HTMLElement;
    protected onDestroy(): void;
    /** Returns an array of 255 RGB colors */
    protected getPalette(): string[];
    draw(): Promise<void>;
    exportAsPng(): void;
}

/** Displays the cursor pointer and its value */
declare class ThermalCursorLayer extends AbstractLayer {
    protected layerRoot: HTMLDivElement;
    protected center: HTMLDivElement;
    protected axisX: HTMLDivElement;
    protected axisY: HTMLDivElement;
    protected label: HTMLDivElement;
    constructor(instance: AbstractFile);
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
    constructor(instance: AbstractFile);
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
    constructor(instance: AbstractFile, _url?: string | undefined);
    getLayerRoot(): HTMLElement;
    protected onDestroy(): void;
}

/** Define properties for a file */
interface IFileInstance extends IThermalInstance, ThermalFileInterface, BaseStructureObject {
    root: HTMLDivElement | null;
    canvasLayer: ThermalCanvasLayer;
    visibleLayer: VisibleLayer;
    cursorLayer: ThermalCursorLayer;
    listenerLayer: ThermalListenerLayer;
    timeline: ITimelineDrive;
    frames: ILrcFrame[];
    horizontalLimit: number;
    id: string;
    verticalLimit: number;
    duration: number;
    isHover: boolean;
    mountedBaseLayers: boolean;
}

/** Define methods for all files */
declare abstract class AbstractFile extends BaseStructureObject implements IFileInstance {
    readonly id: string;
    readonly horizontalLimit: number;
    readonly verticalLimit: number;
    readonly group: ThermalGroup;
    readonly url: string;
    readonly thermalUrl: string;
    readonly visibleUrl?: string;
    readonly fileName: string;
    readonly frameCount: number;
    frames: ILrcFrame[];
    signature: string;
    version: number;
    streamCount: number;
    fileDataType: number;
    unit: number;
    width: number;
    height: number;
    timestamp: number;
    duration: number;
    min: number;
    max: number;
    private _isHover;
    get isHover(): boolean;
    protected set isHover(value: boolean);
    root: HTMLDivElement | null;
    canvasLayer: ThermalCanvasLayer;
    visibleLayer: VisibleLayer;
    cursorLayer: ThermalCursorLayer;
    listenerLayer: ThermalListenerLayer;
    timeline: ITimelineDrive;
    cursorValue: CursorValueDrive;
    private _mounted;
    get mountedBaseLayers(): boolean;
    set mountedBaseLayers(value: boolean);
    private _pixels;
    get pixels(): number[];
    set pixels(value: number[]);
    abstract getPixelsForHistogram(): number[];
    constructor(group: ThermalGroup, thermalUrl: string, width: number, height: number, initialPixels: number[], timestamp: number, duration: number, min: number, max: number, frameCount: number, visibleUrl?: string);
    abstract postInit(): AbstractFile;
    protected abstract onSetPixels(value: number[]): void;
    protected abstract formatId(thermalUrl: string): string;
    /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
    protected attachToDom(container: HTMLDivElement): void;
    /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
    protected detachFromDom(): void;
    mountListener(): void;
    protected unmountListener(): void;
    mountToDom(container: HTMLDivElement): void;
    unmountFromDom(): void;
    draw(): void;
    recievePalette(palette: string | number): void;
    destroySelfAndBelow(): void;
    removeAllChildren(): void;
    recieveCursorPosition(position: ThermalCursorPositionOrUndefined): void;
    getTemperatureAtPoint(x: number, y: number): number;
    recieveRange(value: ThermalRangeOrUndefined): void;
    reset(): void;
    recieveOpacity(value: number): void;
    abstract exportAsPng(): void;
    abstract exportThermalDataAsSvg(): void;
    /** @deprecated */
    protected _onHover?: ((event: MouseEvent, target: AbstractFile) => void);
    /** @deprecated */
    setHoverHandler(handler?: ((event: MouseEvent, target: AbstractFile) => void)): void;
    /** @deprecated */
    setHoverCursor(value: CSSStyleDeclaration["cursor"]): void;
    protected _onClick?: ((event: MouseEvent, target: AbstractFile) => void);
    setClickHandler(handler?: ((event: MouseEvent, target: AbstractFile) => void) | undefined): void;
}

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
    deviceUrl: string;
    manufacturer: string;
    manufacturerUrl: string;
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
}

declare class FrameBuffer {
    protected readonly drive: TimelineDrive;
    /** @internal use accessors to get and set with side effects */
    protected _currentFrame: ParsedFileFrame;
    /** The current frame data @readonly */
    get currentFrame(): ParsedFileFrame;
    /** Upon every update of current frame, propagate current pixels to the instance */
    set currentFrame(frame: ParsedFileFrame);
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
    init(): Promise<{
        relativeTime: number;
        currentFrame: ParsedFileFrame;
        currentStep: ParsedTimelineFrame;
        buffer: ParsedTimelineFrame[];
        preloaded: boolean;
        hasChanged: boolean;
    }>;
    /**
     * Activate a step
     * - look for the buffer for the corresponding frame
     * - if there is a corresponding frame, apply it
     * - if there is none, fetch it
     * - if sequence, fetch buffer
     *
     * **THIS IS THE MAIN SETTER**
     */
    recieveStep(step: ParsedTimelineFrame): Promise<{
        relativeTime: number;
        currentFrame: ParsedFileFrame;
        currentStep: ParsedTimelineFrame;
        buffer: ParsedTimelineFrame[];
        preloaded: boolean;
        hasChanged: boolean;
    }>;
    /** Preload frame data to the buffer based on the provided step */
    protected preload(step: ParsedTimelineFrame): Promise<{
        relativeTime: number;
        currentFrame: ParsedFileFrame;
        currentStep: ParsedTimelineFrame;
        buffer: ParsedTimelineFrame[];
        preloaded: boolean;
        hasChanged: boolean;
    }>;
}

type FramesMap = Map<number, ParsedTimelineFrame>;
type ReTimelineFrameChangedEventListener = (frame: ParsedTimelineFrame) => void;
/** Stores the frames and the time pointer which is in the miliseconds */
declare class TimelineDrive extends AbstractProperty<number, AbstractFile> implements ITimelineDrive {
    readonly steps: ParsedFileBaseInfo["timeline"];
    readonly parent: Instance;
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
    protected _onChangeListeners: Map<string, ReTimelineFrameChangedEventListener>;
    readonly isSequence: boolean;
    protected _isPlayying: boolean;
    get isPlaying(): boolean;
    protected timer?: ReturnType<typeof setTimeout>;
    readonly buffer: FrameBuffer;
    constructor(parent: AbstractFile, initial: number, steps: ParsedFileBaseInfo["timeline"], initialFrameData: ParsedFileFrame);
    init(): void;
    protected afterSetEffect(value: number): void;
    protected validate(value: number): number;
    _validateRelativeTime(value: number): number;
    _validateIndex(value: number): number;
    _convertRelativeToAspect(relativeTimeInMs: number): number;
    _convertRelativeToPercent(relativeTimeInMs: number): number;
    _convertPercenttRelative(percent: number): number;
    /** Event listener to changement of the current frame.
     * - the current frame is not changed every time the value changes
     * - the current frame is changed only when the ms value points fo a new previous frame
     */
    addChangeListener(identificator: string, fn: ReTimelineFrameChangedEventListener): void;
    removeChangeListener(identificator: string): void;
    findPreviousRelative(relativeTimeInMs: number): ParsedTimelineFrame;
    findNextRelative(relativeTimeInMs: number): false | ParsedTimelineFrame;
    setRelativeTime(relativeTimeInMs: number): Promise<{
        relativeTime: number;
        currentFrame: ParsedFileFrame;
        currentStep: ParsedTimelineFrame;
        buffer: ParsedTimelineFrame[];
        preloaded: boolean;
        hasChanged: boolean;
    }>;
    setValueByPercent(percent: number): Promise<{
        relativeTime: number;
        currentFrame: ParsedFileFrame;
        currentStep: ParsedTimelineFrame;
        buffer: ParsedTimelineFrame[];
        preloaded: boolean;
        hasChanged: boolean;
    }>;
    protected createNextStepTimer(): void;
    play(): void;
    pause(): void;
    stop(): void;
}

/**
 * Stores the file's `ArrayBuffer` and provides all the data for instance
 * - this service is registered in FilesService
 * - the instances are retrieved using `FilesService.loadOneFile`
 */
declare class ThermalFileReader extends AbstractFileResult {
    readonly buffer: ArrayBuffer;
    readonly parser: IParserObject;
    /** For the purpose of testing we have a unique ID */
    readonly id: number;
    /** In-memory cache of the `baseInfo` request. This request might be expensive in larger files or in Vario Cam files. Because the return value is allways the same, there is no need to make the call repeatedly. */
    protected baseInfoCache?: ParsedFileBaseInfo;
    readonly fileName: string;
    private pool;
    constructor(buffer: ArrayBuffer, parser: IParserObject, thermalUrl: string, visibleUrl?: string);
    isSuccess(): boolean;
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
    createInstance(group: ThermalGroup): Promise<Instance>;
}

declare class Instance extends AbstractFile {
    readonly group: ThermalGroup;
    readonly service: ThermalFileReader;
    readonly width: number;
    readonly height: number;
    readonly timestamp: number;
    readonly frameCount: number;
    readonly duration: number;
    readonly frameInterval: number;
    readonly fps: number;
    readonly min: number;
    readonly max: number;
    readonly bytesize: number;
    readonly averageEmissivity: number;
    readonly averageReflectedKelvins: number;
    readonly firstFrame: ParsedFileFrame;
    readonly timelineData: ParsedFileBaseInfo["timeline"];
    timeline: TimelineDrive;
    exportAsPng(): void;
    exportThermalDataAsSvg(): void;
    protected constructor(group: ThermalGroup, service: ThermalFileReader, width: number, height: number, timestamp: number, frameCount: number, duration: number, frameInterval: number, initialPixels: number[], fps: number, min: number, max: number, bytesize: number, averageEmissivity: number, averageReflectedKelvins: number, firstFrame: ParsedFileFrame, timelineData: ParsedFileBaseInfo["timeline"]);
    postInit(): this;
    protected formatId(thermalUrl: string): string;
    protected onSetPixels(value: number[]): void;
    getPixelsForHistogram(): number[];
    static fromService(group: ThermalGroup, service: ThermalFileReader, baseInfo: ParsedFileBaseInfo, firstFrame: ParsedFileFrame): Instance;
}

type InstanceRemoveCallback = () => void;
type InstanceRemoveRequest = {
    url: string;
    callbacks: InstanceRemoveCallback[];
};
declare class FilesState extends AbstractProperty<Instance[], ThermalGroup> {
    protected _requestedRemovals: Map<string, InstanceRemoveRequest>;
    protected _map: Map<string, Instance>;
    get map(): Map<string, Instance>;
    protected validate(value: Instance[]): Instance[];
    /**
     * Whenever the instances change, recreate the index
     */
    protected afterSetEffect(value: Instance[]): void;
    addFile(file: Instance): Instance;
    /**
     * Removal
     */
    removeAllInstances(): void;
    /**
     * Iteration through all instances
     */
    forEveryInstance(fn: ((instance: AbstractFile) => void)): void;
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
    /** @deprecated */
    readonly instances: InstancesState;
    readonly files: FilesState;
    readonly cursorPosition: CursorPositionDrive;
    /** Iteration */
    forEveryInstance: (fn: ((instance: AbstractFile) => void)) => void;
    /**
     * Destruction
     */
    /** Remove all instances, reset the minmax */
    destroySelfAndBelow(): void;
    removeAllChildren(): void;
    reset(): void;
}

/** Properties that are common for both source and instance. @deprecated */
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
    createInstance(group: ThermalGroup): AbstractFile;
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

export { AbstractFile, type AvailableThermalPalettes, GRAYSCALE, IRON, Instance, type InstanceFetchCallback, JET, type PaletteId, type ThermalCursorPositionOrUndefined, ThermalFileFailure, ThermalFileInstance, ThermalFileReader, type ThermalFileRequest, ThermalFileSource, ThermalGroup, ThermalManager, type ThermalManagerOptions, type ThermalMinmaxOrUndefined, type ThermalPaletteType, ThermalPalettes, type ThermalRangeOrUndefined, ThermalRegistry, type ThermalRegistryOptions, TimeFormat, TimePeriod, TimeRound };
