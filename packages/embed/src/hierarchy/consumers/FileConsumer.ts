import { Instance, ThermalFileFailure } from "@labir/core";
import { consume } from "@lit/context";
import { state } from "lit/decorators.js";
import { CurrentFrameContext, currentFrameContext, DurationContext, durationContext, FailureContext, fileContext, FileProviderContext, fileProviderContext, mayStopContext, playbackSpeedContext, playingContext, recordingContext } from "../providers/context/FileContexts";
import { GroupConsumer } from "./GroupConsumer";
import { PropertyValues } from "lit";
import { AbstractFileProvider } from "../providers/AbstractFileProvider";

export abstract class FileConsumer extends GroupConsumer {

    @consume({context: fileProviderContext, subscribe: true})
    @state()
    protected parentFileProviderElement?: AbstractFileProvider;

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

        this.hookCallbacks();

    }



    protected hookCallbacks() {


        this.log( "Hookuji file consumera", this, this.parentElement, this.parentFileProviderElement );

        if (this.parentFileProviderElement) {

            // INTERNAL CALLBACKS - ASSIGNEMENT TO LOCAL PROPERTIES

            this.parentFileProviderElement.onSuccess.add(
                this.internalCallbackUUID,
                () => {
                    this.loading = false;
                }
            );

            this.parentFileProviderElement.onFailure.add(
                this.internalCallbackUUID,
                () => {
                    this.loading = false;
                }
            );


            // IMPLEMENTED CALLBACKS

            this.parentFileProviderElement.onSuccess.add(
                this.UUID,
                this.onInstanceCreated.bind(this)
            );

            this.parentFileProviderElement.onFailure.add(
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