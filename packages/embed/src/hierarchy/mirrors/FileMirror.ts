import { Instance, PlaybackSpeeds, SlotNumber, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { AbstractFileProvider } from "../providers/AbstractFileProvider";
import { fileContext, fileProviderContext } from "../providers/context/FileContexts";

@customElement("file-mirror")
export class FileMirrorElement extends AbstractFileProvider {

    @provide({ context: fileProviderContext })
    protected providedSelf: FileMirrorElement = this;

    @provide({ context: fileContext })
    @property()
    public file?: Instance;

    @property({
        type: Boolean, 
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
        type: String
    })
    public thermal!: string;

    @property({
        type: String
    })
    public visible?: string;

    @property({ type: String })
    public analysis1?: string;

    @property({ type: String })
    public analysis2?: string;

    @property({ type: String })
    public analysis3?: string;

    @property({ type: String })
    public analysis4?: string;

    @property({ type: String })
    public analysis5?: string;

    @property({ type: String })
    public analysis6?: string;

    @property({ type: String })
    public analysis7?: string;

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

    }


    public updated(_changedProperties: PropertyValues<FileMirrorElement>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("thermal")) {
            const oldUrl = _changedProperties.get("thermal");

            if (oldUrl) {
                this.group.files.removeFile(oldUrl);
                this.file = undefined;

            }

        }


        this.handleAnalysisUpdate(1, _changedProperties);
        this.handleAnalysisUpdate(2, _changedProperties);
        this.handleAnalysisUpdate(3, _changedProperties);
        this.handleAnalysisUpdate(4, _changedProperties);
        this.handleAnalysisUpdate(5, _changedProperties);
        this.handleAnalysisUpdate(6, _changedProperties);
        this.handleAnalysisUpdate(7, _changedProperties);


        this.log( Array.from( _changedProperties.keys() ) );

        if ( _changedProperties.has( "file" ) ) {
            this.log( _changedProperties.get( "file" ), this.file );
            if ( this.file ) {
                this.loading = false;
                this.recieveInstance( this.file );

                setTimeout( () => this.file && this.onSuccess.call( this.file ), 0 );
            }
        }


    }


    protected handleAnalysisUpdate(
        index: SlotNumber,
        _changedProperties: PropertyValues<FileMirrorElement>
    ) {

        const field = `analysis${index}` as keyof FileMirrorElement;


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