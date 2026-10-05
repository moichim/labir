import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { consume } from "@lit/context";
import { state } from "lit/decorators.js";
import type { FileController } from "../controllers/FileController";
import { fileControllerContext } from "../controllers/FileController";
import { fileContext, fileFailureContext, fileRecordingContext, loadingContext } from "../providers/context/FileContexts";
import { AbstractGroupConsumer } from "./AbstractGroupConsumer";

export abstract class AbstractFileConsumer extends AbstractGroupConsumer {

    @consume({ context: fileControllerContext, subscribe: true })
    public fileController!: FileController;

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

    @consume({ context: fileFailureContext, subscribe: true })
    @state()
    protected failure?: ThermalFileFailure;

    @consume({ context: fileRecordingContext, subscribe: true })
    @state()
    protected recording: boolean = false;



    connectedCallback(): void {

        super.connectedCallback();

        this.hookCallbacks();

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        if ( this.fileController ) {
            this.fileController.onSuccess.delete(this.UUID);
            this.fileController.onFailure.delete(this.UUID);
        }
    }



    protected hookCallbacks() {

        if ( this.fileController ) {

            this.fileController.onSuccess.set(
                this.UUID,
                instance => {
                    this.onInstanceCreated(instance);
                    this.loading = false;
                }
            );

            this.fileController.onFailure.set(
                this.UUID,
                error => {
                    this.onFailure(error);
                    this.loading = false;
                }
            );

        } else {
            throw new Error("Tento komponent není v souboru!");
        }
    }

    public abstract onInstanceCreated(instance: Instance): void;

    public abstract onFailure(error: ThermalFileFailure): void;

}