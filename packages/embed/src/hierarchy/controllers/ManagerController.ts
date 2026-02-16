import { ThermalManager, ThermalManagerOptions } from "@labirthermal/core";
import { PropertyValues, ReactiveController, ReactiveControllerHost } from "lit";
import { ManagerPaletteContext } from "../providers/context/ManagerContext";
import { AvailableThermalPalette, ThermalPalettes, ThermalTool } from "@labirthermal/core";
import { createOrGetManager, removeManager } from "../providers/getters";

export interface ComponentWithManagerProvider extends ReactiveControllerHost{

    UUID: string;

    manager: ThermalManager;

    slug: string;

    palette: ManagerPaletteContext;

    smooth: boolean;

    graphSmooth: boolean;

    tool: ThermalTool;

    tools: ThermalManager["tool"]["tools"];

    autoclear: boolean;

}

export class ManagerController implements ReactiveController {

    declare host: ComponentWithManagerProvider;

    private readonly UUID_INTERNAL;

    public constructor(host: ComponentWithManagerProvider) {

        this.host = host;                      
        this.UUID_INTERNAL = this.host.UUID + "__manager-controller";

        this.host.addController(this);
    }


    hostConnected(): void {
        
        const options: ThermalManagerOptions = {};

        if ( ThermalPalettes[ this.host.palette.key ] ) {
            options.palette = this.host.palette.key;
        }

        const manager = createOrGetManager(this.host.slug, options);

        this.host.manager = manager;

        this.host.tool = manager.tool.value;
        this.host.tools = manager.tool.tools;

    }

    hostDisconnected(): void {
        
        if ( this.host.manager && this.host.autoclear ) {
            removeManager(this.host.manager);
        }

    }

    initListeners() {

        // Palette to context
        this.host.manager.palette.addListener(
            this.UUID_INTERNAL,
            value => {
                this.host.palette = {
                    key: value,
                    data: ThermalPalettes[value]
                }
            }
        );

        // Image smooth
        this.host.manager.smooth.addListener(
            this.UUID_INTERNAL,
            value => this.host.smooth = value
        );

        // Graph smooth
        this.host.manager.graphSmooth.addListener(
            this.UUID_INTERNAL,
            value => this.host.graphSmooth = value
        );

        // Tool
        this.host.manager.tool.addListener(
            this.UUID_INTERNAL,
            value => this.host.tool = value
        );

    }

    public onUpdate(
        _changedProperties: PropertyValues<ComponentWithManagerProvider>
    ) {

        if ( _changedProperties.has("palette") && this.host.manager ) {

            const sanitizedPalette = this.host.manager.palette.sanitizeInputKey(this.host.palette.key);
            this.host.manager.palette.setPalette(sanitizedPalette);

        }

    }


}