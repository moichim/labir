import type { ThermalManager, AvailableThermalPalette, ThermalRegistry, ThermalRangeOrUndefined, ThermalGroup, Instance, ThermalFileFailure, PlaybackSpeeds } from "@labirthermal/core";
import type { IElementWithFileController } from "../hierarchy/controllers/FileController";
import { FileController } from "../hierarchy/controllers/FileController";
import type { IElementWithGroupController } from "../hierarchy/controllers/GroupController";
import { GroupController } from "../hierarchy/controllers/GroupController";
import type { IElementWithGroupLoadController } from "../hierarchy/controllers/GroupLoadController";
import { GroupLoadController } from "../hierarchy/controllers/GroupLoadController";
import type { IElementWithManagerController} from "../hierarchy/controllers/ManagerController";
import { ManagerController } from "../hierarchy/controllers/ManagerController";
import type { IElementWithRegistryController} from "../hierarchy/controllers/RegistryController";
import { RegistryController } from "../hierarchy/controllers/RegistryController";
import { AbstractApp } from "./AbstractApp";
import type { PropertyValues } from "lit";
import { css, html } from "lit";
import { provide } from "@lit/context";
import type { IElementWithGroupListingController } from "../hierarchy/controllers/GroupListingController";
import { GroupListingController, GroupOrderby, GroupOrdering } from "../hierarchy/controllers/GroupListingController";

