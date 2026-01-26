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

declare interface RestrictionTarget {}
declare var RestrictionTarget: {
    fromElement?: (el: Element) => Promise<RestrictionTarget>;
    fromRect?: (x: number, y: number, width: number, height: number) => Promise<RestrictionTarget>;
};

declare interface CropTarget {}
declare var CropTarget: {
    fromElement?: (el: Element) => Promise<CropTarget>;
    fromRect?: (x: number, y: number, width: number, height: number) => Promise<CropTarget>;
};

declare interface MediaStreamTrack {
    restrictTo?: (target: RestrictionTarget | CropTarget) => Promise<void> | void;
}