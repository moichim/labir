import { BaseStructureObject } from "../base/BaseStructureObject";
import { ILrcFrame } from "../parsers/lrc/LrcTrame";
import { TimelineDrive } from "../properties/drives/TimelineDrive";
import { IThermalInstance } from "../properties/structure";
import { ThermalCanvasLayer } from "./instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "./instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "./instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "./instanceUtils/VisibleLayer";
import { ThermalFileInterface } from "./ThermalFileSource";

export interface IFileInstance extends IThermalInstance, ThermalFileInterface, BaseStructureObject {
    root: HTMLDivElement | null;
    canvasLayer: ThermalCanvasLayer,
    visibleLayer: VisibleLayer,
    cursorLayer: ThermalCursorLayer,
    listenerLayer: ThermalListenerLayer,
    timeline: TimelineDrive,
    frames: ILrcFrame[],
    horizontalLimit: number,
    id: string,
    verticalLimit: number,
    duration: number
}