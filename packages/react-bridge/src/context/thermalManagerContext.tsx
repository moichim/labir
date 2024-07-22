"use client";

import React, { createContext, useContext } from "react";
import { useThermalManagerInternal } from "./useThermalManagerInternal";
import { ThermalManager, ThermalManagerOptions } from "@labir/core";

import Pool from "workerpool/types/Pool";

const ThermalManagerContext = createContext<ReturnType<typeof useThermalManagerInternal>|null>( null );

type ThermalContextProps = React.PropsWithChildren & {
    pool: Pool,
    options?: ThermalManagerOptions,
    /** Provide an external instance of the manager. */
    externalManagerInstance?: ThermalManager
}

/** Everything must run inside a global context which stores an `ThermalManager` instance */
export const ThermalProvider: React.FC<ThermalContextProps> = ({pool, options, externalManagerInstance, children}) => {

    const value = useThermalManagerInternal( pool, options, externalManagerInstance );

    return <ThermalManagerContext.Provider value={value}>
        {children}
    </ThermalManagerContext.Provider>

}

/** Get the global `ThermalManager` instance from the context. */
export const useThermalContext = () => {
    return useContext( ThermalManagerContext )!;
}