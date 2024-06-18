import { useDefineGroup } from "../structure/define/useDefineGroup";
import { useProvidedGroup } from "@/hooks/structure/provided/useProvidedGroup";

export const useFile = ( thermalUrl: string, visibleUrl?: string ) => {
    let group = useProvidedGroup();

    if ( group === undefined ) {
        group = useDefineGroup( `group-for-file__${thermalUrl}__${Math.random()}` );
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