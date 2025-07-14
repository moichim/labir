import { provide } from "@lit/context";
import { BaseAppWithPngExportContext } from "../utils/converters/pngExportContext";
import Client, { FileInfo, TreeItem } from "@labir/server";
import { clientContext, currentUserTreeContext, currentUserTreeSetterContext } from "./ClientContext";
import { property, state } from "lit/decorators.js";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { FolderInfo } from "packages/server/client/dist";
import { currentFrameContext } from "../hierarchy/providers/context/FileContexts";
import { BreadcrumbItem } from "packages/server/client/src/responseEntities";

enum STATE {
    LOADING,
    POSTER,
    CUSTOM,
    FOLDER,
    DETAIL
}

export abstract class BaseServerApp extends BaseAppWithPngExportContext {


    @property({ type: String, reflect: true, attribute: "path" })
    public path!: string;
    protected originalPath!: string;



    @property({ type: String, attribute: "server-url" })
    public serverUrl!: string;

    @provide({ context: clientContext })
    protected client!: Client;

    @state()
    protected isClientConnected: boolean = false;

    @state()
    protected error?: string;

    @provide({context: currentUserTreeContext})
    protected tree: TreeItem[] = [];

    @provide({context: currentUserTreeSetterContext})
    protected treeSetter: (tree: TreeItem[]) => void = (tree: TreeItem[]) => {
        this.tree = tree;
        this.requestUpdate();
    }




    // State management properties

    @state()
    private _success: boolean = true;


    @state()
    private _state: STATE = STATE.LOADING;

    /** Current state of the app */
    public get state(): STATE {
        return this._state;
    }

    @state()
    private _stateMesage?: string;

    @state()
    private _html?: TemplateResult

    /** Current state message of the app */
    public get stateMessage(): string | undefined {
        return this._stateMesage;
    }


    // Content properties

    @state()
    protected _breadcrumb: BreadcrumbItem[] = [];
    public get breadcrumb(): BreadcrumbItem[] | undefined { return this._breadcrumb; }


    @state()
    protected _folder?: FolderInfo;
    public get folder(): FolderInfo | undefined { return this._folder; }

    @state()
    private _subfolders?: FolderInfo[];
    public get subfolders(): FolderInfo[] | undefined { return this._subfolders; }

    @state()
    private _file?: FileInfo;
    public get file(): FileInfo | undefined { return this._file; }







    /**
     * Inicializace klienta při připojení komponenty
     */
    connectedCallback(): void {
        super.connectedCallback();
        this.initializeClient();

        this.client.onConnection.set(this.UUID, (status) => {
            if (status) {
                this.isClientConnected = true;
            } else {
                this.isClientConnected = false;
            }
            this.requestUpdate();
        });
    }

    protected setPath(
        value: string
    ): void {
        this.path = value;
        this.requestUpdate();
        this.initContentFromApi();
    }



    protected checkReadyForData(): boolean {
        if (this.client.isConnected() === false) {
            this.setError( "Aplikace není připojena k serveru. Zkontrolujte připojení." );
            this.cleanupData();
            return false;
        }
        this.clearError();
        return true;
    }


    protected async initContentFromApi(): Promise<void> {

        this.cleanupData();

        if (this.checkReadyForData()) {

            this.setLoadingState(
                "Načítám obsah."
            );

            const path = this.path!;

            const request = this.client.routes.get.info(path);

            const result = await request.execute();

            if (result.success === true) {

                this.setBreadcumb(result.data.breadcrumb);

                this.setFolderState(
                    result.data.folder,
                    result.data.subfolders 
                        ? Object.values(result.data.subfolders)
                        : []
                );

            } else {

                let content = html`<p>${result.message}</p>`;

                switch (result.code) {
                    case 404:
                        content = html`<p>Složka nebyla nalezena.</p>`;
                        break;
                    case 403:
                        content = html`<p>Nemáte oprávnění k zobrazení této složky.</p>`;
                        break;
                    case 401:
                        content = html`<login-form prompt="Tato složka je přístupná pouze přihlášeným uživatelům."></login-form>`;
                        break;
                }

                this.setPosterState(
                    content,
                    false
                );
            }

        }

    }




