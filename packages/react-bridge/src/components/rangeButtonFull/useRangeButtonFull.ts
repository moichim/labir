"use client";

import { ThermalRegistry } from "@labirthermal/core";
import { useCallback } from "react";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";
import { useThermalRegistryRangeDrive } from "../../properties/drives/useThermalRegistryRangeDrive";
import { useThermalRegistryMinmaxState } from "../../properties/states/useThermalRegistryMinmaxState";

export const useRangeButtonFull = (
    registry: ThermalRegistry
) => {

    const ID = useThermalObjectPurpose(registry, "useRangeButtonFull");
    const range = useThermalRegistryRangeDrive(registry, ID);
    const minmax = useThermalRegistryMinmaxState(registry, ID);

    const onClick = useCallback(() => {
        if (minmax.value !== undefined)
            range.set({ from: minmax.value.min, to: minmax.value.max });
    }, [minmax.value, range.set]);

    return {
        onClick
    }

}