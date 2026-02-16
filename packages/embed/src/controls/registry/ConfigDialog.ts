import { customElement } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { html } from "lit";

@customElement("config-dialog")
export class ConfigDialog extends BaseElement {


    protected render(): unknown {
        return html`<thermal-dialog
            label="Nastavení aplikace"
        >
            <thermal-btn 
                slot="invoker"
                icon="settings"
                iconStyle="solid"
                tooltip=${this.t( "config" )}
            ></thermal-btn>

            <div slot="content">
                <png-export-panel></png-export-panel>
                <registry-display-panel></registry-display-panel>
            </div>
        </thermal-dialog>`;
    }



}