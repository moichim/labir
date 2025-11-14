"use client";

import { ThermalRegistry } from "@labirthermal/core";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";
import { useThermalRegistryHistogramState } from "../../properties/states/useThermalRegistryHistogramState";
import { useCallback, useEffect, useState } from "react";

export const useHistogramResolutionInput = (
    registry: ThermalRegistry
) => {

    const ID = useThermalObjectPurpose(
        registry,
        "useHistogramResolutionInput",
        true
    );

    const histogram = useThermalRegistryHistogramState(registry, ID);

    const [internal, setInternal] = useState<number>(histogram.resolution);

    // Whenever the internal value changes, project it into histogram
    useEffect(() => {
        if (internal)
            if (internal >= 2 && internal <= 400) {
                if (internal !== histogram.resolution) {
                    histogram.setResolution(Math.round(internal));
                }
            } else {
                setInternal(Math.min(Math.max(internal, 2), 200));
            }
    }, [internal, histogram.resolution, histogram.setResolution]);

    // Whenever the histogram recalculates, update the internal value
    useEffect(() => {
        if (internal !== histogram.resolution) {
            setInternal(histogram.resolution);
        }
    }, [histogram.value]);

    // On blur make sure the value is valid
    const onBlur = useCallback(() => {
        if (isNaN(internal)) {
            setInternal(histogram.resolution);
        } else if (internal < 2 || internal > 200) {
            setInternal(Math.min(Math.max(internal, 2), 200));
        }
    }, [internal, histogram.resolution]);

    // On every change update the internal value and eventually recalculate
    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setInternal(parseInt(event.target.value));
            setTimeout(histogram.recalculate, 0);
        },
        [histogram.recalculate]
    );

    return {
        onChange,
        onBlur,
        internal
    }

}