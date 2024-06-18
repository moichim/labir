import { inject } from "vue";
import { Structure } from "../structure";
import type { UseRegistryType } from "../define/useDefineRegistry";

/** Grab a registry instance from the higher context */
export const useProvidedRegistry = () =>  {
    return inject<UseRegistryType|undefined>( Structure.REGISTRY, undefined );
}