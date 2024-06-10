"use client";

import { ThermalManager, ThermalManagerOptions } from "@labir/core";
import { useMemo } from "react";

/**
 * Handles the global instance of the ThermalManager
 * 
 * - use only in the global context!!
 * - to get the instance of the global `ThermalManager`, use `useThermalManagerContext` hook
 * - the instance may be provided from the outside if necessary
 */
export const useThermalManagerInternal = ( options?: ThermalManagerOptions, externalInstance?: ThermalManager ) => {

    return useMemo( () => {

        if ( externalInstance ) return externalInstance;
        return new ThermalManager( options );

    }, [] );

}