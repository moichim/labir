import { ThermalRegistry } from "@labir/core";
import { useHistogramResolutionInput, useOpacityInput } from "@labir/react-bridge";
import React, { FC } from "react";
import { ThermalInput, ThermalInputProps } from "../ui/thermalInput";
import { useCss } from "../../context/CssContext";

type ThermalHistogramResolutionInputProps = ThermalInputProps & {
  registry: ThermalRegistry;
};

export const ThermalHistogramResolutionInput: FC<ThermalHistogramResolutionInputProps> = ({
  registry,
  type="number",
  ...props
}) => {
  const { onChange, internal, onBlur } = useHistogramResolutionInput(registry);

  useCss( "button", `
    .button {
      background: red;
      padding: 50px;
    }
  ` );

  return (
    <ThermalInput
      onChange={onChange}
      onBlur={onBlur}
      value={internal}
      min={0}
      max={200}
      step={1}
      type={type}
      {...props}
    />
  );
};
