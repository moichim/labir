"use client";

import { AbstractFile, ThermalGroup } from "@labir/core";
import { useEffect, useMemo, useState } from "react";

export const useThermalGroupInstancesState = (
    group: ThermalGroup,
    purpose: string
) => {

    const [value, setValue] = useState<AbstractFile[]>(group.instances.value);

    // Bind all the values to the local state
    useEffect(() => {

        group.instances.addListener(purpose, newValue => {

            setValue(newValue);

        });

        return () => group.instances.removeListener(purpose);

    }, [group,value,setValue]);


    // The setting function
    const instantiateSources = useMemo(() => group.instances.instantiateSources, [group]);
    const removeAllInstances = useMemo(() => group.instances.removeAllInstances, [group]);


    // When this unmounts, remove the listeners
    useEffect(() => {
        return () => group.instances.removeListener(purpose);
    }, []);


    return {
        value,
        instantiateSources,
        removeAllInstances
    }

}