import { Input, InputProps } from "@headlessui/react";
import { PaletteColor } from "../../theme/Variables";
import React, { FC } from "react";
import { Skin } from "../../theme/Skin";

export type ThermalInputProps = InputProps & {
    variant?: PaletteColor
}

export const ThermalInput: FC<ThermalInputProps> = ({
    variant = "primary",
    ...props
}) => {


    return <Input {...props} />

}