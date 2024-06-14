import { ThermalManager } from "@labir/core";
import { ThermalFileElement } from "./components/single/thermalFileElement";

declare global {
    interface HTMLElementTagNameMap {
        "lrc-file": ThermalFileElement
    }
    interface Window {
        thermalManager?: ThermalManager
    }
}