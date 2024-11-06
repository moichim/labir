import { BaseStructureObject } from "../base/BaseStructureObject";
import { IThermalInstance } from "../properties/structure";
import { ThermalCanvasLayer } from "./instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "./instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "./instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "./instanceUtils/VisibleLayer";

/** Define properties for a file */
export interface IFileInstance extends IThermalInstance, BaseStructureObject {
    root: HTMLDivElement | null;
    canvasLayer: ThermalCanvasLayer,
    visibleLayer: VisibleLayer,
    cursorLayer: ThermalCursorLayer,
    listenerLayer: ThermalListenerLayer,
    horizontalLimit: number,
    id: string,
    verticalLimit: number,
    duration: number,
    isHover: boolean,
    mounted: boolean,
}