    /**
     * Vytvoří novou instanci klienta
     */
    protected async initializeClient(): Promise<void> {

        this.clearError();

        if (!this.serverUrl || this.serverUrl.trim() === '') {
            this.setError("Server URL is required. Please set the 'server-url' attribute.");
            return;
        }

        this.client = new Client(this.serverUrl);

        const result = await this.client.connect();

        if (result.success === false) {
            this.setError("Failed to connect to the server: " + result.message);
            this.isClientConnected = false;
            return;

        }

        this.log("Initialised successfully", {
            url: this.serverUrl, 
            result,
            client: this.client
        });


    }

    protected setError(message: string): void {
        this.error = message;
        this.requestUpdate();
    }

    protected clearError(): void {
        this.error = undefined;
        this.requestUpdate();
    }


    





    // State management methods




    protected setLoadingState(
        message: string
    ): void {
        this._state = STATE.LOADING;
        this._stateMesage = message;
        this._success = true;
    }

    protected setPosterState(
        html: TemplateResult,
        success: boolean
    ): void {

        this._state = STATE.POSTER;
        this._html = html;
        this._success = success;

    }

    protected setFolderState(
        info: FolderInfo,
        subfolders?: FolderInfo[]
    ): void {
        this._state = STATE.FOLDER;
        this._folder = info;
        this._subfolders = subfolders;
        this._stateMesage = undefined;
        this._success = true;
    }

    protected setDetailState(
        file: FileInfo
    ) {
        this._state = STATE.DETAIL;
        this._file = file;
        this._success = true;
    }



    protected setBreadcumb(
        value: BreadcrumbItem[]
    ): void {
        this._breadcrumb = value;
        this.requestUpdate();
    }



    /**
     * Cleans all loaded content
     */
    protected cleanupData(): void {
        this._folder = undefined;
        this._subfolders = undefined;
        this._file = undefined;
    }


    static styles?: CSSResultGroup | undefined = css`

        :host {
        
        }


        .poster {
        
            box-sizing: border-box;
            width: 100%;

            padding: var(--thermal-gap);

            border: 1px dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &.standalone {
                min-height: 200px;
            }
        
        }
    
    `;


    // Render methods

    protected renderContent(): unknown {
        switch (this.state) {
            case STATE.LOADING:
                return this.renderLoadingState();
            case STATE.POSTER:
                return this.renderMessageState();
            case STATE.FOLDER:
                return this.renderFolderState();
            case STATE.DETAIL:
                return this.renderDetailState();
            default:
                return html`<div>Unknown state</div>`;
        }
    }

    protected renderLoadingState(): unknown {

        return html`<main>
            <div class="poster standalone">
                <thermal-spinner message=${this.stateMessage}></thermal-spinner>
        </main>`;
    }

    protected renderMessageState(): unknown {

        const successClass = this._success ? "state_message_success" : "state_message_error";

        return html`<main class="state_message ${successClass}">
            <article class="poster standalone">
            ${this._html}
            </article>
        </main>`;

    }


    protected renderFolderState(): unknown {


        return html`
        <folder-breadcrumb .breadcrumb=${this.breadcrumb ?? []} 
        .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)} slot="bar-persistent"></folder-breadcrumb>
        
        <main class="folder-state">

            <folder-base-info .info=${this.folder} slot="pre"></folder-base-info>

            <folder-subfolders .subfolders=${this.subfolders} slot="pre" .onFolderClick=${(folder: FolderInfo) => this.setPath(folder.path)}></folder-subfolders>

            <p>Folder state is implemented in BaseServerApp.</p>
        </main>`;
    }

    protected renderDetailState(): unknown {
        return html`<div class="detail-state">
            <p>Detail state is not implemented in BaseServerApp.</p>
        </div>`;
    }











}