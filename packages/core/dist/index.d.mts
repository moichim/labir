import * as Pool from 'workerpool/types/Pool';
import Pool__default from 'workerpool/types/Pool';

declare abstract class BaseStructureObject {
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
    protected processResponse(response: Promise<Response>): Promise<AbstractFileResult>;
    /**
     * Actions taken on the `AbstractFileResult` object
     * @todo because there are no side effects, this method might appear redundant
     */
    protected pocessTheService(result: AbstractFileResult): AbstractFileResult;
}

/**
 * Manage callbacks on optional property values
 */
declare class CallbacksManager<CallbackType extends (...args: any[]) => any> extends Map<string, CallbackType> {
    /** @deprecated use set method instead */
    add(key: string, callback: CallbackType): void;
    call(...args: Parameters<CallbackType>): void;
}

/** Turn any element into a dropzone! */
declare class DropinElementListener {
    readonly service: FilesService;
    readonly element: HTMLElement;
    protected _hover: boolean;
    get hover(): boolean;
    readonly onMouseEnter: CallbacksManager<() => void>;
    readonly onMouseLeave: CallbacksManager<() => void>;
    readonly onDrop: CallbacksManager<(results: AbstractFileResult[]) => void>;
    readonly onProcessingEnd: CallbacksManager<() => void>;
    /** An invissible input element */
    input?: HTMLInputElement;
    protected hydrated: boolean;
    protected bindedEnterListener: DropinElementListener["handleEnter"];
    protected bindedLeaveListener: DropinElementListener["handleLeave"];
    protected bindedDropListener: DropinElementListener["handleDrop"];
    protected bindedInputChangeListener: DropinElementListener["handleInputChange"];
    protected bindedDragoverListener: DropinElementListener["handleDragover"];
    protected bindedClickListener: DropinElementListener["handleClick"];
    protected constructor(service: FilesService, element: HTMLElement);
    static listenOnElement(service: FilesService, element: HTMLElement): DropinElementListener;
    /** Bind all event listeners to the provided element */
    hydrate(): void;
    /** Remove all event listeners from the element */
    dehydrate(): void;
    handleClick(event: PointerEvent): void;
    handleDragover(event: DragEvent): void;
    handleDrop(event: DragEvent): Promise<AbstractFileResult[]>;
    handleInputChange(event: Event): Promise<void>;
    handleEnter(): void;
    handleLeave(): void;
    /** Build the internal input */
    protected getInput(): HTMLInputElement;
    openFileDialog(): void;
}

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
    handleDropzone(element: HTMLElement): DropinElementListener;
    /** Load a file from URL, eventually using already cached result */
    loadFile(thermalUrl: string, visibleUrl?: string): Promise<AbstractFileResult>;
}

/** Controls image smoothing */
declare class SmoothDrive extends AbstractProperty<boolean, ThermalManager> {
    protected validate(value: boolean): boolean;
    protected afterSetEffect(value: boolean): void;
    setSmooth(value: boolean): void;
}

