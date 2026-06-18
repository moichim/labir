import { consume } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html } from "lit";
import { state } from "lit/decorators.js";
import { AbstractGroupConsumer } from "../../hierarchy/consumers/AbstractGroupConsumer";
import { pngExportAnalysisContext, pngExportColumnsContext, pngExportFileDateContext, pngExportFileNameContext, pngExportFsContext, pngExportGroupNameContext, pngExportScaleContext, pngExportWidthContext } from "../../hierarchy/providers/context/pngExportContext";
import { T } from "../../translations/Languages";

export class GroupDownloadDropdown extends AbstractGroupConsumer {

    static styles?: CSSResultGroup | undefined = css`
        thermal-btn {
            text-align: left;
        }
    `;

    @state()
    @consume( { context: pngExportColumnsContext, subscribe: true } )
    private pngColumns: number = 3;

    @state()
    @consume( { context: pngExportGroupNameContext, subscribe: true } )
    private pngGroupName: boolean = false;

    @state()
    @consume( { context: pngExportFsContext, subscribe: true } )
    private pngFontSize: number = 12;

    @state()
    @consume( { context: pngExportAnalysisContext, subscribe: true } )
    private pngShowAnalysis: boolean = true;

    @state()
    @consume( { context: pngExportFileDateContext, subscribe: true } )
    private pngFileDate: boolean = true;

    @state()
    @consume( { context: pngExportFileNameContext, subscribe: true } )
    private pngFileName: boolean = false;

    @state()
    @consume( { context: pngExportWidthContext, subscribe: true } )
    private pngWidth: number = 800;

    @state()
    @consume( { context: pngExportScaleContext, subscribe: true } )
    private pngShowScale: boolean = true;

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
                        columns: this.pngColumns,
                        showGroupName: this.pngGroupName,
                        fontSize: this.pngFontSize,
                        showAnalysis: this.pngShowAnalysis,
                        showFileDate: this.pngFileDate,
                        showFileName: this.pngFileName,
                        showThermalScale: this.pngShowScale,
                        width: this.pngWidth,
                        
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