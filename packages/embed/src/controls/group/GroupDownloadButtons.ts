import { t } from "i18next";
import { css, CSSResultGroup, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { T } from "../../translations/Languages";
import { pngExportAnalysisContext, pngExportColumnsContext, pngExportFileDateContext, pngExportFileNameContext, pngExportFsContext, pngExportGroupNameContext, pngExportScaleContext, pngExportWidthContext } from "../../utils/converters/pngExportContext";
import { consume } from "@lit/context";

@customElement("group-download-buttons")
export class GroupDownloadDropdown extends GroupConsumer {

    @property({type: String})
    public label?: string;

    @consume({ context: pngExportWidthContext, subscribe: true })
    protected pngWidth: number = 1350;

    @consume({ context: pngExportFsContext, subscribe: true })
    protected pngFs!: number;

    @state()
    @consume({ context: pngExportAnalysisContext, subscribe: true })
    protected pngAnalyses!: boolean;

    @state()
    @consume({ context: pngExportScaleContext, subscribe: true })
    protected pngExportScale!: boolean;

    @state()
    @consume({ context: pngExportFileNameContext, subscribe: true })
    protected pngFileName!: boolean;

    @state()
    @consume({ context: pngExportFileDateContext, subscribe: true })
    protected pngFileDate!: boolean;

    @state()
    @consume({context: pngExportColumnsContext, subscribe: true})
    protected pngColumns!: number;

    @state()
    @consume({context: pngExportGroupNameContext, subscribe: true})
    protected pngExportGroupName!: boolean;

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
                    columns: this.pngColumns,
                    showAnalysis: this.pngAnalyses,
                    showFileDate: this.pngFileDate,
                    showFileName: this.pngFileName,
                    showThermalScale: this.pngExportScale,
                    showGroupName: this.pngExportGroupName,
                    label: this.label,
                    fontSize: this.pngFs
        })}>${t(T.pngofentiregroup)}</button>
            
                <button class="default" @click=${() => { this.group.analysisSync.csv.downloadAsCsv() }}>${t(T.csvofanalysisdata)}</button>
        
        `;

    }



}