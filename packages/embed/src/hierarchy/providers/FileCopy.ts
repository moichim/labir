import { Instance, PlaybackSpeeds, ThermalGroup, ThermalRegistry } from "@labirthermal/core";
import { consume, provide } from "@lit/context";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { AbstractFileProvider } from "../abstraction/AbstractFileProvider";
import { fileContext, fileMsContext, fileProviderContext, playbackSpeedContext, playingContext, recordingContext } from "./context/FileContexts";
import { GroupProviderElement } from "./GroupProvider";
import { RegistryProviderElement } from "./RegistryProvider";

@customElement("file-copy")
export class FileCopyElement extends AbstractFileProvider {

    @provide({ context: fileProviderContext })
    protected providedSelf: FileCopyElement = this;

    @state()
    @consume({ context: fileContext, subscribe: true })
    private originalFile?: Instance;




    @property({ type: Number, reflect: true, attribute: true })
    @provide({ context: fileMsContext })
    public ms: number = 0;

    @property({ type: Number, reflect: true, attribute: true })
    @provide({ context: playbackSpeedContext })
    public speed?: PlaybackSpeeds = 1;


    @property({ type: String, reflect: true, attribute: true })
    @provide({ context: recordingContext })
    public recording: boolean = false;

    @property({ type: String, reflect: true, attribute: true })
    @provide({ context: playingContext })
    public playing: boolean = false;


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


    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        if (this.originalFile) {;

            this.processFileCopy(this.originalFile!);

        }


    }

    private async processFileCopy(
        originalFile: Instance
    ) {

        const originalRange = originalFile.group.registry.range.value;


        const originalGroup = originalFile.group;
        const originalRegistry = originalGroup.registry;

        // localRegistryProvider.setAttribute( "palette", originalRegistry.palette.value.toString() );

        // localRegistry.palette.setPalette( originalRegistry.palette.value );

        if ( originalRegistry.range.value ) {

            // localRegistryProvider.setAttribute( "from", originalRegistry.range.value.from.toString() );
            // localRegistryProvider.setAttribute( "to", originalRegistry.range.value.to.toString() );

            // localRegistry.range.imposeRange( originalRegistry.range.value );
            

        }

        // Migrate the registry properties
        // localRegistryProvider.palette.setPalette(originalRegistry.palette.value);
        // localRegistryProvider.range.imposeRange(originalRegistry.range.value);

        // Create the copy of the file

        const copiedFile = await originalFile.reader.createInstance(this.group);

        // copiedFile.setPreferWebGl( false );

        copiedFile.group.registry.postLoadedProcessing();


        if (  originalRange ) {
            copiedFile.group.registry.range.imposeRange( originalRange );
        }
        

        this.onSuccess.call( copiedFile );

        this.recieveInstance(copiedFile);

        

        setTimeout(() => {
            try {
                
                copiedFile.draw();
            } catch (e) {
                console.warn("[file-copy] redraw failed for copied instance", e);
            }

        }, 0);

        // copiedFile.switchToCPURenderer();

    }

    private syncSlot(index: number)
    {

        if ( this.originalFile === undefined || this.file === undefined ) {
            console.warn( "cannot sync slot for file copy, original or copy is missing" );
            return;
        }

            const originalSlot = this.originalFile.slots.getSlot(index);

            const serialized = originalSlot?.serialized;

            if ( serialized ) {
                this.file.slots.createAnalysisFromSerialized( serialized, index );
            }
            

    }


    public copyAnalysesFromParent() {

        for(  let i = 0; i < 7; i++ ) {
            this.syncSlot(i);
        }

    }

    public clearAnalyses() {
        this.file?.analysis.layers.removeAllAnalyses();
    }

    static styles?: CSSResultGroup | undefined = css`
    
        :host,
        registry-provider,
        group-provider {
            display: contents;
        }

    `;


    protected render(): unknown {
        return html`${this.ready ? html`<slot></slot>` : nothing}`;
    }



}