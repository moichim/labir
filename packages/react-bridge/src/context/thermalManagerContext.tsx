"use client";

import React, { createContext, useContext } from "react";
import { useThermalManagerInternal } from "./useThermalManagerInternal";
import { ThermalManager, ThermalManagerOptions } from "@labir/core";

const ThermalManagerContext = createContext<ReturnType<typeof useThermalManagerInternal>>( new ThermalManager );

type ThermalContextProps = React.PropsWithChildren & {
    options?: ThermalManagerOptions,
    /** Provide an external instance of the manager. */
    externalManagerInstance?: ThermalManager
}

/** Everything must run inside a global context which stores an `ThermalManager` instance */
export const ThermalProvider: React.FC<ThermalContextProps> = ({options, externalManagerInstance, children}) => {

    const value = useThermalManagerInternal( options, externalManagerInstance );

    return <ThermalManagerContext.Provider value={value}>
        {children}
    </ThermalManagerContext.Provider>

}

/** Get the global `ThermalManager` instance from the context. */
export const useThermalContext = () => {
    return useContext( ThermalManagerContext );
}