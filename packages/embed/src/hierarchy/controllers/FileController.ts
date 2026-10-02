import { ContextProvider, createContext } from "@lit/context";
import { IBaseElement } from "../../controllers/IBaseElement"
import { ManagerController } from "./ManagerController";
import { RegistryController } from "./RegistryController";
import { AbstractHierarchyController, HostReactiveProperties, INTERNAL_STATE_DECLARATION } from "./AbstractHierarchyController";
import { GroupController } from "./GroupController";
import { CallbacksManager, Instance, ThermalFileFailure } from "@labirthermal/core";
import { DurationContext, CurrentFrameContext, FileCursorContext, AnalysisList, fileContext, fileFailureContext, readyContext, durationContext, fileCurrentFrameContext, fileCursorContext, fileMsContext, filePlaybackSpeedContext, filePlayingContext, fileRecordingContext, fileAnalysisListContext, filaMayStopContext } from "../providers/context/FileContexts";
import { PlaybackSpeeds } from "@labirthermal/core";
import { booleanConverter } from "../../index.export";
import { PropertyDeclaration, PropertyValueMap } from "lit";

type IHostProperties = {

    managerController: ManagerController;
    registryController: RegistryController;
    groupController: GroupController;
    fileController: FileController;


    file?: Instance;
    failure?: ThermalFileFailure;

    ms: number;

    playbackSpeed: PlaybackSpeeds;

    analysis1?: string;
    analysis2?: string;
    analysis3?: string;
    analysis4?: string;
    analysis5?: string;
    analysis6?: string;
    analysis7?: string;

    autoHighlight: boolean;

}

export interface IElementWithFileController extends IBaseElement, IHostProperties {}

export const fileControllerContext = createContext<FileController>("file-controller-context");

const ANALYSIS_STATE_DECLARATION: PropertyDeclaration = { type: String,reflect: true };

export class FileController extends AbstractHierarchyController<IElementWithFileController> {
    

    private _UUID: string;

    public get UUID(): string {
        return this._UUID;
    }

    public static HOST_PROPERTIES: HostReactiveProperties<IHostProperties> = {
        managerController: INTERNAL_STATE_DECLARATION,
        registryController: INTERNAL_STATE_DECLARATION,
        groupController: INTERNAL_STATE_DECLARATION,
        fileController: INTERNAL_STATE_DECLARATION,
        file: INTERNAL_STATE_DECLARATION,
        failure: INTERNAL_STATE_DECLARATION,
        ms: { type: Number, reflect: true, attribute: "file-ms" },
        playbackSpeed: {type: Number, reflect: true, attribute: "file-playback-speed"},
        analysis1: ANALYSIS_STATE_DECLARATION,
        analysis2: ANALYSIS_STATE_DECLARATION,
        analysis3: ANALYSIS_STATE_DECLARATION,
        analysis4: ANALYSIS_STATE_DECLARATION,
        analysis5: ANALYSIS_STATE_DECLARATION,
        analysis6: ANALYSIS_STATE_DECLARATION,
        analysis7: ANALYSIS_STATE_DECLARATION,
        autoHighlight: { type: Boolean,state: true, reflect: true, attribute: "file-auto-highlight" }
    }

    // Accessors to the host's file-related properties
    public get fileObject() { return this.host.file; }
    public get failure() { return this.host.failure; }
    public get ms() { return this.host.ms; }
    public get playbackSpeed() { return this.host.playbackSpeed; }
    public get analysis1() { return this.host.analysis1; }
    public get analysis2() { return this.host.analysis2; }
    public get analysis3() { return this.host.analysis3; }
    public get analysis4() { return this.host.analysis4; }
    public get analysis5() { return this.host.analysis5; }
    public get analysis6() { return this.host.analysis6; }
    public get analysis7() { return this.host.analysis7; }
    public get autoHighlight() { return this.host.autoHighlight; }

