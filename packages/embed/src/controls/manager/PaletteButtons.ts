import { AvailableThermalPalettes, ThermalPalettes, ThermalPaletteType } from "@labir/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { ManagerPaletteContext, managerPaletteContext } from "../../hierarchy/providers/context/ManagerContext";
import { T } from "../../translations/Languages";



@customElement("registry-palette-buttons")
export class PaletteButtonsElement extends RegistryConsumer {

    @consume({ context: managerPaletteContext, subscribe: true })
    @state()
    value!: ManagerPaletteContext;

    /** Handle user input events */
    onSelect(palette: AvailableThermalPalettes) {
        this.registry.palette.setPalette(palette);
    }

    static styles = css`

    .container {
        display: flex;
        width: content-width;
        gap: 5px;
    }

    .button {
        margin: 0;
        border: 0;
        line-height: 0;
        display: flex;
        align-items: center;
        gap: 3px;
    }

    .palette {
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        border-radius: var( --thermal-fs-small );
    }

    `;

    protected paletteTemplate(
        palette: ThermalPaletteType,
        className?: string
    ) {
        return html`

            <div class="button ${className}">
                <span class="palette" style="background:${palette.gradient}"></span>
                <span>${t(T.palettename, { name: palette.name })}</span>
            </div>
        
        `;
    }

    protected render(): unknown {
        return html`
            <div class="container">
                ${Object.entries(ThermalPalettes).map(([key, palette]) => html`
                    
                    <thermal-button @click=${() => this.onSelect(key as AvailableThermalPalettes)} variant="${palette.name === this.manager.palette.currentPalette.name ? "background" : "slate"}">
                        ${this.paletteTemplate(palette)}
                    </thermal-button>
                    
                `)}
            </div>

        `;
    }

}