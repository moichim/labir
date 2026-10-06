import { AvailableThermalPalette, Instance, ThermalFileFailure, ThermalGroup, ThermalManager, ThermalRangeOrUndefined, ThermalRegistry } from "@labirthermal/core";
import { provide } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { GroupController, IElementWithGroupController } from "../hierarchy/controllers/GroupController";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { publicIpv4 } from "public-ip";
import { GroupDropinElement } from "../controls/group/GroupDropinElement";
import { GroupProviderElement } from "../index.export";
import { T } from "../translations/Languages";
import { initLocalesInTopLevelElement, IWithlocale, localeContext, localeConverter, Locales } from "../translations/localeContext";
import { BaseAppWithPngExportContext, pngExportWidthContext, pngExportWidthSetterContext, pngExportFsContext, pngExportFsSetterContext } from "../hierarchy/providers/context/pngExportContext";
import { IElementWithManagerController, ManagerController } from "../hierarchy/controllers/ManagerController";
import { IElementWithRegistryController, RegistryController } from "../hierarchy/controllers/RegistryController";
import { FileController, IElementWithFileController } from "../hierarchy/controllers/FileController";
import { PlaybackSpeeds } from "@labirthermal/core";

export class DropinAppElement 
extends BaseAppWithPngExportContext 
implements 
    IWithlocale,
    IElementWithManagerController,
    IElementWithRegistryController,
    IElementWithGroupController,
    IElementWithFileController
{

    public static properties = {
        ...ManagerController.HOST_PROPERTIES,
        ...RegistryController.HOST_PROPERTIES,
        ...GroupController.HOST_PROPERTIES,
        ...FileController.HOST_PROPERTIES
    }



    managerSlug!: string;
    managerObject!: ThermalManager;
    managerController: ManagerController = new ManagerController(this);
    palette: AvailableThermalPalette = "jet";
    advancedPalettes: boolean = false;
    smoothThermograms: boolean = false;
    smoothGraph: boolean = false;
    tool: string = "inspect";

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
    autoclearGroup: boolean = false;

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
    
    public get manager(): ThermalManager {
        return this.managerObject;
    }

    @state()
    protected dropinRef: Ref<GroupDropinElement> = createRef();

    @state()
    protected ip?: string;



    @provide({ context: pngExportWidthContext })
    protected pngExportWidth: number = 1200;

    @provide({ context: pngExportWidthSetterContext })
    protected pngExportWidthSetterContext = (value: number) => {
        this.pngExportWidth = value;
    }


    @provide({ context: pngExportFsContext })
    protected pngExportFs: number = 20;

    @provide({ context: pngExportFsSetterContext })
    protected pngExportFsSetterContext = (value: number) => {
        this.pngExportFs = value;
    }

    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;

    connectedCallback(): void {
        super.connectedCallback();
        publicIpv4().then(ip => this.ip = ip);
    }

    updated( _changedProperties: PropertyValues<DropinAppElement> ) {
        super.updated(_changedProperties);
        this.managerController.hostUpdatedWatcher(_changedProperties);
        this.registryController.hostUpdatedWatcher(_changedProperties);
        this.groupController.hostUpdatedWatcher(_changedProperties);
        this.fileController.hostUpdatedWatcher(_changedProperties);
    }


    public firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        initLocalesInTopLevelElement(this);

        if (this.groupObject !== undefined) {

            this.groupObject.files.addListener(this.UUID, (value) => {



                if ( value.length > 0 ) {
                    const file = value[0];
                    this.fileController.receiveInstance(file);
                    this.registryObject.postLoadedProcessing();
                }

            });

        }

    }

    protected handleClear() {

        if (this.groupObject !== undefined) {
            this.fileController.removeInstance();
            this.groupObject.files.removeAllInstances();
            this.file = undefined;
            this.requestUpdate();
            this.analysis1 = undefined;
            this.analysis2 = undefined;
            this.analysis3 = undefined;
            this.analysis4 = undefined;
            this.analysis5 = undefined;
            this.analysis6 = undefined;
            this.analysis7 = undefined;
        }

    }


    public static styles = css`
    
        .browser {
            display: grid;
            grid-template-columns: 2rem 1fr;
            gap: var(--thermal-gap);
            padding-top: var(--thermal-gap);
        }

        .file {
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            background: var(--thermal-background);

            file-analysis-graph {
                height: 300px;
            }

            header {
                display: flex;
                align-items: center;
            }

            .file-label {
                display: flex;
                flex-grow: 1;
                gap: 5px;
                align-items: center;
                padding-bottom: var(--thermal-gap);
                div {
                    opacity: .5;
                }
            }

            h1, h2 {
                margin: 0;
                padding: 0;
                font-size: var(--thermal-fs);
                line-height: 1em;
            }

            .file-expanded {
                display: grid;
                grid-template-columns: 50% calc( 50%  - var(--thermal-gap));
                gap: var(--thermal-gap);
            }

        }

        .files-multiple {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(calc(100% / 4), 1fr));
            gap: var(--thermal-gap);
        }

    `;


    protected renderIntroScene() {

        return html`
            <group-dropin-element></group-dropin-element>
        `;

    }

    protected renderBrowserScene() {

        return html`
        <manager-palette-dropdown slot="bar-pre"></manager-palette-dropdown>
        <registry-range-form slot="bar-pre"></registry-range-form>

        <registry-histogram expandable="true" slot="pre"></registry-histogram>
        <registry-range-slider slot="pre"></registry-range-slider>
        <registry-ticks-bar slot="pre"></registry-ticks-bar>

        <div class="browser">
            
            <div class="browser-tools">
                <manager-tool-bar></manager-tool-bar>
            </div>
            <div class="browser-content">
                ${this.renderOneFile()}
            </div>
        </div>
        `;

    }

    protected renderOneFile() {
        return html`
        ${this.renderDetail(this.file!)}
        `;
    }


    protected renderDetail(
        file: Instance
    ) {

        return html`
            <article class="file">
                <file-detail .onback=${() => this.handleClear()}></file-detail>
            </article>
        `;

    }


    protected renderMultipleFiles() {
        return html`
        <div class="files-multiple">
        </div>
        `;

    }


    protected render(): unknown {

        try {

            return html`

                        <thermal-app 
                            label="LabIR Edu Analyser"
                            show-fullscreen="true"
                        >

                            <group-dropin-input slot="bar-pre"></group-dropin-input>

                            ${this.file 
                                ? html`
                                    <group-download-dropdown slot="bar-pre"></group-download-dropdown><registry-range-full-button slot="bar-pre"></registry-range-full-button>` 
                                : nothing}

                                    <slot name="header"></slot>
                                </thermal-bar>
                            </div>

                            <thermal-dialog label="${t(T.config)}" slot="bar-pre">
                                <thermal-btn slot="invoker" tooltip="${t(T.config)}" icon="settings" iconStyle="solid">
                                </thermal-btn>
                                <div slot="content">
                                    <table>
                                        <manager-export-panel></manager-export-panel>
                                        <display-panel></display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            <slot name="bar-pre" slot="bar-pre"></slot>

                            ${this.file === undefined? this.renderIntroScene() : this.renderBrowserScene()}
                        
                        </thermal-app>

        `;

        } catch (err) {

            return html`Stala se chyba`;

        }

    }

}