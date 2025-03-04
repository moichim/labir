import { customElement } from "lit/decorators.js";
import { AbstractFileButton } from "./AbstractFileButton";
import { consume } from "@lit/context";
import { pngExportFsContext, pngExportWidthContext } from "../../../utils/pngExportContext";

@customElement("file-download-png")
export class FilePngButton extends AbstractFileButton {

    @consume({ context: pngExportWidthContext, subscribe: true })
    protected pngWidth!: number;

    @consume({ context: pngExportFsContext, subscribe: true })
    protected pngFs!: number;

    enter() { }
    leave() { }

    action() {
        if (this.file) {
            this.file.export.downloadPng({
                width: this.pngWidth,
                fontSize: this.pngFs
            });
        }
    }

    getDefaultLabel(): string {
        return "png";
    }



}