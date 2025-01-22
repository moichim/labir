import { Instance, ThermalFileFailure } from "@labir/core";
import { FileConsumer } from "../hierarchy/consumers/FileConsumer";
import { html } from "lit";
import { t } from "i18next";
import { T } from "../translations/Languages";

export class FileInGridDisplay extends FileConsumer {
    public onInstanceCreated(instance: Instance): void {
        // throw new Error("Method not implemented.");
    }
    public onFailure(error: ThermalFileFailure): void {
        //throw new Error("Method not implemented.");
    }
    public getTourableRoot(): HTMLElement | undefined {
        // throw new Error("Method not implemented.");
        return undefined;
    }


    protected render(): unknown {
        return html`
                <header class="header">
                    <div></div>
    
                    <nav>
                        <file-dropdown-lrc></file-dropdown-lrc>
                        <file-download-png></file-download-png>
                        <file-range-propagator></file-range-propagator>
                        <file-info-button>
                            <file-button slot="invoker" label="${t(T.info).toLowerCase()}"></file-button>
                        </file-info-button>
                    </nav>
                </header>
                <main>
                    <file-canvas></file-canvas>
                    <file-timeline></file-timeline>
                    <file-analysis-table></file-analysis-table>
                </main>
            `;
    }



}