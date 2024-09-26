import { AbstractAnalysis, CallbacksManager, Instance, ParsedTimelineFrame, playbackSpeed, PlaybackSpeeds, ThermalFileFailure } from "@labir/core";
import { provide } from "@lit/context";
import { PropertyValues } from "lit";
import { property, queryAssignedElements, state } from "lit/decorators.js";
import { FileMarker } from "../../controls/file/markers/ImageMarker";
import { GroupConsumer } from "../consumers/GroupConsumer";
import { AnalysisList, analysisList, CurrentFrameContext, currentFrameContext, DurationContext, durationContext, FailureContext, fileContext, FileCursorContext, fileCursorContext, fileCursorSetterContext, fileMarkersContext, fileMsContext, loadedContext, loadingContext, mayStopContext, playbackSpeedContext, playingContext, recordingContext } from "./context/FileContexts";

export class AbstractFileProvider extends GroupConsumer {


    @provide({ context: fileContext })
    @state()
    protected file?: Instance;

    @provide({ context: FailureContext })
    @state()
    protected failure?: ThermalFileFailure;

    @provide({ context: loadingContext })
    @state()
    protected loading: boolean = false;

    @provide({ context: loadedContext })
    @state()
    protected ready = false;

    @provide({ context: playingContext })
    @property({ type: String, reflect: true, attribute: true })
    public playing: boolean = false;

    @provide({ context: durationContext })
    @state()
    protected duration?: DurationContext;

    @provide({ context: currentFrameContext })
    @state()
    protected currentFrame?: CurrentFrameContext;

    @provide({context: fileCursorContext})
    protected cursor: FileCursorContext = undefined;

    @provide({context: fileCursorSetterContext})
    protected cursorSetter = (percent: number|undefined) => {
        if ( percent === undefined ) {
            if ( this.cursor !== undefined ) {
                this.cursor = undefined;
            }
        } else if ( this.file ) {
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
    @property({ type: Number, reflect: true, attribute: true })
    public ms: number = 0;

    @provide({ context: playbackSpeedContext })
    @property({ type: Number, reflect: true, attribute: true })
    public playbackSpeed: keyof typeof playbackSpeed = 1;

    @provide({ context: recordingContext })
    @property({ type: String, reflect: true, attribute: true })
    public recording: boolean = false;

    @provide({ context: mayStopContext })
    @state()
    protected mayStop: boolean = true;

    @queryAssignedElements({ slot: "mark", flatten: true })
    marksQueriedInternally!: FileMarker[];

    @provide({ context: fileMarkersContext })
    marksProvidedBelow: FileMarker[] = [];

    @provide({ context: analysisList })
    analysis: AnalysisList = [];


    /** Actions taken when a file starts loading */
    public readonly onLoadingStart = new CallbacksManager<() => void>;

    /** Actions taken when a file is loaded successfully */
    public readonly onSuccess = new CallbacksManager<(instance: Instance) => void>;

    /** Actions taken when loading ends with error */
    public readonly onFailure = new CallbacksManager<(error: ThermalFileFailure) => void>;




    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.marksProvidedBelow = this.marksQueriedInternally;

        this.marksProvidedBelow.forEach(mark => console.log(mark.innerHTML));
    }



    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, _old, value);

        if (name === "ms") {
            if (value && this.duration && this.currentFrame) {
                const newMs = Math.min(this.duration!.ms, Math.max(0, parseInt(value)));
                if (newMs !== this.currentFrame.ms) {
                    this.file?.timeline.setRelativeTime(newMs);
                }
            }
        }

        // Playing state
        if (name === "playing") {

            if (value === "true") {
                this.file?.timeline.play();
            }

            else if (value === "false") {
                this.file?.timeline.pause();
            }
        }

        // Playback speed state
        if (name === "playbackspeed") {
            if (this.file) {
                if (value && Object.keys(playbackSpeed).includes(value)) {
                    this.file.timeline.playbackSpeed = parseFloat(value) as keyof typeof playbackSpeed;
                }
            }

        }

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


    /** Register instance callback listeners */
    protected recieveInstance(
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

        this.playbackSpeedCallback = value => { this.playbackSpeed = value };

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

    }

    protected removeInstance(
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
        instance.timeline.callbacksPause.delete( this.UUID );
        instance.timeline.callbacksStop.delete( this.UUID );
        instance.timeline.callbacksEnd.delete( this.UUID );
        instance.timeline.callbacksChangeFrame.delete( this.UUID );
        instance.timeline.callbackdPlaybackSpeed.delete( this.UUID );
        instance.recording.removeListener( this.UUID );
        instance.analysis.removeListener( this.UUID );

    }

    protected playCallback?: () => void;
    protected stopCallback?: () => void;
    protected currentFrameChangeCallback?: (frame: ParsedTimelineFrame) => void;
    protected playbackSpeedCallback?: (value: PlaybackSpeeds) => void;
    protected recordingCallback?: (value: boolean) => void;
    protected mayStopCallback?: (value: boolean) => void;
    protected analysisCallback?: (value: AbstractAnalysis[]) => void;




    public deleteFile() {
        if ( this.file ) {
            this.removeInstance( this.file );
        }
    }



    /** @deprecated */
    protected clearCallbacks() {

        this.onFailure.clear();
        this.onSuccess.clear();
        this.onLoadingStart.clear();

    }

}