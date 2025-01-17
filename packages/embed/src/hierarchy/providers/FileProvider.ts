import { Instance, PlaybackSpeeds, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { provide } from "@lit/context";
import { PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AbstractFileProvider } from "../abstraction/AbstractFileProvider";
import { fileMsContext, fileProviderContext, playbackSpeedContext, playingContext, recordingContext } from "./context/FileContexts";

@customElement("file-provider")
export class FileProviderElement extends AbstractFileProvider {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    @property({ type: Number, reflect: true, attribute: true })
    @provide({ context: fileMsContext })
    public ms: number = 0;

    @property({ type: Number, reflect: true, attribute: true })
    @provide({ context: playbackSpeedContext })
    public speed?: PlaybackSpeeds;

    @provide({ context: fileProviderContext })
    protected providedSelf: FileProviderElement = this;

    @property({ type: String, reflect: true, attribute: true })
    @provide({ context: recordingContext })
    public recording: boolean = false;

    @property({ type: String, reflect: true, attribute: true })
    @provide({ context: playingContext })
    public playing: boolean = false;

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
    public async load() {

        const result = this.batch === true
            ? this.loadAsync()
            : this.loadSync();

        return result;

    }

    public async loadSync() {

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

    public loadAsync() {

        this.loading = true;

        // Trigger all callbacks
        this.onLoadingStart.call();

        const result = this.registry.batch.request(
            this.thermal,
            this.visible,
            this.group,
            this.asyncLoadCallback.bind(this)
            
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


        

    }

    

}