import { Instance } from "../../file/instance";
import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";


export interface IWithFiles extends IBaseProperty {
    files: FilesState
}

export type InstanceFetchCallback = (
    instance?: Instance,
    errors?: string
) => void;

export class FilesState extends AbstractProperty<Instance[], ThermalGroup> {

    protected _map: Map<string, Instance> = new Map<string, Instance>();

    public get map() { return this._map; }

    protected validate(value: Instance[]): Instance[] {
        return value;
    }

    /**
     * Whenever the instances change, recreate the index
     */
    protected afterSetEffect(value: Instance[]) {

        // Clear the index
        this.map.clear();

        // Create the new values in the index
        value.forEach(instance => this._map.set(instance.url, instance));
    }

    public addFile( file: Instance ) {

        if (!this._map.has(file.url)) {
            this.value = [...this.value, file];
            return file;
        } else {
            return this._map.get(file.url)!;
        }
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
    public forEveryInstance(fn: ((instance: Instance) => void
    )) {
        this.value.forEach(instance => fn(instance));
    }




}