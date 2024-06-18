import { ThermalManager } from "@labir/core";
import { provide } from "vue";
import { Structure } from "../structure";

export type UseManagerType = ReturnType<typeof useDefineManager>

/** 
 * Gets the global instance of a manager or creates a new one. 
 * Provides the manager instance down below. 
 */
export const useDefineManager = (
    id: string
) => {

    let manager: ThermalManager;

    let created = false;

    if ( window.thermalManagers.has( id ) ) {
        manager = window.thermalManagers.get( id )!;
    } else {
        manager = new ThermalManager;
        window.thermalManagers.set( id, manager );
        created = true;
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
        created
    }

    provide( Structure.MANAGER, manager );


    return value;

}