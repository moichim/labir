import { GroupController } from "./GroupController";
import { IBaseElement } from "../../controllers/IBaseElement";
import { AbstractHierarchyController } from "./AbstractHierarchyController";
import { Instance, ThermalFileReader, ThermalGroup } from "@labirthermal/core";
import { FileController } from "./FileController";
import { PropertyValueMap } from "lit";

export enum GroupOrderby {
    DATE = "date",
    LABEL = "label",
    MANUAL = "manual"
}

export enum GroupOrdering {
    ASC = "asc",
    DESC = "desc"
}

type IHostProperties = {
    orderby: GroupOrderby;
    ordering: GroupOrdering;
}

export interface IElementWithGroupListingController extends IBaseElement, IHostProperties {
    groupController: GroupController;
    fileController: FileController;
    groupListingController: GroupListingController;
}

export class GroupListingController extends AbstractHierarchyController<IElementWithGroupListingController> {

    private _UUID: string;
    
    public get UUID(): string {
        return this._UUID;
    }

    private get group(): ThermalGroup {
        return this.host.groupController.groupObject;
    }

    private backup: Set<ThermalFileReader> = new Set();

    public get hasBackup(): boolean {
        return this.backup.size > 0;
    }

    public constructor(host: IElementWithGroupListingController) {
        super(host);
        this._UUID = host.UUID + "_group-display-controller";
    }

    public clearBackup(): void {
        this.backup.clear();
    }

    public backupReaders(
        instances: Instance[]
    ): void {
        this.backup.clear();
        instances.forEach(instance => this.backup.add(instance.reader));
    }

    public async restoreTheEntireBackup(): Promise<void> {
        this.host.fileController.removeInstance();

        const requests = Array.from(this.backup).map(reader => reader.createInstance(this.group));

        await Promise.all(requests);
    }

    public async showOneAndBackup(
        instance: Instance
    ): Promise<void> {
        const reader = instance.reader;
        this.backup.clear();
        this.backupReaders( this.group.files.value );
        this.host.fileController.removeInstance();
        this.group.files.removeAllInstances();
        await reader.createInstance(this.group);
    }


    hostConnected(): void {
        // throw new Error("Method not implemented.");
    }
    
    hostDisconnected(): void {
        // throw new Error("Method not implemented.");
    }

    hostUpdatedWatcher(value: PropertyValueMap<IElementWithGroupListingController>): void {
        // throw new Error("Method not implemented.");
    }

    private _orderFiles(): Instance[] {
        const files = Array.from(this.group.files.value);
        
        switch (this.host.orderby) {
            case GroupOrderby.LABEL:
                if (this.host.ordering === GroupOrdering.ASC) {
                    files.sort((a, b) => ( a.label ?? "" ).localeCompare(b.label ?? ""));
                } else {
                    files.sort((a, b) => (b.label ?? "").localeCompare(a.label ?? ""));
                }
                break;
            case GroupOrderby.DATE:
                if (this.host.ordering === GroupOrdering.ASC) {
                    files.sort((a, b) => a.timestamp - b.timestamp);
                } else {
                    files.sort((a, b) => b.timestamp - a.timestamp);
                }
                break;
        }

        return files;

    }

    public renderList(
        fileRendererFn: (file: Instance) => unknown,
        emptyRendererFn?: () => unknown,
    ): unknown {

        if ( this.group.files.value.length === 0 ) {
            return emptyRendererFn?.();
        }

        return this._orderFiles().map(fileRendererFn);

    }
    



}