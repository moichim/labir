import type { ThermalGroup, ThermalRegistry } from "@labirthermal/core";
import { Instance, ThermalFileFailure } from "@labirthermal/core";
import type { PropertyValueMap } from "lit";
import type { IBaseElement } from "../AbstractThermalElement";
import type { HostReactiveProperties } from "./AbstractHierarchyController";
import { AbstractHierarchyController } from "./AbstractHierarchyController";
import type { FileController } from "./FileController";

type IHostProperties = {

    thermal: string | undefined,
    visible: string | undefined

}

export interface IElementWithFileLoadController extends IBaseElement, IHostProperties {
    fileController: FileController,
    fileLoadController: FileLoadController
}

export class FileLoadController extends AbstractHierarchyController<IElementWithFileLoadController> {

    private _UUID: string;

    public get UUID(): string {
        return this._UUID;
    }

    private get group(): ThermalGroup {
        return this.host.fileController.host.groupController.groupObject;
    }

    private get registry(): ThermalRegistry {
        return this.group.registry;
    }


    public static readonly HOST_PROPERTIES: HostReactiveProperties<IHostProperties> = {
        thermal: { type: String, reflect: true, attribute: "thermal" },
        visible: { type: String, reflect: true, attribute: "visible" }
    }

    constructor(
        host: IElementWithFileLoadController
    ) {
        super(host);
        this._UUID = host.UUID;
    }

    hostWillUpdateWatcher(value: PropertyValueMap<IElementWithFileLoadController>): void {
        if (value.has("thermal") && this.host.thermal) {
            this._load(this.host.thermal, this.host.visible);
        }
    }


    hostUpdatedWatcher(): void {
        // Do nothing for now
    }
    

    hostConnected(): void {
        // Do nothing for now
    }


    hostDisconnected(): void {
        // Do nothing for now
    }

    private async _load(
        lrc: string,
        visible: string | undefined
    ) {

        // If there is a file already, remove it from the group
        if (this.host.fileController.fileObject) {
            this.group.files.removeFile(this.host.fileController.fileObject);
        }

        this.host.fileController.startLoading();

        const result = this.registry.batch.request(
            lrc,
            visible,
            this.group,
            async (result) => {
                if (result instanceof Instance) {
                    this.host.fileController.receiveInstance(result);
                } else if (result instanceof ThermalFileFailure) {
                    this.host.fileController.receiveFailure(result);
                }
            }
        );

        return result;

    }




}