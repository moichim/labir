import { customElement } from "lit/decorators.js";
import { AbstractFileButton } from "./AbstractFileButton";

@customElement("file-download-lrc")
export class FileLrcButton extends AbstractFileButton {

    enter() {}
    leave() {}

    action() {
        if ( this.file ) {
            const link = document.createElement( "a" );
            link.href = this.file.thermalUrl;
            link.download = this.file.fileName;
            link.click();
        }
    }

    getDefaultLabel(): string {
        return "lrc";
    }

    

}