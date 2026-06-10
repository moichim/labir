import { customElement, state } from "lit/decorators.js";
import { AbstractThermalElement } from "../../hierarchy/AbstractThermalElement";
import { css, CSSResultGroup, html } from "lit";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { consume } from "@lit/context";
import { advancedPalettesContext, advancedPalettesSetterContext } from "../../apps/AbstractControlledApp";

@customElement("display-panel")
export class DisplayPanel extends AbstractThermalElement {

    static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: contents;
        }
    
    `;

    @consume({ context: advancedPalettesContext, subscribe: true })
    @state()
    advancedPalettes: boolean = false;

    @consume({ context: advancedPalettesSetterContext, subscribe: true })
    @state()
    advancedPalettesSetter: (value: boolean) => void = () => {};


    protected render(): unknown {
        return html`
        <thermal-field label="${t(T.colourpalette)}" hint="Zvolte, jaké chcete používat palety.">
            <thermal-btn 
                variant="${!this.advancedPalettes ? 'foreground' : 'default'}"
                @click=${() => this.advancedPalettesSetter( false )}
                tooltip="IRON, JET, White hot, Black hot"
            >Základní</thermal-btn>
            <thermal-btn 
                variant="${this.advancedPalettes ? 'foreground' : 'default'}"
                @click=${() => this.advancedPalettesSetter( true )}
                tooltip="Všechny dostupné palety"
            >Pokročilé</thermal-btn>
        </thermal-field>
        <thermal-field label="${t(T.filerendering)}" hint="${t(T.filerenderinghint)}">
            <manager-image-smooth-switch></manager-image-smooth-switch>
        </thermal-field>
        <thermal-field label="${t(T.graphlines)}" hint="${t(T.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `;
    }


}