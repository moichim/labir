/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ThermalRegistry } from "@labir/core";
import { useHistogramResolutionInput, useOpacityInput } from "@labir/react-bridge";
import { FC } from "react";
import { ThermalInput, ThermalInputProps } from "../ui/thermalInput";

type ThermalHistogramResolutionInputProps = ThermalInputProps & {
  registry: ThermalRegistry;
};

export const ThermalHistogramResolutionInput: FC<ThermalHistogramResolutionInputProps> = ({
  registry,
  type="number",
  ...props
}) => {
  const { onChange, internal, onBlur } = useHistogramResolutionInput(registry);

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
