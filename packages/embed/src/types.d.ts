import { ThermalManager } from "@labirthermal/core";
import { ThermalFileElement } from "./components/single/thermalFileElement";

declare global {
    interface HTMLElementTagNameMap {
        "lrc-file": ThermalFileElement
    }
    interface Window {
        thermalManager?: ThermalManager
    }
}