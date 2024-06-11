/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Button, ButtonProps } from "@headlessui/react";
import { FC } from "react";
import { PaletteColor } from "../../theme/Variables";
import { Skin } from "../../theme/Skin";


export type ThermalButtonProps = ButtonProps & {
    variant?: PaletteColor
}

export const ThermalButton: FC<ThermalButtonProps> = ({
    variant = "primary",
    ...props
}) => {

    const styles = css`

        cursor: pointer;
    
        background: ${Skin.colorValue( variant, 300 )};

        border: 0;
        padding: .5rem 1rem;
        
        border-radius: 5px;

        transition: all .1s ease-in-out;

        &:hover {
            background: ${Skin.colorValue( variant, 300 )};
            box-shadow: 0px 0px 5px ${Skin.colorValue( "primary", 500 )};
        }
    
    `;

    return <Button css={styles} {...props}>{props.children}</Button>;
}