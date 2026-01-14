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
            [ this.t("login"), identity.meta.login ],
            [ "Email", identity.meta.email || "-" ],
            [ "institution", identity.meta.institution || "-" ],
            // [ "createdat", new Date( identity.meta.createdAt ).toLocaleString() ],
        ];


        return html`<table>
            <tbody>
        ${rows.map(row => this.renderTr(...row))}
            </tbody>
        </table>`;
    }

    render(
        app: ConnectedAppBase
    ): unknown {

        console.log( app.client.identity )

        const content = [];

        if ( app.client.identity ) {
            content.push( this.renderUserDetail(
                    app.client.identity
            ) );
        }

        content.push( this.renderBreadcrumb( app ) );
        content.push( this.renderError( "User folders" ) );

        return content;
    }
}

export const userFolders = directive(UserFoldersDirective);