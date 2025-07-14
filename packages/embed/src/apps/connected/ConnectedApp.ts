import { css, CSSResultGroup, html, nothing } from "lit";
import { BaseServerApp } from "../../connection/BaseServerApp";
import { customElement, property, state } from "lit/decorators.js";
import { FolderInfo } from "@labir/server";
import { FileInfo } from "packages/server/client/dist";



@customElement("connected-app")
export class ConnectedApp extends BaseServerApp {

    

    @property({ type: String, reflect: true })
    public label: string = "Connected app";

    @property({ type: String, reflect: true, attribute: "path" })
    public path!: string;
    protected originalPath!: string;


    

    



    public connectedCallback(): void {

        super.connectedCallback();

        if (this.path === undefined || this.path.trim() === '') {
            this.setError( "Parametr path je vyžadovaný pro správnou funkcionalitu této aplikace." );
        }

        this.originalPath = this.path;


        this.client.onConnection.set(this.UUID + "_init", async (state) => {

            if (state) {

                this.initContentFromApi();

            }

        });

        this.client.auth.onIdentity.set(this.UUID + "_init", async () => {
            this.initContentFromApi();
        });

        this.setLoadingState(
            "Připojuji se k serveru."
        );

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

    protected cleanupData(): void {
        super.cleanupData();
        this.path = this.originalPath;
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




    static styles?: CSSResultGroup | undefined = css`

        ${super.styles!}

        :host {
            display: block;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }
    
        .server-footer {
            font-size: calc( var(--thermal-fs) * 0.8 );
            color: var( --thermal-slate-dark );
            margin-top: calc( var(--thermal-gap) * 0.5 );
        }

        .error {

            color: black;
            background-color: #bf8f8f;    

            border-radius: var(--thermal-radius);
            border: 1px solid var(--thermal-slate-dark);

            box-sizing: border-box;
            width: 100%;

            padding: calc( var( --thermal-gap ) * .5 );
            
            margin-bottom: calc( var( --thermal-gap ) * .5 );
        }
    
    `;


    protected renderError() {
        if (this.error === undefined) {
            return nothing;
        }
        return html`<div class="error" slot="pre">${this.error}</div>`;
    }





    protected render(): unknown {
        return html`
        <manager-provider>
            <thermal-app label="${this.label}">

            

                ${this.renderError()}

                ${this.renderContent()}

                ${this.isClientConnected === true
                    ? html`<labir-user-button slot="close"></labir-user-button>`
                    : nothing}

                <slot></slot>

                <footer class="server-footer">
                    <server-info></server-info>
                </footer>

            </thermal-app>
        </manager-provider>
        `;
    }

}