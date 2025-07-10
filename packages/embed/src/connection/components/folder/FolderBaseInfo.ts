import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html } from "lit";

@customElement( "folder-base-info" )
export class FolderBaseInfo extends ClientConsumer {

    @property( { type: Object, reflect: false})
    public info?: FolderInfo;

    public static styles?: CSSResultGroup | undefined = css`
        :host {
            display: block;
            padding: 0.5rem;
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            color: var(--thermal-foreground);
            background-color: var(--thermal-background);
        }

        h1 {
            font-size: var(--thermal-fs);
            margin: 0;
            padding: 0;
        }

        .description {
            font-size: calc(var(--thermal-fs) * 0.8);
            color: var(--thermal-slate);
        }
    `;

    protected render(): unknown {
        return html`<section>
            <h1>${this.info?.name}</h1>
            <div class="description">${this.info?.description}</div>
            <div>Souborů: ${this.info?.lrc_count}</div>
        </section>`;
    }


}