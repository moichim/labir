import { provide } from "vue";
import { useProvidedManager } from "../provided/useProvidedManager";
import { useManager, type UseManagerType } from "./useManager";
import { Structure } from "../structure";

export type UseRegistryType = ReturnType<typeof useRegistry>

export const useRegistry = (id: string) => {

    let manager: UseManagerType;

    // Look for the registry and grab it from the global context
    const injectedManager = useProvidedManager();
    if (injectedManager !== undefined) {
        manager = injectedManager;
    } else {
        manager = useManager(`manager-for-registry__${id}`);
    }

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
        fetchQuery
    }

    provide( Structure.REGISTRY, value );

    return value;



}