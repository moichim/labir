import { ThermalRegistry } from "@labir/core";
import { FileInfo, FolderInfo } from "@labir/server";
import { consume } from "@lit/context";
import { css, CSSResultGroup, html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { registryContext } from "../../../hierarchy/providers/context/RegistryContext";
import { ClientConsumer } from "../ClientConsumer";

@customElement("server-file-detail")
export class ServerFileDetail extends ClientConsumer {

    @property({ type: Object })
    public file!: FileInfo;

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: Function })
    public onClose: () => void = () => { };

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void = () => { };

    @consume({ context: registryContext, subscribe: true })
    public registry?: ThermalRegistry;

    @property({ type: Number })
    public from?: number;

    @property({ type: Number })
    public to?: number;

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);


        // Add listener for processing end to refresh the component
        this.registry?.onProcessingEnd.set(this.UUID, () => {

            this.registry?.range.applyMinmax();

            return;

            // this.log( this.from, this.to );

            if ( this.from !== undefined && this.to !== undefined ) {
                this.registry!.range.imposeRange( {
                    from: this.from, 
                    to: this.to 
                } );
            } else {
                this.registry?.range.applyMinmax();
            }

            
            // this.requestUpdate();
        });
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        // Remove listener for processing end
        this.registry?.onProcessingEnd.delete(this.UUID);
    }

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
                    <registry-ticks-bar></registry-ticks-bar>

                </div>

                <div>

                    <file-canvas></file-canvas>
                    <file-timeline></file-timeline>

                </div>

            </section>

            <section class="section section__content">
                <file-analysis-complex></file-analysis-complex>
            </section>

            <section class="section section__server">

                <file-tags
                    .file=${this.file}
                    .folder=${this.folder}
                    .onChange=${this.onChange}
                    .editable="${this.folder.may_manage_files_in}"
                ></file-tags>

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

        return html`

            <server-file-header .file=${this.file} .folder=${this.folder} .onClose=${this.onClose}>
                <slot name="header"></slot>
            </server-file-header>

            ${this.renderContent()}`;
    }


}