import { useManager } from "./useParentManager";
import { useParentGroup } from "./useParentGroup";
import { useParentRegistry } from "./useParentRegistry";
import { useRegistry } from "./useRegistry";
import { provide } from "vue";

export const useGroup = (
    id: string
) => {

    const group = useParentGroup();

    if ( group ) {
        return group;
    }

    const registry = useParentRegistry();

    if ( registry ) {
        return registry.groups.addOrGetGroup( id );
    }

    return useRegistry( "default_registry" ).groups.addOrGetGroup( id );
    
}