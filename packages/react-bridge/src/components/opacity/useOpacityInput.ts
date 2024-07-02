"use client";

import { ThermalRegistry } from "@labir/core";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";
import { useThermalRegistryOpacityDrive } from "../../properties/drives/useThermalRegistryOpacityDrive";
import { ChangeEventHandler } from "react";

export const useOpacityInput = (
    registry: ThermalRegistry
) => {

    const purpose = useThermalObjectPurpose( registry, "useOpacityInput", true );

    const opacity = useThermalRegistryOpacityDrive( registry, purpose );

    const onChange: ChangeEventHandler<HTMLInputElement> = ( event ) => {
        opacity.set( parseFloat( event.target.value ) );
    }

    return {
        onChange,
        opacity
    }

}