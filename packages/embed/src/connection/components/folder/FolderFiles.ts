import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { FileInfo } from "packages/server/client/dist";
import { TimeFormat } from "@labir/core";
import icons from "../../../utils/icons";

@customElement( "folder-files" )
export class FolderFiles extends ClientConsumer {

    @property( { type: Object, reflect: false})
    public folder!: FolderInfo;

    @property( { type: Object, reflect: false})
    public files?: FileInfo[];

    @property({ type: Function })
    public onFileClick: ( file: FileInfo ) => void = () => {};

    protected icon = icons.image.outline( "icon" );

    public static styles?: CSSResultGroup | undefined = css`
        :host {
            color: var(--thermal-foreground);
        }

        .layout {
            display: grid;
            grid-template-columns: 1em 1fr;
            grid-template-rows: auto 1fr;
            gap: 2em;
            height: 100%;
        }

        .section__range {
            grid-column: 1 / -1;
            grid-row: 1;
        }

        .section__tools {
            grid-column: 1;
            grid-row: 2;
        }

        .section__files {
            grid-column: 2;
            grid-row: 2;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1em;
        }

        article {

            overflow: hidden;
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;

            transition: all .2s ease-in-out;
            
            &:hover,
            &:focus {
                /**
                box-shadow: var(--thermal-shadow);
                border-color: var( --thermal-slate-dark );
                */
            }

        }

        header {
            padding: calc( var(--thermal-gap) * .5 );
            background: var(--thermal-background);

            .time {
                font-size: calc( var(--thermal-fs) * 0.8 );
                color: var(--thermal-slate-dark);
            }

            h1 {
                font-size: var(--thermal-fs);
                margin: 0;
                margin-top: .3em;
            }


        }

        file-canvas {
            display: block;
        }

        .list-label {

            font-size: calc( var(--thermal-fs) * .8);
            color: var(--thermal-slate);
            line-height: 1;
            margin: 0;
            padding: 0;
            font-weight: normal;
            padding-bottom: calc(var(--thermal-gap) * 0.5);
        
        }

        .actions {
        
            padding-top: .3em;
        
        }

    `;

    protected renderFile( file: FileInfo ): TemplateResult {

        const label = file.label;
        const description = file.description;

        const time = TimeFormat.human( file.timestamp );


        const callback = this.onFileClick !== undefined
            ? () => this.onFileClick( file )
            : undefined;

        return html`<article>

            <file-provider thermal=${file.url} batch="true">

                <header>

                    <div class="time">${time}</div>

                    ${label ? html`<h1>${label}</h1>` : nothing }

                    <div class="actions">
                        <thermal-btn
                            variant="primary"
                            size="sm"
                            @click=${callback}
                        >Detail</thermal-btn>
                    </div>

                </header>

                <div>
                    <file-canvas></file-canvas>
                </div>

            </file-provider>
        </article>`;
    }

    protected render(): unknown {


        if ( this.files === undefined || this.files.length === 0 ) {
            return nothing;

        }

        const slug = this.folder.path + "__list";

        return html`

        <h2 class="list-label">
            <span><strong>${this.files.length} soubory</strong> ve složce <i>${this.folder.name}</i>:</span>
        </h2>

        <registry-provider slug="${slug}" autoclear="true">
            <group-provider slug="${slug}" autoclear="true">


                <main class="layout">

                <section class="section__range">

                    <registry-histogram expandable="true"></registry-histogram>
                    <registry-range-slider></registry-range-slider>

                </section>

                <section class="section__tools">
                    <group-tool-bar></group-tool-bar>
                </section>

                <section class="section__files">
                    ${this.files?.map( subfolder => this.renderFile( subfolder ) )}
                </section>

                </main>
            </group-provider>
        </registry-provider>`;
    }


}