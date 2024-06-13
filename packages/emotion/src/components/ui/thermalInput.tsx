import { Input, InputProps } from "@headlessui/react";
import { PaletteColor } from "../../theme/Variables";
import React, { FC } from "react";
import { Skin } from "../../theme/Skin";
import { useCss } from "../../context/CssContext";
import classNames from "classnames";

export type ThermalInputProps = InputProps & {
    variant?: PaletteColor
}

export const ThermalInput: FC<ThermalInputProps> = ({
    variant = "primary",
    className,
    ...props
}) => {

    useCss( "thermalUiInput", `
    .lrc__thermal-ui__input {
      border-radius: 5px;
      padding: ${Skin.gapValue(.3)} ${Skin.gapValue(.5)};

      &[type=range] {
        padding: 0;
        accent-color: ${Skin.colorValue( variant, 500 )};
        padding-top: ${Skin.gapValue(.5)};
      }
    }
  ` );

    return <Input {...props} className={classNames( className, "lrc__thermal-ui__input" )}/>

}