import { ThermalRegistry } from "@labir/core";
import { useOpacityInput } from "@labir/react-bridge";
import React, { FC } from "react";
import { ThermalInput, ThermalInputProps } from "../ui/thermalInput";
import { useCss } from "../../context/CssContext";
import { Skin } from "../../theme/Skin";

type ThermalOpacityInputProps = ThermalInputProps & {
  registry: ThermalRegistry;
};

export const ThermalOpacityInput: FC<ThermalOpacityInputProps> = ({
  registry,
  type="number",
  ...props
}) => {
  const { onChange, opacity } = useOpacityInput(registry);

  useCss( "button", `
    .button {
      background: yellow;
      padding: ${Skin.gapValue(.5)};
      margin: ${Skin.gapValue()}
    }
  ` );

  return (
    <ThermalInput
    className={"button"}
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
