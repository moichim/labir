import { css, CSSResultGroup, html } from "lit";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { customElement } from "lit/decorators.js";

@customElement("group-download-dropdown")
export class GroupDownloadDropdown extends GroupConsumer {

    static styles?: CSSResultGroup | undefined = css`
    
    `;


    protected render(): unknown {

        const dropdownClass = this.classList.contains( "small" ) ? "small" : "";


        return html`
        
            <thermal-dropdown class="download ${dropdownClass}">
            
                <span slot="invoker">${t(T.download)}</span>
            
                <div slot="option">
                    <thermal-button @click=${() => this.group.files.downloadAllFiles()}>${t(T.downloadoriginalfiles)}</thermal-button>
                    <small>${t(T.downloadoriginalfileshint)}</small>
                </div>
            
                <div slot="option">
                    <thermal-button @click=${() => this.group.forEveryInstance(instance => instance.export.downloadPng())}>${t(T.pngofindividualimages)}</thermal-button>
                    <small>${t(T.pngofindividualimageshint)}</small>
                </div>
            
                <div slot="option">
            
                <thermal-button @click=${() => this.group.analysisSync.png.downloadPng({
            // columns: this.columns
        })}>${t(T.pngofentiregroup)}</thermal-button>
                    <small>${t(T.pngofentiregrouphint)}</small>
                </div>
            
            
                <div slot="option">
                    <thermal-button @click=${() => { this.group.analysisSync.csv.downloadAsCsv() }}>${t(T.csvofanalysisdata)}</thermal-button>
                    <small>${t(T.csvofanalysisdatahint)}</small>
                </div>
            
            </thermal-dropdown>
        
        `;

    }



}