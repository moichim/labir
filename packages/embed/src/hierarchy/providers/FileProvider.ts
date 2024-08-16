import { Instance, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FileCanvas } from "../../controls/file/FileCanvas";
import { GroupConsumer } from "../consumers/GroupConsumer";

@customElement("file-provider")
export class FileProviderElement extends GroupConsumer {

    @state()
    protected reader?: ThermalFileReader;

    @state()
    protected instance?: Instance;

    @state()
    protected loading: boolean = false;

    @state()
    protected error?: ThermalFileFailure;

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

    @state()
    protected canvasElement?: FileCanvas;

    /** Load the file and call all necessary callbacks */
    protected async load() {

        this.loading = true;

        this.log( "provider se začíná načítat" );

        // Trigger all callbacks
        this.callbacks.loading.forEach( fn => fn() );        

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
                        this.instance = instance;

                        // Call all callbacks
                        this.callbacks.success.forEach(fn => fn(instance));

                        // Clear the callbacks to free the memory
                        this.clearCallbacks();

                        instance.group.registry.postLoadedProcessing();

                        return instance;

                    });

                } 
                // Failure
                else {
                    // Assign failure
                    this.error = result as ThermalFileFailure;
                    // Call all callbacks
                    this.callbacks.failure.forEach(fn => fn(this.error!));
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

    /** Called by a child FileCanvas element */
    public bindCanvasOnMount( canvas: FileCanvas ) {
        this.canvasElement = canvas;
    }


    connectedCallback(): void {

        super.connectedCallback();


        setTimeout( this.load.bind(this), 1000 );
        // this.load();

    }

    protected readonly callbacks: {
        success: Map<string, (instance: Instance) => void>,
        failure: Map<string, (error: ThermalFileFailure) => void>,
        loading: Map<string, () => void>
    } = {
            success: new Map,
            failure: new Map,
            loading: new Map
        }

    public registerSuccessCallback(
        id: string,
        fn: (instance: Instance) => void
    ) {
        this.callbacks.success.set(id, fn);
    }

    public registerFailureCallback(
        id: string,
        fn: (error: ThermalFileFailure) => void
    ) {
        this.callbacks.failure.set(id, fn);
    }

    public registerLoadingCallback(
        id: string,
        fn: () => void
    ) {
        this.callbacks.loading.set(id, fn);
    }

    private clearCallbacks() {
        this.callbacks.success.clear();
        this.callbacks.failure.clear();
        this.callbacks.loading.clear();
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}