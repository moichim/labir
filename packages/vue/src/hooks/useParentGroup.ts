import { ThermalGroup } from "@labir/core";
import { inject } from "vue";
import { useParentRegistry } from "./useParentRegistry";

/** Retrieves the parent group or expose a new group. */
export const useParentGroup = ( defaultName: string ) => {

    const group = inject<ThermalGroup|undefined>( "group", undefined );

    const registry = useParentRegistry( "registry_" + defaultName );
    if ( group === undefined ) {
        return registry.groups.addOrGetGroup( defaultName );
    }

    return group;

}