import { html, PropertyValueMap } from "lit";
import { IBaseElement } from "../../controllers/IBaseElement";
import { AbstractHierarchyController, HostReactiveProperties } from "./AbstractHierarchyController";
import { GroupController } from "./GroupController";
import { createContext, ContextProvider } from "@lit/context";
import { Instance } from "@labirthermal/core/src/file/instance";
import { Batch, ThermalGroup } from "@labirthermal/core";
import { ThermalFileFailure } from "@labirthermal/core";

type IHostProperties = {
    filesString?: string;
};

export interface IElementWithGroupLoadController extends IBaseElement, IHostProperties {
    groupController: GroupController;
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

    public static HOST_PROPERTIES: HostReactiveProperties<IHostProperties> = {
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

    private get _files(): Instance[] {
        return this.host.groupController.groupObject.files.value;
    }


    private _groupLoadControllerContextProvider: ContextProvider<typeof groupLoadControllerContext, IElementWithGroupLoadController>;

    constructor(
        host: IElementWithGroupLoadController
    ) {
        super(host);

        this._UUID = host.UUID + "_group-load-controller";

        this._groupLoadControllerContextProvider = new ContextProvider(host, {
            context: groupLoadControllerContext, 
            initialValue: this 
        });
    }


    hostConnected(): void {
        
        this.group.files.addListener(
            this.UUID,
            value => {
                this.host.filesString = this._filesToAttribute(value);
            }
        );

    }

    hostDisconnected(): void {
        throw new Error("Method not implemented.");
    }

    hostUpdatedWatcher(value: PropertyValueMap<IElementWithGroupLoadController>): void {
        
        if ( value.has( "filesString" ) ) {

            const filesString = this.host.filesString;
            const requests = this._parseAttribute( filesString ?? "" );

            // Zkontroluj, zda se změnila některá URL souboru - zda se liší od aktuálních souborů z hlediska thermal, visible či label
            let _hasChanged: boolean = false;

            let _missingFiles: GroupLoaderFileRequest[] = [...requests];
            let _existingFiles: Instance[] = [...this._files];

            for ( const file of _existingFiles ) {

                let found

            }

            if ( requests.length > 0 ) {
                this._load( requests );
            }

        }


    }

    public _filesToAttribute(
        files: Instance[]
    ): string | undefined {

        if ( !files || files.length === 0 ) {
            return undefined;
        }

        return files.map(file => {
            const segments = [];
            if ( file.thermalUrl ) {
                segments.push(`${GroupLoadController.FILE_THERMAL_KEY}${GroupLoadController.FILE_COMPONENT_SEPAROATOR}${file.thermalUrl}`);
            }
            if ( file.visibleUrl ) {
                segments.push(`${GroupLoadController.FILE_VISIBLE_KEY}${GroupLoadController.FILE_COMPONENT_SEPAROATOR}${file.visibleUrl}`);
            }
            return segments.join(GroupLoadController.FILE_SEGMENT_SEPAROATOR);
        }).join(GroupLoadController.FILE_RECORD_SEPARATOR);

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

                record
                    .trim()
                    .split(GroupLoadController.FILE_SEGMENT_SEPAROATOR)
                    .forEach(segment => {

                        let [key, value] = segment.split(GroupLoadController.FILE_COMPONENT_SEPAROATOR);
                        key = key.trim();
                        value = value?.trim();
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

    private _load(
        requests: GroupLoaderFileRequest[]
    ) {

        // If no files are requested, clear the group
        if ( requests.length === 0 ) {
            this.group.files.removeAllInstances();
            return;
        }

        let batch: Batch | undefined;

        const onResult = ( label: string | undefined ) => {
            return async ( result: Instance | ThermalFileFailure ) => {
                if ( result instanceof Instance && label ) {
                    result.setLabel(label);
                }
            }
        }

        for ( const request of requests ) {

            if ( !batch ) {
                batch = this.group.registry.batch.request(
                    request.thermal,
                    request.visible,
                    this.group,
                    onResult(request.label)
                )
            } else {
                batch.request(
                    request.thermal,
                    request.visible,
                    this.group,
                    onResult(request.label)
                )
            }
        }

        if ( batch ) {
            batch.close();
            batch.onResolve.set(
                this.UUID,
                () => {
                    this.host.requestUpdate();
                }
            );
        }

    }

    public renderFiles(
        itemInner: unknown
    ): unknown {
        return this.group.files.value.map( file => {

            return html`<file-provider .file=${file}>
                ${itemInner}
            </file-provider>`;

        } );
    }

    public mapFiles(
        callback: (instance: Instance) => unknown
    ): unknown[] {
        return this.group.files.value.map( file => callback(file) );
    }


}