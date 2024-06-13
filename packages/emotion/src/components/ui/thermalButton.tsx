import { Button, ButtonProps } from "@headlessui/react";
import React, { FC, forwardRef } from "react";
import { PaletteColor } from "../../theme/Variables";
import { Skin } from "../../theme/Skin";
import { useCss } from "../../context/CssContext";
import classNames from "classnames";


export type ThermalButtonProps = ButtonProps & {
    variant?: PaletteColor
}

export const ThermalButton: FC<ThermalButtonProps> = forwardRef<HTMLElement, ThermalButtonProps>( ({
    variant = "gray",
    ...props
}, ref) => {

    useCss( "thermalUiButton", `
    
        .lrc__thermal-ui__button {
            position: relative;
            background: ${Skin.colorValue( variant, 200 )};
            border: 1px solid ${Skin.colorValue( variant, 300 )};
            padding: ${Skin.gapValue(.3)} ${Skin.gapValue(.5)};
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 3px 3px 10px ${Skin.colorValue( "gray", 200 )};

            transition: all .2s ease-in-out;

            &:hover {
                background: ${Skin.colorValue( variant, 300 )};
                border-color: ${Skin.colorValue( variant, 500 )};
            }
        }

        .lrc-dark .lrc__thermal-ui__button {
            color: white;
            box-shadow: 3px 3px 10px ${Skin.colorValue( "gray", 50 )};
        }

    ` );


    return <Button ref={ref} {...props} className={classNames( "lrc__thermal-ui__button" )}>{props.children}</Button>;
} );