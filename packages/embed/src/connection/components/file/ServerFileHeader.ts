import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FileInfo, FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing } from "lit";
import icons from "../../../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { TimeFormat } from "@labir/core";

@customElement("server-file-header")
export class ServerFileHeader extends ClientConsumer {

    @property({type: Object})
    public file!: FileInfo;

    @property({type: Object})
    public folder!: FolderInfo;

    @property({type: Function})
    public onClose: () => void = () => {};

    protected icon = icons.image.outline( "icon" );




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
                color: var(--thermal-slate-light);
            }
    
            .content {
                grid-row: 1;
                grid-column: 2;
                display: flex;
                gap: var(--thermal-gap);
                justify-content: space-between;
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
            }
    
            .actions:not(:has(*)) {
                display: none;
            }
    
            /* Fallback for browsers without :has() support */
            .actions:empty {
                display: none;
            }

            .small {
                font-size: calc(var(--thermal-fs) * 0.8);
            }

            .slate {
                color: var(--thermal-slate);
            }

            .slate-dark {
                color: var(--thermal-slate-dark);
            }

            .slate-light {
                color: var(--thermal-slate-light);
            }

            .colophon {
                text-align: right;

                strong,
                span {
                    display: block;
                }
                
                strong {
                    font-weight: normal;
                }

                span {
                    color: var(--thermal-slate-light);
                }
            }

            .label {
                margin-top: calc(var(--thermal-gap) * 0.5);
                padding-top: calc(var(--thermal-gap) * 0.5);
                border-top: 2px dashed var(--thermal-slate-light);
                display: inline-block;
            }
        `;

    protected renderColophon(): unknown {


        const uploaded = TimeFormat.human( this.file.uploaded );

        return html`
            <div class="colophon small slate">
                <div>
                    <span>Nahráno:</span>
                    <strong>${uploaded}</strong>
                </div>

                ${this.file.uploadedby
                    ? html`<div>
                        <span>Uživatel:</span>
                        <strong>${this.file.uploadedby.name}</strong>
                    </div>`
                    : nothing
                }
            </div>
        `;

    }

    protected renderUpButton(): unknown {
    
            return html`
                <thermal-btn variant="background" @click=${this.onClose} icon="close" iconStyle="outline" size="xl">
                </thermal-btn>
            `;
    
    
        }

    protected render(): unknown {

        const slug = this.folder.path + this.file.fileName;

        const time = TimeFormat.human( this.file.timestamp );

        const label = this.file.label || this.file.fileName;

        const uploaded = TimeFormat.human( this.file.uploaded );




        return html`
        
        
        ${this.renderUpButton()}
                
                <section class="part">
        
                    ${unsafeSVG(this.icon)}
        
                    <div class="content">

                        <div>
            
                            <h1>${time}</h1>

                            ${this.file.label
                                ? html`<h1 class="label">${this.file.label}</h1>`
                                :nothing
                            }
            
                            ${this.file?.description ? html`<div class="description">${this.file?.description}</div>` : nothing}

                        </div>


                        ${this.renderColophon()}
                    </div>
                    
                    <div class="actions">
                        <slot></slot>
                    </div>
                </section>
        
        `;
    }


}