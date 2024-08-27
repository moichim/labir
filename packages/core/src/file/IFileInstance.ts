import { BaseStructureObject } from "../base/BaseStructureObject";
import { ITimelineDrive } from "../properties/time/playback/ITimeline";
import { IThermalInstance } from "../properties/structure";
import { ThermalCanvasLayer } from "./instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "./instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "./instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "./instanceUtils/VisibleLayer";
import { ThermalFileInterface } from "./ThermalFileSource";
import { ILrcFrame } from "../loading/mainThread/parsers/lrc/LrcTrame";

/** Define properties for a file */
export interface IFileInstance extends IThermalInstance, ThermalFileInterface, BaseStructureObject {
    root: HTMLDivElement | null;
    canvasLayer: ThermalCanvasLayer,
    visibleLayer: VisibleLayer,
    cursorLayer: ThermalCursorLayer,
    listenerLayer: ThermalListenerLayer,
    timeline: ITimelineDrive,
    frames: ILrcFrame[],
    horizontalLimit: number,
    id: string,
    verticalLimit: number,
    duration: number,
    isHover: boolean,
    mountedBaseLayers: boolean,
}

