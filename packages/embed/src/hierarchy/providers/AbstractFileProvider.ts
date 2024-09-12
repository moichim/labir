import { CallbacksManager, Instance, playbackSpeed, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { FileMarker } from "../../controls/file/markers/ImageMarker";
import { GroupConsumer } from "../consumers/GroupConsumer";
import { AnalysisList, analysisList, CurrentFrameContext, currentFrameContext, DurationContext, durationContext, FailureContext, fileContext, fileMarkersContext, fileMsContext, fileProviderContext, mayStopContext, playbackSpeedContext, playingContext, recordingContext } from "./context/FileContexts";

export class AbstractFileProvider extends GroupConsumer {

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
    @property( {type: Object, reflect: true, attribute: false})
    marksElement: FileMarker[] = [];

    @provide( {context: fileMarkersContext} )
    marks: FileMarker[] = [];

    @provide({context:analysisList})
    analysis: AnalysisList = [];




    


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


    public readonly onSuccess = new CallbacksManager<( instance: Instance ) => void>;


    public readonly onFailure = new CallbacksManager<( error: ThermalFileFailure ) => void>;

    public readonly onLoading = new CallbacksManager<()=>{}>;


    /** @deprecated */
    protected clearCallbacks() {
        this.callbacks.success.clear();
        this.callbacks.failure.clear();
        this.callbacks.loading.clear();
    }

}