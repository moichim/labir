import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { FileInfo } from "packages/server/client/dist";
import { TimeFormat } from "@labir/core";

@customElement( "folder-files" )
export class FolderFiles extends ClientConsumer {

    @property( { type: Object, reflect: false})
    public folder!: FolderInfo;

    @property( { type: Object, reflect: false})
    public files?: FileInfo[];

    @property({ type: Function })
    public onFolderClick?: ( folder: FolderInfo ) => void;

    public static styles?: CSSResultGroup | undefined = css`
        :host {
            color: var(--thermal-foreground);
        }

        section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1em;
        }

        .list-label {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: .5em;
            
            margin-bottom: calc( var( --thermal-gap ) * .5 );
            
            font-size: calc( var( --thermal-fs ) * .9);
            font-weight: normal;
        }
    `;

    protected renderFile( file: FileInfo ): TemplateResult {

        const label = file.label;
        const description = file.description;

        const time = TimeFormat.human( file.timestamp );



        return html`<article>

            <file-provider thermal=${file.url} batch="true">

                <header>

                    <div class="">${time}</div>
                    <file-download-dropdown></file-download-dropdown>
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
            <span>Soubory složky <strong>${this.folder.name}</strong></span>
            <span>(${this.files.length})</span>
        </h2>

        <registry-provider slug="${slug}" autoclear="true">
            <group-provider slug="${slug}" autoclear="true">

                <section>
                    ${this.files?.map( subfolder => this.renderFile( subfolder ) )}
                </section>
            </group-provider>
        </registry-provider>`;
    }


}