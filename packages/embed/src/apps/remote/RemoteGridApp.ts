import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { ifDefined } from "lit/directives/if-defined.js";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { ApiTimeGroupResponse, FolderFileType } from "@labir/api";
import { format } from "date-fns";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { AvailableThermalPalettes } from "@labir/core";

type GroupingType = "hours" | "days" | "weeks" | "months" | "years";

@customElement("remote-grid-app")
export class RemoteTimeGridApp extends BaseElement {

    /** The API endpoint main URL address */
    @property({ type: String, reflect: true })
    public url!: string;

    /** An optional subfolder relative to the API endpoint in `this.url` */
    @property({ type: String, reflect: true })
    public subfolder?: string;

    @property({ type: String, reflect: true })
    public by: GroupingType = "days";

    @state()
    protected loading: boolean = false;

    @property({ type: String, reflect: true })
    license?: string;

    @property({ type: String, reflect: true })
    label?: string;

    @property({ type: String, reflect: true })
    author?: string;

    @state()
    protected data?: ApiTimeGroupResponse;

    @state()
    protected heightRange: number = 0;

    @state()
    protected heightFolders: number = 0;

    protected observer?: ResizeObserver;

    protected registryRef: Ref<RegistryProviderElement> = createRef();

    @property({ type: String, reflect: true, attribute: true })
    palette: AvailableThermalPalettes = "jet";

