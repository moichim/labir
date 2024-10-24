import { AbstractAnalysis, CallbacksManager, Instance, ThermalFileFailure, ThermalFileReader } from "@labir/core";
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
    protected analysis1Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis2?: string;
    protected analysis2Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis3?: string;
    protected analysis3Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis4?: string;
    protected analysis4Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis5?: string;
    protected analysis5Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis6?: string;
    protected analysis6Object?: AbstractAnalysis;

    @property({ type: String, reflect: true, attribute: true })
    public analysis7?: string;
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

        this.handleAnalysisNew(instance, "analysis1", this.analysis1);
        this.handleAnalysisNew(instance, "analysis2", this.analysis2);
        this.handleAnalysisNew(instance, "analysis3", this.analysis3);
        this.handleAnalysisNew(instance, "analysis4", this.analysis4);
        this.handleAnalysisNew(instance, "analysis5", this.analysis5);
        this.handleAnalysisNew(instance, "analysis6", this.analysis6);
        this.handleAnalysisNew(instance, "analysis7", this.analysis7);

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

    protected handleAnalysisNew(
        instance: Instance,
        key: "analysis1"|"analysis2"|"analysis3"|"analysis4"|"analysis5"|"analysis6"|"analysis7",
        value?: string,
    ): AbstractAnalysis | undefined {

        if (value === undefined) {
            return;
        }

        const objectKey = key + "Object" as keyof ThisType<FileProviderElement>;

        let analysis = this[objectKey] as AbstractAnalysis | undefined;

        if (!analysis) {
            analysis = instance.analysis.layers.createFromSerialized(value);
            if (analysis) {
                analysis.setSelected()
            }
        }

        if (analysis === undefined) {
            return;
        }

        analysis.onSerialize.set(this.UUID, value => {
            this[key] = value;
        });


        return analysis;

    }


    /** @deprecated This should be moved in load!! Callbacks need not to be registered here. */
    connectedCallback(): void {

        super.connectedCallback();

        this.load();

    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("thermal")) {
            const oldUrl = _changedProperties.get("thermal");

            if (oldUrl) {
                this.group.files.removeFile(oldUrl);
                this.file = undefined;

                this.load();

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