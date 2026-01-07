import { ThermalManager } from "@labirthermal/core";
import { BreadcrumbItem, FileInfo, FolderInfo, Identity } from "@labirthermal/server";
import { html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { cache } from "lit/directives/cache.js";
import { createRef } from "lit/directives/ref.js";
import { T } from "packages/embed/src/translations/Languages";
import { ManagerProviderElement } from "../../../hierarchy/providers/ManagerProvider";
import { ConnectedAppBase } from "../abstraction/ConnectedAppBase";
import { DisplayState, FolderListDisplayMode } from "../DisplayController";
import { connectedFileDetail } from "./directives/ConnectedFileDetail";

@customElement("connected-browser-app")
export class ControllerApp extends ConnectedAppBase {

    private managerProviderRef = createRef<ManagerProviderElement>();

    constructor() {
        super();
    }



    public get manager(): ThermalManager {
        if (!this.managerProviderRef.value) {
            throw new Error("Method not implemented.");
        }
        return this.managerProviderRef.value.manager;
    }


    protected renderStateLogin(): unknown {
        return this.renderAppWithInternals(html`<connected-login-form
            .onLoginSuccess=${(identity: Identity) => {
                this.log("Tohle je login", identity);
                this.display.reloadCurrentState();
            }}
        ></connected-login-form>` );
    }

    protected renderStateLoading(): unknown {
        return this.renderAppWithInternals(html`<thermal-loading
                .message=${this.display.arbitraryContent}
            ></thermal-loading>` );
    }

    private renderBreadcrumb(): unknown {
        return html`<connected-breadcrumb 
            slot="pre" 
            .onFolderClick=${(folder: BreadcrumbItem) => {
                this.display.navigateToFolderAndLoad(folder.path);
            }}
            .onUserClick=${() => {
                this.display.navigateToUserFoldersAndLoad();
            }}
        ></connected-breadcrumb>`;
    }

    private renderFolderHeader(
        actions: unknown
    ): unknown {
        return html`${this.renderBreadcrumb()}
        <connected-folder-header 
            slot="pre"
            .onParentClick=${(parent: BreadcrumbItem) => {
                this.display.navigateToFolderAndLoad(parent.path);
            }}
        >
            ${actions}
        </connected-folder-header>`;
    }


    // Folder displays

    /** Main router for the folder state display. Particular content depends on existence of files, subfolders and display mode setting. */
    protected renderStateFolder(): unknown {

        let content: unknown = nothing;

        // If no folder is defined, just render the breadcrumb
        if (this.content.folder === undefined) {
            content = html`<p>Folder not found</p>`;
        }

        // Return files view if the folder may nave files
        else if (this.content.folder.may_have_files) {
            content = this.renderStateFolderFiles();
        }

        // Return grid view if set
        else if (this.display.folderListDisplayMode === FolderListDisplayMode.GRID) {
            content = this.renderStateFolderGrid();
        }

        // Return subfolders in all other cases
        else {
            content = this.renderStateFolderSubfolders();
        }

        return this.renderAppWithInternals(
            content
        );

    }

    /** Helper - render one slot in the actions */
    private renderActionsSlot(
        labelTranslationSlug: keyof typeof T,
        content: unknown
    ): unknown {

        this.log("Rendering action slot", content);

        if (
            content === nothing
            || content === undefined
            || content === null
            || (
                Array.isArray(content)
                && (
                    content.length === 0
                    ||
                    !content.some(c => (
                        c !== nothing
                        || c !== undefined
                        || c !== null

                    ))
                )
            )
        ) {
            this.log("No content in action slot, skipping");
            return nothing;
        }

        return html`
            <thermal-slot
                label=${this.t(labelTranslationSlug)}
            >${content}</thermal-slot>
        `;
    }

    private renderHelperFolderHeaderEditButton(): unknown {
        if (
            this.content.folder
            && (
                this.content.folder.may_manage_folders_in
                || this.content.folder.may_manage_files_in
            )
        ) {

            const mayDelete = this.client.isRoot === true
                || (
                    this.content.folder.may_have_files === true
                    // && this.content.folder.lrc_count === 0
                );

            const deleteLabel = mayDelete
                ? this.t("deletefolder")
                : "Složka nelze smazat dokud obsahuje soubory";



            return html`
                <connected-folder-edit-dialog
                    .folder=${this.content.folder}
                    .onSuccess=${(folder: FolderInfo) => {
                    this.content.updateFolderState(folder);
                }}
                    tooltip=${this.t("editfolder")}
                    icon="edit"
                    iconStyle="micro"
                ></connected-folder-edit-dialog>
                <connected-folder-delete-dialog
                    .folder=${this.content.folder}
                    .onSuccess=${(folder: FolderInfo) => {
                    this.log("Folder smazán, naviguji zpět");
                    this.display.navigateToFolderAndLoad(folder.path.substring(0, folder.path.lastIndexOf("/")));
                }}
                    tooltip=${deleteLabel}
                    icon="trash"
                    iconStyle="micro"
                    disabled=${mayDelete ? "false" : "true"}
                ></connected-folder-delete-dialog>`;
        }

        return nothing;
    }

    /** Render a folder's files */
    protected renderStateFolderFiles(): unknown {

        const edit = [
            this.renderHelperFolderHeaderEditButton(),
            html`<group-download-dropdown></group-download-dropdown>`
        ];

        const actions: unknown[] = [
            this.renderActionsSlot(
                "folder",
                edit
            ),
            this.renderActionsSlot(
                "display",
                html`<connected-config-file-display-mode></connected-config-file-display-mode>
                <registry-opacity-slider></registry-opacity-slider>`
            ),
            this.renderActionsSlot(
                "thermalscale",
                html`<registry-palette-dropdown></registry-palette-dropdown>
                <registry-range-form></registry-range-form>`
            )
        ];

        const header = this.renderFolderHeader(actions);

        const fileList = html`<connected-file-list
            display-mode=${this.display.fileDisplayMode}
            compact=${this.display.fileDisplayCompact ? "true" : "false"}
            show-discussion=${this.display.displayComments ? "true" : "false"}
            editable-tags=${this.display.editTags ? "true" : "false"}
            .onFileClick=${(file: FileInfo) => {
                this.display.navigateToFileAndLoad(this.content.folder!.path, file.fileName);
            }}
        ></connected-file-list>
        <connected-upload-form
            .folder=${this.content.folder}
            .onSuccess=${() => {
                this.display.reloadCurrentState();
            }}
        ></connected-upload-form>`;

        if (this.content.files === undefined || this.content.files.length === 0) {

            return [header, fileList];

        }

        return this.renderBrowserLayout(
            header,
            fileList
        );

    }



    /** Render a folder's subfolders */
    protected renderStateFolderSubfolders(): unknown {

        const create = this.content.folder && this.content.folder.may_manage_folders_in ? html`<connected-folder-create-dialog
            .folder=${this.content.folder}
            .onSuccess=${(folder: FolderInfo) => {
                this.display.reloadCurrentState();
            }}
            tooltip=${this.t("createfolder")}
            icon="addfolder"
            iconStyle="micro"
            variant="primary"
        ></connected-folder-create-dialog>`
            : undefined;

        const editButtons = this.renderHelperFolderHeaderEditButton();

        const edit = create
            ? [create, editButtons]
            : [editButtons];

        const actions: unknown[] = [
            this.renderActionsSlot(
                "folder",
                edit
            ),
            this.renderActionsSlot(
                "display",
                html`<connected-config-subfolder-mode></connected-config-subfolder-mode>
                <registry-palette-dropdown></registry-palette-dropdown>`
            )
        ];

        const header = this.renderFolderHeader(actions);

        const subfolderList = html`<connected-subfolder-list
                    .onFolderClick=${(folder: FolderInfo) => {
                this.display.navigateToFolderAndLoad(folder.path);
            }}
                    folderMode=${this.display.folderListDisplayMode}
                ></connected-subfolder-list>`;

        return [
            header,
            subfolderList
        ];

    }

    /** Render a folder's grid of files */
    protected renderStateFolderGrid(): unknown {
        return html`Grid view`;
    }

    // File displays

    protected renderStateFile(): unknown {

        const file = this.content.file;

        if (!file) {
            return this.renderAppWithInternals(html`<p>File not found</p>`);
        }

        const header: unknown = [];

        const display: unknown = [
            html`display`
        ];

        const analyses: unknown = [
            html`analyses`
        ];

        const sidebar: unknown = [
            html`sidebar`
        ];

        const columns = [
            this.wrapContentIfNotEmpty(display, "display"),
            this.wrapContentIfNotEmpty(analyses, "analyses"),
            this.wrapContentIfNotEmpty(sidebar, "sidebar")
        ];

        const content = this.wrapContentIfNotEmpty( columns, "layout" );


        const dir = connectedFileDetail( this );


        return this.renderAppWithInternals(dir);
    }

    // User displays

    protected renderStateUser(): unknown {
        return this.renderAppWithInternals(html`user`);
    }


    protected setupInitialStateBeforeClientIsRead(): void {

        this.display.setArbitraryContent(
            "Připojuju se k arbitrárnímu stavu"
        );

    }

    protected async initialiseContentAfterClientReady(): Promise<void> {

        this.display.navigateToLoadingState(
            "Načítám obsah"
        );

        await this.display.reloadCurrentState();

        this.log("Obsah byl načten....");


    }



    protected render(): unknown {

        const stateContent = (() => {

            switch (this.display.appState) {
                case DisplayState.LOADING: return this.renderStateLoading();
                case DisplayState.LOGIN: return this.renderStateLogin();
                case DisplayState.FOLDER: return this.renderStateFolder();
                case DisplayState.FILE: return this.renderStateFile();
                case DisplayState.USER: return this.renderStateUser();
                default: return html`<p>Unknown state</p>`;
            }

        })();

        const cachedStateContent = cache(stateContent);

        return cachedStateContent;

    }

}