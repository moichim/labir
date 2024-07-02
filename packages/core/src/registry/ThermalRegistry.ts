"use client";

import { ThermalFileInstance } from "../file/ThermalFileInstance";
import { ThermalFileSource } from "../file/ThermalFileSource";
import { ThermalGroup } from "../group/ThermalGroup";
import { ThermalManager } from "../manager/ThermalManager";
import { ThermalLoader } from "../parsers/thermalLoader";
import { OpacityDrive } from "../properties/drives/OpacityDrive";
import { RangeDriver } from "../properties/drives/RangeDriver";
import { GroupsState } from "../properties/lists/GroupsState";
import { HistogramState } from "../properties/states/HistogramState";
import { LoadingState } from "../properties/states/LoadingState";
import { MinmaxRegistryProperty } from "../properties/states/MinmaxRegistryState";
import { IThermalRegistry } from "../properties/structure";
import { BaseStructureObject } from "../base/BaseStructureObject";
import { ThermalFetcher } from "./utilities/ThermalFetcher";
import { ThermalRegistryLoader } from "./utilities/ThermalRegistryLoader";
import { ThermalFileRequest } from "./utilities/ThermalRequest";

export type ThermalRegistryOptions = {
    histogramResolution?: number,
}

/**
 * The global thermal registry
 * @todo implementing EventTarget
 */
export class ThermalRegistry extends BaseStructureObject implements IThermalRegistry {

    public readonly hash = Math.random();

    public constructor(
        public readonly id: string,
        public readonly manager: ThermalManager,
        options?: ThermalRegistryOptions
    ) {
        super();

        // Set thermal palette
        this.palette = this.manager.palette;

        // Set histogram resolution
        if ( options )
        if ( options.histogramResolution !== undefined ) 
            if ( options.histogramResolution > 0 )
                this.histogram.setResolution( options.histogramResolution )
    }

    /** Takes care of the entire loading */
    protected readonly loader: ThermalRegistryLoader = new ThermalRegistryLoader(this);



    /** Groups are stored in an observable property */
    public readonly groups: GroupsState = new GroupsState(this, []);



    /** Iterator methods */

    public forEveryGroup(fn: ((group: ThermalGroup) => void)) {
        this.groups.value.forEach(fn);
    }

    public forEveryInstance(fn: (instance: ThermalFileInstance) => void) {
        this.forEveryGroup(group => group.instances.forEveryInstance(fn));
    }

    public async loadFiles(
        files: {
            [index:string]: ThermalFileRequest[]
        }
    ) {

        this.reset();

        Object.entries( files ).forEach( ([ groupId, files ]) => {

            const group = this.groups.addOrGetGroup( groupId );

            files.forEach( file => {
                this.loader.requestFile( group, file.thermalUrl, file.visibleUrl );
            } );

        } );

        this.loading.markAsLoading();

        /** @todo there had to be a timeout for some reason... */
        // setTimeout( async () => {

            await this.loader.resolveQuery();

            this.postLoadedProcessing();

        // }, 0 );

    }


    /** Load the registry with only one file. */
    public async loadOneFile(file: ThermalFileRequest, groupId: string) {

        this.reset();

        const group = this.groups.addOrGetGroup(groupId);

        this.loader.requestFile(group, file.thermalUrl, file.visibleUrl);

        this.loading.markAsLoading();

        /** @todo there had to be a timeout for some reason... */
        // setTimeout(async () => {

            // Resolve the entire query
            await this.loader.resolveQuery();

            this.postLoadedProcessing();

        // }, 0);

    }


    /** Completely flush the entire registry and process evyrything from the files that are being dropped here. */
    public async processDroppedFiles(
        files: File[],
        groupId: string
    ) {

        this.reset();

        this.loading.markAsLoading();

        // Remove all groups
        this.removeAllChildren();

        // Process all incoming files at once and filter the failures
        const parsedFiles = await Promise.all(
            files.map( file => ThermalLoader.fromFile( file ) )
        ).then( results => {
            return results.filter( file => {
                return file !== null;
            } ) as ThermalFileSource[]
        } );

        // Register the sources
        parsedFiles.forEach( source => this.manager.registerSource( source ) );

        // Create the group for the request
        const group = this.groups.addOrGetGroup( groupId );

        // Instantiate everything
        group.instances.instantiateSources( parsedFiles );

        // Cecalculate everything
        this.postLoadedProcessing();

    }

    public readonly fetcher = new ThermalFetcher( this );


    /** Register a single file request */
    enqueueFile( groupId: string, thermalUrl: string, visibleUrl?: string ) {
        const group = this.groups.addOrGetGroup( groupId );
        this.loader.requestFile( group, thermalUrl, visibleUrl );
    }

    // Load all the enqueued requests
    async loadQuery() {

        this.reset();
        this.loading.markAsLoading();

        await this.loader.resolveQuery();

        this.postLoadedProcessing();


    }




    /** 
     * Actions to take after the registry is loaded 
     * - recalculate the minmax of groups
     * - recalculate minmax of registry
     * - impose new minmax as new range
     * - recalculate the histogram
    */
    public postLoadedProcessing() {

        console.log( "postprocessing" );


        // Recalculate individual minmaxes
        this.forEveryGroup(group => group.minmax.recalculateFromInstances());

        // Recalculate the minmax
        this.minmax.recalculateFromGroups();

        // If there is minmax, impose it down
        if (this.minmax.value)
            this.range.imposeRange({ from: this.minmax.value.min, to: this.minmax.value.max });

        // Recalculate the histogram
        this.histogram.refreshBufferFromCurrentPixels();
        this.histogram.recalculateWithCurrentSetting();

        this.loading.markAsLoaded();

    }




    public reset() {

        this.forEveryGroup(group => group.reset());

        if (this.loader.loading === false) {
            // this.removeAllChildren();
            this.opacity.reset();
            this.minmax.reset();
        }

    }

    public removeAllChildren() {
        this.groups.removeAllGroups();
    };

    public destroySelfAndBelow() {
        this.reset();
    }

    public destroySelfInTheManager() {
        this.manager.removeRegistry(this.id);
    }








    /**
     * Observable properties and drives
     */


    /** 
     * Opacity property 
     */
    public readonly opacity: OpacityDrive = new OpacityDrive(this, 1);

    /** 
     * Minmax property 
     */
    public readonly minmax: MinmaxRegistryProperty = new MinmaxRegistryProperty(this, undefined);

    /**
     * Loading
     */
    public readonly loading: LoadingState = new LoadingState(this, false);

    /**
     * Range
     */
    public readonly range: RangeDriver = new RangeDriver(this, undefined);

    /**
     * Histogram
     */
    public readonly histogram: HistogramState = new HistogramState(this, []);

    /**
     * Palette
     */
    public readonly palette;





}

export type ThermalStatistics = {
    from: number,
    to: number,
    percentage: number,
    count: number,
    height: number
}