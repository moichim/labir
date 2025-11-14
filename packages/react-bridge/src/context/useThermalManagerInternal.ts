"use client";

import { ThermalManager, ThermalManagerOptions } from "@labirthermal/core";
import { useMemo } from "react";
import Pool from "workerpool/types/Pool";

/**
 * Handles the global instance of the ThermalManager
 * 
 * - use only in the global context!!
 * - to get the instance of the global `ThermalManager`, use `useThermalManagerContext` hook
 * - the instance may be provided from the outside if necessary
 */
export const useThermalManagerInternal = ( pool: Pool, options?: ThermalManagerOptions, externalInstance?: ThermalManager ) => {

    return useMemo( () => {

        if ( externalInstance ) 
            return externalInstance;
        
        return new ThermalManager( pool, options );

    }, [] );

}