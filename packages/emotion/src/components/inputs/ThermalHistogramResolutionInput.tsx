import { ThermalRegistry } from "@labir/core";
import { useHistogramResolutionInput } from "@labir/react-bridge";
import React from "react";
import { useCss } from "../../context/CssContext";
import { ThermalInput, ThermalInputProps } from "../ui/thermalInput";

type ThermalHistogramResolutionInputProps = ThermalInputProps & {
  registry: ThermalRegistry;
};

export const ThermalHistogramResolutionInput: React.FC<ThermalHistogramResolutionInputProps> = ({
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
