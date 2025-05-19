import { Instance } from "@labir/core";
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

        table {
            width: 100%;
        }

        td {
            padding: calc( var( --thermal-gap ) * .5 ) 0;
        }

        tr:not(:last-child) {
            td {
                border-bottom: 1px solid var( --thermal-slate-light );
            }
        }

        small {
            opacity: .5;
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            color: var( --thermal-primary );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
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

                    <div slot="option">
                        <thermal-button @click="${() => window.open(this.file!.thermalUrl)}">${t(T.downloadoriginalfile, { type: this.file.reader.parser.extensions[0].extension.toUpperCase() })}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${() => this.file!.export.downloadPng({
                width: this.pngWidth,
                fontSize: this.pngFs,
                showAnalysis: this.pngAnalyses,
                showThermalScale: this.pngExportScale,
                showFileDate: this.pngFileDate,
                showFileName: this.pngFileName
            })}>${t(T.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence
                ? html`<div slot="option">
                            <thermal-button @click="${() => this.file?.recording.recordEntireFile()}">${t(T.convertentiresequencetovideo)}</thermal-button>
                        </div>`
                : nothing
            }

                    ${this.hasGraphs === true
                ? html`<div slot="option">
                            <thermal-button @click=${() => this.file?.analysisData.downloadData()}>${t(T.csvofanalysisdata)}</thermal-button>
                        </div>`
                : nothing
            }
            
            </thermal-dropdown>

        
        `
    }

}