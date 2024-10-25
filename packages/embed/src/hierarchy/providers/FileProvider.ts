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
    protected analysis1Key?: string;
    protected analysis1Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis2?: string;
    protected analysis2Key?: string;

    @property({ type: String, reflect: true, attribute: true })
    public analysis3?: string;
    protected analysis3Key?: string;
    protected analysis3Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis4?: string;
    protected analysis4Key?: string;
    protected analysis4Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis5?: string;
    protected analysis5Key?: string;
    protected analysis5Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis6?: string;
    protected analysis6Key?: string;
    protected analysis6Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis7?: string;
    protected analysis7Key?: string;
    protected analysis7Object?: AbstractAnalysis;

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

    protected handleLoaded(
        instance: Instance
    ) {

        this.handleAnalysisField(instance, 1);
        this.handleAnalysisField(instance, 2);
        this.handleAnalysisField(instance, 3);
        this.handleAnalysisField(instance, 4);
        this.handleAnalysisField(instance, 5);
        this.handleAnalysisField(instance, 6);
        this.handleAnalysisField(instance, 7);

    }


    protected handleAnalysisField(
        instance: Instance,
        number: SlotNumber
    ) {

        const serializedField = `analysis${number}` as keyof FileProviderElement;
        const keyField = `analysis${number}Key` as keyof FileProviderElement;


        instance.analysis.layers[`onSlot${number}`].set(this.UUID, analysis => {
            console.log("on slot 7");
            this[serializedField] = analysis?.serialized;
            this[keyField] = analysis?.key;

            if (analysis) {
                // Update the value to the component
                analysis.onSerialize.set(this.UUID, value => {
                    this[serializedField] = value;
                });

                // Remove self once delted
                analysis.layers.onRemove.set(this.UUID + analysis.key, (key) => {

                    console.log(key);

                    if (key === this.analysis7Key) {
                        this[keyField] = analysis?.key;
                        this[serializedField] = undefined;
                    }
                });
            }

        });



        // Initial serialized value

        const initialSerializedValue = this[serializedField] as string | null | undefined;

        if (initialSerializedValue) {
            const analysis = instance.analysis.layers.createFromSerialized(
                initialSerializedValue,
                number
            );
            if (analysis) {

                const field = this[keyField];
                this[keyField] = analysis.key as string;
            }
        }

    }


    protected handleAnalysis(
        instance: Instance,
        analysis?: ParsedAnalysis
    ): void {

        if (analysis === undefined) {
            return;
        }

        let obj: AbstractAnalysis | undefined = undefined;

        if (analysis.type === "point") {
            const point = analysis as ParsedPointAnalysis
            obj = instance.analysis.layers.placePointAt(point.name, point.top, point.left, point.color);

            if (point.avg) {
                obj.graph.setAvgActivation(true);
            }

        } else {

            const area = analysis as ParsedAreaAnalysis;

            if (area.type === "rectangle") {
                obj = instance.analysis.layers.placeRectAt(
                    area.name,
                    area.top,
                    area.left,
                    area.width,
                    area.height,
                    area.color
                );
            } else if (area.type === "ellipsis") {
                obj = instance.analysis.layers.placeEllipsisAt(
                    area.name,
                    area.top,
                    area.left,
                    area.width,
                    area.height,
                    area.color
                );
            }

            obj?.graph.setAvgActivation(area.avg);
            obj?.graph.setMinActivation(area.min);
            obj?.graph.setMaxActivation(area.max);


        }

        obj?.setSelected();

        this.log(obj);

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
        if (_changedProperties.has("analysis1")) {

            const oldValue = _changedProperties.get("analysis1");
            const newValue = this.analysis1;

            if (this.file) {

                // Create new one if not existed yet
                if (!oldValue && newValue) {
                    this.file.analysis.layers.createFromSerialized(newValue, 1);
                }

                // Delete the existing
                else if (
                    oldValue
                    && (newValue === undefined || newValue === null || newValue.trim().length === 0)
                    && this.analysis1Key
                ) {
                    this.file.analysis.layers.removeAnalysis(this.analysis1Key);
                } else if ( this.analysis1Key ) {
                    
                    const oldAnalysis = this.file.analysis.layers.get( this.analysis1Key );

                    if ( newValue && oldAnalysis && newValue !== oldAnalysis.serialized ) {
                        oldAnalysis.recievedSerialized( newValue );
                    }

                }

            }

        }
        */

        this.handleAnalysisUpdate( 1, _changedProperties );
        this.handleAnalysisUpdate( 2, _changedProperties );
        this.handleAnalysisUpdate( 3, _changedProperties );
        this.handleAnalysisUpdate( 4, _changedProperties );
        this.handleAnalysisUpdate( 5, _changedProperties );
        this.handleAnalysisUpdate( 6, _changedProperties );
        this.handleAnalysisUpdate( 7, _changedProperties );

    }

    protected handleAnalysisUpdate(
        index: SlotNumber,
        _changedProperties: PropertyValues<FileProviderElement>
    ) {

        const field = `analysis${index}` as keyof FileProviderElement;
        const keyValue = this[ `analysis${index}Key` as keyof FileProviderElement ] as string|undefined;


        if (_changedProperties.has(field)) {

            const oldValue = _changedProperties.get(field);
            const newValue = this[field] as string|undefined|null;

            if (this.file) {

                // Create new one if not existed yet
                if (!oldValue && newValue) {
                    this.file.analysis.layers.createFromSerialized(newValue, index);
                }

                // Delete the existing
                else if (
                    oldValue
                    && (newValue === undefined || newValue === null || newValue.trim().length === 0)
                    && keyValue
                ) {
                    this.file.analysis.layers.removeAnalysis(keyValue);
                } else if ( keyValue ) {
                    
                    const oldAnalysis = this.file.analysis.layers.get( keyValue );

                    if ( newValue && oldAnalysis && newValue !== oldAnalysis.serialized ) {
                        oldAnalysis.recievedSerialized( newValue );
                    }

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