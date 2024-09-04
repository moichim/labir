import { Instance, playbackSpeed, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { FileMarker } from "../../controls/file/markers/ImageMarker";
import { GroupConsumer } from "../consumers/GroupConsumer";
import { CurrentFrameContext, currentFrameContext, DurationContext, durationContext, FailureContext, fileContext, fileMarkersContext, fileMsContext, fileProviderContext, mayStopContext, playbackSpeedContext, playingContext, recordingContext } from "./context/FileContexts";

@customElement("file-provider")
export class FileProviderElement extends GroupConsumer {

    @provide({context: fileProviderContext})
    protected element: FileProviderElement = this;

    @state()
    protected reader?: ThermalFileReader;

    @state()
    protected loading: boolean = false;

    /** @deprecated */
    @state()
    protected error?: ThermalFileFailure;

    @provide( {context: playingContext} )
    @property({type: String, reflect: true, attribute: true})
    playing: boolean = false;

    @provide( {context: durationContext} )
    @state()
    duration?: DurationContext;

    @provide( {context: currentFrameContext} )
    @state()
    currentFrame?: CurrentFrameContext;

    @provide( {context: fileMsContext} )
    @property({type: Number, reflect: true, attribute: true})
    ms: number = 0;

    @provide( {context: fileContext} )
    @state()
    file?: Instance;

    @provide( {context: FailureContext} )
    @state()
    failure?: ThermalFileFailure;

    @provide( {context: playbackSpeedContext} )
    @property({type: Number, reflect: true, attribute: true})
    playbackSpeed: keyof typeof playbackSpeed =  1;

    @provide( {context: recordingContext} )
    @property({type: String, reflect: true, attribute: true})
    recording: boolean = false;

    @provide( {context: mayStopContext} )
    @state()
    mayStop: boolean = true;


    @queryAssignedElements({slot: "mark", flatten: true})
    @property( {type: Object, reflect: true})
    marksElement: FileMarker[] = [];

    @provide( {context: fileMarkersContext} )
    marks: FileMarker[] = [];




    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public thermal!: string;

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public visible!: string;

    /** Load the file and call all necessary callbacks */
    protected async load() {

        this.loading = true;

        // Trigger all callbacks
        this.callbacks.loading.forEach( fn => fn() );        

        // Load the file and create the instance
        const value = await this.registry.service.loadFile(this.thermal, this.visible)
            .then( async (result) => {
                
                // Success
                if (result instanceof ThermalFileReader) {
                    // Assign reader
                    this.reader = result;

                    // Create the instance
                    return await this.reader.createInstance(this.group).then(instance => {

                        // Assign the instance
                        this.file = instance;

                        // Call all callbacks
                        this.callbacks.success.forEach(fn => fn(instance));

                        // Clear the callbacks to free the memory
                        this.clearCallbacks();

                        instance.group.registry.postLoadedProcessing();

                        return instance;

                    });

                } 
                // Failure
                else {
                    // Assign failure
                    this.error = result as ThermalFileFailure;
                    // Call all callbacks
                    this.callbacks.failure.forEach(fn => fn(this.error!));
                    // Clear the callbacks to free the memory
                    this.clearCallbacks();

                    return result;
                }
            })
            .then( result => {

                this.loading = false;
                return result;

            } );

        return value;

    }


    /** @deprecated This should be moved in load!! Callbacks need not to be registered here. */
    connectedCallback(): void {

        super.connectedCallback();

        this.load().then( result => {
            if ( result instanceof Instance ) {


                // Update duration context
                this.duration = {
                    ms: result.timeline.duration,
                    time: result.timeline.formatDuration( result.timeline.duration )
                }

                const playCallback = () => {
                    this.playing = true;
                }
                const stopCallback = () => { 
                    this.playing = false;
                }

                // State callbacks
                result.timeline.callbacksPlay.add( this.UUID, playCallback );
                result.timeline.callbacksPause.add( this.UUID, stopCallback );
                result.timeline.callbacksStop.add( this.UUID, stopCallback );
                result.timeline.callbacksEnd.add( this.UUID, stopCallback );

                // Set the current frame
                this.currentFrame = {
                    ms: result.timeline.currentMs,
                    time: result.timeline.currentTime,
                    percentage: result.timeline.currentPercentage,
                    index: result.timeline.currentStep.index,
                    absolute: result.timeline.currentStep.absolute
                }

                // Listen to changes during playback
                result.timeline.callbacksChangeFrame.add(this.UUID, frame => {

                    this.currentFrame = {
                        ms: frame.relative,
                        time: result.timeline.currentTime,
                        percentage: result.timeline.currentPercentage,
                        index: frame.index,
                        absolute: frame.absolute
                    }
                    this.ms = frame.relative;
                });

                // Update playback speed context
                result.timeline.callbackdPlaybackSpeed.add( this.UUID, value => this.playbackSpeed = value );

                // Update recording state
                result.recording.addListener( this.UUID, value => this.recording = value );

                // Update mayStop state
                result.recording.callbackMayStop.add( this.UUID, value => this.mayStop = value );


            } else {
                this.failure = result as ThermalFileFailure;
            }
        } );

    }


    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated( _changedProperties );
        this.marks = this.marksElement;

        this.marks.forEach( mark => console.log( mark.innerHTML ) );
    }



    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback( name, _old, value );

        if ( name === "ms" ) {
            if ( value && this.duration && this.currentFrame ) {
                const newMs = Math.min( this.duration!.ms, Math.max( 0, parseInt( value ) ) );
                if ( newMs !== this.currentFrame.ms ) {
                    this.file?.timeline.setRelativeTime( newMs );
                }
            }
        }

        // Playing state
        if ( name === "playing" ) {

            if ( value === "true" ) {
                    this.file?.timeline.play();
            }

            else if ( value === "false" ) {
                    this.file?.timeline.pause();
            }
        }

        // Playback speed state
        if ( name === "playbackspeed" ) {
            if ( this.file ) {
                if ( value && Object.keys(playbackSpeed).includes( value ) ) {
                    this.file.timeline.playbackSpeed = parseFloat( value ) as keyof typeof playbackSpeed;
                }
            }
            
        }

        // Recording
        if ( name === "recording" ) {
            if ( this.file ) {
                if ( this.recording === true && value === "false" ) {
                    this.file.recording.end();
                }
                else if ( this.recording === false && value === "true" ) {
                    this.file.recording.start();
                }
            }
        }

    }


    /** Callbacks handling */

    protected readonly callbacks: {
        success: Map<string, (instance: Instance) => void>,
        failure: Map<string, (error: ThermalFileFailure) => void>,
        loading: Map<string, () => void>
    } = {
            success: new Map,
            failure: new Map,
            loading: new Map
        }

    public registerSuccessCallback(
        id: string,
        fn: (instance: Instance) => void
    ) {
        this.callbacks.success.set(id, fn);
    }

    public registerFailureCallback(
        id: string,
        fn: (error: ThermalFileFailure) => void
    ) {
        this.callbacks.failure.set(id, fn);
    }

    private clearCallbacks() {
        this.callbacks.success.clear();
        this.callbacks.failure.clear();
        this.callbacks.loading.clear();
    }



    
    



    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate( _changedProperties );
        this.log( _changedProperties );
    }



    /** Rendering */

    protected render(): unknown {
        this.log( this.marksElement );
        return html`
            <slot></slot>
            <slot name="mark"></slot>
        `;
    }

}