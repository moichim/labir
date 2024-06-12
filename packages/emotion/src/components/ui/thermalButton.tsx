import { Button, ButtonProps } from "@headlessui/react";
import React, { FC } from "react";
import { PaletteColor } from "../../theme/Variables";
import { Skin } from "../../theme/Skin";
import { useCss } from "../../context/CssContext";
import classNames from "classnames";


export type ThermalButtonProps = ButtonProps & {
    variant?: PaletteColor
}

export const ThermalButton: FC<ThermalButtonProps> = ({
    variant = "gray",
    className,
    ...props
}) => {

    useCss( "thermalUiButton", `
    
        .lrc__thermal-ui__button {
            background: ${Skin.colorValue( variant, 100 )};
            border: 0;
            padding: ${Skin.gapValue(.5)} ${Skin.gapValue(.75)};
            cursor: pointer;

            &:hover {
                background: ${Skin.colorValue( variant, 300 )};
            }
        }

    ` );


    return <Button {...props} className={classNames( "lrc__thermal-ui__button" )}>{props.children}</Button>;
}