import { AvailableThermalPalette, ThermalManager, ThermalRangeOrUndefined, ThermalRegistry, ThermalGroup, Instance, ThermalFileFailure, PlaybackSpeeds } from "@labirthermal/core";
import { provide } from "@lit/context";
import { css, html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { FileController } from "../hierarchy/controllers/FileController";
import { FileLoadController } from "../hierarchy/controllers/FileLoadController";
import { IElementWithManagerController, ManagerController } from "../hierarchy/controllers/ManagerController";
import { IElementWithRegistryController, RegistryController } from "../hierarchy/controllers/RegistryController";
import { IElementWithGroupController, GroupController } from "../hierarchy/controllers/GroupController";
import { interactiveAnalysisContext } from "../hierarchy/providers/context/ManagerContext";
import { booleanConverter } from "../utils/converters/booleanConverter";
import { AbstractApp } from "./AbstractApp";
import { IElementWithFileController } from "../hierarchy/controllers/FileController";
import { IElementWithFileLoadController } from "../hierarchy/controllers/FileLoadController";

export class ThermalFileAppNewElement 
extends AbstractApp 
implements 
    IElementWithManagerController, 
    IElementWithRegistryController,
    IElementWithGroupController,
    IElementWithFileController,
    IElementWithFileLoadController
{
    

    static properties = {
        ...AbstractApp.properties,
        ...ManagerController.HOST_PROPERTIES,
        ...RegistryController.HOST_PROPERTIES,
        ...GroupController.HOST_PROPERTIES,
        ...FileController.HOST_PROPERTIES,
        ...FileLoadController.HOST_PROPERTIES
    };

    /** Enables selecting, editing and removing the analyses in the tables. Provided to all descendants. */
    @provide({ context: interactiveAnalysisContext })
    @property({ type: String, reflect: true, converter: booleanConverter(true) })
    interactiveanalysis: boolean = true;

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

    // File load controller properties

    fileLoadController: FileLoadController = new FileLoadController(this);
    thermal: string | undefined;
    visible: string | undefined;



    protected updated(_changedProperties: PropertyValues<ThermalFileAppNewElement>) {
        super.updated(_changedProperties);

        this.managerController.hostUpdatedWatcher(_changedProperties);

        this.registryController.hostUpdatedWatcher(_changedProperties);

        this.groupController.hostUpdatedWatcher(_changedProperties);

        this.fileLoadController.hostUpdatedWatcher(_changedProperties);

        this.fileController.hostUpdatedWatcher(_changedProperties);
    }

    static styles = css`
    
        .layout {
            display: grid;
            grid-template-columns: min-content 1fr 1fr;
            gap: 1em;
            margin-top: 1em;
        }
    
    `;

    
    render() {
        return html`<thermal-app 
            label="${this.label}" 
            author="${this.author}" 
            license="${this.license}"
            .showfullscreen=${this.showFullscreen}
        >

            <file-download-dropdown slot="bar-pre"></file-download-dropdown>
            <file-info-button slot="bar-pre"></file-info-button>

            <manager-palette-dropdown slot="bar-pre"></manager-palette-dropdown>
            <registry-range-form slot="bar-pre"></registry-range-form>
            <registry-opacity-slider slot="bar-pre"></registry-opacity-slider>

            <registry-histogram slot="pre" interactive="true"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre"></registry-ticks-bar>

            
            <div class="layout">
                <manager-tool-bar></manager-tool-bar>
                <div>
                    <file-canvas></file-canvas>
                    <file-timeline></file-timeline>
                </div>
                <file-analysis-complex></file-analysis-complex>
            </div>
            
        </thermal-app>`;
    }

}