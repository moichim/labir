import { AvailableThermalPalettes } from "@labir/core";
import { provide } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { T } from "../../translations/Languages";
import { initLocalesInTopLevelElement, localeContext, localeConverter, Locales } from "../../translations/localeContext";
import { pngExportFsContext, pngExportFsSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../../utils/converters/pngExportContext";
import { ThermalFileElement } from "../../utils/multipleFiles/ThermalFile";
import { ThermalGroup } from "../../utils/multipleFiles/ThermalGroup";

type ParsedFile = {
    lrc: string;
    png?: string;
    label?: string;
};

type ParsedGroup = {
    label?: string,
    description?: string,
    lat?: string,
    lon?: string,
    files: ParsedFile[]
};

type ParsedStructure = ParsedGroup[];

enum STATE {
    MAIN = "main",
    GROUP = "group",
    FILE = "file"
}

@customElement("thermal-gallery-app")
export class GalleryApp extends BaseElement {


    // Presentational attributes
    @property({ type: String, reflect: true })
    public author?: string;

    @property({ type: String, reflect: true })
    public label: string = "Gallery of IR images";

    @property({ type: String, reflect: true })
    public license?: string;

    @property({ type: String, reflect: true, attribute: true })
    public palette: AvailableThermalPalettes = "jet";

    @state()
    @queryAssignedElements({ flatten: true })
    protected slottedElements!: Array<Element>;

    @state()
    protected structure?: ParsedStructure;

    @state()
    protected state: STATE = STATE.MAIN;

    @state()
    protected group?: ParsedGroup;

    @state()
    protected file?: ParsedFile;

    protected registryRef: Ref<RegistryProviderElement> = createRef();


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

    @state()
    columns: number = 3;

    connectedCallback(): void {

        super.connectedCallback();

        initLocalesInTopLevelElement(this);

        this.addEventListener("slotchange", () => {
            this.processSlots();
        });

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.processSlots();

        this.resetRegistry();

        if (this.registryRef.value) {

            this.registryRef.value?.registry.palette.setPalette(this.palette);

            this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID, () => {
                if (this.registryRef.value) {
                    const registry = this.registryRef.value.registry;
                    registry.range.applyMinmax();
                }
            });

            this.registryRef.value.registry.groups.addListener(this.UUID, () => {
                if (this.registryRef.value) {
                    const registry = this.registryRef.value.registry;
                    registry.range.applyMinmax();
                }
            });
        }
    }

    protected processSlots(): void {
        setTimeout(() => {
            this.structure = this.slottedElements
                .filter(element => element instanceof ThermalGroup)
                .map(element => {
                    return {
                        label: element.getAttribute("label"),
                        description: element.getAttribute("description"),
                        lat: element.getAttribute("lat"),
                        lon: element.getAttribute("lon"),
                        files: Array.from(element.children)
                            .filter(child => {
                                return child instanceof ThermalFileElement
                                    && child.hasAttribute("lrc")
                            })
                            .map(child => {
                                return {
                                    lrc: child.getAttribute("lrc"),
                                    png: child.getAttribute("png"),
                                    label: child.getAttribute("label")
                                } as ParsedFile
                            })
                    } as ParsedGroup;
                })
                .filter(element => element.files.length > 0);
        }, 1000);

    }


    protected actionMainOpen() {
        this.state = STATE.MAIN;
        this.resetRegistry();
        setTimeout(() => {
            this.group = undefined;
            this.file = undefined;
        }, 0);
    }


    protected actionGroupOpen(group: ParsedGroup) {

        this.resetRegistry();
        setTimeout(() => {
            this.group = group;
            this.columns = Math.min(4, group.files.length);

            if (group.files.length > 1) {
                this.state = STATE.GROUP;
            } else {
                this.state = STATE.FILE;
                this.file = group.files[0];
            }

        }, 0);
    }


    protected actionDetailOpen(file: ParsedFile) {
        if (this.group === undefined) {
            throw new Error("Group not yet set");
        }
        this.state = STATE.FILE;
        this.resetRegistry();
        setTimeout(() => {
            this.file = file;
        }, 0);
    }


    protected actionDetailClose() {
        this.state = STATE.GROUP;
        this.resetRegistry();
        setTimeout(() => {
            this.file = undefined;
        }, 0);
    }


    protected resetRegistry() {
        if (this.registryRef.value) {

            this.registryRef.value.registry.forEveryInstance(instance => instance.unmountFromDom());

            // this.registryRef.value.registry.reset();

            this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID, () => {
                this.registryRef.value?.registry.range.applyMinmax();
            });
        }
    }



    protected renderMain() {

        if (this.structure === undefined) {
            return html`<thermal-loading label="Načítám data"></thermal-loading>`;
        }

        const preview = this.structure.map(group => {
            const { files, ...rest } = group;
            return {
                ...rest,
                file: files[0],
                group
            }
        });

        const groups = preview.map((group, index) => {
            const slug = group.label ?? `group_preview_${index}`;
            return html`<group-provider slug="${slug}" autoclear="true">
                <button class="group-thumbnail" @click="${() => this.actionGroupOpen(group.group)}">
                    <div class="header">
                        <div class="info">
                            <div class="title">${group.label}</div>
                            <div class="count">${t(T.numfiles, { num: group.group.files.length })}</div>
                        </div>
                        <div class="button">
                            ${group.group.files.length > 1
                    ? html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>`
                    : html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>`
                }
                        </div>
                    </div>
                    <file-provider thermal="${group.file.lrc}" batch="true" autoclear="true">
                        <file-canvas></file-canvas>
                    </file-provider>
                </button>
            </group-provider>`;
        });


        return html`
            <div class="main">
                ${groups}
            </div>
        `;

    }


    protected renderGroup() {

        if (this.structure === undefined || this.group === undefined) {
            return html`<thermal-loading></thermal-loading`;
        }

        return this.renderBrowser(html`
            <group-provider slug="${this.group.label ?? `group_detail_${Math.random()}`}" autoclear="true">

                <group-chart slot="pre"></group-chart>

                <header>

                    <thermal-button variant="foreground" @click="${() => this.actionMainOpen()}">x</thermal-button>

                    <thermal-dropdown>
                        <span slot="invoker">${this.group.label}</span>
                        ${this.structure.filter(group => group.label !== this.group?.label).map(group => {
            return html`<div slot="option">
                                <thermal-button @click="${() => this.actionGroupOpen(group)}">${group.label}</thermal-button>
                            </div>`;
        })}
                    </thermal-dropdown>

                    <group-download-dropdown></group-download-dropdown>

                    <div>
                        <input type="range" min="1" max="4" step="1" value=${this.columns} @input=${(event: InputEvent) => {

                const target = event.target as null | { value: string }
                const value = target?.value;
                if (value !== undefined) {
                    this.columns = parseInt(value);
                }
            }}></input>
                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${t(T.columns, { num: this.columns })}</div>
                    </div>
                    
                    <group-analysis-sync-button></group-analysis-sync-button>

                </header>

                ${this.group.description
                ? html`<section class="group-description">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p>${this.group.description}</p>
                    </section>`
                : nothing
            }

                <section class="files columns_${this.columns}">
            
                    ${this.group.files.map(file => html`<file-provider thermal="${file.lrc}" batch="true" autoclear="true">
                        <file-thumbnail .ondetail="${() => this.actionDetailOpen(file)}"></file-thumbnail>
                    </file-provider>`)}
            
                </section>

            </group-provider>
        ` );

    }


    protected renderFile() {

        if (this.structure === undefined || this.group === undefined || this.file === undefined) {
            return html`<thermal-loading></thermal-loading`;
        }

        return this.renderBrowser(html`<group-provider slug="${this.file.lrc}" autoclear="true">

            <file-provider batch="true" autoclear="true" thermal="${this.file.lrc}">
                <file-detail label="${this.group.label}" .onback="${() => {
                this.group?.files.length === 1
                    ? this.actionMainOpen()
                    : this.actionDetailClose()
            }}"></file-detail>
            </file-provider>

        </group-provider>`);

    }



    protected renderBrowser(content: ReturnType<typeof html>) {

        return html`<div class="browser state_${this.state}">
            <section>
                <group-tool-bar></group-tool-bar>
            </section>
            <section>
                ${content}
            </section>
        </div>`;

    }



    public static styles?: CSSResultGroup | undefined = css`
        .group-thumbnail {
            
            margin: 0;
            padding: 0;
            cursor: pointer;

            overflow: hidden;
            width: 100%;

            border-radius: var(--thermal-radius);
            border: 1px solid var(--thermal-slate);

            background: var(--thermal-slate-light);
            color: var(--thermal-foreground);

            transition: all .4s ease-in-out;

            box-shadow: 0 0 5px var(--thermal-slate);

            div.header {

                display: grid;
                grid-template-columns: auto 1.5em;
                padding: var(--thermal-gap);
                gap: var(--thermal-gap);
                text-align: left;

                .title {
                    font-weight: bold;
                    font-size: 1.2em;
                    margin-bottom: .5em;
                }

                .count {
                    font-size: .9em;
                    opacity: .8;
                }

                .button {
                    opacity: .8;
                }
            }

            file-provider {
                overflow: hidden;
                display: block;
            }

            file-canvas {
                overflow: hidden;
                display: block;
                transition: all .4s ease-in-out;
            }

            &:hover,
            &:focus {
                background: var(--thermal-background);
                box-shadow: 0 0 15px var(--thermal-slate-dark);
                file-canvas {
                    transform: scale(1.1);
                }
            }
        }

        .browser {
            display: grid;
            grid-template-columns: 3em 1fr;

            &.state_file {
                file-provider {
                    display: block;
                    background: var(--thermal-background);
                    padding: var(--thermal-gap);
                    border-radius: var(--thermal-radius);
                    border: 1px solid var(--thermal-slate);
                }
            }
        
            &.state_group {
                group-provider {

                    display: block;
                    width: 100%;
                    box-sizing: border-box;
                    padding: var(--thermal-gap);
                    border: 1px solid var(--thermal-slate);
                    border-radius: var(--thermal-radius);

                    header {
                        display: flex;
                        gap: 5px;
                        margin-bottom: var(--thermal-gap);
                    }

                    .group-description {
                        border: 1px solid var(--thermal-slate);
                        border-radius: var(--thermal-radius);
                        padding: var(--thermal-gap);
                        box-sizing: border-box;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: var(--thermal-gap);
                        margin-bottom: var(--thermal-gap);

                        svg {
                            opacity: .8;
                            width: 1em;
                        }

                        p {
                            margin: 0;
                            padding: 0;
                            font-size: calc(var(--thermal-gap) * .8);
                        }
                    }

                    .files {

                        display: grid;
                        margin: calc( var(--thermal-gap) * .5 * -1);

                        &.columns_1 { grid-template-columns: 100%; }
                        &.columns_2 { grid-template-columns: repeat( 2, 50% ); }
                        &.columns_3 { grid-template-columns: repeat( 3, calc(100% / 3) ); }
                        &.columns_4 { grid-template-columns: repeat( 4, calc(100% / 4) ); }
                        &.columns_5 { grid-template-columns: repeat( 5, calc(100% / 5) ); }
                        &.columns_6 { grid-template-columns: repeat( 6, calc(100% / 6) ); }
                        &.columns_7 { grid-template-columns: repeat( 7, calc(100% / 7) ); }
                        &.columns_8 { grid-template-columns: repeat( 8, calc(100% / 8) ); }
                        &.columns_9 { grid-template-columns: repeat( 9, calc(100% / 9) ); }
                        &.columns_10 { grid-template-columns: repeat( 10, calc(100% / 10) ); }

                        file-thumbnail {
                            padding: calc( var(--thermal-gap) * .5);
                        }
                    }
                }
            }
        }


        .main {

            display: grid;
            grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
            gap: var(--thermal-gap);

            group-provider {
                width: 100%;
            }
        }
    `;



    protected render(): unknown {
        return html`<manager-provider slug="${this.UUID}">
            <registry-provider slug="${this.UUID}" ${ref(this.registryRef)} palette="${this.palette}">
                <thermal-app 
                    author="${ifDefined(this.author)}" 
                    license="${this.license}" 
                    showfullscreen="true"
                    label="${this.label}"
                    .onlabel="${() => this.actionMainOpen()}"
                >

                    ${this.structure !== undefined
                ? html`
                        <registry-histogram slot="pre" expandable="true"></registry-histogram>
                        <registry-range-slider slot="pre"></registry-range-slider>
                        <registry-ticks-bar slot="pre"></registry-ticks-bar>
                        `
                : nothing
            }
                    <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

                    <registry-range-full-button slot="bar-pre"></registry-range-full-button>
                    <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>

                    <thermal-dialog label="${t(T.config)}" slot="bar-post">
                        <thermal-button slot="invoker" variant="plain">
                            <svg style="width: 1em; transform: translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
                            </svg>
                        </thermal-button>
                        <div slot="content">
                            <table>
                                <png-export-panel></png-export-panel>
                                <registry-display-panel></registry-display-panel>
                            </table>
                        </div>
                    </thermal-dialog>

                    ${this.state === STATE.MAIN ? this.renderMain() : nothing}
                    ${this.state === STATE.GROUP ? this.renderGroup() : nothing}
                    ${this.state === STATE.FILE ? this.renderFile() : nothing}

                    <slot></slot>


                </thermal-app>
            </registry-provider>
        </manager-provider>`;
    }

}