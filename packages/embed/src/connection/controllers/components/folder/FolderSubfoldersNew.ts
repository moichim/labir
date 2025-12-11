import { customElement, property } from "lit/decorators.js";
import { FolderInfo } from "@labirthermal/server";
import { css, CSSResultGroup, html } from "lit";
import { FolderMode } from "../../../composition/AppWithState";
import { ControlledConsumer } from "../../abstraction/ControlledConsumer";

@customElement("folder-subfolders-new")
export class FolderSubfolders extends ControlledConsumer {


    @property({ type: Function })
    public onFolderClick?: (folder: FolderInfo) => void;

    @property({type: String})
    public folderMode: FolderMode = FolderMode.LIST;

    public static styles?: CSSResultGroup | undefined = css`
        :host {
            color: var(--thermal-foreground);
        }

        :host(  [foldermode="list-subfolders"] ) {
            section {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1em;
                justify-content: start;
            }
        }

        :host(  [foldermode="table-subfolders"] ) {
            section {
                display: table;
                width: 100%;
                border-collapse: collapse;
                height: 1px;
                border: 0;
            }
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
    `;

    connectedCallback(): void {
        super.connectedCallback();
        this.content.subscribeToFolderUpdates( this );
        this.content.subscribeToSubfoldersUpdates( this );
    }

    protected renderSubfolder(info: FolderInfo): unknown {

        if ( this.folderMode === FolderMode.TABLE ) {
            return html`<server-folder-row
                .folder=${info}
                @click=${() => this.onFolderClick && this.onFolderClick(info)}
            ></server-folder-row>`;
        }

        return html`<server-folder-thumbnail
            .folder=${info}
            @click=${() => this.onFolderClick && this.onFolderClick(info)}
        >
        </server-folder-thumbnail>`;

    }

    protected render(): unknown {
        return html`

        <h2 class="list-label">
            <span><strong>${this.content.subfolders?.length} složky</strong> ve složce <i>${this.content.folder?.name}</i>:</span>
        </h2>


        <section>
            ${this.content.subfolders?.map(subfolder => this.renderSubfolder(subfolder))}
        </section>`;
    }


}