import { customElement } from "lit/decorators.js";
import { AbstractFileButton } from "./AbstractFileButton";

@customElement("file-download-png")
export class FilePngButton extends AbstractFileButton {

    enter() {}
    leave() {}

    action() {
        if ( this.file ) {
            this.file.export.downloadPng();
        }
    }

    getDefaultLabel(): string {
        return "png";
    }

    

}