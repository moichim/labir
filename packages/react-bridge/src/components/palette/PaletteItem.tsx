"use client";
import { ThermalPaletteType } from "@labir/core";
import React from "react";

export const PaletteItem: React.FC<
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
