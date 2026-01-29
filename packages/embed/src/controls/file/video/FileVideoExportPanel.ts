import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { AbstractSingleVideoExport } from "./AbstractSingleVideoExport";
import { customElement } from "lit/decorators.js";
import { CSSResultGroup, html } from "lit";
import { exportConfigDirective, SingleVideoExportConfigDirective } from "./directives/SingleVideoExportConfigDirective";
import { exportLayoutDirective, SingleVideoExportLayoutDirective } from "./directives/SingleVideoExportLayoutDirective";
import { singleVideoProviders } from "./directives/SingleVideoExportProvidersDirective";

@customElement("file-video-export-panel")
export class FileVideoExportPanel extends AbstractSingleVideoExport {




    public onInstanceCreated(instance: Instance): void {
        // throw new Error("Method not implemented.");
        this.log( "Načetl jsem to", instance );
    }
    public onFailure(error: ThermalFileFailure): void {
        // throw new Error("Method not implemented.");
    }

    static styles?: CSSResultGroup | undefined = [
        SingleVideoExportLayoutDirective.styles,
        SingleVideoExportConfigDirective.styles
    ]

    protected render(): unknown {
        return html`${singleVideoProviders(this )}`;
    }

}