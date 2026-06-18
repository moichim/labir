import { AbstractFileButton } from "./AbstractFileButton";

export class FileLrcButton extends AbstractFileButton {

    tooltip: undefined = undefined;

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