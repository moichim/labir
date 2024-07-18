import { AbstractFile } from "../../file/AbstractFile";
import { ThermalFileSource } from "../../file/ThermalFileSource";
import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";


export interface IWithInstances extends IBaseProperty {
    instances: InstancesState
}

export type InstanceFetchCallback = (
    instance?: AbstractFile,
    errors?: string
) => void;

type InstanceRemoveCallback = () => void;

type InstanceRemoveRequest = {
    url: string,
    callbacks: InstanceRemoveCallback[]
}

export class InstancesState extends AbstractProperty<AbstractFile[], ThermalGroup> {

    protected _requestedRemovals: Map<string,InstanceRemoveRequest> = new Map;

    public enqueueAdd(thermalUrl: string, visibleUrl?: string, callback?: InstanceFetchCallback) {
        this.parent.registry.fetcher.request(thermalUrl, visibleUrl, (
            source, error
        ) => {
            if (source instanceof ThermalFileSource) {
                const instance = this.instantiateSource(source as ThermalFileSource)
                if (callback) {
                    callback(instance);
                }
            } else if (callback) {
                callback(undefined, error ?? "Něco se pokazilo v instanci")
            }
        } )
    }

    public enqueueRemove(thermalUrl: string, callback?:InstanceRemoveCallback) {

        if ( this._requestedRemovals.has( thermalUrl ) ) {
            if ( callback )
            this._requestedRemovals.get( thermalUrl )!.callbacks.push( callback )
        } else {
            this._requestedRemovals.set( thermalUrl, {
                url: thermalUrl,
                callbacks: callback ? [callback] : []
            } );
        }
    }

    public async cleanup() {

        // Add all additions

        // Remove all removals

        const flatRemovalUrls = Object.values( this._requestedRemovals ).map( item => item.url as string );

        this.value = this.value.filter( instance => {
            const shouldRemove = flatRemovalUrls.includes( instance.url );

            if ( shouldRemove ) {
                this._requestedRemovals.get( instance.url )?.callbacks.forEach( callback => callback() );
                return true;
            }
            return false;
        } );

        this._requestedRemovals.clear();

        this.parent.registry.postLoadedProcessing();
        
    }



    protected _map: Map<string, AbstractFile> = new Map<string, AbstractFile>();

    public get map() { return this._map; }

    protected validate(value: AbstractFile[]): AbstractFile[] {
        return value;
    }

    /**
     * Whenever the instances change, recreate the index
     */
    protected afterSetEffect(value: AbstractFile[]) {

        // Clear the index
        this.map.clear();

        // Create the new values in the index
        value.forEach(instance => this._map.set(instance.url, instance));
    }


    /** 
     * Creation of of single instance 
     * @deprecated Instances should not be created one by one, since every single action triggers the listeners
     */
    public instantiateSource(
        source: ThermalFileSource
    ) {

        if (!this._map.has(source.url)) {
            const instance = source.createInstance(this.parent);
            this.value = [...this.value, instance];
            return instance;
        } else {
            return this._map.get(source.url)!;
        }
    }

    /**
     * Creation of instances at once
     * - triggers listeners only once
     */
    public instantiateSources(
        sources: ThermalFileSource[]
    ) {

        const newValue: AbstractFile[] = [];

        sources.forEach(source => {

            if (!this._map.has(source.url)) {

                newValue.push(source.createInstance(this.parent));

            }

        });

        this.value = newValue;

    }


    /**
     * Removal
     */
    public removeAllInstances() {
        this.forEveryInstance(instance => instance.destroySelfAndBelow());
        this.value = [];
    }


    /** 
     * Iteration through all instances
     */
    public forEveryInstance(fn: ((instance: AbstractFile) => void
    )) {
        this.value.forEach(instance => fn(instance));
    }




}