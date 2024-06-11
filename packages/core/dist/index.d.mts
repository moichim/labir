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
declare class InstancesState extends AbstractProperty<ThermalFileInstance[], ThermalGroup> {
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
declare class ThermalRegistry implements IThermalRegistry {
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
    /** Actions to take after the registry is loaded */
    protected postLoadedProcessing(): void;
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
declare class ThermalFileInstance extends EventTarget implements IThermalInstance {
    protected readonly source: ThermalFileSource;
    readonly group: ThermalGroup;
    get url(): string;
    get signature(): string;
    get unit(): number;
    get width(): number;
    get height(): number;
    get timestamp(): number;
    get pixels(): number[];
    get min(): number;
    get max(): number;
    get visibleUrl(): string | undefined;
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
}

/**
 * Group of thermal images
 */
declare class ThermalGroup implements IThermalGroup {
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

interface ThermalFileSourceInterface {
    url: string;
    signature: string;
    version: number;
    streamCount: number;
    fileDataType: number;
    unit: number;
    width: number;
    height: number;
    timestamp: number;
    pixels: number[];
    min: number;
    max: number;
    visibleUrl?: string;
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
declare class ThermalFileSource extends EventTarget implements ThermalFileSourceInterface {
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
    readonly visibleUrl?: string | undefined;
    constructor(url: string, signature: string, version: number, streamCount: number, fileDataType: number, unit: number, width: number, height: number, timestamp: number, pixels: number[], min: number, max: number, visibleUrl?: string | undefined);
    static fromUrl(thermalUrl: string, visibleUrl?: string): Promise<ThermalFileSource | null>;
    serialize(): string;
    static fromStorage(stored: string): ThermalFileSource;
    createInstance(group: ThermalGroup): ThermalFileInstance;
}

type ThermalManagerOptions = {
    palette?: AvailableThermalPalettes;
};
declare class ThermalManager extends EventTarget {
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

export { GRAYSCALE, IRON, JET, type PaletteId, type ThermalCursorPositionOrUndefined, ThermalFileInstance, type ThermalFileRequest, ThermalFileSource, ThermalGroup, ThermalManager, type ThermalManagerOptions, type ThermalMinmaxOrUndefined, type ThermalPaletteType, ThermalPalettes, type ThermalRangeOrUndefined, ThermalRegistry, type ThermalRegistryOptions, TimeFormat, TimePeriod, TimeRound };
