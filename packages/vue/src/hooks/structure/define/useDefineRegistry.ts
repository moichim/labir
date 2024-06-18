import { provide } from "vue";
import { useProvidedManager } from "../provided/useProvidedManager";
import { useDefineManager, type UseManagerType } from "./useDefineManager";
import { Structure } from "../structure";

export type UseRegistryType = ReturnType<typeof useDefineRegistry>

export const useDefineRegistry = (id: string) => {

    let manager: UseManagerType;
    let created = false;

    // Look for the registry and grab it from the global context
    const injectedManager = useProvidedManager();
    if (injectedManager !== undefined) {
        manager = injectedManager;
    } else {
        manager = useDefineManager(`manager-for-registry__${id}`);
    }

    created = manager.manager.registries[ id ] === undefined;

    const registry = manager.manager.addOrGetRegistry(id);

    const removeSelf = () => {
        manager.manager.removeRegistry(id);
    }

    const enqueueFile = (groupId: string, thermalUrl: string, visibleUrl?: string) => {
        registry.enqueueFile(groupId, thermalUrl, visibleUrl);
    }

    const fetchQuery = () => {
        registry.loadQuery();
    }

    const value = {
        registry,
        removeSelf,
        enqueueFile,
        fetchQuery,
        created
    }

    provide( Structure.REGISTRY, value );

    return value;



}