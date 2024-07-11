"use client";

import { ThermalFileSource } from "../file/ThermalFileSource";
import { ThermalRegistry, ThermalRegistryOptions } from "../registry/ThermalRegistry";
import { PaletteDrive } from "../properties/drives/PaletteDrive";
import { AvailableThermalPalettes } from "../file/palettes";
import { BaseStructureObject } from "../base/BaseStructureObject";
import { FilesService } from "../reload/FilesService";

export type ThermalManagerOptions = {
    palette?: AvailableThermalPalettes
}

export class ThermalManager extends BaseStructureObject {

    public readonly id: number;

    public constructor(
        options?: ThermalManagerOptions
    ) {
        super();

        this.id = Math.random();

        if ( options ) {
            if ( options.palette ) {
                this.palette.setPalette( options.palette );
            }
        }
    }

    /* registries */

    public readonly registries: {
        [index: string]: ThermalRegistry
     } = {};

     public forEveryRegistry( fn: ( ( registry: ThermalRegistry ) => void ) ) {
        Object.values( this.registries ).forEach( registry => fn( registry ) );
     }

    public addOrGetRegistry(
        id: string,
        options?: ThermalRegistryOptions
    ) {
        if ( this.registries[id] === undefined ) {
            this.registries[id] = new ThermalRegistry(id, this, options);
        }

        return this.registries[id];
        
    }

    public removeRegistry(
        id: string
    ) {
        if ( this.registries[id] !== undefined ) {
            const registry = this.registries[id];
            registry.destroySelfAndBelow();
            delete this.registries[id];
        }
    }



    /** The palette is stored absolutely globally */
    /**
     * Palette
     */
    public readonly palette: PaletteDrive = new PaletteDrive(this, "jet");


    public readonly service = new FilesService( this );



    /** Sources cache */

    protected _sourcesByUrl: {
        [index: string]: ThermalFileSource
    } = {}
    public get sourcesByUrl() { return this._sourcesByUrl; }
    public getSourcesArray() {
        return Object.values(this.sourcesByUrl);
    }
    public getRegisteredUrls() {
        return Object.keys(this.sourcesByUrl);
    }
    public registerSource(
        source: ThermalFileSource
    ) {
        if (!this.getRegisteredUrls().includes(source.url)) {

            // Assign the source
            this.sourcesByUrl[source.url] = source;

            return source;

        }

        return this.sourcesByUrl[source.url];
    }
    public isUrlRegistered = (url: string) => Object.keys(this.sourcesByUrl).includes(url);

}