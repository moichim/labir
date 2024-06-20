import { Button, ButtonProps } from "@headlessui/react";
import { FC, forwardRef } from "react";
import { PaletteColor } from "../../theme/Variables";

import { css } from '@emotion/react';


export type ThermalButtonProps = ButtonProps & {
    variant?: PaletteColor
}

export const ThermalButton: FC<ThermalButtonProps> = forwardRef<HTMLElement, ThermalButtonProps>( ({
    // variant = "gray",
    ...props
}, ref) => {

    const titleStyle = css({
        boxSizing: 'border-box',
        padding: "4px 8px",
        //margin: "4px"
      })


    return <Button css={titleStyle} ref={ref} {...props} >{props.children}</Button>;
} );