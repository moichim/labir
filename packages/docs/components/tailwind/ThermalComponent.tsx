"use client";

import { ThermalProvider } from "@labir/react-bridge";

export const ThermalComponent: React.FC<React.PropsWithChildren> = props => {
    return <ThermalProvider>
        {props.children}
    </ThermalProvider>
}