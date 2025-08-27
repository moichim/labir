import { FolderInfo } from "@labir/server";
import { consume } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { syncAnalysisContext, syncAnalysisSetterContext } from "../../ClientContext";
import { AbstractModeBar } from "./AbstractModeBar";

@customElement("analysis-mode-settings")
export class AnalysisModeElement extends AbstractModeBar {


    @property({ type: Object, reflect: true })
    public folder?: FolderInfo;


    @consume({ context: syncAnalysisContext, subscribe: true })
    protected syncAnalysis: boolean = false;

    @consume({ context: syncAnalysisSetterContext, subscribe: true })
    protected syncAnalysisSetter: (sync: boolean) => void = () => { };


    protected render(): unknown {
        return html`

            ${this.renderToggle(
            "Synchronizovat analýzy",
            this.syncAnalysis,
            (checked) => this.syncAnalysisSetter(checked)
        )}

        `;
    }

}