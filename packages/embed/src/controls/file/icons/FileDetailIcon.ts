import { html } from "lit";
import { AbstractFileIcon } from "./AbstractFileIcon";
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { customElement, property } from "lit/decorators.js";
import { Instance } from "@labirthermal/core";

@customElement("file-detail-icon")
export class FileDetailIcon extends AbstractFileIcon {

    @property({type: Object})
    public onaction?: ( file: Instance ) => void
    
    enter(): void {
    }

    action(): void {
        if ( this.onaction && this.file) {
            this.onaction( this.file );
        }
    }

    leave(): void {

    }

    protected getLabel(): ReturnType<typeof html>|string {
        return t(T.detail);
    }

    protected getIcon(): string {
        return "zoom";
    }

    protected getIconStyle(): string {
        return "micro";
    }

    

}