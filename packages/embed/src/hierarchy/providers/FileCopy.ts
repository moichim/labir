import { Instance } from "@labirthermal/core";
import { consume, provide } from "@lit/context";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { AbstractFileProvider } from "../abstraction/AbstractFileProvider";
import { fileContext, fileProviderContext } from "./context/FileContexts";
import { GroupProviderElement } from "./GroupProvider";
import { RegistryProviderElement } from "./RegistryProvider";
import { ThermalGroup, ThermalRegistry } from "@labirthermal/core";

@customElement("file-copy")
export class FileCopyElement extends AbstractFileProvider {

    @provide({ context: fileProviderContext })
    protected providedSelf: FileCopyElement = this;

    @state()
    @consume({ context: fileContext, subscribe: true })
    private originalFile?: Instance;

    private registryRef: Ref<RegistryProviderElement> = createRef();
    private groupRef: Ref<GroupProviderElement> = createRef();

    private get slug() { return "file-copy__" + this.UUID };

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        if (this.originalFile && this.groupRef.value && this.registryRef.value) {

            const group = this.groupRef.value!.group;
            const registry = this.registryRef.value!.registry;

            this.processFileCopy(this.originalFile!, group, registry);

        }


    }

    private async processFileCopy(
        originalFile: Instance,
        localGroup: ThermalGroup,
        localRegistry: ThermalRegistry
    ) {


        const originalGroup = originalFile.group;
        const originalRegistry = originalGroup.registry;

        this.log("processing file copy", {
            file: this.originalFile,
            groupRef: this.groupRef.value,
            registryRef: this.registryRef.value,
        });

        // Migrate the registry properties
        localRegistry.palette.setPalette(originalRegistry.palette.value);
        localRegistry.range.imposeRange(originalRegistry.range.value);

        // Create the copy of the file

        const copiedFile = await originalFile.reader.createInstance(localGroup);

        copiedFile.setPreferWebGl( false );

        localRegistry.postLoadedProcessing();

        this.recieveInstance(copiedFile);

        copiedFile.switchToCPURenderer();

    }

    static styles?: CSSResultGroup | undefined = css`
    
        :host,
        registry-provider,
        group-provider {
            display: contents;
        }

    `;


    protected render(): unknown {
        return html`<registry-provider
            ${ref(this.registryRef)}
            slug=${this.slug}
            autoclear="true"
        >
            <group-provider
                ${ref(this.groupRef)}
                slug=${this.slug}
                autoclear="true"
            >
                ${this.ready ? html`<slot></slot>` : nothing}
            </group-provider>
        </registry-provider>`;
    }



}