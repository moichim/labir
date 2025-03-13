import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";

@customElement("png-export-config")
export class PngExportSettingDialog extends BaseElement {

    protected render(): unknown {
        return html`<thermal-dialog label="Export configuration">
            <thermal-button slot="invoker">Export config</thermal-button>
            <div slot="content">
                <png-export-panel></png-export-panel>
            </div>
        </thermal-dialog>`;
    }

}