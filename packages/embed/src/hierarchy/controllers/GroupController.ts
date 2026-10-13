import { createContext } from "@lit/context";
import type { IBaseElement } from "../AbstractThermalElement";
import type { HostReactiveProperties} from "./AbstractHierarchyController";
import { AbstractHierarchyController, INTERNAL_STATE_DECLARATION } from "./AbstractHierarchyController";
import type { ThermalGroup } from "@labirthermal/core";
import type { ManagerController } from "./ManagerController";
import type { RegistryController } from "./RegistryController";
import { ContextProvider } from "@lit/context";
import type { PropertyValueMap } from "lit";
import { booleanConverter } from "../../utils/converters/booleanConverter";

type IHostProperties = {

    managerController: ManagerController;

    registryController: RegistryController;

    groupSlug: string;

    groupObject: ThermalGroup;

    groupController: GroupController;

    autoclearGroup: boolean;

}

export interface IElementWithGroupController extends IHostProperties, IBaseElement {}

export const groupControllerContext = createContext<GroupController>("group-controller-context");

export const groupObjectContext = createContext<ThermalGroup>("group-object-context");

export class GroupController extends AbstractHierarchyController<IElementWithGroupController> {
    

    private _UUID: string;

    public get UUID(): string {
        return this._UUID;
    }

    public static readonly HOST_PROPERTIES: HostReactiveProperties<IHostProperties> = {
        managerController: INTERNAL_STATE_DECLARATION,
        registryController: INTERNAL_STATE_DECLARATION,
        groupSlug: { type: String, reflect: true, attribute: "group-slug" },
        groupObject: INTERNAL_STATE_DECLARATION,
        autoclearGroup: { type: Boolean, reflect: true, attribute: "autoclear-group", converter: booleanConverter(true) },
        groupController: INTERNAL_STATE_DECLARATION
    }

    public get groupObject(): ThermalGroup {
        return this.host.groupObject;
    }

    public get registryController(): RegistryController { return this.host.registryController; }

    // Accessors to the host attributes
    public get slug(): string { return this.host.groupSlug; }
    public get autoclearGroup(): boolean { return this.host.autoclearGroup; }

    // Context providers

    private groupControllerContextProvider: ContextProvider<typeof groupControllerContext, IElementWithGroupController>;

    private groupObjectContextProvider: ContextProvider<typeof groupObjectContext, IElementWithGroupController>;


    constructor(
        host: IElementWithGroupController
    ) {
        super(host);
        
        this._UUID = host.UUID + "_group-controller";

        this.groupControllerContextProvider = new ContextProvider(
            this.host, 
            { context:  groupControllerContext, initialValue: this }
        );

        this.groupObjectContextProvider = new ContextProvider(
            this.host,
            { context: groupObjectContext }
        );

    }

    hostConnected() {

        const slug = this._getDefaultSlugFromHost( "group-slug" );
        this.host.groupSlug = slug;

        this.host.groupObject = this.host.registryController.addOrGetGroup(slug);
        
        this.groupObjectContextProvider.setValue(this.host.groupObject);

    }

    hostDisconnected() {

        if ( this.autoclearGroup && this.host.groupObject ) {
            this.host.registryController.removeGroup(this.host.groupObject);
        }

    }

    hostWillUpdateWatcher(value: PropertyValueMap<IElementWithGroupController>): void {
        // Do nothing
    }

    hostUpdatedWatcher(value: PropertyValueMap<IElementWithGroupController>): void {
        // Do nothing
    }




}
