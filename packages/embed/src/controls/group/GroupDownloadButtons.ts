import { t } from "i18next";
import { css, CSSResultGroup, html } from "lit";
import { customElement } from "lit/decorators.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { T } from "../../translations/Languages";

@customElement("group-download-buttons")
export class GroupDownloadDropdown extends GroupConsumer {
    public getTourableRoot(): HTMLElement | undefined {
        // throw new Error("Method not implemented.");
        return undefined;
    }

    static styles?: CSSResultGroup | undefined = css`

        :host {
        
            display: flex;
            flex-direction: column;
            gap: 5px;

        }

        button.default {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var(--thermal-foreground);
            border-color: var(--thermal-slate);
            border-style: solid;
            border-width: 1px;
            border-radius: var( --thermal-radius );
            background-color: var(--thermal-slate-light);
            white-space: preserve nowrap;
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }
    
    `;


    protected render(): unknown {


        return html`
        
                <button class="default" @click=${() => this.group.files.downloadAllFiles()}>${t(T.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${() => this.group.forEveryInstance(instance => instance.export.downloadPng())}>${t(T.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${() => this.group.analysisSync.png.downloadPng({
            // columns: this.columns
        })}>${t(T.pngofentiregroup)}</button>
            
                <button class="default" @click=${() => { this.group.analysisSync.csv.downloadAsCsv() }}>${t(T.csvofanalysisdata)}</button>
        
        `;

    }



}