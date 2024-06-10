import React from "react"
import { ThermalProvider } from "@labir/react-bridge"

export const BaseComponent: React.FC<React.PropsWithChildren> = props => {
    return <ThermalProvider>{props.children}</ThermalProvider>
}