    // Local state accessors
    public get ready() { return this.readyContextProvider.value; }
    public get recording() { return this.fileRecordingContextProvider.value;}
    public get playing() { return this.filePlayingContextProvider.value; }
    public get mayStop() { return this.fileMayStopContextProvider.value; }
    public get cursor() { return this.fileCursorContextProvider.value; }
    public get currentFrame() { return this.fileCurrentFrameContextProvider.value; }
    public get analyses() { return this.fileAnalysesContextProvider.value; }
    public get duration() { return this.fileDurationContextProvider.value; }

    // Callbacks managers
    public readonly onLoadingStart = new CallbacksManager<()=>void>();
    public readonly onSuccess = new CallbacksManager< ( instance: Instance ) => void >();
    public readonly onFailure = new CallbacksManager< ( error: ThermalFileFailure ) => void >();



    // Context providers

    private fileControllerContextProvider: ContextProvider<typeof fileControllerContext, IElementWithFileController>;

    private fileContextProvider: ContextProvider<typeof fileContext, IElementWithFileController>;

    private fileFailureContextProvider: ContextProvider<typeof fileFailureContext, IElementWithFileController>;

    private readyContextProvider: ContextProvider<typeof readyContext, IElementWithFileController>;

    private fileDurationContextProvider: ContextProvider<typeof durationContext, IElementWithFileController>;

    private fileCurrentFrameContextProvider: ContextProvider<typeof fileCurrentFrameContext, IElementWithFileController>;

    private fileCursorContextProvider: ContextProvider<typeof fileCursorContext, IElementWithFileController>;

    private fileMsContextProvider: ContextProvider<typeof fileMsContext, IElementWithFileController>;

    private filePlaybackSpeedContextProvider: ContextProvider<typeof filePlaybackSpeedContext, IElementWithFileController>;

    private filePlayingContextProvider: ContextProvider<typeof filePlayingContext, IElementWithFileController>;

    private fileRecordingContextProvider: ContextProvider<typeof fileRecordingContext, IElementWithFileController>;

    private fileMayStopContextProvider: ContextProvider<typeof filaMayStopContext, IElementWithFileController>;

    private fileAnalysesContextProvider: ContextProvider<typeof fileAnalysisListContext, IElementWithFileController>;





    constructor(
        host: IElementWithFileController
    ) {
        super(host);
        this._UUID = host.UUID + "_file-controller";

        // Expose self as file context provider
        this.fileControllerContextProvider = new ContextProvider(
            this.host, 
            { context: fileControllerContext }
        );

        // Create the file context provider
        this.fileContextProvider = new ContextProvider(
            this.host,
            { context: fileContext }
        );

        this.fileFailureContextProvider = new ContextProvider(
            this.host,
            { context: fileFailureContext }
        );

        this.readyContextProvider = new ContextProvider(
            this.host,
            { context: readyContext, initialValue: false }
        );

        this.fileDurationContextProvider = new ContextProvider(
            this.host,
            { context: durationContext }
        );

        this.fileCurrentFrameContextProvider = new ContextProvider(
            this.host,
            { context: fileCurrentFrameContext }
        );

        this.fileCursorContextProvider = new ContextProvider(
            this.host,
            { context: fileCursorContext }
        );

        this.fileMsContextProvider = new ContextProvider(
            this.host,
            { context: fileMsContext }
        );

        this.filePlaybackSpeedContextProvider = new ContextProvider(
            this.host,
            { context: filePlaybackSpeedContext}
        );

        this.filePlayingContextProvider = new ContextProvider(
            this.host,
            { context: filePlayingContext }
        );

        this.fileRecordingContextProvider = new ContextProvider(
            this.host,
            { context: fileRecordingContext }
        );

        this.fileMayStopContextProvider = new ContextProvider(
            this.host,
            { context: filaMayStopContext }
        );

        this.fileAnalysesContextProvider = new ContextProvider(
            this.host,
            { context: fileAnalysisListContext }
        );


    }



