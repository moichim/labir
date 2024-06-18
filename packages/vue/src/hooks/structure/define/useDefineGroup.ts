import { provide } from "vue";
import { useProvidedRegistry } from "../provided/useProvidedRegistry";
import { useDefineRegistry } from "./useDefineRegistry";
import { Structure } from "../structure";

export type UseGroupType = ReturnType<typeof useDefineGroup>

export const useDefineGroup = (
    id: string
) => {

    let registry = useProvidedRegistry();

    if ( registry === undefined ) {
        registry = useDefineRegistry( `registry-for-group__${id}` );
    }

    const created = registry.registry.groups.map.has( id ) === false;

    const group = registry.registry.groups.addOrGetGroup( id );

    const value = {
        group,
        created
    }

    provide( Structure.GROUP, value );

    return value;

}