import { Instance, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { GroupConsumer } from "../consumers/GroupConsumer";

@customElement("file-provider")
export class FileProviderElement extends GroupConsumer {

    @state()
    reader?: ThermalFileReader;

    @state()
    instance?: Instance;

    canvasContainer: Ref<HTMLDivElement> = createRef();

    @state()
    error?: ThermalFileFailure;

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


    connectedCallback(): void {

        super.connectedCallback();

        this.registry.service.loadFile( this.thermal, this.visible ).then( result => {
            if ( result instanceof ThermalFileReader ) {
                // Assign reader
                this.reader = result;

                // Create the instance
                this.reader.createInstance( this.group ).then( instance => {
                    // Assign the instance
                    this.instance = instance;

                    // Bind the instance to the DOM
                    if ( this.canvasContainer.value ) {
                        this.instance.mountToDom( this.canvasContainer.value );
                        this.instance.draw();
                    }

                    // Call all callbacks
                    this.callbacks.success.forEach( fn => fn( instance ) );

                    // Clear the callbacks to free the memory
                    this.clearCallbacks();


                } );

            } else if ( result instanceof ThermalFileFailure ) {
                // Assign failure
                this.error = result;
                // Call all callbacks
                this.callbacks.failure.forEach( fn => fn( result ) );
                // Clear the callbacks to free the memory
                this.clearCallbacks();
            }
        } );
        
    }

    protected readonly callbacks: {
        success: Map<string, ( instance: Instance ) => void>,
        failure: Map<string, ( error: ThermalFileFailure) => void>
    } = {
        success: new Map,
        failure: new Map
    }

    public registerSuccessCallback( 
        id: string,
        fn: ( instance: Instance ) => void
     ) {
        this.callbacks.success.set( id, fn );
     }

     public registerFailureCallback(
        id: string,
        fn: ( error: ThermalFileFailure ) => void
     ) {
        this.callbacks.failure.set( id, fn );
     }

     private clearCallbacks() {
        this.callbacks.success.clear();
        this.callbacks.failure.clear();
     }

    attributeChangedCallback(
        name: string, 
        _old: string | null, 
        value: string | null
    ): void {

        super.attributeChangedCallback( name, _old, value );

        this.log( name, _old, value );

    }

    protected render(): unknown {
        return html`
            <div ${ref(this.canvasContainer)} id="canvas-container"></div>
            <slot></slot>
        
        `;
    }

}