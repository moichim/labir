import { customElement } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { css, CSSResultGroup, html } from "lit";
import { t } from "i18next";
import { T } from "../../translations/Languages";

@customElement("registry-display-panel")
export class ExportConfigPanel extends BaseElement {

    static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: contents;
        }
    
    `;


    protected render(): unknown {
        return html`
        <thermal-field label="${t(T.filerendering)}" hint="${t(T.filerenderinghint)}">
            <manager-smooth-switch></manager-smooth-switch>
        </thermal-field>
        <thermal-field label="${t(T.graphlines)}" hint="${t(T.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `;
    }


}