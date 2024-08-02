import { ThermalGroup, ThermalManager, ThermalRegistry } from "@labir/core";

export const defaultManager = new ThermalManager;

export const defaultRegistryKey = "__internal_default_registry";

export const defaultGroupyKey = "__internal_default_group";

export const getParentManagerOrDefault = (
    firstParent: HTMLElement | null | undefined
) => {

    let node = firstParent;
    let manager: ThermalManager | undefined;


    // If there is no parent, return the default manager instead
    if (!node) {
        return defaultManager;
    }

    // Otherwise iterate over all parents and look for manager
    while (node && !manager) {

        if ("manager" in node) {
            if (node.manager instanceof ThermalManager) {
                manager = node.manager;
                node = null;
            }
        }

        if (node) {
            node = node.parentElement;
        }

    }

    // Return the found manager or the default one
    return manager 
        ? manager 
        : defaultManager;


}

export const getDefaultRegistry = (
    manager: ThermalManager
) =>  {
    return manager.addOrGetRegistry( defaultRegistryKey );
}

export const getDefaultGroup = (
    registry: ThermalRegistry
): ThermalGroup => {
    return registry.groups.addOrGetGroup( defaultGroupyKey );
}