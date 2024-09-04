import { Instance, ThermalFileFailure } from "@labir/core";
import { consume } from "@lit/context";
import { state } from "lit/decorators.js";
import { CurrentFrameContext, currentFrameContext, DurationContext, durationContext, FailureContext, fileContext, FileProviderContext, fileProviderContext, mayStopContext, playbackSpeedContext, playingContext, recordingContext } from "../providers/context/FileContexts";
import { GroupConsumer } from "./GroupConsumer";

export abstract class FileConsumer extends GroupConsumer {

    @consume({context: fileProviderContext, subscribe: true})
    @state()
    protected parentFileProviderElement?: FileProviderContext;

    protected internalCallbackUUID = `${this.UUID}__internal_callback`;

    @state()
    protected loading: boolean = true;

    @consume({context: playingContext, subscribe: true})
    @state()
    protected playing: boolean = false;

    @consume( {context: durationContext, subscribe: true} )
    @state()
    protected duration?: DurationContext;

    @consume( {context: currentFrameContext, subscribe: true} )
    @state()
    protected currentFrame?: CurrentFrameContext;

    @consume( {context: fileContext, subscribe: true} )
    @state()
    protected file?: Instance;

    @consume({context: FailureContext, subscribe: true})
    @state()
    protected failure?: ThermalFileFailure;

    @consume({context: playbackSpeedContext, subscribe: true})
    @state()
    protected playbackSpeed?: ThermalFileFailure;

    @consume({context: recordingContext, subscribe: true})
    @state()
    protected recording: boolean = false;

    @consume({context: mayStopContext, subscribe: true})
    @state()
    protected mayStop: boolean = true;

    connectedCallback(): void {

        super.connectedCallback();

        // if the provider exists, append all the callbacks
        if (this.parentFileProviderElement) {

            // INTERNAL CALLBACKS - ASSIGNEMENT TO LOCAL PROPERTIES

            this.parentFileProviderElement.registerSuccessCallback(
                this.internalCallbackUUID,
                () => {
                    this.loading = false;
                }
            );

            this.parentFileProviderElement.registerFailureCallback(
                this.internalCallbackUUID,
                () => {
                    this.loading = false;
                }
            );


            // IMPLEMENTED CALLBACKS

            this.parentFileProviderElement.registerSuccessCallback(
                this.UUID,
                this.onInstanceCreated.bind(this)
            );

            this.parentFileProviderElement.registerFailureCallback(
                this.UUID,
                this.onFailure.bind(this)
            );
        } else {
            throw new Error("Tento komponent není v souboru!");
        }
    }

    public abstract onInstanceCreated(instance: Instance): void;

    public abstract onFailure(error: ThermalFileFailure): void;

}