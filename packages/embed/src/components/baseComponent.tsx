import React from "react";
import { ThermalProvider } from "@labir/react-bridge";
import { CssContextProvider } from "@labir/emotion";
import { ThermalManager } from "@labir/core";

type BaseComponentProps = React.PropsWithChildren & {
    appRoot: Element,
    externalManagerinstance?: ThermalManager
}

export const BaseComponent: React.FC<BaseComponentProps> = (props) => {
  return (
    <CssContextProvider appRoot={props.appRoot}>
      <ThermalProvider externalManagerInstance={props.externalManagerinstance}>{props.children}</ThermalProvider>
    </CssContextProvider>
  );
};
