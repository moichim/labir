import { ApiFolderContentResponse, FolderFileType } from "@labir/api";
import { TimeFormat } from "@labir/core";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { T } from "../../translations/Languages";

@customElement( "remote-folder-app" )
export class RemoteFolderApp extends BaseElement {

    @property({type: String, reflect: true})
    folder!: string;

    @property({type: String, reflect:true})
    url!: string;

    @state()
    protected error?: string;

    @state()
    protected loading: boolean = true;

    @state()
    protected data?: ApiFolderContentResponse;

    @state()
    protected label?: string;

    connectedCallback(): void {
        super.connectedCallback();

        if ( this.url !== undefined && this.folder !== undefined ) {
            this.loadData( this.url, this.folder );
        }

    }

    protected updated(_changedProperties: PropertyValues): void {
        if (_changedProperties.has( "url" ) || _changedProperties.has( "folder" )) {
            // this.loadData( this.url, this.folder );
        }
    }

    protected async loadData( url: string, folder: string ) {

        this.loading = true;

        const data = await fetch( url + "?" + folder );

        if ( data.ok ) {

            this.data = await data.json() as ApiFolderContentResponse;
            this.loading = false;

        } else {
            this.error = `The remote folder <code>${url}</code> was not found!`;
            this.loading = false;
        }

    }

    protected renderData( data: ApiFolderContentResponse ) {

        return html`
            <div class="files">
                ${data.files.map( file => this.renderFile( file ) )}
            </div>
        `;

    }


    protected renderFile( file: FolderFileType ) {

        return html`<div class="file">
            <file-provider thermal="${file.lrc}" batch="true">
                <h2>${TimeFormat.human(file.timestamp)}</h2>
                <file-canvas></file-canvas>
            </file-provider>
        </div>`
    }

    static styles?: CSSResultGroup | undefined = css`
    
        .files {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: var(--thermal-gap);
        }

    `;

    protected render(): unknown {

        const title = this.loading && this.data === undefined
            ? t(T.loading) + "..."
            : this.data?.info.name;

        return html`
            <manager-provider slug="${"folders_" + this.UUID}">
                <registry-provider slug="folders">
                    <group-provider slug="wtf">
        
                        <thermal-app>

                            <thermal-button variant="foreground" interactive="false" slot="bar">
                                ${title}
                            </thermal-button>

                            <div slot="bar" style="flex-grow: 4;">

                            <thermal-bar>
                                <registry-palette-dropdown></registry-palette-dropdown>
                            </thermal-bar>

                        </div>

                        <registry-histogram></registry-histogram>
                        <registry-range-slider></registry-range-slider>
                        <registry-ticks-bar></registry-ticks-bar>
                            
                        ${this.error ? this.error : nothing}

                        ${this.data ? this.renderData( this.data ) : nothing }

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`;
    }


}