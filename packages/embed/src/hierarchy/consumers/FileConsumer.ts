import { Instance, ThermalFileFailure } from "@labir/core";
import { state } from "lit/decorators.js";
import { FileProviderElement } from "../providers/FileProvider";
import { GroupConsumer } from "./GroupConsumer";
import { LitElement } from "lit";
import { consume } from "@lit/context";
import { CurrentFrameContext, currentFrameContext, DurationContext, durationContext, FailureContext, fileContext, mayStopContext, playbackSpeedContext, playingContext, recordingContext } from "../providers/context/PlaybackContext";

export abstract class FileConsumer extends GroupConsumer {

    protected parentFileProviderElement?: FileProviderElement;

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

        // Get the parent provider element from the hierarchy
        this.parentFileProviderElement = this.getParentFile();

        // if the provider exists, append all the callbacks
        if (this.parentFileProviderElement) {

            // INTERNAL CALLBACKS - ASSIGNEMENT TO LOCAL PROPERTIES

            this.parentFileProviderElement.registerLoadingCallback(
                this.internalCallbackUUID,
                () => {
                    this.loading = true;
                }
            );

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

    private getParentFile(): FileProviderElement | undefined {

        let currentParent = this.parentElement;
        let provider: FileProviderElement | undefined;

        if (!currentParent) {
            return undefined;
        }

        if ( currentParent instanceof FileProviderElement ) {
            return currentParent;
        }


        while (currentParent && !provider) {

            if (currentParent instanceof FileProviderElement) {
                provider = currentParent;
                currentParent = null;
            } else {

                // If parent is a custom element, there is a chance that the parent is above the shadow DOM
                if ( currentParent instanceof LitElement ) {

                    // If the parent has a parent, take it
                    if ( currentParent.parentElement ) {
                        currentParent = currentParent.parentElement
                    } 
                    // If the parent has no parent, it means the component is nested and therefore we need to look beyond the shadow root boundaries
                    else {

                        const node = currentParent.getRootNode() as unknown as Element;

                        if ( "host" in node ) {
                            currentParent = node.host as HTMLElement; //eslint-disable-line
                        }
                    }

                } else {
                    currentParent = currentParent.parentElement;
                }

            }

        }

        return provider;

    }

    public abstract onLoadingStart(): void;

    public abstract onInstanceCreated(instance: Instance): void;

    public abstract onFailure(error: ThermalFileFailure): void;

}