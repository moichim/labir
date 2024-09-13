import { Instance, ThermalFileFailure } from "@labir/core";
import { consume } from "@lit/context";
import { state } from "lit/decorators.js";
import { AbstractFileProvider } from "../providers/AbstractFileProvider";
import { FailureContext, fileContext, fileProviderContext, loadingContext, recordingContext } from "../providers/context/FileContexts";
import { GroupConsumer } from "./GroupConsumer";

export abstract class FileConsumer extends GroupConsumer {

    @consume({context: fileProviderContext, subscribe: true})
    @state()
    protected parentFileProviderElement?: AbstractFileProvider;

    protected internalCallbackUUID = `${this.UUID}__internal_callback`;

    @consume({context: loadingContext, subscribe: true})
    @state()
    protected loading: boolean = true;

    @consume( {context: fileContext, subscribe: true} )
    @state()
    protected file?: Instance;

    @consume({context: FailureContext, subscribe: true})
    @state()
    protected failure?: ThermalFileFailure;

    @consume({context: recordingContext, subscribe: true})
    @state()
    protected recording: boolean = false;

    

    connectedCallback(): void {

        super.connectedCallback();

        this.hookCallbacks();

    }



    protected hookCallbacks() {

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