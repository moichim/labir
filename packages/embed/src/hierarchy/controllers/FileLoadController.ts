import { PropertyValueMap } from "lit";
import { IBaseElement } from "../../controllers/IBaseElement";
import { AbstractHierarchyController, HostReactiveProperties } from "./AbstractHierarchyController";
import { FileController } from "./FileController";
import { Instance, ThermalFileFailure, ThermalGroup, ThermalRegistry } from "@labirthermal/core";

type IHostProperties = {

    thermal: string | undefined,
    visible: string | undefined

}

export interface IElementWithFileLoadController extends IBaseElement, IHostProperties {
    fileController: FileController,
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


    hostUpdatedWatcher(value: PropertyValueMap<IElementWithFileLoadController>): void {
        
        if ( value.has("thermal") && this.host.thermal ) {
            this._load(this.host.thermal, this.host.visible);
        }


    }

    hostConnected(): void {
        
        // Perform the initial load if a LRC URL is provided
        if ( this.host.thermal ) {
            // this._load(this.host.thermal, this.host.visible);
        }

    }
    hostDisconnected(): void {
        // Do nothing for now
    }

    private async _load(
        lrc: string,
        visible: string | undefined
    ) {

        // If there is a file already, remove it from the group
        if (  this.host.fileController.fileObject ) {
            this.group.files.removeFile(this.host.fileController.fileObject);
        }

        this.host.fileController.startLoading();

        const result = this.registry.batch.request(
            lrc,
            visible,
            this.group,
            async (result) => {
                if ( result instanceof Instance ) {
                    this.host.fileController.receiveInstance(result);
                } else if (result instanceof ThermalFileFailure) {
                    this.host.fileController.receiveFailure(result);
                }
            }
        );

        return result;

    }



    
}