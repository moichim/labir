"use client";

import { ThermalMinmaxOrUndefined, ThermalRegistry } from "@labir/core";
import { useEffect, useState } from "react";

export const useThermalRegistryMinmaxState = (
    registry: ThermalRegistry,
    purpose: string
) => {

    const [value, setValue] = useState<ThermalMinmaxOrUndefined>(registry.minmax.value);

    // Bind all the values to the local state
    useEffect(() => {

        registry.minmax.addListener(purpose, newValue => {

            setValue(newValue);

        });

        return () => registry.minmax.removeListener(purpose);

    }, [registry,setValue]);

    // When this unmounts, remove the listeners
    useEffect(() => {
        return () => registry.minmax.removeListener(purpose);
    }, []);

    return {
        value
    }

}