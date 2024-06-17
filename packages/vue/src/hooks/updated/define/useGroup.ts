import { provide } from "vue";
import { useProvidedRegistry } from "../provided/useProvidedRegistry";
import { useRegistry } from "./useRegistry";
import { Structure } from "../structure";

export type UseGroupType = ReturnType<typeof useGroup>

export const useGroup = (
    id: string
) => {

    let registry = useProvidedRegistry();

    console.log( registry );

    if ( registry === undefined ) {
        registry = useRegistry( `registry-for-group__${id}` );
    }

    console.log( "wtf" ,registry );

    const group = registry.registry.groups.addOrGetGroup( id );

    const value = {
        group
    }

    provide( Structure.GROUP, value );

    return value;

}