"use client";

import { ThermalRegistry } from "@labir/core";
import { useOpacityInput } from "@labir/react-bridge";
import { Input, InputProps } from "@heroui/react";

type OpacityInputProps = InputProps & {
  registry: ThermalRegistry;
};

/**
 * An input controlling opacity of a ThermalRegistry
 * @package `@labir/tailwind`
 */
export const OpacityInput: React.FC<OpacityInputProps> = ({
  registry,
  type = "range",
  ...props
}) => {
  const opacity = useOpacityInput(registry);

  return (
    <Input
      {...props}
      value={opacity.opacity.value.toString()}
      type={type}
      onChange={opacity.onChange}
      min={0}
      max={1}
      step={0.01}
    />
  );
};
