import { AvailableThermalPalettes, ThermalManager, ThermalPalettes, ThermalTool } from "@labir/core";
import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractManagerProvider } from "../abstraction/AbstractManagerProvider";
import { ManagerContext, managerContext, managerGraphFunctionContext, ManagerGraphFunctionContext, ManagerPaletteContext, managerPaletteContext, managerSmoothContext, toolContext, toolsContext } from "../providers/context/ManagerContext";

@customElement("manager-mirror")
export class ManagerProviderElement extends AbstractManagerProvider {

    protected UUIDManagerListeners = this.UUID + "__manager-listener";

    @provide({ context: managerContext })
    public manager!: ManagerContext;

    @property({ type: String })
    slug!: string;

    @provide({ context: managerPaletteContext })
    @property({
        type: String,
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
    @property({ type: String })
    smooth: boolean = false;

    @provide({ context: managerGraphFunctionContext })
    @property({ type: String })
    graphSmooth: ManagerGraphFunctionContext = false;

    @property({ type: Boolean })
    autoclear: boolean = false;

    @provide({ context: toolContext })
    tool!: ThermalTool;

    @provide({ context: toolsContext })
    tools!: ThermalManager["tool"]["tools"]

}