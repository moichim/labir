"use client";

import { MouseEventHandler, useMemo } from "react"
import { ThermalInstanceEventHandler } from "./thermalInstance";
import { AbstractFile } from "@labir/core";

/** Memoise the thermal instance callback. */
export const useInstanceListener = (
    listener: ThermalInstanceEventHandler | undefined,
    instance: AbstractFile
): MouseEventHandler<HTMLDivElement> | undefined  => {

    return useMemo( () => {
        if (listener === undefined) return undefined;
        return ( event ) => listener( event, instance ); 
    }, [listener, instance]);

}