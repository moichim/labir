import { inject } from "vue";
import type { UseGroupType } from "../define/useDefineGroup";
import { Structure } from "../structure";

export const useProvidedGroup = () => {
    const providedGroup =  inject<UseGroupType|undefined>( Structure.GROUP, undefined );

    if ( providedGroup ) {
        providedGroup.isProvided = true;
    }

    return providedGroup;
}