"use client";

import { BaseStructureObject } from "../base/BaseStructureObject";
import { Instance } from "../file/instance";
import { FilterContainer } from "../filters/FilterContainer";
import { ThermalFileRequest } from "../loading/ThermalRequest";
import { AbstractFileResult } from "../loading/workers/AbstractFileResult";
import { ThermalFileReader } from "../loading/workers/ThermalFileReader";
import { ThermalFileFailure } from "../loading/workers/ThermalFileFailure";
import { OpacityDrive } from "../properties/drives/OpacityDrive";
import { RangeDriver } from "../properties/drives/RangeDriver";
import { GroupsState } from "../properties/lists/GroupsState";
import { HistogramState } from "../properties/states/HistogramState";
import { LoadingState } from "../properties/states/LoadingState";
import { MinmaxRegistryProperty } from "../properties/states/MinmaxRegistryState";
import { IThermalRegistry } from "../properties/structure";
import { ThermalGroup } from "./ThermalGroup";
import { ThermalManager } from "./ThermalManager";

export type ThermalRegistryOptions = {
    histogramResolution?: number,
}

export type BatchLoadingCallback = ( 
    result: ThermalFileFailure|Instance 
) => Promise< void >;

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
        if (options)
            if (options.histogramResolution !== undefined)
                if (options.histogramResolution > 0)
                    this.histogram.setResolution(options.histogramResolution)
    }


    /** Service */
    public get service() { return this.manager.service; }

    public get pool() {return this.manager.pool; }



    /** Groups are stored in an observable property */
    public readonly groups: GroupsState = new GroupsState(this, []);



    /** Iterator methods */

    public forEveryGroup(fn: ((group: ThermalGroup) => void)) {
        this.groups.value.forEach(fn);
    }

    public forEveryInstance(fn: (instance: Instance) => void) {
        this.forEveryGroup(group => group.files.forEveryInstance(fn));
    }

    /** Full load of the registry with multiple files @deprecated */
    public async loadFullMultipleFiles(
        files: {
            [index: string]: ThermalFileRequest[]
        }
    ) {

        this.reset();

        this.loading.markAsLoading();

        // Load services for every group
        const servicesByGroup = await Promise
            .all( Object.entries( files ).map( async ([groupId, fs]) => {

            const group = this.groups.addOrGetGroup( groupId );

            const groupFiles = await Promise.all(fs.map(( file ) => {
                return this.service.loadFile(file.thermalUrl, file.visibleUrl)
            }));

            return {
                group,
                groupFiles
            }

        } ) );

        // Create instances from loaded services
        await Promise.all( servicesByGroup.map( async ({group, groupFiles}) => {

            const instances = await Promise.all( groupFiles.map( async ( service ) => {

                if ( service instanceof ThermalFileReader ) {
                    return await service.createInstance( group )
                } else {
                    return false;
                }

            } ) );

            return instances;

        } ) );


        this.postLoadedProcessing();

    }


    /** Load the registry with only one file. @deprecated */
    public async loadFullOneFile(file: ThermalFileRequest, groupId: string) {

        this.reset();

        const group = this.groups.addOrGetGroup(groupId);


        const result = await this.service.loadFile( file.thermalUrl, file.visibleUrl );

        if ( result instanceof ThermalFileReader ) {
            await result.createInstance( group );
        }

        this.loading.markAsLoading();

        this.postLoadedProcessing();

    }

    protected triggeredCallback?: ReturnType<typeof setTimeout> = undefined;

    public registeresRequests: Map<ThermalFileRequest, BatchLoadingCallback> = new Map;

    protected set: Array<{
        thermalUrl: string,
        visibleUrl?: string,
        group: ThermalGroup,
        callback: BatchLoadingCallback
    }> = new Array;

    public registerRequest(
        thermalUrl: string,
        visibleUrl: undefined|string = undefined,
        group: ThermalGroup,
        callback: BatchLoadingCallback
    ) {

        this.loading.markAsLoading();


        this.set.push( {
            thermalUrl, visibleUrl, group, callback
        } );


        // Clear any callback if necessary
        if ( this.triggeredCallback !== undefined ) {
            clearTimeout( this.triggeredCallback );
        }

        // Create a callback
        this.triggeredCallback = setTimeout( async () => {

            console.log( "triggering", this.set );

            this.loading.markAsLoading();


            // Request the files at first
            const firstResults = await Promise.all( Array.from( this.set ).map( async item => {
                return {
                    result: await this.service.loadFile( item.thermalUrl, item.visibleUrl ),
                    callback,
                    group
                };
            } ) );

            // Create the instances eventually
            const secondResults = await Promise.all( firstResults.map( async result => {

                let res: ThermalFileFailure|Instance = result.result as ThermalFileFailure;

                if ( result.result instanceof ThermalFileReader ) {
                    res = await result.result.createInstance( result.group );
                }

                return {
                    result: res,
                    callback
                }

            } ) );

            // Call internal sanitisation
            this.postLoadedProcessing();

            // Finally, run all callbacks
            const thirdResults = await Promise.all( secondResults.map( async result => {
                await result.callback( result.result );
                console.log( result, result.callback.arguments );
                return result.result;
            } ) );

            console.log( thirdResults );

            this.set = [];

            this.loading.markAsLoaded();



            // const iot = Array.from( this.registeresRequests.entries() );


            /*
            const results = await Promise.all( iot.map( async item => {

                const [ request, callback ] = item;

                const response = await this.service.loadFile( request.thermalUrl, request.visibleUrl );

                if ( response instanceof ThermalFileReader ) {
                    const instance = response.createInstance( group );
                }

                return {
                    response, callback
                }

            } ) );

            */



            // const urls = Array.from( this.registeresRequests.keys() );






            /*
            const requestMap = new Map< BatchLoadingCallback, Promise<AbstractFileResult> >();

            const requests: Promise<{
                result: Promise<AbstractFileResult>,
                callback: BatchLoadingCallback
            }>[] = [];
            */

            /*

            const r = urls.map( async ( request ) => {
                
                const callback = this.registeresRequests.get( request )!;

                const result = this.service.loadFile( request.thermalUrl, request.visibleUrl );

                console.log( result );

                return {
                    promise: result,
                    callback
                }

            } );

            const all = await Promise.all( r )
            .then( x => {
                return x;
            } );

            this.postLoadedProcessing();

            all.forEach( res => {
                console.log( res.promise );
                res.callback( await res.promise );
            } );

            */

            // Create the promises

            /*

            const promises = urls.map( async ( request ) => {

                const callback = this.registeresRequests.get( request )!;

                requestMap.set( callback, this.service.loadFile( request.thermalUrl, request.visibleUrl ) );
                

                const res = this.service
                    .loadFile( request.thermalUrl, request.visibleUrl )
                    .then( async (result) => {

                        if ( result instanceof ThermalFileReader ) {
                            const info = await result.baseInfo();
                            console.log( info );
                        }

                        if (callback) 
                            callback( result );
                        return result;
                    });

                return res;

            } );

            const requestArray = requestMap


            // Wait for all promises to run
            const totalResults = await Promise.all( promises );

            */

            // this.registeresRequests.clear();

            // this.loading.markAsLoaded();

            // this.postLoadedProcessing();

            console.log( "načítání skončilo" );

        }, 0 );

        

    }



    /** 
     * Actions to take after the registry is loaded 
     * - recalculate the minmax of groups
     * - recalculate minmax of registry
     * - impose new minmax as new range
     * - recalculate the histogram
    */
    public async postLoadedProcessing() {


        // Recalculate individual minmaxes
        this.forEveryGroup(group => group.minmax.recalculateFromInstances());

        // Recalculate the minmax
        this.minmax.recalculateFromGroups();

        // If there is minmax, impose it down as range
        if (this.minmax.value)

            // Impose only when the range is not set already
            if ( this.range.value === undefined ) {
                this.range.imposeRange({ from: this.minmax.value.min, to: this.minmax.value.max });
            } 
            // If the range is set already, clamp it to the new minmax
            else {

                const newFrom = Math.max( this.range.value.from, this.minmax.value.min );
                const newTo = Math.min( this.range.value.to, this.minmax.value.max );


                if ( newFrom !== this.range.value.from || newTo !== this.range.value.to ) {
                    this.range.imposeRange({
                        from: Math.max( this.range.value.from, this.minmax.value.min ),
                        to: Math.min( this.range.value.to, this.minmax.value.max )
                    });
                }
            }

        // Recalculate the histogram
        this.histogram.recalculateHistogramBufferInWorker();
        // this.histogram.recalculateWithCurrentSetting();

        this.loading.markAsLoaded();

    }




    public reset() {

        this.forEveryGroup(group => group.reset());

        // if (this.loader.loading === false) {
            this.opacity.reset();
            this.minmax.reset();
        // }

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


    public readonly filters = new FilterContainer( this );

    public getInstances() {
        let instances: Instance[] = [];

        this.groups.value.forEach( group => {
            instances = [ 
                ...instances, 
                ...group.getInstances() 
            ];
        } );

        return instances;
    }





}

export type ThermalStatistics = {
    from: number,
    to: number,
    percentage: number,
    count: number,
    height: number
}