import { Button, ButtonProps } from "@headlessui/react"
import { ThermalRegistry } from "@labir/core"
import { useRangeButtonAuto } from "@labir/react-bridge"
import { FC } from "react"

/** @jsx jsx */
import { jsx, Global, ClassNames } from "@emotion/react";
import { ThermalButton, ThermalButtonProps } from "../ui/thermalButton";

type ThermalRangeAutoButtonProps = ThermalButtonProps & {
    registry: ThermalRegistry
}

export const ThermalRangeAutoButton: FC<ThermalRangeAutoButtonProps> = ({registry, ...props}) => {
    const { onClick } = useRangeButtonAuto( registry );

    return <ThermalButton onClick={onClick} {...props}>
        Automatický teplotní rozsah
    </ThermalButton>
}