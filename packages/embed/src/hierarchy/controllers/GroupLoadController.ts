import type { PropertyValueMap } from "lit";
import type { IBaseElement } from "../../controllers/IBaseElement";
import type { HostReactiveProperties } from "./AbstractHierarchyController";
import { AbstractHierarchyController } from "./AbstractHierarchyController";
import type { GroupController } from "./GroupController";
import { createContext } from "@lit/context";
import type { ThermalGroup} from "@labirthermal/core";
import { ThermalFileFailure, ThermalFileReader } from "@labirthermal/core";
import type { GroupListingController } from "./GroupListingController";

type IHostProperties = {
    filesString?: string;
};

export interface IElementWithGroupLoadController extends IBaseElement, IHostProperties {
    groupController: GroupController;
    groupListingController: GroupListingController;
    groupLoadController: GroupLoadController;
}

export const groupLoadControllerContext = createContext<GroupLoadController>("group-load-controller-context");

export type GroupLoaderFileRequest = {
    thermal: string,
    visible?: string,
    label?: string
}

export class GroupLoadController extends AbstractHierarchyController<IElementWithGroupLoadController> {
    
    private _UUID: string;

    public get UUID(): string {
        return this._UUID;
    }

    public static readonly HOST_PROPERTIES: HostReactiveProperties<IHostProperties> = {
        filesString: { type: String, reflect: true, attribute: "group-files" }
    }

    public static FILE_RECORD_SEPARATOR = ";";
    public static FILE_SEGMENT_SEPAROATOR = "|";
    public static FILE_COMPONENT_SEPAROATOR = "~";
    public static FILE_THERMAL_KEY = "thermal";
    public static FILE_VISIBLE_KEY = "visible";
    public static FILE_LABEL_KEY = "label";
    public static FILE_NOTE_KEY = "note";

    private get group(): ThermalGroup {
        return this.host.groupController.groupObject;
    }

    public errors: string[] = [];

    constructor(
        host: IElementWithGroupLoadController
    ) {
        super(host);

        this._UUID = host.UUID + "_group-load-controller";

    }


    hostConnected(): void {
        
        if ( this.host.filesString ) {

            const requests = this._parseAttribute(this.host.filesString); 
            this._load( requests );

        }

    }

    hostDisconnected(): void {
        // Do nothing for now
    }

    hostWillUpdateWatcher(value: PropertyValueMap<IElementWithGroupLoadController>): void {
    }

    hostUpdatedWatcher(value: PropertyValueMap<IElementWithGroupLoadController>): void {

    }



    private _parseAttribute(
        value: string
    ): GroupLoaderFileRequest[] {

        return value
            .split(GroupLoadController.FILE_RECORD_SEPARATOR)
            .map( record => {

                let thermal: string | undefined;
                let visible: string | undefined;
                let label: string | undefined;

                this.log("Parsing record:", record);

                record
                    .trim()
                    .split(GroupLoadController.FILE_SEGMENT_SEPAROATOR)
                    .forEach(segment => {

                        let [key, value] = segment.split(GroupLoadController.FILE_COMPONENT_SEPAROATOR);
                        key = key.trim();
                        value = value?.trim();
                        this.log("Parsed key:", key, "Parsed value:", value);

                        this.log("Parsing segment:", segment);

                        switch(key) {
                            case GroupLoadController.FILE_THERMAL_KEY:
                                thermal = value;
                                break;
                            case GroupLoadController.FILE_VISIBLE_KEY:
                                visible = value;
                                break;
                            case GroupLoadController.FILE_LABEL_KEY:
                                label = value;
                                break;
                        }

                    });

                if ( !thermal ) {
                    return undefined;
                }

                return { thermal, visible, label };

            } )
            .filter(item => item !== undefined) as GroupLoaderFileRequest[];

    }

    private async _load(
        requests: GroupLoaderFileRequest[]
    ) {

        this.log("Starting to load group with requests", requests);

        // If no files are requested, clear the group
        if ( requests.length === 0 ) {
            this.group.files.removeAllInstances();
            return;
        }

        const registry = this.group.registry;
        const service = registry.service;
        this.errors = [];
        registry.loading.markAsLoading();

        try {
            const results = await Promise.all(requests.map(async request => ({
                result: await service.loadFile(request.thermal, request.visible),
                label: request.label
            })));

            for (const item of results) {
                if (item.result instanceof ThermalFileFailure) {
                    this.errors.push(`${item.result.thermalUrl}: ${item.result.message}`);
                    this.log("File loading failed", item.result);
                }
            }

            const filteredResults = results.filter(
                (item): item is { result: ThermalFileReader; label: string | undefined } =>
                    item.result instanceof ThermalFileReader
            );

            this.host.groupListingController.backupReaders(filteredResults.map(item => item.result));
            await this.host.groupListingController.restoreTheEntireBackup();

            for (const file of this.group.files.value) {
                const matchingResult = filteredResults.find(item => item.result === file.reader);
                if (matchingResult?.label !== undefined) {
                    file.setLabel(matchingResult.label);
                }
            }

            await registry.postLoadedProcessing();
            registry.range.applyMinmax();
        } catch (error) {
            this.errors.push(error instanceof Error ? error.message : String(error));
            this.log("Group loading failed", error);
        } finally {
            registry.loading.markAsLoaded();
            this.host.requestUpdate();
        }

    }


}