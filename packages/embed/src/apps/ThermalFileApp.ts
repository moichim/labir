import { AvailableThermalPalette, Instance, ThermalManager, TimeFormat } from "@labirthermal/core";
import { provide } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { cache } from 'lit/directives/cache.js';
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, Ref } from "lit/directives/ref.js";
import { pngExportFsContext, pngExportFsSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../hierarchy/providers/context/pngExportContext";
import { FileProviderElement } from "../hierarchy/providers/FileProvider";
import { T } from "../translations/Languages";
import { initLocalesInTopLevelElement, localeContext, localeConverter, Locales } from "../translations/localeContext";
import { booleanConverter } from "../utils/converters/booleanConverter";
import { AbstractAppWithSingleFile } from "./AbstractAppWithSingleFile";

const analysisSlotProperty = ["analysis1", "analysis2", "analysis3", "analysis4", "analysis5", "analysis6", "analysis7"];

export class ThermalFileAppElement extends AbstractAppWithSingleFile {

    protected fileProviderRef: Ref<FileProviderElement> = createRef();

    public get manager(): ThermalManager {
        if (!this.fileProviderRef.value) {
            throw new Error("Not yet loaded");
        }
        return this.fileProviderRef.value.manager;
    }

    @property({ type: String, reflect: true })
    url?: string;

    @property({ type: String, reflect: true })
    visible?: string;

    @property()
    author?: string;

    @state()
    recorded?: string;

    @property()
    license?: string;

    @property()
    label?: string;

    @property({ type: String, reflect: false, converter: booleanConverter(true) })
    showfullscreen: boolean = true;

    @property({ type: Boolean, reflect: true, converter: booleanConverter(true) })
    showscale: boolean = true;

    @property({ type: Boolean, reflect: true, converter: booleanConverter(true) })
    showhistogram: boolean = true;

    @property({ type: Boolean, reflect: true, converter: booleanConverter(false) })
    showlayout: boolean = false;

    @property({ type: Boolean, reflect: true, converter: booleanConverter(false) })
    showshare: boolean = false;

    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;


    @state()
    protected loading: boolean = true;

    @state()
    protected hasVisible: boolean = false;



    @state()
    ms: number = 0;


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


    protected _file?: Instance;



    protected get file() {
        if (this.fileProviderRef.value === undefined) return undefined;
        else return this.fileProviderRef.value.file;
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        // Register intl listeners
        initLocalesInTopLevelElement(this);

        // Register listeners to internal properties of the file, group, registry
        this.hydrateInternalListeners();

    }

    /** Listen to changes in @labirthermal/core and reflect them to the webcomponent state */
    protected hydrateInternalListeners() {

        if (this.fileProviderRef.value) {

            this.fileProviderRef.value.onSuccess.set(this.UUID, instance => {

                this.loading = false;

                this.recorded = TimeFormat.human(instance.timestamp);

                this.hasVisible = instance.visibleUrl !== undefined;

                /** Range changes */
                instance.group.registry.range.addListener(this.UUID + "mirror_changes", value => {

                    if (value === undefined) {
                        this.from = undefined;
                        this.to = undefined;
                    } else {
                        if (this.from !== value.from) this.from = value.from;
                        if (this.to !== value.to) this.to = value.to;
                    }

                });

                /** Opacity changes */
                instance.group.registry.opacity.addListener(this.UUID + "mirror_changes", value => {
                    if (value !== this.opacity) {
                        this.opacity = value;
                    }
                });

                /** Palette changes */
                instance.group.registry.manager.palette.addListener(this.UUID + "mirror_changes", value => {
                    if (this.palette !== value) {
                        this.palette = value as AvailableThermalPalette;
                    }
                });

                /** Analysis 1 changes */
                instance.slots.onSlot1Serialize.set(this.UUID, value => {
                    if (this.analysis1 !== value) {
                        this.analysis1 = value;
                    }
                });

                /** Analysis 2 changes */
                instance.slots.onSlot2Serialize.set(this.UUID, value => {
                    if (this.analysis2 !== value) {
                        this.analysis2 = value;
                    }
                });

                /** Analysis 3 changes */
                instance.slots.onSlot3Serialize.set(this.UUID, value => {
                    if (this.analysis3 !== value) {
                        this.analysis3 = value;
                    }
                });

                /** Analysis 4 changes */
                instance.slots.onSlot4Serialize.set(this.UUID, value => {
                    if (this.analysis4 !== value) {
                        this.analysis4 = value;
                    }
                });

                /** Analysis 5 changes */
                instance.slots.onSlot5Serialize.set(this.UUID, value => {
                    if (this.analysis5 !== value) {
                        this.analysis5 = value;
                    }
                });

                /** Analysis 6 changes */
                instance.slots.onSlot6Serialize.set(this.UUID, value => {
                    if (this.analysis6 !== value) {
                        this.analysis6 = value;
                    }
                });

                /** Analysis 7 changes */
                instance.slots.onSlot7Serialize.set(this.UUID, value => {
                    if (this.analysis7 !== value) {
                        this.analysis7 = value;
                    }
                });

            });

        }

    }

    protected updated(_changedProperties: PropertyValues<ThermalFileAppElement>): void {
        super.updated(_changedProperties);

        if (this.file !== undefined) {

            const group = this.file.group;
            const registry = group.registry;
            const manager = registry.manager;

            /** Propagate the range if necessary */
            if (_changedProperties.has("from") && _changedProperties.has("to")) {
                if (this.from !== undefined && this.to !== undefined) {
                    this.file.group.registry.range.imposeRange({ from: this.from, to: this.to });
                } else {
                    this.file.group.registry.range.imposeRange(undefined);
                }
            }

            /** Propagate the opacity if necessary */
            if (_changedProperties.has("opacity")) {
                if (this.opacity !== undefined && this.opacity !== registry.opacity.value) {
                    this.file.group.registry.opacity.imposeOpacity(this.opacity);
                }
            }

            /** Propagate the palette if necessary */
            if (_changedProperties.has("palette")) {
                if (this.palette !== manager.palette.value) {
                    manager.palette.setPalette(this.palette);
                }
            }

            /** Propagate the analyses if necessary */
            analysisSlotProperty.forEach((slotParameterName, index) => {

                if (this.file === undefined) {
                    return;
                }

                if (_changedProperties.has(slotParameterName as keyof ThermalFileAppElement)) {

                    const slotNum = index + 1;

                    const localSlotValue = this[slotParameterName as keyof ThermalFileAppElement] as string | undefined;

                    const internalSlotValue = this.file.slots.getSlot(slotNum)?.serialized;

                    if (localSlotValue !== internalSlotValue) {

                        const slotObject = this.file.slots.getSlot(slotNum);

                        if (localSlotValue !== undefined) {
                            if (slotObject !== undefined) {
                                slotObject.recieveSerialized(localSlotValue);
                            } else {
                                this.file.slots.createAnalysisFromSerialized(localSlotValue, slotNum)
                            }
                        } else {
                            if (this.file.slots.hasSlot(slotNum)) {
                                this.file.slots.removeSlotAndAnalysis(slotNum);
                            }
                        }

                    }

                }
            });

        }

    }


    /** Render the */
    protected renderApp() {

        return html`
        ap
            <thermal-app
                label="${this.label}"
                author="${ifDefined(this.author)}"
                license="${ifDefined(this.license)}"
                showfullscreen="${this.showfullscreen}"
                recorded="${ifDefined(this.recorded)}"
            >

                <file-info-button slot="bar-pre"></file-info-button>

                ${cache(html`<manager-palette-dropdown slot="bar-pre"></manager-palette-dropdown>

                <registry-range-form slot="bar-pre"></registry-range-form>
                
                ${this.hasVisible ? html`<registry-opacity-slider  slot="bar-pre"></registry-opacity-slider>` : nothing}
                `)}

                ${cache(html`<thermal-dialog label="${t(T.config)}" slot="bar-pre">
                    <thermal-btn slot="invoker" tooltip="Nastavení exportu a zobrazení">

                        <thermal-icon icon="settings" variant="outline" class="button-fix"></thermal-icon>

                        <span style="display: var(--thermal-collapsible-display, none);align-self: center;">${t(T.config)}</span>

                    </thermal-btn>

                    <div slot="content">

                        <table>
                            <manager-export-panel></manager-export-panel>
                            <display-panel></display-panel>
                        </table>
                    </div>
                </thermal-dialog> ` )}

                <file-download-dropdown slot="bar-pre"></file-download-dropdown>
                
    
                <div class="layout layout__advanced">
                    <aside class="toolbar">
                        <manager-tool-bar></manager-tool-bar>
                    </aside>
                    <main class="thermogram">
                        ${this.renderScale()}
                        ${cache(html`<file-canvas></file-canvas>`)}
                        <file-timeline></file-timeline>
                    </main>
                    <notation-content class="notations"></notation-content>

                    <file-analysis-complex class="complex"></file-abnalysis-complex>
                </div>


            </thermal-app>`;

    }



    protected renderScale() {
        return html`${this.showhistogram ? cache(html`<registry-histogram expandable="true"></registry-histogram>`) : nothing}
    ${this.showscale ? html`<registry-range-slider></registry-range-slider>` : nothing}
    ${this.showhistogram || this.showscale ? html`<registry-ticks-bar placement="top"></registry-ticks-bar>` : nothing}`;
    }




    static styles?: CSSResultGroup | undefined = css`

    .layout-option {

        &.current {

            .layout-item {
                cursor: pointer;
                color: var(--thermal-foreground);
                &:hover {
                    color: var(--thermal-primary);
                }
            }
        
        }
        &.available {
            .layout-item {
                opacity: .5;
            }
        }
    }

    .layout-item {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 5px;
        
        svg {
            width: 1em;
        }
        span {
            font-size: 12px;
        }

        
    }

    .layout {

        display: grid;
        gap: var(--thermal-gap);

        .toolbar { grid-area: toolbar; }
        .thermogram { grid-area: thermogram; }
        .complex { grid-area: complex; }
        .notations { grid-area: notations; }
        .graph { grid-area: graph; }
        .analysis { grid-area: analysis; }
    
        &.layout__advanced {

            grid-template-columns: 2em 1fr calc(50% - var(--thermal-gap) );

            grid-template-areas:
                "toolbar thermogram complex"
                "toolbar thermogram complex"
                "notations notations notations";

                @media(max-width: 800px) {
                grid-template-columns: 2em calc(100% - 3em);
                grid-template-areas: 
                    "toolbar thermogram"
                    "toolbar notations"
                    "toolbar complex";
            }

        }

        &.layout__simple {

            gap: 0px;
            grid-template-columns: 2.5em 1fr;
            grid-template-rows: auto;

            grid-template-areas: 
                "toolbar thermogram" 
                "toolbar analysis" 
                "toolbar graph" 
                "toolbar notations" 
                "toolbar complex";

            .analysis,
            .graph,
            .complex,
            .notations {
                // border: 10px solid red;
            }
        }


        &.layout__lesson {
            grid-template-columns: 2em 1fr calc(40% - var(--thermal-gap) );

            grid-template-areas: 
                "toolbar thermogram notations" 
                "toolbar analysis graph";

            @media(max-width: 800px) {
                grid-template-columns: 2em calc(100% - 3em);
                grid-template-areas: 
                    "toolbar thermogram"
                    "toolbar notations"
                    "toolbar analysis"
                    "toolbar graph";
            }

            .thermogram {
                padding: var(--thermal-gap);
                border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                border-radius: var(--thermal-radius);
                background: var(--thermal-background);
            }
        }

    }

    .share {
        svg {
            width: 1em;
            translateY: 3px;
        }

        pre {
            padding: var(--thermal-gap);
            border-radius: var(--thermal-radius);
            background: var(--thermal-background);
            color: var(--thermal-foreground);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            white-space: pre-wrap;
        }
    }


    .button-fix {
        width: calc(var(--thermal-fs) * 1.2);
        height: calc(var(--thermal-fs) * 1.2);
    }

`;


    render(): unknown {

        return this.renderSingleAppFileProviders( this.renderApp() );

        return this.renderProviders(
            this.renderSingleAppFileProviders(
                this.renderApp()
            )
        );

    }


}