import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FileInfo, FolderInfo } from "@labirthermal/server";
import { css, CSSResultGroup, html, nothing } from "lit";
import icons from "../../../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { TimeFormat } from "@labirthermal/core";

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

                color: var(--thermal-foreground);
                font-size: var(--thermal-fs);
            }
    
    
            .part {
    
                display: block;
                background: var(--thermal-background);
                color: var(--thermal-foreground);
                border-radius: var(--thermal-radius);
                padding: var(--thermal-gap);
                box-sizing: border-box;
            
            }

            h1 {
                font-size: 1em;
                margin: 0;
                padding: 0;
                margin-bottom: .5em;
            }
    
    
            section {
                display: grid !important;
                grid-template-columns: 2em 1fr 1fr 1fr;
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

            .time-info {
                grid-row: 1;
                grid-column: 2;
            }

            .label-info {
                grid-row: 1;
                grid-column: 3;
            }

            .colophon {
                grid-row: 1;
                grid-column: 4;
                text-align: right;

                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                flex-direction: column;
                gap: .3em;

                thermal-btn {
                    opacity: .5;
                    transition: opacity .3s ease-in-out;
                    cursor: help !important;

                    &:hover,
                    &:focus {
                        opacity: 1;
                    }
                }

            }

            .actions {
                grid-row: 2;
                grid-column: 1 / -1;
                display: flex;
                flex-wrap: wrap;
                gap: 2em;
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

        `;

    protected renderColophon(): unknown {


        const uploaded = TimeFormat.human( this.file.uploaded );

        return html`
            <div class="colophon small slate">
                    <thermal-btn 
                        variant="breadcrumb"
                        plain="true"
                        size="sm"
                        tooltip="Čas nahrání souboru"
                        icon="upload"
                        iconStyle="micro"
                        interactive="false"
                    >${uploaded}</thermal-btn>

                ${this.file.uploadedby
                    ? html`<thermal-btn 
                            variant="breadcrumb"
                            plain="true"
                            size="sm"
                            tooltip="Nahráno uživatelem"
                            icon="user"
                            iconStyle="micro"
                            interactive="false"
                        >${this.file.uploadedby.name}</thermal-btn>`
                    : nothing
                }
            </div>
        `;

    }

    protected renderUpButton(): unknown {
    
            return html`
                <thermal-btn 
                    variant="background" 
                    @click=${this.onClose} 
                    icon="close" 
                    iconStyle="outline" 
                    size="xl"
                    tooltip="Zpět do složky '${this.folder.name}'."
                >
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

            ${this.i(this.icon)}

            <div class="time-info">
                <h1>${time}</h1>
                <div class="small slate">${this.file.fileName}</div>
            </div>

            <div class="label-info">
                ${this.file.label
                    ? html`<h1>${this.file.label}</h1>`
                    : nothing
                }
                ${this.file?.description ? html`<div class="small slate">${this.file?.description}</div>` : nothing}
            </div>

            ${this.renderColophon()}
            
            <div class="actions">
                <slot></slot>
            </div>
        </section>
        
        `;
    }


}