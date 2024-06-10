import { ThermalRangeOrUndefined, ThermalRegistry } from "@labir/core";
import { useThermalRegistryMinmaxState } from "../../../properties/states/useThermalRegistryMinmaxState";
import { useThermalRegistryRangeDrive } from "../../../properties/drives/useThermalRegistryRangeDrive";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RangerChangeEvent } from "@tanstack/react-ranger";
import { useThermalObjectPurpose } from "../../../context/useThermalObjectPurpose";

/** Handles the logic of slider value depending on the given parameters */
export const useRangerValues = (
    registry: ThermalRegistry,
    isLocked?: boolean,
    rangeOverride?: ThermalRangeOrUndefined
) => {

    const purpose = useThermalObjectPurpose( registry, "useRangerValues" );

    const minmax = useThermalRegistryMinmaxState( registry, purpose );
    const range = useThermalRegistryRangeDrive( registry, purpose );

    const min = useMemo( () => {
        return minmax.value!.min;
    }, [ minmax.value ] );
    const max = useMemo( () => {
        return minmax.value!.max;
    }, [minmax.value] );


    // Calculate the initial state based on provided parameters
    const initialState = useMemo( () => {
        if ( rangeOverride !== undefined ) {
            return [ rangeOverride.from, rangeOverride.to ];
        }
        else if ( range.value !== undefined ) {
            return [ range.value.from, range.value.to ];
        }
        return [ minmax.value!.min, minmax.value!.max ];
    }, [] );


    // The value is stored locally
    const [internal, setInternalState] = useState<number[]>(initialState);


    // Start listening on global range changes
    useEffect( () => {

        registry.range.addListener(purpose, (value) => {

            if ( value !== undefined ) {
                if ( isLocked === false && rangeOverride === undefined ) {
                    setInternalState( [ value.from, value.to ] );
                }
            }

        });

    }, [isLocked, registry] );

    // Listen to rangeOverride prop
    useEffect( () => {

        if ( rangeOverride !== undefined ) {
            if ( rangeOverride.from !== internal[0] || rangeOverride.to !== internal[1] ) {
                setInternalState( [ rangeOverride.from, rangeOverride.to ] );
            }
        }

    }, [rangeOverride] );


    const onChange: RangerChangeEvent<HTMLDivElement> = useCallback( instance => {

        if ( isLocked === true ) {
            // Do nothing
            return;
        }

        if ( rangeOverride !== undefined ) {
            // Do notning
            return;
        }

        range.set({
            from: instance.sortedValues[0],
            to: instance.sortedValues[1]
        });

    }, [] );

    const onDrag: RangerChangeEvent<HTMLDivElement> = useCallback( instance => {

        // Do nothing if locked
        if ( isLocked === true ) {
            return;
        }

        // Do nothing if range is fixed
        if ( rangeOverride !== undefined ) {
            return;
        }

        // Do nothing if exceeds bounds
        if ( instance.sortedValues[0] >= instance.sortedValues[1] ) {
            return;
        }

        setInternalState( [...instance.sortedValues ] );

        

    }, [] );

    return {
        min,
        max,
        values : internal,
        onChange,
        onDrag,
        minmax,
        range
    }


}