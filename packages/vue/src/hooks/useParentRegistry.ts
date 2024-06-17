import { ThermalRegistry } from "@labir/core";
import { inject, provide } from "vue"
import { useParentManager } from "./useParentManager";

/** Retrieve the parent registry or expose the new instance. */
export const useParentRegistry = ( defaultRegistryName: string ) => {

    const registry = inject<ThermalRegistry | undefined> ( "registry", undefined );

    const manager = useParentManager();

    if ( registry === undefined ) {

        const newRegistry = manager.addOrGetRegistry( defaultRegistryName );

        provide( "registry", newRegistry );

        return newRegistry;

    }

    return registry;

}