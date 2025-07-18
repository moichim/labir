import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing } from "lit";
import icons from "../../../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { BreadcrumbItem } from "packages/server/client/src/responseEntities";

@customElement( "folder-base-info" )
export class FolderBaseInfo extends ClientConsumer {

    @property( { type: Object, reflect: false})
    public info?: FolderInfo;

    @property({ type: Object})
    public parents?: BreadcrumbItem[];

    @property({ type: Function })
    public onParentClick?: ( folder: BreadcrumbItem ) => void;

    protected icon = icons.folder.outline( "icon" );

    public static styles?: CSSResultGroup | undefined = css`
        :host {
            display: flex;
            flex-wrap: no-wrap;
            gap: var(--thermal-gap);
        }


        .part {

            display: block;
            background: var(--thermal-background);
            color: var(--thermal-foreground);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            box-sizing: border-box;
        
        }


        section {
            display: grid !important;
            grid-template-columns: 2em 1fr;
            grid-template-rows: auto auto;
            gap: var(--thermal-gap);
            flex-grow: 1;
        }

        .icon {
            grid-row: 1;
            grid-column: 1;
            width: 2em;
            display: block;
            color: var(--thermal-slate);
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
            display: flex;
            gap: .5em;
            align-items: center;
        }

        .actions:not(:has(*)) {
            display: none;
        }

        /* Fallback for browsers without :has() support */
        .actions:empty {
            display: none;
        }
    `;


    protected renderUpButton(): unknown {

        if ( !this.parents || this.parents.length === 0 ) {
            return nothing;
        }

        const folders = this.parents.filter( item => item.type === "folder" );
        if ( folders.length <= 1 ) {
            return nothing;
        }

        const parent = folders[folders.length - 2];

        const callback = this.onParentClick || (() => {});

        return html`
            <thermal-btn variant="background" @click=${() => callback( parent )} icon="upwards" iconStyle="outline" size="xl">
            </thermal-btn>
        `;


    }

    protected render(): unknown {
        return html`

        ${this.renderUpButton()}
        
        <section class="part">

            ${this.i(this.icon)}

            <div class="content">

                <h1>${this.info?.name}</h1>

                ${this.info?.description ? html`<div class="description">${this.info?.description}</div>` : nothing}
            </div>
            
            <div class="actions">
                <slot></slot>
            </div>
        </section>`;
    }

}