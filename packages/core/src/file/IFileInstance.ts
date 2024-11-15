import { BaseStructureObject } from "../base/BaseStructureObject";
import { IThermalInstance } from "../properties/structure";

/** Define properties for a file */
export interface IFileInstance extends IThermalInstance, BaseStructureObject {
    root: HTMLDivElement | null;
    horizontalLimit: number,
    id: string,
    verticalLimit: number,
    duration: number,
}

