import { css, CSSResultGroup, html } from "lit";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { customElement } from "lit/decorators.js";

@customElement("group-download-dropdown")
export class GroupDownloadDropdown extends GroupConsumer {

    static styles?: CSSResultGroup | undefined = css`
        thermal-btn {
            text-align: left;
        }
    `;


    protected render(): unknown {

        const dropdownClass = this.classList.contains( "small" ) ? "small" : "";


        return html`
        
            <thermal-dropdown class="download ${dropdownClass}">
            
                <span slot="invoker">${t(T.download)}</span>
            
                <thermal-btn 
                    slot="option" 
                    pre="LRC" 
                    @click=${() => this.group.files.downloadAllFiles()}
                    tooltip=${t(T.downloadoriginalfileshint)}
                >
                    ${t(T.downloadoriginalfiles)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="PNG" 
                    @click=${() => this.group.forEveryInstance(instance => instance.export.downloadPng())}
                    tooltip=${t(T.pngofindividualimageshint)}
                >
                    ${t(T.pngofindividualimages)}
                </thermal-btn>

                <thermal-btn 
                    slot="option"
                    pre="PNG" 
                    @click=${() => this.group.analysisSync.png.downloadPng()}
                    tooltip="${t(T.pngofentiregrouphint)}"
                >
                    ${t(T.pngofentiregroup)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="CSV" 
                    @click=${() => { this.group.analysisSync.csv.downloadAsCsv() }}
                    tooltip=${t(T.csvofanalysisdatahint)}
                >
                    ${t(T.csvofanalysisdata)}
                </thermal-btn>
            
            </thermal-dropdown>
        
        `;

    }



}