import { AvailableThermalPalettes, ThermalPalettes } from "@labir/core";
import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractManagerProvider } from "../abstraction/AbstractManagerProvider";
import { ManagerContext, managerContext, managerGraphFunctionContext, ManagerGraphFunctionContext, ManagerPaletteContext, managerPaletteContext, managerSmoothContext } from "./context/ManagerContext";

@customElement("manager-provider")
export class ManagerProviderElement extends AbstractManagerProvider {

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

    @property({type: Boolean, reflect: true})
    autoclear: boolean = false;

}