/** Controls image smoothing */
declare class GraphSmoothDrive extends AbstractProperty<boolean, ThermalManager> {
    protected validate(value: boolean): boolean;
    protected afterSetEffect(): void;
    setGraphSmooth(value: boolean): void;
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
    readonly pool: Pool__default;
    constructor(pool?: Pool__default, options?: ThermalManagerOptions);
    forEveryRegistry(fn: ((registry: ThermalRegistry) => void)): void;
    addOrGetRegistry(id: string, options?: ThermalRegistryOptions): ThermalRegistry;
    removeRegistry(id: string): void;
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

/** A stupid object containing only requested URLS. Does not perform any further logic. */
type ThermalFileRequest = {
    thermalUrl: string;
    visibleUrl?: string;
};

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
    protected fixedRange: ThermalRangeOrUndefined;
    setFixedRange(value: ThermalRangeOrUndefined): void;
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
    /** Map of temperature => countOfPixels in the scaled down resolution @deprecated */
    protected buffer: Map<number, number>;
    /** Total countOfPixels in every image @deprecated */
    protected bufferPixelsCount: number;
    /** @deprecated */
    protected _bufferResolution: number;
    set bufferResolution(value: number);
    get bufferResolution(): number;
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
    /** Recalculates the value using all current instances and with che current resolution @deprecated should not recalculate the histogram on the fly*/
    recalculateWithCurrentSetting(): ThermalStatistics[];
    /**
     * Recalculate the histogram buffer using web workers.
     * This is an async operation using `workerpool`
     */
    recalculateHistogramBufferInWorker(): void;
    protected recalculateHistogram(): Promise<void>;
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

interface IWithFiles extends IBaseProperty {
    files: FilesState;
}
declare class FilesState extends AbstractProperty<Instance[], ThermalGroup> {
    protected _map: Map<string, Instance>;
    get map(): Map<string, Instance>;
    protected validate(value: Instance[]): Instance[];
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
    constructor(parent: Instance, initial: number, steps: ParsedFileBaseInfo["timeline"], initialFrameData: ParsedFileFrame);
    init(): void;
    protected afterSetEffect(value: number): void;
    protected validate(value: number): number;
    _validateRelativeTime(value: number): number;
    _validateIndex(value: number): number;
    _convertRelativeToAspect(relativeTimeInMs: number): number;
    _convertRelativeToPercent(relativeTimeInMs: number): number;
    _convertPercenttRelative(percent: number): number;
    formatDuration(ms: number): string;
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
    protected toSerialized(): string;
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
    protected toSerialized(): string;
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
declare const availableAnalysisColors: string[];
declare class AnalysisLayersStorage extends Map<string, AbstractAnalysis> {
    readonly drive: AnalysisDrive;
    /** Array of all layers ordered from oldest to the newest */
    protected layers: Array<AbstractAnalysis>;
    /** Fired whenever an analysis is added */
    readonly onAdd: CallbacksManager<AnalysisAddedCallback>;
    /** Fired whenever an analysis is removed */
    readonly onRemove: CallbacksManager<AnalysisRemovedCallback>;
    /** Fired whenever the selection list changes */
    readonly onSelectionChange: CallbacksManager<SelectionChangeEvent>;
    /** Array of available colors */
    readonly colors: string[];
    constructor(drive: AnalysisDrive);
    protected addAnalysis(analysis: AbstractAnalysis): this;
    removeAnalysis(key: string): void;
    /** Add a rectangular analysis in the given position and start editing it. */
    createRectFrom(top: number, left: number): RectangleAnalysis;
    /** Build an ellyptical analysis at the given position. */
    placeRectAt(name: string, top: number, left: number, right: number, bottom: number, color?: string): RectangleAnalysis;
    /** Add an ellyptical analysis in the given position and start editing it */
    createEllipsisFrom(top: number, left: number): EllipsisAnalysis;
    /** Build an ellyptical analysis at the given position. */
    placeEllipsisAt(name: string, top: number, left: number, right: number, bottom: number, color?: string): EllipsisAnalysis;
    createPointAt(top: number, left: number): PointAnalysis;
    placePointAt(name: string, top: number, left: number, color?: string): PointAnalysis;
    createFromSerialized(serialized: string): AbstractAnalysis | undefined;
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

type AnalysisEvent = (analysis: AbstractAnalysis) => void;
declare abstract class AbstractAnalysis {
    readonly key: string;
    readonly file: Instance;
    protected _serialized?: string;
    get serialized(): string | undefined;
    readonly onSerialize: CallbacksManager<(input: string) => void>;
    abstract recievedSerialized(input: string): void;
    protected abstract toSerialized(): string;
    protected serializedIsValid(input: string): boolean;
    serialize(): string;
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
    abstract getAnalysisData(): Promise<PointAnalysisData | AreaAnalysisData>;
    /** When parsing incoming serialized attribute, look if segments have an exact value */
    static serializedSegmentsHasExact(segments: string[], lookup: string): boolean;
    /** When parsing incooming serialized attribute, try to extract it by its key as string */
    static serializedGetStringValueByKey(segments: string[], key: string): string | undefined;
    /** When parsing incooming serialized attribute, try to extract it by its key as number */
    static serializedGetNumericalValueByKey(segments: string[], key: string): number | undefined;
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

interface ITool {
    key: string;
    name: string;
    description: string;
    icon: string;
    active: boolean;
}
declare abstract class AbstractTool {
    readonly group: ThermalGroup;
    active: boolean;
    constructor(group: ThermalGroup);
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
declare class ToolDrive extends AbstractProperty<ThermalTool, ThermalGroup> {
    /** Create own set of tools from the registry of tools */
    protected _tools: {
        [x: string]: ThermalTool;
    };
    /** Readonly list of available tools */
    get tools(): {
        [x: string]: ThermalTool;
    };
    constructor(parent: ThermalGroup, initial: ThermalTool);
    protected validate(value: ThermalTool): ThermalTool;
    protected afterSetEffect(value: ThermalTool): void;
    /** Pick a tool. Its activation is handled by the `afterSetEffect` */
    selectTool(tool: ThermalTool | keyof ToolDrive["tools"]): void;
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
interface IThermalGroup extends IThermalContainer, IWithMinmaxGroup, IWithFiles, IWithCursorPosition, IWithTool {
}
/** Thermal registry definition with all its properties */
interface IThermalRegistry extends IThermalContainer, IWithGroups, IWithOpacity, IWithLoading, IWithMinmaxRegistry, IWithRange, IWithPalette {
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
    get pool(): Pool;
    /** Groups are stored in an observable property */
    readonly groups: GroupsState;
    /** Iterator methods */
    forEveryGroup(fn: ((group: ThermalGroup) => void)): void;
    forEveryInstance(fn: (instance: Instance) => void): void;
    /** Full load of the registry with multiple files @deprecated */
    loadFullMultipleFiles(files: {
        [index: string]: ThermalFileRequest[];
    }): Promise<void>;
    /** Load the registry with only one file. @deprecated */
    loadFullOneFile(file: ThermalFileRequest, groupId: string): Promise<void>;
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
declare class AnalysisDataState extends AbstractProperty<AnalysisDataStateValue, Instance> {
    protected _hasActiveGraphs: boolean;
    get hasActiveGraphs(): boolean;
    readonly onGraphsPresence: CallbacksManager<(hasActiveGraphs: boolean) => void>;
    readonly listeners: AnalysisGraphsStorage;
    constructor(parent: Instance);
    protected validate(value: AnalysisDataStateValue): AnalysisDataStateValue;
    protected afterSetEffect(): void;
    dangerouslyUpdateValue(value: AnalysisDataStateValue): void;
    downloadData(): void;
}

type PropertyListenersTypes = boolean | number | string | ThermalRangeOrUndefined | ThermalMinmaxOrUndefined | ThermalCursorPositionOrUndefined | ThermalGroup[] | ThermalStatistics[] | Instance[] | AbstractAnalysis[] | AbstractTool | AnalysisDataStateValue;
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
    /** Listeners shall be binded to the file's listener layer. Alias of the file's listener layer root. */
    get listenerLayerContainer(): HTMLElement;
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
    activateListeners(): void;
    /** Remove all listeners from the file's listener layer */
    deactivateListeners(): void;
}

declare abstract class AbstractLayer {
    protected readonly instance: Instance;
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
    constructor(instance: Instance);
    protected _show: boolean;
    get show(): boolean;
    set show(value: boolean);
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

/** Define properties for a file */
interface IFileInstance extends IThermalInstance, BaseStructureObject {
    root: HTMLDivElement | null;
    canvasLayer: ThermalCanvasLayer;
    visibleLayer: VisibleLayer;
    cursorLayer: ThermalCursorLayer;
    listenerLayer: ThermalListenerLayer;
    horizontalLimit: number;
    id: string;
    verticalLimit: number;
    duration: number;
    isHover: boolean;
    mountedBaseLayers: boolean;
}

/** Define methods for all files.
 * @deprecated Replace by Instance! This class is not needed anymore since it comes from the time of `ThermalFileInstance` */
declare abstract class AbstractFile extends BaseStructureObject implements IFileInstance {
    readonly id: string;
    readonly horizontalLimit: number;
    readonly verticalLimit: number;
    readonly group: ThermalGroup;
    get pool(): Pool;
    readonly url: string;
    readonly thermalUrl: string;
    readonly visibleUrl?: string;
    readonly fileName: string;
    readonly frameCount: number;
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
    timeline: TimelineDrive;
    cursorValue: CursorValueDrive;
    analysis: AnalysisDrive;
    recording: RecordingDrive;
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
    protected abstract mountListener(): void;
    protected abstract unmountListener(): void;
    mountToDom(container: HTMLDivElement): void;
    unmountFromDom(): void;
    draw(): void;
    recievePalette(palette: string | number): void;
    destroySelfAndBelow(): void;
    removeAllChildren(): void;
    getTemperatureAtPoint(x: number, y: number): number;
    getColorAtPoint(x: number, y: number): string | undefined;
    recieveRange(value: ThermalRangeOrUndefined): void;
    reset(): void;
    recieveOpacity(value: number): void;
    abstract exportAsPng(): void;
    abstract exportThermalDataAsSvg(): void;
}

/**
 * Stores the file's `ArrayBuffer` and provides all the data for instance
 * - this service is registered in FilesService
 * - the instances are retrieved using `FilesService.loadOneFile`
 */
declare class ThermalFileReader extends AbstractFileResult {
    readonly service: FilesService;
    readonly buffer: ArrayBuffer;
    readonly parser: IParserObject;
    /** For the purpose of testing we have a unique ID */
    readonly id: number;
    /** In-memory cache of the `baseInfo` request. This request might be expensive in larger files or in Vario Cam files. Because the return value is allways the same, there is no need to make the call repeatedly. */
    protected baseInfoCache?: ParsedFileBaseInfo;
    readonly fileName: string;
    private get pool();
    constructor(service: FilesService, buffer: ArrayBuffer, parser: IParserObject, thermalUrl: string, visibleUrl?: string);
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
    pointAnalysisData(x: number, y: number): ReturnType<IParserObject["pointAnalysisData"]>;
    rectAnalysisData(x: number, y: number, width: number, height: number): ReturnType<IParserObject["rectAnalysisData"]>;
    ellipsisAnalysisData(x: number, y: number, width: number, height: number): ReturnType<IParserObject["ellipsisAnalysisData"]>;
    createInstance(group: ThermalGroup): Promise<Instance>;
}

/** Handle the entire exports of a file */
declare class ThermalFileExport {
    readonly file: Instance;
    constructor(file: Instance);
    canvasAsPng(): void;
    thermalDataAsCsv(): void;
}

declare class Instance extends AbstractFile {
    readonly group: ThermalGroup;
    readonly service: ThermalFileReader;
    /**  @todo This dimension should be 1 pixel smaller */
    readonly width: number;
    /** @todo This dimension should be 1 pixel smaller */
    readonly height: number;
    readonly timestamp: number;
    readonly frameCount: number;
    readonly duration: number;
    /** @deprecated */
    readonly frameInterval: number;
    /** @deprecated */
    readonly fps: number;
    readonly min: number;
    readonly max: number;
    readonly bytesize: number;
    /** @deprecated not used anymore */
    readonly averageEmissivity: number;
    /** @deprecated not used anymore */
    readonly averageReflectedKelvins: number;
    readonly firstFrame: ParsedFileFrame;
    readonly timelineData: ParsedFileBaseInfo["timeline"];
    timeline: TimelineDrive;
    analysis: AnalysisDrive;
    analysisData: AnalysisDataState;
    exportAsPng(): void;
    exportThermalDataAsSvg(): void;
    /**
     * Exports
     */
    protected _export?: ThermalFileExport;
    /** Lazy-loaded `ThermalFileExport` object */
    get export(): ThermalFileExport;
    protected constructor(group: ThermalGroup, service: ThermalFileReader, 
    /**  @todo This dimension should be 1 pixel smaller */
    width: number, 
    /** @todo This dimension should be 1 pixel smaller */
    height: number, timestamp: number, frameCount: number, duration: number, 
    /** @deprecated */
    frameInterval: number, initialPixels: number[], 
    /** @deprecated */
    fps: number, min: number, max: number, bytesize: number, 
    /** @deprecated not used anymore */
    averageEmissivity: number, 
    /** @deprecated not used anymore */
    averageReflectedKelvins: number, firstFrame: ParsedFileFrame, timelineData: ParsedFileBaseInfo["timeline"]);
    postInit(): this;
    protected formatId(thermalUrl: string): string;
    protected onSetPixels(value: number[]): void;
    getPixelsForHistogram(): number[];
    static fromService(group: ThermalGroup, service: ThermalFileReader, baseInfo: ParsedFileBaseInfo, firstFrame: ParsedFileFrame): Instance;
    mountListener(): void;
    protected unmountListener(): void;
    recieveCursorPosition(position: ThermalCursorPositionOrUndefined): void;
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
    get pool(): Pool;
    constructor(registry: ThermalRegistry, id: string, name?: string | undefined, description?: string | undefined);
    readonly minmax: MinmaxGroupProperty;
    /** Tool drive */
    readonly tool: ToolDrive;
    readonly files: FilesState;
    readonly cursorPosition: CursorPositionDrive;
    /** Iteration */
    forEveryInstance: (fn: ((instance: Instance) => void)) => void;
    /**
     * Destruction
     */
    /** Remove all instances, reset the minmax */
    destroySelfAndBelow(): void;
    removeAllChildren(): void;
    reset(): void;
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

/**
 * Array of all supported file types and extensions
 * - this is only for the purpose of display!
 * - no functionality is relies on this data
 * - all the functionality needs to be implemented in static functions of the parser itself
 */
declare const supportedFileTypes: IParserObject["extensions"][];
declare const supportedFileTypesInputProperty: string;

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

declare class EditTool extends AbstractTool implements ITool {
    readonly key = "edit";
    readonly name = "Edit analysis";
    readonly description = "Drag corners of any selected analysis.";
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

declare const getPool: () => Promise<Pool__default>;

export { AbstractAnalysis, AbstractAreaAnalysis, AbstractFileResult, AbstractTool, AddEllipsisTool, AddRectangleTool, type AnalysisDataStateValue, AnalysisGraph, type AvailableThermalPalettes, CallbacksManager, CornerPoint, DropinElementListener, EditTool, EllipsisAnalysis, GRAYSCALE, IRON, InspectTool, Instance, JET, type PaletteId, type ParsedTimelineFrame, type PlaybackSpeeds, PointAnalysis, RectangleAnalysis, type ThermalCursorPositionOrUndefined, ThermalFileFailure, ThermalFileReader, ThermalGroup, ThermalManager, type ThermalManagerOptions, type ThermalMinmaxOrUndefined, type ThermalPaletteType, ThermalPalettes, type ThermalRangeOrUndefined, ThermalRegistry, type ThermalRegistryOptions, type ThermalTool, TimeFormat, TimePeriod, TimeRound, availableAnalysisColors, getPool, playbackSpeed, supportedFileTypes, supportedFileTypesInputProperty };
