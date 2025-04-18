import { html } from "lit";
import { AbstractFileIcon } from "./AbstractFileIcon";
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { customElement, property } from "lit/decorators.js";
import { Instance } from "@labir/core";

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

    protected getIcon(): ReturnType<typeof html> {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
        </svg>`;
    }

    

}