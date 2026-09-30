import { property } from "lit/decorators.js";
import { AbstractAppWithThermalDisplay } from "./AbstractAppWithThermalDisplay";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export abstract class AbstractAppWithSingleFile extends AbstractAppWithThermalDisplay {

    @property({
        type: String,
        reflect: true,
        attribute: "lrc"
    })
    lrc!: string;

    @property({
        type: String,
        reflect: true,
        attribute: "visible"
    })
    visible?: string;

    @property({ type: String, reflect: true })
    analysis1?: string;

    @property({ type: String, reflect: true })
    analysis2?: string;

    @property({ type: String, reflect: true })
    analysis3?: string;

    @property({ type: String, reflect: true })
    analysis4?: string;

    @property({ type: String, reflect: true })
    analysis5?: string;

    @property({ type: String, reflect: true })
    analysis6?: string;

    @property({ type: String, reflect: true })
    analysis7?: string;

    protected hydrateAnalysisListeners() {
        // Tady by měla být synchronizace interních listenerů analýz
    }

    protected renderSingleAppFileProviders(
        children: unknown
    ): unknown {

        return html`<group-provider
            slug=${this.UUID}
            batch="true"
            autoclear="true"
        >
            <file-provider
                thermal=${this.lrc}
                visible=${ifDefined(this.visible)}
                batch="true"
                autoclear="true"
                analysis1=${ifDefined(this.analysis1)}
                analysis2=${ifDefined(this.analysis2)}
                analysis3=${ifDefined(this.analysis3)}
                analysis4=${ifDefined(this.analysis4)}
                analysis5=${ifDefined(this.analysis5)}
                analysis6=${ifDefined(this.analysis6)}
                analysis7=${ifDefined(this.analysis7)}
            >
            
                ${children}
            
            </file-provider>
        </group-provider>`;

    }

}