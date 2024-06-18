import { inject } from "vue";
import type { UseGroupType } from "../define/useDefineGroup";
import { Structure } from "../structure";

export const useProvidedGroup = () => {
    return inject<UseGroupType|undefined>( Structure.GROUP, undefined );
}