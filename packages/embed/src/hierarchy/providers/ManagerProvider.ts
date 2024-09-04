import { AvailableThermalPalettes, ThermalManager, ThermalManagerOptions, ThermalPalettes } from "@labir/core";
import { provide } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../BaseElement";
import { ManagerContext, managerContext, ManagerPaletteContext, managerPaletteContext } from "./context/ManagerContext";
import { defaultManager } from "./getters";

@customElement("manager-provider")
export class ManagerProviderElement extends BaseElement {

    protected UUIDManagerListeners = this.UUID + "__manager-listener";

    @provide({ context: managerContext })
    public manager!: ManagerContext;

    @property({ type: String, reflect: true, attribute: true })
    slug!: string;

    @provide( {context: managerPaletteContext} )
    @property({
        type: String,
        attribute: true,
        reflect: true,
        converter: {
            fromAttribute: (value: AvailableThermalPalettes): ManagerPaletteContext => {
                return {
                    key: value,
                    data: ThermalPalettes[value]
                };
            },
            toAttribute: (value: ManagerPaletteContext): string => {
                return value.key.toString();
            }
        }
    })
    public palette: ManagerPaletteContext = {
        key: "jet",
        data: ThermalPalettes["jet"]
    }

    connectedCallback(): void {
        super.connectedCallback();

        let manager = defaultManager;

        if (this.slug === undefined) {
            throw new Error("ThermalManager needs to have an unique slug!");
        } else {

            const options: ThermalManagerOptions = {};

            const palette = ManagerProviderElement.sanitizeStringPalette(this.palette.key);

            options.palette = palette;

            manager = new ThermalManager(undefined, options)
        }

        this.manager = manager;
        this.manager.palette.addListener(this.UUIDManagerListeners, value => {
            this.setPalette( value as AvailableThermalPalettes );
        } );

    }

    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {

        super.attributeChangedCallback(name, _old, value);

        // Propagate palette attribute
        if (name === "palette" && this.manager) {
            const palette = ManagerProviderElement.sanitizeStringPalette(value);
            this.manager.palette.setPalette(palette);
        }
    }

    public static sanitizeStringPalette(
        input: string | null | undefined
    ): AvailableThermalPalettes {
        let valid = true;
        if (input === null || input === undefined)
            valid = false;
        else if (!Object.keys(ThermalPalettes).includes(input)) {
            valid = false;
        }
        return valid
            ? input as AvailableThermalPalettes
            : "jet"
    }

    protected setPalette( key: AvailableThermalPalettes ) {
        this.palette = {
            key: key,
            data: ThermalPalettes[key]
        }
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}