import { AvailableThermalPalettes, ThermalManagerOptions, ThermalPalettes } from "@labir/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TourableElement } from "../../tour/TourableElement";
import { ManagerContext, managerContext, managerGraphFunctionContext, ManagerGraphFunctionContext, ManagerPaletteContext, managerPaletteContext, managerSmoothContext } from "./context/ManagerContext";
import { createOrGetManager } from "./getters";

@customElement("manager-provider")
export class ManagerProviderElement extends TourableElement {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    protected UUIDManagerListeners = this.UUID + "__manager-listener";

    @provide({ context: managerContext })
    public manager!: ManagerContext;

    @property({ type: String, reflect: true, attribute: true })
    slug!: string;

    @provide({ context: managerPaletteContext })
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

    @provide({ context: managerSmoothContext })
    @property({ type: String, reflect: true, attribute: true })
    smooth: boolean = false;

    @provide({ context: managerGraphFunctionContext })
    @property({ type: String, reflect: true, attribute: true })
    graphSmooth: ManagerGraphFunctionContext = false;

    connectedCallback(): void {

        super.connectedCallback();

        const options: ThermalManagerOptions = {};

        const palette = ManagerProviderElement.sanitizeStringPalette(this.palette.key);

        options.palette = palette;

        const manager = createOrGetManager(this.slug, options);

        this.manager = manager;

    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("palette")) {
            if (_changedProperties.get("palette") !== this.palette) {
                // const palette = ManagerProviderElement.sanitizeStringPalette(this.palette);
                // this.manager.palette.setPalette( this.palette.key );
            }
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

    protected setPalette(key: AvailableThermalPalettes) {
        this.palette = {
            key: key,
            data: ThermalPalettes[key]
        }
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}