import { ThermalGroup } from "@labir/core";
import { inject } from "vue";

export const useParentGroup = () => {

    const group = inject<ThermalGroup|undefined>( "group", undefined );

    return group;

}