"use client";


import { BaseStructureObject } from "../base/BaseStructureObject";
import { AbstractFile } from "../file/AbstractFile";
import { CursorPositionDrive } from "../properties/drives/CursorPositionDrive";
import { FilesState } from "../properties/lists/filesState";
import { MinmaxGroupProperty } from "../properties/states/MinmaxGroupProperty";
import { IThermalGroup } from "../properties/structure";
import { ThermalRegistry } from "./ThermalRegistry";

/**
 * Group of thermal images
 */
export class ThermalGroup extends BaseStructureObject implements IThermalGroup {


    public readonly hash = Math.random();

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

    public readonly files: FilesState = new FilesState( this, [] );

    public readonly cursorPosition: CursorPositionDrive = new CursorPositionDrive(this, undefined);

    /** Iteration */
    public forEveryInstance = ( fn: ( (instance: AbstractFile) => void ) ) => {
        this.files.value.forEach( instance => fn( instance ) );

    }


    /**
     * Destruction
     */


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


}