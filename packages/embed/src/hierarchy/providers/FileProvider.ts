import { AbstractAnalysis, CallbacksManager, Instance, ThermalFileFailure, ThermalFileReader, SlotNumber } from "@labir/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ParsedAnalysis, ParsedAreaAnalysis, ParsedPointAnalysis } from "../../controls/file/analysis/presets/analysis";
import { AbstractFileProvider } from "./AbstractFileProvider";
import { fileProviderContext } from "./context/FileContexts";

@customElement("file-provider")
export class FileProviderElement extends AbstractFileProvider {

    @provide({ context: fileProviderContext })
    protected providedSelf: FileProviderElement = this;

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


    @property({ type: String, reflect: true, attribute: true })
    public analysis1?: string;

    @property({ type: String, reflect: true, attribute: true })
    public analysis2?: string;

    @property({ type: String, reflect: true, attribute: true })
    public analysis3?: string;

    @property({ type: String, reflect: true, attribute: true })
    public analysis4?: string;

    @property({ type: String, reflect: true, attribute: true })
    public analysis5?: string;

    @property({ type: String, reflect: true, attribute: true })
    public analysis6?: string;

    @property({ type: String, reflect: true, attribute: true })
    public analysis7?: string;

    /** Load the file and call all necessary callbacks */
    protected async load() {

        this.loading = true;

        // Trigger all callbacks
        this.onLoadingStart.call();

        // Load the file and create the instance
        const value = await this.registry.service.loadFile(this.thermal, this.visible)
            .then(async (result) => {

                // Success
                if (result instanceof ThermalFileReader) {

                    // Create the instance
                    return await result.createInstance(this.group).then(instance => {

                        // Assign the instance
                        this.file = instance;

                        // Call all callbacks
                        this.onSuccess.call(instance);

                        // Clear the callbacks to free the memory
                        this.clearCallbacks();

                        this.handleLoaded(instance);

                        instance.group.registry.postLoadedProcessing();

                        this.loading = false;

                        return instance;

                    });

                }
                // Failure
                else {
                    // Assign failure
                    this.failure = result as ThermalFileFailure;
                    // Call all callbacks

                    this.onFailure.call(this.failure);
                    // Clear the callbacks to free the memory
                    this.clearCallbacks();

                    this.loading = false;

                    return result;
                }
            }).then(result => {
                if (result instanceof Instance) {

                    this.recieveInstance(result);


                } else {
                    this.failure = result as ThermalFileFailure;
                }
            });;

        return value;

    }

    protected createInitialAnalysis(
        instance: Instance,
        index: number,
        value?: string
    ) {

        if ( value !== undefined && value.trim().length > 0 ) {
            instance.slots.createFromSerialized( value, index );
        }

    }

    protected handleLoaded(
        instance: Instance
    ) {

        this.createInitialAnalysis( instance, 1, this.analysis1 );
        this.createInitialAnalysis( instance, 2, this.analysis2 );
        this.createInitialAnalysis( instance, 3, this.analysis3 );
        this.createInitialAnalysis( instance, 4, this.analysis4 );
        this.createInitialAnalysis( instance, 5, this.analysis5 );
        this.createInitialAnalysis( instance, 6, this.analysis6 );
        this.createInitialAnalysis( instance, 7, this.analysis7 );

        // listen to changes
        instance.slots.onSlot1.set( this.UUID, value => this.analysis1 = value );
        instance.slots.onSlot2.set( this.UUID, value => this.analysis2 = value );
        instance.slots.onSlot3.set( this.UUID, value => this.analysis3 = value );
        instance.slots.onSlot4.set( this.UUID, value => this.analysis4 = value );
        instance.slots.onSlot5.set( this.UUID, value => this.analysis5 = value );
        instance.slots.onSlot6.set( this.UUID, value => this.analysis6 = value );
        instance.slots.onSlot7.set( this.UUID, value => this.analysis7 = value );

        

        

        instance.slots.onSlotInit.set( this.UUID, (number, slot) => {
            
            this.assignAppropriateField(number, slot.serialized);
            
            console.log( slot );

            slot.onSerialize.set( this.UUID, value => {
                console.log( value );
                // this.assignAppropriateField( number, value )
            } );

        } );

        


    }


    protected assignAppropriateField( field: number, value?: string ) {
        if ( field === 1 ) this.analysis1 = value;
        else if ( field === 2 ) this.analysis2 = value;
        else if ( field === 3 ) this.analysis3 = value;
        else if ( field === 4 ) this.analysis4 = value;
        else if ( field === 5 ) this.analysis5 = value;
        else if ( field === 6 ) this.analysis6 = value;
        else if ( field === 7 ) this.analysis7 = value;
    }


    /** @deprecated This should be moved in load!! Callbacks need not to be registered here. */
    connectedCallback(): void {

        super.connectedCallback();

        this.load();

    }


    protected updated(_changedProperties: PropertyValues<FileProviderElement>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("thermal")) {
            const oldUrl = _changedProperties.get("thermal");

            if (oldUrl) {
                this.group.files.removeFile(oldUrl);
                this.file = undefined;

                this.load();

            }

        }


        /*
        this.handleAnalysisUpdate( 1, _changedProperties );
        this.handleAnalysisUpdate( 2, _changedProperties );
        this.handleAnalysisUpdate( 3, _changedProperties );
        this.handleAnalysisUpdate( 4, _changedProperties );
        this.handleAnalysisUpdate( 5, _changedProperties );
        this.handleAnalysisUpdate( 6, _changedProperties );
        this.handleAnalysisUpdate( 7, _changedProperties );
        */

    }

    protected handleAnalysisUpdate(
        index: SlotNumber,
        _changedProperties: PropertyValues<FileProviderElement>
    ) {

        const field = `analysis${index}` as keyof FileProviderElement;
        const keyValue = this[ `analysis${index}Key` as keyof FileProviderElement ] as string|undefined;


        if (_changedProperties.has(field)) {

            const oldValue = _changedProperties.get(field) as string|undefined|null;
            const newValue = this[field] as string|undefined|null;


            if ( this.file ) {

                const slot = this.file.slots.getSlot( index );

                // If slot had not exist before and sould create, do so
                if ( 
                    slot === undefined 
                    && newValue 
                    && newValue.trim().length > 0
                    && (
                        ! oldValue
                        || oldValue?.trim().length > 0
                    )
                ) {
                    this.file.slots.createFromSerialized( newValue, index );
                }

                else if (
                    slot !== undefined
                    && oldValue
                    && ! newValue
                    && newValue?.trim().length === 0
                ) {
                    this.file.slots.removeSlotAndAnalysis( index );
                } else if ( slot && newValue ) {
                    slot?.recieveSerialized( newValue );
                }

            }


            /*

            if (this.file) {

                // Create new one if not existed yet
                if (!oldValue && newValue) {
                    this.file.slots.createFromSerialized(newValue, index);
                }

                // Delete the existing
                else if (
                    oldValue
                    && (newValue === undefined || newValue === null || newValue.trim().length === 0)
                    && keyValue
                ) {
                    this.file.slots.removeSlotAndAnalysis(index);
                } 
                // Update the existing
                else if ( keyValue ) {
                    
                    const slot = this.file.slots.getSlot( index );

                    if ( newValue && slot && newValue !== slot.serialized ) {
                        slot.analysis.recievedSerialized( newValue );
                    }

                }

            }

            */

        }

    }






    /** Rendering */

    protected render(): unknown {
        return html`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `;
    }

}