    connectedCallback(): void {
        super.connectedCallback();
        
    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);
        if ( _changedProperties.has("by") || _changedProperties.has("url") || _changedProperties.has( "subfolder" ) ) {
            this.loadData(this.by, this.url, this.subfolder);
        }
    }

    protected getUrl(grouping: GroupingType, url: string, subfolder?: string) {

        let result = url + `?${grouping}&grid`;

        if (subfolder) {
            result += `&scope=${subfolder}`;
        }

        return result;

    }

    async loadData(grouping: GroupingType, url: string, subfolder?: string) {

        this.loading = true;
        this.data = undefined;

        if ( this.registryRef.value ) {
            this.registryRef.value.registry.groups.removeAllGroups();
        }

        try {

            const target = this.getUrl(grouping, url, subfolder);

            const data = await fetch(target, {});

            if (data.ok) {

                const response = await data.json() as ApiTimeGroupResponse;

                const sortedData = Object.entries( response.data ).map( ([time, folders]) => {

                    const f = Object.entries( folders );

                    f.sort( (a,b) => {
                        return a[0] < b[0] ? -1 : 1;
                    } );

                    const content = Object.fromEntries(f);

                    return [time, content];

                } );

                response.data = Object.fromEntries( sortedData );

                this.data = response;

                this.loading = false;

                this.log( this.data );

                this.observer = new ResizeObserver( entries => {
                    this.log( entries );

                    const entry = entries[0];

                    if ( entry ) {

                        this.heightFolders = this.getFoldersHeight();
                        this.heightRange = this.getRangeHeight();

                    }

                } );

                this.observer.observe( this );


            } else {
                throw new Error("Data not OK!");
            }

        } catch (err) {

            this.loading = false;

        }


    }

    protected getRangeHeight(): number {
        const range = this.renderRoot.querySelector( "#range" );
        console.log( range );
        if ( range !== null ) return range.clientHeight;
        return 0;
    }

    protected getFoldersHeight(): number {
        const folders = this.renderRoot.querySelector("#folders");
        if ( folders !== null ) return folders.clientHeight;
        return 0;
    }


    static styles?: CSSResultGroup | undefined = css`
    
        :host {
            --offset: calc( var(--thermal-gap) * .5 );
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border:0;
        }

        tr, td {
            border: 0;
            padding: 0;
            margin: 0;
        }

        .sticky {
            position: sticky;
            z-index: 12;
        }

        .bg {
            background-color: var(--thermal-slate-light);
        }

        .label-folder {
            font-size: 16px;
        }

        .label-time {
            font-size: 16px;
        }

        h1, h2, h3, h4 {
            margin: 0;
            padding: 0;
            line-height: 1em;
            font-size: var(--thermal-fs);
        }



        .cell-folder-header {
            
            border-radius: var(--thermal-radius);
            
            margin-left: var(--offset);
            margin-right: var(--offset);

            padding: var(--thermal-gap);

            color: var(--thermal-foreground);
            background-color: var(--thermal-background);
            border: 1px solid var(--thermal-slate-light);

            box-shadow: 0px 0px 50px var(--thermal-slate-light);
        }

        .cell-divider {
            margin-left: var(--offset);
            margin-right: var(--offset);

            group-provider {
                display: flex;
                width: 100%;
                align-items: center;
                box-sizing: border-box;
                padding: var(--thermal-gap);
                gap: 3px;

                h2 {
                    flex-grow: 1;
                }
            }

        }

        .cell-group {
            margin-left: var(--offset);
            margin-right: var(--offset);
        }

        td.separator {
            height: calc( var(--thermal-gap) * 1.5);
        }

        tr.group-header {
            border-left: 1px solid var(--thermal-slate);
            border-right: 1px solid var(--thermal-slate);
            border-top: 1px solid var(--thermal-slate);
        }


        group-provider.group-files {

            display: table-row;

            border-left: 1px solid var(--thermal-slate);
            border-right: 1px solid var(--thermal-slate);
            border-bottom: 1px solid var(--thermal-slate);

            td {
                padding-bottom: var(--offset);
            }
        
        }

        file-provider {

            &:not(:last-child ) {
                .file {
                    margin-bottom: var(--thermal-gap);
                }
            }
        
        }
        

        .file {

            padding: var(--thermal-gap);
            border-radius: var(--thermal-radius);

            color: var(--thermal-foreground);
            background-color: var(--thermal-background);
        
            header {
                display: flex;
                width: 100%;
                align-items: center;
                padding-bottom: var(--offset);
                gap: 3px;
                h4 {
                    flex-grow: 1;
                }
            }

        }
    
    `;

    

    protected getGroupLabel( timestamp: number ) {


        if ( this.by === "hours" ) {
            return format( timestamp, "d. M.yyyy - mm:ss" );
        } else if (this.by === "days") {
            return format( timestamp, "d. M. yyyy" );
        } else if ( this.by === "weeks" ) {
            return format( timestamp, "I" ) + " roku " + format( timestamp, "yyyy" );
        } else if ( this.by === "months" ) {
            return format( timestamp, "M" );
        } else if ( this.by === "years" ) {
            return format( timestamp, "yyyy" );
        }

        return timestamp.toString();

    }

    protected getItemLabel( timestamp: number ) {

        if ( this.by === "hours" ) {
            return format( timestamp, "h:mm:ss" );
        } else if (this.by === "days") {
            return format( timestamp, "H:mm:ss" );
        } else if ( this.by === "weeks" ) {
            return format( timestamp, "I" ) + " roku " + format( timestamp, "yyyy" );
        } else if ( this.by === "months" ) {
            return format( timestamp, "M" );
        } else if ( this.by === "years" ) {
            return format( timestamp, "yyyy" );
        }

        return timestamp.toString();

    }

    protected renderFile( file: FolderFileType ) {
        return html`
            <file-provider
                batch="true"
                thermal="${file.lrc}"
                visible="${ifDefined(file.png)}"
            >

                <article class="file">

                    <header>

                        <h4>${this.getItemLabel( file.timestamp * 1000 )}</h4>

                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                        <file-range-propagator></file-range-propagator>
                        <file-info-button>
                            <file-button slot="invoker" label="${t(T.info).toLowerCase()}"></file-button>
                        </file-info-button>

                    </header>

                    <main>

                        <file-canvas></file-canvas>

                        <file-analysis-table></file-analysis-table>

                    </main>

                </article>

            </file-provider>
        `;
    }


    protected renderGrid( data: ApiTimeGroupResponse ) {

        const header = Object.values(
            Object.values( data.data )[0]
        ).map( value => value.name );

        const colspan = header.length;

        const cellWidth = 100 / header.length + "%";

        return html`


            <div slot="bar" style="flex-grow: 4;">

                <thermal-bar>

                    <registry-palette-dropdown></registry-palette-dropdown>
                    <registry-opacity-slider></registry-opacity-slider>
                    <registry-range-full-button></registry-range-full-button>

                </thermal-bar>

            </div>


            <table>


                <tr id="range" class="sticky bg" style="top: 0px;">
                    <td colspan="${colspan}" style="padding-bottom: var(--thermal-gap); padding-top:var(--offset)">

                        <registry-histogram></registry-histogram>

                        <registry-range-slider></registry-range-slider>
                        <registry-ticks-bar></registry-ticks-bar>

                        <group-tool-buttons></group-tool-buttons>
                    
                    </td>
                </tr>


                <tr id="folders" class="sticky" style="top: ${this.heightRange}px;">
                    ${Object.values( Object.values( data.data )[0] ).map( value => {
                        return html`<td>
                            <div class="cell-folder-header">
                                <h1>${value.name}</h1>
                            </div>
                    </td>`;
                    } )}
                </tr>
            
                ${Object.entries( data.data ).map( ([groupKey, record]) => {

                    const colspan = Object.keys( record ).length;

                    return html`

                        <tr><td class="separator"></td></tr>

                        <tr class="group-header">
                            <td colspan="${colspan}">
                                <div class="cell-divider">
                                    <group-provider slug=${ifDefined( groupKey )}>
                                        <h2>${this.getGroupLabel( parseInt( groupKey ) * 1000 )}</h2>
                                        
                                        <group-download-dropdown></group-download-dropdown>

                                        <group-range-propagator>
                                            <thermal-button class="default">Rozsah skupiny</thermal-button>
                                        </group-range-propagator>

                                        <registry-range-full-button></registry-range-full-button>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>

                        <group-provider class="group-files" slug=${ifDefined( groupKey )}>
                            ${Object.values( record ).map( ( folder ) => {
                                return html`<td style="width: ${cellWidth};">
                                        <div class="cell-group">

                                        ${folder.count > 0
                                            ? Object.values( folder.files ).map( this.renderFile.bind(this) )
                                            : nothing
                                        }

                                        </div>
                                </td>`;
                            } )}
                        </group-provider>
                    `;
                } )}

            </table>
            
        `;

    }


    protected render(): unknown {

        const title = this.loading
            ? t(T.loading) + ""
            : this.label ?? "Remote folder";

        return html`
                <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                    <registry-provider slug="folders_app_registry" ${ref(this.registryRef)}>
            
                            <thermal-app
                                author=${ifDefined(this.author)}
                                license=${ifDefined(this.license)}
                            >
    
                                <thermal-button variant="foreground" interactive="false" slot="bar">
                                    ${title}
                                </thermal-button>


                                ${this.data ? this.renderGrid(this.data) : nothing }
    
                    
                        </thermal-app>
                </registry-provider>
            </manager-provider>`;
    }


}