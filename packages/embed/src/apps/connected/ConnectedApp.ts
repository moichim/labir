import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AppWithRender } from "../../connection/composition/AppWithRender";
import { initLocalesInTopLevelElement, IWithlocale, localeContext, localeConverter, Locales } from "../../translations/localeContext";
import { provide } from "@lit/context";
import { t } from "i18next";
import { T } from "../../translations/Languages";



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

                <thermal-dialog label="${t(T.config)}" slot="close">
                    <thermal-button slot="invoker">
                        <svg style="width: 1em; transform: translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                            <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
                        </svg>
                
                    </thermal-button>
                    <div slot="content">
                        <table>
                            <png-export-panel></png-export-panel>
                            <registry-display-panel></registry-display-panel>
                        </table>
                    </div>
                </thermal-dialog>

            </thermal-app>
            </registry-provider>
        </manager-provider>
        `;
    }

}