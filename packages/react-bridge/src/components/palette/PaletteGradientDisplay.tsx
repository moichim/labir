"use client";
import { ThermalPaletteType } from "@labir/core";
import React from "react";

/** Display a palette gradient and its name for the purpose of buttons & dropdowns */
export const PaletteGgradientDisplay: React.FC<
  ThermalPaletteType & {
    style?: React.CSSProperties;
  }
> = (props) => {
  return (
    <div
      style={{
        ...props.style,
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "50px",
          background: props.gradient,
          height: "10px",
          borderRadius: "5px",
        }}
      ></div>
      <div>{props.name}</div>
    </div>
  );
};
