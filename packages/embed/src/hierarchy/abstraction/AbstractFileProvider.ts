import { CallbacksManager, Instance, PlaybackSpeeds, ThermalFileFailure, ThermalRangeOrUndefined } from "@labirthermal/core";
import { consume, provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { booleanConverter } from "../../utils/converters/booleanConverter";
import { GroupConsumer } from "../consumers/GroupConsumer";
import { ComponentWithFileProvider, FileContextProviderContext, FileProviderController } from "../controllers/FileController";
import { FailureContext, fileContext, loadingContext, mayStopContext, playbackSpeedContext, playingContext } from "../providers/context/FileContexts";
import { registryHighlightContext, setRegistryHighlightContext } from "../providers/context/RegistryContext";

export abstract class AbstractFileProvider extends GroupConsumer implements ComponentWithFileProvider {

    @provide({ context: fileContext })
    @state()
    public file?: Instance;

    @provide({ context: FailureContext })
    @state()
    public failure?: ThermalFileFailure;

    @provide({ context: loadingContext })
    @state()
    public loading: boolean = false;
    
    @state()
    public ready = false;

    public ms: number = 0;

    @provide({ context: playbackSpeedContext })
    public speed?: PlaybackSpeeds = 1;

    @provide({ context: playingContext })
    public playing: boolean = false;

    @state()
    @provide({ context: mayStopContext })
    protected mayStop: boolean = true;


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
    public autoHighlight: boolean = false;

    @consume({ context: registryHighlightContext, subscribe: true })
    protected highlight?: ThermalRangeOrUndefined;

    @consume({ context: setRegistryHighlightContext, subscribe: true })
    protected highlightSetter?: (highlight: ThermalRangeOrUndefined) => void;



    public updated(_changedProperties: PropertyValues<AbstractFileProvider>): void {
        super.updated(_changedProperties);

        this.controller.onUpdated( _changedProperties );

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

    }



    public readonly onInstanceCreated = new CallbacksManager<(instance: Instance) => void>();

    @provide({ context: FileContextProviderContext })
    protected controller = new FileProviderController(this);


    /** Register instance callback listeners 
     * @deprecated use the FileProviderController instead
    */
    public recieveInstance(
        instance: Instance
    ) {

        this.controller.recieveInstance( instance );

        // Store internal state

        this.file = instance;
        this.failure = undefined;
        this.loading = false;
        this.ready = true;

        // Update internal state


        // Project properties to cthe core
        if (this.speed) {
            instance.timeline.playbackSpeed = this.speed;
        }



        // Create listeners

        this.playbackSpeedCallback = value => { this.speed = value };

        this.mayStopCallback = value => { this.mayStop = value; }


        // Bind listeners
        instance.timeline.callbackdPlaybackSpeed.add(this.UUID, this.playbackSpeedCallback);
        instance.recording.callbackMayStop.add(this.UUID, this.mayStopCallback);

        this.onInstanceCreated.call(instance);

        // Draw the instance in the end
        // instance.draw();


        this.addEventListener("mouseenter", () => {

            if (this.autoHighlight && this.file && this.highlightSetter) {

                this.highlightSetter({
                    from: this.file.min,
                    to: this.file.max
                });

            }

        });


        this.addEventListener("mouseleave", () => {
            if (this.autoHighlight && this.highlightSetter) {
                this.highlightSetter(undefined);
            }
        });

    }


    /** @deprecated use the FileProviderController instead */
    public removeInstance(
        instance: Instance
    ) {

        this.controller.removeFile( instance )

        instance.unmountFromDom();


        // Mark internal state
        this.file = undefined;
        this.loading = false;
        this.ready = false;

        // Set default values

        // Remove all listeners
        instance.timeline.callbacksChangeFrame.delete(this.UUID);
        instance.timeline.callbackdPlaybackSpeed.delete(this.UUID);
        instance.recording.removeListener(this.UUID);
        instance.analysis.removeListener(this.UUID);

    }


    protected playbackSpeedCallback?: (value: PlaybackSpeeds) => void;
    protected recordingCallback?: (value: boolean) => void;
    protected mayStopCallback?: (value: boolean) => void;


    public deleteFile() {
        if (this.file) {
            this.removeInstance(this.file);
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