    hostConnected(): void {
        throw new Error("Method not implemented.");
    }

    hostDisconnected(): void {
        this.host.registryController.setHighlight(undefined);

        this.fileObject?.analysis.removeListener( this.UUID );

        this.fileObject?.timeline.removeListener( this.UUID );
        this.fileObject?.timeline.callbacksPlay.delete( this.UUID );
        this.fileObject?.timeline.callbacksPause.delete( this.UUID );
        this.fileObject?.timeline.callbacksStop?.delete( this.UUID );
        this.fileObject?.timeline.callbacksEnd?.delete( this.UUID );
        this.fileObject?.timeline.callbacksChangeFrame?.delete( this.UUID );
        this.fileObject?.timeline.callbackdPlaybackSpeed?.delete( this.UUID );

        this.fileObject?.recording.removeListener( this.UUID );
        this.fileObject?.recording.callbackMayStop?.delete( this.UUID );
    }


    hostUpdatedWatcher(value: PropertyValueMap<IElementWithFileController>): void {
        throw new Error("Method not implemented.");
    }


    /** 
     * This is crucial - once the instance is loaded or retrieved somewhere, all the magic happens. Existence of this method enables controller to change the instance at any time. 
     */
    public receiveInstance(
        instance: Instance
    ): void {


        // Store the instance anywhere necessary
        this.host.file = instance;
        this.fileContextProvider.setValue(instance);

        // Clear all properties that should be clear whenever an instance is here

        this.host.failure = undefined;
        this.fileFailureContextProvider.setValue(undefined);

        this.readyContextProvider.setValue(true);
        
        // Update all internal states and contexts that depend on the new instance

        // Update the duration context based on the new instance's timeline
        this.fileDurationContextProvider.setValue({
            ms: instance.timeline.duration,
            time: instance.timeline.formatDuration(instance.timeline.duration)
        });

        // Current frame context propagation
        this._propagateInstanceCurrentFrame(instance);

        // Propagate analyses
        this._propagateInstanceAnalysesArray(instance);

        // Set the playback speed from local property to the core
        if ( this.playbackSpeed !== undefined ) {
            instance.timeline.playbackSpeed = this.playbackSpeed;
        }

        // Add listeners for the instance's timeline events

        // Playback starts
        instance.timeline.callbacksPlay.set( this.UUID, () => {
            this.filePlayingContextProvider.setValue(true);
            this.host.requestUpdate();
        } );

        // Playback pauses
        instance.timeline.callbacksPause.set( this.UUID, () => {
            this.filePlayingContextProvider.setValue(false);
            this.host.requestUpdate();
        } );

        // Playbacks stops
        instance.timeline.callbacksStop.set( this.UUID, () => {
            this.filePlayingContextProvider.setValue(false);
            this.host.requestUpdate();
        } );

        // Playbacks ends
        instance.timeline.callbacksEnd.set( this.UUID, () => {
            this.filePlayingContextProvider.setValue(false);
            this.host.requestUpdate();
        } );

        // Frame changes
        instance.timeline.callbacksChangeFrame.set( this.UUID, (frame) => {
            const value = {
                ms: frame.relative,
                time: instance.timeline.currentTime,
                percentage: instance.timeline.currentPercentage,
                index: frame.index,
                absolute: frame.absolute
            };
            this.fileCurrentFrameContextProvider.setValue(value);
            this.host.ms = frame.relative;
            this.fileMsContextProvider.setValue(frame.relative);
            this.host.requestUpdate();
        } );

        // Playback speed changes
        instance.timeline.callbackdPlaybackSpeed.set( this.UUID, (speed) => {
            this.host.playbackSpeed = speed;
            this.filePlaybackSpeedContextProvider.setValue(speed);
            this.host.requestUpdate();
        } );

        // May stop changes
        instance.recording.callbackMayStop.set( this.UUID, (value) => {
            this.fileMayStopContextProvider.setValue(value);
            this.host.requestUpdate();
        } );

        // Recording
        instance.recording.addListener( this.UUID, value => {
            this.fileRecordingContextProvider.setValue(value);
            this.host.requestUpdate();
        } );


        // Analyses list listener
        instance.analysis.addListener( this.UUID, value => {
            this.fileAnalysesContextProvider.setValue(value);
            this.host.requestUpdate();
        } );

        // Call the success listener
        this.onSuccess.call( instance );

        // Register propagation events
        this.host.addEventListener( "mouseenter", this._propagateHighlight.bind(this) );
        this.host.addEventListener( "focus", this._propagateHighlight.bind(this) );
        this.host.addEventListener( "mouseleave", this._unpropagateHighlight.bind(this) );
        this.host.addEventListener( "blur", this._unpropagateHighlight.bind(this) );

        // Request the host update in the end
        this.host.requestUpdate();

    }

