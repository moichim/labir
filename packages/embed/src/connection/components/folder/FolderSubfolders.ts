import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html } from "lit";

@customElement("folder-subfolders")
export class FolderSubfolders extends ClientConsumer {

    @property({ type: Object, reflect: false })
    public subfolders?: FolderInfo[];

    @property({ type: Object, reflect: false })
    public folder!: FolderInfo;

    @property({ type: Function })
    public onFolderClick?: (folder: FolderInfo) => void;

    public static styles?: CSSResultGroup | undefined = css`
        :host {
            color: var(--thermal-foreground);
        }

        section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1em;
            justify-content: start;
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

    protected renderSubfolder(info: FolderInfo): unknown {
        return html`<server-folder-thumbnail
            .folder=${info}
            @click=${() => this.onFolderClick && this.onFolderClick(info)}
        >
        </server-folder-thumbnail>`;

    }

    protected render(): unknown {
        return html`

        <h2 class="list-label">
            <span><strong>${this.subfolders?.length} složky</strong> ve složce <i>${this.folder?.name}</i>:</span>
        </h2>


        <section>
            ${this.subfolders?.map(subfolder => this.renderSubfolder(subfolder))}
        </section>`;
    }


}