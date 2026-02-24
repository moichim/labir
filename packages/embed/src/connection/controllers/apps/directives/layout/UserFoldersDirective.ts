import { directive } from "lit/directive.js";
import { ConnectedAppBase } from "../../../abstraction/ConnectedAppBase";
import { AbstractLayoutDirective } from "./AbstractLayoutDirective";
import { Identity } from "@labirthermal/server";
import { html } from "lit";

class UserFoldersDirective extends AbstractLayoutDirective {

    private renderUserDetail(
        identity: Identity
    ): unknown {

        const rows: string[][] = [
            [ "Login", identity.meta.login ],
            [ this.t("user"), identity.meta.name || "-" ],
            [ "Email", identity.meta.email || "-" ],
            [ "Instituce", identity.meta.institution || "-" ],
            // [ "createdat", new Date( identity.meta.createdAt ).toLocaleString() ],
        ];


        return html`<div>
            <dl>
                ${rows.map(row => this.renderDef(...row))}
            </dl>
        
            <p>Pro změnu hesla kontaktujte administrátora serveru.</p>
        </div>`;
    }

    render(
        app: ConnectedAppBase
    ): unknown {

        const inner: unknown[] = [];

        const list: unknown[] = [];

        app.content.userFolders.sort( (a, b) => a.name.localeCompare(b.name) ).forEach( folder => {
            list.push( html`<server-folder-thumbnail
                .folder=${folder}
                @click=${ () => app.display.navigateToFolderAndLoad( folder.path ) }
            ></server-folder-thumbnail>` );
        } );

        inner.push( html`<div class="cLayout__user_folders_list">
            <h2>Máte přístup ke ${app.content.userFolders.length} složkám:</h2>
            ${list}
        </div>` );

        if ( app.client.identity ) {
            inner.push( this.renderUserDetail(
                    app.client.identity
            ) );
        }

        const layout = html`${this.renderBreadcrumb( app )}
        <div class="cLayout cLayout--user_folders">
            ${inner}
        </div>`;

        return layout;
    }
}

export const userFolders = directive(UserFoldersDirective);