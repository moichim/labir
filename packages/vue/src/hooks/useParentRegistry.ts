import { ThermalRegistry } from "@labir/core";
import { inject } from "vue"

export const useParentRegistry = () => {

    const registry = inject<ThermalRegistry | undefined> ( "registry", undefined );

    return registry;

}