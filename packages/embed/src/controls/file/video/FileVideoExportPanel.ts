import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { AbstractSingleVideoExport } from "./AbstractSingleVideoExport";
import { customElement } from "lit/decorators.js";
import { css, CSSResultGroup, html } from "lit";
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
        SingleVideoExportConfigDirective.styles,
        css`
            :host {
                font-size: var( --thermal-fs );
                color: var( --thermal-foreground );
                display: grid;
                grid-template-rows: auto 1fr auto;
                gap: 1em;
                height: 100%;
                min-height: 0;
                max-height: 100%;
            }

            .controls {
            }

            .preview {
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 0; /* klíčové - povolí zmenšení pod velikost obsahu */

                & > * {
                
                }
            }

            .footer {
            }
        `
    ]

    private renderHeader(): unknown {

        return html`<header class="controls">
            ${exportConfigDirective(this)}
        </header>`;

    }

    private renderPreview(): unknown {
        return html`<section class="preview">
            ${exportLayoutDirective(this.exportedDivRef, this.renderProps)}
        </section>`;
    }

    private renderFooter(): unknown {
        return html`<footer class="footer">
            <file-timeline></file-timeline>
        </footer>`;
    }

    protected render(): unknown {
        return singleVideoProviders(this, [
            this.renderHeader(),
            this.renderPreview(),
            this.renderFooter(),
        ] );
    }

}