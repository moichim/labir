import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing } from "lit";
import icons from "../../../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

@customElement( "folder-base-info" )
export class FolderBaseInfo extends ClientConsumer {

    @property( { type: Object, reflect: false})
    public info?: FolderInfo;

    protected icon = icons.folder.outline( "icon" );

    public static styles?: CSSResultGroup | undefined = css`
        :host {
            display: block;
            padding: var( --thermal-gap );

            border-radius: var( --thermal-radius );

            background: var(--thermal-background);
            color: var(--thermal-foreground);
        }

        section {
            display: grid;
            grid-template-columns: 2em 1fr;
            grid-template-rows: auto auto;
            gap: var(--thermal-gap);
        }

        .icon {
            grid-row: 1;
            grid-column: 1;
            width: 2em;
            display: block;
            color: var(--thermal-slate-light);
        }

        .content {
            grid-row: 1;
            grid-column: 2;
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

        .actions {
            grid-row: 2;
            grid-column: 1 / -1;
        }

        .actions:not(:has(*)) {
            display: none;
        }

        /* Fallback for browsers without :has() support */
        .actions:empty {
            display: none;
        }
    `;

    protected render(): unknown {
        return html`<section>

            ${unsafeSVG(this.icon)}

            <div class="content">

                <h1>${this.info?.name}</h1>

                ${this.info?.description ? html`<div class="description">${this.info?.description}</div>` : nothing}
            </div>
            
            <div class="actions">
                <slot name="action"></slot>
            </div>
        </section>`;
    }

}