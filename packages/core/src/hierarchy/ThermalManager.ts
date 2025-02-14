"use client";

import * as workerpool from "workerpool";
import Pool from "workerpool/types/Pool";
import { BaseStructureObject } from "../base/BaseStructureObject";
import { Instance } from "../file/instance";
import { AvailableThermalPalettes } from "../file/utils/palettes";
import { FilterContainer } from "../filters/FilterContainer";
import { FilesService } from "../loading/workers/FilesService";
import { GraphSmoothDrive } from "../properties/display/GraphSmoothDrive";
import { PaletteDrive } from "../properties/scale/PaletteDrive";
import { SmoothDrive } from "../properties/display/SmoothDrive";
import { ThermalRegistry, ThermalRegistryOptions } from "./ThermalRegistry";
import { ToolDrive } from "../properties/analysis/tool/ToolDrive";
import { InspectTool } from "../properties/analysis/tool/internals/InspectTool";

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

    public readonly smooth: SmoothDrive = new SmoothDrive(this, false );

    public readonly graphSmooth: GraphSmoothDrive = new GraphSmoothDrive(this, false);

    public readonly tool: ToolDrive = new ToolDrive( this, new InspectTool( this ) );

    

    public readonly pool: Pool;

    public constructor(
        pool?: Pool,
        options?: ThermalManagerOptions
    ) {
        super();

        this.pool = pool 
            ? pool 
            : workerpool.pool();

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

    public readonly filters = new FilterContainer( this );

    public getInstances() {

        let instances: Instance[] = [];

        this.forEveryRegistry( registry => {
            instances = [
                ...instances,
                ...registry.getInstances()
            ];
        } );

        return instances;
    }


    public forEveryInstance( callback: (instance: Instance) => void ): void {
        this.forEveryRegistry( registry => registry.forEveryInstance( callback ) );
    }


}