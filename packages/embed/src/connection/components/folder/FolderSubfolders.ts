import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html } from "lit";

@customElement( "folder-subfolders" )
export class FolderSubfolders extends ClientConsumer {

    @property( { type: Object, reflect: false})
    public subfolders?: FolderInfo[];

    public static styles?: CSSResultGroup | undefined = css`
        :host {
            color: var(--thermal-foreground);
        }

    `;

    protected renderSubfolder( info: FolderInfo ): unknown {
        return html`<folder-base-info .info=${info}></folder-base-info>`;

    }

    protected render(): unknown {
        return html`<section>
            ${this.subfolders?.map( subfolder => this.renderSubfolder( subfolder ) )}
        </section>`;
    }


}