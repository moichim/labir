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

    protected getIcon(): string {
        return "eye";
    }

    protected getIconStyle(): string {
        return "solid";
    }

    protected render(): unknown {
        if ( this.file === undefined || this.file.visibleUrl === undefined ) {
            return nothing;
        }
        return super.render();
    }

    

}