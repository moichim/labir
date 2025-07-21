import { property, customElement } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import icons from "../../../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

@customElement("server-folder-thumbnail")
export class FolderThumbnail extends ClientConsumer {

    @property({type: Object})
    folder!: FolderInfo;

    @property({type: Function})
    onClick?: ( folder: FolderInfo ) => void;

    @property({type: Number, reflect: true})
    subfoldersCount: number = 0;

    protected folderIconMain = icons.folder.outline("icon");

    protected imageIconMicro = icons.image.micro( "icon-file" );

    protected folderIconMicro = icons.folder.micro( "icon-file" );


    public static styles?: CSSResultGroup | undefined = css`

        :host {
            font-size: var( --thermal-fs );
            display: flex;
        }

        article {
        
            border: 1px solid var(--thermal-slate);
            overflow:hidden;
            border-radius: var(--thermal-radius);
            display: flex;

            transition: all .2s ease-in-out;
            width: 100%;

            cursor: pointer;

            &:hover,
            &:focus {
                box-shadow: var(--thermal-shadow);
                border-color: var( --thermal-slate-dark );

                .poster.lrc {
                    file-canvas {
                        transform: scale(1.2);
                    }
                }

                .poster.empty {
                    thermal-icon {
                        transform: scale(1.2);
                    }
                }
            }

        }

        .poster {
        
            width: 100px !important;
            min-width: 100px; 
            height: 100%;

        }

        .poster.lrc {
            overflow: hidden;
            display: block;

            registry-provider,
            group-provider,
            file-provider {
                display: block;
                margin: 0;
                padding: 0;
                line-height: 0;
            }

            file-canvas {
                pointer-events: none;
                
                /* Make it behave like a replaced element */
                display: block;
                object-fit: cover;
                object-position: center;
                overflow: hidden;

                width: 160px;
                height: 120px;
                margin: 0;
                pading: 0;
                line-height: 0;

                transition: all .2s ease-in-out;

                &::part(file-canvas-container) {
                    display: block;
                    height: 100%;
                    width: 160px !important;
                    height: 120px !important;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }

        thermal-icon {
            transition: all .2s ease-in-out;
        }

        .poster.empty {
            background: var( --thermal-slate );
            color: var( --thermal-slate-light );
            display: flex;
            align-items: center;
            justify-content: center;
        }

        header {
            display: flex;
            flex-direction: row;
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
                width: 100%;
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
            }

        }

        .icon {
            width: 1.2em;
            min-width: 1.2em;
            display: block;
            color: var( --thermal-slate );
            float:right;
        }

        .icon-file {
            display: inline;
            width: 1.3em;
            line-height: 0.8em;
            vertical-align: middle;
        }

        file-canvas {
            display: block;
        }

        .count {
            font-size: calc( var(--thermal-fs) * 0.6 );
            color: var(--thermal-slate);
            margin-top: 0.25em;
            text-align: right;
            white-space: nowrap;
            vertical-align: middle;
        }

    `;

    protected renderLrc() {
        const slug = this.folder.path + "__thumb";
        return html`<registry-provider slug="${slug}" class="poster lrc">
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
        return html`<div class="poster empty">
            <thermal-icon icon="folder" variant="outline" classes="thumbnail-icon" css="width: 50px;"></thermal-icon>
        </div>`;
    }

    protected renderPreview(): TemplateResult {

        if ( this.folder.thumb && this.folder.thumb.startsWith( "http" ) ) {
            return this.renderLrc();
        }

        return this.renderEmpty();
    }

    protected handleActionClick(event: Event) {
        event.stopPropagation();
    }

    render(): TemplateResult {

        const name = this.folder.name ?? this.folder.slug;

        return html`<article>

            ${this.renderPreview()}

            <header>
                <div class="header-top">
                    <div>
                        <h2>${name}</h2>
                        <div class="description">${this.folder.description}</div>
                    </div>
                    <div style="text-align: right;">
                        ${unsafeSVG( this.folderIconMain )}

                        <div text-align: right;>
                            ${this.folder.lrc_count > 0 ? html`<span class="count">${this.folder.lrc_count} ${unsafeSVG( this.imageIconMicro )}</span>` : nothing }
                        </div>

                        ${this.subfoldersCount > 0
                            ? html`<span class="count">${this.subfoldersCount} ${unsafeSVG(this.folderIconMicro)}</span>`
                            : nothing}

                    </div>
                </div>
                <div class="header-bottom" @click=${this.handleActionClick}>
                    <slot name="action"></slot>
                </div>
            </header>

            
        
        </article>`;
    }



}