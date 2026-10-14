import { consume } from "@lit/context";
import { state } from "lit/decorators.js";
import type { ConfigController } from "../../../hierarchy/controllers/ConfigController";
import { configContext } from "../../../hierarchy/controllers/ConfigController";
import { AbstractFileButton } from "./AbstractFileButton";

export class FilePngButton extends AbstractFileButton {

    tooltip: undefined = undefined;

    @state()
    @consume({ context: configContext, subscribe: true })
    protected configController?: ConfigController;

    enter() { }
    leave() { }

    action() {
        if (this.file) {
            const png = this.configController?.settings.export.png;
            this.file.export.downloadPng({
                width: png?.width,
                fontSize: png?.fontSize,
                showAnalysis: png?.analyses,
                showThermalScale: png?.thermalScale,
                showFileName: png?.fileName,
                showFileDate: png?.fileDate
            });
        }

    }

    getDefaultLabel(): string {
        return "png";
    }



}

declare global {
    interface HTMLElementTagNameMap {
        "file-download-png": FilePngButton;
    }
}
