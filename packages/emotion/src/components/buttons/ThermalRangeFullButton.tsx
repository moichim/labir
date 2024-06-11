/** @jsx jsx */
import { jsx } from "@emotion/react";

import { ThermalRegistry } from "@labir/core";
import { useRangeButtonFull } from "@labir/react-bridge";
import { FC } from "react";
import { ThermalButton, ThermalButtonProps } from "../ui/thermalButton";

type ThermalRangeAutoButtonProps = ThermalButtonProps & {
  registry: ThermalRegistry;
};

export const ThermalRangeFullButton: FC<ThermalRangeAutoButtonProps> = ({
  registry,
  ...props
}) => {
  const { onClick } = useRangeButtonFull(registry);

  return (
    <ThermalButton onClick={onClick} {...props}>
      Plný teplotní rozsah
    </ThermalButton>
  );
};