import { pngExportFsContext, pngExportFsSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../hierarchy/providers/context/pngExportContext";

export class ThermalGroupAppElement
    extends AbstractApp
    implements
    IElementWithManagerController,
    IElementWithRegistryController,
    IElementWithGroupController,
    IElementWithFileController,
    IElementWithGroupListingController,
    IElementWithGroupLoadController {
    
    

    static properties = {
        ...AbstractApp.properties,
        ...ManagerController.HOST_PROPERTIES,
        ...RegistryController.HOST_PROPERTIES,
        ...GroupController.HOST_PROPERTIES,
        ...FileController.HOST_PROPERTIES,
        ...GroupLoadController.HOST_PROPERTIES
    };


    // Manager controller properties

    managerSlug!: string;
    managerObject!: ThermalManager;
    managerController: ManagerController = new ManagerController(this);
    palette: AvailableThermalPalette = "jet";
    advancedPalettes: boolean = false;
    smoothThermograms: boolean = false;
    smoothGraph: boolean = false;
    tool: string = "inspect";

    // Registry controller properties

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

    // Group controller properties

    groupSlug!: string;
    groupObject!: ThermalGroup;
    groupController: GroupController = new GroupController(this);
    autoclearGroup: boolean = true;


    // File controller properties

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

    groupListingController: GroupListingController = new GroupListingController(this);
    orderby: GroupOrderby = GroupOrderby.DATE;
    ordering: GroupOrdering = GroupOrdering.ASC;

    groupLoadController: GroupLoadController = new GroupLoadController(this);
    filesString?: string | undefined;

    @provide({ context: pngExportWidthContext })
    protected pngExportWidth: number = 1200;

    @provide({ context: pngExportWidthSetterContext })
    protected pngExportWidthSetter = (value: number) => {
        this.pngExportWidth = value;
    };

    @provide({ context: pngExportFsContext })
    protected pngExportFs: number = 20;

    @provide({ context: pngExportFsSetterContext })
    protected pngExportFsSetter = (value: number) => {
        this.pngExportFs = value;
    };

    private subscribedGroup?: ThermalGroup;

    connectedCallback(): void {
        super.connectedCallback();
        this.subscribedGroup = this.groupObject;
        this.subscribedGroup.files.addListener(this.UUID, () => {
            if (this.file && !this.groupObject.files.value.includes(this.file)) {
                this.fileController.removeInstance();
            }
            this.requestUpdate();
        });
    }

    disconnectedCallback(): void {
        this.subscribedGroup?.files.removeListener(this.UUID);
        this.subscribedGroup = undefined;
        super.disconnectedCallback();
    }

    private openDetail(instance: Instance): void {
        this.registryController.setHighlight(undefined);
        this.ms = instance.timeline.currentMs;
        this.playbackSpeed = instance.timeline.playbackSpeed;
        const analysisAttributes = ["analysis1", "analysis2", "analysis3", "analysis4", "analysis5", "analysis6", "analysis7"] as const;
        analysisAttributes.forEach((attribute, index) => {
            this[attribute] = instance.slots.getSlot(index + 1)?.serialized;
        });
        this.fileController.receiveInstance(instance);
    }

    private closeDetail(): void {
        this.registryController.setHighlight(undefined);
        this.fileController.removeInstance();
    }

    willUpdate(_changedProperties: PropertyValues<ThermalGroupAppElement>) {
        super.willUpdate(_changedProperties);
        this.managerController.hostWillUpdateWatcher(_changedProperties);
        this.registryController.hostWillUpdateWatcher(_changedProperties);
        this.groupController.hostWillUpdateWatcher(_changedProperties);
        this.fileController.hostWillUpdateWatcher(_changedProperties);
        this.groupListingController.hostWillUpdateWatcher(_changedProperties);
        this.groupLoadController.hostWillUpdateWatcher(_changedProperties);
    }

    protected updated(_changedProperties: PropertyValues<ThermalGroupAppElement>) {
        super.updated(_changedProperties);
        this.managerController.hostUpdatedWatcher(_changedProperties);
        this.registryController.hostUpdatedWatcher(_changedProperties);
        this.groupController.hostUpdatedWatcher(_changedProperties);
        this.fileController.hostUpdatedWatcher(_changedProperties);
        this.groupListingController.hostUpdatedWatcher(_changedProperties);
        this.groupLoadController.hostUpdatedWatcher(_changedProperties);
    }

    public static styles = css`
        ${GroupListingController.styles}

        .layout {
            width: 100%;
            display: grid;
            grid-template-columns: 2em minmax(0, 1fr);
            gap: 1em;
        }

        .layout-content {
            min-width: 0;
        }

        manager-tool-bar {
            height: 2em;
        }
    `;

    protected render(): unknown {
        const listingOptions = {
            allowFileChanges: false,
            onOpenDetail: (instance: Instance) => this.openDetail(instance),
            onCloseDetail: () => this.closeDetail()
        };
        const hasFiles = this.groupObject?.files.value.length > 0;

        return html`<thermal-app
            label=${this.label ?? "LabIR Web Analyser"}
            show-fullscreen=${String(this.showFullscreen)}
        >
            ${hasFiles ? html`
                <manager-tool-bar slot="pre-bar"></manager-tool-bar>
                <manager-palette-dropdown slot="pre-bar"></manager-palette-dropdown>
                <registry-range-form slot="pre-bar"></registry-range-form>
                ${this.file
                    ? this.groupListingController.renderDetailHeader(this.file, "bar-header", listingOptions)
                    : this.groupListingController.renderListHeader("bar-header", listingOptions)}
                <thermal-dialog label=${this.t("config")} slot="bar-pre">
                    <thermal-btn slot="invoker" tooltip=${this.t("config")} icon="settings" iconStyle="solid"></thermal-btn>
                    <div slot="content">
                        <table>
                            <manager-export-panel></manager-export-panel>
                            <display-panel></display-panel>
                        </table>
                    </div>
                </thermal-dialog>
                <div slot="pre-bar" style="flex-grow: 1; padding-left: 1em;">
                    <registry-histogram height="15px" expandable="true"></registry-histogram>
                    <registry-range-slider height="10px"></registry-range-slider>
                    <registry-ticks-bar></registry-ticks-bar>
                </div>
            ` : undefined}
            <slot name="bar-pre" slot="bar-pre"></slot>
            ${this.groupLoadController.errors.map(message => html`<p role="alert">${message}</p>`)}
            <div class="layout">
                <div></div>
                <div class="layout-content">
                    ${this.loading ? html`<p role="status">${this.t("loading")}</p>` : undefined}
                    ${hasFiles
                        ? this.file
                            ? this.groupListingController.renderDetailBody()
                            : this.groupListingController.renderListContainer(
                                this.groupListingController.renderList(
                                    instance => this.groupListingController.renderThumbnail(instance, listingOptions)
                                )
                            )
                        : this.loading ? undefined : html`<p>Ve skupině nejsou žádné soubory.</p>`}
                </div>
            </div>
        </thermal-app>`;
    }
}