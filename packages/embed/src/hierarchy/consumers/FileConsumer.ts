import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { consume } from "@lit/context";
import { state } from "lit/decorators.js";
import { AbstractFileProvider } from "../abstraction/AbstractFileProvider";
import { FileContextProviderContext, FileProviderController } from "../controllers/FileController";
import { FailureContext, fileContext, fileProviderContext, loadingContext } from "../providers/context/FileContexts";
import { GroupConsumer } from "./GroupConsumer";

export abstract class FileConsumer extends GroupConsumer {

    @consume({ context: fileProviderContext, subscribe: true })
    @state()
    protected parentFileProviderElement?: AbstractFileProvider;

    public getUUID() {
        return `${this.UUID}__internal_callback`;
    }

    protected get internalCallbackUUID() {
        return `${this.UUID}__internal_callback`;
    }

    @consume({ context: loadingContext, subscribe: true })
    @state()
    protected loading: boolean = true;

    @consume({ context: fileContext, subscribe: true })
    @state()
    protected file?: Instance;

    @consume({ context: FailureContext, subscribe: true })
    @state()
    protected failure?: ThermalFileFailure;

    @consume( { context: FileContextProviderContext, subscribe: true } )
    protected controller?: FileProviderController;



    connectedCallback(): void {

        super.connectedCallback();

        if ( this.controller ) {
            this.controller.registerConsumer(
                this,
                instance => {
                    if ( instance ) {
                        this.onInstanceCreated( instance );
                    }
                },
                failure => {}
            )
        }

        // this.hookCallbacks();

    }



    protected hookCallbacks() {

        if (this.parentFileProviderElement) {

            if ( this.parentFileProviderElement.file ) {
                this.onInstanceCreated( this.parentFileProviderElement.file );
            }

            // INTERNAL CALLBACKS - ASSIGNEMENT TO LOCAL PROPERTIES

            this.parentFileProviderElement.onSuccess.set(
                this.getUUID(),
                () => {
                    this.loading = false;
                }
            );

            this.parentFileProviderElement.onFailure.set(
                this.getUUID(),
                () => {
                    this.loading = false;
                }
            );


            // IMPLEMENTED CALLBACKS

            this.parentFileProviderElement.onSuccess.set(
                this.UUID,
                this.onInstanceCreated.bind(this)
            );

            this.parentFileProviderElement.onFailure.set(
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