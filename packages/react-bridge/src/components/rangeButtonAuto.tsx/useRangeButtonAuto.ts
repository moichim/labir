"use client";

import { ThermalRegistry } from "@labirthermal/core";
import { useCallback } from "react";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";
import { useThermalRegistryRangeDrive } from "../../properties/drives/useThermalRegistryRangeDrive";
import { useThermalRegistryHistogramState } from "../../properties/states/useThermalRegistryHistogramState";
import { useThermalRegistryMinmaxState } from "../../properties/states/useThermalRegistryMinmaxState";

/**
 * A functionality of the button that sets the registry range to automatic based on current histogram
 */
export const useRangeButtonAuto = (
    registry: ThermalRegistry
) => {

    const ID = useThermalObjectPurpose(registry, "useRangeButtonAuto");

    const range = useThermalRegistryRangeDrive(registry, ID);
    const minmax = useThermalRegistryMinmaxState(registry, ID);
    const histogram = useThermalRegistryHistogramState(registry, ID);

    const onClick = useCallback(() => {

        const length = histogram.value.length;
        const percentage = 100 / length;

        const newRangeTemp = histogram.value.filter(item => item.height >= percentage);

        const newRange = { from: newRangeTemp[0].from, to: newRangeTemp[newRangeTemp.length - 1].to };

        range.set(newRange);

    }, [minmax.value, range.set, histogram.resolution]);

    return {
        onClick
    }

}