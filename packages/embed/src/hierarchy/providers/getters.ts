import { ThermalGroup, ThermalManager, ThermalRegistry } from "@labir/core";

export const defaultManager = new ThermalManager;

export const defaultRegistryKey = "__internal_default_registry";

export const defaultGroupyKey = "__internal_default_group";



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