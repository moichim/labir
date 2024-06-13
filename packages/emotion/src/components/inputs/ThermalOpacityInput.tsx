import { ThermalRegistry } from "@labir/core";
import { useOpacityInput } from "@labir/react-bridge";
import React from "react";
import { ThermalInput, ThermalInputProps } from "../ui/thermalInput";

type ThermalOpacityInputProps = ThermalInputProps & {
  registry: ThermalRegistry;
};

export const ThermalOpacityInput: React.FC<ThermalOpacityInputProps> = ({
  registry,
  type = "number",
  ...props
}) => {
  const { onChange, opacity } = useOpacityInput(registry);

  return (
    <ThermalInput
      onChange={onChange}
      value={opacity.value}
      min={0}
      max={1}
      step={0.01}
      type={type}
      {...props}
    />
  );
};
