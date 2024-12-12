import { AvailableThermalPalettes, ThermalManagerOptions, ThermalPalettes } from "@labir/core";
import { html, PropertyValues } from "lit";
import { TourableElement } from "../../tour/TourableElement";
import { ManagerContext, ManagerGraphFunctionContext, ManagerPaletteContext } from "../providers/context/ManagerContext";
import { createOrGetManager, removeManager } from "../providers/getters";

export abstract class AbstractManagerProvider extends TourableElement {

    protected UUIDManagerListeners = this.UUID + "__manager-listener";

    public manager!: ManagerContext;

    public slug!: string;

    public palette: ManagerPaletteContext = {
        key: "jet",
        data: ThermalPalettes["jet"]
    }

    public smooth: boolean = false;

    public graphSmooth: ManagerGraphFunctionContext = false;

    public autoclear: boolean = false;


    connectedCallback(): void {

        super.connectedCallback();

        const options: ThermalManagerOptions = {};

        const palette = this.sanitizeStringPalette(this.palette.key);

        options.palette = palette;

        const manager = createOrGetManager(this.slug, options);

        this.manager = manager;

    }


    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.log( "autoclear manager", this.autoclear, typeof this.autoclear );

        if (this.autoclear === true && this.manager !== undefined) {
            removeManager(this.manager);
        }
    }



    protected firstUpdated(_changedProperties: PropertyValues): void {

        super.firstUpdated(_changedProperties);

        this.manager.palette.addListener(this.UUIDManagerListeners, value => {
            this.setPalette(value as AvailableThermalPalettes);
        });

        this.manager.smooth.addListener(this.UUIDManagerListeners, value => {
            this.smooth = value;
        });

        this.manager.graphSmooth.addListener(this.UUIDManagerListeners, value => {
            this.graphSmooth = value;
        });
    }



    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {

        super.attributeChangedCallback(name, _old, value);

        // Propagate palette attribute
        if (name === "palette" && this.manager) {
            const palette = this.sanitizeStringPalette(value);
            this.manager.palette.setPalette(palette);
        }
    }



    private sanitizeStringPalette(
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

    private setPalette(key: AvailableThermalPalettes) {
        this.palette = {
            key: key,
            data: ThermalPalettes[key]
        }
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}