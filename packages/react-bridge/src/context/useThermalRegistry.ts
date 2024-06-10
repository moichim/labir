"use client";

import { useMemo } from "react";
import { useThermalContext } from "./thermalManagerContext";
import { ThermalRegistryOptions } from "@labir/core";

/** 
 * Creates and stores a registry instance.  
 * 
 * Does not remove the instance on unmount. To destroy the instance, call the manager's method `removeRegistry`
*/
export const useThermalRegistry = (
    registryId: string,
    options?: ThermalRegistryOptions
) => {

    const manager = useThermalContext();

    const registry = useMemo( () => {
        return manager.addOrGetRegistry( registryId, options );
    }, [registryId, manager] );

    return registry;

}