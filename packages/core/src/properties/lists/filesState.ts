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

    /** Array of all files sorted by timestamp from the earliest to the latest. */
    public get sortedFiles() {
        return this.value.sort((a, b) => { return a.timestamp - b.timestamp });
    }

    /**
     * Whenever the instances change, recreate the index
     */
    protected afterSetEffect(value: Instance[]) {

        // Clear the index
        this.map.clear();

        // Create the new values in the index
        value.forEach(instance => this._map.set(instance.thermalUrl, instance));
    }

    public addFile(file: Instance) {

        if (!this._map.has(file.thermalUrl)) {
            this.value = [...this.value, file];
            return file;
        } else {
            return this._map.get(file.thermalUrl)!;
        }
    }

    public removeFile(file: string | Instance) {
        const entry = file instanceof Instance
            ? file
            : this.map.get(file);
        if (entry) {
            entry.unmountFromDom();
            this.value = this.value.filter(e => e.thermalUrl !== entry.thermalUrl);
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

    public downloadAllFiles() {
        this.forEveryInstance( instance => {

            const link = document.createElement( "a" );
            link.download = instance.fileName;
            link.href = instance.thermalUrl;
            link.click();

        } );
    }




}