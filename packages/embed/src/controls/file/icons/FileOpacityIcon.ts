import { html, nothing } from "lit";
import { AbstractFileIcon } from "./AbstractFileIcon";
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { customElement, property } from "lit/decorators.js";
import { Instance } from "@labir/core";

@customElement("file-opacity-icon")
export class FileDetailIcon extends AbstractFileIcon {

    @property({type: Object})
    public onaction?: ( file: Instance ) => void
    
    enter(): void {}

    action(): void {
        if ( this.file) {
            const opacity = this.file.group.registry.opacity.value;
            if ( opacity === 1 ) {
                this.file.group.registry.opacity.imposeOpacity( 0 );
            } else {
                this.file.group.registry.opacity.imposeOpacity( 1 );
            }
        }
    }

    leave(): void {}

    protected getLabel(): ReturnType<typeof html>|string {
        return t(T.togglevisibleimage);
    }

    protected getIcon(): ReturnType<typeof html> {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
        </svg>`;
    }

    protected render(): unknown {
        if ( this.file === undefined || this.file.visibleUrl === undefined ) {
            return nothing;
        }
        return super.render();
    }

    

}