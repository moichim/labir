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
        }

        article {
        
            border: 1px solid var(--thermal-slate);
            overflow:hidden;
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;

        }

        header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: calc( var(--thermal-gap) * .5 );
            
            box-sizing: border-box;
            width: 100%;


            padding: calc( var(--thermal-gap) * .5);
            background: var( --thermal-background );

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
            display: block;
            color: var( --thermal-slate );
        }

        file-canvas {
            display: block;
        }

    `;


    render(): TemplateResult {

        const name = this.folder.name ?? this.folder.slug;

        return html`<article>
            <header>
                <div>
                    <h2>${name}</h2>
                    <div class="description">${this.folder.description}</div>
                </div>
                ${unsafeSVG( this.icon )}
            </header>

            <registry-provider slug="${this.folder.path + "__thumb"}">
            
                <group-provider slug="${this.folder.path + "__thumb"}">

                    <file-provider
                        thermal="${this.folder.thumb}"
                        ms="0"
                    >
                        <file-canvas></file-canvas>    
                    </file-provider>

                </group-provider>

            </registry-provider>
        
        </article>`;
    }



}