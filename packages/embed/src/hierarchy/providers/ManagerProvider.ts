import { AvailableThermalPalettes, ThermalManager, ThermalPalettes } from "@labir/core";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../BaseElement";

@customElement("manager-provider")
export class ManagerProviderElement extends BaseElement {

    public readonly manager = new ThermalManager();

    @property({
        type: String,
        attribute: true,
        reflect: true,
        converter: {
            fromAttribute: ( value ): AvailableThermalPalettes => {
                return ManagerProviderElement.sanitizeStringPalette( value )
            },
            toAttribute: ( value: AvailableThermalPalettes ): string => {
                return value.toString();
            }
        }
    })
    public palette: AvailableThermalPalettes = "jet";

    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {

        super.attributeChangedCallback( name, _old, value );

        // Propagate palette attribute
        if ( name === "palette" ) {
            const palette = ManagerProviderElement.sanitizeStringPalette( value );
            this.manager.palette.setPalette( palette );
        }
    }

    public static sanitizeStringPalette(
        input: string | null | undefined
    ): AvailableThermalPalettes {
        let valid = true;
        if ( input === null || input === undefined )
            valid = false;
        else if ( ! Object.keys( ThermalPalettes ).includes( input ) ) {
            valid = false;
        }
        return valid 
            ? input as AvailableThermalPalettes
            : "jet" 
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}