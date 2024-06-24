import { ThermalRegistry } from "@labir/core";
import { useRangeButtonFull } from "@labir/react-bridge";
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
export const RangeFullButton: React.FC<RangeButtonAutoProps> = ({
  registry,
  color = "default",
  variant = "bordered",
  ...props
}) => {
  const context = useRangeButtonFull(registry);

  return (
    <Button
      {...props}
      onClick={context.onClick}
      color={color}
      variant={variant}
    >
      Full
    </Button>
  );
};
