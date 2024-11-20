import { ThermalGroup, ThermalManager, ThermalManagerOptions, ThermalRegistry } from "@labir/core";

export const defaultManager = new ThermalManager;

export const defaultRegistryKey = "__internal_default_registry";

export const defaultGroupyKey = "__internal_default_group";

declare global {
    interface Window { Thermal: {
        managers: Map<string,ThermalManager>
    }; }
}

window.Thermal = {
    managers: new Map
};

// window.Thermal.managers = new Map;
window.Thermal.managers.set( "default", defaultManager );

export const createOrGetManager = (
    slug?: string,
    options?: ThermalManagerOptions
) => {

    if ( slug === undefined ) {
        return window.Thermal.managers.get( "default" )!;
    } else if ( window.Thermal.managers.has( slug ) ) {
        return window.Thermal.managers.get( slug )!;
    } else {
        const manager = new ThermalManager( undefined, options );
        window.Thermal.managers.set( slug, manager );
        return manager;
    }
    
}


export const getDefaultRegistry = (
    manager: ThermalManager
) => {
    return manager.addOrGetRegistry(defaultRegistryKey);
}

export const getDefaultGroup = (
    registry: ThermalRegistry
): ThermalGroup => {
    return registry.groups.addOrGetGroup(defaultGroupyKey);
}