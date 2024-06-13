import React from "react";
import { ThermalProvider } from "@labir/react-bridge";
import { CssContextProvider } from "@labir/emotion";
// import { CssContextProvider } from "../../../emotion/src/context/CssContext";

type BaseComponentProps = React.PropsWithChildren & {
    appRoot: Element
}

export const BaseComponent: React.FC<BaseComponentProps> = (props) => {
  return (
    <CssContextProvider appRoot={props.appRoot}>
      <ThermalProvider>{props.children}</ThermalProvider>
    </CssContextProvider>
  );
};
