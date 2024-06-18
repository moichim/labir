import { ref, watch } from "vue";
import { useProvidedRegistry } from "../structure/provided/useProvidedRegistry"
import { useProvidedOrNewRegistry } from "../structure/providedOrNew/useProvidedOrNewRegistry";
import type { ThermalRegistry } from "@labir/core";

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