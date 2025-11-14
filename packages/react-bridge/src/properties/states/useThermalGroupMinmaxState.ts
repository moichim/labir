"use client";

import { ThermalGroup, ThermalMinmaxOrUndefined } from "@labirthermal/core";
import { useEffect, useState } from "react";

export const useThermalGroupMinmaxState = (
    group: ThermalGroup,
    purpose: string
) => {

    const [value, setValue] = useState<ThermalMinmaxOrUndefined>(group.minmax.value);

    // Bind all the values to the local state
    useEffect(() => {

        group.minmax.addListener(purpose, newValue => {

            setValue(newValue);

        });

        return () => group.minmax.removeListener(purpose);

    }, [group,setValue]);

    // When this unmounts, remove the listeners
    useEffect(() => {
        return () => group.minmax.removeListener(purpose);
    }, []);

    return {
        value
    }

}