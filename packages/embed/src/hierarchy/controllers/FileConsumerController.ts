import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { BaseElement } from "../BaseElement";
import { FileProviderController } from "./FileController";

export abstract class FileConsumerController extends BaseElement {

    protected controller!: FileProviderController;

    protected abstract onInstanceChange( instance?: Instance ): void;

    protected abstract onFailure( failure?: ThermalFileFailure ): void;

    connectedCallback(): void {
        super.connectedCallback();

        this.controller.registerConsumer( 
            this, 
            this.onInstanceChange.bind(this),
            this.onFailure.bind(this)
        );

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        
        this.controller.unregisterConsumer( this );
        
    }


}