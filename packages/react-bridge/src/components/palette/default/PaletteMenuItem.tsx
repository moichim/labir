/** @jsx jsx */

import { Button } from "@headlessui/react"
import { ThermalPaletteType } from "@labir/core"
import { PaletteItem } from "../PaletteItem"

import { css, jsx } from '@emotion/react'

export type PaletteMenuProps = {
    onClick: () => void,
    focus: boolean,
    disabled: boolean,
    close: () => void,
    palette: ThermalPaletteType,
    active: boolean

}

export const PaletteMenuItem: React.FC<PaletteMenuProps> = props => {

    const style = css`

        margin: 0;
        padding: 1rem;
        border: 0;
        background: 0;
        cursor: pointer;

        :hover {
            background: red;
        }

        &.focused {
            color: green;
        }
    
    `;

    return <Button
        onClick={props.onClick}
        css={style}
        className={props.active ? "focused" : "unfocused"}
    >
        <PaletteItem { ...props.palette } />
    </Button>
}