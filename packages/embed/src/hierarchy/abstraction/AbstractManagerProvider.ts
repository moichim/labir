import { AvailableThermalPalette, ThermalManager, ThermalManagerOptions, ThermalPalettes, ThermalTool } from "@labirthermal/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { AbstractThermalElement } from "../AbstractThermalElement";
import { ManagerPaletteContext, toolContext, toolsContext } from "../providers/context/ManagerContext";
import { createOrGetManager, removeManager } from "../providers/getters";

export abstract class AbstractManagerProvider extends AbstractThermalElement {

    protected UUIDManagerListeners = this.UUID + "__manager-listener";

    public manager!: ThermalManager;

    public slug!: string;

    public palette: ManagerPaletteContext = {
        key: "jet",
        data: ThermalPalettes["jet"]
    }

    public smooth: boolean = false;

    public graphSmooth: boolean = false;

    public autoclear: boolean = false;

    @provide({ context: toolContext })
    tool!: ThermalTool;

    @provide({ context: toolsContext })
    tools!: ThermalManager["tool"]["tools"]


    connectedCallback(): void {

        super.connectedCallback();

        const options: ThermalManagerOptions = {};

        const palette = this.sanitizeStringPalette(this.palette.key);

        options.palette = palette;

        const manager = createOrGetManager(this.slug, options);

        this.manager = manager;

        // Assign tool
        this.tool = this.manager.tool.value;
        this.tools = this.manager.tool.tools;

    }


    disconnectedCallback(): void {
        super.disconnectedCallback();

        if (this.autoclear === true && this.manager !== undefined) {
            removeManager(this.manager);
        }
    }



    protected firstUpdated(_changedProperties: PropertyValues): void {

        super.firstUpdated(_changedProperties);

        this.manager.palette.addListener(this.UUIDManagerListeners, value => {
            this.setPalette(value as AvailableThermalPalette);
        });

        this.manager.smooth.addListener(this.UUIDManagerListeners, value => {
            this.smooth = value;
        });

        this.manager.graphSmooth.addListener(this.UUIDManagerListeners, value => {
            this.graphSmooth = value;
        });

        // Add tool listener
        this.manager.tool.addListener(this.UUIDManagerListeners, value => {
            this.tool = value;
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
    ): AvailableThermalPalette {
        let valid = true;
        if (input === null || input === undefined)
            valid = false;
        else if (!Object.keys(ThermalPalettes).includes(input)) {
            valid = false;
        }
        return valid
            ? input as AvailableThermalPalette
            : "jet"
    }

    private setPalette(key: AvailableThermalPalette) {
        this.palette = {
            key: key,
            data: ThermalPalettes[key]
        }
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}