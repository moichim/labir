import { consume } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html } from "lit";
import { state } from "lit/decorators.js";
import { AbstractGroupConsumer } from "../../hierarchy/consumers/AbstractGroupConsumer";
import { configContext, ConfigContextValue } from "../../hierarchy/controllers/ConfigController";
import { T } from "../../translations/Languages";

export class GroupDownloadDropdown extends AbstractGroupConsumer {

    static styles?: CSSResultGroup | undefined = css`
        thermal-btn {
            text-align: left;
        }
    `;

    @state()
    @consume({ context: configContext, subscribe: true })
    private config?: ConfigContextValue;

    protected render(): unknown {

        const png = this.config?.settings.export.png;
        const groupSettings = this.config?.settings.export.group;
        const dropdownClass = this.classList.contains( "small" ) ? "small" : "";


        return html`
        
            <thermal-dropdown class="download ${dropdownClass}">
            
                <span slot="invoker">${t(T.download)}</span>
            
                <thermal-btn 
                    slot="option" 
                    pre="LRC" 
                    @click=${() => this.group.files.downloadAllFiles()}
                    tooltip=${t(T.downloadoriginalfileshint)}
                    tooltip-placement="right"
                >
                    ${t(T.downloadoriginalfiles)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="PNG" 
                    @click=${() => this.group.forEveryInstance(instance => instance.export.downloadPng())}
                    tooltip=${t(T.pngofindividualimageshint)}
                    tooltip-placement="right"
                >
                    ${t(T.pngofindividualimages)}
                </thermal-btn>

                <thermal-btn 
                    slot="option"
                    pre="PNG" 
                    @click=${() => this.group.analysisSync.png.downloadPng({
                        columns: groupSettings?.columns ?? 3,
                        showGroupName: groupSettings?.groupName ?? false,
                        fontSize: png?.fontSize ?? 12,
                        showAnalysis: png?.analyses ?? true,
                        showFileDate: png?.fileDate ?? true,
                        showFileName: png?.fileName ?? false,
                        showThermalScale: png?.thermalScale ?? true,
                        width: png?.width ?? 800,
                        
                    })}
                    tooltip="${t(T.pngofentiregrouphint)}"
                    tooltip-placement="right"
                >
                    ${t(T.pngofentiregroup)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="CSV" 
                    @click=${() => { this.group.analysisSync.csv.downloadAsCsv() }}
                    tooltip=${t(T.csvofanalysisdatahint)}
                    tooltip-placement="right"
                >
                    ${t(T.csvofanalysisdata)}
                </thermal-btn>
            
            </thermal-dropdown>
        
        `;

    }



}