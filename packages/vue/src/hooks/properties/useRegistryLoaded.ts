import type { ThermalRegistry } from "@labirthermal/core";
import { ref } from "vue";
import { useProvidedRegistry } from "../structure/provided/useProvidedRegistry";

export const useRegistryLoaded = (
    purpose: string,
    registry?: ThermalRegistry
) => {

    if ( !registry ) {
        const providedRegistry = useProvidedRegistry();
        if ( providedRegistry ) {
            registry = providedRegistry.registry;
        }
    }

    const loading = ref<boolean>( registry === undefined ? false : registry.loading.value );

    if ( registry ) {
        registry.loading.addListener( purpose, ( value ) => {
            loading.value = value;
        } );
    }

    return {
        loading,
        registry
    }

}