import { customElement, state } from "lit/decorators.js";
import { AbstractFileButton } from "./AbstractFileButton";
import { consume } from "@lit/context";
import { pngExportAnalysisContext, pngExportFileDateContext, pngExportFileNameContext, pngExportFsContext, pngExportScaleContext, pngExportWidthContext } from "../../../utils/converters/pngExportContext";

@customElement("file-download-png")
export class FilePngButton extends AbstractFileButton {

    tooltip: undefined = undefined;

    @state()
    @consume({ context: pngExportWidthContext, subscribe: true })
    protected pngWidth!: number;

    @state()
    @consume({ context: pngExportFsContext, subscribe: true })
    protected pngFs!: number;

    @state()
    @consume({context: pngExportAnalysisContext, subscribe: true})
    protected pngAnalyses!: boolean;

    @state()
    @consume({context: pngExportScaleContext, subscribe: true})
    protected pngExportScale!: boolean;

    @state()
    @consume({context: pngExportFileNameContext, subscribe: true})
    protected pngFileName!: boolean;

    @state()
    @consume({context: pngExportFileDateContext, subscribe: true})
    protected pngFileDate!: boolean;

    enter() { }
    leave() { }

    action() {
        if (this.file) {
            this.file.export.downloadPng({
                width: this.pngWidth,
                fontSize: this.pngFs,
                showAnalysis: this.pngAnalyses,
                showThermalScale: this.pngExportScale,
                showFileName: this.pngFileName,
                showFileDate: this.pngFileDate
            });
        }
    }

    getDefaultLabel(): string {
        return "png";
    }



}