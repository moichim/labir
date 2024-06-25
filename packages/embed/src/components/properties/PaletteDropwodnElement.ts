import { AvailableThermalPalettes, ThermalPaletteType, ThermalPalettes } from "@labir/core";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementInheritingManager } from "../structure/manager/ElementInherigingManager";



@customElement("thermal-palette")
export class PaletteDropdownElement extends ElementInheritingManager {

    protected getClassName(): string {
        return "PaletteDropdownElement";
    }


    @property({ type: String, reflect: true, attribute: true })
    value!: AvailableThermalPalettes;

    connectedCallback(): void {
        super.connectedCallback();

        // Set the default value from the registry
        this.value = this.manager.palette.value as AvailableThermalPalettes;

        // Handler of incoming changes

        const handleChange = (value: string|number) => {

            if ( typeof value === "string" ) {

                const val = value as AvailableThermalPalettes;
                this.value = val;

            }
           
        }

        // Register incoming changes
        this.manager.palette.addListener( this.identificator, handleChange.bind( this ) );

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.manager.palette.removeListener( this.identificator )
    }

    /** Handle user input events */
    onSelect( palette: AvailableThermalPalettes ) {

        this.manager.palette.setPalette( palette );
        this.value = palette;
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
    }

    .palette {
        display: block;
        width: calc( var( --thermal-gap ) * 2 );
        height: var( --thermal-fs );
        border-radius: 1rem;
    }

    `;

    protected paletteTemplate(
        palette: ThermalPaletteType,
        className?: string
    ) {
        return html`

            <div class="button ${className}">
                <span class="palette" style="background:${palette.gradient}"></span>
                <!-- <span>${palette.name}</span> -->
            </div>
        
        `;
    }

    protected render(): unknown {
        return html`
        ${Object.entries( ThermalPalettes ).map( ([key,palette]) => html`
            <thermal-button @click=${() => this.onSelect( key as AvailableThermalPalettes )} variant="${palette.name === this.manager.palette.currentPalette.name  ? "background" : "slate"}">
                ${this.paletteTemplate( palette )}
            </thermal-button>
        `)}
        `;
    }

}