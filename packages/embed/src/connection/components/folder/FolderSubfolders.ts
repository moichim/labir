import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html } from "lit";

@customElement( "folder-subfolders" )
export class FolderSubfolders extends ClientConsumer {

    @property( { type: Object, reflect: false})
    public subfolders?: FolderInfo[];

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
    `;

    protected renderSubfolder( info: FolderInfo ): unknown {
        return html`<server-folder-thumbnail
            .folder=${info}
            @click=${() => this.onFolderClick && this.onFolderClick(info)}
        >
            <thermal-btn 
                slot="action" 
                variant="foreground" 
                size="sm" 
                icon="wifi" 
                iconStyle="micro" 
                title="Toto je nějaký titulek"
                @click=${() => console.log("tpx")}
            >Info</thermal-btn>    


            <thermal-btn 
                slot="action" 
                variant="primary" 
                size="sm" 
                icon="wifi" 
                iconStyle="micro" 
                title="Toto je nějaký titulek"
                @click=${() => console.log("tpx")}
            >Info</thermal-btn> 

        </server-folder-thumbnail>`;

    }

    protected render(): unknown {
        return html`
        <section>
            ${this.subfolders?.map( subfolder => this.renderSubfolder( subfolder ) )}
        </section>`;
    }


}