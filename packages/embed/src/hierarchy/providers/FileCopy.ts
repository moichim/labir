import { AvailableThermalPalette, Instance, PlaybackSpeeds, ThermalFileFailure, ThermalGroup, ThermalManager, ThermalRangeOrUndefined, ThermalRegistry } from "@labirthermal/core";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { AbstractThermalElement } from "../AbstractThermalElement";
import { FileController, IElementWithFileController } from "../controllers/FileController";
import { GroupController, IElementWithGroupController } from "../controllers/GroupController";
import { IElementWithManagerController, ManagerController } from "../controllers/ManagerController";
import { IElementWithRegistryController, RegistryController } from "../controllers/RegistryController";

/** This element creates a completely isolated hierarchy tree for the given original file. The file is copied and all contexts are exposed independently of the original context. */
export class FileCopyElement extends AbstractThermalElement implements IElementWithManagerController, IElementWithRegistryController, IElementWithGroupController, IElementWithFileController {

    public static properties = {
        ...ManagerController.HOST_PROPERTIES,
        ...RegistryController.HOST_PROPERTIES,
        ...GroupController.HOST_PROPERTIES,
        ...FileController.HOST_PROPERTIES
    };

    @property({
        type: Object,
        attribute: false
    })
    public originalFile!: Instance;

    /** Mirror the analyses of the original file to the copy. Changing the value at runtime copies or clears the analyses. */
    @property({
        type: Boolean,
        attribute: false
    })
    public withAnalyses: boolean = true;

    managerSlug!: string;
    managerObject!: ThermalManager;
    managerController: ManagerController = new ManagerController(this);
    palette!: AvailableThermalPalette;
    advancedPalettes: boolean = true;
    smoothThermograms: boolean = false;
    smoothGraph: boolean = false;
    tool: string = "edit";

    registrySlug!: string;
    registryObject!: ThermalRegistry;
    registryController: RegistryController = new RegistryController(this);
    opacity: number = 1;
    min?: number | undefined;
    max?: number | undefined;
    from?: number | undefined;
    to?: number | undefined;
    highlight?: ThermalRangeOrUndefined;
    loading: boolean = false;

    groupSlug!: string;
    groupObject!: ThermalGroup;
    groupController: GroupController = new GroupController(this);
    autoclearGroup: boolean = true;

    fileController: FileController = new FileController(this);
    file?: Instance | undefined;
    failure?: ThermalFileFailure | undefined;
    ms: number = 0;
    playbackSpeed: PlaybackSpeeds = 1;
    analysis1?: string | undefined;
    analysis2?: string | undefined;
    analysis3?: string | undefined;
    analysis4?: string | undefined;
    analysis5?: string | undefined;
    analysis6?: string | undefined;
    analysis7?: string | undefined;
    autoHighlight: boolean = false;

    @state()
    private _canRenderChildren: boolean = false;





    private _slugBase!: string;
    private getSlugManager(): string { return this._slugBase + "__copy-manager"; }
    private getSlugRegistry(): string { return this._slugBase + "__copy-registry"; }
    private getSlugGroup(): string { return this._slugBase + "__copy-group"; }

    connectedCallback(): void {

        const originalFile = this.originalFile;

        const slugBase = originalFile.thermalUrl + "__" + this.UUID.substring(0, 6);
        this._slugBase = slugBase;

        // Force override all slugs
        this.setAttribute("manager-slug", this.getSlugManager());
        this.setAttribute("group-slug", this.getSlugGroup());
        this.setAttribute("registry-slug", this.getSlugRegistry());

        // Sync manager properties
        this.palette = this.originalFile.group.registry.manager.palette.value;
        this.opacity = this.originalFile.group.registry.opacity.value;

        // Sync registry and group properties

        // Sync file properties
        this.ms = originalFile.timeline.currentMs;
        if (this.withAnalyses) {
            this.copyAnalysesFromParent();
        }

        // Now we shall create all internal objects based on the original file
        super.connectedCallback();

        this.originalFile.reader
            .createInstance(this.groupObject)
            .then(copiedInstance => {

                if (! this.isConnected) return;

                this.registryObject.postLoadedProcessing();
                this.fileController.receiveInstance(copiedInstance);

                const range = originalFile.group.registry.range.value;
                if ( range ) this.registryObject?.range.imposeRange( range );

                this._canRenderChildren = true;

            });

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this._canRenderChildren = false;
        this.fileController.removeInstance();
        this.registryController.removeGroup(this.groupObject);
        this.managerObject.removeRegistry(this.registryObject.id);
        window.Thermal.managers.delete(this.managerSlug);
    }

    /** Take the current analyses of the original file. The file controller propagates them to the copied file. */
    public copyAnalysesFromParent(): void {
        const slots = this.originalFile.slots;
        this.analysis1 = slots.getSlot(1)?.serialized;
        this.analysis2 = slots.getSlot(2)?.serialized;
        this.analysis3 = slots.getSlot(3)?.serialized;
        this.analysis4 = slots.getSlot(4)?.serialized;
        this.analysis5 = slots.getSlot(5)?.serialized;
        this.analysis6 = slots.getSlot(6)?.serialized;
        this.analysis7 = slots.getSlot(7)?.serialized;
    }

    /** Remove all analyses from the copied file. */
    public clearAnalyses(): void {
        this.analysis1 = undefined;
        this.analysis2 = undefined;
        this.analysis3 = undefined;
        this.analysis4 = undefined;
        this.analysis5 = undefined;
        this.analysis6 = undefined;
        this.analysis7 = undefined;
    }

    updated(_changedProperties: PropertyValues<FileCopyElement>): void {
        super.updated(_changedProperties);

        // Skip the initial value - the connected callback has already handled it
        if (_changedProperties.has("withAnalyses") && _changedProperties.get("withAnalyses") !== undefined) {
            if (this.withAnalyses) this.copyAnalysesFromParent();
            else this.clearAnalyses();
        }
        this.managerController.hostUpdatedWatcher(_changedProperties);
        this.registryController.hostUpdatedWatcher(_changedProperties);
        this.groupController.hostUpdatedWatcher(_changedProperties);
        this.fileController.hostUpdatedWatcher(_changedProperties);
    }

    static styles?: CSSResultGroup | undefined = css`
    
        :host,
        registry-provider,
        group-provider {
            display: contents;
        }

    `;


    protected render(): unknown {
        return html`${this._canRenderChildren ? html`<slot></slot>` : nothing}`;
    }



}