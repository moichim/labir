import { inject } from "vue"
import { Structure } from "../structure";
import type { UseManagerType } from "../define/useDefineManager";

/** Grabs the manager from above */
export const useProvidedManager = () => {
    return inject<UseManagerType|undefined>( Structure.MANAGER, undefined );
}