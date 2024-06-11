/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Input, InputProps } from "@headlessui/react";
import { PaletteColor } from "../../theme/Variables";
import { FC } from "react";
import { Skin } from "../../theme/Skin";

export type ThermalInputProps = InputProps & {
    variant?: PaletteColor
}

export const ThermalInput: FC<ThermalInputProps> = ({
    variant = "primary",
    ...props
}) => {

    const style = css`
    
        border: 1px solid ${Skin.colorValue( "gray", 300 )};

        padding: .5rem 1rem;
        border-radius: 5px;
        display: inline-block;

        transition: all .15s ease-in-out;

        &:focus {
            border-color: ${Skin.colorValue( variant, 500 )};
            outline: 0;
        }

        &[type=range] {
            accent-color: ${Skin.colorValue( variant, 400 )};
        }
    
    `;

    return <Input {...props} css={style} />

}