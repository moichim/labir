import { Instance } from "@labirthermal/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { T } from "../../translations/Languages";
import { pngExportAnalysisContext, pngExportFileDateContext, pngExportFileNameContext, pngExportFsContext, pngExportScaleContext, pngExportWidthContext } from "../../utils/converters/pngExportContext";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { ThermalDialog } from "../../ui/Dialog";
import { ThermalDropdown } from "../../ui/Dropdown";

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

    protected recordingGraphRef: Ref<ThermalDialog> = createRef();
    protected dropdownRef: Ref<ThermalDropdown> = createRef();

    public onInstanceCreated(instance: Instance): void {
        instance.analysisData.onGraphsPresence.set(this.UUID, value => {
            this.hasGraphs = value;
        });
    }
    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    protected render(): unknown {

        if (this.file === undefined) {
            return nothing;
        }

        return html`

            <thermal-dropdown ${ref(this.dropdownRef)} class="download">

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
                    align="left"
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
                    align="left"
                >
                    ${t(T.exportcurrentframeaspng)}
                </thermal-btn>

                <file-video-export-button 
                    pre="${this.file.timeline.isSequence ? "MP4 / PNG" : "PNG"}" 
                    label="Pokročilý export" 
                    slot="option"
                    style="width: 100%"
                ></file-video-export-button>



                    ${this.hasGraphs === true
                ? html`<thermal-btn 
                            slot="option"
                            @click=${() => this.file?.analysisData.downloadData()}
                            pre="CSV"
                            align="left"
                    >
                        ${t(T.csvofanalysisdata)}
                    </thermal-btn>`
                : nothing
            }
            
            </thermal-dropdown>

            <thermal-dialog 
                ${ref(this.recordingGraphRef)}
                label="Export souboru do videa"
                button="Začít nahrávat"
                .beforeClose=${ async () => {
                    this.file?.recording.recordEntireFile();
                    return true;
                }}
            >

                <div slot="content">

                    <p>Export probíhá tak, že sekvenci ve Vašem prohlížeči přehrajeme a zaznamenáme do video souboru.</p>

                    <p>Součástí exportu <i>nejsou analýzy ani teplotní škála</i>.</p>

                    <p><strong>Při nahrávání bude použito aktuální nastavení:</strong></p>

                    <table>

                        <tr>
                            <td>Barevná paleta</td>
                            <td>
                                <registry-palette-dropdown></registry-palette-dropdown>
                            </td>
                        </tr>

                        <tr>
                            <td>Teplotní rozsah</td>
                            <td>
                                <registry-range-form></registry-range-form>
                            </td>
                        </tr>

                        <tr>
                            <td>Rychlost přehrávání</td>
                            <td>
                                <file-playback-speed-dropdown></file-playback-speed-dropdown>
                            </td>
                        </tr>

                    </table>

                    <p>Chcete zahájit nahrávání?</p>


                </div>

                <thermal-btn slot="button" @click=${() => this.dropdownRef.value?.setClose()}>
                    Zrušit
                </thermal-btn>

            </thermal-dialog>

        
        `
    }

}