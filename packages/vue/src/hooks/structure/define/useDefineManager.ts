import { ThermalManager } from "@labirthermal/core";
import { provide } from "vue";
import { Structure } from "../structure";

import * as workerpool from "workerpool"

export type UseManagerType = ReturnType<typeof useDefineManager>

/** 
 * Gets the global instance of a manager or creates a new one. 
 * Provides the manager instance down below. 
 */
export const useDefineManager = (
    id: string
) => {

    let manager: ThermalManager;

    if ( window.thermalManagers.has( id ) ) {
        manager = window.thermalManagers.get( id )!;
    } else {
        manager = new ThermalManager( workerpool.pool() );
        window.thermalManagers.set( id, manager );
    }

    const remove = () => {
        if ( window.thermalManagers ) {
            if ( window.thermalManagers.has( id ) ) {
                window.thermalManagers.delete( id )
            }
        }
    }

    const value = {
        manager,
        remove,
        isProvided: false
    }

    provide( Structure.MANAGER, manager );


    return value;

}