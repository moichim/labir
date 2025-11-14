import { provide } from "vue";
import { useProvidedManager } from "../provided/useProvidedManager";
import { useDefineManager, type UseManagerType } from "./useDefineManager";
import { Structure } from "../structure";
import { ThermalFileReader } from "@labirthermal/core";

export type UseRegistryType = ReturnType<typeof useDefineRegistry>

export const useDefineRegistry = (id: string) => {

    let manager: UseManagerType;

    // Look for the registry and grab it from the global context
    const injectedManager = useProvidedManager();
    if (injectedManager !== undefined) {
        manager = injectedManager;
    } else {
        manager = useDefineManager(`manager-for-registry__${id}`);
    }

    const registry = manager.manager.addOrGetRegistry(id);

    const removeSelf = () => {
        manager.manager.removeRegistry(id);
    }

    const enqueueFile = async (groupId: string, thermalUrl: string, visibleUrl?: string) => {

        const reader = registry.service.loadFile( thermalUrl, visibleUrl );

        if ( reader instanceof ThermalFileReader ) {
            const group = registry.groups.addOrGetGroup( groupId );
            const instance = await reader.createInstance( group );
            console.log( instance );
        }

        // registry.enqueueFile(groupId, thermalUrl, visibleUrl);
    }

    const value = {
        registry,
        removeSelf,
        enqueueFile,
        isProvided: false
    }

    provide( Structure.REGISTRY, value );

    return value;



}