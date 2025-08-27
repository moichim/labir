import { customElement, property } from "lit/decorators.js";
import { AbstractFileButton } from "./AbstractFileButton";
import { Instance } from "@labir/core";

@customElement("file-button")
export class FileButton extends AbstractFileButton {


    tooltip: undefined = undefined;

    @property({type: String})
    label!: string;

    @property({type: Object})
    onEnter?: (instance: Instance) => void;

    @property({type: Object})
    onLeave?: (instance: Instance) => void;;

    @property({type: Object})
    onAction?: (instance: Instance) => void;;

    enter() { if (this.onEnter && this.file) this.onEnter(this.file); }
    leave() { if ( this.onLeave && this.file ) this.onLeave(this.file);  }

    action() {
        if ( this.onAction && this.file ) {

            this.onAction( this.file );

        }
    }

    getDefaultLabel(): string {
        return this.label;
    }

    

}