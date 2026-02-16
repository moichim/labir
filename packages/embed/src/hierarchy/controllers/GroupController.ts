import { ThermalGroup, ThermalRegistry } from "@labirthermal/core";
import { ReactiveController, ReactiveControllerHost } from "lit";
import { ComponentWithManagerProvider } from "./ManagerController";

export interface ConponentWithGroupProvider extends ReactiveControllerHost {

    UUID: string;

    slug: string;

    registry: ThermalRegistry;

    group: ThermalGroup;

    autoclear: boolean;

}

export class GroupProviderController implements ReactiveController {

    declare host: ConponentWithGroupProvider;

    private readonly UUID_INTERNAL: string;

    public constructor(host: ConponentWithGroupProvider) {

        this.host = host;                      
        this.UUID_INTERNAL = this.host.UUID + "__group-provider-controller";
        this.host.addController(this);

    }

    hostConnected(): void {
        this.host.group = this.host.registry.groups.addOrGetGroup(this.host.slug);
    }

    hostDisconnected(): void {
        if ( this.host.autoclear === true && this.host.group !== undefined ) {
            this.host.registry.groups.removeGroup(this.host.group.id);
        }
    }

}