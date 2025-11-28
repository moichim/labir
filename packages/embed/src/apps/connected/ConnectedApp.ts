import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AppWithRender } from "../../connection/composition/AppWithRender";
import { initLocalesInTopLevelElement, IWithlocale, localeContext, localeConverter, Locales } from "../../translations/localeContext";
import { provide } from "@lit/context";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ThermalManager } from "@labirthermal/core";



@customElement("connected-app")
export class ConnectedApp extends AppWithRender implements IWithlocale {

    public get manager(): ThermalManager {
        return this.registryElement.value!.registry.manager;
    }


    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    locale!: Locales;

    

    @property({ type: String, reflect: true })
    public label: string = "Connected app";


    

    



    public connectedCallback(): void {

        super.connectedCallback();

        initLocalesInTopLevelElement(this);

        if (this.path === undefined || this.path.trim() === '') {
            // this.setError( "Parametr path je vyžadovaný pro správnou funkcionalitu této aplikace." );
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
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate-dark);

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

        const slug = this.getCurrentSlug();


        return html`
        <manager-provider palette=${this.palette} slug="${this.UUID}">
            <registry-provider 
                slug="${slug}" 
                autoclear="true" 
                palette=${this.palette}
                ${ref(this.registryElement)} 
                from=${ifDefined( this.from )}
                to=${ifDefined( this.to )}
            >
                <thermal-app 
                    label="${this.label}"
                    showfullscreen="true"
                    labelTooltip=${ifDefined(this.labelTooltip)}
                    labelIcon=${ifDefined(this.labelIcon)}
                    labelIconStyle=${ifDefined(this.labelIconStyle)}
                    labelVariant=${ifDefined(this.labelVariant)}
                >

                    <share-dialog 
                        slot="close"
                        .palette=${this.palette}
                        .folder=${this.folder}
                        .folderMode=${this.folderMode}
                        .displayMode=${this.displayMode}
                        .by=${this.by}
                        .file=${this.file}
                        .compact=${this.compact}
                        .state=${this.state}
                        .path=${this.path}
                        .from=${this.from}
                        .to=${this.to}
                    ></share-dialog>

                    ${this.isClientConnected === true
                        ? html`<labir-user-button slot="close" disable-logging=${this.disableLogging}></labir-user-button>`
                        : nothing}

                    ${this.renderError()}

                    <thermal-dialog label="${t(T.config)}" slot="close">
                        
                        <thermal-btn slot="invoker" icon="settings" iconStyle="solid" tooltip="${t(T.config)}"></thermal-btn>

                        <div slot="content">
                            <table>
                                <png-export-panel></png-export-panel>
                                <registry-display-panel></registry-display-panel>
                            </table>
                        </div>
                        
                    </thermal-dialog>

                    <slot></slot>

                    ${this.renderContent()}

                    <footer class="server-footer">
                        <server-info></server-info>
                    </footer>

                </thermal-app>
            </registry-provider>
        </manager-provider>
        `;
    }

}