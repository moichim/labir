import { Instance, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { provide } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AbstractFileProvider } from "./AbstractFileProvider";
import { fileProviderContext } from "./context/FileContexts";

@customElement("file-provider")
export class FileProviderElement extends AbstractFileProvider {

    @provide({context: fileProviderContext})
    protected element: FileProviderElement = this;

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
        this.onLoading.call();      

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
                        this.onSuccess.call( instance );

                        // Clear the callbacks to free the memory
                        this.clearCallbacks();

                        instance.group.registry.postLoadedProcessing();

                        return instance;

                    });

                } 
                // Failure
                else {
                    // Assign failure
                    this.failure = result as ThermalFileFailure;
                    // Call all callbacks

                    this.onFailure.call( this.failure );
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

                // Update analysis list
                this.analysis = result.analysis.layers.all;
                result.analysis.addListener( this.UUID, value => {
                    this.analysis = value;
                } );


            } else {
                this.failure = result as ThermalFileFailure;
            }
        } );

    }



    /** Rendering */

    protected render(): unknown {
        return html`
            <slot></slot>
            <slot name="mark"></slot>
        `;
    }

}