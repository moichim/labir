"use client";

import { PaletteId, ThermalPaletteType, ThermalPalettes } from "@labir/core";
import { useEffect, useMemo, useState } from "react";
import { useThermalContext } from "../../context/thermalManagerContext";

export const useThermalManagerPaletteDrive = (
    purpose: string
) => {

    const manager = useThermalContext();

    const [value, setValue] = useState<PaletteId>(manager.palette.value);

    const [palette, setPalette] = useState<ThermalPaletteType>(manager.palette.currentPalette);


    // Bind all the values to the local state
    useEffect(() => {

        manager.palette.addListener(purpose, newValue => {

            setValue(newValue);
            setPalette(manager.palette.currentPalette);

        });

        return () => manager.palette.removeListener(purpose);

    }, [manager, value, setValue, palette, setPalette]);


    // The setter
    const set = useMemo(() => manager.palette.setPalette.bind(manager.palette), [manager]);


    // When this unmounts, remove the listeners
    useEffect(() => {
        return () => manager.palette.removeListener(purpose);
    }, []);


    const availablePalettes = useMemo(() => {
        return ThermalPalettes
    }, []);


    return {
        value,
        palette,
        set,
        availablePalettes
    }

}