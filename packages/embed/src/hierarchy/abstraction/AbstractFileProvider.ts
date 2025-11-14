import { AbstractAnalysis, CallbacksManager, Instance, ParsedTimelineFrame, PlaybackSpeeds, SlotNumber, ThermalFileFailure, ThermalRangeOrUndefined } from "@labirthermal/core";
import { consume, provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { booleanConverter } from "../../utils/converters/booleanConverter";
import { GroupConsumer } from "../consumers/GroupConsumer";
import { analysisList, AnalysisList, currentFrameContext, CurrentFrameContext, durationContext, DurationContext, FailureContext, fileContext, fileCursorContext, FileCursorContext, fileMsContext, loadedContext, loadingContext, mayStopContext, playbackSpeedContext, playingContext, recordingContext } from "../providers/context/FileContexts";
import { registryHighlightContext, setRegistryHighlightContext } from "../providers/context/RegistryContext";

export abstract class AbstractFileProvider extends GroupConsumer {

    @provide({ context: fileContext })
    @state()
    public file?: Instance;

    @provide({ context: FailureContext })
    @state()
    protected failure?: ThermalFileFailure;

    @provide({ context: loadingContext })
    @state()
    public loading: boolean = false;

    @provide({ context: loadedContext })
    protected ready = false;

    @provide({ context: durationContext })
    @state()
    protected duration?: DurationContext;

    @provide({ context: currentFrameContext })
    protected currentFrame?: CurrentFrameContext;

    @provide({ context: fileCursorContext })
    protected cursor: FileCursorContext = undefined;

    protected cursorSetter = (percent: number | undefined) => {
        if (percent === undefined) {
            if (this.cursor !== undefined) {
                this.cursor = undefined;
            }
        } else if (this.file) {
            const relativeTime = this.file.timeline._convertPercenttRelative(percent);
            const frame = this.file.timeline.findPreviousRelative(relativeTime);
            this.cursor = {
                absolute: frame.absolute,
                ms: frame.relative,
                percentage: percent
            }
        }
    };

    @provide({ context: fileMsContext })
    public ms: number = 0;

    @provide({ context: playbackSpeedContext })
    public speed?: PlaybackSpeeds = 1;

    @provide({ context: recordingContext })
    public recording: boolean = false;

    @provide({ context: playingContext })
    public playing: boolean = false;

    @provide({ context: mayStopContext })
    @state()
    protected mayStop: boolean = true;

    @provide({ context: analysisList })
    analysis: AnalysisList = [];


    public analysis1?: string;
    public analysis2?: string;
    public analysis3?: string;
    public analysis4?: string;
    public analysis5?: string;
    public analysis6?: string;
    public analysis7?: string;


    /** Actions taken when a file starts loading */
    public readonly onLoadingStart = new CallbacksManager<() => void>;

    /** Actions taken when a file is loaded successfully */
    public readonly onSuccess = new CallbacksManager<(instance: Instance) => void>;

    /** Actions taken when loading ends with error */
    public readonly onFailure = new CallbacksManager<(error: ThermalFileFailure) => void>;

    @property({ type: Boolean, reflect: true, converter: booleanConverter(false) })
    autoHighlight: boolean = false;

    @consume({ context: registryHighlightContext, subscribe: true })
    protected highlight?: ThermalRangeOrUndefined;

    @consume({ context: setRegistryHighlightContext, subscribe: true })
    protected highlightSetter?: (highlight: ThermalRangeOrUndefined) => void;



    public updated(_changedProperties: PropertyValues<AbstractFileProvider>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("ms")) {
            if (this.file && this.duration && this.currentFrame) {
                const newMs = Math.min(this.duration.ms, Math.max(0, this.ms));
                if (newMs !== this.currentFrame.ms) {
                    this.file.timeline.setRelativeTime(newMs);
                }
            }
        }

        if (_changedProperties.has("speed")) {
            if (this.file && this.speed) {
                if (this.speed !== this.file.timeline.playbackSpeed) {
                    this.file.timeline.playbackSpeed = this.speed;
                }
            }
        }

        if (_changedProperties.has("playing")) {
            if (this.file) {
                if (
                    this.playing
                    && !this.file.timeline.isPlaying
                ) {
                    this.file.timeline.play();
                } else if (
                    !this.playing
                    && this.file.timeline.isPlaying
                ) {
                    this.file.timeline.pause();
                }
            }
        }


        this.handleAnalysisUpdate(1, _changedProperties);
        this.handleAnalysisUpdate(2, _changedProperties);
        this.handleAnalysisUpdate(3, _changedProperties);
        this.handleAnalysisUpdate(4, _changedProperties);
        this.handleAnalysisUpdate(5, _changedProperties);
        this.handleAnalysisUpdate(6, _changedProperties);
        this.handleAnalysisUpdate(7, _changedProperties);

    }


    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, _old, value);

        // Recording
        if (name === "recording") {
            if (this.file) {
                if (this.recording === true && value === "false") {
                    this.file.recording.end();
                }
                else if (this.recording === false && value === "true") {
                    this.file.recording.start();
                }
            }
        }

    }


    public readonly onInstanceCreated = new CallbacksManager<(instance: Instance) => void>();


    /** Register instance callback listeners */
    public recieveInstance(
        instance: Instance
    ) {

        // Store internal state

        this.file = instance;
        this.failure = undefined;
        this.loading = false;
        this.ready = true;

        // Update internal state

        this.duration = {
            ms: instance.timeline.duration,
            time: instance.timeline.formatDuration(instance.timeline.duration)
        }

        this.currentFrame = {
            ms: instance.timeline.currentMs,
            time: instance.timeline.currentTime,
            percentage: instance.timeline.currentPercentage,
            index: instance.timeline.currentStep.index,
            absolute: instance.timeline.currentStep.absolute
        }

        this.analysis = instance.analysis.layers.all;


        // Project properties to cthe core
        if (this.speed) {
            instance.timeline.playbackSpeed = this.speed;
        }



        // Create listeners

        this.playCallback = () => { this.playing = true; }
        this.stopCallback = () => { this.playing = false; }

        this.currentFrameChangeCallback = frame => {

            this.currentFrame = {
                ms: frame.relative,
                time: instance.timeline.currentTime,
                percentage: instance.timeline.currentPercentage,
                index: frame.index,
                absolute: frame.absolute
            }
            this.ms = frame.relative;
        }

        this.playbackSpeedCallback = value => { this.speed = value };

        this.recordingCallback = value => { this.recording = value; }

        this.mayStopCallback = value => { this.mayStop = value; }

        this.analysisCallback = value => { this.analysis = value; }


        // Bind listeners

        instance.timeline.callbacksPlay.add(this.UUID, this.playCallback);
        instance.timeline.callbacksPause.add(this.UUID, this.stopCallback);
        instance.timeline.callbacksStop.add(this.UUID, this.stopCallback);
        instance.timeline.callbacksEnd.add(this.UUID, this.stopCallback);
        instance.timeline.callbacksChangeFrame.add(this.UUID, this.currentFrameChangeCallback);
        instance.timeline.callbackdPlaybackSpeed.add(this.UUID, this.playbackSpeedCallback);
        instance.recording.addListener(this.UUID, this.recordingCallback);
        instance.recording.callbackMayStop.add(this.UUID, this.mayStopCallback);
        instance.analysis.addListener(this.UUID, this.analysisCallback);

        this.onInstanceCreated.call(instance);

        // Draw the instance in the end
        // instance.draw();


        this.addEventListener("mouseenter", () => {

            if ( this.autoHighlight && this.file && this.highlightSetter ) {
                this.highlightSetter( {
                    from: this.file.min,
                    to: this.file.max
             } );

            }

        });


        this.addEventListener("mouseleave", () => {
            if (this.autoHighlight && this.highlightSetter) {
                this.highlightSetter(undefined);
            }
        });

    }


    public removeInstance(
        instance: Instance
    ) {

        instance.unmountFromDom();


        // Mark internal state
        this.file = undefined;
        this.loading = false;
        this.ready = false;

        // Set default values
        this.duration = undefined;
        this.currentFrame = undefined;
        this.analysis = [];

        // Remove all listeners
        instance.timeline.callbacksPlay.delete(this.UUID);
        instance.timeline.callbacksPause.delete(this.UUID);
        instance.timeline.callbacksStop.delete(this.UUID);
        instance.timeline.callbacksEnd.delete(this.UUID);
        instance.timeline.callbacksChangeFrame.delete(this.UUID);
        instance.timeline.callbackdPlaybackSpeed.delete(this.UUID);
        instance.recording.removeListener(this.UUID);
        instance.analysis.removeListener(this.UUID);

    }

    protected playCallback?: () => void;
    protected stopCallback?: () => void;
    protected currentFrameChangeCallback?: (frame: ParsedTimelineFrame) => void;
    protected playbackSpeedCallback?: (value: PlaybackSpeeds) => void;
    protected recordingCallback?: (value: boolean) => void;
    protected mayStopCallback?: (value: boolean) => void;
    protected analysisCallback?: (value: AbstractAnalysis[]) => void;


    public deleteFile() {
        if (this.file) {
            this.removeInstance(this.file);
        }
    }



    /**
     * Initialise slots & their listeners
     */
    protected handleLoaded(
        instance: Instance
    ) {

        // listen to changes
        instance.slots.onSlot1Serialize.set(this.UUID, value => this.analysis1 = value);
        instance.slots.onSlot2Serialize.set(this.UUID, value => this.analysis2 = value);
        instance.slots.onSlot3Serialize.set(this.UUID, value => this.analysis3 = value);
        instance.slots.onSlot4Serialize.set(this.UUID, value => this.analysis4 = value);
        instance.slots.onSlot5Serialize.set(this.UUID, value => this.analysis5 = value);
        instance.slots.onSlot6Serialize.set(this.UUID, value => this.analysis6 = value);
        instance.slots.onSlot7Serialize.set(this.UUID, value => this.analysis7 = value);

        // Create the initial analysis
        this.createInitialAnalysis(instance, 1, this.analysis1);
        this.createInitialAnalysis(instance, 2, this.analysis2);
        this.createInitialAnalysis(instance, 3, this.analysis3);
        this.createInitialAnalysis(instance, 4, this.analysis4);
        this.createInitialAnalysis(instance, 5, this.analysis5);
        this.createInitialAnalysis(instance, 6, this.analysis6);
        this.createInitialAnalysis(instance, 7, this.analysis7);

    }


    protected handleAnalysisUpdate(
        index: SlotNumber,
        _changedProperties: PropertyValues<AbstractFileProvider>
    ) {

        const field = `analysis${index}` as keyof AbstractFileProvider;


        if (_changedProperties.has(field)) {

            const oldValue = _changedProperties.get(field) as string | undefined | null;
            const newValue = this[field] as string | undefined | null;


            if (this.file) {

                const slot = this.file.slots.getSlot(index);

                // If slot had not exist before and sould create, do so
                if (
                    slot === undefined
                    && newValue
                    && newValue.trim().length > 0
                    && (
                        !oldValue
                        || oldValue?.trim().length > 0
                    )
                ) {
                    const analysis = this.file.slots.createAnalysisFromSerialized(newValue, index);
                    analysis?.setSelected(false, true);
                }
                // If the slot ceased to exist
                else if (
                    slot !== undefined
                    && oldValue
                    && (!newValue
                        || newValue?.trim().length === 0
                    )
                ) {
                    this.file.slots.removeSlotAndAnalysis(index);
                } else if (slot && newValue) {
                    slot?.recieveSerialized(newValue);
                }

            }

        }

    }



    protected createInitialAnalysis(
        instance: Instance,
        index: number,
        value?: string
    ) {

        if (value !== undefined && value !== null && value.trim().length > 0) {
            if (instance.slots.hasSlot(index)) {

                const analysis = instance.slots.getSlot(index);
                analysis?.recieveSerialized(value);
                analysis?.analysis.setSelected(false, true);


            } else {
                const analysis = instance.slots.createAnalysisFromSerialized(value, index);
                analysis?.setSelected(false, true);
            }



        }

    }

    protected render(): unknown {
        return html`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `;
    }

}