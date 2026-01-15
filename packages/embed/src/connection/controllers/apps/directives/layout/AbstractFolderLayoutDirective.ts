import { html, nothing } from "lit";
import { ConnectedAppBase } from "../../../abstraction/ConnectedAppBase";
import { AbstractLayoutDirective } from "./AbstractLayoutDirective";
import { DirectiveHelpers } from "../DirectiveHelpers";
import { FolderInfo } from "@labirthermal/server";
import { slotOrNothing } from "../SlotOrNothing";

export abstract class AbstractFolderLayoutDirective extends AbstractLayoutDirective {

    protected renderDisplaySlot(
        app: ConnectedAppBase
    ): unknown {

        return slotOrNothing(
            "display",
            html`<connected-config-subfolder-mode></connected-config-subfolder-mode>`
        )

    }


    protected renderHeaderFolderSlot(
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


}