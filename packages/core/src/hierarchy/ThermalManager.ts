"use client";

import Pool from "workerpool/types/Pool";
import { BaseStructureObject } from "../base/BaseStructureObject";
import { AvailableThermalPalettes } from "../file/palettes";
import { FilesService } from "../loading/workers/FilesService";
import { PaletteDrive } from "../properties/drives/PaletteDrive";
import { ThermalRegistry, ThermalRegistryOptions } from "./ThermalRegistry";

export type ThermalManagerOptions = {
    palette?: AvailableThermalPalettes
}

export class ThermalManager extends BaseStructureObject {

    public readonly id: number;

    /** Service for creation of loading and caching the files. */
    public readonly service = new FilesService(this);

    /** Index of existing registries */
    public readonly registries: {
        [index: string]: ThermalRegistry
    } = {};

    /** A palette is common to all registries within the manager */
    public readonly palette: PaletteDrive = new PaletteDrive(this, "jet");

    public constructor(
        public readonly pool: Pool,
        options?: ThermalManagerOptions
    ) {
        super();

        this.id = Math.random();

        if (options) {
            if (options.palette) {
                this.palette.setPalette(options.palette);
            }
        }
    }

    /* registries */

    public forEveryRegistry(fn: ((registry: ThermalRegistry) => void)) {
        Object.values(this.registries).forEach(registry => fn(registry));
    }

    public addOrGetRegistry(
        id: string,
        options?: ThermalRegistryOptions
    ) {
        if (this.registries[id] === undefined) {
            this.registries[id] = new ThermalRegistry(id, this, options);
        }

        return this.registries[id];

    }

    public removeRegistry(
        id: string
    ) {
        if (this.registries[id] !== undefined) {
            const registry = this.registries[id];
            registry.destroySelfAndBelow();
            delete this.registries[id];
        }
    }


}