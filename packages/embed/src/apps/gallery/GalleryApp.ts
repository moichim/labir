import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { ThermalGroup } from "../multiple/definitions/ThermalGroup";
import { ThermalFile } from "../multiple/definitions/ThermalFile";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { provide } from "@lit/context";
import { initLocalesInTopLevelElement, localeContext, localeConverter, Locales } from "../../translations/localeContext";
import { pngExportWidthContext, pngExportWidthSetterContext, pngExportFsContext, pngExportFsSetterContext } from "../../utils/pngExportContext";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";

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

        if ( this.registryRef.value ) {
            this.registryRef.value.registry.batch.onBatchComplete.set( this.UUID, () => {
                if ( this.registryRef.value ) {
                    const registry = this.registryRef.value.registry;
                    registry.range.applyMinmax();
                }
            } );
            this.registryRef.value.registry.groups.addListener( this.UUID, groups => {
                if ( this.registryRef.value ) {
                    const registry = this.registryRef.value.registry;
                    registry.range.applyMinmax();
                }
            } );
        }
    }

    protected processSlots(): void {

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
                            return child instanceof ThermalFile
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

    }


    protected actionMainOpen() {
        this.state = STATE.MAIN;
        this.resetRegistry();
        setTimeout( () => {
            this.group = undefined;
            this.file = undefined;
        }, 0 );
    }


    protected actionGroupOpen(group: ParsedGroup) {
        this.state = STATE.GROUP;
        this.resetRegistry();
        setTimeout( () => {
            this.group = group;
            this.columns = Math.min( 4, group.files.length );
        }, 0 );
    }


    protected actionDetailOpen(file: ParsedFile) {
        if (this.group === undefined) {
            throw new Error("Group not yet set");
        }
        this.state = STATE.FILE;
        this.resetRegistry();
        setTimeout( () => {
            this.file = file;
        }, 0 );
    }


    protected actionDetailClose() {
        this.state = STATE.GROUP;
        this.resetRegistry();
        setTimeout( () => {
            this.file = undefined;
        }, 0 );
    }


    protected resetRegistry() {
        if (this.registryRef.value) {

            this.registryRef.value.registry.forEveryInstance( instance => instance.unmountFromDom() );

            this.registryRef.value.registry.reset();

            this.registryRef.value.registry.batch.onBatchComplete.set( this.UUID, () => {
                this.registryRef.value?.registry.range.applyMinmax();
            } );
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
                            <div class="title">${group.label}</div>
                            <div class="count">${group.group.files.length} souborů</div>
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
            <group-provider slug="${this.group.label ?? "group_detail"}" autoclear="true">

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
                        <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${(event: InputEvent) => {

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
                <file-detail label="${this.group.label}" .onback="${() => this.actionDetailClose()}"></file-detail>
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
                padding: var(--thermal-gap);
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
            <registry-provider slug="${this.UUID}" ${ref(this.registryRef)}>
                <thermal-app>

                    <thermal-button variant="foreground" slot="label" @click="${() => this.actionMainOpen()}">galerie</thermal-button>

                    ${this.structure !== undefined
                ? html`
                            <registry-histogram slot="pre" expandable="true"></registry-histogram>
                            <registry-range-slider slot="pre"></registry-range-slider>
                            <registry-ticks-bar slot="pre"></registry-ticks-bar>
                        `
                : nothing
            }

                    <div slot="bar" style="flex-grow: 4;">
                        <thermal-bar>
                            <registry-palette-dropdown></registry-palette-dropdown>
                            <registry-range-full-button></registry-range-full-button>
                            <registry-range-auto-button></registry-range-auto-button>
                        </thermal-bar>
                    </div>

                    <thermal-dialog label="${t(T.config)}" slot="close">
                        <thermal-button slot="invoker">
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