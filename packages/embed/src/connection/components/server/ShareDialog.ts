import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { css, CSSResultGroup, html, nothing } from "lit";
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { FileInfo, FolderInfo, GridGrouping } from "@labir/server";
import { AppState, FolderMode } from "../../composition/AppWithState";
import { DisplayMode } from "../../ClientContext";
import { AvailableThermalPalettes } from "@labir/core";

@customElement("share-dialog")
export class ShareDialog extends ClientConsumer {

    @property({ type: String })
    palette?: AvailableThermalPalettes;

    @property({ type: Number })
    public from?: number;

    @property({ type: Number })
    public to?: number;

    @property({ type: Object })
    public folder?: FolderInfo;

    @property({ type: String })
    public path?: string;

    @property({ type: Object })
    public file?: FileInfo;

    @property({ type: String })
    public state?: AppState;

    @property({ type: String })
    public displayMode?: DisplayMode;

    @property({ type: String })
    public compact?: boolean;

    @property({ type: String })
    public folderMode?: FolderMode;

    @property({ type: String })
    public by?: GridGrouping;

    private renderEntity(
        label: string,
        icon: string,
        prependArrow: boolean = false
    ): unknown {
        return html`
        ${prependArrow ? html`<thermal-icon icon="right" variant="micro" style="display: block; width: 1em;"></thermal-icon>` : nothing}
        <div class="entity" title="${label}">
            <thermal-icon icon="${icon}" variant="micro"></thermal-icon>
            <span>${label}</span>
        </div>`;
    }

    private renderLink(): unknown {

        const url = this.assambleUrl();

        return html`<div class="server-link">

            <div class="server-link-content">
                ${url}
            </div>
            <thermal-btn
                icon="copy"
                iconStyle="mini"
                variant="foreground"
                plain="true"
                @click=${() => {
                navigator.clipboard.writeText(url);
            }}
                tooltip="Zkopírovat odkaz do schránky"
            ></thermal-btn>

            <thermal-btn
                icon="link"
                iconStyle="micro"
                variant="primary"
                plain="true"
                @click=${() => {
                window.open(url, "_blank");
            }}
                tooltip="Otevřít odkaz v novém okně"
            ></thermal-btn>

        </div>`;

    }

    public static styles?: CSSResultGroup | undefined = css
        `
        :host {
            font-size: var( --thermal-fs );
            color: var( --thermal-foreground );
        }

        .entity-list {
            display: flex;
            align-items: center;
            gap: .5em;
            width: 100%;
        }

        .entity {
            display: flex;
            align-items: center;
            gap: 0.5em;
            padding: .5em;
            border-radius: var( --thermal-radius );

            background: var( --thermal-background );

            thermal-icon {
                display: inline-block;
                width: 1em;
            }
        }

        section {

            box-sizing: border-box;
            width: 100%;

            padding: 1.5em .5em .5em .5em;
            margin-top: 2em;

            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );

            position: relative;


            & > h3 {
            
               position: absolute;
               top: -1em;
               left: .5em;
               box-sizing: border-box;
               
               padding: .4em .5em;
               margin: 0;

               border-radius: var( --thermal-radius );
               border: 1px solid var( --thermal-slate );

               background: var( --thermal-slate-light );

               font-size: 1em;
               line-height: 1em;

            }

            .description {
                font-size: .8em;
                opacity: .5;
                margin-top: .5em;
            }

        }

        .server-link {

            display: flex;

            .server-link-content {
                flex-grow: 1;
                box-sizing: border-box;
                padding: .5em;

                background: var( --thermal-background );
                border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );
            }

            > thermal-btn {
                border-radius: 0;
                &:last-child {
                    border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;
                }
            }
        
        }
    
    `;

    private assambleUrl(): string {

        let link = this.client?.getPublicUrl();

        const segments: Record<string, string> = {};

        if (this.palette) {
            segments["palette"] = this.palette;
        }

        if (this.from !== undefined) {
            segments["from"] = this.from.toString();
        }

        if (this.to !== undefined) {
            segments["to"] = this.to.toString();
        }

        if (this.path) {
            segments["folder-path"] = this.path;


            if (
                this.state === AppState.FOLDER
                && this.folderMode
                && this.displayMode
                && this.by
                && this.compact !== undefined
            ) {
                segments["display-mode"] = this.displayMode;
                segments["folder-mode"] = this.folderMode;
                segments["grid-grouping"] = this.by;
                segments["compact"] = this.compact ? "true" : "false";
            }

            if (this.state === AppState.DETAIL && this.file) {
                segments["file-name"] = this.file.fileName;
            }

        }

        const query = new URLSearchParams(segments).toString();

        return `${link}/?${query}`;

    }

    protected render(): unknown {

        if (
            !this.client
            || !this.client.isConnected()
            || !this.path
            || !this.state
            || ![AppState.FOLDER, AppState.DETAIL]
                .includes(this.state)
        ) {
            return nothing;
        }


        return html`<thermal-dialog label="${t(T.share)}">

            <thermal-btn slot="invoker" icon="share" iconStyle="mini" tooltip="Sdílet odkaz na tento obsah"></thermal-btn>

            <div slot="content">

                <section>

                    <h3>Co sdílíte</h3>

                    <div class="entity-list">
                        ${this.folder ? this.renderEntity(
            this.folder.name,
            "folder"
        ) : nothing}
                        ${this.file ? this.renderEntity(
            this.file.fileName,
            "image",
            true
        ) : nothing}
                    </div>

                </section>

                <section>
                    <h3>Odkaz na server</h3>
                    ${this.renderLink()}
                    <div class="description">Odkaz vede na <strong>${this.client.serverInfo?.name}</strong>, kde tento obsah <strong>${this.folder?.protected ? "uvidí pouze uživatelé s přístupem" : "uvidí kdokoliv"
            }</strong>.</div>
                </section>

            </div>

        </thermal-dialog>`;
    }


}