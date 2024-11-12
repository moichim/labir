import { Instance, PlaybackSpeeds, SlotNumber, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AbstractFileProvider } from "./AbstractFileProvider";
import { fileProviderContext } from "./context/FileContexts";

@customElement("file-provider")
export class FileProviderElement extends AbstractFileProvider {

    @provide({ context: fileProviderContext })
    protected providedSelf: FileProviderElement = this;

    @property({
        type: Boolean, 
        reflect: true, 
        attribute: true,
        converter: {
            fromAttribute( value: string ) {
                return value === "true";
            },
            toAttribute( value: boolean|undefined ) {
                if ( value === true ) {
                    return "true";
                }
                return "false";
            }
        }

    })
    public batch?: boolean;

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
    public visible?: string;

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

        console.log( this.batch );

        const result = this.batch === true
            ? this.loadAsync()
            : this.loadSync();

        return result;

    }

    protected async loadSync() {

        this.log( "loading sync" );

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

                        this.handleLoaded(instance);

                        instance.group.registry.postLoadedProcessing();

                        this.loading = false;

                        this.recieveInstance(instance);

                        return instance;

                    });

                }
                // Failure
                else {

                    // Assign failure
                    this.failure = result as ThermalFileFailure;

                    // Call all callbacks
                    this.onFailure.call(this.failure);

                    this.loading = false;

                    return result;
                }
            });

        return value;

    }

    protected loadAsync() {

        this.log( "loading async" );

        this.loading = true;

        // Trigger all callbacks
        this.onLoadingStart.call();

        const result = this.registry.registerRequest(
            this.thermal,
            this.visible,
            this.group,
            async result => {
                if ( result instanceof Instance ) {

                    this.file = result;
        
                    this.onSuccess.call(result);
        
                    this.handleLoaded(result);
        
                    this.loading = false;
        
                    this.recieveInstance(result);
        
                } else if ( result instanceof ThermalFileFailure ) {
        
                    this.failure = result as ThermalFileFailure;
        
                    this.onFailure.call(this.failure);
        
                    this.loading = false;
        
                }
            }
        )

        return result;

    }

    public async asyncLoadCallback(
        result: Instance|ThermalFileFailure
    ) {
        if ( result instanceof Instance ) {

            this.file = result;

            this.onSuccess.call(result);

            this.handleLoaded(result);

            this.loading = false;

            this.recieveInstance(result);

        } else if ( result instanceof ThermalFileFailure ) {

            this.failure = result as ThermalFileFailure;

            this.onFailure.call(this.failure);

            this.loading = false;

        }
    }

    protected createInitialAnalysis(
        instance: Instance,
        index: number,
        value?: string
    ) {

        if (value !== undefined && value.trim().length > 0) {
            const analysis = instance.slots.createFromSerialized(value, index);
            analysis?.setSelected(false, true);
        }

    }


    /**
     * Initialise slots & their listeners
     */
    protected handleLoaded(
        instance: Instance
    ) {



        // listen to changes
        instance.slots.onSlot1Serialize.set(this.UUID, value => this.analysis1 = value);
        instance.slots.onSlot2Serialize.set(this.UUID, value => this.analysis2 = value);
        instance.slots.onSlot3Serialize.set(this.UUID, value => this.analysis3 = value);
        instance.slots.onSlot4Serialize.set(this.UUID, value => this.analysis4 = value);
        instance.slots.onSlot5Serialize.set(this.UUID, value => this.analysis5 = value);
        instance.slots.onSlot6Serialize.set(this.UUID, value => this.analysis6 = value);
        instance.slots.onSlot7Serialize.set(this.UUID, value => this.analysis7 = value);

        // Create the initial analysis
        this.createInitialAnalysis(instance, 1, this.analysis1);
        this.createInitialAnalysis(instance, 2, this.analysis2);
        this.createInitialAnalysis(instance, 3, this.analysis3);
        this.createInitialAnalysis(instance, 4, this.analysis4);
        this.createInitialAnalysis(instance, 5, this.analysis5);
        this.createInitialAnalysis(instance, 6, this.analysis6);
        this.createInitialAnalysis(instance, 7, this.analysis7);

    }


    private assignAppropriateField(field: number, value?: string) {
        if (field === 1) this.analysis1 = value;
        else if (field === 2) this.analysis2 = value;
        else if (field === 3) this.analysis3 = value;
        else if (field === 4) this.analysis4 = value;
        else if (field === 5) this.analysis5 = value;
        else if (field === 6) this.analysis6 = value;
        else if (field === 7) this.analysis7 = value;
    }


    /** @deprecated This should be moved in load!! Callbacks need not to be registered here. */
    connectedCallback(): void {

        super.connectedCallback();

        this.load();

    }


    public updated(_changedProperties: PropertyValues<FileProviderElement>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("thermal")) {
            const oldUrl = _changedProperties.get("thermal");

            if (oldUrl) {
                this.group.files.removeFile(oldUrl);
                this.file = undefined;

                this.load();

            }

        }


        this.handleAnalysisUpdate(1, _changedProperties);
        this.handleAnalysisUpdate(2, _changedProperties);
        this.handleAnalysisUpdate(3, _changedProperties);
        this.handleAnalysisUpdate(4, _changedProperties);
        this.handleAnalysisUpdate(5, _changedProperties);
        this.handleAnalysisUpdate(6, _changedProperties);
        this.handleAnalysisUpdate(7, _changedProperties);

    }


    protected handleAnalysisUpdate(
        index: SlotNumber,
        _changedProperties: PropertyValues<FileProviderElement>
    ) {

        const field = `analysis${index}` as keyof FileProviderElement;


        if (_changedProperties.has(field)) {

            const oldValue = _changedProperties.get(field) as string | undefined | null;
            const newValue = this[field] as string | undefined | null;


            if (this.file) {

                const slot = this.file.slots.getSlot(index);

                // If slot had not exist before and sould create, do so
                if (
                    slot === undefined
                    && newValue
                    && newValue.trim().length > 0
                    && (
                        !oldValue
                        || oldValue?.trim().length > 0
                    )
                ) {
                    const analysis = this.file.slots.createFromSerialized(newValue, index);
                    analysis?.setSelected(false, true);
                }
                // If the slot ceased to exist
                else if (
                    slot !== undefined
                    && oldValue
                    && (!newValue
                        || newValue?.trim().length === 0
                    )
                ) {
                    this.file.slots.removeSlotAndAnalysis(index);
                } else if (slot && newValue) {
                    slot?.recieveSerialized(newValue);
                }

            }

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