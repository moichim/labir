import { html, nothing } from "lit";
import { AbstractConnectedApp } from "../../../abstraction/ConnectedAppBase";
import { AbstractLayoutDirective } from "./AbstractLayoutDirective";
import { DirectiveHelpers } from "../DirectiveHelpers";
import { FolderInfo } from "@labirthermal/server";
import { slotOrNothing } from "../SlotOrNothing";
import { DisplayState } from "../../../DisplayController";

export abstract class AbstractFolderLayoutDirective extends AbstractLayoutDirective {

    protected renderFolderContentStatsSlot(
        app: AbstractConnectedApp
    ): unknown {
        return slotOrNothing(
            "content",
            html`<connected-folder-content-mode-switch></connected-folder-content-mode-switch>`
        );
    }

    protected renderDisplaySlot(
        app: AbstractConnectedApp
    ): unknown {

        return slotOrNothing(
            "display",
            html`<connected-config-subfolder-mode></connected-config-subfolder-mode>`
        )

    }


    protected renderHeaderFolderSlot(
        app: AbstractConnectedApp
    ): unknown {

        if (!app.content.folder) {
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

        if (mayEdit) {

            if (!app.content.folder.may_have_files) {
                actions.push(html`<connected-folder-create-dialog
                    .folder=${app.content.folder}
                    icon="addfolder"
                    iconStyle="micro"
                    variant="primary"
                    tooltip="Vytvořit podsložku"
                    .onSuccess=${() => app.display.reloadCurrentState()}
                ></connected-folder-create-dialog>` );
            }

            actions.push(html`<connected-folder-edit-dialog
                .folder=${app.content.folder}
                icon="edit"
                iconStyle="micro"
                .onSuccess=${(folder: FolderInfo) => app.content.updateFolderState(folder)}
                .tooltip=${this.t("editfolder")}
            ></connected-folder-edit-dialog>` );

            actions.push(html`<connected-folder-move-dialog
                .folder=${app.content.folder}
            ></connected-folder-move-dialog>` );

            actions.push(html`<connected-folder-delete-dialog
                .folder=${app.content.folder}
                icon="trash"
                iconStyle="micro"
                .onSuccess=${() => app.display.navigateToFolderParentAndLoad( app.content.folder!.path )}
                .disabled=${!mayDelete}
                .tooltip=${deleteLabel}
            ></connected-folder-delete-dialog>` );

        }

        if ( app.content.files && app.content.files.length > 0 ) {
            actions.push(html`<group-download-dropdown></group-download-dropdown>` );
        }


        return slotOrNothing(
            "folder",
            actions
        )

    }


}