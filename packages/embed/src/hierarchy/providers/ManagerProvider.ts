import { AvailableThermalPalette, ThermalManager, ThermalPalettes, ThermalTool } from "@labirthermal/core";
import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractManagerProvider } from "../abstraction/AbstractManagerProvider";
import { managerContext, managerGraphFunctionContext, ManagerPaletteContext, managerPaletteContext, managerSmoothContext, toolContext, toolsContext } from "./context/ManagerContext";

export class ManagerProviderElement extends AbstractManagerProvider {

    protected UUIDManagerListeners = this.UUID + "__manager-listener";

    @provide({ context: managerContext })
    public manager!: ThermalManager;

    @property({ type: String, reflect: true, attribute: true })
    slug!: string;

    @provide({ context: managerPaletteContext })
    @property({
        type: String,
        attribute: true,
        reflect: true,
        converter: {
            fromAttribute: (value: AvailableThermalPalette): ManagerPaletteContext => {
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
    graphSmooth: boolean = false;

    @property({type: Boolean, reflect: true})
    autoclear: boolean = false;

    @provide({ context: toolContext })
    tool!: ThermalTool;

    @provide({ context: toolsContext })
    tools!: ThermalManager["tool"]["tools"]

}