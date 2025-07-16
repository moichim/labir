import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing } from "lit";
import { FileInfo } from "packages/server/client/dist";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("server-file-detail")
export class ServerFileDetail extends ClientConsumer {

    @property({type: Object})
    public file!: FileInfo;

    @property({type: Object})
    public folder!: FolderInfo;

    @property({type: Function})
    public onClose: () => void = () => {};

    @property({type: Function})
    public onChange?: (file: FileInfo) => void = () => {};

    public static styles?: CSSResultGroup | undefined = css`

        .layout {
            display: grid;
            grid-template-columns: calc( var(--thermal-gap) * 1 ) 1fr 1fr 250px;
            gap: 2em;
            height: 100%;

            padding-top: calc(var(--thermal-gap) * 1);
        }

        .section {

        }

        .section__tools {
            grid-column: 1;
        }

        .section__image {
            grid-column: 2;
            display: flex;
            flex-direction: column;
            gap: 2em;
        }

        .section__content {
            grid-column: 3;

            gap: 1em;
            display: flex;
            flex-direction: column;
            
            file-analysis-complex {
                flex-grow: 1;
            }


            .range {
            
                display: flex;
                gap: calc(var(--thermal-gap) * 0.5);
                align-items: center;
            
            }

        }

        .section__server {
            grid-column: 4;
        }



    
    `;



    protected renderContent(): unknown {


        return html`

        <main class="layout">

            <section class="section section__tools">
                <group-tool-bar></group-tool-bar>
            </section>

            <section class="section section__image">


                <div>

                    <registry-histogram expandable="true"></registry-histogram>
                    <registry-range-slider></registry-range-slider>

                </div>

                <div>

                    <file-canvas></file-canvas>
                    <file-timeline></file-timeline>

                </div>

            </section>

            <section class="section section__content">

                <div class="range">

                    <registry-palette-dropdown></registry-palette-dropdown>

                    <registry-range-full-button></registry-range-full-button>

                    <registry-range-auto-button></registry-range-auto-button>

                    ${this.folder.may_manage_files_in
                        ? html`<file-analysis-store-button
                        .info=${this.file}
                        .folder=${this.folder}
                        size="md"
                    ></file-analysis-store-button>`
                        : nothing
                    }

                </div>


                <file-analysis-complex></file-analysis-complex>
            </section>

            <section class="section section__server">

                <file-comments
                    .file=${this.file}
                    .folder=${this.folder}
                    .onChange=${this.onChange}
                    style="max-height: 400px;"
                ></file-comments>

            </section>

        </main>
        
        `;

    }




    protected render(): unknown {

        const slug = this.folder.path + this.file.fileName;


        this.log( this.file.analyses );


        return html`

            <registry-provider slug=${this.folder.path} batch="true" autoclear="true">
                <group-provider slug=${slug} batch="true" autoclear="true">
                    <file-provider 
                        thermal=${this.file.url} 
                        batch="true" 
                        autoclear="true"
                        analysis1=${ifDefined(this.file.analyses[0])}
                        analysis2=${ifDefined(this.file.analyses[1])}
                        analysis3=${ifDefined(this.file.analyses[2])}
                        analysis4=${ifDefined(this.file.analyses[3])}
                        analysis5=${ifDefined(this.file.analyses[4])}
                        analysis6=${ifDefined(this.file.analyses[5])}
                        analysis7=${ifDefined(this.file.analyses[6])}
                    >


                        <server-file-header .file=${this.file} .folder=${this.folder} .onClose=${this.onClose}>
                            <slot name="header"></slot>
                        </server-file-header>


                        ${this.renderContent()}

                    </file-provider>
                </group-provider>
            </registry-provider>`;
    }


}