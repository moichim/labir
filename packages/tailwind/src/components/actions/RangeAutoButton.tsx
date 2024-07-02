"use client";

import { ThermalRegistry } from "@labir/core";
import { useRangeButtonAuto } from "@labir/react-bridge";
import { Button, ButtonProps } from "@nextui-org/react";
import React from "react";

type RangeButtonAutoProps = ButtonProps & {
  registry: ThermalRegistry;
};

/**
 * Automatically adjust the range based on the current histogram
 * 
 * @package `@labir/tailwind`
 */
export const RangeAutoButton: React.FC<RangeButtonAutoProps> = ({
  registry,
  color = "default",
  variant = "bordered",
  ...props
}) => {
  const context = useRangeButtonAuto(registry);

  return (
    <Button
      {...props}
      onClick={context.onClick}
      color={color}
      variant={variant}
    >
      Automatic range
    </Button>
  );
};
