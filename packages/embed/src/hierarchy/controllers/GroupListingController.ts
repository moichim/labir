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

export enum GroupDisplayMode {
    LIST = "list",
    DETAIL = "detail",
    EMPTY = "empty"

}

type IHostProperties = {
    groupDisplayMode: GroupDisplayMode;
    orderby: GroupOrderby;
    ordering: GroupOrdering;
}

export interface IElementWithGroupListingController extends IBaseElement, IHostProperties {
    groupController: GroupController;
    fileController: FileController;
    groupListingController: GroupListingController;
}

export class GroupListingController extends AbstractHierarchyController<IElementWithGroupListingController> {
    
    public get UUID(): string {
        throw new Error("Method not implemented.");
    }
    


    private get group(): ThermalGroup {
        return this.host.groupController.groupObject;
    }

    private backup: Set<ThermalFileReader> = new Set();

    public get hasBackup(): boolean {
        return this.backup.size > 0;
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


    public showDetail(
        instance: Instance
    ): void {

        const originalReader = instance.reader;

        this.backupReaders(this.group.files.value);

        this.group.files.removeAllInstances();

        originalReader.createInstance(this.group).then( created => {
            this.host.fileController.receiveInstance(created);
            this.host.groupDisplayMode = GroupDisplayMode.DETAIL;
            this.host.requestUpdate();
        } );


    }

    public showList(): void {

        this.host.fileController.removeInstance();

        this.group.files.removeAllInstances();

        const requests = Array.from(this.backup).map(reader => reader.createInstance(this.group));

        Promise.all(requests).then(() => {
            this.host.groupDisplayMode = GroupDisplayMode.LIST;
            this.host.requestUpdate();
        });
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

    public renderDetail(
        fileRendererFn: (file: Instance) => unknown,
        emptyRendererFn?: () => unknown,
    ): unknown {

        if ( this.host.fileController.fileObject ) {
            return fileRendererFn(this.host.fileController.fileObject);
        }
        return emptyRendererFn?.();

    }
    



}