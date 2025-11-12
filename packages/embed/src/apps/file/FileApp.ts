import { AvailableThermalPalettes, Instance, ThermalManager, TimeFormat } from "@labir/core";
import { provide } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cache } from 'lit/directives/cache.js';
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { version } from "../../../package.json";
import { BaseElement } from "../../hierarchy/BaseElement";
import { FileProviderElement } from "../../hierarchy/providers/FileProvider";
import { T } from "../../translations/Languages";
import { initLocalesInTopLevelElement, localeContext, localeConverter, Locales } from "../../translations/localeContext";
import { interactiveAnalysisContext } from "../../utils/context";
import { booleanConverter } from "../../utils/converters/booleanConverter";
import { BaseAppWithPngExportContext, pngExportFsContext, pngExportFsSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../../utils/converters/pngExportContext";

enum Layout {
    NOGUI = "nogui",
    SIMPLE = "simple",
    ADVANCED = "advanced",
    LESSON = "lesson"
}

type LayoutItem = {
    key: string,
    icon: string
}

const layouts: LayoutItem[] = [
    {
        key: Layout.SIMPLE,
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15H21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
    },
    {
        key: Layout.ADVANCED,
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12L21 12M12 3L12 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
    },
    {
        key: Layout.LESSON,
        icon: '<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentcolor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>layout_11_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Design" transform="translate(-48.000000, -288.000000)"> <g id="layout_11_line" transform="translate(48.000000, 288.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M3,5 C3,3.89543 3.89543,3 5,3 L19,3 C20.1046,3 21,3.89543 21,5 L21,19 C21,20.1046 20.1046,21 19,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,5 Z M8,5 L5,5 L5,19 L8,19 L8,5 Z M10,5 L10,8 L19,8 L19,5 L10,5 Z M10,10 L10,19 L19,19 L19,10 L10,10 Z" id="形状" fill="currentcolor"> </path> </g> </g> </g> </g></svg>'
    }
];

const analysisSlotProperty = ["analysis1", "analysis2", "analysis3", "analysis4", "analysis5", "analysis6", "analysis7"];


@customElement("thermal-file-app")
export class FileApp extends BaseAppWithPngExportContext {

    protected fileProviderRef: Ref<FileProviderElement> = createRef();

    public get manager(): ThermalManager {
        if (!this.fileProviderRef.value) {
            throw new Error( "Not yet loaded" );
        }
        return this.fileProviderRef.value.manager;
    }



    @property({ type: String, reflect: true })
    public layout: Layout = Layout.SIMPLE;

    @property({ type: String, reflect: true })
    url?: string;

    @property({ type: String, reflect: true })
    visible?: string;

    @property({ type: String, reflect: true, attribute: true })
    palette: AvailableThermalPalettes = "jet";

    @property({ type: Number, reflect: true })
    from?: number;

    @property({ type: Number, reflect: true })
    to?: number;

    @property({ type: Number, reflect: true })
    opacity?: number = 1;

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

    @property({ type: String, reflect: true })
    analysis1?: string;

    @property({ type: String, reflect: true })
    analysis2?: string;

    @property({ type: String, reflect: true })
    analysis3?: string;

    @property({ type: String, reflect: true })
    analysis4?: string;

    @property({ type: String, reflect: true })
    analysis5?: string;

    @property({ type: String, reflect: true })
    analysis6?: string;

    @property({ type: String, reflect: true })
    analysis7?: string;

    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;

    @provide({ context: interactiveAnalysisContext })
    @property({ type: String, reflect: true, converter: booleanConverter(true) })
    interactiveanalysis: boolean = true;


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

    @state()
    protected outerHTMLSnapshot?: string;



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

    /** Listen to changes in @labir/core and reflect them to the webcomponent state */
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
                        this.palette = value;
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

    protected updated(_changedProperties: PropertyValues<FileApp>): void {
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

                if (_changedProperties.has(slotParameterName as keyof FileApp)) {

                    const slotNum = index + 1;

                    const localSlotValue = this[slotParameterName as keyof FileApp] as string | undefined;

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

        this.outerHTMLSnapshot = this.outerHTML;
    }



    protected getLabel() {
        if (this.loading === true)
            return t(T.loading);
        else if (this.label !== undefined)
            return this.label;
        else if (this.label === undefined && this.file !== undefined)
            return this.file.fileName;
        else return t(T.file);
    }

    protected setLayout(value: Layout) {
        this.layout = value;
        setTimeout(() => {
            if (this.fileProviderRef.value && this.file) {
                this.fileProviderRef.value.redraw();
                // this.updateNotationsMs(0);
            }
        }, 0);
    }



    protected renderNogui() {
        return html`
            ${this.renderScale()}
            <file-canvas></file-canvas>
            <file-timeline></file-timeline>
            <file-analysis-table ></file-analysis-table>
            <file-analysis-graph></file-analysis-graph>
    `;
    }


    /** Render the */
    protected renderApp() {

        return html`
        
            <thermal-app
                label="${this.getLabel()}"
                author="${ifDefined(this.author)}"
                license="${ifDefined(this.license)}"
                showfullscreen="${this.showfullscreen}"
                recorded="${ifDefined(this.recorded)}"
            >

                ${this.showlayout ? this.renderLayoutSwitch() : nothing}

                ${cache(html`<registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

                <registry-range-form slot="bar-pre" stacked="false"></registry-range-form>
                <file-info-button slot="bar-pre"></file-info-button>

                ${this.hasVisible ? html`<registry-opacity-slider  slot="bar-pre"></registry-opacity-slider>` : nothing}
                `)}

                


                

                ${cache(html`<thermal-dialog label="${t(T.config)}" slot="bar-pre">
                    <thermal-btn slot="invoker" tooltip="Nastavení exportu a zobrazení" style="width: var(--thermal-collapsible-width, auto);display: flex; align-items: center;box-sizing: border-box;">

                        <thermal-icon icon="settings" variant="outline" class="button-fix"></thermal-icon>

                        <span style="display: var(--thermal-collapsible-display, none);align-self: center;">${t(T.config)}</span>

                    </thermal-btn>

                    <div slot="content">

                        <table>
                            <png-export-panel></png-export-panel>
                            <registry-display-panel></registry-display-panel>
                        </table>
                    </div>
                </thermal-dialog> ` )}

                <file-download-dropdown slot="bar-pre"></file-download-dropdown>
                
    
                <div class="layout layout__${this.layout}">
                    <aside class="toolbar">
                        <group-tool-bar></group-tool-bar>
                    </aside>
                    <main class="thermogram">
                        ${this.layout === Layout.ADVANCED || this.layout === Layout.LESSON ? this.renderScale() : nothing}
                        ${cache(html`<file-canvas></file-canvas>`)}
                        <file-timeline></file-timeline>
                    </main>
                    <notation-content class="notations"></notation-content>

                    ${this.layout === Layout.ADVANCED
                ? html`<file-analysis-complex class="complex"></file-abnalysis-complex>` : html`<file-analysis-table class="analysis"></file-analysis-table>
                        <file-analysis-graph class="graph"></file-analysis-graph>` }
                </div>


                ${this.layout === Layout.SIMPLE ? html`<aside slot="pre">${this.renderScale()}</aside>` : nothing}


                ${this.showshare ? html`<thermal-dialog label="${t(T.share)}" slot="bar-pre" class="share">
                    <thermal-btn slot="invoker" icon="share" iconStyle="outline" tooltip="${t(T.share)}" style="align-self:stretch;"></thermal-btn>
                    <div slot="content">
                        <p>${t(T.embedhint)}</p>
                        <h2>1. ${t(T.embedlibrary)} <thermal-btn @click="${() => navigator.clipboard.writeText(`<script src="https://cdn.jsdelivr.net/npm/@labir/embed@${version}/dist/embed.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labir/embed@${version}/dist/embed.min.css">`)}">${t(T.copy)}</thermal-btn></h2>
                        <pre>&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labir/embed@${version}/dist/embed.min.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@labir/embed@${version}/dist/embed.min.css&quot;&gt;</pre>
                        <h2>2. ${t(T.embedcomponent)} <thermal-btn @click="${() => navigator.clipboard.writeText(this.outerHTMLSnapshot!)}">${t(T.copy)}</thermal-btn></h2>
                        <pre>${this.outerHTMLSnapshot}</pre>
                    </div>
                </thermal-dialog>` : nothing}


            </thermal-app>`;

    }



    protected renderScale() {
        return html`${this.showhistogram ? cache(html`<registry-histogram expandable="true"></registry-histogram>`) : nothing}
    ${this.showscale ? html`<registry-range-slider></registry-range-slider>` : nothing}
    ${this.showhistogram || this.showscale ? html`<registry-ticks-bar placement="top"></registry-ticks-bar>` : nothing}`;
    }

    protected renderOneLayoutItem(icon: string, key: string, hasLabel: boolean = false) {
        return html`<div class="layout-item">
        ${unsafeSVG(icon)}
        ${hasLabel ? html`<span>${t(T[`layout_${key}` as keyof typeof T])}</span>` : nothing}
    </div>`;
    }

    protected renderLayoutSwitch() {

        const currentLayout = layouts.find(layout => layout.key === this.layout);

        if (!currentLayout) {
            return nothing;
        }

        const otherLayouts = layouts.map(layout => {
            return {
                ...layout,
                action: layout.key !== this.layout
                    ? () => this.setLayout(layout.key as Layout)
                    : undefined
            }
        });

        return html`<thermal-dropdown slot="bar-post">
        <div slot="invoker">
            ${this.renderOneLayoutItem(currentLayout.icon, currentLayout.key, false)}
        </div>
        
        ${otherLayouts.map(l => html`<div 
            slot="option" 
            class="layout-option ${l.action ? "current" : "available"}"
            @click=${l.action}
        >${this.renderOneLayoutItem(l.icon, l.key, true)}</div>`)}

    </thermal-dropdown>`;

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
                border: 1px solid var(--thermal-slate);
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
            border: 1px solid var(--thermal-slate);
            white-space: pre-wrap;
        }
    }


    .button-fix {
        width: calc(var(--thermal-fs) * 1.2);
        height: calc(var(--thermal-fs) * 1.2);
    }

`;



    protected render(): unknown {

        return html`

    <manager-provider 
        slug="${this.UUID}"
        palette="${this.palette}"
    >
        <registry-provider 
            slug="${this.UUID}"
            from="${ifDefined(this.from)}"
            to="${ifDefined(this.to)}"
            opacity="${this.opacity}"
        >
            <group-provider slug="${this.UUID}">

                <file-provider 
                    ${ref(this.fileProviderRef)} 
                    thermal="${this.url}"
                    visible="${ifDefined(this.visible)}"
                    batch="true"
                    analysis1="${ifDefined(this.analysis1)}"
                    analysis2="${ifDefined(this.analysis2)}"
                    analysis3="${ifDefined(this.analysis3)}"
                    analysis4="${ifDefined(this.analysis4)}"
                    analysis5="${ifDefined(this.analysis5)}"
                    analysis6="${ifDefined(this.analysis6)}"
                    analysis7="${ifDefined(this.analysis7)}"
                    autoclear="true"
                >
                    <notation-provider>

                        <slot name="notation" slot="notation"></slot>

                        ${this.layout === Layout.NOGUI 
                            ? this.renderNogui() 
                            : this.renderApp()
                        }

                    </notation-provider>

                </file-provider>

            </group-provider>
        </registry-provider>
    </manager-provider>`;
    }


}