import { html, nothing } from "lit";
import { ConnectedAppBase } from "../../../abstraction/ConnectedAppBase";
import { AbstractLayoutDirective } from "./AbstractLayoutDirective";
import { BreadcrumbItem } from "@labirthermal/server";
import { slotOrNothing } from "../SlotOrNothing";
import { DirectiveHelpers } from "../DirectiveHelpers";
import { FileInfo, FolderInfo } from "packages/server/client/dist";

import { directive } from "lit/directive.js";

class ConnectedFolderSubfoldersDirective extends AbstractLayoutDirective {

    private renderHeaderFolderSlot(
        app: ConnectedAppBase
    ): unknown {

        if ( ! app.content.folder ) {
            return nothing;
        }

        const actions: unknown[] = [];

        const mayEdit = DirectiveHelpers.userMayEditFolder( 
            app.client, 
            app.content.folder 
        );

        const mayDelete = DirectiveHelpers.userMayDeleteFolder( 
            app.client, 
            app.content.folder, 
            app.content.subfolders, 
            app.content.files 
        );

        const deleteLabel = mayDelete
            ? this.t("deletefolder")
            : "Složku je možno smazat jen, když je prázdná"

        if ( mayEdit ) {

            actions.push( html`<connected-folder-create-dialog
                .folder=${ app.content.folder }
                icon="addfolder"
                iconStyle="micro"
                variant="primary"
                .onSuccess=${ () => app.display.reloadCurrentState() }
            ></connected-folder-create-dialog>` );

            actions.push( html`<connected-folder-edit-dialog
                .folder=${ app.content.folder }
                icon="edit"
                iconStyle="micro"
                .onSuccess=${ (folder: FolderInfo) => app.content.updateFolderState( folder ) }
                .tooltip=${this.t("editfolder")}
            ></connected-folder-edit-dialog>` );

            actions.push( html`<connected-folder-delete-dialog
                .folder=${ app.content.folder }
                icon="trash"
                iconStyle="micro"
                .onSuccess=${ () => app.display.navigateToUserFoldersAndLoad() }
                .disabled=${ ! mayDelete }
                .tooltip=${deleteLabel}
            ></connected-folder-delete-dialog>` );

        }
            

        return slotOrNothing(
            "folder",
            actions
        )

    }

    private renderDisplaySlot(
        app: ConnectedAppBase
    ): unknown {

        return slotOrNothing(
            "display",
            html`<connected-config-subfolder-mode></connected-config-subfolder-mode>`
        )

    }



    private renderFolderHeader(
        app: ConnectedAppBase
    ): unknown {

        if ( ! app.content.folder ) {
            return nothing;
        }

        const slots = [
            this.renderHeaderFolderSlot( app ),
        ];

        slots.push( this.renderDisplaySlot( app ) );

        const content: unknown[] =  [
            this.renderBreadcrumb( app ),
            html`<connected-folder-header
                .onParentClick=${ ( folder: BreadcrumbItem ) => {
                    app.display.navigateToFolderAndLoad( folder.path );
                } }
            >
                ${slots}
            </connected-folder-header>`
        ];

        return this.renderHeader( content );

    }

    private renderSubfolders(
        app: ConnectedAppBase
    ): unknown {

        if ( 
            app.content.folder === undefined 
        ) {
            return nothing;
        }

        const cont: unknown[] = [];

        if ( app.content.subfolders && app.content.subfolders.length > 0 ) {
            cont.push( html`<connected-subfolder-list
                .onFolderClick=${ ( folder: FolderInfo ) => app.display.navigateToFolderAndLoad( folder.path ) }
                folder-mode=${ app.display.folderListDisplayMode }
            ></connected-subfolder-list>` );
        }

        return this.renderContent( 
            false, 
            "100%", 
            undefined,
            cont
        );

    }

    
    render(app: ConnectedAppBase): unknown {

        if ( app.client.isLoading ) {
            return nothing;
        }

        return [ 
            this.renderFolderHeader( app ),
            this.renderSubfolders( app )
         ]

    }

}

export const connectedFolderSubfolders = directive( ConnectedFolderSubfoldersDirective );