    public removeInstance(
        instance: Instance
    ): void {

        instance.unmountFromDom();

        // Remove all listeners
        instance.timeline.callbacksPlay.delete(this.UUID);
        instance.timeline.callbacksPause.delete(this.UUID);
        instance.timeline.callbacksStop.delete(this.UUID);
        instance.timeline.callbacksEnd.delete(this.UUID);
        instance.timeline.callbacksChangeFrame.delete(this.UUID);
        instance.timeline.callbackdPlaybackSpeed.delete(this.UUID);
        instance.recording.removeListener(this.UUID);
        instance.analysis.removeListener(this.UUID);

        // Reset the contexts
        this.readyContextProvider.setValue(false);
        this.fileDurationContextProvider.setValue(undefined);
        this.fileCurrentFrameContextProvider.setValue(undefined);
        this.fileAnalysesContextProvider.setValue([]);
        this.fileContextProvider.setValue(undefined);
        this.fileRecordingContextProvider.setValue(false);
        this.filePlayingContextProvider.setValue(false);
        this.fileMayStopContextProvider.setValue(false);
        this.fileMsContextProvider.setValue(0);

        this._unpropagateHighlight();

        // Remove the instance from the host
        this.host.file = undefined;

    }

    private _propagateInstanceCurrentFrame(instance: Instance): void {

        this.fileCurrentFrameContextProvider.setValue({
            ms: instance.timeline.currentMs,
            time: instance.timeline.currentTime,
            percentage: instance.timeline.currentPercentage,
            index: instance.timeline.currentStep.index,
            absolute: instance.timeline.currentStep.absolute
        });
        this.host.requestUpdate();
    }

    private _propagateInstanceAnalysesArray(instance: Instance): void {
        // Implement the propagation of other instance-related contexts here
        this.fileAnalysesContextProvider.setValue(instance.analysis.layers.all);
    }


    // Setters of local states

    public setCursor(value: FileCursorContext): void {
        if ( value !== this.fileCursorContextProvider.value ) {
            this.host.requestUpdate();
            this.fileCursorContextProvider.setValue(value);
        }
        
    }

    public setCurrentFrame(value: CurrentFrameContext): void {
        if ( value !== this.fileCurrentFrameContextProvider.value ) {
            this.host.requestUpdate();
            this.fileCurrentFrameContextProvider.setValue(value);
        }
    }

    public setAnalyses(value: AnalysisList): void {
        if ( value !== this.fileAnalysesContextProvider.value ) {
            this.host.requestUpdate();
            this.fileAnalysesContextProvider.setValue(value);
        }
    }

    private _propagateHighlight() {
        if ( this.autoHighlight && this.fileObject ) {
            this.host.setAttribute( "is-highlight", "true" );
            this.host.registryController.setHighlight({
                from: this.fileObject.min,
                to: this.fileObject.max
            })
        }
    }

    private _unpropagateHighlight() {
        if ( this.fileObject ) {
            this.host.removeAttribute( "is-highlight" );
            this.host.registryController.setHighlight(undefined);
        }
    }


}
