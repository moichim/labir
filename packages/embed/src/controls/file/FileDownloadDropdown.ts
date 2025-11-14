import { Instance } from "@labirthermal/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { T } from "../../translations/Languages";
import { pngExportAnalysisContext, pngExportFileDateContext, pngExportFileNameContext, pngExportFsContext, pngExportScaleContext, pngExportWidthContext } from "../../utils/converters/pngExportContext";

@customElement("file-download-dropdown")
export class FileDownloadButton extends FileConsumer {

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
    protected hasGraphs: boolean = false;

    public onInstanceCreated(instance: Instance): void {
        instance.analysisData.onGraphsPresence.set(this.UUID, value => {
            this.hasGraphs = value;
        });
    }
    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    static styles = css`
    
        thermal-btn {

            width: 100%;

            text-align: left;
        
        }


    `;

    protected render(): unknown {

        if (this.file === undefined) {
            return nothing;
        }

        return html`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker">
                    <div class="button">
                        ${this.file
                ? t(T.download)
                : "..."
            }
                    </div>
                </slot>

                <thermal-btn 
                    slot="option"
                    @click="${() => window.open(this.file!.thermalUrl)}"
                    pre="LRC"
                >
                    ${t(T.downloadoriginalfile, { type: this.file.reader.parser.extensions[0].extension.toUpperCase() })}
                </thermal-btn>

                <thermal-btn 
                    slot="option"
                    @click=${() => this.file!.export.downloadPng({
                        width: this.pngWidth,
                        fontSize: this.pngFs,
                        showAnalysis: this.pngAnalyses,
                        showThermalScale: this.pngExportScale,
                        showFileDate: this.pngFileDate,
                        showFileName: this.pngFileName
                    })}
                    pre="PNG"
                >
                    ${t(T.exportcurrentframeaspng)}
                </thermal-btn>

                    ${this.file.timeline.isSequence
                ? html`<thermal-btn 
                        slot="option"
                        @click="${() => this.file?.recording.recordEntireFile()}"
                        pre="WEBM"
                    >
                        ${t(T.convertentiresequencetovideo)}
                    </thermal-btn>`
                : nothing
            }

                    ${this.hasGraphs === true
                ? html`<thermal-btn 
                            slot="option"
                            @click=${() => this.file?.analysisData.downloadData()}
                            pre="CSV"
                    >
                        ${t(T.csvofanalysisdata)}
                    </thermal-btn>`
                : nothing
            }
            
            </thermal-dropdown>

        
        `
    }

}