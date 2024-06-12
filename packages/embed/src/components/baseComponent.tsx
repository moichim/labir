import React from "react";
import { ThermalProvider } from "@labir/react-bridge";
import { CssContextProvider } from "@labir/emotion";

export const BaseComponent: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <CssContextProvider>
      <ThermalProvider>{props.children}</ThermalProvider>
    </CssContextProvider>
  );
};
