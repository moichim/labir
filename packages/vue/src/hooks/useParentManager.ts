import { ThermalManager } from "@labir/core";
import { inject, provide } from "vue"

/** Retrieve the parent manager or expose a new instance. */
export const useParentManager = () => {

    const manager = inject<ThermalManager | undefined>( "manager", undefined );


    if ( ! manager ) {

        const newManager = new ThermalManager;

        provide( "manager", newManager );

        return newManager;
    }
    return manager;
}