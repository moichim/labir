import { useEffect, useMemo } from "react";
import { useThermalContext } from "../context/thermalManagerContext";
import { useThermalGroupInstancesState } from "../properties/lists/useThermalGroupInstancesState";

/** 
 * Shorthand hook that loads files in a group
 */
export const useFilesInGroup = (
    urls: string[],
    registryId: string,
    groupId: string
) => {

    const manager = useThermalContext();

    const registryIdMemoised = useMemo( () => registryId, [] );
    const groupIdMemoised = useMemo( () => groupId, [] );

    const registry = useMemo( () => manager.addOrGetRegistry( registryIdMemoised ), []);
    const group = useMemo( () => registry.groups.addOrGetGroup( groupIdMemoised ), [] );

    // Load upon mount, destroy self upon unmount
    useEffect( () => {

        registry.loadFiles( {
            [group.id]: urls.map( url => ({
                thermalUrl: url
            }) )
        } )

    }, [ ] );

    useEffect( () => {
        () => manager.removeRegistry( registryIdMemoised );
    }, [] );

    // Get all instances
    const instances = useThermalGroupInstancesState( group, registryIdMemoised );

    console.log( instances );


    // Remove the registry upon unmount
    useEffect( () => {
        // return () => registry.destroySelfInTheManager();
    }, [ registry ] );


    return {
        registry,
        group,
        instances
    }


}