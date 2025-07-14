import { property, customElement } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, TemplateResult } from "lit";
import icons from "../../../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

@customElement("server-folder-thumbnail")
export class FolderThumbnail extends ClientConsumer {

    @property({type: Object})
    folder!: FolderInfo;

    @property({type: Object})
    onClick?: ( folder: FolderInfo ) => void;

    protected icon = icons.folder.outline("icon");


    public static styles?: CSSResultGroup | undefined = css`

        :host {
            font-size: var( --thermal-fs );
            display: flex;
            flex-direction: column;
        }

        article {
        
            border: 1px solid var(--thermal-slate);
            overflow:hidden;
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            display: flex;
            flex-direction: column;
            height: 100%;

        }

        header {
            display: flex;
            flex-direction: column;
            gap: calc( var(--thermal-gap) * .5 );
            
            box-sizing: border-box;
            width: 100%;
            min-height: 75px;

            padding: calc( var(--thermal-gap) * .5);
            background: var( --thermal-background );

            .header-top {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: calc( var(--thermal-gap) * .75 );
            }

            .header-bottom {
                display: flex;
                justify-content: flex-start;
                margin-top: auto;
            }

            h2 {
                font-size: calc( var(--thermal-fs) * 1 );
                margin: 0;
                padding: 0;
            }

            .description {
                margin-top: calc( var(--thermal-gap) * .25 );
                font-size: calc( var(--thermal-fs) * 0.8 );
                color: var( --thermal-slate );
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

        }

        .icon {
            width: 1.2em;
            display: block;
            color: var( --thermal-slate );
        }

        file-canvas {
            display: block;
        }

    `;

    protected renderLrc( url: string ) {
        const slug = this.folder.path + "__thumb";
        return html`<registry-provider slug="${slug}">
            <group-provider slug="${slug}">

                <file-provider
                    thermal="${this.folder.thumb}"
                    ms="0"
                >
                    <file-canvas></file-canvas>    
                </file-provider>

            </group-provider>
        </registry-provider>`;
    }

    protected renderEmpty(): TemplateResult {
        return html`<div class="poster standalone">
            <thermal-icon icon="folder" size="3em"></thermal-icon>
            <p>No thumbnail available</p>
        </div>`;
    }

    protected renderPreview(): TemplateResult {

        if ( this.folder.thumb && this.folder.thumb.startsWith( "http" ) ) {
            return this.renderLrc( this.folder.thumb );
        }

        return this.renderEmpty();
    }

    protected handleActionClick(event: Event) {
        event.stopPropagation();
    }

    render(): TemplateResult {

        const name = this.folder.name ?? this.folder.slug;

        return html`<article>
            <header>
                <div class="header-top">
                    <div>
                        <h2>${name}</h2>
                        <div class="description">${this.folder.description}</div>
                    </div>
                    ${unsafeSVG( this.icon )}
                </div>
                <div class="header-bottom" @click=${this.handleActionClick}>
                    <slot name="action"></slot>
                </div>
            </header>

            ${this.renderPreview()}
        
        </article>`;
    }



}