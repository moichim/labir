import { BreadcrumbItem } from "@labirthermal/server";
import { css, html, nothing } from "lit";
import { ConnectedAppBase } from "../../../abstraction/ConnectedAppBase";
import { AbstractConnectedDirective } from "../AbstractConnectedDirective";

export abstract class AbstractLayoutDirective extends AbstractConnectedDirective {


    static readonly styles = css`

        .cLayout__header {
            display: flex;
            flex-direction: column;
            gap: .5em;
        }

        .cLayout__content {
            
            width: 100%;
            position: relative;

            &.cLayout__content--with-toolbar {
                display: grid;
                grid-template-columns: 2em 1fr;
                gap: 1em;
            }

        }

        .clayout__content__toolbar {
            position: sticky;
            top: 300px;
        }

        .clayout__content__inner {
            width: 100%;
            display: grid;
            gap: 1em;
        }
    
    `;

    protected renderBreadcrumb(
        app: ConnectedAppBase
    ): unknown {

        return html`<connected-breadcrumb 
            slot="pre"
            .onFolderClick=${ ( folder: BreadcrumbItem ) => app.display.navigateToFolderAndLoad( folder.path ) }
            .onUserClick=${ () => app.display.navigateToUserFoldersAndLoad()}
        ></connected-breadcrumb>`;

    }

    protected renderHeader(
        content: unknown
    ): unknown {
        return html`<header class="cLayout__header" slot="pre">${content}</header>`;
    }

    protected renderContent(
        hasToolbar: boolean = false,
        gridTemplateColumns: string,
        classes: string | undefined,
        content: unknown
    ): unknown {

        const toolbarClass = hasToolbar 
            ? "cLayout__content--with-toolbar" : "";

        return html`<div class="cLayout__content ${toolbarClass}">
            ${hasToolbar
                ? html`<div class="clayout__content__toolbar" >
                    <group-tool-bar></group-tool-bar>
                </div>`
                : nothing
            }
            <div class="clayout__content__inner ${classes}" style="grid-template-columns: ${gridTemplateColumns}">
                ${content}
            </div>
        </div>`;

    }

}