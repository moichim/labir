import { html, nothing } from "lit";
import { ConnectedAppBase } from "../../../abstraction/ConnectedAppBase";
import { AbstractLayoutDirective } from "./AbstractLayoutDirective";
import { BreadcrumbItem } from "@labirthermal/server";
import { slotOrNothing } from "../SlotOrNothing";
import { DirectiveHelpers } from "../DirectiveHelpers";
import { FileInfo, FolderInfo } from "packages/server/client/dist";

import { directive } from "lit/directive.js";

class ConnectedFolderFilesDirective extends AbstractLayoutDirective {

    private renderHeaderFolderSlot(
        app: ConnectedAppBase
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

        const hasFiles = DirectiveHelpers.folderContainsFiles(
            app.content.folder,
            app.content.files || []
        );

        const deleteLabel = mayDelete
            ? this.t("deletefolder")
            : "Složku je možno smazat jen, když je prázdná"

        if (mayEdit) {

            actions.push(html`<connected-folder-edit-dialog
                .folder=${app.content.folder}
                icon="edit"
                iconStyle="micro"
                .onSuccess=${(folder: FolderInfo) => app.content.updateFolderState(folder)}
                .tooltip=${this.t("editfolder")}
            ></connected-folder-edit-dialog>` );

            actions.push(html`<connected-folder-delete-dialog
                .folder=${app.content.folder}
                icon="trash"
                iconStyle="micro"
                .onSuccess=${() => app.display.navigateToUserFoldersAndLoad()}
                .disabled=${!mayDelete}
                .tooltip=${deleteLabel}
            ></connected-folder-delete-dialog>` );
        }

        if (hasFiles) {
            actions.push(html`<group-download-dropdown></group-download-dropdown>`);
        }

        return slotOrNothing(
            "folder",
            actions
        )

    }

    private renderDisplaySlot(
        app: ConnectedAppBase
    ): unknown {

        const hasFiles = DirectiveHelpers.folderContainsFiles(
            app.content.folder!,
            app.content.files || []
        );

        if (!hasFiles) {
            return nothing;
        }

        const content: unknown[] = [
            html`<connected-config-file-display-mode></connected-config-file-display-mode>`,
        ];

        content.push(html`<registry-opacity-slider></registry-opacity-slider>`);

        return slotOrNothing(
            "display",
            content
        )

    }



    private renderFolderHeader(
        app: ConnectedAppBase
    ): unknown {

        if (!app.content.folder) {
            return nothing;
        }

        const hasFiles = DirectiveHelpers.folderContainsFiles(
            app.content.folder,
            app.content.files || []
        );

        const slots = [
            this.renderHeaderFolderSlot(app),
        ];

        if (hasFiles) {
            slots.push(this.renderThermalScaleSlot());
        }

        slots.push(this.renderDisplaySlot(app));

        const content: unknown[] = [
            this.renderBreadcrumb(app),
            html`<connected-folder-header
                .onParentClick=${(folder: BreadcrumbItem) => {
                    app.display.navigateToFolderAndLoad(folder.path);
                }}
            >
                ${slots}
            </connected-folder-header>`
        ];

        if (hasFiles) {
            content.push(this.renderThermalScale());
        }

        return this.renderHeader(content);

    }

    private renderFileList(
        app: ConnectedAppBase
    ): unknown {

        const hasFiles = DirectiveHelpers.folderContainsFiles(
            app.content.folder!,
            app.content.files || []
        );

        if (!hasFiles) {
            // return nothing;
        }

        const mayUpload = DirectiveHelpers.userMayEditFile(
            app.client,
            app.content.folder!
        );

        const content = [];

        if (hasFiles) {
            content.push(html`<connected-file-list
                compact=${app.display.fileDisplayCompact}
                display-mode=${app.display.fileDisplayMode}
                .onFileClick=${(file: FileInfo) => app.display.navigateToFileAndLoad(file.path, file.fileName)}
            ></connected-file-list>` );
        }

        if (mayUpload) {
            content.push(html`<connected-upload-form
                .folder=${app.content.folder}
                .onSuccess=${() => app.display.reloadCurrentState()}
            ></connected-upload-form>` );
        }

        return this.renderContent(
            hasFiles,
            "100%",
            undefined,
            html`<div style="width: 100%; display: flex; flex-direction: column; gap: 1em;">${content}</div>`
        );

    }


    render(app: ConnectedAppBase): unknown {

        if (app.client.isLoading) {
            return nothing;
        }

        return [
            this.renderFolderHeader(app),
            this.renderFileList(app)
        ]

    }

}

export const connectedFolderFiles = directive(ConnectedFolderFilesDirective);