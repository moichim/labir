import { AvailableThermalPalette, ThermalManager, ThermalRangeOrUndefined, ThermalRegistry, ThermalGroup } from "@labirthermal/core";
import { html, PropertyValues } from "lit";
import { IElementWithManagerController, ManagerController } from "../hierarchy/controllers/ManagerController";
import { IElementWithRegistryController, RegistryController } from "../hierarchy/controllers/RegistryController";
import { IElementWithGroupController, GroupController } from "../hierarchy/controllers/GroupController";
import { AbstractApp } from "./AbstractApp";

export class ThermalFileAppNewElement 
extends AbstractApp 
implements 
    IElementWithManagerController, 
    IElementWithRegistryController,
    IElementWithGroupController
{

    static properties = {
        ...AbstractApp.properties,
        ...ManagerController.HOST_PROPERTIES,
        ...RegistryController.HOST_PROPERTIES,
        ...GroupController.HOST_PROPERTIES
    };

    // Manager controller properties
    
    managerSlug!: string;

    managerObject!: ThermalManager;

    managerController: ManagerController = new ManagerController(this);

    palette: AvailableThermalPalette = "jet";

    advancedPalettes: boolean = false;

    smoothThermograms: boolean = false;

    smoothGraph: boolean = false;

    tool: string = "inspect";




    // Registry controller properties
    
    registrySlug!: string;

    registryObject!: ThermalRegistry;
    
    registryController: RegistryController = new RegistryController(this);

    opacity: number = 1;
    
    min?: number | undefined;
    
    max?: number | undefined;
    
    from?: number | undefined;
    
    to?: number | undefined;
    
    highlight?: ThermalRangeOrUndefined;

    loading: boolean = false;

    // Group controller properties

    groupSlug!: string;

    groupObject!: ThermalGroup;

    groupController: GroupController = new GroupController(this);

    autoclearGroup: boolean = true;



    protected updated(_changedProperties: PropertyValues<ThermalFileAppNewElement>) {
        super.updated(_changedProperties);

        this.managerController.hostUpdatedWatcher(_changedProperties);

        this.registryController.hostUpdatedWatcher(_changedProperties);

        this.groupController.hostUpdatedWatcher(_changedProperties);
    }

    
    render() {
        return html`<group-provider slug="smrt">
            <manager-palette-dropdown></manager-palette-dropdown>
            <manager-image-smooth-switch></manager-image-smooth-switch>
            <manager-tool-bar></manager-tool-bar>
        </group-provider>`;
    }

}