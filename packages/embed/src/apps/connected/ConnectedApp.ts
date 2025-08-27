import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AppWithRender } from "../../connection/composition/AppWithRender";
import { initLocalesInTopLevelElement, IWithlocale, localeContext, localeConverter, Locales } from "../../translations/localeContext";
import { provide } from "@lit/context";



@customElement("connected-app")
export class ConnectedApp extends AppWithRender implements IWithlocale {


    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    locale!: Locales;

    

    @property({ type: String, reflect: true })
    public label: string = "Connected app";


    

    



    public connectedCallback(): void {

        super.connectedCallback();

        initLocalesInTopLevelElement(this);

        if (this.path === undefined || this.path.trim() === '') {
            this.setError( "Parametr path je vyžadovaný pro správnou funkcionalitu této aplikace." );
        }

        this.originalPath = this.path;

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

        const slug = [
            this.path,
            this.client?.auth?.getIdentity()?.user || "anonymous",
            this.folder?.slug || "unknown_folder",
            this.file?.fileName || "unknown_file",
        ].join("__");


        return html`
        <manager-provider>
            <registry-provider slug="${slug}" autoclear="true">
            <thermal-app 
                label="${this.label}"
                showfullscreen="true"
            >          


                ${this.isClientConnected === true
                    ? html`<labir-user-button slot="close"></labir-user-button>`
                    : nothing}

                ${this.renderError()}

                ${this.renderContent()}

                <slot></slot>

                <footer class="server-footer">
                    <server-info></server-info>
                </footer>

            </thermal-app>
            </registry-provider>
        </manager-provider>
        `;
    }

}