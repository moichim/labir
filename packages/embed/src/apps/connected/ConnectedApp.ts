import { css, CSSResultGroup, html, nothing } from "lit";
import { BaseServerApp } from "../../connection/BaseServerApp";
import { customElement, property, state } from "lit/decorators.js";
import { FolderInfo } from "@labir/server";

@customElement("connected-app")
export class ConnectedApp extends BaseServerApp {

    @property({ type: String, reflect: true })
    public label: string = "Connected app";

    @property({ type: String, reflect: true, attribute: "path" })
    public path!: string;

    @state()
    protected error?: string;

    @state()
    protected info?: FolderInfo;

    @state()
    protected subfolders?: FolderInfo[];



    public connectedCallback(): void {
        super.connectedCallback();

        if ( this.path === undefined || this.path.trim() === '' ) {
            this.error = "Parametr path je vyžadovaný pro správnou funkcionalitu této aplikace.";
        }


        this.client.onConnection.set( this.UUID + "_init", async (state) => {

            if ( state ) {

                const request = this.client.routes.get.info( this.path );

                const result = await request.execute();

                console.log( result );

                if ( result.success === true ) {
                    this.info = result.data.folder;
                    if ( result.data.subfolders !== false )
                        this.subfolders = Object.values( result.data.subfolders );
                } else {
                    this.error = "Chyba při načítání informací o složce: " + result.message;

                }

            }

        } );

    }




    static styles?: CSSResultGroup | undefined = css`
    
        .server-footer {
            font-size: calc( var(--thermal-fs) * 0.8 );
            color: var( --thermal-slate-dark );
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
        if ( this.error === undefined ) {
            return nothing;
        }
        return html`<div class="error" slot="pre">${this.error}</div>`;
    }



    protected renderInfo() {

        if ( this.info === undefined ) {
            return nothing;
        }

        return html`<folder-base-info .info=${this.info} slot="pre"></folder-base-info>
        <folder-subfolders .subfolders=${this.subfolders}></folder-subfolders>`;

    }





    protected render(): unknown {
        return html`
        <thermal-app label="${this.label}">

            ${this.renderError()}

            ${this.renderInfo()}

            ${this.isClientConnected === true
                ? html`<labir-user-button slot="close"></labir-user-button>`
                : nothing }

            <slot></slot>

            <footer class="server-footer">
                <server-info></server-info>
            </footer>
        </thermal-app>
        `;
    }

}