import { useProvidedGroup } from "../provided/useProvidedGroup"
import { useGroup } from "./useGroup";

export const useFile = ( thermalUrl: string, visibleUrl?: string ) => {
    let group = useProvidedGroup();

    if ( group === undefined ) {
        group = useGroup( `group-for-file__${thermalUrl}__${Math.random()}` );
    }

    const enqueue = () => {
        group.group.registry.enqueueFile( group.group.id, thermalUrl, visibleUrl );
    }

    return {
        enqueue,
        group,
        registry: group.group.registry
    }
}