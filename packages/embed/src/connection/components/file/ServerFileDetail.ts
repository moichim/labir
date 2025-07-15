import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html } from "lit";
import { FileInfo } from "packages/server/client/dist";

@customElement("server-file-detail")
export class ServerFileDetail extends ClientConsumer {

    @property({type: Object})
    public file!: FileInfo;

    @property({type: Object})
    public folder!: FolderInfo;

    @property({type: Function})
    public onClose: () => void = () => {};

    public static styles?: CSSResultGroup | undefined = css`

        .layout {
            display: grid;
            grid-template-columns: calc( var(--thermal-gap) * 1 ) 1fr 1fr;
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

                    <registry-histogram expandable></registry-histogram>
                    <registry-range-slider></registry-range-slider>

                </div>

                <div>

                    <file-canvas></file-canvas>
                    <file-timeline></file-timeline>

                </div>

            </section>

            <section class="section section__content">
                <file-analysis-complex></file-analysis-complex>
            </section>

        </main>
        
        `;

    }




    protected render(): unknown {

        const slug = this.folder.path + this.file.fileName;


        return html`

        <server-file-header .file=${this.file} .folder=${this.folder} .onClose=${this.onClose}>
            <slot name="header"></slot>
        </server-file-header>

            <registry-provider slug=${this.folder.path} batch="true" autoclear="true">
                <group-provider slug=${slug} batch="true" autoclear="true">
                    <file-provider thermal=${this.file.url} batch="true" autoclear="true">


                        ${this.renderContent()}

                    </file-provider>
                </group-provider>
            </registry-provider>`;
    }


}