"use client";

import { Instance, ThermalGroup } from "@labirthermal/core";
import { useEffect, useState } from "react";

export const useThermalGroupInstancesState = (
    group: ThermalGroup,
    purpose: string
) => {

    const [value, setValue] = useState<Instance[]>(group.files.value);

    // Bind all the values to the local state
    useEffect(() => {

        group.files.addListener(purpose, newValue => {

            setValue(newValue);

        });

        return () => group.files.removeListener(purpose);

    }, [group,value,setValue]);


    // When this unmounts, remove the listeners
    useEffect(() => {
        return () => group.files.removeListener(purpose);
    }, []);


    return {
        value
    }

}