import { Input, InputProps } from "@headlessui/react";
import { ThermalRegistry } from "@labir/core";
import React, { ChangeEventHandler } from "react";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";
import { useThermalRegistryOpacityDrive } from "../../properties/drives/useThermalRegistryOpacityDrive";

type OpacityInputHeadlessProps = InputProps & {
    registry: ThermalRegistry
}

export const OpacityInputHeadless: React.FC<OpacityInputHeadlessProps> = ({
    registry,
    type = "range",
    min=0,
    max=1,
    step=0.1,
    ...props
}) => {

    const purpose = useThermalObjectPurpose( registry, "OpacityInputHeadless", true );

    const opacity = useThermalRegistryOpacityDrive( registry, purpose );

    const onChange: ChangeEventHandler<HTMLInputElement> = ( event ) => {
        opacity.set( parseFloat( event.target.value ) );
    }


    return <Input 
        {...props}
        type={type}
        min={min}
        max={max}
        step={step}
        value={ opacity.value }
        onChange={onChange}
    />

}