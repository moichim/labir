import { AbstractFile } from "../../file/IFileInstance";
import { ThermalGroup } from "../../group/ThermalGroup";
import { Instance } from "../../reload/instance";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";


export interface IWithInstances extends IBaseProperty {
    instances: FilesState
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

export class FilesState extends AbstractProperty<Instance[], ThermalGroup> {

    protected _requestedRemovals: Map<string,InstanceRemoveRequest> = new Map;

    protected _map: Map<string, AbstractFile> = new Map<string, Instance>();

    public get map() { return this._map; }

    protected validate(value: Instance[]): Instance[] {
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
    public forEveryInstance(fn: ((instance: AbstractFile) => void
    )) {
        this.value.forEach(instance => fn(instance));
    }




}