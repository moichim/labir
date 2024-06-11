import { useEffect, useMemo, useState } from "react";
import { useThermalContext } from "../context/thermalManagerContext"
import { ThermalFileInstance } from "@labir/core";
import { useThermalGroupInstancesState } from "../properties/lists/useThermalGroupInstancesState";

/** 
 * Shorthand hook that takes care of an isolated single file registry. 
 * Creates:
 * - a registry named after the URL + UUID
 * - one default group inside it
 * - extracts the instance once it is ready
 * Upon unmount and upon URL change, remove the entire registry
 */
export const useSingleFileRegistry = (
    thermalUrl: string,
    visibleUrl?: string
) => {

    const manager = useThermalContext();

    // The registry ID is stored per every URL
    const registryId = useMemo( () => {
        return `isolated_context_${thermalUrl}}`
    }, [ thermalUrl ] );

    // The group ID is allways the same for isolated contexts
    const groupId = useMemo( () => "isolated_default_group", [] );

    // Create and store the registry once for all
    const registry = manager.addOrGetRegistry( registryId );
    const group = registry.groups.addOrGetGroup( groupId );

    // Load upon mount, destroy self upon unmount
    useEffect( () => {

        registry.loadOneFile( {
            thermalUrl,
            visibleUrl
        }, group.id );

        return () => registry.destroySelfInTheManager();

    }, [ thermalUrl ] );

    const [ instance, setInstance ] = useState<ThermalFileInstance>();

    // Get all instances
    const instances = useThermalGroupInstancesState( group, registryId );

    // Extract the first instance into the exported array
    useEffect( () => {
        if ( instances.value.length > 0 ) {
            setInstance( instances.value[0] );
        } else {
            setInstance( undefined );
        }
    }, [instances.value] );


    // Remove the registry upon unmount
    useEffect( () => {
        // return () => registry.destroySelfInTheManager();
    }, [ registry ] );


    return {
        registry,
        group,
        instance
    }


}