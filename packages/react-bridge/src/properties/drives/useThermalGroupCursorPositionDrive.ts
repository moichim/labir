"use client";

import { ThermalCursorPositionOrUndefined, ThermalGroup } from "@labir/core";
import { useEffect, useMemo, useState } from "react";

export const useThermalGroupCursorPositionDrive = (
    group: ThermalGroup,
    purpose: string
) => {

    const [value, setValue] = useState<ThermalCursorPositionOrUndefined>(group.cursorPosition.value);
    const [ hover, setHover ] = useState<boolean>( group.cursorPosition.hover );

    // Bind all the values to the local state
    useEffect(() => {

        group.cursorPosition.addListener(purpose, newValue => {

            if (newValue !== value) {
                setValue(newValue);
            }

            if ( hover !== group.cursorPosition.hover ) {
                setHover( group.cursorPosition.hover );
            }

        });

        return () => group.cursorPosition.removeListener(purpose);

    }, [group,value, setValue]);


    // The highlighting function
    const setCursorPosition = useMemo(() => group.cursorPosition.recieveCursorPosition.bind( group.cursorPosition ), [group]);


    // When this unmounts, remove the listeners
    useEffect(() => {
        return () => group.cursorPosition.removeListener(purpose);
    }, []);


    return {
        value,
        setCursorPosition,
        hover
    }

}