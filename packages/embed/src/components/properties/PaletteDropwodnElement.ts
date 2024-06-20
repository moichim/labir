import { AvailableThermalPalettes, ThermalPaletteType, ThermalPalettes } from "@labir/core";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementInheritingManager } from "../structure/manager/ElementInherigingManager";


import '@lion/ui/define/lion-option.js';
import '@lion/ui/define/lion-select-rich.js';


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

    .button {
        margin: 0;
        cursor: pointer;
        border: 0;
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .palette {
        display: inline-block;
        width: 2rem;
        height: 1rem;
        border-radius: 1rem;
    }

    .invoker {
        border-radius: 1rem;
        cursor: pointer;
    }

    lion-options {

        border-radius: 1rem;
        overflow: hidden;

        lion-option {
            padding: .7rem 1rem;

            &:first-child {
                border-radius: 1rem 1rem 0 0;
            }
            &:last-child {
                border-radius: 0 0 1rem 1rem;
            }
        }
    }

    `;

    protected paletteTemplate(
        palette: ThermalPaletteType,
        className?: string
    ) {
        return html`

            <div class="button ${className}">
                <span class="palette" style="background:${palette.gradient}"></span>
                <span>${palette.name}</span>
            </div>
        
        `;
    }

    protected render(): unknown {
        return html`

            <lion-select-rich>
                <lion-button slot="invoker" class="invoker">
                    ${this.paletteTemplate( this.manager.palette.currentPalette )}
                </lion-button>
                ${Object.entries( ThermalPalettes ).map( ([key,palette]) => html`
                    <lion-option @click=${() => this.onSelect( key as AvailableThermalPalettes )}>
                        ${this.paletteTemplate( palette )}
                    </lion-option>
                `)}
            </lion-select-rich>

            <slot></slot>
        `;
    }

}