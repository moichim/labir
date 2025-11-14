import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labirthermal/server";
import { css, CSSResultGroup, html, nothing } from "lit";

@customElement("user-folders")
export class UserFolders extends ClientConsumer {

    @property({ type: Array })
    folders: FolderInfo[] = [];

    @property({ type: Function })
    onFolderClick?: (folder: FolderInfo) => void;

    public static styles?: CSSResultGroup | undefined = css`
            :host {
                color: var(--thermal-foreground);
                
            }
    
            table {
                display: table;
                width: 100%;
                border-collapse: collapse;
                height: 1px;
                border: 0;
            }
    
            .list-label {
    
                font-size: .8em;
                color: var(--thermal-slate-dark);
                line-height: 1;
                margin: 0;
                padding: 0;
                font-weight: normal;
                padding-bottom: 1em;
            
            }
    `;

    protected renderSubfolder(info: FolderInfo): unknown {
        return html`<server-folder-row
                .folder=${info}
                @click=${() => this.onFolderClick && this.onFolderClick(info)}
            >
            </server-folder-row>`;
    }

    protected render(): unknown {

        if ( 
            ! this.isLoggedIn 
            || this.folders?.length === 0
            || this.identity === undefined
        ) {
            return nothing;
        }

        const name = this.identity.meta.name || this.identity.user || "Uživatel";

        return html`
        
        <h2 class="list-label">
            <span><strong>${this.folders?.length} složky</strong> uživatele <i>${name}</i>:</span>
        </h2>
        
        <table>
            ${this.folders.map((folder) => this.renderSubfolder(folder))}
        </table>`;
    }


}