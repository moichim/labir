import { ThermalManager } from "@labirthermal/core";
import { html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { cache } from "lit/directives/cache.js";
import { createRef } from "lit/directives/ref.js";
import { ManagerProviderElement } from "../../../hierarchy/providers/ManagerProvider";
import { ConnectedAppBase } from "../abstraction/ConnectedAppBase";
import { DisplayState } from "../DisplayController";
import { FileInfo, FolderInfo, Identity } from "@labirthermal/server";

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
        return this.renderAppWithInternals( html`<connected-login-form
            .onLoginSuccess=${ (identity: Identity) => {
                this.log( "Tohle je login", identity );
                this.display.reloadCurrentState();
            } }
        ></connected-login-form>` );
    }

    protected renderStateLoading(): unknown {
        return this.renderAppWithInternals( html`<thermal-loading
                .message=${this.display.arbitraryContent}
            ></thermal-loading>` );
    }

    protected renderStateFolder(): unknown {
        
        const header = html`<connected-folder-header slot="pre"></connected-folder-header>`;

        let content_: unknown = nothing;

        // If the folder is defined...
        if ( this.content.folder !== undefined ) {

            // Now, we deal with files listing only
            if ( this.content.folder.may_have_files ) {

                // Folder has files => display the list
                if ( this.content.files && this.content.files.length > 0 ) {

                    const fileBrowser = html`<connected-file-list
                        .onFileClick=${ ( file: FileInfo ) => {
                            this.display.navigateToFileAndLoad( this.content.folder!.path, file.fileName );
                        } }
                    ></connected-file-list>`;

                    content_ = this.renderBrowserLayout( 
                        header, 
                        fileBrowser 
                    );

                }
                // Folder does not have files && the user may manage its files => display the upload layout
                else if ( this.content.folder.may_manage_files_in ) {

                    const upload = html`<connected-upload-form
                        .folder=${ this.content.folder }
                    ></connected-upload-form>`;

                    content_ = [
                        header,
                        upload
                    ]

                }

            }

            else {

                const subfolderList = html`<connected-subfolder-list
                    .onFolderClick=${ ( folder: FolderInfo ) => {
                        this.display.navigateToFolderAndLoad( folder.path );
                    } }
                    .folderMode=${ this.display.folderListDisplayMode }
                ></connected-subfolder-list>`;

                content_ = [
                    header,
                    subfolderList
                ];

            }

        }

        if ( content_ === nothing ) {
            content_ = header;
        }

        return this.renderAppWithInternals(
            content_
        );

        



        // Pokud složka má mít soubory a nějaké má, zobrazíme je v prohlížecím layoutu

        // Pokud složka má mít soubory, ale žádné nemá a uživatel smí spravovat soubory, zobrazíme upload layout

        // Pokud složka má mít soubory, ale žádné nemá a uživatel nemůže upravovat tuto složku, zobrazíme pouze informaci o prádzné složce

        // Pokud složka nemá mít soubory a má se zobrazit jako mřížka, zobraz mřížku

        // V ostatních případech zobrazíme seznam podsložek



        let content: unknown = nothing;

        if ( this.content.folder?.may_have_files ) {
            content = html`<connected-file-list
                .onFileClick=${ (file: FileInfo) => {
                    this.display.navigateToFileAndLoad( this.content.folder!.path, file.fileName );
                } }
            ></connected-file-list>`;
        } else {
            content = html`<connected-subfolder-list
                .onFolderClick=${ (folder: FolderInfo) => {
                    this.display.navigateToFolderAndLoad( folder.path );
                } }
                .folderMode=${ this.display.folderListDisplayMode }
            ></connected-subfolder-list>`;
        }
        
        return this.renderAppWithInternals( 
            this.renderBrowserLayout( header, content )
        );
    }

    protected renderStateFile(): unknown {
        return this.renderAppWithInternals( html`state` );
    }

    protected renderStateUser(): unknown {
        return this.renderAppWithInternals( html`user` );
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

        this.log( "Načítám obsah" );

        await this.display.reloadCurrentState();

        
    }



    protected render(): unknown {

        const stateContent = ( () => {
            switch ( this.display.appState ) {
                case DisplayState.LOADING: return this.renderStateLoading();
                case DisplayState.LOGIN: return this.renderStateLogin();
                case DisplayState.FOLDER: return this.renderStateFolder();
                case DisplayState.FILE: return this.renderStateFile();
                case DisplayState.USER: return this.renderStateUser();
                default: return html`<p>Unknown state</p>`;
            }
        } )();

        const cachedStateContent = cache( stateContent );

        return cachedStateContent;

    }

}