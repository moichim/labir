import { RefObject, useEffect, useState } from "react";
import { useThermalGroupMinmaxState } from "../../../properties/states/useThermalGroupMinmaxState";
import { Orientation } from "../../../utilities/orientation";
import { useDimension } from "../../../utilities/useDimension";

export const useRangerTicks = (
    ref: RefObject<HTMLDivElement>,
    minmax: ReturnType<typeof useThermalGroupMinmaxState>,
    orientation: Orientation
) => {

    const [ticks, setTicks] = useState<number[]>([]);
    const width = useDimension( ref, orientation );

    useEffect( () => {

        if (minmax.value && width !== undefined) {
            const totalDistance = Math.abs(
              minmax.value.min - minmax.value.max
            );
      
            const num = Math.floor(width / 50);
            const tickStep = totalDistance / num;
            const ticksBuffer: number[] = [];
      
            for (let i = 1; i < num; i++) {
              ticksBuffer.push(minmax.value.min + i * tickStep);
            }
            ticksBuffer.push(minmax.value.min);
            ticksBuffer.push(minmax.value.max);
      
            setTicks(ticksBuffer);
          }

    }, [minmax.value, width] );

    return ticks;


}