"use client";

import { ThermalGroup, ThermalRegistry } from "@labir/core";
import { useEffect, useMemo, useState } from "react";

export const useThermalRegistryGroupsState = (
    registry: ThermalRegistry,
    purpose: string
) => {

    const [value, setValue] = useState<ThermalGroup[]>(registry.groups.value);

    // Bind all the values to the local state
    useEffect(() => {

        registry.groups.addListener(purpose, newValue => {

            setValue(newValue);

        });

        return () => registry.groups.removeListener(purpose);

    }, [registry]);


    // The setting function
    const addOrGetGroup = useMemo(() => registry.groups.addOrGetGroup, [registry]);
    const removeAllGroups = useMemo(() => registry.groups.removeAllGroups, [registry]);
    const removeGroup = useMemo(() => registry.groups.removeGroup, [registry]);


    // When this unmounts, remove the listeners
    useEffect(() => {
        return () => registry.groups.removeListener(purpose);
    }, []);


    return {
        value,
        addOrGetGroup,
        removeAllGroups,
        removeGroup
    }

}