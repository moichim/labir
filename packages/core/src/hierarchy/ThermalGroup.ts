"use client";


import { BaseStructureObject } from "../base/BaseStructureObject";
import { Instance } from "../file/instance";
import { FilterContainer } from "../filters/FilterContainer";
import { Batch } from "../loading/batch/Batch";
import { AnalysisSyncDrive } from "../properties/analysisSync/analysisSync";
import { CursorPositionDrive } from "../properties/drives/CursorPositionDrive";
import { FilesState } from "../properties/lists/filesState";
import { MinmaxGroupProperty } from "../properties/states/MinmaxGroupProperty";
import { IThermalGroup } from "../properties/structure";
import { GroupPlayback } from "../properties/time/group/GroupPlayback";
import { InspectTool } from "../properties/tool/internals/InspectTool";
import { ToolDrive } from "../properties/tool/ToolDrive";
import { ThermalRegistry } from "./ThermalRegistry";

/**
 * Group of thermal images
 */
export class ThermalGroup extends BaseStructureObject implements IThermalGroup {


    public readonly hash = Math.random();

    /** Human readable label = name or id or hasn */
    public get label() {
        return this.name ?? this.id ?? this.hash;
    }

    public get pool() {
        return this.registry.manager.pool;
    }

    public constructor(
        public readonly registry: ThermalRegistry,
        public readonly id: string,
        public readonly name?: string,
        public readonly description?: string
    ) {
        super();
    }


    public readonly minmax: MinmaxGroupProperty = new MinmaxGroupProperty(this, undefined);

    /** Tool drive */
    public readonly tool: ToolDrive = new ToolDrive(this, new InspectTool(this));

    public readonly files: FilesState = new FilesState( this, [] );

    public readonly cursorPosition: CursorPositionDrive = new CursorPositionDrive(this, undefined);

    public readonly analysisSync: AnalysisSyncDrive = new AnalysisSyncDrive(this, true);

    protected _playback?: GroupPlayback;
    public get playback() {
        if ( ! this._playback ) {
            this._playback = new GroupPlayback( this, 0 );
        }
        return this._playback;
    }



    /** Iteration */
    public forEveryInstance = ( fn: ( (instance: Instance) => void ) ) => {
        this.files.value.forEach( instance => fn( instance ) );

    }


    /** Remove all instances, reset the minmax */
    public destroySelfAndBelow() {

        this.removeAllChildren();

        this.minmax.reset();

    }


    public removeAllChildren() {
        this.files.removeAllInstances();
    }

    public reset() {

        this.files.reset();
        this.minmax.reset();
        this.cursorPosition.reset();

    }

    public readonly filters = new FilterContainer( this );

    public getInstances() {
        return this.files.value;
    }

    public startBatch(
        id: string
    ): Batch {
        return this.registry.batch.getBatchById( id );
    }


}